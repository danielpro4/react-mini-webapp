import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const AppTitle = ({ title }) => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/home/all')
    }

    return (
        <h3 className="app-title" onClick={handleClick}>
            {title}
        </h3>
    )
}

AppTitle.propTypes = {
    title: PropTypes.string,
}

export default AppTitle
