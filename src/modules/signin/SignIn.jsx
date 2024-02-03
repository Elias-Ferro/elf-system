import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LockOutlined } from "@mui/icons-material";

const defaultTheme = createTheme({
  pallette: {
    primary: {
      main: "#A3C612",
    },
    secondary: {
      main: "#18C4CB",
    },
  },
});

export default function SignIn() {
  const requiredField = "Campo obrigatório";
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email("Email inválido").required(requiredField),
  //     password: Yup.string().required(requiredField),
  //   }),
  // });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component={"main"} sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/assets/bg-image.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
              <LockOutlined />
            </Avatar>
            <Typography component={"h1"} variant="h5" fontWeight={'600'}>
              Elf System
            </Typography>
            <Box component="form" noValidate onSubmit={""} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Senha"
                name="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "#FFF" }}
              >
                {"Entrar"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link variant="body2">Esqueceu a senha?</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
