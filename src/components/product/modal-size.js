import React from "react"
import styled from "styled-components"

import ModalContainer from "./modal-container"

const ModalSize = () => (
  <ModalContainer className="modal-size">
    <h2>
      <span>Washed Denim</span>
      Western Shirt
    </h2>
    <section className="notes">
      <p>
        It’s impossible not to make a strong impression with The Western Shirt.
        Vintage-inspired details like angled chest pockets and contrast YKK
        snaps may summon images of smouldering sunsets over dusty trails, but
        thanks to its sophisticated cut and exquisite blend of cotton and linen
        selvage denim, this shirt feels just as at home in the big city as it is
        out on the range.
      </p>
    </section>
    <table className="-sizing">
      <tbody>
        <tr>
          <th colSpan="7">Your Body Measurements</th>
        </tr>
        <tr>
          <td>Chest</td>
          <td>36</td>
          <td>38</td>
          <td>40</td>
          <td>42</td>
          <td>44</td>
          <td>46</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>XS</td>
          <td>S</td>
          <td>M</td>
          <td>L</td>
          <td>XL</td>
          <td>XXL</td>
        </tr>
      </tbody>
    </table>
    <table className="-sizing">
      <tbody>
        <tr>
          <th colSpan="5">Garment Measurements</th>
        </tr>
        <tr>
          <th>Size</th>
          <th>Chest</th>
          <th>Neck</th>
          <th>Sleeve</th>
          <th>Length</th>
        </tr>
        <tr>
          <td>36 – XS</td>
          <td>40</td>
          <td>15½</td>
          <td>34</td>
          <td>28⅞</td>
        </tr>
        <tr>
          <td>38 – S</td>
          <td>42</td>
          <td>16</td>
          <td>34¾</td>
          <td>29⅝</td>
        </tr>
        <tr>
          <td>40 – M</td>
          <td>44</td>
          <td>16½</td>
          <td>35½</td>
          <td>30⅜</td>
        </tr>
        <tr>
          <td>42 – L</td>
          <td>46</td>
          <td>17</td>
          <td>36¼</td>
          <td>31⅛</td>
        </tr>
        <tr>
          <td>44 – XL</td>
          <td>48</td>
          <td>17½</td>
          <td>37</td>
          <td>31⅞</td>
        </tr>
        <tr>
          <td>46 – XXL</td>
          <td>50</td>
          <td>18</td>
          <td>37¾</td>
          <td>32⅝</td>
        </tr>
      </tbody>
    </table>
    <p>
      In order to best determine fit, we advise comparing our garment’s
      measurements to a similar garment you already own. Lay your garment flat
      and take all measurements from the outside of the garment.
    </p>

    <p>
      For any sizing, styling, or general inquiries, please
      <a href="/contact" tabIndex="-1">
        contact us
      </a>
      .
    </p>
  </ModalContainer>
)

export default ModalSize
