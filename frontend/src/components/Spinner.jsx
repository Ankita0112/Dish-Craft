import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className=''>
      <TailSpin color='#0DCAE5'
      timeout={1000}
      />
    </div>
   
  )
}

export default Spinner