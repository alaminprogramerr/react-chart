import React, { Component } from 'react'
import ColumChart from './ColumChart'
import PieChartTop from './PieChartTop'
import UpdateDonue from './UpdateDonue'
import PieChart1Line from './PieChart1Line'
 class Tab4Viewr extends Component {


    render() {
        return (
            <div>
                <div className="d-flex">
                    <div  className="col-md-8">
                        <ColumChart/>
                    </div>
                    <div className="col-md-4">    
                        <UpdateDonue/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-md-3">
                        <PieChartTop/>
                    </div>
                    <PieChart1Line/>
                    <PieChart1Line/>
                </div>
            </div>
        )
    }
}

export default Tab4Viewr
