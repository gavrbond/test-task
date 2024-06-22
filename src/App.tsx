import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Users } from "./Components/Users/Users"
import { Nav } from "./Components/Nav/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./Components/Layout/Layout"
import { Catalog } from "./Pages/Catalog/Catalog"
import { Favourites } from "./Pages/Favourites/Favourites"
import { Provider } from "react-redux"
import { store } from "./redux/store"
const queryClient = new QueryClient()
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Catalog />} />
              <Route path='/favorites' element={<Favourites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
