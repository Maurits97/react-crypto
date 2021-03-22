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

const data = [];
for (let num = 30; num >= 0; num--){
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random()
  })
}

function CoinGraphContainerTest({fetchHistory, history}) {
  //const newData = history.historyData.prices
  //make function that makes object from data array: date(format date also) & value

  useEffect(() => {
    fetchHistory()
  }, [fetchHistory]) 
  return history.loading ? (
    <div className="graph">
      <p>Graph is loading...</p>
    </div>
    ) :(
    <div className="graph">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#2451B7" fill="url(#color)"/>

          <XAxis dataKey="date" axisLine={false} tickLine={false} tickFormatter={str => {
            const date = parseISO(str);
            
            if (date.getDate() % 7 === 0){
              return format(date, "MMM, d")
            }
            return ""
          }} interval={0}/>

          <YAxis dataKey="value" axisLine={false} tickLine={false} tickCount={8} tickFormatter={number => `€${number.toFixed(2)}`}/>

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