import React, { useState, useContext } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import { Carttotalcontext } from "../../Context/Carttotalcontext";
import { useSnackbar } from "notistack";

const Checkoutpage = () => {
    const { cartTotal, removeItem, addItem, deleteItem } = useContext(Carttotalcontext);

    const [fullName, setFullName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [townCity, setTownCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            fullName.trim() === "" ||
            streetAddress.trim() === "" ||
            townCity.trim() === "" ||
            phone.trim() === "" ||
            email.trim() === ""
        ) {
            enqueueSnackbar("Please fill in all the fields", { variant: "error" })

            return; // Exit the function if any field is empty
        }

        // Check if the cart total array is empty
        if (cartTotal.length === 0) {
            enqueueSnackbar("Cart total is empty", { variant: "error" })

            return; // Exit the function if cart total is empty
        } else {
            const order = {
                fullName,
                streetAddress,
                townCity,
                phone,
                email,
                cartTotal,
            };

            const fetchData = async () => {
                try {
                    await fetch("https://e-commerce-final-da38d-default-rtdb.firebaseio.com/orders.json", {
                        method: "POST", headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(order),
                    })
                } catch (error) {
                    console.log('Error fetching products:', error);
                }
                enqueueSnackbar("Order placed successfully", { variant: "success" })
                setFullName("");
                setStreetAddress("");
                setTownCity("");
                setPhone("");
                setEmail("");

            }
            fetchData();
            for (let i = 0; i < cartTotal.length; i = i + 1) {
                deleteItem(cartTotal[i]);
            }
        }

    };

    return (
        <Box sx={{ mt: "97px", mb: "50px" }}>
            <Container maxWidth="lg">
                <Typography variant="h4" textAlign="left" sx={{ marginBottom: "1rem" }}>
                    Billing Details
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <Box width='50%'>
                        <TextField
                            label="Full Name"
                            fullWidth
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            sx={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            label="Street Address"
                            fullWidth
                            required
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            sx={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            label="Town/City"
                            fullWidth
                            required
                            value={townCity}
                            onChange={(e) => setTownCity(e.target.value)}
                            sx={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            label="Phone"
                            fullWidth
                            required
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            sx={{ marginBottom: "1rem" }}
                        />
                        <TextField
                            label="Email Address"
                            fullWidth
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ marginBottom: "1rem" }}
                        />
                    </Box>

                    <Typography
                        variant="h4"
                        textAlign="left"
                        sx={{ marginBottom: "1rem", marginTop: "2rem" }}
                    >
                        Your Order
                    </Typography>

                    <TableContainer
                        component={Paper}
                        sx={{ marginTop: "1rem", width: "100%" }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="h6">Product</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h6">Total</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartTotal.map((item) => (
                                    <TableRow key={item.title}>
                                        <TableCell>
                                            {item.title} ({item.quantity})
                                            {console.log(item.quantity)}
                                        </TableCell>
                                        <TableCell>
                                            $
                                            {(item.price * item.quantity).toFixed(
                                                2
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell>Subtotal</TableCell>
                                    <TableCell>
                                        $
                                        {cartTotal
                                            .reduce(
                                                (acc, item) =>
                                                    acc + item.price * item.quantity,
                                                0
                                            )
                                            .toFixed(2)}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        $
                                        {cartTotal
                                            .reduce(
                                                (acc, item) =>
                                                    acc + item.price * item.quantity,
                                                0
                                            )
                                            .toFixed(2)}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Box
                            component={Paper}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-around"
                            height="245.38px"
                            sx={{ marginTop: "1rem" }}
                        >
                            <Box
                                backgroundColor="#FBFBFB"
                                textAlign="center"
                                sx={{ ml: "24px", mr: "24px" }}
                            >
                                <Typography
                                    color="#555555"
                                    variant="body1"
                                    sx={{ marginRight: "1rem", pt: "25px", pb: "25px", pl: "16px" }}
                                    textAlign="left"
                                >
                                    Cash on delivery. Please contact us if you require assistance or
                                    wish to make alternate arrangements.
                                </Typography>
                            </Box>
                            <Box textAlign="right">
                                <Button
                                    type="submit"


                                    variant="contained"
                                    color="primary"
                                    sx={{ backgroundColor: "#D6763C" }}
                                >
                                    place order
                                </Button>
                            </Box>
                        </Box>
                    </TableContainer>
                </form>
            </Container>
        </Box>
    );
};

export default Checkoutpage;
