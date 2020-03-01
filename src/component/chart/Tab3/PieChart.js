import React from "react";
import Chart from "react-apexcharts";
class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44,4],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        woneValue:'',
        lossValue:''

      
      
      };
    }


  getp=()=>{
    console.log(this.state)
  }
  

    render() {
      return (
        

            <div id="chart">
              {console.log(this.getp())}
              {console.log(this.state)}
                <Chart options={this.state.options} series={this.state.series} type="donut" />
            </div>


      );
    }
  }
  export default PieChart