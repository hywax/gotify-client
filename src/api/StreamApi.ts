import type { HttpClient, Message } from '../types'

export class StreamApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Websocket, return newly created messages.
   */
  public streamMessages(): Promise<Message> {
    return this.httpClient.request<Message>(`/stream`, {
      method: 'GET',
      format: 'json',
    })
  }
}
