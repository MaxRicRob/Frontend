import { AppBar, Toolbar, Typography, Grid, TextField, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu"

const Header = (props) => {

    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'MXN',
          label: 'MX$',
        },
        {
          value: 'CAD',
          label: 'CA$',
        },
        {
          value: 'YEN',
          label: '¥',
        },
        {
          value: 'POUND',
          label: '£',
        }
      ];

    const [currency, setCurrency] = useState('EUR');

    const currencyChangeHandler = (e) => {
        const enteredCurrency = e.target.value;
        setCurrency(enteredCurrency);
    }

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
                    <TextField 
                    id="standard-select-currency-native"
                    select
                    value={currency}
                    onChange={currencyChangeHandler}
                    variant="standard"
                    color="success"
                    sx={{ color: 'white'}}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
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
                <Grid item mr={3}>
                <ProfileMenu/>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;