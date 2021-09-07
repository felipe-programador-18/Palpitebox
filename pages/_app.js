import React from 'react'
import "../css/style.css"
import Layout from '../componentes/Layout'
const MyApp = ({Component, pageProps}) => {
   return(
       <Layout>

       <Component {...pageProps}/>  
       </Layout>       
    )
}

export default MyApp