import * as React from 'react';
import classes from './Totalpage.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Styledtypo = styled(Typography)(({ theme }) => ({


    fontFamily: 'Arimo',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '36px',
    lineHeight: '48px',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#1D1D1D',
    marginBottom: '31PX',
}));

function createData(name, price, quantity) {
    return { name, price, quantity, total: price * quantity };
}

const rows = [createData('Frozen yoghurt', 159, 1)];

export default function BasicTable() {
    const [tableRows, setTableRows] = React.useState(rows);

    const handleQuantityChange = (event, name) => {
        const { value } = event.target;
        const updatedRows = tableRows.map((row) =>
            row.name === name
                ? { ...row, quantity: Number(value), total: row.price * Number(value) }
                : row
        );
        setTableRows(updatedRows);
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '137px' }}>
            <Container >
                <TableContainer >
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="left" >Product</TableCell>
                                <TableCell align="left" >
                                    Price ($)
                                </TableCell>
                                <TableCell align="left" >
                                    Quantity
                                </TableCell>
                                <TableCell align="left" >
                                    Total
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell >
                                        {/* onClick={() => handleDeleteRow(row.name)} */}
                                        <Button
                                            sx={{ color: '#818181' }}
                                        >
                                            x
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">
                                        {row.price}
                                    </TableCell>
                                    <TableCell align="left" >
                                        <input
                                            type="number"
                                            value={row.quantity}
                                            onChange={(event) => handleQuantityChange(event, row.name)}
                                            contentEditable={true}
                                            style={{
                                                boxSizing: 'border-box',
                                                width: '53px',
                                                height: '42px',
                                                left: '889px',
                                                top: '331.98px',
                                                background: '#FFFFFF',
                                                border: '2px solid #EBEBEB',
                                                textAlign: 'center'
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="left" >
                                        {row.total}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Container style={{ marginTop: '83px', marginBottom: '107px' }}>
                <Styledtypo textAlign='left'>Cart Totals</Styledtypo>
                <TableContainer>
                    <Table style={{ width: '50%', marginLeft: 0 }}>
                        <TableHead>
                            <TableRow>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Subtotal</TableCell>
                                <TableCell>$59.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Shipping Free</TableCell>
                                <TableCell>FREE!!!</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Total</TableCell>
                                <TableCell>$59.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box marginTop={2} textAlign='left'>
                    <Button variant="contained" color="primary" sx={{ backgroundColor: '#D6763C', mt: '41px' }}>
                        Proceed to Checkout
                    </Button>
                </Box>
            </Container>

        </Container>
    );
}
