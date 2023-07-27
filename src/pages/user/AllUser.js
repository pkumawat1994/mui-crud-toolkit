
import { useDispatch, useSelector } from 'react-redux';
import {GetAllUserAction, deleteEmployee } from '../../redux';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material';
import { PulseLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const AllUser = () => {
const {userList,loading}=  useSelector((state)=>state?.UserSlice)
  let dispatch=useDispatch();
  let navigate=useNavigate();
  
  const getUser=()=>{
    dispatch(GetAllUserAction())
  }

  React.useEffect(()=>{
    getUser()
  },[])

  const deleteHandle=(a,b)=>{
   
    console.log("Delete-ID",b)
    dispatch(deleteEmployee(b.id))
    setTimeout(()=>{
      getUser()
    },5)
  }

  const editHandle=(a,editobj)=>{
    console.log("edittt",editobj);
    navigate("/register",{state:{editobj}})
    
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'number',
      headerName: 'Mobile Number',
      // type: 'number',
      width: 150,
    }, { field: 'actions', headerName: 'Actions', width: 400, renderCell: (params) => {
      return (<>
      <Button
          onClick={(e) => deleteHandle(e, params.row)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>&nbsp;

        <Button
          onClick={(e) => editHandle(e, params.row)}
          variant="contained"
        >
          Edit
        </Button>
      </>
      );    
    } }
  ];
  
  return (
    <div sx={{ height: 400, width: '80%',margin:"auto",marginTop:"40px", marginBottom:"40px" }}>
      {loading? <PulseLoader/>  :<DataGrid
        rows={userList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        getRowId={(r) => r.id}
        pageSizeOptions={[5, 10]}
      />}
    </div>
  );
}

export default AllUser;









