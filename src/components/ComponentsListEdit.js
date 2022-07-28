import { useState, useEffect } from 'react'
import { Avatar, Checkbox, List,ListItem, ListItemButton, ListItemText, ListItemAvatar,  } from '@mui/material'
import useAxios from "../hooks/useAxios"

const ComponentsListEdit = (props) => {
    const [checked, setChecked] = useState([])
    // already checked components = components from userProduct to edit
    const [componentsAlreadyChecked, setComponentsAlreadyChecked] = useState([])
    
    // for testing purpose first
    const [arrayWithZeros, setArrayWithZeros] = useState(Array.from({ length: 8 }).fill(0))    

    console.log("arraywith 0s: "+arrayWithZeros)

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

    const [loadingUserProductComponents, setLoadingUserProductComponents] = useState(false)

    useEffect(() => {
        setLoadingUserProductComponents(true)
        setUserProductComponents(props.product.components)
        setLoadingUserProductComponents(false)
    },[response])

    const [checkingProductComponents, setCheckingProductComponents] = useState(false)

    //set all already chosen user product components
    function setProductComponents(){
        if(props.product !== ''){
            for(let i = 0; i <defaultComponents.length; i++){
                for(let j=0; j<userProductComponents.length; j++){
                    if(userProductComponents[j].name === defaultComponents[i].name){ 
                    console.log("userProductComponents[j]: "+userProductComponents[j].id)    
                    setComponentsAlreadyChecked(prev => [...prev, userProductComponents[j]])
        }}} 
    }}

    useEffect(() => {
        // console.log("userProductComponents.length: "+userProductComponents.length)
        setCheckingProductComponents(true)
        setProductComponents()
        setCheckingProductComponents(false)
    },[response, loadingUserProductComponents])

    useEffect(() => {
        setChecked(componentsAlreadyChecked) 
        console.log("componentsAlreadyChecked: "+componentsAlreadyChecked)
    })

    useEffect(() => {
        console.log("checked: "+checked)
    },[checked, checkingProductComponents])

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