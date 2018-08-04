// import React from 'react';

// const ProductMenuItem = () => {
//   return (
//     <div>
//       Product menu items :D
//     </div>
//   )
// }

// export default ProductMenuItem;

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
      width: '200px',
      padding: '0px 2px 100px 2px',
      margin: '2% -10%'
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: theme.spacing.unit * 2,
    width: '100%',
  },
  menuItem: {
    color: '#949090',
    fontSize: '12px',
    paddingTop: '0px',
    paddingBottom: '0px'
  },
  divHeader: {
    marginTop: '4%',
    marginLeft: '4%',
    color: '#888484;',
    fontSize: '12px',
    fontWeight: 'bold'
  }
});

class ProductMenuItem extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  renderMenuItem = () =>  {
    const { classes } = this.props;
      return (
          <div>
              <div className={classes.divHeader}>HEADING</div>
              <MenuList>
                  <MenuItem className={classes.menuItem}>Profile</MenuItem>
                  <MenuItem className={classes.menuItem}>My account</MenuItem>
                  <MenuItem className={classes.menuItem}>Logout</MenuItem>
              </MenuList>
          </div>);
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
         {this.renderMenuItem()}
         {this.renderMenuItem()}
         {this.renderMenuItem()}
         {this.renderMenuItem()}
         {this.renderMenuItem()}
         {this.renderMenuItem()}
        </Paper>
        
      </div>
    );
  }
}

ProductMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductMenuItem);
