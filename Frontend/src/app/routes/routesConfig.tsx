import { ROUTES } from '@constants';
import { MainLayout } from '@layouts';
import { AIAssistant, NotFound } from '@pages';
import { Navigate } from 'react-router-dom';

export const routesConfig = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={ROUTES.AI_ASSISTANT} />,
      },
      {
        path: ROUTES.AI_ASSISTANT,
        element: <AIAssistant />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
