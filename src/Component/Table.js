// import * as React from 'react';
// import { styled } from '@mui/system';
// import TablePaginationUnstyled, {
//   tablePaginationUnstyledClasses as classes,
// } from '@mui/base/TablePaginationUnstyled';

// function createData(Title , StartDate, EndDate) {
//   return { Title, StartDate, EndDate };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7),
//   createData('Donut', 452, 25.0),
//   createData('Eclair', 262, 16.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

// const Root = styled('div')`
//   table {
//     font-family: arial, sans-serif;
//     border-collapse: collapse;
//     width: 100%;
//   }

//   td,
//   th {
//     border: 1px solid #ddd;
//     text-align: left;
//     padding: 8px;
//   }

//   th {
//     background-color: #ddd;
//   }
// `;

// const CustomTablePagination = styled(TablePaginationUnstyled)`
//   & .${classes.toolbar} {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 10px;

//     @media (min-width: 768px) {
//       flex-direction: row;
//       align-items: center;
//     }
//   }

//   & .${classes.selectLabel} {
//     margin: 0;
//   }

//   & .${classes.displayedRows} {
//     margin: 0;

//     @media (min-width: 768px) {
//       margin-left: auto;
//     }
//   }

//   & .${classes.spacer} {
//     display: none;
//   }

//   & .${classes.actions} {
//     display: flex;
//     gap: 0.25rem;
//   }
// `;

// export default function UnstyledTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const handleChangePage = (
//     event,
//     newPage,
//   ) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Root sx={{ maxWidth: '100%', width: 500 }}>
//       <table aria-label="custom pagination table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>StartDate</th>
//             <th>EndDate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row) => (
//             <tr key={row.name}>
//               <td>{row.name}</td>
//               <td style={{ width: 160 }} align="right">
//                 {row.calories}
//               </td>
//               <td style={{ width: 160 }} align="right">
//                 {row.fat}
//               </td>
//             </tr>
//           ))}
//           {emptyRows > 0 && (
//             <tr style={{ height: 41 * emptyRows }}>
//               <td colSpan={3} />
//             </tr>
//           )}
//         </tbody>
//         <tfoot>
//           <tr>
//             <CustomTablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               slotProps={{
//                 select: {
//                   'aria-label': 'rows per page',
//                 },
//                 actions: {
//                   showFirstButton: true,
//                   showLastButton: true,
//                 },
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </tr>
//         </tfoot>
//       </table>
//     </Root>
//   );
// }
