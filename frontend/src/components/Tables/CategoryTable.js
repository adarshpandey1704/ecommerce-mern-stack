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
  { id: '_id', label: 'id', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 170 }
];

export default function CategoryTable(props) {
  console.log('categoryDatachild', props);
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
                <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.categoryData &&
              props.categoryData.map((item) => {
                console.log('item', item);
                return (
                  <TableRow hover tabIndex={-1} key={item._id}>
                    <TableCell align="center">{item._id}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.categoryData?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
