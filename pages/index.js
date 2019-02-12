import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SideNav from '../components/SideNav';
import MediaList from '../components/MediaList';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    padding: 50,
  }
});

class Index extends React.Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                <SideNav />
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  Media List
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root}>
              <MediaList />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
