import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'utils/colors'
import ChartComponent from './ChartComponent'

const StatsChart = ({ data }) => {
    const getData = (data = []) => {
        const labels = data.map((item) => item.week)
        const dataset = data.map((item) => item.total)
        return {
            labels: labels,
            datasets: [
                {
                    label: 'Commits Activity',
                    data: dataset,
                    backgroundColor: Colors.backgroundColor,
                    borderColor: Colors.borderColor,
                    borderWidth: 1,
                },
            ],
        }
    }

    return (
        <div className="stats-chart">
            <ChartComponent id="stats" type='line' data={getData(data)} />
        </div>
    )
}

StatsChart.propTypes = {
    data: PropTypes.array,
}

export default StatsChart
