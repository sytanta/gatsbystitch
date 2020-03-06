import React, { useContext, useState } from "react"

import MMCategories from "./mega-menu-categories"
import MMThumbnails from "./mega-menu-thumbnails"

import Container from "../../css/mega-menu/menu"

import MegaMenuContext from "../../context/megamenu-context"

const MegaMenu = () => {
  const { active } = useContext(MegaMenuContext)
  const [activeCat, setActiveCat] = useState(active)

  const setCategory = cat => {
    setActiveCat(cat)
  }

  return (
    <Container>
      <MMCategories activeCategory={activeCat} setCategory={setCategory} />
      <MMThumbnails activeCategory={activeCat} />
    </Container>
  )
}

export default MegaMenu
