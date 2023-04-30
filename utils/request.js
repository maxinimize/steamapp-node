import axios from 'axios'
import https from 'https'

const service = axios.create({
  //baseurl: 
  //timeout: 10000,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
})

// service.interceptors.request.use(
//   error => {
//     return Promise.reject(error)
//   }
// )

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service