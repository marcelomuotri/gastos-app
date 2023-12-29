import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = 'http://192.168.0.16:8080/api/'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['Entity'], // Paso 1: Definir los tipos de tags
  endpoints: (builder) => ({
    getFromEndpoint: builder.query<any, string>({
      query: (endpoint) => endpoint,
      providesTags: [{ type: 'Entity' }],
    }),
    addEntity: builder.mutation<any, { endpoint: string; entity: any }>({
      query: ({ endpoint, entity }) => ({
        url: `${endpoint}`,
        method: 'POST',
        body: entity,
      }),
      invalidatesTags: [{ type: 'Entity' }],
    }),
    deleteEntity: builder.mutation<any, { endpoint: string; id: string }>({
      query: ({ endpoint, id }) => ({
        url: `${endpoint}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Entity' }],
    }),
    updateEntity: builder.mutation<any, { endpoint: string; entity: any }>({
      query: ({ endpoint, entity }) => ({
        url: `${endpoint}/${entity._id}`,
        method: 'PUT',
        body: entity,
      }),
      invalidatesTags: [{ type: 'Entity' }],
    }),
  }),
})

export const {
  useGetFromEndpointQuery,
  useAddEntityMutation,
  useDeleteEntityMutation,
  useUpdateEntityMutation,
} = api
