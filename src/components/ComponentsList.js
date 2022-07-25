import { useState, useEffect } from 'react'
import { Avatar, Checkbox, List,ListItem, ListItemButton, ListItemText, ListItemAvatar,  } from '@mui/material'
import useAxios from "../hooks/useAxios"

const ComponentsList = (props) => {
  const [checked, setChecked] = useState([])
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    console.log("currentIndex: "+currentIndex)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    props.setCheckedComponents(newChecked)
    console.log("newChecked.len: "+newChecked)
  }

  const [defaultComponents, setDefaultComponents] = useState([])
    const { response, loading, error } = useAxios({
      method: 'get',
      mode: 'cors',
      url: '/productComponents'
    })

  useEffect(() => {
    if(response!==null)
    setDefaultComponents(response)
  },[response])

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {defaultComponents.map((value) => {
        const labelId = value.id
        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                color='success'
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText 
              id={`component-text-${labelId}`}
              onClick={handleToggle(value)} 
              primary={value.name} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default ComponentsList