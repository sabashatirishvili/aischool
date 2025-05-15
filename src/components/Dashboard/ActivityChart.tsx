import { LineChart } from '@mantine/charts';
import { data } from './data';
import { Paper } from '@mantine/core';

export default function ActivitiyChart() {
  return (
    <Paper w="600px" p="lg" withBorder bg="gray.1" radius="xl">
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Activity', color: 'indigo.6' },
        ]}
        curveType="bump"
        withDots={false}
      />
    </Paper>
  );
}