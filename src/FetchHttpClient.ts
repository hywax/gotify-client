import type { HttpClient, HttpRequestParams, QueryParamsType } from './types'
import { HttpContentType } from './types'

export class FetchHttpClient implements HttpClient {
  private readonly host: string
  private readonly apiKey: string

  constructor(host: string, apiKey: string) {
    this.host = host.endsWith('/') ? host.slice(0, -1) : host
    this.apiKey = apiKey
  }

  public async request<Result>(url: string, params?: HttpRequestParams) {
    const endpoint = `${this.host}${url}${params?.query ? `?${this.transformQuery(params.query)}` : ''}`
    const body = typeof params?.body === 'undefined' || params?.body === null ? null : this.transformBody(params?.body, params?.type)

    return fetch(endpoint, {
      headers: {
        'X-Gotify-Key': this.apiKey,
      },
      method: params?.method,
      body,
    }).then((response: Response) => {
      const result = params?.format ? response[params.format]() : response.text()

      return result as Result
    })
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
