import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import RegistredUsers from '../pages/RegistredUsers'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },

    {
        path: '/usuarios-registrados',
        element: <RegistredUsers />
    }


])

export default router