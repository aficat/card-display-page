import React from 'react';
import Pagination from "material-ui-flat-pagination";
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class PaginationBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { offset: 0 };
    }
 
    handleClick(offset) {
      this.setState({ offset });
    }

    render() {
        return (
            <Pagination
              limit={10}
              offset={this.state.offset}
              total={100}
              onClick={(e, offset) => this.handleClick(offset)}
            />
        );
    }
}

export default withStyles(styles)(PaginationBar);