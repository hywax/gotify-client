import type { GenerateApiOutput } from 'swagger-typescript-api'
import { getDirnameNormalize } from '../utils/files'

export default async function (api: GenerateApiOutput): Promise<void> {
  const typesContent = api.files.reduce((acc, file) => {
    acc += file.fileContent

    return acc
  }, '')

  const customTemplate = api.getTemplate({ path: getDirnameNormalize(import.meta.url, '../templates/types.ejs') })
  const customContent = api.renderTemplate(customTemplate, {})

  api.createFile({
    fileName: `types.ts`,
    path: getDirnameNormalize(import.meta.url, '../..'),
    content: await api.formatTSContent(typesContent + customContent),
  })
}
