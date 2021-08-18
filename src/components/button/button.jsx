import React from "react";
import styles from './button.module.css';


export default function Button({label,onClick})
{
    return <div data-testid="btn" onClick={onClick}>
       {label}
   </div>
}