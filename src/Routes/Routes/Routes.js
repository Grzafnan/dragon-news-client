import { async } from '@firebase/util';
import { createBrowserRouter } from 'react-router-dom';
import Category from '../../components/Pages/Category/Category/Category';
import Home from '../../components/Pages/Home/Home/Home';
import Login from '../../components/Pages/Login/Login';
import News from '../../components/Pages/News/News/News';
import Profile from '../../components/Pages/Profile/Profile';
import Register from '../../components/Pages/Register/Register';
import TermsAndConditions from '../../components/Pages/TermsAndConditions/TermsAndConditions';
import Main from '../../layout/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';



export const routes = createBrowserRouter([

  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => fetch('https://dragon-news-server-grzafnan.vercel.app/news')
      },
      {
        path: '/home',
        element: <Home />,
        loader: () => fetch('https://dragon-news-server-grzafnan.vercel.app/news')
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: async ({ params }) => fetch(`https://dragon-news-server-grzafnan.vercel.app/category/${params.id}`)
      },
      {
        path: '/news/:id',
        loader: ({ params }) => fetch(`https://dragon-news-server-grzafnan.vercel.app/news/${params.id}`),
        element: <PrivateRoute><News /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/terms',
        element: <TermsAndConditions />
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ]
  }
])