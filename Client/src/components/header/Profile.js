import { makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade'
import {Link} from 'react-router-dom'
import { PowerSettingsNew } from '@material-ui/icons';

const useStyle = makeStyles({
    component: {
        marginTop: 40,
    },
    logout: {
        fontSize: 14,
        marginLeft: 20
    },
    header : {
        color  : 'white',
        textDecoration : 'unset',
        borderBottom : 'none'
    }
})

export default function Profile({ account, setAccount }) {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount(null);
    }

    return (
        <>
          <Link onClick={handleClick}><Typography className={classes.header} style={{ marginTop: 2 }}>{account}</Typography></Link>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={() => {handleClose(); logout()}}>
                    <PowerSettingsNew fontSize='small' color='primary'/> 
                    <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}
