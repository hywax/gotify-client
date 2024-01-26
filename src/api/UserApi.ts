import type { CreateUserExternal, HttpClient, UpdateUserExternal, User, Writable } from '../types'
import { HttpContentType } from '../types'

export class UserApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Return all users.
   */
  public getUsers(): Promise<User[]> {
    return this.httpClient.request<User[]>(`/user`, {
      method: 'GET',
      format: 'json',
    })
  }

  /**
   * Create a user.
   */
  public createUser(body: Writable<CreateUserExternal>): Promise<User> {
    return this.httpClient.request<User>(`/user`, {
      method: 'POST',
      body,
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Get a user.
   */
  public getUser(id: Writable<number>): Promise<User> {
    return this.httpClient.request<User>(`/user/${id}`, {
      method: 'GET',
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Update a user.
   */
  public updateUser(id: Writable<number>, body: Writable<UpdateUserExternal>): Promise<User> {
    return this.httpClient.request<User>(`/user/${id}`, {
      method: 'POST',
      body,
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Deletes a user.
   */
  public deleteUser(id: Writable<number>): Promise<void> {
    return this.httpClient.request<void>(`/user/${id}`, {
      method: 'DELETE',
    })
  }
}
