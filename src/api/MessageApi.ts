import type { GetMessagesParams, HttpClient, Message, PagedMessages } from '../types'
import { HttpContentType } from '../types'

export class MessageApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Return all messages.
   */
  public getMessages(query: GetMessagesParams): Promise<PagedMessages> {
    return this.httpClient.request<PagedMessages>(`/message`, {
      method: 'GET',
      query,
      format: 'json',
    })
  }

  /**
   * Create a message.
   */
  public createMessage(body: Message): Promise<Message> {
    return this.httpClient.request<Message>(`/message`, {
      method: 'POST',
      body,
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Delete all messages.
   */
  public deleteMessages(): Promise<void> {
    return this.httpClient.request<void>(`/message`, {
      method: 'DELETE',
    })
  }

  /**
   * Deletes a message with an id.
   */
  public deleteMessage(id: number): Promise<void> {
    return this.httpClient.request<void>(`/message/${id}`, {
      method: 'DELETE',
    })
  }
}
