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
  * [Base](#-base)
  * [Configuration](#-configuration)
* [API](#-api)
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
