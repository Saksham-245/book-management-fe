import React from 'react';
import logo from '../images/logo.png';
import {Box, Button, Grid, Paper, Typography} from '@mui/material';
import {TextField} from 'mui-rff';
import {Form} from 'react-final-form';
import {login} from '../context/actions';
import {useAuthDispatch} from '../context/context';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const validate = async (values) => {
    if (!values.email) {
      return {email: 'Email is required'};
    }
    if (!values.password) {
      return {password: 'Password is required'};
    }
  };

  const onSubmit = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await login(dispatch, payload);
      if (!response?.user) {
        toast.error(response.response.data.message);
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container component="main" sx={{height: '100vh'}}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item xs={12}
        sm={8} md={5}
        component={Paper} elevation={6} square sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form
            validate={validate}
            onSubmit={onSubmit}
            render={({handleSubmit}) => {
              return <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{mt: 1}}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                </Grid>
              </Box>;
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
