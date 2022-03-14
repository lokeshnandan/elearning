import React from "react";
import {
  IconButton,
  InputAdornment,
  Button,
  Grid,
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Container,
  Checkbox,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import logimg from "../assets/loginimg.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { blue } from "@material-ui/core/colors";


const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Grid container style={{ minHeigh: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={logimg}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          style={{ backgroundColor: "#f0eee9" }}
          justifyContent="center"
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 300,
              maxWidht: 400,
              height: "150%"
            }}
          >
            <Grid container justifyContent="center">
              <Typography style={{ fontSize: "20px", color: "#4CA9FF", marginTop:50, width:"200" }}>Welcome back</Typography>

              <Grid container justifyContent="center">
                <Typography style={{ fontWeight: 'normal',marginTop:10}}>
                  Enter your log in details to access your account
                </Typography>
              </Grid>
            </Grid>
            <Grid
             alignItems="center"
              style={{
                marginTop: 100,
                padding: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Formik
                enableReinitialize={true}
                initialValues={{ userName: "", password: "" }}
                validate={(values) => {
                  let errors = {};
                  if (!values.userName) {
                    errors.userName = "user not found";
                  }
                  if (!values.password) {
                    errors.password = "wrong password";
                  }
                  return errors;
                }}
                onSubmit={async (values) => { }}
              >
                {({ submitForm, isSubmitting, values }) => (
                  <Form>
                    <Grid container spacing={1}>
                      <Grid item xs={8} style={{marginLeft:100}}>
                        <Typography>Email</Typography>
                        <TextField
                          type="userName"
                          name="userName"
                          margin="dense"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={8} style={{marginLeft:100}} >
                        <Typography>Password</Typography>
                        <TextField
                          type={showPassword ? "text" : "password"}
                          name="password"
                          margin="dense"
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          onKeyPress={(e) => {
                            var code = e.keyCode ? e.keyCode : e.which;
                            if (code == 13) {
                              //Enter keycode
                              submitForm();
                            }
                          }}
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        
                        alignItems="center"
                        direction="column"

                        justifyContent="space-between"
                      >
                        <FormGroup>
                          <FormControlLabel control={<Checkbox color="secondary" />} label="Keep me logged in" />

                        </FormGroup>

                        <Button

                          style={{
                            width: "30%",
                            marginTop: "15px",
                            background: "#0088ce",
                          }}
                          variant="contained"
                          typein="submit"
                          onClick={submitForm}
                          disabled={isSubmitting}
                          fullWidth
                        >Log in</Button>
                        
                         
                      </Grid>
                      <Grid  style={{marginLeft:270, marginTop:100}} >
                      <Typography style={{marginTop:90}}>Dont have an account?</Typography>
                         <Button style={{marginTop:10,color:blue}} variant="text">Register here</Button>
                         </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
             
            </Grid>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}



export default Login
