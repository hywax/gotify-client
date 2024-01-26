import type { Client, ClientParams, HttpClient } from '../types'
import { HttpContentType } from '../types'

export class ClientApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Return all clients.
   */
  public getClients(): Promise<Client[]> {
    return this.httpClient.request<Client[]>(`/client`, {
      method: 'GET',
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Create a client.
   */
  public createClient(body: ClientParams): Promise<Client> {
    return this.httpClient.request<Client>(`/client`, {
      method: 'POST',
      body,
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Update a client.
   */
  public updateClient(id: number, body: ClientParams): Promise<Client> {
    return this.httpClient.request<Client>(`/client/${id}`, {
      method: 'PUT',
      body,
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Delete a client.
   */
  public deleteClient(id: number): Promise<void> {
    return this.httpClient.request<void>(`/client/${id}`, {
      method: 'DELETE',
      type: HttpContentType.Json,
    })
  }
}
