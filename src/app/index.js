import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Welcome from "./welcome";
import Registration from './registration';
import Login from './login';
import TeacherPage from './teacher-page';
import TeacherHome from './teacher-page/teacher-home';
import TeacherProfile from './teacher-page/teacher-profile';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome/>,
        errorElement: <div>not found UWU</div>
    },
    {
        path: "/registration",
        element: <Registration/>   
    },
    {
        path: "/login",
        element: <Login/>   
    },
    {
        path: "/teacher",
        element: <TeacherPage/>,
        children:
        [
            {
                index: true,
                element: <div>not found UWU</div>
            },
            {
                path: "home",
                element: <TeacherHome/>
            },
            {
                path: "profile",
                element: <TeacherProfile/>
            },
            {
                path: "disciplins",
                element: <div></div>
            },
        ],
    }
]);

const App = () =>{
    return <RouterProvider router={router}/>
}

export default React.memo(App);