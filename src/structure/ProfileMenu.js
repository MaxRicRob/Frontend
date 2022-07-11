import { useState } from "react"
import { Button, Menu, MenuItem} from "@mui/material"
import { AccountCircle } from "@mui/icons-material"

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const openMenuHandler = (e) => {
      setAnchorEl(e.currentTarget)
    };
    const closeMenuHandler = () => {
      setAnchorEl(null)
    };

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
        <MenuItem onClick={closeMenuHandler}>My products</MenuItem>
        <MenuItem onClick={closeMenuHandler}>Logout</MenuItem>
      </Menu>
    </div>
    )
}

export default ProfileMenu