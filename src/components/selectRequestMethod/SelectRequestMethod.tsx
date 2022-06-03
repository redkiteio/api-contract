import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import useSelectFieldType from "./selectRequestMethodHook";

const SelectFieldType = () => {
    const { method, methods, handleChange } = useSelectFieldType();

    return (
        <Box sx={{ minWidth: 250 }}>
            <FormControl fullWidth>
                <InputLabel id="Method-select-label">Method</InputLabel>
                <Select
                    value={method}
                    label="Method"
                    variant="outlined"
                    onChange={handleChange}
                    id="method-simple-select"
                    sx={{ background: "#F7F9FF" }}
                    MenuProps={{
                        variant: "menu",
                        sx: { borderRadius: "0 0 14px 14px", border: "2px solid #3867D6", borderTop: "none" },
                    }}
                >
                    {methods.map((method) => {
                        return (
                            <MenuItem key={method} value={method} sx={{ borderBottom: "1px solid #D8D8D8", margin: "0 7px 0 7px" }}>
                                {method}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectFieldType;
