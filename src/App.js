import React from 'react'
import Route from './routes'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const App = () => {

  return (
    <div>
      <QueryClientProvider client={queryClient}>
       <Route />
     </QueryClientProvider>
    </div>
  )
}

export default App

