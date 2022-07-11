import { useState } from "react"
import { Button, Menu, MenuItem} from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const ProfileMenu = () => {

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
    const toUserProductsHandler = () => {
        setAnchorEl(null)
        navigate('/userproducts')
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
        <MenuItem onClick={toUserProductsHandler}>My products</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
    </div>
    )
}

export default ProfileMenu