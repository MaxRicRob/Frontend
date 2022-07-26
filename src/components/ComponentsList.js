import { useState, useEffect } from 'react'
import { Avatar, Checkbox, List,ListItem, ListItemButton, ListItemText, ListItemAvatar,  } from '@mui/material'
import useAxios from "../hooks/useAxios"
import useGetUserProducts from '../hooks/useGetUserProducts'

const ComponentsList = (props) => {
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

  const [checkedForEdit, setCheckedForEdit] = useState([])

  const handleToggleEditProduct = (value) => {
    console.log("value-name: "+value.name)
    console.log("checkedBefore:" +checkedForEdit)
    setCheckedForEdit(prev => [...prev,value])
    console.log("checkedAfter:" +checkedForEdit)
    const currentIndex = checkedForEdit.indexOf(value)
    const newChecked = [...checkedForEdit]
    console.log("currentIndex: "+currentIndex)
    
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    console.log("newChecked:" +newChecked)
    // setCheckedForEdit(prev => [...prev,newChecked])
    console.log("checkedForEdit: "+checkedForEdit)
    props.setCheckedComponents(newChecked)
  }

  useEffect(() => {
    try {
      if(props.product !== ''){
        console.log("used effect")
        props.product.components.forEach(value => handleToggleEditProduct(value))
      }
    } catch (error) {
      console.log(error)
    }
  },[])

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

export default ComponentsList