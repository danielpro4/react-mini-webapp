import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js/auto'

const ChartComponent = ({
    id,
    data,
    type = 'bar',
    onClick = () => {},
    height = 480,
    width = 640,
    ...rest
}) => {
    const canvas = useRef(null)
    const [chart, setChart] = useState(null)

    const createChart = (data) => {
        if (!canvas.current) {
            return
        }

        const chart = new Chart(canvas.current, {
            data: data,
            type: type,
        })

        setChart(chart)
    }

    const destroyChart = () => {
        if (chart) {
            chart.destroy()
        }
    }

    useEffect(() => {
        destroyChart()

        createChart(data)

        return () => destroyChart()
        // eslint-disable-next-line
    }, [data])

    //- console.log(data)
    const handleClick = (event) => {
        if (!chart) {
            return false
        }

        const element = chart.getElementsAtEventForMode(
            event,
            'nearest',
            { intersect: true },
            false
        )

        if (Array.isArray(element) && element.length) {
            const { index, datasetIndex } = element[0]
            const path = chart.data.labels[index]

            onClick(path, index, datasetIndex)
        }
    }

    return (
        <canvas
            {...rest}
            id={id}
            height={height}
            width={width}
            ref={canvas}
            className="chart-canvas"
            role="img"
            onClick={handleClick}
        />
    )
}

ChartComponent.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    data: PropTypes.object,
    onClick: PropTypes.func,
}

export default ChartComponent
