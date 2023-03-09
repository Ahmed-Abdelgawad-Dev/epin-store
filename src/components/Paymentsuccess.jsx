import React from 'react'

function Paymentsuccess() {
  return (
    <div className='text-center p-5'>
        <h2 className='text-green-600 font-semibold mb-5'>Successful Transaction</h2>
        <h6 className='font-normal text-blue-600'>You've successfully completed the payment process.</h6>
        <a href="/" type='button' className='mt-5 text-white px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-700'>Back to main page </a>
    </div>
  )
}

export default Paymentsuccess