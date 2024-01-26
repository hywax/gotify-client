import type { HttpClient, PluginConf, Writable } from '../types'
import { HttpContentType } from '../types'

export class PluginApi {
  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  /**
   * Return all plugins.
   */
  public getPlugins(): Promise<PluginConf[]> {
    return this.httpClient.request<PluginConf[]>(`/plugin`, {
      method: 'GET',
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Get YAML configuration for Configurer plugin.
   */
  public getPluginConfig(id: Writable<number>): Promise<object> {
    return this.httpClient.request<object>(`/plugin/${id}/config`, {
      method: 'GET',
      type: HttpContentType.Json,
    })
  }

  /**
   * Update YAML configuration for Configurer plugin.
   */
  public updatePluginConfig(id: Writable<number>): Promise<void> {
    return this.httpClient.request<void>(`/plugin/${id}/config`, {
      method: 'POST',
    })
  }

  /**
   * Disable a plugin.
   */
  public disablePlugin(id: Writable<number>): Promise<void> {
    return this.httpClient.request<void>(`/plugin/${id}/disable`, {
      method: 'POST',
      type: HttpContentType.Json,
    })
  }

  /**
   * Get display info for a Displayer plugin.
   */
  public getPluginDisplay(id: Writable<number>): Promise<string> {
    return this.httpClient.request<string>(`/plugin/${id}/display`, {
      method: 'GET',
      type: HttpContentType.Json,
      format: 'json',
    })
  }

  /**
   * Enable a plugin.
   */
  public enablePlugin(id: Writable<number>): Promise<void> {
    return this.httpClient.request<void>(`/plugin/${id}/enable`, {
      method: 'POST',
      type: HttpContentType.Json,
    })
  }
}
