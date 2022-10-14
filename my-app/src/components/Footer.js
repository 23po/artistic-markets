import { fixControlledValue } from 'antd/lib/input/Input';
import React from 'react'

const footerStyle = {
    height: '120px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    position: 'fixed',
    width: '100%',
    left: '0',
    bottom: '0'

  };

  function Footer() {
  return (
    <div style = {footerStyle}>Footer</div>
  )
}

export default Footer