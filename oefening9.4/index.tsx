import * as React from 'react';
import { View } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TableScreen() {
  const router = useRouter();

  const data = [
    { id: 1, col2: 'Lorem ipsum', col3: 'Dolor sit amet' },
    { id: 2, col2: 'Consectetur', col3: 'Adipiscing elit' },
    { id: 3, col2: 'Sed do', col3: 'Eiusmod tempor' },
    { id: 4, col2: 'Incididunt', col3: 'Ut labore' },
    { id: 5, col2: 'Et dolore', col3: 'Magna aliqua' },
  ];

  return (
    <View style={{ padding: 16 }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Order name</DataTable.Title>
          <DataTable.Title>Ordered by</DataTable.Title>
          <DataTable.Title>ActionOrder </DataTable.Title>
        </DataTable.Header>

        {data.map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.col2}</DataTable.Cell>
            <DataTable.Cell>{item.col3}</DataTable.Cell>
            <DataTable.Cell>
              <Button
                mode="contained"
                onPress={() =>
                  router.push({
                    pathname: '/detail',
                    params: { id: item.id },
                  })
                }
              >
                View
              </Button>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}