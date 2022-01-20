import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { userLogout } from '../../../redux/user/userActions';
import { useDispatch } from 'react-redux';

export const UserLogoutButton = () => {
    const dispatch = useDispatch();
    const signout = () => {
        dispatch(userLogout())
    }
  return (
    <Stack direction="row" spacing={2} sx={{display: 'flex', alignItems: 'center', marginLeft: '20px'}}>
        <Link to='/'>
            <Button variant="contained" endIcon={<ExitToAppOutlinedIcon />} onClick={signout}>
            Signout
            </Button>
        </Link>
      
    </Stack>
  );
}