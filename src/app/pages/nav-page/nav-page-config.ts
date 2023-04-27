import { pages } from '../../route/config-pages'

export const navigateConfig = [
  {
    href: pages.starWars.pathForWatch,
    navigate: pages.starWars.path,
    title: 'Star Wars'
  },
  {
    href: pages.todo.pathForWatch,
    navigate: pages.todo.path,
    title: 'Todo'
  },
  {
    href: pages.todoContext.pathForWatch,
    navigate: pages.todoContext.path,
    title: 'Todo Context'
  },
  {
    href: pages.books.pathForWatch,
    navigate: pages.starWars.path,
    title: 'Books'
  },
  {
    href: pages.graphQLReq.pathForWatch,
    navigate: pages.graphQLReq.path,
    title: 'Graph-Q-Req'
  },
  {
    href: pages.graphQLApollo.pathForWatch,
    navigate: pages.graphQLApollo.path,
    title: 'Graph-Q-Apollo'
  },
  {
    href: pages.imageCards.pathForWatch,
    navigate: pages.imageCards.path,
    title: 'Image of cards'
  },
  {
    href: pages.hardForm.pathForWatch,
    navigate: pages.hardForm.path,
    title: 'Hard form'
  }
]
