import { FC } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { Done as DoneIcon, ErrorOutline as ErrorOutlineIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface MessageCardProps {
    success?: boolean;
    message: string;
    messageDetails: string;
    handleClose: () => void;
}

const MessageCard: FC<MessageCardProps> = ({ handleClose, message, messageDetails, success }) => {
    const { protocol, host } = window.location;
    // const FULL_URL = `${protocol}//${host}/api-contract/view/${messageDetails}`;
    const FULL_URL = `${protocol}//${host}${process.env.PUBLIC_URL}/#/view/${messageDetails}`;
    console.log("FULL_URL", FULL_URL);

    return (
        <Grid container direction="column" alignItems="flex-start">
            <Grid item xs={12} component="div" alignSelf="end">
                <IconButton aria-label="settings" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Grid>

            <Grid
                item
                xs={12}
                marginTop={4}
                component="div"
                alignSelf="center"
                sx={{ textAlign: "center", padding: "10px", background: "#F7F9FF", borderRadius: "50%" }}
            >
                {success ? <DoneIcon color="success" fontSize="large" /> : <ErrorOutlineIcon color="warning" fontSize="large" />}
            </Grid>

            <Grid item xs={12} component="div" alignSelf="center" marginTop={4} sx={{ fontSize: "24px", color: "#3867D6", fontWeight: 500 }}>
                {message}
            </Grid>

            <Grid item xs={12} component="div" alignSelf="center" marginTop={4} sx={{ fontSize: "16px", color: "#130F26", fontWeight: 400 }}>
                {success ? (
                    // <Typography component="a" href={FULL_URL} onClick={handleClose}>
                    //     {FULL_URL}
                    // </Typography>
                    <Link to={`view/${messageDetails}`} onClick={handleClose} style={{ textDecoration: "none", textTransform: "none", color: "#3867D6" }}>
                        {FULL_URL}
                    </Link>
                ) : (
                    messageDetails
                )}
            </Grid>
        </Grid>
    );
};

export default MessageCard;
