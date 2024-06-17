import TableComp from "./TableComp"
import { books } from '../assets/data'
import userColumns from '../utils/columns';
import UpdateBook from './UpdateBook';

const Check = () => {
    const {booksColumns , isEditing, currentBook, handleCloseEdit} = userColumns();
  return (
    <div className='my-5 lg:px-36 overflow-x-auto'>
      <h1 className='text-white text-2xl sm:text-4xl drop-shadow-blue py-4 '>Update Book</h1>
    <TableComp data={books} columns={booksColumns} />
    {isEditing &&  <UpdateBook book={currentBook} onClose={handleCloseEdit} />
      }
    </div>
  )
}

export default Check
