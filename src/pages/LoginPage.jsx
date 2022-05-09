import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { loginUser } from '../modules/user';

function LoginPage() {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      id: '',
    },
  });
  // const { isSuccess, isError, errorMessage } = useSelector(userSelector);

  const onSubmit = async data => {
    await dispatch(loginUser(data));
  };

  /*
  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
    }
    if (isError) {
      console.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);
  */

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="id"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id="id"
                    label="아이디"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="passwd"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id="passwd"
                    label="회원가입"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default LoginPage;