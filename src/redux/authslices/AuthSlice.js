import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AuthLogin, AuthRegister } from "..";

// const authToken =
//   typeof window !== "undefined" &&
//   JSON.parse(localStorage.getItem("authToken"));
export const AuthSlice = createSlice({
  name: "AuthReducer",
  initialState: {
    token: "",
    loading: false,
    errorMessage: "",
    successMessage: "",
    loginSuccessMessage: "",
    loginError: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    //----------------------------------------------------REGISTER-------------->
    builder.addCase(AuthRegister.pending,(state)=>{
      state.loading=true
  })
  .addCase(AuthRegister.fulfilled,(state,action)=>{
      toast.success("Registered Successfully");
      state.loading=false;
  })
  .addCase(AuthRegister.rejected,(state)=>{
      toast.error("Registered invalid")
      state.loading=false;
  })
    //-----------------------------------------------------LOGIN---------------->
  
      .addCase(AuthLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(AuthLogin.fulfilled, (state, action) => {
        toast.success("user Login Successfully")
        state.loading = false;
      })
      .addCase(AuthLogin.rejected, (state, error) => {
        toast.error("User Email or Password invalid ")
        state.loading = false;
      })
  },
});
export default AuthSlice.reducer;
