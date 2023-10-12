import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import {useAppDispatch, useApplication} from "../hooks/useStore.ts";
import {loginModalToggle} from "../store/application.ts";

export default function LoginModal() {
    const {modal: {login}} = useApplication();
    const dispatch = useAppDispatch();
    const loginToggle = () => {
        dispatch(loginModalToggle())
    }
    return (
        <>
            <Modal placement="center" backdrop="blur" isOpen={login} hideCloseButton>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam pulvinar risus non risus hendrerit venenatis.
                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={loginToggle}>
                                Close
                            </Button>
                            <Button color="primary" onPress={loginToggle}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}
