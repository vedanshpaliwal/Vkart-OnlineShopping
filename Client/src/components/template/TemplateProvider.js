// humko jssPresetab global material ui ki css ko chnage krna ho tb hum createmuitheme ka use krte hai

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider,createTheme} from '@material-ui/core/styles'
import React, { createContext } from 'react'

const Templatecontext = createContext(null);
export const TemplateProvider = ({children})=>{
    const theme = createTheme({
     overrides :{
         MuiDialog : {
             paperWidthSm : {
                 maxWidth : 'none'
             }
         },
         MuiDialogContent :{
            root : {
                padding : 0,
                '&:first-child':{
                    paddingTop : 0
                }
            }

         },
         MuiTableCell :{
             root : {
                 borderBottom : 'none'
             }
         },
         MuiList : {
             paddingTop : 0
         },
        //  css-i4bv87-
        MuiSvgIcon : {
             root :{ 
                 display  : 'none'
             }
         }
     }
    })

    return(
   <Templatecontext.Provider>
       <ThemeProvider theme={theme}>
           <CssBaseline/>
           
            {children}
       </ThemeProvider>
   </Templatecontext.Provider>
    )
}

export default TemplateProvider;