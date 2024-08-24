import React from 'react'

const ReservationSidebar = () => {
  return (
    <aside className='mt-6 p-6 col-span-2 rounded-xl border border-gray-50'>
        <h1 className='mb-5 text-2xl'>$200 per night</h1>
        <div className='mb-6 p-3 border border-gray-400 rounded-xl'>
        <label className="mb-2 block font-bold text-xs">Guests</label>
            <select className='w-full -ml-1 text-xm'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <div 
      
                className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl"
            >
                Book
            </div>
        </div>

    </aside>
  )
}

export default ReservationSidebar