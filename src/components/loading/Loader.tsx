import React from 'react'
import loader from "../../../public/loader.png";
import Image from 'next/image';
const Loader = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-36">
      <Image
        alt="loading logo"
        src={loader}
        style={{ maxWidth: "50px", height: "auto" }}
      />
    </div>
  )
}

export default Loader