
import useColumns from '../utils/IssueColumns';
import { TableComp } from '../components';


const AllIssuedBook = () => {
  const {issuedBooksColumns} = useColumns();
const books = localStorage.getItem('issueBook') ? JSON.parse(localStorage.getItem('issueBook')) : books;
  
  return (
<div className='px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md drop-shadow-4xl'>
      <h1 className='text-primary text-2xl sm:text-4xl drop-shadow-4xl py-4'>All Issued Books</h1>
      
    <TableComp data={books} columns={issuedBooksColumns} field='bookName' />
    </div>
  )
}

export default AllIssuedBook
