import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';
import MainRoot from './roots/MainRoot';
import { ContentProvider } from './context/contentContext';
import Elements from './modules';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <MainRoot />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '',
          element: <Elements.Home />
        },
        {
          path: 'lan',
          element: <Elements.Lan />
        },
        {
          path: 'praesidium',
          element: <Elements.Praesidium />
        },
        {
          path: 'geschiedenis',
          element: <Elements.Geschiedenis />
        },
        {
          path: 'clublied',
          element: <Elements.Clublied />
        },
        {
          path: 'evenementen',
          errorElement: <ErrorBoundary />,
          children: [
            {
              path: '',
              element: <Elements.Evenementen />,
            },
            {
              path: ':eventUrl',
              element: <Elements.EvenementDetail />,
            },
          ]
        },
        {
          path: 'doop',
          element: <Elements.Doop />
        },
        {
          path: 'mercuriosity',
          errorElement: <ErrorBoundary />,
          children: [
            {
              path: '',
              element: <Elements.Mercuriosity />,
            },
            {
              path: ':year/:month/:id',
              element: <Elements.MercuriosityDetail />,
            },
          ]
        },
      ],
    }
  ]);
  return ( // TODO: Add resume pages to website
    <ContentProvider>
      <RouterProvider router={router} />
    </ContentProvider>
  )
}

export default App
