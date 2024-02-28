import React from 'react';
import { Trend, Search} from '../../dataInterface';
import styles from "./dataTable.module.scss";

import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";


type PropsTrend = {
  columns: GridColDef[];
  rows: Trend[] | null;
  slug: string;
};

type PropsSearch = {
  columns: GridColDef[];
  rows: Search[] | null;
  slug: string;
};

export const DataTableTrend = (props: PropsTrend) => {

  return (
    <div className={styles.dataTable}>
      <DataGrid
        className={styles.dataGrid}
        rows={props.rows? props.rows : []}
        columns={[...props.columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
   
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};


export const DataTableSearch = (props: PropsSearch) => {

  return (
    <div className={styles.dataTable}>
      <DataGrid
        className={styles.dataGrid}
        rows={props.rows? props.rows : []}
        columns={[...props.columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
   
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};


