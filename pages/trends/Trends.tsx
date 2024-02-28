'use client'

import React from 'react';
import styles from "./Trends.module.scss";
import { GridColDef } from "@mui/x-data-grid";
import { DataTableTrend } from "../../components/dataTable/DataTable";
import '../../styles/responsive.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "../../dataInterface";
import Link from "next/link";


const columns: GridColDef[] = [
  { field: "id",  headerName: "ID", width: 200 ,
  renderCell: (params) => {
    return <Link href={`/trends/${params.row.id}`}>{params.row.id}</Link>;
  }},
  {
    field: "image",
    headerName: "Symbol",
    width: 150,
    renderCell: (params) => {
      return <Link href={`/trends/${params.row.id}`}><img src={params.row.image || "/noavatar.png"} alt="" /></Link>;
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return <Link href={`/trends/${params.row.id}`}>{params.row.name}</Link>;
    }}
    
    ,
  
  {
    field: "price",
    type: "number",
    headerName: "Price",
    width: 150,
  },
  {
    field: "priceBTC",
    type: "number",
    headerName: "Price BTC",
    width: 300,
  },

];


const Trends = () => {

const userRows = useSelector((state:RootState) => state.crypto.trendCoins);

  return (
    <div className={styles.trends}>
      <div className={styles.info}>
        <h1>Trending</h1>
        
      </div>
      <DataTableTrend slug="users" columns={columns} rows={userRows} />
       </div>
  );
};

export default Trends;
