import React, { useState, useEffect } from "react";
import { Box, IconButton, List, ListItem, ListItemText, Menu } from "@material-ui/core";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import { useStyles } from "../HeaderStyles";
import { getAllRecommends } from '../../../redux/recommend/recommendSelectors'
import { useSelector } from "react-redux";


export default function Notification() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const recommendMovies = useSelector(getAllRecommends);



  return (
    <Box>
      <IconButton aria-controls='Notification' aria-haspopup='true' onClick={handleClick} color='inherit'>
        <NotificationsActiveIcon />
      </IconButton>
      <Menu id='Notification' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
        <List className={classes.navlist}>
          <h1 className="font-bold ml-4">Фильмы:</h1>
          {recommendMovies?.films?.map((item, i) => (
            <ListItem key={i} >
              <ListItemAvatar>
                <Avatar>
                  <VideocamOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <List className={classes.navlist}>
          <h1 className="font-bold ml-4">Книги:</h1>
          {recommendMovies?.books?.map((item, i) => (
            <ListItem key={i} >
              <ListItemAvatar>
                <Avatar>
                  <MenuBookIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <List className={classes.navlist}>
          <h1 className="font-bold ml-4">Напитки:</h1>
          {recommendMovies?.drinks?.map((item, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>
                  <NightlifeOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
