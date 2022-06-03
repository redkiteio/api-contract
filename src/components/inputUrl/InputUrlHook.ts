import { ChangeEvent } from "react";

import { changeUrl } from "../../store/mainSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

const useInputUrl = () => {
    const dispatch = useAppDispatch();
    const url = useAppSelector((state) => state?.mainReducer.url);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value;
        dispatch(changeUrl({ value }));
    };

    return { url, handleChange };
};

export default useInputUrl;
