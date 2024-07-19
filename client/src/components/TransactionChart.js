import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
const data = [
  { range: '0-100', min: 40, max: 80 },
  { name: 'B', min: 30, max: 70 },
  { name: 'C', min: 20, max: 60 },
  { name: 'D', min: 50, max: 90 },
  { name: 'E', min: 60, max: 100 }
];
const TransactionChart = () => {
  return (
    <ResponsiveContainer width="50%" height={400}>
    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="max" fill="skyblue" />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default TransactionChart