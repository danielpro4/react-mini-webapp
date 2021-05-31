import axios from 'axios'

const createInstance = () => {
    const config = {
        baseURL: 'https://api.github.com',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.v3+json',
        },
    }

    const http = axios.create(config)

    http.interceptors.response.use(
        (response) => {
            return {
                status: response.status,
                data: response.data,
            }
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return http
}

export default createInstance()
