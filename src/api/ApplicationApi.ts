import type {
  Application,
  ApplicationParams,
  GetAppMessagesParams,
  HttpClient,
  PagedMessages,
  UploadAppImagePayload,
  Writable } from '../types'
import {
  HttpContentType,
} from '../types'

export class ApplicationApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Return all applications.
   */
  public getApps(): Promise<Application[]> {
    return this.httpClient.request<Application[]>(`/application`, {
      method: 'GET',
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Create an application.
   */
  public createApp(body: Writable<ApplicationParams>): Promise<Application> {
    return this.httpClient.request<Application>(`/application`, {
      method: 'POST',
      body,
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Update an application.
   */
  public updateApplication(id: Writable<number>, body: Writable<ApplicationParams>): Promise<Application> {
    return this.httpClient.request<Application>(`/application/${id}`, {
      method: 'PUT',
      body,
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Delete an application.
   */
  public deleteApp(id: Writable<number>): Promise<void> {
    return this.httpClient.request<void>(`/application/${id}`, {
      method: 'DELETE',
      type: HttpContentType.Json,
    })
  }

  /**
   * Upload an image for an application.
   */
  public uploadAppImage(id: Writable<number>, data: Writable<UploadAppImagePayload>): Promise<Application> {
    return this.httpClient.request<Application>(`/application/${id}/image`, {
      method: 'POST',
      body: data,
      type: HttpContentType.FormData,
      format: 'json',
    })
  }

  /**
   * Deletes an image of an application.
   */
  public removeAppImage(id: Writable<number>): Promise<void> {
    return this.httpClient.request<void>(`/application/${id}/image`, {
      method: 'DELETE',
      type: HttpContentType.Json,
    })
  }

  /**
   * Return all messages from a specific application.
   */
  public getAppMessages({ id, ...query }: Writable<GetAppMessagesParams>): Promise<PagedMessages> {
    return this.httpClient.request<PagedMessages>(`/application/${id}/message`, {
      method: 'GET',
      query,
      format: 'json',
    })
  }

  /**
   * Delete all messages from a specific application.
   */
  public deleteAppMessages(id: Writable<number>): Promise<void> {
    return this.httpClient.request<void>(`/application/${id}/message`, {
      method: 'DELETE',
    })
  }
}
