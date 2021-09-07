import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
const Header = () => {
    return(
        <React.Fragment>
        <div className={styles.wrapper} >
        <div className='container mx-auto'>
        <Link href='/'>
        <a><img className="mx-auto" src="/logopalpite.png" alt="Palpite box"/></a> 
        </Link>
        
        </div>
        </div>

        <div className="bg-red-100 p-1 shadow-md text-center">
        
        <Link href='/sobre'>
           <a className=" hover:underline px-2">Sobre</a>
       </Link>
       <Link href='/contato'>
           <a className=" hover:underline px-2">Contato</a>
       </Link>
       <Link href='/pesquisa'>
           <a className=" hover:underline px-2">Pesquisa</a>
       </Link>

        </div>
      </React.Fragment> 
    )
}

export default Header