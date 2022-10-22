import { fixControlledValue } from 'antd/lib/input/Input';
import React from 'react'

const footerStyle = {
    height: '70px',
    color: 'black',
    lineHeight: '80px',
    textAlign: 'center',
    background: '#F0F8FF',
    position: 'fixed',
    width: '100%',
    left: '0',
    bottom: '0'

  };

  function Footer() {
  return (
    <div style = {footerStyle}>2022</div>
  )
}

export default Footer