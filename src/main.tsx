import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "virtual:uno.css"
import {NextUIProvider} from "@nextui-org/react";
import ScrollController from "./components/ScrollController.tsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <NextUIProvider>
                <ScrollController>
                    <Provider store={store}>
                        <App/>
                    </Provider>
                </ScrollController>
            </NextUIProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
