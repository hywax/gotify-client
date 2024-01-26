import type { HttpClient, User, UserPass } from '../types'
import { HttpContentType } from '../types'

export class CurrentApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Return the current user.
   */
  public currentUser(): Promise<User> {
    return this.httpClient.request<User>(`/current/user`, {
      method: 'GET',
      format: 'json',
    })
  }

  /**
   * Update the password of the current user.
   */
  public updateCurrentUser(body: UserPass): Promise<void> {
    return this.httpClient.request<void>(`/current/user/password`, {
      method: 'POST',
      body,
      type: HttpContentType.Json,
    })
  }
}
