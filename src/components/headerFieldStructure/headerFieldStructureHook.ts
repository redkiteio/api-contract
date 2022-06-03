import { createFilterOptions, FilterOptionsState } from "@mui/material";

import { Field, FieldProperty } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { addField, changeHeaderFields, deleteField } from "../../store/mainSlice";

const filter = createFilterOptions<string>();

const useHeaderFieldStructure = () => {
    const dispatch = useAppDispatch();
    const fields: Field[] = useAppSelector((state) => state?.mainReducer.headerFields);

    const handleFieldChange = (val: string | null, id: string, name: string) => {
        const index = val?.indexOf(" ");
        const value = name !== FieldProperty.fieldDescription ? val?.slice(index && index + 1) : val;

        if (value) {
            dispatch(changeHeaderFields({ id, value, name }));
        }
    };

    const getFilterOptions = (options: string[], params: FilterOptionsState<string>) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option);
        if (inputValue !== "" && !isExisting) {
            filtered.push(`OWN: ${inputValue}`);
        }
        return filtered;
    };

    const handleAddField = () => {
        dispatch(addField());
    };

    const handleDeleteField = (id: string) => {
        dispatch(deleteField({ id }));
    };

    const headerKeyOptions: readonly string[] = [
        "Accept",
        "Accept-Charset",
        "Accept-Encoding",
        "Accept-Language",
        "Access-Control-Request-Headers",
        "Access-Control-Request-Method",
        "Authorization",
        "Cache-Control",
        "Content-MD5",
        "Content-Length",
        "Content-Transfer-Encoding",
        "Content-Type",
        "Cookie",
        "Cookie 2",
        "Date",
        "Expect",
        "From",
        "Host",
        "If-Match",
        "If-Modified-Since",
        "If-None-Match",
        "If-Range",
        "If-Unmodified-Since",
        "Keep-Alive",
        "Max-Forwards",
        "Origin",
        "Pragma",
        "Proxy-Authorization",
        "Range",
        "Referer",
        "TE",
        "Trailer",
        "Transfer-Encoding",
        "Upgrade",
        "User-Agent",
        "Via",
        "Warning",
        "X-Requested-With",
        "X-Do-Not-Track",
        "DNT",
        "x-api-key",
        "Connection",
    ];

    const headerValueOptions: readonly string[] = [
        "application/atom+xml",
        "application/ecmascript",
        "application/json",
        "application/vnd.api+json",
        "application/javascript",
        "application/octet-stream",
        "application/ogg",
        "application/pdf",
        "application/postscript",
        //TODO: there is more
    ];

    return {
        fields,
        headerKeyOptions,
        headerValueOptions,
        handleFieldChange,
        getFilterOptions,
        handleAddField,
        handleDeleteField,
    };
};

export default useHeaderFieldStructure;
