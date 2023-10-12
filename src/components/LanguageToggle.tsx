import {Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection} from "@nextui-org/react";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function LanguageToggle() {
    const {i18n} = useTranslation();
    const [selectedOption, setSelectedOption] = useState<Selection>(new Set([i18n.language]));
    const setLanguage = (token: string) => {
        switch (token) {
            case "en" :
                return "English"
            case "ja":
                return "日本語"
            case "zh-CN":
                return "中文"
        }
    }
    const [locate, setLocate] = useState(setLanguage(i18n.language))
    const onSelectionChangeHandler = (key: Selection) => {
        setSelectedOption(key)
        i18n.changeLanguage(Array.from(key)[0].toString()).finally()
        setLocate(setLanguage(i18n.language))
    }
    return (
        <ButtonGroup color="primary" className="flex" variant="flat">
            <Button>
                {locate}
            </Button>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Button isIconOnly>
                        <i className="i-ri-arrow-down-s-fill"/>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    variant="flat"
                    selectionMode="single"
                    className="max-w-[200px]"
                    aria-label="language options"
                    selectedKeys={selectedOption}
                    onSelectionChange={onSelectionChangeHandler}
                    disallowEmptySelection
                >
                    <DropdownItem key="en" description="Hello World">
                        English
                    </DropdownItem>
                    <DropdownItem key="ja" description="こんにちは、せかい">
                        日本語
                    </DropdownItem>
                    <DropdownItem key="zh-CN" description="你好，世界">
                        中文
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
