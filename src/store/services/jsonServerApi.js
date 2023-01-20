import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => `questions?_embed=answers&_expand=user`,
      providesTags: ["Questions"],
    }),
    getUsers: builder.query({
      query: () => `users?_embed=questions`,
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
      invalidatesTags: ["Question", "Questions"],
    }),
    likeAnswer: builder.mutation({
      query: ({id, likes}) => ({
        url: `answers/${id}`,
        method: "PATCH",
        body:{likes},
      }),
      invalidatesTags: ["Question"],
    }),
    dislikeAnswer: builder.mutation({
      query: ({id, dislikes}) => {
        console.log("id", id);
        console.log("dislikes", dislikes);
        return {
          url: `answers/${id}`,
          method: "PATCH",
          body:{dislikes},
        };
      },
      invalidatesTags: ["Question"],
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useGetUsersQuery,
  useGetQuestionQuery,
  useCreateQuestionMutation,
  useDeleteQuestionMutation,
  useCreateAnswerMutation,
  useLikeAnswerMutation,
  useDislikeAnswerMutation,
} = jsonServerApi;
