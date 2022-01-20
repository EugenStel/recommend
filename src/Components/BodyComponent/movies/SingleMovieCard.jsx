import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './movies.css'
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { ModalWindow } from './ModalWindow';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Fab from '@mui/material/Fab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const SingleMovieCard = ({ titleOrigin, overview, poster_path, vote_average, release_date, media_type, MovieId, onPlus, user, movie, userId, isItemAdded }) => {

  const img_500 = "https://image.tmdb.org/t/p/w500";
  let shortDesc = overview.split('.')[0];
  const [isAdded, setIsAdeed] = React.useState(false);


  const handleAddClick = () => {
    onPlus({ ...movie, userId })
    setIsAdeed(!isAdded);
    console.log('added to cart')
  }

  return (
    <Badge badgeContent={vote_average} color="secondary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
      <Card sx={{ display: 'grid', alignContent: 'space-between' }} className='card'>
        <CardMedia component="img" alt="green iguana" height="340" image={`${img_500}${poster_path}`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titleOrigin}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDesc}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {release_date}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Fab variant="extended" color={isAdded ? 'secondary' : 'primary'} sx={{ marginLeft: '5px' }} onClick={handleAddClick} disabled={user == null ? true : false}>
            {isItemAdded(MovieId) ? <FavoriteIcon color='secondary' sx={{ mr: 1 }} /> : <FavoriteBorderOutlinedIcon sx={{ mr: 1 }} />}
            Favourite
          </Fab>
          <Fab variant="circular" color='secondary' sx={{ marginLeft: '5px' }} size="small">
            <ModalWindow media_type={media_type} MovieId={MovieId} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <MoreHorizOutlinedIcon sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
            </ModalWindow>
          </Fab>
        </CardActions>
      </Card>
    </Badge>

  );
}