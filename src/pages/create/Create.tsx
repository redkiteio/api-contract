import { Link } from "react-router-dom";
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";

import useCreateHook from "./createHook";
import InputUrl from "../../components/inputUrl/InputUrl";
import { Numbers, StateProperty, StructureType } from "../../types/types";
import FieldStructure from "../../components/fieldStructure/FieldStructure";
import SelectRequestMethod from "../../components/selectRequestMethod/SelectRequestMethod";
import HeaderFieldStructure from "../../components/headerFieldStructure/HeaderFieldStructure";

const Create = () => {
    const { tabValue, handleChange, handleSave } = useCreateHook();

    return (
        <Typography component="div" sx={{ padding: 5 }}>
            <Typography component="div" variant="h4" sx={{ marginBottom: 2 }}>
                API contract
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <SelectRequestMethod />
                </Grid>
                <Grid item xs={8}>
                    <InputUrl />
                </Grid>
            </Grid>

            <Box sx={{ width: "100%", background: "#F7F9FF", marginTop: 2, borderRadius: "14px" }}>
                <Tabs value={tabValue} onChange={handleChange} style={{ padding: "10px 0 16px 10px" }}>
                    <Tab value={Numbers.one} label={StructureType.headerStructure} />
                    <Tab value={Numbers.two} label={StructureType.requestStructure} />
                    <Tab value={Numbers.three} label={StructureType.responseStructure} />
                </Tabs>
            </Box>

            {tabValue === Numbers.one && <HeaderFieldStructure structureType={StructureType.headerStructure} />}
            {tabValue === Numbers.two && <FieldStructure structureType={StructureType.requestStructure} stateProperty={StateProperty.requestFields} />}
            {tabValue === Numbers.three && <FieldStructure structureType={StructureType.responseStructure} stateProperty={StateProperty.responseFields} />}

            <Grid container direction="row" component="div" sx={{ marginTop: 2 }}>
                <Button variant="contained">
                    <Link to="/view" style={{ textDecoration: "none", textTransform: "none", color: "unset" }}>
                        View structure
                    </Link>
                </Button>
                <Button variant="contained" sx={{ marginLeft: 1, textTransform: "none" }} onClick={handleSave}>
                    Save
                </Button>
            </Grid>
        </Typography>
    );
};

export default Create;
