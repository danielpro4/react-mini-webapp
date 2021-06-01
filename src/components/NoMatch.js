import React from 'react'
import PropTypes from 'prop-types'


const NoMatch = ({ redirectTo = '/home/all' }) => {
    return (
        <section
            style={{
                backgroundColor: 'white',
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h2>Page not found.</h2>
            <p>We couldn't find you are looking for.</p>
            <a href={redirectTo}>Go to home</a>
        </section>
    )
}

NoMatch.propTypes = {
    redirectTo: PropTypes.string,
}

export default NoMatch
