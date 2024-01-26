import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function getDirname(moduleUrl: string): string {
  const __filename = fileURLToPath(moduleUrl)

  return path.dirname(__filename)
}

export function getDirnameNormalize(moduleUrl: string, localPath: string): string {
  const __dirname = getDirname(moduleUrl)

  return path.normalize(__dirname + path.sep + localPath)
}
