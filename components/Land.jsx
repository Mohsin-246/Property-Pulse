import React from 'react'

const Land = () => {
  return (
    <section className='bg-blue-700 py-20 mb-4'>
        
        <div 
        className='flex flex-col '>
            <div className='text-center '>
                <h1 className='text-white font-extrabold text-4xl sm:text-5xl md:text-6xl'>Find Perfect Rental</h1>
                <p className='text-white text-xl my-4'> Discover the perfect property that suits your needs.</p>

            </div>
            <form className='mt-3 mx-auto max-w-2xl w-full  flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
                    <label htmlFor='location' className="sr-only">
                        Location
                    </label>

                    <input 
                    type="text" 
                    id='location'
                    placeholder='Enter location (city, state, zip etc )'
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
                    />


                </div>
                <div className="w-full md:w-2/5 md:pl-2">
                    <label htmlFor="property type" className='sr-only'>Property Type</label>
                    <select name="property type" id="property-type"
                    className='w-full px-4 py-3 rounded-lg bg-white text-gray-500 focus:outline-none focus:ring focus:ring-blue-500'
                    > 


                    <option value="All">All</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Studio">Studio</option>
                    <option value="Condo">Condo</option>
                    <option value="House">House</option>
                    <option value="Cabin Or Cottage">Cabin or Cottage</option>
                    <option value="Loft">Loft</option>
                    <option value="Room">Room</option>
                    <option value="Other">Other</option>



                    </select>
                </div>
                <button 
                type='submit'
                className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-600 text-white focus:outline-none focus:ring focus:ring-blue-500'>
                    Search

                </button>
            </form>
            
        </div>
    </section>
  )
}

export default Land