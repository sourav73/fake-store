import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FloatingForm from '../../components/FloatingForm/FloatingForm';
import styles from './Signup.module.scss';
import { useFormik } from 'formik';
import { loginSchema, signupSchema } from '../../schemas';

const Signup = () => {
  const signupFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      mobile: '',
      password: '',
      password2: ''
    },
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  });

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  });

  return (
    <div className={styles.authForm}>
      {/* Tabs switching button */}
      <Tabs defaultActiveKey="signup" className={styles.tab}>
        <Tab eventKey="signup" title="Signup">
          <form action="" onSubmit={signupFormik.handleSubmit}>
            <div className={styles.formGroup}>
              <FloatingForm
                type="text"
                label="Name"
                name="name"
                value={signupFormik.values.name}
                handleChange={signupFormik.handleChange}
              />
              <small className={styles.error}>
                {signupFormik.errors.name && signupFormik.touched.name
                  ? signupFormik.errors.name
                  : null}
              </small>
            </div>
            <div className={styles.formGroup}>
              <FloatingForm
                type="email"
                label="Email"
                name="email"
                value={signupFormik.values.email}
                handleChange={signupFormik.handleChange}
              />
              <small className={styles.error}>
                {signupFormik.errors.email && signupFormik.touched.email
                  ? signupFormik.errors.email
                  : null}
              </small>
            </div>
            <div className={styles.formGroup}>
              <FloatingForm
                type="text"
                label="Username"
                name="username"
                value={signupFormik.values.username}
                handleChange={signupFormik.handleChange}
              />
              <small className={styles.error}>
                {signupFormik.errors.username && signupFormik.touched.username
                  ? signupFormik.errors.username
                  : null}
              </small>
            </div>
            <div className={styles.formGroup}>
              <FloatingForm
                type="text"
                label="Mobile No"
                name="mobile"
                value={signupFormik.values.mobile}
                handleChange={signupFormik.handleChange}
              />
              <small className={styles.error}>
                {signupFormik.errors.mobile && signupFormik.touched.mobile
                  ? signupFormik.errors.mobile
                  : null}
              </small>
            </div>
            <div className={styles.formGroup}>
              <FloatingForm
                type="password"
                label="Password"
                name="password"
                value={signupFormik.values.password}
                handleChange={signupFormik.handleChange}
              />
              <small className={styles.error}>
                {signupFormik.errors.password && signupFormik.touched.password
                  ? signupFormik.errors.password
                  : null}
              </small>
            </div>
            <div className={styles.formGroup}>
              <FloatingForm
                type="password"
                label="Confirm Password"
                name="password2"
                value={signupFormik.values.password2}
                handleChange={signupFormik.handleChange}
              />
              <small className={styles.error}>
                {signupFormik.errors.password2 && signupFormik.touched.password2
                  ? signupFormik.errors.password2
                  : null}
              </small>
            </div>
            <button type="submit" className="btn-grad2 mt-3">
              Signup
            </button>
          </form>
        </Tab>
        <Tab eventKey="login" title="Login">
          <form action="" onSubmit={loginFormik.handleSubmit}>
            <div className={styles.formGroup}>
              <FloatingForm
                type="email"
                label="Email"
                name="email"
                value={loginFormik.values.email}
                handleChange={loginFormik.handleChange}
              />
              <small className={styles.error}>
                {loginFormik.errors.email && loginFormik.touched.email
                  ? loginFormik.errors.email
                  : null}
              </small>
            </div>
            <div className={styles.formGroup}>
              <FloatingForm
                type="password"
                label="Password"
                name="password"
                value={loginFormik.values.password}
                handleChange={loginFormik.handleChange}
              />
              <small className={styles.error}>
                {loginFormik.errors.password && loginFormik.touched.password
                  ? loginFormik.errors.password
                  : null}
              </small>
            </div>
            <button type="submit" className="btn-grad2 mt-3">
              Login
            </button>
          </form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Signup;
