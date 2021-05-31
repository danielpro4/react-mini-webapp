import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import RepositoryService from 'services/Repository'
import StatsChart from 'components/StatsChart'
import Loader from 'components/Loader'
import BackButton from 'components/BackButton'

const Details = ({ history, match }) => {
    const [loading, setLoading] = useState(false)
    const [stats, setStats] = useState([])

    const prepareData = (data, count) => {
        return data.slice(52 - count).map((item) => ({
            week: dayjs.unix(item.week).format('DD-MM-YYYY'),
            total: item.total,
        }))
    }

    const fetchStats = useCallback(async () => {
        setLoading(true)
        const { owner, repo } = match.params
        const response = await RepositoryService.getStatsByWeek(owner, repo)

        if (Array.isArray(response?.data)) {
            const all = prepareData(response.data, 10)
            setStats(all)
        }

        setLoading(false)
    }, [match])

    useEffect(() => {
        fetchStats()
    }, [fetchStats])

    if (loading) {
        return <Loader />
    }

    return (
        <div className='Details'>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <span>
                    The last 10 weeks of commit activity on the {match.params.repo} repository
                </span>
                <BackButton title='Go back' onClick={() => history.goBack()} />
            </div>

            <StatsChart data={stats} />
        </div>
    )
}

Details.propTypes = {
    name: PropTypes.string,
}

export default Details
