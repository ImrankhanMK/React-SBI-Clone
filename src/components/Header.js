import React from 'react';
import sbi from '../images/sbi.PNG';
import sbionline from '../images/sbionline.PNG';

export default function Header() {
  return (
    <div className="header">
      <div><img src={sbi}></img></div>
      <div><img src={sbionline}></img></div>
    </div>
  )
}
