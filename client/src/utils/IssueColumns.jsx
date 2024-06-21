import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {removeIssueBook} from "../redux/slices/issueBookSlice";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";


const IssueColumns = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentissuedBooks, setCurrentissuedBooks] = useState(null);

  const handleDelete = (name) => {
    dispatch(removeIssueBook(name));
    toast.warning(`issuedBooks with name ${name} has been deleted`);
  };


  const handleEdit = (issuedBooks) => {
    setCurrentissuedBooks(issuedBooks);
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setCurrentissuedBooks(null);
  };

  const issuedBooksColumns = [
    {
      name: 'Book',
      selector: row => row.bookName,
      wrap: true,
    },
    {
      name: 'Visitor',
      selector: row => row.name,
      wrap: true,
    },
    {
      name: 'Issue Date',
      selector: row => row.issueDate,
      wrap: true,
    },
    {
      name: 'Amount',
      selector: row => row.amount,
      wrap: true,
    }, 
    {
      name: 'Paid',
      selector: row => row.paidAmount,
      wrap: true,
    }, 
    {
      name: 'Due',
      selector: row => row.dueAmount,
      wrap: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="w-fit flex justify-center items-center gap-1">
          <button 
            onClick={() => handleEdit(row?.isbn)} 
            className='bg-blue text-white p-1 rounded'
          >
            <MdEdit size={15} />
          </button>
          <button 
            onClick={() => handleDelete(row?.isbn)} 
            className='bg-red text-white p-1 rounded'
          >
            <MdDelete size={15} />
          </button> 
          <Link to={`/visitor-issued/${row?.isbn}`} 
            className=' text-white p-1 rounded'
          >
            <IoMdEye size={15} />
          </Link>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return { issuedBooksColumns, isEditing, currentissuedBooks, handleCloseEdit };
};

export default IssueColumns;
