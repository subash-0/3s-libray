import TableComp from './TableComp'
import { books } from '../assets/data'
import { toast } from 'react-toastify';
import { MdDelete, MdEdit } from "react-icons/md";
const columns = [
	{
		name: 'ISBN',
		selector: row => row.isbn,
    wrap: true,
	},
	{
		name: 'Name',
		selector: row => row.name,
    wrap: true,
	},
    {
        name: 'Author',
        selector: row => row.author,
        wrap: true,
    },
    {
        name: 'Price (USD)',
        selector: row => row.price,
        wrap: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <button 
            onClick={() => toast.info(row.name + ' is being edited')} 
            className='bg-blue text-white px-2 py-1 rounded mr-2'
          >
            <MdEdit size={15} />
          </button>
          <button 
            onClick={() => toast.warn(row.name + ' is being deleted')} 
            className='bg-red text-white px-2 py-1 rounded'
          >
           <MdDelete size={15} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
];


const GetAllBooks = () => {
  return (
    <div className='my-5 lg:px-36 overflow-x-auto'>
      <h1 className='text-white text-2xl sm:text-4xl drop-shadow-blue py-4'>All Books Available In library</h1>
      <TableComp data={books} columns={columns} />
    </div>
  )
}

export default GetAllBooks
