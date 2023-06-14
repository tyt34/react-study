import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IImgCard } from '../../pages/image-cards/components/main-cards/main-cards'

const getRightFilter = (filter: string) => {
  if (filter === 'all') {
    filter =
      'fast&category=furious&category=fast-and-furious&category=dangerous'
  }
  return filter
}

export const imageCardsApi = createApi({
  reducerPath: 'imageCardsApi',
  tagTypes: ['imgCards'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints: (build) => ({
    getImageCards: build.query<IImgCard[], any>({
      query: ({ filter }) => {
        return `cards?_page=1&category=${getRightFilter(filter)}`
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: IImgCard) => ({
                type: 'imgCards' as const,
                id
              })),
              { type: 'imgCards', id: 'LIST' }
            ]
          : [{ type: 'imgCards', id: 'LIST' }]
    }),
    getSomeImageCards: build.mutation<any, any>({
      query: ({ page, filter }) => {
        return {
          url: `cards?_page=${page}&category=${getRightFilter(filter)}`,
          method: 'GET'
        }
      },
      async onQueryStarted(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        { page, filter },
        { dispatch, queryFulfilled }
      ) {
        const { data } = await queryFulfilled
        dispatch(
          imageCardsApi.util.updateQueryData(
            'getImageCards',
            { filter },
            (draft) => {
              return [...draft, ...data]
            }
          )
        )
      }
    }),
    addCard: build.mutation<IImgCard, Partial<IImgCard>>({
      query: (body) => ({
        url: 'cards',
        method: 'POST',
        body
      }),
      invalidatesTags: [{ type: 'imgCards', id: 'LIST' }]
    }),
    deleteCard: build.mutation<string, string>({
      query: (id) => ({
        url: `cards/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'imgCards', id: 'LIST' }]
    }),
    updateCard: build.mutation<void, Partial<IImgCard>>({
      query: ({ id, ...patch }) => {
        return {
          url: `cards/${id}`,
          method: 'PUT',
          body: patch
        }
      },
      invalidatesTags: (result, error, { id }) => [
        { type: 'imgCards', id }
      ]
    })
  })
})

export const {
  useGetImageCardsQuery,
  useAddCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
  useGetSomeImageCardsMutation
} = imageCardsApi

// фильтрация вторая страница категории dangerous
// http://localhost:3001/cards?category=dangerous&_page=2

/**
 * baseUrl вместе с headers
 */
//baseUrl: "https://mesto.nomoreparties.co/v1/cohort-24/",
// prepareHeaders: (headers) => {
//   const token = "54e47a58-a3be-4854-bdb0-d150680efc4c";
//   if (token) {
//     headers.set("authorization", `${token}`);
//   }
//   return headers;
// },
