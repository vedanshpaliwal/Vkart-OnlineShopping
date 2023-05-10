import { Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'
import { navData } from '../../constants/data'
import { makeStyles } from '@material-ui/core'
const useStyle =makeStyles(theme=>({
    componenta : {
        display : 'flex',
        margin : '60px 130px 0 130px',
        justifyContent : 'space-between',
        overflowX : 'overlay',
        [theme.breakpoints.down('md')] : {
            margin : 0

        }
    },
    container : {
       textAlign : 'center',
       padding : '12px 8px'
    },
    image : {
        width : 64
    },
    text : {
        fontSize : 12
    }
}));

export default function Navbar() {

    const classes = useStyle()
    return (
        <div>

            <Box className = {classes.componenta}>
                {
                    navData.map(data =>(
                        <Box className ={classes.container}>
                        <img src={data.url} className = {classes.image}/>
                        <Typography className ={classes.text}> {data.text}</Typography>
                        </Box>
                    ))
                }

                
            </Box>
        </div>
    )
}
