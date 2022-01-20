import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';

export const UserLoginButton = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Link to='/login'>
            <Button variant="contained" endIcon={<ExitToAppOutlinedIcon />}>
            Sign in
            </Button>
        </Link>
      
    </Stack>
  );
}