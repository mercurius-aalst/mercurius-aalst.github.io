import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainRoot from './roots/MainRoot';
import { ContentProvider } from './context/contentContext';
import Elements from './modules';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <MainRoot />,
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
