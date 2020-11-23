import React, { useState } from 'react';
import Modal from 'react-modal';

function SizeChart() {

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-40%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#000';
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleClick = () => {
    // alert('This chart is a WIP yo');
    openModal();
  }

  return(
    <div className="sizechart-container">
      <p><span className="link-text" onClick={handleClick}>See Size Chart</span></p>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-contents">
            <h2 ref={_subtitle => (subtitle = _subtitle) }>Somebirds Size Chart</h2>
            <p className="modal-text">Somebirds fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all styles except our Tree Runner (size down for those).</p>
            <h3>MEN'S SHOES</h3>
            <table class="tg">
              <thead>
                <tr>
                  <th class="tg-0lax country">US</th>
                  <th class="tg-0lax blue">8</th>
                  <th class="tg-0lax red">9</th>
                  <th class="tg-0lax blue">10</th>
                  <th class="tg-0lax red">11</th>
                  <th class="tg-0lax blue">12</th>
                  <th class="tg-0lax red">13</th>
                  <th class="tg-0lax blue">14</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tg-0lax country">UK</td>
                  <td class="tg-0lax blue">7</td>
                  <td class="tg-0lax red">8</td>
                  <td class="tg-0lax blue">9</td>
                  <td class="tg-0lax red">10</td>
                  <td class="tg-0lax blue">11</td>
                  <td class="tg-0lax red">12</td>
                  <td class="tg-0lax blue">13</td>
                </tr>
                <tr>
                  <td class="tg-0lax country">EU</td>
                  <td class="tg-0lax blue">40 - 41</td>
                  <td class="tg-0lax red">41 - 42</td>
                  <td class="tg-0lax blue">42 - 43</td>
                  <td class="tg-0lax red">43 - 44</td>
                  <td class="tg-0lax blue">44 - 45</td>
                  <td class="tg-0lax red">45 - 46</td>
                  <td class="tg-0lax blue">46 - 47</td>
                </tr>
                <tr>
                  <td class="tg-0lax country">cm</td>
                  <td class="tg-0lax blue">25</td>
                  <td class="tg-0lax red">26</td>
                  <td class="tg-0lax blue">27</td>
                  <td class="tg-0lax red">28</td>
                  <td class="tg-0lax blue">29</td>
                  <td class="tg-0lax red">29.5</td>
                  <td class="tg-0lax blue">30.5</td>
                </tr>
              </tbody>
            </table>
            <h3>WOMEN'S SHOES</h3>
            <table class="tg">
              <thead>
                <tr>
                  <th class="tg-0lax country">US</th>
                  <th class="tg-0lax blue">5</th>
                  <th class="tg-0lax red">6</th>
                  <th class="tg-0lax blue">7</th>
                  <th class="tg-0lax red">8</th>
                  <th class="tg-0lax blue">9</th>
                  <th class="tg-0lax red">10</th>
                  <th class="tg-0lax blue">11</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tg-0lax country">UK</td>
                  <td class="tg-0lax blue">2 - 2.5</td>
                  <td class="tg-0lax red">3 - 3.5</td>
                  <td class="tg-0lax blue">4 - 4.5</td>
                  <td class="tg-0lax red">5 - 5.5</td>
                  <td class="tg-0lax blue">6 - 6.5</td>
                  <td class="tg-0lax red">7 - 7.5</td>
                  <td class="tg-0lax blue">8 - 8.5</td>
                </tr>
                <tr>
                  <td class="tg-0lax country">EU</td>
                  <td class="tg-0lax blue">35</td>
                  <td class="tg-0lax red">36</td>
                  <td class="tg-0lax blue">37</td>
                  <td class="tg-0lax red">38</td>
                  <td class="tg-0lax blue">39</td>
                  <td class="tg-0lax red">40</td>
                  <td class="tg-0lax blue">41</td>
                </tr>
                <tr>
                  <td class="tg-0lax country">cm</td>
                  <td class="tg-0lax blue">21.5</td>
                  <td class="tg-0lax red">22.5</td>
                  <td class="tg-0lax blue">23.5</td>
                  <td class="tg-0lax red">24</td>
                  <td class="tg-0lax blue">25</td>
                  <td class="tg-0lax red">26</td>
                  <td class="tg-0lax blue">26.5</td>
                </tr>
              </tbody>
            </table>
            <p className="modal-text">Still debating? No worries — our hassle-free returns policy through January 15 allows you to try us on for size and find the perfect pair.</p>
            {/* <button onClick={closeModal}>close</button> */}
          </div>
        </Modal>
    </div>
  );
}

export default SizeChart;