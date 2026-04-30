import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'LUNIO Builder',
  description: 'Official Documentation for LUNIO Builder',

  theme: defaultTheme({
    logo: '',

    navbar: ['/', '/get-started', ],
  }),

  bundler: viteBundler(),
})
