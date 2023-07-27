import { createSlice } from "@reduxjs/toolkit";
import { GetAllUserAction, deleteEmployee, updateEmployee} from "..";
import { toast } from "react-toastify";

// const authToken =
//   typeof window !== "undefined" &&
//   JSON.parse(localStorage.getItem("authToken"));
export const UserSlice = createSlice({
  name: "UserReducer",
  initialState: {
    
    loading: false,
    errorMessage: "",
    successMessage: "",
    
    userList:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    //----------------------------------------------------get All Register-------------->
 
    builder
    .addCase(GetAllUserAction.pending, (state) => {
     
      state.loginError = "";
      state.loading = true;
    })
    .addCase(GetAllUserAction.fulfilled, (state, action) => {
      console.log("GetAllUserAction", action?.payload?.data
      );
      state.userList=action?.payload?.data;
      state.loading = false;
    })
    .addCase(GetAllUserAction.rejected, (state, error) => {
      state.loading = false;
      toast.error(error?.payload?.message)
    })

    // -----------------------------delete-User----------------------

    .addCase(deleteEmployee.pending, (state) => {
        state.loginError = "";
        state.loading = true;
        state.successMessage="";
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        console.log("deleteEmployee", action?.payload);
        // state.successMessage=action?.payload?.data?.message;
        toast.success("Deleted Successfully")
        state.loading = false;
        state.loginError = "";
      })
      .addCase(deleteEmployee.rejected, (state, error) => {
        console.log(555, error?.payload);
        toast.error("delete Error")
        state.loading = false;
        state.loginError = error?.payload?.message;
      })

      //--------------------------Update USer--------------

       .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
        state.successMessage="";
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        console.log("updateEmployee", action?.payload);
        toast.success("Update Successfully")
        state.loading = false;
      })
      .addCase(updateEmployee.rejected, (state, error) => {
        toast.error("Update Error")
        state.loading = false;
      })

  },
});
export default UserSlice.reducer;
