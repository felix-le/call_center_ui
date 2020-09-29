import React, { memo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Button, TextField } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import gradients from '../../helpers/gradients';
import authCover from '../../assets/img/auth_cover.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2),
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32,
  },
  loginForm: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  submitButtonWrapper: {
    marginTop: 16,
  },
  loginErrorText: {
    marginTop: 7,
  },
}));

const Login = ({ onSubmit, isRequestLogin, loginError }) => {
  const { handleSubmit, errors, control } = useForm({
    criteriaMode: 'firstError',
    mode: 'onSubmit',
  });
  const classes = useStyles();
  const defaultValues = {
    email: '',
    password: '',
  };
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <LockIcon className={classes.icon} />
        <Typography gutterBottom variant="h3">
          Đăng nhập
        </Typography>
        <Typography variant="subtitle2">Đăng nhập vào trình quản lý email của Tadu.vn</Typography>
        <form className={classes.loginForm} action="" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.fields}>
            <Controller
              name="email"
              type="email"
              control={control}
              defaultValue={defaultValues.email}
              rules={{
                required: 'Vui lòng không để trống thông tin',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Định dạng email không đúng',
                },
              }}
              render={(props) => (
                <TextField
                  error={errors && errors.email}
                  fullWidth
                  helperText={errors && errors.email && errors.email.message}
                  label="Email"
                  name="email"
                  variant="outlined"
                  {...props}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue={defaultValues.password}
              rules={{
                required: 'Vui lòng không để trống mật khẩu',
              }}
              render={(props) => (
                <TextField
                  error={errors && errors.password}
                  fullWidth
                  helperText={errors && errors.password && errors.password.message}
                  label="Mật khẩu"
                  name="password"
                  type="password"
                  variant="outlined"
                  {...props}
                />
              )}
            />
          </div>
          <div className={classes.submitButtonWrapper}>
            <Button type="submit" color="primary" size="large" fullWidth variant="contained">
              <span>{isRequestLogin ? 'Vui lòng đợi...' : 'Đăng nhập'} </span>
            </Button>
            {loginError && (
              <Typography className={classes.loginErrorText} variant="error" display="block">
                Có lỗi khi đăng nhập
              </Typography>
            )}
          </div>
        </form>
      </CardContent>
      <CardMedia className={classes.media} image={authCover} title="Cover"></CardMedia>
    </Card>
  );
};

export default memo(Login);
