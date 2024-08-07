export const projects = shallowRef<Project[]>([
  {
    id: 1, img: '/projects/notium.png', title: 'Notium is a cloud app for creating and storing notes, also using the built-in AI assistant',
    stack: '#nuxt3, #typescript, #pinia, #tailwind, #shadcn, #vitest, #yandex-gpt', product: 'https://notium.vercel.app/', github: 'https://github.com/mnenie/notium'
  },
  {
    id: 2, img: '/projects/jenda.png', title: 'Jenda is a cloud-based program for efficient collaborative and individual project management',
    stack: '#vue3, #typescript, #pinia, #vueuse, #vitest, #i18n, #scss, #fsd ', product: 'https://jenda.vercel.app/', github: 'https://github.com/mnenie/jenda'
  },
  {
    id: 3, img: '/projects/kugoo.png', title: 'Eccomerce for selling electric scooters Kugoo-Russia (freelance)',
    stack: '#vue3, #typescript, #pinia, #scss, #firebase, #stripe', product: 'https://kugoo-ffd41.web.app/', github: 'https://github.com/mnenie/Kugoo'
  },
  {
    id: 4, img: '/projects/boardify.png', title: 'Boardify - virtual whiteboard for collaborative solutions',
    stack: '#nuxt3, #typescript, #pinia, #tailwind, #shadcn #appwrite, #socket.io', github: 'https://github.com/mnenie/Boardify'
  },
  {
    id: 5, img: '/projects/agile.png', title: 'AgileFusion: developing an ideal agile system (work)',
    stack: '#vue3, #typescript, #pinia, #css, #express, #potgresql', github: 'https://github.com/mnenie/AgileHuck2023'
  },
  {
    id: 6, img: '/projects/ithub.jpeg', title: 'Service that includes the use of AI for college students onboarding',
    stack: '#nuxt3, #typescript, #pinia, #tailwind, #shadcn, #express, #mongodb, #yandex-gpt', github: 'https://github.com/mnenie/ithub-hack'
  },
  {
    id: 7, img: '/projects/prettier.png', title: 'My prettier config - @mnenie/prettier for (.js, .ts, .vue, .jsx, .tsx)',
    stack: '#prettier, #husky, #npm, #yarn', github: 'https://github.com/mnenie/prettier-config', product: 'https://www.npmjs.com/package/@mnenie/prettier'
  },
  {
    id: 8, img: '/projects/vortex.png', title: 'Vortex Ui - ui kit for Vue 3 + Tailwind',
    stack: '#vue3, #typescript, #tailwind, #npm', github: 'https://github.com/mnenie/vortexui-vue'
  },
  {
    id: 9, img: '/projects/sovkombank.jpg', title: 'Automatic task allocation service for visiting sovkombank employees (work)',
    stack: '#react, #javascript, #scss, #python, #mysql, #php', product: 'https://stanislavs-organization-2.gitbook.io/lidery-cifrovoi-transformacii/opisanie-proekta', github: 'https://github.com/mnenie/LctSovkombank'
  },
  {
    id: 10, img: '/projects/teachers.png', title: 'The Teachers Portal is a multi-page website written in the Vue framework for finding tutors and students (freelance)',
    stack: '#vue3, #javascript, #vuex, #css', product: 'https://mnenie.github.io/TeachersPortal/', github: 'https://github.com/mnenie/TeachersPortal'
  },
])
