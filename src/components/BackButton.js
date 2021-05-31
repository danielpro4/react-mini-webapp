import React from 'react'
import PropTypes from 'prop-types'

const BackButton = ({ title, ...rest }) => {

    return (
        // eslint-disable-next-line
        <a className='back-button' role='button' {...rest}>
            {title}
        </a>
    )
}

BackButton.propTypes = {
    title: PropTypes.string,
}

export default BackButton
