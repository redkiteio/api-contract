import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { defaultApi } from "../../api/api";
import { setExistingContract } from "../../store/mainSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

const useViewContractHook = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const { url, method, headerFields, requestFields, responseFields } = useAppSelector((state) => state?.mainReducer);

    useEffect(() => {
        if (id) {
            getContract(id);
        }
    }, []);

    const handleExport = () => {
        const root = document.getElementById("contract-view");
        const content = root?.textContent;
        const element = document.createElement("a");
        const file = new Blob([content ?? ""], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "contract.txt";
        document.body.appendChild(element); // Required for working in FireFox
        element.click();
    };

    const getContract = async (id: string) => {
        const res = await defaultApi.get(`contract/${id}`);
        const contract = res.data.contract.data;

        dispatch(setExistingContract(contract));
    };

    return { id, url, method, headerFields, requestFields, responseFields, handleExport };
};

export default useViewContractHook;
