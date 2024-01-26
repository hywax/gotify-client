import { FetchHttpClient } from './FetchHttpClient'
import { ApplicationApi } from './api/ApplicationApi'
import { ClientApi } from './api/ClientApi'
import { CurrentApi } from './api/CurrentApi'
import { HealthApi } from './api/HealthApi'
import { MessageApi } from './api/MessageApi'
import { PluginApi } from './api/PluginApi'
import { StreamApi } from './api/StreamApi'
import { UserApi } from './api/UserApi'
import { VersionApi } from './api/VersionApi'
import type { HttpAuthKeys, HttpClient } from './types'

export class GotifyClient {
  private readonly httpClient: HttpClient
  private readonly applicationApi: ApplicationApi
  private readonly clientApi: ClientApi
  private readonly currentApi: CurrentApi
  private readonly healthApi: HealthApi
  private readonly messageApi: MessageApi
  private readonly pluginApi: PluginApi
  private readonly streamApi: StreamApi
  private readonly userApi: UserApi
  private readonly versionApi: VersionApi

  constructor(host: string, authKeys: HttpAuthKeys) {
    this.httpClient = new FetchHttpClient(host, authKeys)

    this.applicationApi = new ApplicationApi(this.httpClient)
    this.clientApi = new ClientApi(this.httpClient)
    this.currentApi = new CurrentApi(this.httpClient)
    this.healthApi = new HealthApi(this.httpClient)
    this.messageApi = new MessageApi(this.httpClient)
    this.pluginApi = new PluginApi(this.httpClient)
    this.streamApi = new StreamApi(this.httpClient)
    this.userApi = new UserApi(this.httpClient)
    this.versionApi = new VersionApi(this.httpClient)
  }

  /**
   * Get an ApplicationApi instance
   */
  public get application(): ApplicationApi {
    return this.applicationApi
  }

  /**
   * Get an ClientApi instance
   */
  public get client(): ClientApi {
    return this.clientApi
  }

  /**
   * Get an CurrentApi instance
   */
  public get current(): CurrentApi {
    return this.currentApi
  }

  /**
   * Get an HealthApi instance
   */
  public get health(): HealthApi {
    return this.healthApi
  }

  /**
   * Get an MessageApi instance
   */
  public get message(): MessageApi {
    return this.messageApi
  }

  /**
   * Get an PluginApi instance
   */
  public get plugin(): PluginApi {
    return this.pluginApi
  }

  /**
   * Get an StreamApi instance
   */
  public get stream(): StreamApi {
    return this.streamApi
  }

  /**
   * Get an UserApi instance
   */
  public get user(): UserApi {
    return this.userApi
  }

  /**
   * Get an VersionApi instance
   */
  public get version(): VersionApi {
    return this.versionApi
  }
}
