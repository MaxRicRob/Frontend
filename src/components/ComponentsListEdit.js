import { useState, useEffect } from 'react'
import { Avatar, Checkbox, List,ListItem, ListItemButton, ListItemText, ListItemAvatar,  } from '@mui/material'
import mockedUserProducts from '../mock_api/mock_userproducts.json'
import mockedDefaultComponents from '../mock_api/mock_db.json'

const ComponentsListEdit = (props) => {
    const [checked, setChecked] = useState([])
    const [componentsAlreadyChecked, setComponentsAlreadyChecked] = useState([])

    const [defaultComponents, setDefaultComponents] = useState([])
  
    console.log("defComps: "+mockedDefaultComponents.components)
    // use mocked products for testing
    useEffect(() => {
      setDefaultComponents(mockedDefaultComponents.components)
    },[])

    const handleToggle = (value) => {
        console.log("value-name: "+value.name)
        console.log("checkedBefore:" +checked)
        setChecked(prev => [...prev,value])
        console.log("checkedAfter:" +checked)
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]
        console.log("currentIndex: "+currentIndex)
        
        if (currentIndex === -1) {
          newChecked.push(value)
        } else {
          newChecked.splice(currentIndex, 1)
        }
        console.log("newChecked:" +newChecked)
        // setChecked(prev => [...prev,newChecked])
        console.log("Checked: "+checked)
        props.setCheckedComponents(newChecked)
    }

    useEffect(() => {
      try {
        // if(props.product !== ''){
          console.log("used effect")
          defaultComponents.forEach(value =>setComponentsAlreadyChecked(prev => [...prev,value]))
          console.log("componentsAlreadyChecked: "+componentsAlreadyChecked)
          setChecked(componentsAlreadyChecked)
        // }
      } catch (error) {
        console.log(error)
      }
    },[])

    return(
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {defaultComponents.map((value) => {
        const labelId = value.id
        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                checked={componentsAlreadyChecked.indexOf(value) !== -1}
                color='success'
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText 
              id={`component-text-${labelId}`}
            //   onClick={handleToggle(value)} 
              primary={value.name} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
    )
}

export default ComponentsListEdit