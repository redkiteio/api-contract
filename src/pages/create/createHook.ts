import { useState, SyntheticEvent, useEffect } from "react";
import { useParams } from "react-router-dom";

import { defaultApi } from "../../api/api";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { setExistingContract, setSuccessMessage } from "../../store/mainSlice";

const useCreateHook = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const [tabValue, setTabValue] = useState("one");
    const { url, method, requestFields, responseFields, headerFields } = useAppSelector((state) => state?.mainReducer);

    useEffect(() => {
        if (id) {
            getContract(id);
        }
    }, []);

    const getContract = async (id: string) => {
        const res = await defaultApi.get(`contract/${id}`);
        const contract = res.data.contract.data;

        dispatch(setExistingContract(contract));
    };

    const handleChange = (_: SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const handleSave = () => {
        saveContract();
    };

    const saveContract = async () => {
        const contract = { url, method, requestFields, responseFields, headerFields };
        const res = await defaultApi.post("contract", { data: contract });

        if (res) dispatch(setSuccessMessage(res.data.id));
    };

    return { tabValue, handleChange, handleSave };
};

export default useCreateHook;
