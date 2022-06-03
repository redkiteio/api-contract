import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";

import { Contract, Field, InitialState } from "../types/types";

const initialState: InitialState = {
    url: "",
    method: "",
    loading: false,
    isError: false,
    successMessage: "",
    requestFields: "",
    responseFields: "",
    headerFields: [{ id: uuidv4(), key: "", value: "", fieldDescription: "" }],
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setExistingContract: (state: Draft<InitialState>, { payload }: PayloadAction<Contract>) => {
            const { url, method, headerFields, requestFields, responseFields } = payload;
            state.url = url;
            state.method = method;
            state.headerFields = headerFields;
            state.requestFields = requestFields;
            state.responseFields = responseFields;
        },
        toggleLoading: (state: Draft<InitialState>, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setSuccessMessage: (state: Draft<InitialState>, { payload }: PayloadAction<string>) => {
            state.successMessage = payload;
        },
        setIsError: (state: Draft<InitialState>, { payload }: PayloadAction<boolean>) => {
            state.isError = payload;
        },
        addField: (state: Draft<InitialState>) => {
            state.headerFields.push({ id: uuidv4(), key: "", value: "", fieldDescription: "" });
        },
        deleteField: (state: Draft<InitialState>, { payload }: PayloadAction<{ id: string }>) => {
            state.headerFields = state.headerFields.filter((field) => field.id !== payload.id);
        },
        changeHeaderFields: (state: Draft<InitialState>, { payload }: PayloadAction<{ id: string; name: string; value: string }>) => {
            state.headerFields.map((field) => {
                if (field.id === payload.id) {
                    field[payload.name as keyof Field] = payload.value;
                }
            });
        },
        changeReqOrResField: (state: Draft<InitialState>, { payload }: PayloadAction<{ stateProperty: string; value: string }>) => {
            // @ts-ignore
            state[payload?.stateProperty] = payload.value;
        },
        changeUrl: (state: Draft<InitialState>, { payload }: PayloadAction<{ value: string }>) => {
            state.url = payload.value;
        },
        changeMethod: (state: Draft<InitialState>, { payload }: PayloadAction<{ value: string }>) => {
            state.method = payload.value;
        },
    },
});

export const {
    addField,
    changeUrl,
    setIsError,
    deleteField,
    changeMethod,
    toggleLoading,
    setSuccessMessage,
    changeHeaderFields,
    changeReqOrResField,
    setExistingContract,
} = mainSlice.actions;

export default mainSlice.reducer;
