import React from 'react'

const Footer = () =>{
    return(
    <div className="bg-gray-600 p-6 mt-38 ">
        <div className="mx-auto text-center font-bold text-white">
         Projeto desenvolvido por: Felipe Martins / 
         <a className="hover:underline" href='https://www.linkedin.com/in/felipe-martins-programador'>  linkedin /</a> 
         <a className='hover:underline' href='https://github.com/felipe-programador-18'> Github</a>

        <img className=' mx-auto py-2' src='trademarks.jpg.png'></img> <p className=" font-serif"> ProgrMart</p>
       
        </div>
           
    </div>
    
    )
}

export default Footer