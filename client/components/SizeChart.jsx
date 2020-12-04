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
      <p className="p"><span className="link-text" onClick={handleClick}>See Size Chart</span></p>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-contents">
            <h2 className="h2" ref={_subtitle => (subtitle = _subtitle) }>Somebirds Size Chart</h2>
            <p className="p modal-text">Somebirds fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all styles except our Tree Runner (size down for those).</p>
            <h3 className="h3">MEN'S SHOES</h3>
            <table class="table">
              <thead>
                <tr>
                  <th class="table-cell country-cell">US</th>
                  <th class="table-cell blue-cell">8</th>
                  <th class="table-cell red-cell">9</th>
                  <th class="table-cell blue-cell">10</th>
                  <th class="table-cell red-cell">11</th>
                  <th class="table-cell blue-cell">12</th>
                  <th class="table-cell red-cell">13</th>
                  <th class="table-cell blue-cell">14</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table-cell country-cell">UK</td>
                  <td class="table-cell blue-cell">7</td>
                  <td class="table-cell red-cell">8</td>
                  <td class="table-cell blue-cell">9</td>
                  <td class="table-cell red-cell">10</td>
                  <td class="table-cell blue-cell">11</td>
                  <td class="table-cell red-cell">12</td>
                  <td class="table-cell blue-cell">13</td>
                </tr>
                <tr>
                  <td class="table-cell country-cell">EU</td>
                  <td class="table-cell blue-cell">40 - 41</td>
                  <td class="table-cell red-cell">41 - 42</td>
                  <td class="table-cell blue-cell">42 - 43</td>
                  <td class="table-cell red-cell">43 - 44</td>
                  <td class="table-cell blue-cell">44 - 45</td>
                  <td class="table-cell red-cell">45 - 46</td>
                  <td class="table-cell blue-cell">46 - 47</td>
                </tr>
                <tr>
                  <td class="table-cell country-cell">cm</td>
                  <td class="table-cell blue-cell">25</td>
                  <td class="table-cell red-cell">26</td>
                  <td class="table-cell blue-cell">27</td>
                  <td class="table-cell red-cell">28</td>
                  <td class="table-cell blue-cell">29</td>
                  <td class="table-cell red-cell">29.5</td>
                  <td class="table-cell blue-cell">30.5</td>
                </tr>
              </tbody>
            </table>
            <h3 className="h3">WOMEN'S SHOES</h3>
            <table class="table">
              <thead>
                <tr>
                  <th class="table-cell country-cell">US</th>
                  <th class="table-cell blue-cell">5</th>
                  <th class="table-cell red-cell">6</th>
                  <th class="table-cell blue-cell">7</th>
                  <th class="table-cell red-cell">8</th>
                  <th class="table-cell blue-cell">9</th>
                  <th class="table-cell red-cell">10</th>
                  <th class="table-cell blue-cell">11</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table-cell country-cell">UK</td>
                  <td class="table-cell blue-cell">2 - 2.5</td>
                  <td class="table-cell red-cell">3 - 3.5</td>
                  <td class="table-cell blue-cell">4 - 4.5</td>
                  <td class="table-cell red-cell">5 - 5.5</td>
                  <td class="table-cell blue-cell">6 - 6.5</td>
                  <td class="table-cell red-cell">7 - 7.5</td>
                  <td class="table-cell blue-cell">8 - 8.5</td>
                </tr>
                <tr>
                  <td class="table-cell country-cell">EU</td>
                  <td class="table-cell blue-cell">35</td>
                  <td class="table-cell red-cell">36</td>
                  <td class="table-cell blue-cell">37</td>
                  <td class="table-cell red-cell">38</td>
                  <td class="table-cell blue-cell">39</td>
                  <td class="table-cell red-cell">40</td>
                  <td class="table-cell blue-cell">41</td>
                </tr>
                <tr>
                  <td class="table-cell country-cell">cm</td>
                  <td class="table-cell blue-cell">21.5</td>
                  <td class="table-cell red-cell">22.5</td>
                  <td class="table-cell blue-cell">23.5</td>
                  <td class="table-cell red-cell">24</td>
                  <td class="table-cell blue-cell">25</td>
                  <td class="table-cell red-cell">26</td>
                  <td class="table-cell blue-cell">26.5</td>
                </tr>
              </tbody>
            </table>
            <p className="p modal-text">Still debating? No worries — our hassle-free returns policy through January 15 allows you to try us on for size and find the perfect pair.</p>
            {/* <button onClick={closeModal}>close</button> */}
          </div>
        </Modal>
    </div>
  );
}

export default SizeChart;