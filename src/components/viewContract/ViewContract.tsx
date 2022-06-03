import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

import { StructureType } from "../../types/types";
import RenderViewFields from "./RenderViewFields";
import useViewContractHook from "./viewContractHook";

const ViewContract = () => {
    const { id, url, method, headerFields, requestFields, responseFields, handleExport } = useViewContractHook();

    return (
        <>
            <Typography component="div" sx={{ padding: 3 }} id="contract-view">
                <Typography component="div" variant="h4">
                    API contract {"\n"}
                    {"\n"}
                </Typography>
                <Grid container component="div" sx={{ background: "#F7F9FF", marginTop: 2, borderRadius: "14px", padding: "16px" }}>
                    <Grid item xs={9}>
                        <Typography component="h5" variant="h5" color="#3867D6">
                            Contract view
                        </Typography>{" "}
                        {"\n"}
                        {"\n"}
                        <Typography component="div" sx={{ marginRight: "15px", marginTop: 2 }}>
                            <Typography component="span" sx={{ fontWeight: 600 }}>
                                method:{" "}
                            </Typography>
                            {method}
                        </Typography>
                        {"\n"}
                        <Typography component="div" sx={{ marginRight: "15px", marginTop: 2 }}>
                            <Typography component="span" sx={{ fontWeight: 600 }}>
                                url:
                            </Typography>{" "}
                            {url}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} alignSelf={"flex-end"}>
                        <Button variant="contained" sx={{ textTransform: "none" }} onClick={handleExport}>
                            Download file
                        </Button>
                        {id && (
                            <Button variant="contained" sx={{ marginLeft: 1 }}>
                                <Link to={`/edit/${id}`} style={{ textDecoration: "none", textTransform: "none", color: "unset" }}>
                                    Edit file
                                </Link>
                            </Button>
                        )}
                    </Grid>
                </Grid>
                {"\n"}
                {"\n"}
                <Typography component="div" sx={{ background: "#F7F9FF", padding: "16px", marginTop: 3, borderRadius: "14px" }}>
                    <RenderViewFields fields={headerFields} structureType={StructureType.headerStructure} /> {"\n"}
                    <Typography component="hr" />
                    <Typography component="div" sx={{ padding: "24px 0 24px 0" }}>
                        <Typography component="div" variant="h6" marginBottom={1} fontWeight="600">
                            {StructureType.requestStructure}
                        </Typography>
                        {"\n"}
                        {"\t"} {requestFields}
                    </Typography>
                    <Typography component="hr" />
                    {"\n"}
                    {"\n"}
                    <Typography component="div" sx={{ marginTop: "24px" }}>
                        <Typography component="div" variant="h6" marginBottom={1} fontWeight="600">
                            {StructureType.responseStructure}
                        </Typography>
                        {"\n"}
                        {"\t"} {responseFields}
                    </Typography>
                    {"\n"}
                </Typography>
            </Typography>
        </>
    );
};

export default ViewContract;
