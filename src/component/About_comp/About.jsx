import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../Home';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  center: {
    margin : "auto",
    marginTop : "30px"
  }
});

function About() {
  const reduxData = useSelector((state) => state.UserReducer.userValue)
  const classes = useStyles();
  console.log("reduxData",reduxData);

  return(<>
<Home/>
<Grid container
className={classes.center}
  direction="row"
  justifyContent="center"
  alignItems="center"
  item xs={8}>
<TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>S No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reduxData[0] !== undefined ? reduxData.map((row,i) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {i +1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
            </TableRow>
          )): null}
        </TableBody>
      </Table>
    </TableContainer>
              </Grid>

  </>);
}

export default About;

