import {Button, NavbarContent, NavbarItem} from "@nextui-org/react";
import ThemeToggle from "../../components/ThemeToggle.tsx";
import LanguageToggle from "../../components/LanguageToggle.tsx";
import {useAppDispatch} from "../../hooks/useStore.ts";
import {loginModalToggle} from "../../store/application.ts";
import {useTranslation} from "react-i18next";

export default function Setting() {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const loginToggle = () => {
        dispatch(loginModalToggle())
    }

    return (
        <NavbarContent justify="end">
            <NavbarItem>
                <ThemeToggle/>
            </NavbarItem>
            <NavbarItem>
                <LanguageToggle/>
            </NavbarItem>
            <NavbarItem className="hidden md:block">
                <Button onPress={loginToggle} color="primary">
                    {t('login')}
                </Button>
            </NavbarItem>
        </NavbarContent>
    )
}
