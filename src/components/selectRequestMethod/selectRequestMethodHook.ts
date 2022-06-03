import { SelectChangeEvent } from "@mui/material";

import { changeMethod } from "../../store/mainSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

const useSelectFieldType = () => {
    const dispatch = useAppDispatch();
    const method = useAppSelector((state) => state?.mainReducer.method);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event?.target?.value;
        dispatch(changeMethod({ value }));
    };

    const methods = ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"];

    return { method, methods, handleChange };
};

export default useSelectFieldType;
