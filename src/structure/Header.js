import { AppBar, Button,Toolbar, Typography, Grid, TextField, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ProfileMenu from "./ProfileMenu"
import { currencies, CurrencyContext } from '../hooks/useCurrencyContext'
import { useNavigate } from 'react-router'

const Header = () => {

    let navigate = useNavigate()
    const { currency, changeCurrency } = useContext(CurrencyContext)

    const currencyChangeHandler = (e) => {
        changeCurrency(e.target.value)
    }

    const productsClickHandler = () => {
        navigate('/')
        window.location.reload()
    }

    const componentsClickHandler = () => {
        navigate('/components')
        window.location.reload()
    }

    return(
        <AppBar 
        position="fixed" 
        sx={{bgcolor: 'secondary.main'}}>
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
              alignItems="center">
                <Grid item>
                    <TextField 
                    id="standard-select-currency-native"
                    select
                    value={currency}
                    onChange={currencyChangeHandler}
                    variant="standard"
                    color="success"
                    sx={{ color: 'white'}}>
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                </Grid>
                <Grid item>
                    <Button 
                    onClick={productsClickHandler}
                    sx={{color: '#fff', fontWeight: '600', fontSize: '15px'}}>
                    Products
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                    onClick={componentsClickHandler}
                    sx={{color: '#fff', fontWeight: '600', fontSize: '15px'}}>
                    Components
                    </Button>
                </Grid>
                <Grid item mr={3}>
                <ProfileMenu/>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header