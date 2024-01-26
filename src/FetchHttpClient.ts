import type { HttpAuthKeys, HttpClient, HttpRequestParams, QueryParamsType } from './types'
import { HttpContentType } from './types'

export class FetchHttpClient implements HttpClient {
  private readonly host: string
  private readonly authKeys: HttpAuthKeys

  constructor(host: string, authKeys: HttpAuthKeys) {
    this.host = host.endsWith('/') ? host.slice(0, -1) : host
    this.authKeys = authKeys
  }

  public async request<Result>(url: string, params?: HttpRequestParams) {
    const endpoint = `${this.host}${url}${params?.query ? `?${this.transformQuery(params.query)}` : ''}`
    const body = typeof params?.body === 'undefined' || params?.body === null ? null : this.transformBody(params?.body, params?.type)

    return fetch(endpoint, {
      headers: {
        'X-Gotify-Key': this.resolveAuthKey(url, params?.method || 'GET'),
        ...(params?.type && params?.type !== HttpContentType.FormData ? { 'Content-Type': params?.type } : {}),
      },
      method: params?.method,
      body,
    }).then((response: Response) => {
      const result = params?.format ? response[params.format]() : response.text()

      return result as Result
    })
  }

  private resolveAuthKey(url: string, method: string) {
    if (url === '/message' && method === 'POST') {
      return this.authKeys.app || ''
    }

    return this.authKeys.client || ''
  }

  private transformBody(body: unknown, contentType: HttpContentType = HttpContentType.Json) {
    if (contentType === HttpContentType.Json || contentType === HttpContentType.Text) {
      return JSON.stringify(body)
    } else if (contentType === HttpContentType.UrlEncoded) {
      return this.transformQuery(body as QueryParamsType)
    } else if (contentType === HttpContentType.FormData) {
      return Object.keys(body || {}).reduce((formData, key) => {
        // @ts-expect-error unknown type
        const property = body[key]

        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        )
        return formData
      }, new FormData())
    }

    return null
  }

  private transformQuery(params: QueryParamsType) {
    return Object.keys(params)
      .map((key) => {
        return `${key}=${encodeURIComponent(params[key])}`
      })
      .join('&')
  }
}
