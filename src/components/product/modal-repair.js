import React from "react"
import styled from "styled-components"

import ModalContainer from "./modal-container"

const ModalRepair = () => (
  <ModalContainer>
    <h2 className="anw normal-800">
      <span>Repair Or Replace Guarantee</span>
    </h2>
    <div id="guarantee-modal-content">
      <div className="left">
        <div className="full">
          <h3>Repairs</h3>
          <p>
            If one of your Taylor Stitch product(s) needs a repair, please start
            by writing us to let us know at{" "}
            <a href="mailto:hello@taylorstitch.com" tabIndex="-1">
              hello@taylorstitch.com
            </a>
            . In your email please include your name, order number, and the
            reason for repair. Final and most important step: attach at least
            one image of the affected area so that we can determine the best
            course of treatment. Upon receiving your repair request, we’ll
            provide you with a lead time for repair, and issue you return
            postage (if in the domestic US).
          </p>
          <p>
            Please note that per California State law, garments sent in for
            repair must be clean, so please launder your garment before to
            mailing it.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="bottom">
          <h3>Replacements</h3>
          <p>
            If your Taylor Stitch product is unable to be repaired, we will
            gladly replace the garment if still in stock. Otherwise we can offer
            store credit or a return for the item during the life of the
            product.
          </p>
        </div>
        <div className="top">
          <h3>Our Guarantee</h3>
          <p>
            We are dedicated to making clothing that is responsibly built for
            the long haul. To that end - we will repair or replace any defect
            outside of normal wear for the life of the product - this is our
            guarantee.
          </p>
        </div>
      </div>
    </div>
  </ModalContainer>
)

export default ModalRepair
