import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const AddToCart = () => {
  const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 170 },
    {
      id: 'price',
      label: 'Price',
      minWidth: 170,
      align: 'right'
    },
    {
      id: 'category',
      label: 'Category',
      minWidth: 170,
      align: 'right'
    },
    {
      id: 'quantity',
      label: 'Quantity',
      minWidth: 170,
      align: 'right'
    }
  ];

  const ProductList = [
    {
      id: 1,
      name: 'Boat Headphone',
      description: 'Lorem ipsum is cb asbas cbeuc cbduj cbewudc bgcwdeu gcew sauhc ',
      price: 40000,
      photo: 'bcdjcdsch dc'
    }
  ];
  return (
    <Paper sx={{ width: '80%', overflow: 'hidden' }}>
      <Typography variant="h3">Shopping Cart</Typography>
      <TableContainer sx={{ maxHeight: 360 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ backgroundColor: 'black' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ProductList &&
              ProductList.map((item) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                    <TableCell align="left">{item.photo}</TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.description}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AddToCart;
