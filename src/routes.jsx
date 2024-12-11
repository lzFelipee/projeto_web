import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MathPage from './pages/MathPage';
import DatePage from './pages/DatePage';
import ArrayPage from './pages/ArrayPage';
import ObjectPage from './pages/ObjectPage';
import LocalStoragePage from './pages/LocalStoragePage';
import APIFetchPage from './pages/APIFetchPage';

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/math",
    component: <MathPage />,
  },
  {
    path: "/date",
    component: <DatePage />,
  },
  {
    path: "/array",
    component: <ArrayPage />,
  },
  {
    path: "/object",
    component: <ObjectPage />,
  },
  {
    path: "/localstorage",
    component: <LocalStoragePage />,
  },
  {
    path: "/api",
    component: <APIFetchPage />,
  },
];

export default routes;
