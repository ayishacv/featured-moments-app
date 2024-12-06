import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AdminPanelContainer = styled.div`
  padding: 20px;
`;

const AdminPanel = () => {
    const [form, setForm] = useState({ title: "", description: "", image: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("/api/cms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        window.location.reload();
    };

    return (
        <AdminPanelContainer>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" onChange={handleChange} required />
                <textarea name="description" placeholder="Description" onChange={handleChange} required />
                <input name="image" placeholder="Image URL" onChange={handleChange} required />
                <button type="submit">Add Card</button>
            </form>
        </AdminPanelContainer>
    );
};

export default AdminPanel;