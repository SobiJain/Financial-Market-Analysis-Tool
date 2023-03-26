import React from 'react';
import './RefreshButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { faSync } from '@fortawesome/free-solid-svg-icons';





const RefreshButton = (props) => {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: '#fff', borderRadius: '50%', width: '35px', height: '35px', border: 'none', cursor: 'pointer' }}>
      <FontAwesomeIcon icon={faSync} style={{ color: '#007bff', fontSize: '18px' }} />
    </button>
    // <> hbqscjxbqsjc </>
  );
};

export default RefreshButton;
