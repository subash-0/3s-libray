
import useColumns from '../utils/columns';
import { TableComp, UpdateBook } from '../components';


const GetAllBooks = () => {
  const {booksColumns , isEditing, currentBook , handleCloseEdit } = useColumns();
const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : books;
  console.log(currentBook)
  return (
<div className='px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md drop-shadow-4xl'>
      <h1 className='text-primary text-2xl sm:text-4xl drop-shadow-4xl py-4'>All Books Available In library</h1>
      
    <TableComp data={books} columns={booksColumns} field='author' />
    <div className="">
      {isEditing && <UpdateBook book={currentBook} onClose={handleCloseEdit} />}
    </div>
    </div>
  )
}

export default GetAllBooks
