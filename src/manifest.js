import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'ChatGPT PDF Export',
  description: 'allows users to export chat messages from the OpenAI chat platform to a PDF document',
  version: '0.0.1',
  manifest_version: 3,
  icons: {
    16: 'img/logo-16.png',
    32: 'img/logo-34.png',
    48: 'img/logo-48.png',
    128: 'img/logo-128.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/logo-48.png',
  },
  options_page: 'options.html',
  background: {
    service_worker: 'src/background/index.js'
  },
  content_scripts: [
    {
      matches: ['https://chat.openai.com/chat/*'],
      js: ['src/content/jspdf.umd.min.js', 'src/content/html2pdf.js',
        'src/content/index.js'],
    },
  ],
  host_permissions: [
    "https://chat.openai.com/chat/*",
    "https://chat.openai.com/chat"
  ],
  web_accessible_resources: [
    {
      resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: [],
    },
  ],
  permissions: ["tabs", "contextMenus", "scripting", "nativeMessaging"],
})
