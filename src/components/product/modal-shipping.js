import React from "react"
import styled from "styled-components"

import ModalContainer from "./modal-container"

const ModalShipping = () => (
  <ModalContainer>
    <h2>
      <span>Shipping</span>
    </h2>
    <div>
      <div className="left">
        <div className="full">
          <div className="faq-row">
            <div className="question">
              <h3>Free Domestic Shipping</h3>
            </div>
            <div className="answer">
              <p>
                All domestic U.S. orders for in-stock items are shipped free of
                charge.
              </p>
              <p>
                Please allow two business days to fulfill and issue you a a
                tracking number (unless there is a red delayed date posted in
                the product description). Once you receive your tracking number,
                you should expect&nbsp;your package within 2–4 business days.
              </p>
              <p>
                Please note that while we&nbsp;will issue you a tracking number
                once we have sent out your package, you may not be able to track
                your package immediately. You must wait until your package is
                scanned in by the Postal Service for tracking to activate.
              </p>
              <p>
                Orders placed for Workshop items require a shipping fee of $6.
                These orders will ship during the&nbsp;estimated shipping period
                noted on the product page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="top">
          <div className="faq-row">
            <div className="question">
              <h3>International Shipping</h3>
            </div>
            <div className="answer">
              <p>
                We ship anywhere outside the domestic US using DHL Express
                Worldwide. DHL&nbsp;calculates shipping rates based on weight
                and destination. Rates are exclusive of taxes, duties, and
                customs fees. DHL also&nbsp;requires that the recipient is
                responsible for customs duties and taxes. We are not able to
                determine import taxes, as they depend on a number of factors
                including but not limited to country of shipping destination and
                product price.
              </p>
              <p>
                We cannot guarantee delivery time as it depends on how efficient
                your country’s customs agents are. All international packages
                are trackable once they are scanned in by the postman.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h3>Returns</h3>
          <p>
            To start the process, click the button in your Shipping or Delivery
            confirmation email. You can return an item for a full refund or
            store credit within 60 days of having received it. More on that{" "}
            <a href="/pages/returns" tabIndex="-1">
              here
            </a>
            . <b>There are some exceptions, though.</b>
          </p>
          <p>
            We get that some items require a few try-ons—raw denim especially.
            We want you to be confident and comfortable wearing any Taylor
            Stitch garment, so please, make sure it’s the right fit. Just keep
            in mind that anything you return needs to be in re-sellable
            condition (unworn, unwashed, unaltered). If something funny happens
            with an item, just reach out to us. We’ll make it right.
          </p>
          <p>Last Call items cannot be accepted for a return.</p>
          <p>
            Return shipping is free within the continental US. If you’re
            returning from overseas, we ask that you cover that cost.
          </p>
        </div>
      </div>
    </div>
  </ModalContainer>
)

export default ModalShipping
