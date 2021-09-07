import React from 'react'
import Link from 'next/link'
import PageTitle from '../componentes/Pagetitle'

const Contato = () =>{
    return(
      
      
      <div>
          <PageTitle title ='Contato' />
          <div>
              <h1> Contato</h1>
              <Link href='/'>
                  <a>Home</a>
              </Link>
          </div>
        </div>
   )
}

export default Contato