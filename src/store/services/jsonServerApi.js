import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => `questions`,
      providesTags: ["Questions"],
    }),
    getQuestion: builder.query({
      query: (id) => `questions/${id}/?_embed=answers&_expand=user`,
      providesTags: ["Question"],
    }),
    createQuestion: builder.mutation({
      query: (body) => ({
        url: `questions`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Questions"],
    }),
    deleteQuestion: builder.mutation({
      query: (id) => ({
        url: `questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Questions"],
    }),
    createAnswer: builder.mutation({
      query: (body) => ({
        url: `answers`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Question"],
    }),
    updateAnswer: builder.mutation({
      query: (id, body) => ({
        url: `answers/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Question"],
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useGetQuestionQuery,
  useCreateQuestionMutation,
  useDeleteQuestionMutation,
  useCreateAnswerMutation,
  useUpdateAnswerMutation,
} = jsonServerApi;
