import { FC } from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";

import useFieldStructureHook from "./fieldStructureHook";
import useFieldStructureStyle from "./fieldStructure.style";

interface FieldStructureProps {
    structureType: string;
    stateProperty: string;
}

const FieldStructure: FC<FieldStructureProps> = ({ structureType, stateProperty }) => {
    const classes = useFieldStructureStyle();
    const { field, handleFieldChange } = useFieldStructureHook({ stateProperty });

    return (
        <Box sx={{ marginTop: 2 }}>
            <Typography component="div" sx={{ background: "#F7F9FF", padding: "16px", borderRadius: "14px" }}>
                <Typography component="div" variant="h5">
                    {structureType}
                </Typography>
            </Typography>

            <TextareaAutosize
                placeholder="Structure"
                value={field}
                className={classes.textarea}
                onChange={(e) => handleFieldChange(e?.target?.value, stateProperty)}
            />
        </Box>
    );
};

export default FieldStructure;
