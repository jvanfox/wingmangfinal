import React from 'react';
import API from '../utils/API';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
//import IconButton from '@material-ui/core/IconButton';
//import FormGroup from '@material-ui/core/FormGroup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  border: {
    border: '1px solid black',
    margin: '3px'
  },
  textField: {
    marginLeft: theme.spacing.unit *1,
    marginRight: theme.spacing.unit *1,
  },
  searchActivity: {
    width: "92%",
    marginLeft: theme.spacing.unit *1,
    marginRight: theme.spacing.unit *1,
  },
  submitButton: {
    marginLeft: theme.spacing.unit *1,
    marginRight: theme.spacing.unit *1,
    marginTop: theme.spacing.unit *1,
    marginBottom: theme.spacing.unit *1,
  },
  Activities: {
    marginLeft: theme.spacing.unit *2,
    marginRight: theme.spacing.unit *2,
  },
  ActivitiesB: {
    marginLeft: theme.spacing.unit *2,
    marginRight: theme.spacing.unit *2,
  },
  ActivitiesC: {
    marginLeft: theme.spacing.unit *2,
    marginRight: theme.spacing.unit *2,
  },
  toolbarEnd: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarEndTitle: {
    flex: 1,
  }, 
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

class Main extends React.Component {
  state = {
    search: "",
    city: "",
    activity: "",
    results: [],
    userid: "",
    companion: ""
  };

  componentDidMount() {
    this.setState({
      userid: this.props.userid
    })
  }

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  };

  query = () => {
    API.googleSearch(this.state.activity)
    .then(res => {
      this.setState({
        results: res.data.results
      })
      console.log(res.data.results)
    })
    .catch(err => console.log(err))
  };

  saveActivity = (activity) => {
    console.log(activity.name)
    console.log(activity.formatted_address)
    console.log(activity.rating)
    console.log(this.state.userid)
    API.savePortfolio({
      name: activity.name,
      address: activity.formatted_address,
      rating: activity.rating,
      userid: this.state.userid,
      companion: this.state.companion
    })
    .then(res => alert("Activity Now Saved"))
    .catch(err => console.log(err))
  }

  render() {
  const { classes } = this.props;
  return (
    <React.Fragment>
      {this.props.logged ? (
      <div>
      <CssBaseline />
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
{/*           <IconButton>
          </IconButton>
          <Button variant="outlined" size="small">
            Login Name
          </Button> */}
        </Toolbar>
        
        <main onChange={this.handleInputChange}>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    WINGMAN
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                   Your personal dating assistant...
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
          
                  <TextField
                  id="outlined-search"
                  label="Search for Acitvity"
                  type="text"
                  name="activity"
                  className={classes.searchActivity}
                  placeholder="Baseball in San Diego"
                  margin="normal"
                  style={{ margin: 8 }}
                  variant="outlined"
                  />

                  <TextField
                  id="NameOfCompanion"
                  label="Name of Companion"
                  className={classes.searchActivity}
                  name="companion"
                  margin="normal"
                  variant="outlined"
                  />
                  
                  <Button variant="contained" color="primary" className={classes.submitButton} onClick={this.query}>
                  Submit
                  </Button>

                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <h2>Results</h2>
                  {this.state.results.map(results => (  
                  <div className={classes.border} key={results.id}> 
                    <div><strong>Name:</strong> {results.name}</div>
                    <div><strong>Address:</strong> {results.formatted_address}</div>
                    <div><strong>Rating:</strong> {results.rating}</div>
                    <div><strong>Type Of Establishment</strong> {results.types[0]}</div>
                    <Button variant="contained" color="primary" className={classes.submitButton} onClick={() => this.saveActivity(results)}>
                    Save
                    </Button>
                  </div>
                  ))}
                </Paper>
              </Grid>
            </Grid>
{/*             <Grid container spacing={24}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                </Paper>
              </Grid>
            </Grid> */}
          </div>

          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
          {/* Main content */}   
          {/* End main content */}
          {/* Sidebar */}
            <Grid item xs={12} md={4}></Grid>
            {/* End sidebar */}
            </Grid>
            <Toolbar className={classes.toolbarEnd}>
        
{/*             <Button variant="outlined" size="small">
              Add Note to Engagement
            </Button> */}

            <Link to="/list">
              <Button variant="outlined" size="small">
              Past Engagements
              </Button>
            </Link>

            </Toolbar>
        </main>
      </div>

          
{/*           <TextField
          id="NameOfCompanion"
          label="Name of Companion"
          className={classes.textField}
          //value={this.state.name}
          //onChange={this.handleChange('Name of Companion')}
          margin="normal"
          variant="outlined"
          />

          <TextField
          id="CityOfEvent"
          label="City of Event"
          className={classes.textField}
          name="city"
          //value={this.state.name}
          //onChange={this.handleChange('Name of Companion')}
          margin="normal"
          variant="outlined"
          />

          <TextField
          id="DateOfEvent"
          label="Date of Event"
          className={classes.textField}
          //value={this.state.name}
          //onChange={this.handleChange('Name of Companion')}
          margin="normal"
          variant="outlined"
          />

          <TextField
          id="TimeOfEvent"
          label="Time Of Event"
          className={classes.textField}
          //value={this.state.name}
          //onChange={this.handleChange('Name of Companion')}
          margin="normal"
          variant="outlined"
          />
          <br></br><br></br> */}


        
{/*           <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                className={classes.Activities}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Amusement Parks"
            />
            <FormControlLabel
              control={
                <Checkbox
                className={classes.Activities}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Art Gallerys"
            />

            <FormControlLabel
              control={
                <Checkbox
                className={classes.Activities}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Bars"
            />
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                className={classes.ActivitiesB}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Bowling Alleys"
            />

            <FormControlLabel
              control={
                <Checkbox
                className={classes.ActivitiesB}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Cafes"
            />
        
            <FormControlLabel
              control={
                <Checkbox
                className={classes.ActivitiesB}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Movie Theaters"
            />
          </FormGroup>

          <FormGroup row>
            <FormControlLabel
            control={
              <Checkbox
              className={classes.ActivitiesC}
              //checked={this.state.checkedB}
              //onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
              />
              }
              label="Museums"
              />
            <FormControlLabel
              control={
                <Checkbox
                className={classes.ActivitiesC}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Night Clubs"
            />
            <FormControlLabel
              control={
                <Checkbox
                className={classes.ActivitiesC}
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Restaurants"
            />
          </FormGroup> */}


      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Wingman - Developed by Gina Washington - Elena Mudrakova - Jeffrey Young
        </Typography>
      </footer>
      {/* End footer */}
      </div>
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
}
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);