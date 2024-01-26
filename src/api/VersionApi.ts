import type { HttpClient, VersionInfo } from '../types'

export class VersionApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Get version information.
   */
  public getVersion(): Promise<VersionInfo> {
    return this.httpClient.request<VersionInfo>(`/version`, {
      method: 'GET',
      format: 'json',
    })
  }
}
