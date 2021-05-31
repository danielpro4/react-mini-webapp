import React from 'react'
import PropTypes from 'prop-types'

const NoMatch = ({ redirectTo = '/q' }) => {
    return (
        <section
            style={{
                backgroundColor: 'white',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, no pudimos encontrar lo que buscas</p>
            <a href={redirectTo}>Ir al home</a>
        </section>
    )
}

NoMatch.propTypes = {
    redirectTo: PropTypes.string,
}

export default NoMatch
