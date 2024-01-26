/**
 * Application Model
 * The Application holds information about an app which can send notifications.
 */
export interface Application {
  /**
   * The default priority of messages sent by this application. Defaults to 0.
   * @format int64
   * @example 4
   */
  defaultPriority?: number
  /**
   * The description of the application.
   * @example "Backup server for the interwebs"
   */
  description: string
  /**
   * The application id.
   * @format int64
   * @example 5
   */
  id: number
  /**
   * The image of the application.
   * @example "image/image.jpeg"
   */
  image: string
  /**
   * Whether the application is an internal application. Internal applications should not be deleted.
   * @example false
   */
  internal: boolean
  /**
   * The last time the application token was used.
   * @format date-time
   * @example "2019-01-01T00:00:00Z"
   */
  lastUsed?: string
  /**
   * The application name. This is how the application should be displayed to the user.
   * @example "Backup Server"
   */
  name: string
  /**
   * The application token. Can be used as `appToken`. See Authentication.
   * @example "AWH0wZ5r0Mbac.r"
   */
  token: string
}

/**
 * Application Params Model
 * Params allowed to create or update Applications.
 */
export interface ApplicationParams {
  /**
   * The default priority of messages sent by this application. Defaults to 0.
   * @format int64
   * @example 5
   */
  defaultPriority?: number
  /**
   * The description of the application.
   * @example "Backup server for the interwebs"
   */
  description?: string
  /**
   * The application name. This is how the application should be displayed to the user.
   * @example "Backup Server"
   */
  name: string
}

/**
 * Client Model
 * The Client holds information about a device which can receive notifications (and other stuff).
 */
export interface Client {
  /**
   * The client id.
   * @format int64
   * @example 5
   */
  id: number
  /**
   * The last time the client token was used.
   * @format date-time
   * @example "2019-01-01T00:00:00Z"
   */
  lastUsed?: string
  /**
   * The client name. This is how the client should be displayed to the user.
   * @example "Android Phone"
   */
  name: string
  /**
   * The client token. Can be used as `clientToken`. See Authentication.
   * @example "CWH0wZ5r0Mbac.r"
   */
  token: string
}

/**
 * Client Params Model
 * Params allowed to create or update Clients.
 */
export interface ClientParams {
  /**
   * The client name
   * @example "My Client"
   */
  name: string
}

/**
 * CreateUserExternal Model
 * Used for user creation.
 */
export interface CreateUserExternal {
  /**
   * If the user is an administrator.
   * @example true
   */
  admin: boolean
  /**
   * The user name. For login.
   * @example "unicorn"
   */
  name: string
  /**
   * The user password. For login.
   * @example "nrocinu"
   */
  pass: string
}

/**
 * Error Model
 * The Error contains error relevant information.
 */
export interface Error {
  /**
   * The general error message
   * @example "Unauthorized"
   */
  error: string
  /**
   * The http error code.
   * @format int64
   * @example 401
   */
  errorCode: number
  /**
   * The http error code.
   * @example "you need to provide a valid access token or user credentials to access this api"
   */
  errorDescription: string
}

/**
 * Health Model
 * Health represents how healthy the application is.
 */
export interface Health {
  /**
   * The health of the database connection.
   * @example "green"
   */
  database: string
  /**
   * The health of the overall application.
   * @example "green"
   */
  health: string
}

/**
 * MessageExternal Model
 * The MessageExternal holds information about a message which was sent by an Application.
 */
export interface Message {
  /**
   * The application id that send this message.
   * @format int64
   * @example 5
   */
  appid: number
  /**
   * The date the message was created.
   * @format date-time
   * @example "2018-02-27T19:36:10.5045044+01:00"
   */
  date: string
  /**
   * The extra data sent along the message.
   *
   * The extra fields are stored in a key-value scheme. Only accepted in CreateMessage requests with application/json content-type.
   *
   * The keys should be in the following format: &lt;top-namespace&gt;::[&lt;sub-namespace&gt;::]&lt;action&gt;
   *
   * These namespaces are reserved and might be used in the official clients: gotify android ios web server client. Do not use them for other purposes.
   * @example {"home::appliances::lighting::on":{"brightness":15},"home::appliances::thermostat::change_temperature":{"temperature":23}}
   */
  extras?: Record<string, any>
  /**
   * The message id.
   * @format int64
   * @example 25
   */
  id: number
  /**
   * The message. Markdown (excluding html) is allowed.
   * @example "**Backup** was successfully finished."
   */
  message: string
  /**
   * The priority of the message. If unset, then the default priority of the
   * application will be used.
   * @format int64
   * @example 2
   */
  priority?: number
  /**
   * The title of the message.
   * @example "Backup"
   */
  title?: string
}

