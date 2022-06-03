import { Box, Typography, Modal as MaterialModal } from "@mui/material";

import useModal from "./modalHook";
import MessageCard from "../messageCard/MessageCard";

const Modal = () => {
    const { open, isError, successMessage, handleClose } = useModal();

    return (
        <Typography component="div">
            <MaterialModal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        top: "50%",
                        left: "50%",
                        width: 572,
                        height: 298,
                        padding: "23px",
                        position: "absolute",
                        borderRadius: "14px",
                        background: "#FFFFFF",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    {isError && <MessageCard handleClose={handleClose} message="Oops, something went wrong" messageDetails="Please try again later." />}
                    {successMessage && (
                        <MessageCard success handleClose={handleClose} message="Congratulations, contract link below" messageDetails={successMessage} />
                    )}
                </Box>
            </MaterialModal>
        </Typography>
    );
};

export default Modal;
