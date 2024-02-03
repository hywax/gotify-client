[![gotify-client](https://raw.githubusercontent.com/hywax/gotify-client/main/public/cover.jpg)](https://github.com/hywax/vitepress-yandex-metrika)

# Gotify Client

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Full-featured HTTP client to work with Gotify API.

<details>
  <summary><b>Table of Contents</b></summary>

* [Features](#-features)
* [Installation](#-installation)
* [Usage](#-usage)
    * [Mapping version](#-mapping-version)
    * [Base](#-base)
    * [Configuration](#-configuration)
* [API](#-api)
  <!-- API-TOC -->
  * [ApplicationApi](#ApplicationApi)
  * [ClientApi](#ClientApi)
  * [CurrentApi](#CurrentApi)
  * [HealthApi](#HealthApi)
  * [MessageApi](#MessageApi)
  * [PluginApi](#PluginApi)
  * [StreamApi](#StreamApi)
  * [UserApi](#UserApi)
  * [VersionApi](#VersionApi)<!-- /API-TOC -->
* [Advanced](#-advanced)
    * [Custom client](#-custom-client)
* [License](#-license)
</details>

## 🎯 Features

* 🔥 **Code gen**. The client is fully compliant with the official documentation.
* 👌 **Slim**. Zero dependencies.
* ✨ **Runner**. Browser and Node support.
* 🌐 **Custom Http**. If you need a custom http client, you can swap it out.
* 🌳 **Tree shaking**. Only use what you need.
* 🪄️ **TypeScript**. The library is entirely made in typescript

## ✨ Installation

```shell
# Using pnpm
pnpm add gotify-client -D

# Using yarn
yarn add gotify-client -D

# Using npm
npm install gotify-client -D
```

## ⚡ Usage

### 🗺️ Mapping version

| Gotify Client | Gotify Server |
|---------------|---------------|
| 0.4.0         | 2.4.0         |

### 🚀 Base

```typescript
import { GotifyClient } from 'gotify-client'

const client = new GotifyClient('http://gotify.home', {
    // You must specify at least 1 key
    app: 'app_api_key',
    client: 'client_api_key'
})

const message = await gotify.message.createMessage({
  message: "Test message!"
})
```

### ⚙️ Configuration

To execute requests, you need to specify a link to the `host` gotify, as well as pass `api keys`.

In Gotify there are two token types:
* `app`: an application is something that sends messages.
* `client`: a client is something that receives message and manages stuff like creating new tokens or delete messages.

```typescript
constructor(host: string, authKeys: {
  app?: string
  client?: string
})
```

## 🤖 API

The source documentation is fully described in swagger on the [official website](https://gotify.net/api-docs).

<!-- API -->
### ApplicationApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `getApps` | Return all applications. | `GET /application` |
| `createApp` | Create an application. | `POST /application` |
| `updateApplication` | Update an application. | `PUT /application/${id}` |
| `deleteApp` | Delete an application. | `DELETE /application/${id}` |
| `uploadAppImage` | Upload an image for an application. | `POST /application/${id}/image` |
| `removeAppImage` | Deletes an image of an application. | `DELETE /application/${id}/image` |
| `getAppMessages` | Return all messages from a specific application. | `GET /application/${id}/message` |
| `deleteAppMessages` | Delete all messages from a specific application. | `DELETE /application/${id}/message` |

### ClientApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `getClients` | Return all clients. | `GET /client` |
| `createClient` | Create a client. | `POST /client` |
| `updateClient` | Update a client. | `PUT /client/${id}` |
| `deleteClient` | Delete a client. | `DELETE /client/${id}` |

### CurrentApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `currentUser` | Return the current user. | `GET /current/user` |
| `updateCurrentUser` | Update the password of the current user. | `POST /current/user/password` |

### HealthApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `getHealth` | Get health information. | `GET /health` |

### MessageApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `getMessages` | Return all messages. | `GET /message` |
| `createMessage` | Create a message. | `POST /message` |
| `deleteMessages` | Delete all messages. | `DELETE /message` |
| `deleteMessage` | Deletes a message with an id. | `DELETE /message/${id}` |

### PluginApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `getPlugins` | Return all plugins. | `GET /plugin` |
| `getPluginConfig` | Get YAML configuration for Configurer plugin. | `GET /plugin/${id}/config` |
| `updatePluginConfig` | Update YAML configuration for Configurer plugin. | `POST /plugin/${id}/config` |
| `disablePlugin` | Disable a plugin. | `POST /plugin/${id}/disable` |
| `getPluginDisplay` | Get display info for a Displayer plugin. | `GET /plugin/${id}/display` |
| `enablePlugin` | Enable a plugin. | `POST /plugin/${id}/enable` |

### StreamApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `streamMessages` | Websocket, return newly created messages. | `GET /stream` |

### UserApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `getUsers` | Return all users. | `GET /user` |
| `createUser` | Create a user. | `POST /user` |
| `getUser` | Get a user. | `GET /user/${id}` |
| `updateUser` | Update a user. | `POST /user/${id}` |
| `deleteUser` | Deletes a user. | `DELETE /user/${id}` |

### VersionApi

| Method | Description | Http request |
|--------|-------------|--------------|
| `getVersion` | Get version information. | `GET /version` |

<!-- /API -->

## ⚡ Advanced

### 🪄 Custom client
```typescript
import { MessageApi } from 'gotify-client'

const httpClient = new CustomHttpClient()
const messageApi = new MessageApi(httpClient)

const message = await messageApi.createMessage({
    message: "Test message!"
})
```

## 📄 License

This template was created under the [MIT License](LICENSE).

[npm-version-src]: https://img.shields.io/npm/v/gotify-client/latest.svg?logo=hackthebox&color=00ADD8&logoColor=fff
[npm-version-href]: https://npmjs.com/package/gotify-client
[npm-downloads-src]: https://img.shields.io/npm/dm/gotify-client.svg?colorB=00ADD8
[npm-downloads-href]: https://npmjs.com/package/gotify-client
[license-src]: https://img.shields.io/badge/License-MIT-00ADD8?logo=opensourceinitiative&logoColor=fff
[license-href]: https://npmjs.com/package/gotify-client
