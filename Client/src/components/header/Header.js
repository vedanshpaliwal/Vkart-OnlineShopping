import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Box, Drawer, List, ListItem } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Button } from '@material-ui/core';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchBar from './SearchBar';
import { withStyles } from '@material-ui/styles';
import HeaderButton from './HeaderButton';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import { Link } from 'react-router-dom';
const useStyle = makeStyles(theme => ({
    header: {
        background: '#0eabd2',
        height: 70,
        [theme.breakpoints.down('sm')]: {
            height: 70,
            paddingTop: 8
        }
    },
    logo: {
        width: 120,
        marginTop: 10,
        [theme.breakpoints.down('md')]: {
            // position: 'absolute',
            // top: 10
            marginLeft: -10,
            marginRight: 15
        }
    },

    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10

    },
    container: {
        display: 'flex',

    },
    components: {
        marginLeft: "12%",
        lineHeight: 0,
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2%',

        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginBottom: 15
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginTop: 15
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginBottom: 15
        },
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic',
        textDecoration: 'none',
        color: 'white'
    },
    spane: {
        color: 'yellow'
    },
    list: {
        width: 250,
        // background: '#2874f0',
        // color: 'white',
        paddingTop: 0,
        background: '#0eabd2'

    },

    Headerbut: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    menuicon: {
        color: 'white',
        display: 'none',
        marginTop: 10,
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    },
    heeder: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }

}))

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);


export default function Header() {
    const classes = useStyle()
    const logoURL = 'https://i.ibb.co/W0qJrnD/logog.png';
    // const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setopen] = useState(false)
    const handleclose = () => {
        setopen(false)
    }
    const handleopen = () => {
        setopen(true)
    }
    const list = () => {
        return (
            <Box className={classes.list}>
                <List>
                    <Box style={{ background: '#0eabd2', padding: '4px 15px' }}>
                        <img src={logoURL} className={classes.logo} />

                    </Box>
                    <Divider style={{ color: 'white', background: 'white' }} />
                    <ListItem >
                        <Box >
                            <HeaderButton />

                        </Box>
                    </ListItem>
                </List>
            </Box>
        )
    }


    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const lists = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List>

                <ListItem button >

                    <HeaderButton />

                </ListItem>

            </List>
        </Box>
    );



    return (

        <AppBar className={classes.header}>
            <Toolbar>
                {/* <IconButton color='inherit'  className={classes.menu} onClick={handleopen}>
                    <MenuIcon   />
                </IconButton>
                <Drawer open={open} onClose={handleclose}>
                    {list()}
                  
                </Drawer> */}

                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} className={classes.menuicon}><MenuIcon /></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {/* {list(anchor)} */}
                            {list()}

                        </Drawer>
                    </React.Fragment>
                ))}











                <Link to='/' className={classes.components} style={{ textDecoration: 'none' }}>
                    <img src={logoURL} className={classes.logo} />
                    {/* <Box className={classes.container}>
                        <Typography className={classes.subHeading} >Explore <span className={classes.spane}>Plus</span></Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box> */}
                </Link>

                <SearchBar />
                <span className={classes.heeder}><HeaderButton /></span>

            </Toolbar>
        </AppBar>

    )
}
