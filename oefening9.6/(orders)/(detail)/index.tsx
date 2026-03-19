import { useLayoutEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useNavigation } from 'expo-router';

export default function HomeScreen() {
   const navigation = useNavigation();

   useLayoutEffect(() => {
      navigation.setOptions({
         title: '',
         headerRight: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
               <Pressable onPress={() => router.back()} style={{ marginRight: 15 }}>
                  <Text>Save</Text>
               </Pressable>
               <Pressable onPress={() => router.back()} style={{ marginRight: 15 }}>
                  <Text>Cancel</Text>
               </Pressable>
               <Pressable onPress={() => router.back()} style={{ marginRight: 15 }}>
                  <Text>Reopen</Text>
               </Pressable>
            </View>
         ),
      });
   });
   return (
      <View>
         <Text>ORDER DETAIL SCREEN</Text>
      </View>
   );
}