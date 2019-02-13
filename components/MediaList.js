import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Media from './Media';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class MediaList extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {['Media 1', 'Media 2'].map((text) => (
                        <Grid container item xs={8} key={text}>

                            {['MediaA', 'MediaB', 'MediaC', 'MediaD'].map((name) => (
                                <Media classes={classes} key={name} />
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </div>

        );
    }
}

MediaList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaList);