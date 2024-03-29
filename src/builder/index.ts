import { generateApi } from 'swagger-typescript-api'
import typesGenerator from './generators/types'
import indexGenerator from './generators/index'
import clientGenerator from './generators/client'
import apiGenerator from './generators/api'
import readmeGenerator from './generators/readme'

const api = await generateApi({
  url: 'https://raw.githubusercontent.com/gotify/server/master/docs/spec.json',
  silent: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractEnums: true,
  generateClient: false,
  addReadonly: true,
})

await typesGenerator(api)
await indexGenerator(api)
await clientGenerator(api)
await apiGenerator(api)
await readmeGenerator(api)
