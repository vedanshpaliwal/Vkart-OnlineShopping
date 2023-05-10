import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles } from '@material-ui/core';


const useStyle  = makeStyles(theme=>({
   image : {
       width : '100%',
       height : 280,
       [theme.breakpoints.down('sm')]:{
           objectFit : 'cover',
           height : 180
       }
   },
   Carousel :{
       marginTop : 10
   }
}))
export default function Banner() {
    const classes = useStyle()
    return (
        <div>
            <Carousel   
            autoPlay = {true} 
            animation = 'slide' 
            interval='3000' 
            indicators={false} 
            navButtonsAlwaysVisible={true} 
            cycleNavigation={true}
            navButtonsProps = {{
                   style : {
                       background : '#ffffff',
                       color : '#494949',
                       borderRadius : 0,
                       paddingTop : '20px',
                       paddingBottom : '20px',
                    //    borderTopRightRadius : '6px',
                    //    borderBottomRightRadius:'6px',
                       paddingRight : '14px',
                       position : 'relative',
                       top : '0%',
                   }
               }} 
               className={classes.Carousel}
            >
                {
                    bannerData.map((image) => (
                        <img src ={image} className={classes.image}/>
                    ))
                }
            </Carousel>
        </div>
    )
}
