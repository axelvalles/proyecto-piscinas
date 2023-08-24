import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Pool {
  codigoPisina: number;
  nombre: string;
  estado: "1" | "0";
}

// Define a service using a base URL and expected endpoints
export const poolApi = createApi({
  reducerPath: "poolApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8090/" }),
  endpoints: (builder) => ({
    getPools: builder.query<Pool[], null>({
      query: () => `piscina`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPoolsQuery } = poolApi;
