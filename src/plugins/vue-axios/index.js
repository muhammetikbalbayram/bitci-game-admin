import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.interceptors.request.use(config => {
  return config
})

axiosInstance.interceptors.response.use(response => {
  return response
})

export { axiosInstance }