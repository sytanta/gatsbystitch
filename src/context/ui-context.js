import React from "react"

export default React.createContext({
  drawerLeftOpen: false,
  drawerRightOpen: false,
  toggleDrawerLeft: () => {},
  toggleDrawerRight: () => {}
})
