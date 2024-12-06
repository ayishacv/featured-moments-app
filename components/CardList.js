import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
} from "@mui/material";

const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        const response = await fetch("/api/cms");
        const data = await response.json();
        setCards(data.reverse()); // Reverse to show the latest images first
    };

    const deleteCard = async (id) => {
        await fetch("/api/cms", {
            method: "DELETE",
            body: JSON.stringify({ id }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert("Card deleted successfully!");
        fetchCards(); // Refresh list after deletion
    };

    return (
        <TableContainer component={Paper}>
            <Typography variant="h6" gutterBottom>
                Current Cards
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cards.map((card) => (
                        <TableRow key={card.id}>
                            <TableCell>{card.title}</TableCell>
                            <TableCell>{card.description}</TableCell>
                            <TableCell>
                                <img src={card.image} alt={card.title} width={50} />
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => deleteCard(card.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CardList;
