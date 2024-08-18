import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import FLIPCART_MAIN_IMAGE from "../../assets/images/login-page-image.jpg"
import "./style.css"

const Loginpage =()=>{
    return(
        <>
        <Box className="login-container">
            <Paper elevation={20} className="login-paper">
                <Grid container spacing={2}>
<Grid item xs={12} sm={12} md={6} lg={6} className="fk-left-section">
    <img src={FLIPCART_MAIN_IMAGE} alt="flipcart-login-image" />
</Grid>
<Grid item xs={12} sm={12} md={6} lg={6} className="fk-right-section"></Grid>
                </Grid>
            </Paper>
        </Box>
        </>
    );
};

export default Loginpage;