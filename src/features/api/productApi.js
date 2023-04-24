import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => "/products",
    }),

    getUsers: builder.query({
      query: () => "/users",
    }),

    getUser: builder.query({
      query: () => "/users",
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/users/${id}`
      }),
    }),

  }),
});

export const { useGetProductsQuery, useGetUsersQuery, useDeleteUserMutation } = productApi;
