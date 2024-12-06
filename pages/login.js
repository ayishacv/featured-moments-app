import React, { useState } from "react";
import { useRouter } from "next/router";
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
} from "@mui/material";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        if (username === "root" && password === "root") {
            router.push("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="#f5f5f5"
        >
            <Card sx={{ width: 400, p: 4 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom textAlign="center">
                        Admin Login
                    </Typography>
                    <Box component="form" display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;