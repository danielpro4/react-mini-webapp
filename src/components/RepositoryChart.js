import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'utils/colors'
import ChartComponent from './ChartComponent'

const RepositoryChart = ({ data, onClick = () => {} }) => {
    const getData = (data) => {
        const labels = data.map((item) => item.full_name)
        const dataset = data.map(({ stargazers_count }) => stargazers_count)
        return {
            labels: labels,
            datasets: [
                {
                    label: 'Stars',
                    data: dataset,
                    backgroundColor: Colors.backgroundColor,
                    borderColor: Colors.borderColor,
                    borderWidth: 1,
                },
            ],
        }
    }

    return (
        <div className="repository-chart">
            <ChartComponent
                id="repositories"
                onClick={onClick}
                data={getData(data)}
            />
        </div>
    )
}

RepositoryChart.propTypes = {
    data: PropTypes.array,
    onClick: PropTypes.func,
}

export default RepositoryChart
