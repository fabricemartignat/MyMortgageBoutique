// use of helmet-async to customize metadata for each page

import { HelmetProvider } from 'react-helmet-async'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  useRouteError,
} from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from './theme'

import './App.css'

// Import pages and components
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import CaseStudies from './pages/CaseStudies'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import Layout from './layout/Layout'
import CaseStudy from './pages/CaseStudy'
import Error from './components/Error'

const adminSecret = import.meta.env.VITE_GRAPHQL_HASURA_ADMIN_SECRET

// Appolo Client set up

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://my-mortgage-boutique.hasura.app/v1/graphql',
})

// Add Hasura admin secret header to allow permission to perform mutations and queries
const authLink = setContext((_, { headers }) => {
  const token = adminSecret

  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': token,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='solutions' element={<Solutions />} />
      <Route path='case-studies' element={<CaseStudies />} />
      <Route
        path='case-studies/:id'
        element={<CaseStudy />}
        errorElement={<Error link='/case-studies' />}></Route>
      <Route path='case-studies/:id/*' element={<NotFound />}></Route>
      <Route path='contact-us' element={<ContactUs />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </HelmetProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
