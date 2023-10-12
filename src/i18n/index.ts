import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import resources from 'virtual:i18next-loader'

export default i18next
    .use(initReactI18next)
    .use(backend)
    .use(detector)
    .init({
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        resources,
    })
