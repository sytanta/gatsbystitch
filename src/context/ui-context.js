import React from "react"

export default React.createContext({
  drawerLeftOpen: false,
  drawerRightOpen: false,
  megaMenuOpen: false,
  productHelpModal: "",
  toggleDrawerLeft: () => {},
  toggleDrawerRight: () => {},
  toggleMegaMenu: () => {},
  toggleProductHelpModal: () => {},
})
