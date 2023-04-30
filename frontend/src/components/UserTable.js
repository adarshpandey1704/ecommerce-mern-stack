import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 170 },
  {
    id: 'about',
    label: 'About',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'role',
    label: 'Role',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 170,
    align: 'right'
  }
];

function createData(name, email, about, role, createdAt) {
  return { name, email, about, role, createdAt };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263, '2023-04-02T16'),
  createData('China', 'CN', 1403500365, 9596961, '2023-04-02T16'),
  createData('Italy', 'IT', 60483973, 301340, '2023-04-02T16'),
  createData('United States', 'US', 327167434, 9833520, '2023-04-02T16'),
  createData('Canada', 'CA', 37602103, 9984670, '2023-04-02T16'),
  createData('Australia', 'AU', 25475400, 7692024, '2023-04-02T16'),
  createData('Germany', 'DE', 83019200, 357578, '2023-04-02T16'),
  createData('Ireland', 'IE', 4857000, 70273, '2023-04-02T16'),
  createData('Mexico', 'MX', 126577691, 1972550, '2023-04-02T16')
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
