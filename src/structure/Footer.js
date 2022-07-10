import { Container, Typography } from "@mui/material";

const Footer = () => {
    return(
        <Container sx={{
          position: 'fixed', 
          bottom:7,
          height: 50,  
          textAlign: 'center', 
          backgroundColor:'secondary.footer'}} >
            <Typography
              variant="h7">
              &copy; 2022 - KBE Project by Maxim, Ricardo and Robert
            </Typography>
      </Container>
    )
}

export default Footer;