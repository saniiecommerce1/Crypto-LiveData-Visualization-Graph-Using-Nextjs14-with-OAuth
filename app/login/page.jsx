'use client'
import {handleGitHubLogin, login} from '@/lib/action'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

const LOGIN = () => {

const [state, formAction] = useFormState(login, undefined) 
const router = useRouter() 

//you can do this by middleware also, OR can redirectTo in server action
// useEffect(()=>{

// if (state?.success) 
// router.push('/')
// router.refresh()
//  }, [state?.success]
//  )


  return (
    <div>  

     <form action={formAction} className='flex flex-col w-[50%] gap-5'>
     {state?.error && <div>{state.error}</div>}<br/> 
     <input name="username" type="text" placeholder="Username" className=" bg-slate-300 text-blue-600/75" />
     <input name="password" type="password" placeholder="Password" className=" bg-slate-300 text-blue-600/75" />     
     <button className='text-start'>Login With <b>CREDENTIALS</b></button>  
     </form>


     <form action={handleGitHubLogin}>
     <button className='mt-10'>OR Login With <b>GITHUB</b></button>      
     </form>

     </div>
  )
}

export default LOGIN