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
      margin: '2% 0%',
      width: 'max-content'
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: theme.spacing.unit * 2,
    width: '100%',
    padding: '20px 200px 0px 200px',
    maxWidth: '96vw',
    maxHeight: '200%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    boxSizing: 'border-box',
    boxShadow: 'none'
  },
  menuItem: {     
    fontFamily: 'Source Sans Pro, sans-serif',   
    fontSize: '14px',   
    paddingTop: '0px',
    paddingBottom: '0px',    
    textAlign: 'left',    
    fontWeight: 400,
    lineHeight: '10px',
    color: '#505050',
    textTransform: 'capitalize'
    
  },
  divPHeader: {
    display: 'inline'
  },
  divHeader: {
    fontFamily: 'Source Sans Pro, sans-serif',
    marginTop: '4%',
    marginLeft: '4%',
    fontSize: '14px',
    textAlign: 'left',    
    fontWeight: 600,
    lineHeight: '20px',
    color: '#111111',
    textTransform: 'uppercase'
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
          <div className={classes.divPHeader}>
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
