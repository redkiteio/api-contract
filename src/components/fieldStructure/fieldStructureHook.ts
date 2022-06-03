import { changeReqOrResField } from "../../store/mainSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/hook";

interface UseFieldStructureHook {
    stateProperty: string;
}

const useFieldStructureHook = ({ stateProperty }: UseFieldStructureHook) => {
    const dispatch = useAppDispatch();
    // @ts-ignore
    const field: string = useAppSelector((state) => state?.mainReducer[stateProperty]);

    const handleFieldChange = (value: string | null, stateProperty: string) => {
        if (value !== null) dispatch(changeReqOrResField({ stateProperty, value }));
    };

    return { field, handleFieldChange };
};

export default useFieldStructureHook;
