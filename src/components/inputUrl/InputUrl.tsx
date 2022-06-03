import { Box, TextField } from "@mui/material";

import useInputUrl from "./InputUrlHook";

const InputUrl = () => {
    const { url, handleChange } = useInputUrl();

    return (
        <Box component="form" sx={{ minWidth: 250 }} autoComplete="off">
            <TextField
                fullWidth
                value={url}
                label="Enter URL"
                variant="outlined"
                onChange={handleChange}
                sx={{ background: "#F7F9FF", borderRadius: "14px", border: "none" }}
            />
        </Box>
    );
};

export default InputUrl;
