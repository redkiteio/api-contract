import { FC } from "react";
import { Add as AddIcon, Delete as DeleteOutlineIcon } from "@mui/icons-material";
import { Autocomplete, Box, Button, Grid, TextField, Typography } from "@mui/material";

import { FieldProperty } from "../../types/types";
import useHeaderFieldStructure from "./headerFieldStructureHook";

interface HeaderFieldStructureProps {
    structureType: string;
}

const HeaderFieldStructure: FC<HeaderFieldStructureProps> = ({ structureType }) => {
    const { fields, headerKeyOptions, headerValueOptions, handleFieldChange, getFilterOptions, handleAddField, handleDeleteField } = useHeaderFieldStructure();

    return (
        <Box sx={{ marginTop: 2 }}>
            <Grid container direction="row" component="div" sx={{ background: "#F7F9FF", padding: "16px", borderRadius: "14px" }}>
                <Grid item xs={10} component="div">
                    <Typography component="div" variant="h5">
                        {structureType}
                    </Typography>
                </Grid>
                <Grid item xs={2} component="div">
                    <Button startIcon={<AddIcon />} sx={{ textTransform: "none" }} onClick={handleAddField} variant="contained" size="medium" fullWidth>
                        Add field
                    </Button>
                </Grid>
            </Grid>
            {!!fields?.length &&
                fields.map((field) => {
                    return (
                        <Typography component="div" key={field.id} sx={{ display: "flex", marginTop: 2, alignItems: "center" }}>
                            <Autocomplete
                                freeSolo
                                clearOnBlur
                                autoComplete
                                size="medium"
                                selectOnFocus
                                value={field.key}
                                handleHomeEndKeys
                                id="header-field-key"
                                options={headerKeyOptions}
                                filterOptions={getFilterOptions}
                                getOptionLabel={(option) => option}
                                sx={{ width: "32%", marginRight: 3, background: "#F7F9FF" }}
                                renderOption={(props, option) => <li {...props}>{option}</li>}
                                renderInput={(params) => <TextField {...params} label="Header field name" />}
                                onChange={(_, newValue) => handleFieldChange(newValue, field.id, FieldProperty.key)}
                            />
                            <Autocomplete
                                freeSolo
                                clearOnBlur
                                size="medium"
                                selectOnFocus
                                handleHomeEndKeys
                                value={field.value}
                                id="header-field-key"
                                options={headerValueOptions}
                                filterOptions={getFilterOptions}
                                getOptionLabel={(option) => option}
                                sx={{ width: "32%", marginRight: 3, background: "#F7F9FF" }}
                                renderOption={(props, option) => <li {...props}>{option}</li>}
                                renderInput={(params) => <TextField {...params} label="Header field value" />}
                                onChange={(_, newValue) => handleFieldChange(newValue, field.id, FieldProperty.value)}
                            />
                            <TextField
                                size="medium"
                                variant="outlined"
                                label="Field description"
                                value={field.fieldDescription}
                                sx={{ width: "32%", marginRight: 3, background: "#F7F9FF" }}
                                onChange={(e) => handleFieldChange(e?.target?.value, field.id, FieldProperty.fieldDescription)}
                            />

                            <DeleteOutlineIcon onClick={() => handleDeleteField(field.id)} style={{ cursor: "pointer", color: "#3867D6" }} />
                        </Typography>
                    );
                })}
        </Box>
    );
};

export default HeaderFieldStructure;
