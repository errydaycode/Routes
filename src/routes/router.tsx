import {Error404} from "../components/pages/Error404";
import {Page} from "../components/pages/Page";
import {dataState} from "../data/dataState";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children : [
            {
                path: "/page/:id",
                element: (
                    <Page pages={dataState.pages}/>
                ),
            },
            {
                path: "/page/protected",
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: 'page/error',
                element: (
                    <Error404/>
                )
            },
            {
                path: '/*',
                element: (
                    <Error404/>
                )
            }
        ],
    },
])