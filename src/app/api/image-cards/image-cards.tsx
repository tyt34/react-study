import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageCardsApi = createApi({
  reducerPath: "imageCardsApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "https://mesto.nomoreparties.co/v1/cohort-24/",
    baseUrl: "http://localhost:3001",
    // prepareHeaders: (headers) => {
    //   const token = "54e47a58-a3be-4854-bdb0-d150680efc4c";
    //   if (token) {
    //     headers.set("authorization", `${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    getImageCards: build.query<any, void>({
      query: () => `cards`,
    }),
  }),
});

export const { useGetImageCardsQuery } = imageCardsApi;
