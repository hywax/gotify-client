import type { GenerateApiOutput } from 'swagger-typescript-api'
import { getDirnameNormalize } from '../utils/files'

export default async function (api: GenerateApiOutput): Promise<void> {
  const modules = api.configuration.routes.combined?.map((route) => route.moduleName)

  const template = api.getTemplate({ path: getDirnameNormalize(import.meta.url, '../templates/client.ejs') })
  const content = api.renderTemplate(template, {
    modules,
  })

  api.createFile({
    fileName: `GotifyClient.ts`,
    path: getDirnameNormalize(import.meta.url, '../..'),
    content: await api.formatTSContent(content),
  })
}
