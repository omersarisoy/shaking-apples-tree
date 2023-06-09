import {  AppleImage } from "@/assets/icon";

const Apple = (props) => {
  const {top, left, transition} = props?.style;
  
  return (
    <AppleImage 
      className={`apple ${props.className}`}
      style={{top, left, transition}}
    />
  );
}

export default Apple
