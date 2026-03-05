import pt from './pt'
import zh from './zh'

const lang = process.env.NEXT_PUBLIC_LANG ?? 'pt'
const translations = lang === 'zh' ? zh : pt

export function t(key: keyof typeof pt): string {
  return (translations as typeof pt)[key] ?? key
}
