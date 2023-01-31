import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IImgCard } from "../../container/image-cards/components/main-cards/main-cards";

export const imageCardsApi = createApi({
  reducerPath: "imageCardsApi",
  tagTypes: ["imgCards"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    //baseUrl: "https://mesto.nomoreparties.co/v1/cohort-24/",
    // prepareHeaders: (headers) => {
    //   const token = "54e47a58-a3be-4854-bdb0-d150680efc4c";
    //   if (token) {
    //     headers.set("authorization", `${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    getImageCards: build.query<any, string>({
      //query: () => `cards`,
      query: (limit = "") => `cards?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: IImgCard) => ({
                type: "imgCards" as const,
                id,
              })),
              { type: "imgCards", id: "LIST" },
            ]
          : [{ type: "imgCards", id: "LIST" }],
    }),
    addCard: build.mutation<IImgCard, Partial<IImgCard>>({
      query: (body) => ({
        url: "cards",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "imgCards", id: "LIST" }],
    }),
  }),
});

export const { useGetImageCardsQuery, useAddCardMutation } = imageCardsApi;

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
