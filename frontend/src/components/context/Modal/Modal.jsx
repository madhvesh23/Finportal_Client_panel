import React, { useState } from "react";

import { useFirebase } from "../firebaseContext";

export const Modal = (props) => {
  const firebase = useFirebase();
  // const [modal,setModal] = useState(false);
  const [itrfile, setItrfile] = useState(null);

  const FetchITR = () => {
    const pdfurl = firebase.FetchPdf(props.service).then((url) => {
      setItrfile(url);
      console.log(url);
    });

    //  setModal(true);
  };

  return (
    <div className="">
      
        <a href={itrfile} target="_blank"  onClick={FetchITR}>
          View ITRFile
        </a>
       
    </div>
  );
};
export default Modal;
