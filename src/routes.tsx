import {RouteObject} from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Home from "./views/home/Home.tsx";
import Archives from "./views/archives/Archives.tsx";
import Messages from "./views/messages/Messages.tsx";
import Friends from "./views/friends/Friends.tsx";
import About from "./views/about/About.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/archives",
                element: <Archives/>
            },
            {
                path: "/messages",
                element: <Messages/>
            },
            {
                path: "/friends",
                element: <Friends/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    }
]
const menu = [
    {
        path: "/",
        name: "home"
    },
    {
        path: "/archives",
        name: "archives"
    },
    {
        path: "/messages",
        name: "messages"
    },
    {
        path: "/friends",
        name: "friends"
    },
    {
        path: "/about",
        name: "about"
    }
]
export {routes as default, menu}