/**
 * PagedMessages Model
 * Wrapper for the paging and the messages.
 */
export interface PagedMessages {
  /** The messages. */
  messages: Message[]
  /** The Paging holds information about the limit and making requests to the next page. */
  paging: Paging
}

/**
 * Paging Model
 * The Paging holds information about the limit and making requests to the next page.
 */
export interface Paging {
  /**
   * The limit of the messages for the current request.
   * @format int64
   * @min 1
   * @max 200
   * @example 123
   */
  limit: number
  /**
   * The request url for the next page. Empty/Null when no next page is available.
   * @example "http://example.com/message?limit=50&since=123456"
   */
  next?: string
  /**
   * The ID of the last message returned in the current request. Use this as alternative to the next link.
   * @format int64
   * @min 0
   * @example 5
   */
  since: number
  /**
   * The amount of messages that got returned in the current request.
   * @format int64
   * @example 5
   */
  size: number
}

/**
 * PluginConfExternal Model
 * Holds information about a plugin instance for one user.
 */
export interface PluginConf {
  /**
   * The author of the plugin.
   * @example "jmattheis"
   */
  author?: string
  /**
   * Capabilities the plugin provides
   * @example ["webhook","display"]
   */
  capabilities: string[]
  /**
   * Whether the plugin instance is enabled.
   * @example true
   */
  enabled: boolean
  /**
   * The plugin id.
   * @format int64
   * @example 25
   */
  id: number
  /**
   * The license of the plugin.
   * @example "MIT"
   */
  license?: string
  /**
   * The module path of the plugin.
   * @example "github.com/gotify/server/plugin/example/echo"
   */
  modulePath: string
  /**
   * The plugin name.
   * @example "RSS poller"
   */
  name: string
  /**
   * The user name. For login.
   * @example "P1234"
   */
  token: string
  /**
   * The website of the plugin.
   * @example "gotify.net"
   */
  website?: string
}

/**
 * UpdateUserExternal Model
 * Used for updating a user.
 */
export interface UpdateUserExternal {
  /**
   * If the user is an administrator.
   * @example true
   */
  admin: boolean
  /**
   * The user name. For login.
   * @example "unicorn"
   */
  name: string
  /**
   * The user password. For login. Empty for using old password
   * @example "nrocinu"
   */
  pass?: string
}

/**
 * UserExternal Model
 * The User holds information about permission and other stuff.
 */
export interface User {
  /**
   * If the user is an administrator.
   * @example true
   */
  admin: boolean
  /**
   * The user id.
   * @format int64
   * @example 25
   */
  id: number
  /**
   * The user name. For login.
   * @example "unicorn"
   */
  name: string
}

/**
 * UserExternalPass Model
 * The Password for updating the user.
 */
export interface UserPass {
  /**
   * The user password. For login.
   * @example "nrocinu"
   */
  pass: string
}

/** VersionInfo Model */
export interface VersionInfo {
  /**
   * The date on which this binary was built.
   * @example "2018-02-27T19:36:10.5045044+01:00"
   */
  buildDate: string
  /**
   * The git commit hash on which this binary was built.
   * @example "ae9512b6b6feea56a110d59a3353ea3b9c293864"
   */
  commit: string
  /**
   * The current version.
   * @example "5.2.6"
   */
  version: string
}

export interface UploadAppImagePayload {
  /** the application image */
  file: File
}

export interface GetAppMessagesParams {
  /**
   * the maximal amount of messages to return
   * @min 1
   * @max 200
   * @default 100
   */
  limit?: number
  /**
   * return all messages with an ID less than this value
   * @format int64
   * @min 0
   */
  since?: number
  /**
   * the application id
   * @format int64
   */
  id: number
}

export interface GetMessagesParams {
  /**
   * the maximal amount of messages to return
   * @min 1
   * @max 200
   * @default 100
   */
  limit?: number
  /**
   * return all messages with an ID less than this value
   * @format int64
   * @min 0
   */
  since?: number
}
export type QueryParamsType = Record<string | number, any>
export type HttpFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export enum HttpContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export interface HttpClient {
  request<Result>(url: string, params?: HttpRequestParams): Promise<Result>
}

export interface HttpRequestParams {
  query?: QueryParamsType
  body?: unknown
  method?: string
  type?: HttpContentType
  format?: HttpFormat
}
