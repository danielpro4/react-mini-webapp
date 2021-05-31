import http from 'utils/http'

const RepositoryService = {
    getRepositories: (options, pageSize = 20) => {
        const config = {
            params: {
                ...options,
                per_page: pageSize,
            },
        }

        return http.get('/search/repositories', config)
    },
    getStatsByWeek: (owner, repo) => {
        const config = {}

        return http.get(`/repos/${owner}/${repo}/stats/commit_activity`, config)
    },
}

export default RepositoryService
