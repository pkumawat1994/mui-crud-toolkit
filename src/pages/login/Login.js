import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/validations/allSchemas/AllSchemas';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from 'react-redux';
import { AuthLogin } from '../../redux';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  let dispatch=useDispatch();
  let navigate=useNavigate();
  const {
    register,
    handleSubmit,setValue,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange", // "onBlur"
    resolver: yupResolver(loginSchema) 
  });

  const onSubmit=(data)=>{
    if(data){
      dispatch(AuthLogin(data))
    }
  }
  return (
    <Grid sx={{  backgroundImage: "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )"}}>
      <Container  component="main" maxWidth="xs" sx={{padding:"50px"}}>
      <Box
        sx={{  
        background: "white",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",

          margin:"auto",
          border: "1px solid 	#E8E8E8",
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [],
          // },
        }}
      >
<Typography component="h1" size="small" sx={{textAlign:"center",padding:"10px" ,backgroundColor:"black",color:"white",marginBottom:"20px"}} variant="h5">
          Login
        </Typography>
      <form onSubmit={handleSubmit(onSubmit)}   >
      <TextField fullWidth {...register("email", { required: true })} id="outlined-basic" label="Enter Email" variant="outlined" /><br/>
      {errors.email && <span class="err-note">{errors.email?.message}</span>} <br/><br/>
      <TextField fullWidth  {...register("password", { required: true })}id="outlined-basic" label="Enter Password" variant="outlined" /><br/>
      {errors.password && <span class="err-note">{errors.password?.message}</span>} <br/><br/>
      <Button type="submit" fullWidth variant="contained" size="large">LOGIN</Button><br/><br/>
      </form>
      <p>You Dont't  have a account</p> 
              <Button size="small"  fullWidth variant="contained" onClick={()=>navigate("/register")}>SignUp</Button>
      </Box>
      </Container>
      </Grid>
      )
}

export default Login;
