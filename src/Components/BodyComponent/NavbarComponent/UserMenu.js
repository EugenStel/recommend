import {Typography} from "@material-ui/core";
import Profile from "../../Header/Navtabs/profile";
import Notification from "../../Header/Navtabs/notification";
import { getUserName } from "../../../redux/user/userSelectors";
import { useSelector } from "react-redux";
import { UserLogoutButton } from "./UserLogoutButton";

import { useStyles } from "../../Header/HeaderStyles";

export const UserMenu = () => {
    const classes = useStyles();
    const userName = useSelector(getUserName);
    return (
        <>
            <Typography variant='h6' className={classes.logo}> {userName} </Typography>
            <Profile />
            <Notification />
            <UserLogoutButton />
        </>
    )
}