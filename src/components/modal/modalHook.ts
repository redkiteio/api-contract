import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { setIsError, setSuccessMessage } from "../../store/mainSlice";

const useModal = () => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const { isError, successMessage } = useAppSelector((state) => state?.mainReducer);

    useEffect(() => {
        if (isError || successMessage) setOpen(true);
    }, [isError, successMessage]);

    const handleClose = () => {
        setOpen(false);

        if (isError) dispatch(setIsError(false));
        if (successMessage) dispatch(setSuccessMessage(""));
    };

    return { open, isError, successMessage, handleClose };
};

export default useModal;
