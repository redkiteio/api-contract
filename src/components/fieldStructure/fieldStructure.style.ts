import { makeStyles } from "@mui/styles";

const useFieldStructureStyle = makeStyles({
    textarea: {
        minHeight: 100,
        width: "98%",
        background: "#F7F9FF",
        marginTop: "20px",
        borderRadius: "14px",
        border: "none",
        outlineColor: "#3867D6",
        padding: "10px",
        resize: "vertical",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontSize: "14px",
    },
});

export default useFieldStructureStyle;
