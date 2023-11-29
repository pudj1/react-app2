import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Component1} from "./components/Component1";
import {Component2} from "./components/Component2";
import {Context1Provider} from "./contexts/Context1";
import {Context2Provider} from "./contexts/Context2";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Context1Provider><Component1/></Context1Provider>,
    },
    {
        path:"page1",
        element:<Context2Provider><Component2/></Context2Provider>
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)