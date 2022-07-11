import { AppBar, Toolbar, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material"

const Header = (props) => {
    return(
        <AppBar 
        position="fixed" 
        sx={{bgcolor: 'secondary.main'}}
        >
            <Toolbar >
                <Typography component={Link}
                    to="/"
                    variant="h5"
                    ml={5}
                    fontWeight="bold">
                    Fruitilicious
                </Typography>
                <Grid
              container
              spacing={6}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
                <Grid item>
                    Switch Currency     
                    {/* to be implemented */}
                </Grid>
                <Grid item>
                <Typography component={Link}
                    to="/"
                    variant="h6">
                    Products
                </Typography>
                </Grid>
                <Grid item>
                <Typography component={Link}
                    to="/components"
                    variant="h6">
                    Components
                </Typography>
                </Grid>
                <Grid item>
                {(props.isLoggedIn)?
                <AccountCircle/>   
                : <Typography component={Link}
                    to="/login"
                    variant="h6"
                    mr={6}
                    ml={3}>
                    Login
                </Typography>}
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;