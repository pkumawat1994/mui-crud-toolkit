import * as Yup from "yup";

export const loginSchema = Yup.object({
email: Yup.string("Enter your email")
    .email("*Enter a valid email*")
    .required("*Email is required*"),

password: Yup.string("Enter your password")
    .required("*Password is required*")
   
});

// signup------------------------------------------------------------------

export const SignupSchema = Yup.object({
    name:Yup.string("Enter Name")
    .required("*Name is required*"),

    email: Yup.string("Enter your email")
        .email("*Enter a valid email*")
        .required("*Email is required*"),
        number: Yup.number()
        .typeError('Please enter only numeric digits')
        .positive('Please enter only numeric digits')
        .integer('Please enter only numeric digits')
        .test('is-ten-digits', 'Please enter a 10-digit mobile number', value => {
          if (!value) return true; // Skip validation if the field is empty
          return value.toString().length === 10;
        })
        .required("Mobile Number is required"),

    password: Yup.string("Enter your password")
        .required("*Password is required*")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Password Must be  8 Characters combination of Uppercase,Lowercase, Number special case Character"
        ),
    password_repeat: Yup.string("enter confirm password")
        .required('Password is mendatory')
        .oneOf([Yup.ref('password')], 'Passwords does not match'),
    });