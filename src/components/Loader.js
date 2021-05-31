import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({ message = 'Cargando...' }) => {
    return <div>{message}</div>
}

Loader.propTypes = {
    title: PropTypes.string,
}

export default Loader
