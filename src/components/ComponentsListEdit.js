import { useState, useEffect } from 'react'
import { Avatar, Checkbox, List,ListItem, ListItemButton, ListItemText, ListItemAvatar,  } from '@mui/material'
import useAxios from "../hooks/useAxios"

const ComponentsListEdit = (props) => {
    const [checked, setChecked] = useState([])
    // already checked components = components from userProduct to edit
    const [componentsAlreadyChecked, setComponentsAlreadyChecked] = useState([])
    const [userProductComponents, setUserProductComponents] = useState([])

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

    useEffect(() => {
      setUserProductComponents(props.product.components)
    },[response])

    useEffect(() => {
        try {
          if(props.product !== ''){
            console.log("used effect")
            // console.log("defCOmp.len: "+defaultComponents.length)
            for(let i = 0; i <defaultComponents.length; i++){
                for(let j=0; j<userProductComponents.length; j++){
                    if(userProductComponents[j].name === defaultComponents[i].name)
                    {
                    setComponentsAlreadyChecked(userProductComponents[j])
                    }
                }
            }
            setChecked(componentsAlreadyChecked)
          }
        } catch (error) {
          console.log(error)
        }
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
                // checked={componentsAlreadyChecked.indexOf(value) !== -1}
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