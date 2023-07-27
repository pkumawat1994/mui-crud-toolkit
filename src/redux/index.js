import { createAsyncThunk } from "@reduxjs/toolkit";
import CommonUrl from "../apiServices/CommonUrl";
import axios from "axios";

export const AuthLogin = createAsyncThunk(
    "AuthReducer/AuthLogin",
    async (inputData, { rejectWithValue }) => {
      
      const login_response = await CommonUrl.get("/employee");
      console.log("login_response",login_response);
      let userDetail= login_response?.data?.find((ele)=>(ele.email===inputData.email && ele.password===inputData.password))
       
      if(userDetail.email===inputData.email && userDetail.password===inputData.password){
          return  userDetail
      }
     
    }
  );



  // Register--------------------------------------------

  export const AuthRegister = createAsyncThunk(
    "AuthReducer/AuthRegister",
    async (data, { rejectWithValue }) => {
      try {
        const register_response = await CommonUrl.post("/employee", data);
        console.log("resppnseee_Api", register_response);
        if (register_response.status === 201) {
          return register_response;
        }
      } catch (err) {
        return rejectWithValue(err?.response?.data);
      }
    }
  );



  // -------------------------------Get-user-List------------------------------------------------------------

  

  export const GetAllUserAction = createAsyncThunk(
    "UserReducer/GetAllUserAction",
    async (_, { rejectWithValue }) => {
      try {
        const register_response = await CommonUrl.get("/employee");
        console.log("getUser_Api", register_response);
        if (register_response.status === 200) {
          return register_response;
        }
      } catch (err) {
        return rejectWithValue(err?.response?.data);
      }
    }
  );

  // ----------------------Delete user-----------------------------

  

//-UPDATE _USER-------------------------------------------------------------

export const updateEmployee=createAsyncThunk("userReducer/updateEmployee",async(data,{rejectWithValue})=>{
  console.log(10000212,data)
  try{
      const register_response = await CommonUrl.put(`/employee/${data.id}`,data);
      console.log("user-Delete", register_response);
      if (register_response.status === 200) {
        return register_response;
      }
  }catch(err){
      rejectWithValue(err)
  }

})

//  DELETE-EMPLOYEE----------------------------------------------------------

export const deleteEmployee=createAsyncThunk("userReducer/deleteEmployee",async(id,{rejectWithValue})=>{
  console.log(10000212,id)
  try{
      const register_response = await CommonUrl.delete(`/employee/${id}`);
      console.log("user-Delete", register_response);
      if (register_response.status === 200) {
        return register_response;

      }
  }catch(err){
      rejectWithValue(err)
  }

})