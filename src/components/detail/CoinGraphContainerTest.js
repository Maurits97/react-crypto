import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchHistory } from '../../redux'
import { 
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid
} from "recharts";
import {format, parseISO, subDays} from "date-fns";

// const data = [];
// for (let num = 30; num >= 0; num--){
//   data.push({
//     date: subDays(new Date(), num).toISOString().substr(0, 10),
//     value: 1 + Math.random()
//   })
// }

function CoinGraphContainerTest({fetchHistory, history}) {
  let historyDataPrices = history.historyData.prices
  //make function that makes object from data array: date(format date also) & value
  
  let newData = [];
  function getChartData(){
    for (let i=0;i < historyDataPrices.length; i++){
      console.log(subDays(new Date(), historyDataPrices.length - i).toISOString().substr(0, 10))
      console.log(historyDataPrices[i][1])
      newData.push({
        date: new Date(historyDataPrices[i][0]).toISOString().substr(0, 10), //somehow the date is reversed, so i took the [total length] minus [i]
        value: historyDataPrices[i][1]
      })
    }
  }

  const getLength = () => {
    return newData[0].value.toFixed(3).toString().length
  }

  useEffect(() => {
    fetchHistory()
  }, [fetchHistory]) 
  return history.loading ? (
    <div className="graph">
      <p>Graph is loading...</p>
    </div>
    ) :(
    <div className="graph">
      <h2 className="graph__header">Historical graph: 30 days</h2>
      <ResponsiveContainer width="100%" height={400} onLoad={`${getChartData()}`}>
        <AreaChart data={newData}>
          {/* <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16C784" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#16C784" stopOpacity={0.05} />
            </linearGradient>
          </defs> */}

          <Area dataKey="value" stroke="#16C784" fill="white" strokeWidth={3}/>

          <XAxis dataKey="date" axisLine={false} tickLine={false} tickFormatter={str => {
            const date = parseISO(str);
            
            return format(date, "MMM, d")
          }}/>

          <YAxis dataKey="value" width={getLength() * 12} axisLine={false} tickLine={false} tickCount={8} tickFormatter={number => `€${number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 3})}`}/>

          <Tooltip />

          <CartesianGrid opacity={0.3} vertical={false}/>

        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      history: state.history,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHistory: () => dispatch(fetchHistory())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinGraphContainerTest)