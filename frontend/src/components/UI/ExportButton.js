import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './ExportButton.css';


const ExportButton = (props) => {
  return (
    <button className="export-btn" onClick={props.onClick}>
      <FontAwesomeIcon icon={faDownload} className="download-icon" />
      Export to Excel
    </button>
  );
};

export default ExportButton;
