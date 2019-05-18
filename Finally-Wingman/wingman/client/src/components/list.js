import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import API from '../utils/API';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

/* let id = 0;
function createData(Companion, Date, Time, Location, Notes) {
  id += 1;
  return { id, Companion, Date, Time, Location, Notes };
} */

/* const rows = [
  createData('Stacy', "1/1/2019", "5pm", "Italia, Funzone, Mixer", 4.5),
  createData('Amber', "2/2/2019", "4pm", "Sevillas, Omnia"),
  createData('Jessica', "3/3/2019", "430pm", "Roscos", 6.0),
  createData('Stacy', "4/4/2019", "730pm", "Petco Park, Bubs", 4.3),
  createData('Stacy', "5/5/2019", "930pm", "Matress Firm, Mavericks", 3.9),
]; */

class SimpleTable extends React.Component  {
  state = {
    portfolio: []
  }

  componentDidMount() {
    this.getPortfolio();
  }

  getPortfolio = () => {
    API.getPortfolios()
    .then(res => {
      let currPortfolio = res.data.filter(res => parseInt(res.userid) === this.props.userid)
      this.setState({
        portfolio: currPortfolio
      })
    })
    .catch(err => console.log(err))
  }

  render() {
  const { classes } = this.props;
    return (
      <div>
      {this.props.logged ? (
      <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name Of Companion</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Location Name</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Location Rating</TableCell>         

            </TableRow>
          </TableHead>
          <TableBody>
             {this.state.portfolio.map(portfolio => ( 
              <TableRow key={portfolio.id}>
                <TableCell component="th" scope="row">{portfolio.companion}</TableCell>
                <TableCell align="right">{portfolio.createdAt}</TableCell>
                <TableCell align="right">{portfolio.name}</TableCell>
                <TableCell align="right">{portfolio.address}</TableCell>
                <TableCell align="right">{portfolio.rating}</TableCell>
{/*                 <Button align="right" variant="outlined" size="small">
                Review Note
                </Button>
                <Button alighn="right" variant="outlined" size="small">
                Delete Engagement
                </Button> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Link to="/main">
        <Button align="right" variant="outlined" size="small">
        Back To Search Page
        </Button>
      </Link>
      </div>
      ) : (
        <Redirect to="/" />
      )}
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);