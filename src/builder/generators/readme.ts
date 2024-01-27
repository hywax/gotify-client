import fs from 'node:fs'
import type { GenerateApiOutput } from 'swagger-typescript-api'
import { getDirnameNormalize } from '../utils/files'

export default async function (api: GenerateApiOutput): Promise<void> {
  const path = getDirnameNormalize(import.meta.url, '../../../README.md')
  const text = fs.readFileSync(path).toString()

  const templateApi = api.getTemplate({ path: getDirnameNormalize(import.meta.url, '../templates/readme.ejs') })
  const contentApi = api.renderTemplate(templateApi, { api })
  const textWithApi = text.replace(/(<!--\s*API\s*-->)([\s\S]*?)(<!--\s*\/API\s*-->)/, (_match, startTag, _apiContent, endTag) => {
    return startTag + contentApi + endTag
  })

  const templateToc = api.getTemplate({ path: getDirnameNormalize(import.meta.url, '../templates/readme-toc.ejs') })
  const contentToc = api.renderTemplate(templateToc, { api })
  const textWithToc = textWithApi.replace(/(<!--\s*API-TOC\s*-->)([\s\S]*?)(<!--\s*\/API-TOC\s*-->)/, (_match, startTag, _apiContent, endTag) => {
    return startTag + contentToc.trimEnd() + endTag
  })

  fs.writeFileSync(path, textWithToc)
}
