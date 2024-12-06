import React, { useState } from "react";
import {
    AppBar,
    Box,
    Tab,
    Tabs,
    Typography,
    Container,
} from "@mui/material";
import AddCardForm from "../components/AddCardForm";
import CardList from "../components/CardList";

const Dashboard = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <AppBar position="static" sx={{ bgcolor: "white", boxShadow: "none" }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Add Card" />
                    <Tab label="View Cards" />
                </Tabs>
            </AppBar>
            <Box mt={4}>
                {tabIndex === 0 && <AddCardForm />}
                {tabIndex === 1 && <CardList />}
            </Box>
        </Container>
    );
};

export default Dashboard;