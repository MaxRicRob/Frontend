import { useState, useEffect } from 'react'
import { Avatar, Box, CircularProgress, Checkbox, List,ListItem, ListItemButton, ListItemText, ListItemAvatar,  } from '@mui/material'
import useAxios from "../hooks/useAxios"

const ComponentsListEdit = (props) => {
    const [checked, setChecked] = useState([])
    // already checked components = components from userProduct to edit
    const [componentsAlreadyChecked, setComponentsAlreadyChecked] = useState([])
    const [userProductComponents, setUserProductComponents] = useState([])

    // 1. set default Components via get request
    const [defaultComponents, setDefaultComponents] = useState([])
    const { response } = useAxios({
      method: 'get',
      mode: 'cors',
      url: '/productComponents'
    })
  
    useEffect(() => {
      if(response!==null)
      setDefaultComponents(response)
    },[response, props.getUserProductsResponse])

    // 2. load components of selected user product
    const [loadingUserProductComponents, setLoadingUserProductComponents] = useState(false)

    useEffect(() => {
        setLoadingUserProductComponents(true)
        setUserProductComponents(props.product.components)
        setLoadingUserProductComponents(false)
    },[response])

    const [checkingProductComponents, setCheckingProductComponents] = useState(false)

    // 2.1. set all already chosen user product components
    function setProductComponents(){
        if(props.product !== ''){
            for(let i = 0; i <defaultComponents.length; i++){
                for(let j=0; j<userProductComponents.length; j++){
                    if(userProductComponents[j].name === defaultComponents[i].name){   
                    // setComponentsAlreadyChecked(prev => [...prev, userProductComponents[j]])
                    setChecked(prev => [...prev, userProductComponents[j]])
                    console.log("userProductComponents[j]: "+userProductComponents[j].id)  
        }}} 
    }}

    const [componentsLoaded, setComponentsLoaded] = useState(false)

    useEffect(() => {
        // console.log("userProductComponents.length: "+userProductComponents.length)
        setCheckingProductComponents(true)
        setProductComponents()
        setCheckingProductComponents(false)
        setComponentsLoaded(true)
    },[response, loadingUserProductComponents])

    // 3. set checked array with already chosen components of specific user product
    
    // useEffect(() => {
    //     setComponentsLoaded(true)
    //     // setChecked(componentsAlreadyChecked) 
    //     // console.log("componentsAlreadyChecked: "+componentsAlreadyChecked)
    //     console.log("checked: "+checked)
    //     setComponentsLoaded(false)
    // })

    // useEffect(() => {
    //     // console.log("checked: "+checked.indexOf(componentsAlreadyChecked[0]))
    //     console.log("checked: "+checked)
    // },[componentsLoaded])


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
        // console.log("newChecked:" +newChecked)
        // console.log("Checked: "+checked)
        props.setCheckedComponents(newChecked)
    }



    return(
        <Box>
        {(!componentsLoaded) ? (
            <Box textAlign="center" mt={15}>
            <CircularProgress 
            sx={{ color: 'secondary.loading' }}/>
            </Box>
        ) : 
        // (componentsAlreadyChecked[0] !== undefined)? 
        (
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {defaultComponents.map((value) => {
                // if(componentsAlreadyChecked[0] !== undefined){
                //     console.log("componentsAlreadyChecked-render: "+componentsAlreadyChecked[0].indexOf(value))
                // }
                // console.log("defaultComponents.indexOf(value)-render: "+defaultComponents.indexOf(value))
                console.log("checked-render: "+value)
              const labelId = value.id
              return (
                <ListItem
                  key={value.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      // onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
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
        // : <></>
        }
        </Box>
    )
}

export default ComponentsListEdit