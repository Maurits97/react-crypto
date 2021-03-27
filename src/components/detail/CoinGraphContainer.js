import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHistory, fetchHistoryMonths } from '../../redux'


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
    let history = this.props.historyData
    let historyDataPrices = this.props.historyData.historyData.prices

    const changeHistory = () => {
      var historyMonths = document.getElementById("history-months")
      var selectedMonth = historyMonths.options[historyMonths.selectedIndex].value

      if (isNaN(selectedMonth)) {
        //nothing
      } else {
        selectedMonth = Number(selectedMonth)
      }

      this.props.fetchHistoryMonths(selectedMonth)
      this.props.fetchHistory()
    }

    let newData = [];
    function getChartData(){
      for (let i=0;i < historyDataPrices.length; i++){
        newData.push({
          date: new Date(historyDataPrices[i][0]).toISOString(),
          value: historyDataPrices[i][1]
        })
      }
    }

    const getLength = () => {
      return newData[0].value.toFixed(3).toString().length
    }

    const toolTip = () => {
      if (window.innerWidth > 768) { //table breakpoint
        return <Tooltip content={<CustomTooltip />}/>
      } else {
        return ''
      }
    }

    return this.props.historyData.loading ? (
      <div className="graph">
        <p>Graph is loading...</p>
      </div>
      ) : (
      <div className="graph">
        <h2 className="graph__header">Historical graph</h2>

        <select className="change-history" name="coinHistory" defaultValue={history.historyMonths} id="history-months" onChange={() => changeHistory()}>
          <option value={1}>1 day</option>
          <option value={7}>1 week</option>
          <option value={14}>2 weeks</option>
          <option value={30}>1 month</option>
          <option value={90}>3 months</option>
          <option value={365}>1 year</option>
          <option value="max">max</option>
        </select>

        <ResponsiveContainer width="100%" height={300} onLoad={`${getChartData()}`}>
          <AreaChart data={newData}>  
            <Area dataKey="value" stroke="#16C784" fill="white" strokeWidth={3}/>
  
            <XAxis dataKey="date" axisLine={false} tickLine={false} tickFormatter={str => {
              const date = parseISO(str);
              
              return format(date, "MMM, d")
            }}/>
  
            <YAxis dataKey="value" domain={['auto', 'auto']} width={getLength() * 12} axisLine={false} tickLine={false} tickCount={5} tickFormatter={number => `€${number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 3})}`}/>
            
            {toolTip()} {/* tooltip function = tooltip doesnt show on mobile */}
            
            <CartesianGrid opacity={0.3} vertical={false}/>
  
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

function CustomTooltip({active, payload, label}){
  if (active) {
    return <div className="tooltip">
      <h4>{format(parseISO(label), "hh:mm, eeee, d MMM, y")}</h4>
      <p>€{payload[0].value.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 3})}</p>
    </div>
  }
  return null
}

const mapStateToProps = state => {
  return {
      history: state.history,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHistory: () => dispatch(fetchHistory()),
    fetchHistoryMonths: (months) => dispatch(fetchHistoryMonths(months))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinGraphContainer)