import { Container, Typography } from "@mui/material"

const Footer = () => {
    return(
        <Container 
        maxWidth={false}
        sx={{
          position: 'fixed', 
          bottom:1,
          height: 50,
          textAlign: 'center', 
          backgroundColor:'secondary.footer'}} >
            <Typography mt={1}>
              &copy; 2022 - KBE Project by Maxim, Ricardo and Robert
            </Typography>
      </Container>
    )
}

export default Footer