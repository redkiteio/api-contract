import { useAppSelector } from "../../hooks/hook";

const useLoading = () => {
    const loading = useAppSelector((state) => state?.mainReducer.loading);

    return { loading };
};

export default useLoading;
