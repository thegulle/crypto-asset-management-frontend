import axios, { AxiosInstance } from 'axios'
/* import { useUserSession } from '@/stores/UserSession' */
import { message } from '@/utils/element'
import { removeToken } from '@/utils/storage'

export enum HTTPStatus {
  SUCCESS = 1,
  ERROR = 0
}

type HTTPResult<T = any> = {
  status: HTTPStatus.SUCCESS,
  message: string,
  result: T,
  data: any
}

const API_URL: any = import.meta.env.VITE_VUE_APP_API_HOST
const instance = axios.create({
  baseURL: API_URL || '/',
  timeout: 20000
})


instance.interceptors.request.use(config) => {

  /* const userSession = useUserSession()
  const token = userSession.token */
  const token = ''

  if (token) {
    (config.headers).Authorization = 'Bearer ' + token
  }

  (config.headers as any)['X-Requested-With'] = 'XMLHttpRequest'

  return config
}, (error: any) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((res: any) => {
  const { data, status } = res

  if (status === undefined) {
    return Promise.reject(new Error(''))
  }
  return data

}, (error: any) => {

  const { data, status } = error.response

  if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
    if (error.response.data.message) {
      message.error(error.response.data.message, { showClose: true })
    } else {
      console.log(error.message)
    }
  }

  switch (status) {
    case 404:
      if (data.error == 'DUPLICATE_ENTRY') {
        message.warning('Duplicate entry found. Please check your payload.', { showClose: true, grouping: true })
        return Promise.reject(new Error(data.message || 'Error'))
      }
      // message.warning(data.message || 'Error', { showClose: true, grouping: true})
      return Promise.reject(new Error(data.message || 'Error'))
    case 422:
      // message.warning(data.message || 'Unprocessable Entity', { showClose: true, grouping: true})
      return Promise.reject(new Error(data.message || 'Unprocessable Entity'))
    case 401:
      // reset token
      /* const userSession = useUserSession()
      userSession.logoutUser() */
      removeToken()
      location.reload()
      // maybe message box
      return data

    default:
      if (error) return Promise.reject(error)
      return data
  }
})

const service = {
  get: <T = any>(url: string, params?: Parameters<AxiosInstance['get']>): Promise<HTTPResult<T>> => instance.get(url, { params }),
  post: <T = any>(url: string, params?: Parameters<AxiosInstance['post']>, options?: any): Promise<HTTPResult<T>> => instance.post(url, params, options),
  put: <T = any>(url: string, params?: Parameters<AxiosInstance['put']>): Promise<HTTPResult<T>> => instance.put(url, params),
  delete: <T = any>(url: string, params?: Parameters<AxiosInstance['delete']>): Promise<HTTPResult<T>> => instance.delete(url, { params }),
  head: <T = any>(url: string, params?: Parameters<AxiosInstance['head']>): Promise<HTTPResult<T>> => instance.head(url, { params }),
  options: <T = any>(url: string, params?: Parameters<AxiosInstance['options']>): Promise<HTTPResult<T>> => instance.options(url, { params }),
  patch: <T = any>(url: string, params?: Parameters<AxiosInstance['patch']>): Promise<HTTPResult<T>> => instance.patch(url, params)
}

export default service
