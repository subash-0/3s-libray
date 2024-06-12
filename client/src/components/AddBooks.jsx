
const AddBooks = () => {
  return (
    <div className='my-5 lg:px-36  overflow-x-auto flex justify-center items-center flex-col'>
      <h1 className='text-white  text-2xl sm:text-4xl drop-shadow-blue py-4'>Register Books In library</h1>
      <div className="flex justify-center w-full bg-primary dark:bg-darkbg w-fit p-2 rounded-md">
        <form className='flex flex-col space-y-3 w-full sm:w-96'>
          <label className='text-white' htmlFor='isbn'>ISBN</label>
          <input className='p-2 rounded-md outline-none focus:outline-none' autoComplete="false" type='text' id='isbn' name='isbn' placeholder='Enter ISBN' />
          <label className='text-white' htmlFor='name'>Name</label>
          <input className='p-2 rounded-md outline-none focus:outline-none' autoComplete="false" type='text' id='name' name='name' placeholder='Enter Name' />
          <label className='text-white' htmlFor='author'>Author</label>
          <input className='p-2 rounded-md outline-none focus:outline-none' autoComplete="false" type='text' id='author' name='author' placeholder='Enter Author' />
          <label className='text-white' htmlFor='price'>Price (USD)</label>
          <input className='p-2 rounded-md outline-none focus:outline-none' autoComplete="false" type='text' id='price' name='price' placeholder='Enter Price' />
          <button className='p-2 bg-blue-500 text-white rounded-md bg-darkbg dark:bg-primary hover:bg-blue/55'>Add Book</button>
        </form>
      </div>
    </div>
  )
}

export default AddBooks
