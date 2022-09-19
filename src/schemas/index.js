import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const signupSchema = yup.object({
  name: yup.string().min(3).max(25).required('Please enter your name'),
  email: yup.string().email().required('Please enter your email'),
  username: yup.string().min(4).max(25).required('Please enter your username'),
  mobile: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please enter your mobile number'),
  password: yup.string().min(6).required('Please enter your password'),
  password2: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
});

export const loginSchema = yup.object({
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().required('Please enter your password')
});
