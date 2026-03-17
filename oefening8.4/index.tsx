import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Text } from 'react-native-paper';
import { DatePickerInput, enGB, registerTranslation } from "react-native-paper-dates";
import { SafeAreaView } from "react-native-safe-area-context";
import z from "zod";

registerTranslation('en-GB', enGB)
export default function Index() {

  function calculateDateStats(start: Date, end: Date) {
    let totalDays = 0;
    let weekdays = 0;
    let weekends = 0;

    const current = new Date(start);

    while (current <= end) {
      totalDays++;
      const day = current.getDay();

      if (day === 0 || day === 6) {
        weekends++;
      } else {
        weekdays++;
      }

      current.setDate(current.getDate() + 1);
    }

    return { totalDays, weekdays, weekends };
  }

  const startOfDay = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const dateRangeSchema = z
    .object({
      startDate: z.date(),
      endDate: z.date(),
    })
    .superRefine((data, ctx) => {
      if (!data.startDate || !data.endDate) return;

      if (startOfDay(data.endDate) < startOfDay(data.startDate)) {
        ctx.addIssue({
          code: "custom",
          message: "End date must be equal to or after start date",
          path: ["endDate"]
        });
      }
    });
  const {
    control,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(dateRangeSchema), defaultValues: { startDate: new Date(), endDate: new Date() },
    mode: "onChange"
  });


  const [startDate, endDate] = watch(["startDate", "endDate"]);
  React.useEffect(() => {
    trigger();
  }, [startDate, endDate]);
  const stats = React.useMemo(() => {
    if (!isValid || !startDate || !endDate) {
      return null;
    } else {
      return calculateDateStats(startDate!, endDate!);
    }
  }, [isValid, startDate, endDate]);

  return (
    <SafeAreaView>
      <View>
        <Controller
          control={control}
          name="startDate"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePickerInput
              locale="en-GB"
              label="Start Date"
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              inputMode="start"
            />
          )}
        />
        <Controller
          control={control}
          name="endDate"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePickerInput
              locale="en-GB"
              label="End Date"
              onBlur={onBlur}
              value={value}
              onChange={onChange}
              inputMode="end"
            />
          )}
        />
        {errors.endDate && (<Text>{errors.endDate?.message}</Text>)}
        {isValid && stats && (
          <View>
            <Text>Summary</Text>
            <Text>Total Days: {stats.totalDays}</Text>
            <Text>Weekdays: {stats.weekdays}</Text>
            <Text>Weekends: {stats.weekends}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}