import { useState, useEffect } from 'react'
import { Avatar, Checkbox, List,ListItem, ListItemButton, ListItemText, ListItemAvatar,  } from '@mui/material'
import useAxios from "../hooks/useAxios"

const ComponentsListAdd = (props) => {
  const [checked, setChecked] = useState([])
  const handleToggleAddProduct = (value) => () => {
    const currentIndex = checked.indexOf(value)
    console.log("currentIndex: "+currentIndex)
    const newChecked = [...checked]

    console.log("newCheck "+newChecked)

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    props.setCheckedComponents(newChecked)
  }

  const [defaultComponents, setDefaultComponents] = useState([])
  const { response } = useAxios({
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
                onChange={handleToggleAddProduct(value)}
                checked={checked.indexOf(value) !== -1}
                color='success'
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText 
              id={`component-text-${labelId}`}
              onClick={handleToggleAddProduct(value)} 
              primary={value.name} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default ComponentsListAdd