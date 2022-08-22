import { object, string, number } from "yup";

//LogIn Form
 let LogInFormValidation = object({
  Email: string().required(),
  Password: string().required(),
});



export default LogInFormValidation;