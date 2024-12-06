import React, { useState } from "react";
import { Box, Button, TextField, Typography, Card, CardContent } from "@mui/material";

const AddCardForm = () => {
    const [form, setForm] = useState({ title: "", description: "", image: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("/api/cms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        alert("Card added successfully!");
        setForm({ title: "", description: "", image: "" });
    };

    return (
        <Card sx={{ p: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Add New Card
                </Typography>
                <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    gap={3}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        label="Title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        multiline
                        rows={3}
                        required
                    />
                    <TextField
                        label="Image URL"
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        required
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Add Card
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AddCardForm;