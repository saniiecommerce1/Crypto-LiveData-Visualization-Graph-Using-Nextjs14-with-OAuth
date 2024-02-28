'use client'
import React from 'react';
import styles from "./search.module.scss";
import {  DataTableSearch } from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { RootState } from "../../dataInterface";
import Link from "next/link";


const columns: GridColDef[] = [
  { field: "id",  headerName: "ID", width: 300 ,
  renderCell: (params) => {
    return <Link href={`/search/${params.row.id}`}>{params.row.id}</Link>;
  }},
  {
    field: "image",
    headerName: "Symbol",
    width: 250,
    renderCell: (params) => {
      return <Link href={`/search/${params.row.id}`}><img src={params.row.image || "/noavatar.png"} alt="" /></Link>;
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return <Link href={`/search/${params.row.id}`}>{params.row.name}</Link>;
    }}
    
    ,
  
  {
    field: "rank",
    type: "number",
    headerName: "Rank",
    width: 150,
  },
 

];


const Search = () => {

const userRows = useSelector((state:RootState) => state.crypto.searchCoins);



  return (
    <div className={styles.search}>
      <div className={styles.info}>
        <h1>Search</h1>
        
      </div>
      {userRows? <DataTableSearch slug="users" columns={columns} rows={userRows} /> : <div style={{paddingBottom:"100vh"}}>No Search Coins...</div>}
       </div>
  ); 
};

export default Search;
