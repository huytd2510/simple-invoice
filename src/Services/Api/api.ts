import axios from 'axios'
import _ from 'lodash'
import { Config } from '@/Config'
import { apiToken } from '@/Utils/Storage'
// @ts-ignore
import qs from 'qs'
import { DropDownHolder } from '@/Utils/DropDownHolder'

let currentRetryTimes = 0

export enum PostContentType {
  FORM_DATA = 'multipart/form-data',
  JSON = 'application/json',
  FORM_URLENCODED = 'application/x-www-form-urlencoded',
}

axios.interceptors.request.use(config => {
  if (config && !_.isEmpty(apiToken) && config.headers) {
    config.headers.Authorization = `Bearer ${apiToken}`
  }
  return config
})

axios.interceptors.response.use(
  response => response,
  function (error) {
    try {
      DropDownHolder.alertError(error.response.data.errors[0].message)
    } catch (e) {
      DropDownHolder.alertError('Something went wrong.')
    }
  },
)

function GET(url: string, params = {}) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  currentRetryTimes = 0
  return axios
    .get(targetUrl, {
      params: params,
    })
    .then(res => res)
}

function POST(
  url: string,
  params: {},
  type = PostContentType.JSON,
  header?: object,
) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  let dataPrams = params
  if (type === PostContentType.FORM_URLENCODED) {
    dataPrams = qs.stringify(params)
  }
  currentRetryTimes = 0
  return axios
    .post(targetUrl, dataPrams, {
      headers: {
        ...header,
        'Content-Type': type,
      },
    })
    .then(res => {
      return res
    })
}

function PUT(url: string, params = {}) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  currentRetryTimes = 0
  return axios.put(targetUrl, params).then(res => res)
}

function DELETE(url: string, params = {}) {
  const targetUrl = url.includes('https') ? url : Config.API_URL + url
  currentRetryTimes = 0
  return axios.delete(targetUrl, params).then(res => res)
}

function isOk(result: any) {
  return result.status === 200 || result.status === 201 || result.status === 202
}

export const Api = {
  GET,
  POST,
  PUT,
  DELETE,
  isOk,
}
