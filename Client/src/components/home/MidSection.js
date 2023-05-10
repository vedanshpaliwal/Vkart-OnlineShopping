import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { ImageURL } from '../../constants/data'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    box: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    }
})


export default function MidSection() {
    const classes = useStyle()
    return (
        // <Box className={classes.box}>>>
        <>             
           <Grid container lg={12} md={12} sm={12} xs={12} className={classes.box}>{

            ImageURL.map(item => (
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={item} style={{ width: '100%' }} />
                </Grid>
            ))

        }
        </Grid>
            {/* // </Box>   */}
        </>

    )
}
