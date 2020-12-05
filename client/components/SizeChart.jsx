import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/size-chart.css';

function SizeChart() {

  const modalPosition = {
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
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
    openModal();
  }

  return(
    <div className={styles.sizeChartContainer}>
      <p><span className={styles.linkText} onClick={handleClick}>See Size Chart</span></p>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalPosition}
          contentLabel="Example Modal"
        >
          <div className="modal-contents">
            <h2 className={styles.heading} ref={_subtitle => (subtitle = _subtitle) }>Somebirds Size Chart</h2>
            <p className={styles.text}>Somebirds fit true to size for most customers. If you have wide feet or are between sizes, we suggest you size up for all styles except our Tree Runner (size down for those).</p>
            <h3 className={styles.subHeading}>MEN'S SHOES</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableCellCountry}>US</th>
                  <th className={styles.tableCellBlue}>8</th>
                  <th className={styles.tableCellRed}>9</th>
                  <th className={styles.tableCellBlue}>10</th>
                  <th className={styles.tableCellRed}>11</th>
                  <th className={styles.tableCellBlue}>12</th>
                  <th className={styles.tableCellRed}>13</th>
                  <th className={styles.tableCellBlue}>14</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCellCountry}>UK</td>
                  <td className={styles.tableCellBlue}>7</td>
                  <td className={styles.tableCellRed}>8</td>
                  <td className={styles.tableCellBlue}>9</td>
                  <td className={styles.tableCellRed}>10</td>
                  <td className={styles.tableCellBlue}>11</td>
                  <td className={styles.tableCellRed}>12</td>
                  <td className={styles.tableCellBlue}>13</td>
                </tr>
                <tr>
                  <td className={styles.tableCellCountry}>EU</td>
                  <td className={styles.tableCellBlue}>40 - 41</td>
                  <td className={styles.tableCellRed}>41 - 42</td>
                  <td className={styles.tableCellBlue}>42 - 43</td>
                  <td className={styles.tableCellRed}>43 - 44</td>
                  <td className={styles.tableCellBlue}>44 - 45</td>
                  <td className={styles.tableCellRed}>45 - 46</td>
                  <td className={styles.tableCellBlue}>46 - 47</td>
                </tr>
                <tr>
                  <td className={styles.tableCellCountry}>cm</td>
                  <td className={styles.tableCellBlue}>25</td>
                  <td className={styles.tableCellRed}>26</td>
                  <td className={styles.tableCellBlue}>27</td>
                  <td className={styles.tableCellRed}>28</td>
                  <td className={styles.tableCellBlue}>29</td>
                  <td className={styles.tableCellRed}>29.5</td>
                  <td className={styles.tableCellBlue}>30.5</td>
                </tr>
              </tbody>
            </table>
            <h3 className={styles.subHeading}>WOMEN'S SHOES</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableCellCountry}>US</th>
                  <th className={styles.tableCellBlue}>5</th>
                  <th className={styles.tableCellRed}>6</th>
                  <th className={styles.tableCellBlue}>7</th>
                  <th className={styles.tableCellRed}>8</th>
                  <th className={styles.tableCellBlue}>9</th>
                  <th className={styles.tableCellRed}>10</th>
                  <th className={styles.tableCellBlue}>11</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCellCountry}>UK</td>
                  <td className={styles.tableCellBlue}>2 - 2.5</td>
                  <td className={styles.tableCellRed}>3 - 3.5</td>
                  <td className={styles.tableCellBlue}>4 - 4.5</td>
                  <td className={styles.tableCellRed}>5 - 5.5</td>
                  <td className={styles.tableCellBlue}>6 - 6.5</td>
                  <td className={styles.tableCellRed}>7 - 7.5</td>
                  <td className={styles.tableCellBlue}>8 - 8.5</td>
                </tr>
                <tr>
                  <td className={styles.tableCellCountry}>EU</td>
                  <td className={styles.tableCellBlue}>35</td>
                  <td className={styles.tableCellRed}>36</td>
                  <td className={styles.tableCellBlue}>37</td>
                  <td className={styles.tableCellRed}>38</td>
                  <td className={styles.tableCellBlue}>39</td>
                  <td className={styles.tableCellRed}>40</td>
                  <td className={styles.tableCellBlue}>41</td>
                </tr>
                <tr>
                  <td className={styles.tableCellCountry}>cm</td>
                  <td className={styles.tableCellBlue}>21.5</td>
                  <td className={styles.tableCellRed}>22.5</td>
                  <td className={styles.tableCellBlue}>23.5</td>
                  <td className={styles.tableCellRed}>24</td>
                  <td className={styles.tableCellBlue}>25</td>
                  <td className={styles.tableCellRed}>26</td>
                  <td className={styles.tableCellBlue}>26.5</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.text}>Still debating? No worries — our hassle-free returns policy through January 15 allows you to try us on for size and find the perfect pair.</p>
            {/* <button onClick={closeModal}>close</button> */}
          </div>
        </Modal>
    </div>
  );
}

export default SizeChart;