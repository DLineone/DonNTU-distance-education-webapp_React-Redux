import React, { Children } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Welcome from "./welcome";
import Registration from './registration';
import Login from './login';
import TeacherPage from './teacher-page';
import TeacherHome from './teacher-page/teacher-home';
import TeacherProfile from './teacher-page/teacher-profile';
import TeacherDisciplins from './teacher-page/teacher-disciplins';
import ModalLayout from './../clusters/modal-layout/index';
import TeacherCreateDiscipline from './../components/teacher-create-discipline/index';
import TeacherEditDiscipline from './../components/teacher-edit-discipline/index';
import TeacherAddFlow from './../components/teacher-add-flow/index';


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
    },
    {
        path: "/teacher",
        element: <TeacherPage/>,
        children:
        [
            {
                index: true,
                element: <div>not found</div>
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
                element: <TeacherDisciplins/>,
                children:
                [
                    {
                        path: "create",
                        element: <ModalLayout><TeacherCreateDiscipline/></ModalLayout>
                    },
                    {
                        path: "edit",
                        element: <ModalLayout><TeacherEditDiscipline/></ModalLayout>
                    },
                    {
                        path: "add",
                        element: <ModalLayout><TeacherAddFlow/></ModalLayout>
                    },
                ]
            },
        ],
    }
]);

const App = () =>{
    return <RouterProvider router={router}/>
}

export default React.memo(App);