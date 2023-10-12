import {Button} from "@nextui-org/react";
import {useReducer} from "react";

export default function ThemeToggle() {
    const themeReducer = (current: boolean) => {
        if (current) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
        localStorage.setItem('theme', current ? 'light' : 'dark');
        return !current
    }
    const [isThemeDark, setIsThemeDark] =
        useReducer(themeReducer, document.documentElement.classList.contains('dark'))
    return (
        <Button onClick={setIsThemeDark} variant="light" isIconOnly>
            {isThemeDark ? <i className="i-ri-sun-fill"/> : <i className="i-ri-moon-fill"/>}
        </Button>
    )
}
