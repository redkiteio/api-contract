import axios from "axios";
import { store } from "../store";
import { toggleLoading, setIsError } from "../store/mainSlice";

export const defaultApi = axios.create({
    baseURL: "https://tools.redkite.io/api/v1/contract",
});

defaultApi.interceptors.request.use((req) => {
    store.dispatch(toggleLoading(true));
    return req;
});

defaultApi.interceptors.response.use(
    (res) => {
        store.dispatch(toggleLoading(false));

        return res;
    },
    (err) => {
        store.dispatch(toggleLoading(false));
        store.dispatch(setIsError(true));

        return Promise.reject(err);
    }
);
