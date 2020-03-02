import React from "react"

export default React.createContext({
  drawerLeftOpen: false,
  drawerRightOpen: false,
  productHelpModal: "",
  toggleDrawerLeft: () => {},
  toggleDrawerRight: () => {},
  toggleProductHelpModal: () => {},
})
