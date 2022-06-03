import { FC } from "react";
import { Typography } from "@mui/material";

import { Field, StructureType } from "../../types/types";

interface RenderViewFieldsProps {
    fields: Field[];
    structureType: StructureType;
}

const RenderViewFields: FC<RenderViewFieldsProps> = ({ fields, structureType }) => {
    return (
        <Typography component="div" sx={{ marginBottom: "24px" }}>
            <Typography component="div" variant="h6" marginBottom={1} fontWeight="600">
                {structureType}
            </Typography>
            {"\n"}
            {!!fields?.length &&
                fields?.map((field) => {
                    const { key, value, fieldDescription } = field;
                    return (
                        key &&
                        value && (
                            <Typography component="div" key={field.id} sx={{ display: "flex", alignItems: "center" }}>
                                {"\t"}
                                <Typography component="span" sx={{ marginRight: "15px" }}>
                                    <Typography component="span" sx={{ fontWeight: 600 }}>
                                        {key}:{" "}
                                    </Typography>
                                    {value}
                                </Typography>{" "}
                                {fieldDescription && (
                                    <Typography component="span">
                                        <Typography component="span" sx={{ fontWeight: 600 }}>
                                            description:{" "}
                                        </Typography>
                                        {fieldDescription}
                                    </Typography>
                                )}
                                {"\n"}
                            </Typography>
                        )
                    );
                })}
        </Typography>
    );
};

export default RenderViewFields;
