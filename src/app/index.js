import React, { Children } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Welcome from "./site/welcome";
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
import Site from "./site";
import TeacherGroups from "./teacher-page/teacher-groups";
import TeacherEditFlowDisc from "../components/teacher-edit-flow-disc";
import TeacherLogs from "./teacher-page/teacher-logs";
import TeacherLog from "./teacher-page/teacher-log";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Site/>,
        errorElement: <div>not found</div>,
        children:
        [
            {
                path: "/welcome",
                element: <Welcome/>
            }
        ]
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
                        path: ":distId/edit",
                        element: <ModalLayout><TeacherEditDiscipline/></ModalLayout>
                    },
                    {
                        path: ":distId/editflow/:flowId",
                        element: <ModalLayout><TeacherEditFlowDisc/></ModalLayout>
                    },
                    {
                        path: ":distId/addflow",
                        element: <ModalLayout><TeacherAddFlow/></ModalLayout>
                    },
                ]
            },
            {
                path: "groups",
                element: <TeacherGroups/>
            },
            {
                path: "flows",
                element: <div></div>,
                children: []
            },
            {
                path: "logs",
                element: <TeacherLogs/>
            },
            {
                path: "log/:distId",
                element: <TeacherLog/>
            }
        ],
    }
]);

const App = () =>{
    return <RouterProvider router={router}/>
}

export default React.memo(App);