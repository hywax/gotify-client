import { generateApi } from 'swagger-typescript-api'
import typesGenerator from './generators/types'
import indexGenerator from './generators/index'
import apiGenerator from './generators/api'

const api = await generateApi({
  url: 'https://raw.githubusercontent.com/gotify/server/master/docs/spec.json',
  silent: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractEnums: true,
  generateClient: false,
})

typesGenerator(api)
indexGenerator(api)
apiGenerator(api)