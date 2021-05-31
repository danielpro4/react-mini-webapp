import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LanguageFilter = ({
    value: input,
    options = [],
    onChange = () => {},
}) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(input)
    }, [input])

    const handleChange = ({ target }) => {
        if (target?.value) {
            setValue(target?.value)
            onChange(target.value.toLowerCase())
        }
    }

    return (
        <div className="language-filter">
            <select value={value} onChange={handleChange}>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

LanguageFilter.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
}

export default LanguageFilter
