'use client'

import React, { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from "../navbar/navbar.module.scss";
import { useAppDispatch } from "../../redux/store"
import { getSearch } from "../../redux/reducer/AsyncThunkActions";
import Search from '@/public/search.svg'


const AdminSearch = () => {

const [search, setSearch] =useState<string>('') 
const dispatch = useAppDispatch();
const router = useRouter();
 
 const handleSearch = (e:FormEvent<HTMLFormElement>)=>{  

   e.preventDefault()    
   dispatch(getSearch(search));
   router.push('/search')
 }

  return (
 
   <form onSubmit={handleSearch}>

   <div className={styles.search} style={{display: 'flex'}}>
   <input className={styles.inputsearch} type="search" required value={search} placeholder='Search Coin Here...' name='search' id='search' onChange={(e)=>setSearch(e.target.value)}/>
   <button className={styles.buttonsearch} ><Image src={Search} alt="" className={styles.icon} width={26} height={26}/></button>    
   </div>
   
   </form>

   
  )
}

export default AdminSearch