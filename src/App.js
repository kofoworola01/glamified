import React from 'react'
import Route from './routes'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import dotenv from 'dotenv'

const queryClient = new QueryClient()

dotenv.config()

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

