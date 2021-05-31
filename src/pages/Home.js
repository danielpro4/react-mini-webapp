import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import RepositoryService from 'services/Repository'
import RepositoryChart from 'components/RepositoryChart'
import LanguageFilter from 'components/LanguageFilter'
import Loader from 'components/Loader'
import Config, { FILTERS_LIST } from 'constants/config'

const DEFAULT_QUERY = 'is:public stars:>15'

const HomePage = ({ history, match }) => {
    const [loading, setLoading] = useState(false)
    const [repositories, setRepositories] = useState([])
    const { params } = match

    const fetchRepositories = useCallback(async () => {
        let q = DEFAULT_QUERY

        if (params.lang !== 'all') {
            q = `language:${params.lang}`
        }

        const options = {
            q: q,
            sort: 'stars',
            order: 'desc',
        }

        setLoading(true)
        const response = await RepositoryService.getRepositories(options, Config.pageSize)

        if (response?.data) {
            setRepositories(response.data.items)
        }

        setLoading(false)
    }, [params])

    useEffect(() => {
        fetchRepositories()
    }, [fetchRepositories])

    const handleFilterChange = (value) => {
        history.replace(`/home/${value}`)
    }

    const handleClick = (path) => {
        history.push(`/details/${path}`)
    }

    return (
        <div className='home'>
            <div>
                The top {Config.pageSize} repositories by stars
                {params.lang !== 'all' ? ` for language:${params.lang}` : ''}
            </div>
            <LanguageFilter
                className='home-filters'
                options={FILTERS_LIST}
                value={params.lang}
                onChange={handleFilterChange}
            />
            {loading ? (
                <Loader />
            ) : (
                <RepositoryChart
                    className='home-chart'
                    data={repositories}
                    onClick={handleClick}
                />
            )}
        </div>
    )
}

HomePage.propTypes = {
    name: PropTypes.string,
}

export default HomePage
