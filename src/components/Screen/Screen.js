import React from 'react';
import '../../styles/screen-styles.css';

const Screen = ({displayValue}) => {
  return <input type="text" value={displayValue} readOnly={true} />
}

export default Screen;
