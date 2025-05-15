import { RouteObject } from 'react-router-dom';
import NotFound from '../components/NotFound';
import { TrainerSelection } from '../views/TrainerSelection';
import { TrainerPokedex } from '../views/TrainerPokedex';

const myRoutes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                index: true,
                element: <TrainerSelection />,
            },
            {
                path: 'trainer/:trainerId',
                element: <TrainerPokedex />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
];

export default myRoutes;
