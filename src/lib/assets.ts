export const withBasePath = (src?: string): string => {
  if (!src) return ''
  if (src.startsWith('http://') || src.startsWith('https://')) return src

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (!basePath) return src

  return `${basePath}${src.startsWith('/') ? src : `/${src}`}`
}
