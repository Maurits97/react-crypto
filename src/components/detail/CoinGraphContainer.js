import React, { Component } from 'react'

import { 
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid
} from "recharts";
import {format, parseISO} from "date-fns";

class CoinGraphContainer extends Component {
  render() {
    let historyDataPrices = this.props.historyData.historyData.prices
    
    let newData = [];
    function getChartData(){
      for (let i=0;i < historyDataPrices.length; i++){
        newData.push({
          date: new Date(historyDataPrices[i][0]).toISOString().substr(0, 10), //somehow the date is reversed, so i took the [total length] minus [i]
          value: historyDataPrices[i][1]
        })
      }
    }

    const getLength = () => {
      return newData[0].value.toFixed(3).toString().length
    }
    return this.props.historyData.loading ? (
      <div className="graph">
        <p>Graph is loading...</p>
      </div>
      ) : (
      <div className="graph">
        <h2 className="graph__header">Historical graph: 30 days</h2>
        <ResponsiveContainer width="100%" height={300} onLoad={`${getChartData()}`}>
          <AreaChart data={newData}>  
            <Area dataKey="value" stroke="#16C784" fill="white" strokeWidth={3}/>
  
            <XAxis dataKey="date" axisLine={false} tickLine={false} tickFormatter={str => {
              const date = parseISO(str);
              
              return format(date, "MMM, d")
            }}/>
  
            <YAxis dataKey="value" width={getLength() * 12} axisLine={false} tickLine={false} tickCount={6} tickFormatter={number => `€${number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 3})}`}/>
  
            <Tooltip />
  
            <CartesianGrid opacity={0.3} vertical={false}/>
  
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}


export default CoinGraphContainer;