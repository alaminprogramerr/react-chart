import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  const data = [
    {
      name: 'Page A',kv:8783, nv:7621, uv: 4000,tv:1244, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B',kv:3248, nv:9534, uv: 3000,tv:7244, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C',kv:7823, nv:2873, uv: 2000,tv:1584, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D',kv:8953, nv:2873, uv: 2780,tv:6294, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E',kv:2883, nv:8343, uv: 1890,tv:9844, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F',kv:7843, nv:7383, uv: 2390,tv:2444, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G',kv:7380, nv:6844, uv: 3490,tv:1894, pv: 4300, amt: 2100,
    },
  ];
  
  class ChartOne extends React.Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
      return (
          <div>
              
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="tv" stroke="#000" />
            <Line type="monotone" dataKey="kv" stroke="#f023ff" />
            <Line type="monotone" dataKey="nv" stroke="#f2e2e2" />
            </LineChart>
          </div>
      );
    }
  }
  
  export default ChartOne