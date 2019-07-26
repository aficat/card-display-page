import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from './Item';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class ItemList extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div align="center">
                <Grid container spacing={24} justify="center" style={{ maxWidth: 1200 }}>
                    {['Item 1', 'Item 2'].map((text) =>
                        ['ItemA', 'ItemB', 'ItemC', 'ItemD'].map((name) => (
                            <Item classes={classes} key={name} />
                        ))
                    )}
                </Grid>
            </div>
        );
    }
}

ItemList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemList);