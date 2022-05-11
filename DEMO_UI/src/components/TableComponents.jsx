import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import deletIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Actions = ({ id, val, actionEdit, actionDelete }) => {
  return (
    <div>
      <Button
        startIcon={<img width="25" alt="dlt" src={editIcon} />}
        onClick={() => actionEdit(id, val)}
        size="small"
      ></Button>
      <Button
        onClick={() => actionDelete(id, val)}
        size="small"
        startIcon={<img width="25" alt="dlt" src={deletIcon} />}
      ></Button>
    </div>
  );
};
export default function BasicTable(props) {
  const { data, setValue } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell>Order Name</TableCell>
            <TableCell align="right">Order Number</TableCell>
            <TableCell align="right">Order Address</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map((row, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {data[row].id}
              </TableCell>
              <TableCell component="th" scope="row">
                {data[row].name}
              </TableCell>
              <TableCell align="right">{data[row].number}</TableCell>
              <TableCell align="right">{data[row].address}</TableCell>
              <TableCell align="center">
                {<Actions id={row} val={data[row]} {...props} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
