import {Button, Link, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {NavLink, useLocation} from "react-router-dom";
import {menu} from "../../routes.tsx";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../hooks/useStore.ts";
import {loginModalToggle} from "../../store/application.ts";

interface MenuProps {
    setIsMenuOpen: () => void
}

export default function Menu({setIsMenuOpen}: MenuProps) {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const {pathname} = useLocation();
    const loginToggle = () => {
        dispatch(loginModalToggle())
    }
    return (
        <>
            <NavbarContent justify="center">
                <div className="hidden md:flex">
                    {menu.map((item, index) => (
                        <NavbarItem className='mx-8' key={index}>
                            <Link color={pathname === item.path ? "primary" : "foreground"}
                                  to={item.path} as={NavLink}>
                                {t(item.name)}
                            </Link>
                        </NavbarItem>
                    ))}
                </div>
            </NavbarContent>
            <NavbarMenu hidden={true}>
                {menu.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link onClick={setIsMenuOpen} color={pathname === item.path ? "primary" : "foreground"}
                              to={item.path}
                              as={NavLink}>
                            {t(item.name)}
                        </Link>
                    </NavbarMenuItem>
                ))}

                <div className="flex py-12 flex-1 flex-col justify-end">
                    <Button onPress={loginToggle} color="primary">
                        {t('login')}
                    </Button>
                </div>
            </NavbarMenu>
        </>
    )
}
