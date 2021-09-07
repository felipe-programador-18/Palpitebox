import React, { useState } from 'react'
import PageTitle from '../componentes/Pagetitle'



const Pesquisa = () =>{
    const [form, setForm] = useState (
         {
        Nome: '',
        Email:'',
        Whatsapp:'',
        Sugestao: '',
        Nota: 0
    })
     const notas = [0,1,2,3,4,5]
     const [success, setSuccess] = useState (false)
     const [retorno, setRetorno] = useState ({})


   const save = async () => {
  
    try {
     const response = await fetch('/api/save' , {
        method: 'POST',
        body: JSON.stringify(form)
    })
    const data = await response.json()
    setSuccess(true)
    setRetorno(data) 

   } catch(error){
   }
        }

       const onChange = evt => {
         const value = evt.target.value  
         const key = evt.target.name
        setForm( old => ({
               ...old ,
               [key] : value,
               
           })) 
       }
        
        

    return(
        <div className='pt-6 my-4'>
            <PageTitle title ='Pesquisa' />
            <h1 className='text-center font-bold text-2xl'>Críticas e sugestões.</h1>
            <p className='text-center'>O restaurante Mahhatan sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
           
        { ! success &&    <div className='w-48 mx-auto py-4'>
                <label className='font-bold text-center'>Seu Nome</label>
                <input className='bg-blue-100 p-4 rounded-lg block py-4 m-3' type='text' placeholder='Nome' onChange={onChange} name='Nome' value = {form.name} /> 

                <label className='font-bold text-center'>Email</label>
                <input className='bg-blue-100 p-4 rounded-lg block py-4 m-3' type='email' placeholder='Email' onChange={onChange} name='Email' value = {form.Email} />

                <label className='font-bold  text-center'>Whatsapp:</label>
                <input className='bg-blue-100 p-4 rounded-lg block py-4 m-3' type='tel' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value = {form.Whatsapp} />

                 
                <label className='font-bold  text-center'>Nota:</label>
                 
                <div className='flex py-6'>
               { notas.map (nota => {
                return (<label className='block w-1/6 text-center'>  {nota}
                <br/>  
                                <input type='radio' name='Nota' value={nota} onChange={onChange} />
                        </label> ) 
                })}
                 </div>  

                <button className='bg-blue-400 px-12 py-4 ml-12 m-4 font-white rounded-lg hover:shadow hover:bg-red-500 ' onClick ={save}>salvar</button>
               
            </div>} 
            { success && <div className='w-48 mx-auto py-4'>
             <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>

             {
                 retorno.showCoupon && 
                 <div className='text-center border p-4 mb-4'>
                     Seu Cupom : <br/>
                    <span className='font-bold text-2xl'> {retorno.Cupom} </span>
                    

                </div>
             }
             
             {
                 retorno.showCoupon && 
                 <div className='text-center border p-4 mb-4'>
                    <span className='font-bold block mb-2'> {retorno.Promo} </span>
                    <br/>
                    <span className='italic'>Tire um print ou uma foto desta tela e aprensente ao garçon.</span>
                </div>
             }

             </div>}
        </div>
    )
}

export default Pesquisa