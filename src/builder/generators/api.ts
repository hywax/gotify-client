import type { GenerateApiOutput } from 'swagger-typescript-api'
import capitalize from 'lodash/capitalize'
import { getDirnameNormalize } from '../utils/files'

export default async function (api: GenerateApiOutput): Promise<void> {
  for (const route of api.configuration.routes.combined!) {
    const template = api.getTemplate({ path: getDirnameNormalize(import.meta.url, '../templates/api.ejs') })
    const content = api.renderTemplate(template, {
      name: route.moduleName,
      routes: route.routes,
      modelTypes: api.configuration.modelTypes,
      apiMethodPathEjs: getDirnameNormalize(import.meta.url, '../templates/api-method.ejs'),
    })

    api.createFile({
      fileName: `${capitalize(route.moduleName)}Api.ts`,
      path: getDirnameNormalize(import.meta.url, '../../api'),
      content: await api.formatTSContent(content),
    })
  }
}
