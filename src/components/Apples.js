import React from "react";
import {  AppleImage } from "@/assets/icon";

export default function Apples(props) {
  const {top, left, transition} = props?.style;
  
  return (
    <AppleImage 
      className={`apple ${props.className}`}
      style={{top, left, transition}}
    />
  );
}
