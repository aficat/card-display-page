import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class Media extends React.Component {

    render() {
        const { classes } = this.props;
        return (
                <Grid item xs={6} sm={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Media Title
                        </Typography>
                                <Typography component="p">
                                    Media Description
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="inherit">
                                Username
                    </Button>
                            <Button size="small" color="inherit">
                                <DeleteIcon />
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
        );
    }
}

Media.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Media);