import React, { useEffect, useState } from 'react';
import { Button, TextField,Container,Typography,Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { SignupSchema, loginSchema } from '../../utils/validations/allSchemas/AllSchemas';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from 'react-redux';
import { AuthRegister, RegisterLogin, updateEmployee } from '../../redux';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import Box from '@mui/material/Box';

const Register = () => {
  const[editId,setEditId]=useState("")
  let dispatch=useDispatch(); 
  let navigate=useNavigate();
  let {state}=useLocation();
 const {loading,loginSuccessMessage}= useSelector((state)=>state?.AuthSlice)
  const {
    register,
    handleSubmit,setValue,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange", // "onBlur"
    resolver: yupResolver(SignupSchema) 
  });

  const onSubmit=(e,data)=>{
   
    console.log("up-ke-e",e);
   
    let updateBtnAccess= document.getElementById("upbtn")?.getAttribute("name");
    let registerBtnAccess= document.getElementById("registerBtn")?.getAttribute("name");

    console.log("updateBtn",updateBtnAccess);
    console.log("registerBtnAccess",registerBtnAccess);

    if(updateBtnAccess && updateBtnAccess==="upbtn"){
        let updtObj={
          id:editId.id,
          name:e.name,
          email:e.email,
          number:e.number,
          password:e.password
        }
        dispatch(updateEmployee(updtObj))
        reset();
        navigate("/allUser")
      }
      
      if(registerBtnAccess && registerBtnAccess==="registerBtn"){
        dispatch(AuthRegister(e))
        navigate("/allUser")
        reset();
      }
  }

  // EDIT VALUE SET IN FORM---------------------

  useEffect(()=>{
    console.log("edit-stateeee",state);
    if(state){
      console.log(12121212,state);
      setEditId(state.editobj)
      setValue("name",state?.editobj?.name, { shouldValidate: true });
      setValue("number",state?.editobj?.number, { shouldValidate: true });
      setValue("email",state?.editobj?.email, { shouldValidate: true });
      // setValue("password",state?.editobj?.name, { shouldValidate: true });

    }
   
  },[state])


  useEffect(()=>{
if(loginSuccessMessage){
  setTimeout(()=>{
    navigate("/allUser")
  },500) 
}
  },[loginSuccessMessage])


  return (
    <Grid sx={{  backgroundImage: "linear-gradient(to right, red , yellow)"}}>
      <Container  component="main" maxWidth="xs" sx={{padding:"50px"}}>
      <Box
        sx={{  
        background: "white",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",

          margin:"auto",
          border: "1px solid 	#E8E8E8",
          '&:hover': {
            boxShadow:"0px 0px 62px -1px black",
            transition: "box-shadow  0.8s"
          },
        }}
      >
        {console.log("object-errrr",errors)}
            <Typography component="h1" size="small" sx={{textAlign:"center",padding:"10px" ,backgroundColor:"black",color:"white",marginBottom:"20px"}} variant="h5">
         {state?"Update User" :"Register"} 
        </Typography>
      <form onSubmit={handleSubmit(onSubmit)}   >
      <TextField fullWidth sx={{marginBottom:"-25px"}} size="small" {...register("name", { required: true })} id="outlined-basic" label="Enter Name" variant="outlined" /><br/><br/>
      {errors.name && <span class="err-note">{errors.name?.message}</span>} <br/><br/>
      
      <TextField fullWidth  sx={{marginBottom:"-25px"}} size="small" {...register("number", { required: true })} id="outlined-basic" label="Enter Mobile Number" variant="outlined" /><br/><br/>
      {errors.number && <span class="err-note">{errors.number?.message}</span>} <br/><br/>

      <TextField fullWidth sx={{marginBottom:"-25px"}} size="small" {...register("email", { required: true })} id="outlined-basic" label="Enter Email" variant="outlined" /><br/><br/>
      {errors.email && <span class="err-note">{errors.email?.message}</span>} <br/><br/>
      <TextField  fullWidth sx={{marginBottom:"-25px"}} size="small" {...register("password", { required: true })}id="outlined-basic" label="Enter Password" variant="outlined" /><br/><br/>
      {errors.password && <span class="err-note">{errors.password?.message}</span>} <br/><br/>

      <TextField fullWidth sx={{marginBottom:"-25px"}} size="small" {...register("password_repeat", { required: true })}id="outlined-basic" label="Enter Confirm Password" variant="outlined" /><br/><br/>
      {errors.password_repeat && <span class="err-note">{errors.password_repeat?.message}</span>} <br/><br/>
      
     {state?<><Button size="small"  sx={{backgroundColor:"green",marginBottom:"-25px"}} value="updtbtn" id="upbtn" name="upbtn"  fullWidth type="submit" variant="contained" >{loading?<PulseLoader/>:"Update"}</Button><br/><br/></>:<> <Button size="small"  sx={{backgroundColor:"green",marginBottom:"-25px"}}  fullWidth type="submit" value="register" id="registerBtn" name="registerBtn" variant="contained" >{loading?<PulseLoader/>:"Register"}</Button><br/><br/></>}
      </form>
          {state?null :<><p>You  have Already account</p> 
              <Button size="small" sx={{marginBottom:"-25px"}}   fullWidth variant="contained" onClick={()=>navigate("/login")}>login</Button></>} 
      </Box>
    </Container>
    </Grid>
  );
}

export default Register;
