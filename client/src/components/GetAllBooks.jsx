import TableComp from './TableComp'
import { books } from '../assets/data'
const columns = [
	{
		name: 'ISBN',
		selector: row => row.isbn,
	},
	{
		name: 'Name',
		selector: row => row.name,
	},
    {
        name: 'Author',
        selector: row => row.author,
    },
    {
        name: 'Price (USD)',
        selector: row => row.price,
    },
];


const GetAllBooks = () => {
  return (
    <div className='my-5 lg:px-36'>
      <h1 className='text-white text-2xl sm:text-4xl drop-shadow-blue py-4'>All Books Available In library</h1>
      <TableComp data={books} columns={columns}/>
    </div>
  )
}

export default GetAllBooks
