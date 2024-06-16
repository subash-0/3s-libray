import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeBook } from "../redux/slices/bookSlice";
import { useState } from "react";

const useColumns = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  const handleDelete = (isbn) => {
    toast.warning(`Book with ISBN ${isbn} has been deleted`);
    dispatch(removeBook(isbn));
  };


  const handleEdit = (book) => {
    setCurrentBook(book);
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setCurrentBook(null);
  };

  const booksColumns = [
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
      name: 'Price($)',
      selector: row => row.price,
      wrap: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <button 
            onClick={() => handleEdit(row.isbn)} 
            className='bg-blue text-white px-2 py-1 rounded mr-2'
          >
            <MdEdit size={15} />
          </button>
          <button 
            onClick={() => handleDelete(row.isbn)} 
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

  return { booksColumns, isEditing, currentBook, handleCloseEdit };
};

export default useColumns;
