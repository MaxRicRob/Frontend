import { useState } from "react"
import { Button, Menu, MenuItem} from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const ProfileMenu = (props) => {

    let navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const openMenuHandler = (e) => {
        setAnchorEl(e.currentTarget)
    };
    const closeMenuHandler = () => {
        setAnchorEl(null)
    };
    const logoutHandler = () => {
        setAnchorEl(null)
        navigate('/login')
    }
    // console.log("profile-loggeduser: "+props.loggedUser)

    const navigateToUserProductsHandler = () => {
        setAnchorEl(null)
        navigate('/userproducts/'+props.loggedUser) // id hard-coded for testing purpose -> change later
    }

    return(
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={openMenuHandler}
      >
        <AccountCircle
        sx={{ color: 'secondary.header' }}/> 
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenuHandler}
      >
        <MenuItem onClick={navigateToUserProductsHandler}>My products</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
    )
}

export default ProfileMenu