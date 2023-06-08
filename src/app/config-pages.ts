interface IPage {
  [key: string]: {
    path: string
    pathForWatch: string
    pathType?: string
    pathElement?: string
  }
}

export const pages: IPage = {
  todo: {
    path: '/todo-list',
    pathForWatch: '#/todo-list'
  },
  todoContext: {
    path: '/todo-context',
    pathForWatch: '#/todo-context'
  },
  starWars: {
    path: '/s-w-d',
    pathForWatch: '#/s-w-d',
    pathType: '/s-w-d/:type',
    pathElement: '/s-w-d/:type/:subType'
  },
  things: {
    path: '/s-w-d/things',
    pathForWatch: '#/s-w-d/things'
  },
  planets: {
    path: '/s-w-d/planets',
    pathForWatch: '#/s-w-d/planets'
  },
  starships: {
    path: '/s-w-d/starships',
    pathForWatch: '#/s-w-d/starships'
  },
  books: {
    path: '/books',
    pathForWatch: '#/books'
  },
  nav: {
    path: '/main',
    pathForWatch: '#/main'
  },
  graphQLReq: {
    path: '/grofqel',
    pathForWatch: '#/grofqel'
  },
  graphQLApollo: {
    path: '/grofqel-apollo',
    pathForWatch: '#/grofqel-apollo'
  },
  imageCards: {
    path: '/image-cards',
    pathForWatch: '#/image-cards'
  },
  hardForm: {
    path: '/hard-form',
    pathForWatch: '#/hard-form'
  }
}
