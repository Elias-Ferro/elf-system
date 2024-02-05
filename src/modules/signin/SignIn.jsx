import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Copyright from "../../components/Copyright";

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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component={"main"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        {/* <Grid
          item
          xs={12}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/assets/bg-image.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        /> */}
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          sx={{
            marginTop: 30,
          }}
        >
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>LOGO</Avatar> */}
            <Typography component={"h1"} variant="h5" fontWeight={"600"}>
              {/* ... */}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
                sx={{ mt: 5, mb: 2, color: "#FFF" }}
              >
                {"Entrar"}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link variant="body2">Esqueceu a senha?</Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
