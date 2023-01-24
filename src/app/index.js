import React from "react";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Welcome from "./welcome";
import Registration from './registration';
import Login from './login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>,
        errorElement: <div>not found</div>
    },
    {
        path: "/registration",
        element: <Registration/>   
    },
    {
        path: "/login",
        element: <Login/>   
    }
]);

const App = () =>{
    return <RouterProvider router={router}/>
}

export default React.memo(App);