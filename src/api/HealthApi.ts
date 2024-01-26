import type { Health, HttpClient } from '../types'

export class HealthApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Get health information.
   */
  public getHealth(): Promise<Health> {
    return this.httpClient.request<Health>(`/health`, {
      method: 'GET',
      format: 'json',
    })
  }
}
