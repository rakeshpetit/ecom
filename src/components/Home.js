import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import ImageSlider from '../components/ui/ImageSlider/ImageSlider';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '70%',
    // height: '80%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


  const tileData = [
    {
      img: 'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=338&ext=jpg',
      title: 'Bolt',
    },
    {
      img: 'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=338&ext=jpg',
      title: 'Nut',
    },
    {
      img: 'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=338&ext=jpg',
      title: 'Door Knob',
    },
    {
      img: 'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=338&ext=jpg',
      title: 'Door Stopper',
    },
    {
      img: 'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=338&ext=jpg',
      title: 'Chair',
    }
  ];
 
// function TitlebarGridList(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={180} className={classes.gridList}>
//         {tileData.map(tile => (
//           <GridListTile key={tile.img}>
//             <img src={tile.img} alt={tile.title} />
//             <GridListTileBar
//               title={tile.title}/>
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }


const TitlebarGridList = () => {
  return (
    <div>
      <ImageSlider />
      <ImageSlider />
      <ImageSlider />
  
  </div>
  )
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);