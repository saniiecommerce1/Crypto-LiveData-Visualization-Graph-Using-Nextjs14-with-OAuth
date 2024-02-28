'use client'
import { register } from '@/lib/action'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {

  const router = useRouter()
 //useFormState is a hook
 //form validation at server side benefits not use client JS and state mutate as per the response
 const [state, formAction] = useFormState(register, undefined)  //state initial value undefined
 console.log(state, 'State')

 
 useEffect(()=>{  

state?.success && router.push('/login')

 }, [state?.success , router]
 )


 return(
    <div>
      <h1 className='text-[1.5rem] mb-5'>Register Form</h1>

      {state?.error && <div className='text-[1.2rem] text-red-400'>{state.error}</div>}
     
     <form className={styles.register}>
      
      <input name="username" type="text" placeholder="Username" className=" bg-slate-300 text-blue-600/75" />
      <input name="email" type="email" placeholder="Email" className=" bg-slate-300 text-blue-600/75" />
      <input name="password" type="password" placeholder="Password" className=" bg-slate-300 text-blue-600/75" />
      <input name="passwordConfirm" type="password" placeholder="Confirm Password" className=" bg-slate-300 text-blue-600/75" />
      <input name="image" type="text" placeholder="Image" className=" bg-slate-300 text-blue-600/75" />
      <button formAction={formAction}>Register</button><br/>      

      <Link href='/login'>Have Already an Account ? <b>LOGIN</b></Link>
      </form>
    </div>
  )
}

export default RegisterForm