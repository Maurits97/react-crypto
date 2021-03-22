import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchHistory } from '../../redux'
import { Line } from 'react-chartjs-2';

function CoinGraphContainer({fetchHistory, history}) {

  useEffect(() => {
    fetchHistory()
  }, [fetchHistory]) 
  return history.loading ? (
    <div className="graph">
      <p>Graph is loading...</p>
    </div>
    ) :(
    <div className="graph">
      <Line onLoad={setGraphData(history)}
        data={chartData}
        options={options}
      />
      <p>{history.historyData.prices[0][1]}</p>
    </div>
  )
}

let chartData;
let options;

const dateOptions = {year: 'numeric', month: '2-digit', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};

function setGraphData(history){
  let label = [];
  let data = [];
  for (let i=0;i< history.historyData.prices.length; i++) {
    let date = new Date(history.historyData.prices[i][0])
    
    label.push(date.toLocaleDateString("EUR", dateOptions));
    data.push(history.historyData.prices[i][1])
  }

  chartData = {
    labels: label,
    datasets: [
      {
        label: 'Price',
        data: data,
        fill: false,
        backgroundColor: 'rgb(22, 199, 132)',
        borderColor: 'rgb(22, 199, 132)',
      }
    ]
  }
  options = {
    elements: {
      point:{
          radius: 0
      }
  },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(CoinGraphContainer)