import React, { useContext, useEffect, useState } from "react";
import { Carttotalcontext } from "../../Context/Carttotalcontext";
import { Container, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/system";

const Styledtypo = styled(Typography)(({ theme }) => ({
    fontFamily: "Arimo",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "48px",
    display: "flex",
    alignItems: "flex-end",
    color: "#1D1D1D",
    marginBottom: "31px",
}));

function createData(name, price, quantity) {
    return { name, price, quantity, total: price * quantity || price };
}

export default function Totalpage() {
    const { cartTotal, removeItem, addItem, deleteItem } =
        useContext(Carttotalcontext);

    const [tableRows, setTableRows] = useState(
        cartTotal.map((item) =>
            createData(
                item.totalInfo.title,
                item.totalInfo.price,
                item.totalInfo.quantity
            )
        )
    );
    useEffect(() => {
        setTableRows(
            cartTotal.map((item) =>
                createData(
                    item.totalInfo.title,
                    item.totalInfo.price,
                    item.totalInfo.quantity
                )
            )
        );
    }, [cartTotal]);

    const handleQuantityChange = (event, name) => {
        const { value } = event.target;
        const updatedRows = tableRows.map((row) =>
            row.name === name
                ? { ...row, quantity: Number(value), total: row.price * Number(value) }
                : row
        );
        setTableRows(updatedRows);

        // Check if the quantity is decreased

        const item = cartTotal.find((item) => item.totalInfo.title === name);

        if (Number(value) < item.totalInfo.quantity) {
            removeItem(item);
        } else {
            addItem(item);
        }

        const updatedCartTotal = cartTotal.map((item) =>
            item.name === name ? { ...item, quantity: Number(value) } : item
        );
    };

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    const handleDelete = (name) => {
        const updatedRows = tableRows.filter((row) => row.name !== name);
        const element = cartTotal.find((item) => item.totalInfo.title === name);
        setTableRows(updatedRows);
        deleteItem(element);
    };

    // Calculate the subtotal and total from the tableRows state
    const subtotal = tableRows.reduce((acc, row) => acc + row.total, 0);
    const total = subtotal; // Update the total to match the subtotal

    return (
        <Container maxWidth="lg" style={{ marginTop: "137px" }}>
            <Container>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="left">Product</TableCell>
                                <TableCell align="left">Price ($)</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell>
                                        <Button
                                            sx={{ color: "#818181" }}
                                            onClick={() => handleDelete(row.name)}
                                        >
                                            x
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.price}</TableCell>
                                    <TableCell align="left">
                                        <input
                                            type="number"
                                            value={row.quantity || 1}
                                            onChange={(event) =>
                                                handleQuantityChange(event, row.name)
                                            }
                                            contentEditable={true}
                                            style={{
                                                boxSizing: "border-box",
                                                width: "53px",
                                                height: "42px",
                                                left: "889px",
                                                top: "331.98px",
                                                background: "#FFFFFF",
                                                border: "2px solid #EBEBEB",
                                                textAlign: "center",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="left">{row.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Container style={{ marginTop: "83px", marginBottom: "107px" }}>
                <Styledtypo textAlign="left">Cart Totals</Styledtypo>
                <TableContainer>
                    <Table style={{ width: "50%", marginLeft: 0 }}>
                        <TableBody>
                            <TableRow>
                                <TableCell>Subtotal</TableCell>
                                <TableCell>${subtotal.toFixed(2)}</TableCell>{" "}
                                {/* Display the calculated subtotal */}
                            </TableRow>
                            <TableRow>
                                <TableCell>Shipping Free</TableCell>
                                <TableCell>FREE!!!</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Total</TableCell>
                                <TableCell>${total.toFixed(2)}</TableCell>{" "}
                                {/* Display the calculated total */}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box marginTop={2} textAlign="left">
                    <Link
                        to="/checkout"
                        style={{ textDecoration: "none" }}
                        onClick={handleClick}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ backgroundColor: "#D6763C", mt: "41px" }}
                        >
                            Proceed to Checkout
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Container>
    );
}