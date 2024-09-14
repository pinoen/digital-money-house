'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ReactQueryProvider = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 30 * 60,
        cacheTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      }
    }
  })
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider