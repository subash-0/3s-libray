import TableComp from './TableComp'
import { books } from '../assets/data'
import userColumns from '../assets/columns';
import { useState } from 'react';


const GetAllBooks = () => {
  const {booksColumns} = userColumns();
  const [filterBook, setFilterBook] = useState(books)

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    let result =  books.filter((data) => {
      return(
        data.name.toLowerCase().includes(value) ||
        data.author.toLowerCase().includes(value) 
      )
    });
    setFilterBook(result);
    
  };
  return (
<div className='my-5 lg:px-36'>
      <h1 className='text-primary text-2xl sm:text-4xl drop-shadow-4xl py-4'>All Books Available In library</h1>
      <input type="text" placeholder='Search Here .....'  className='w-full p-2 placeholder-white rounded-sm focus:outline-none bg-primary text-white dark:bg-darkbg' onChange={handleChange}/>
    <TableComp data={filterBook} columns={booksColumns} />
    </div>
  )
}

export default GetAllBooks
