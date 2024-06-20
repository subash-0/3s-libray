import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeVisitor } from "../redux/slices/visitorSlice";

const useVisitors = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentvisitors, setCurrentvisitors] = useState(null);

  const handleDelete = (name) => {
    dispatch(removeVisitor(name));
    toast.warning(`visitors with name ${name} has been deleted`);
  };


  const handleEdit = (visitors) => {
    setCurrentvisitors(visitors);
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setCurrentvisitors(null);
  };

  const visitorssColumns = [
    {
      name: 'Name',
      selector: row => row.name,
      wrap: true,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      wrap: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      wrap: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <button 
            onClick={() => handleEdit(row.phone)} 
            className='bg-blue text-white px-2 py-1 rounded mr-2'
          >
            <MdEdit size={15} />
          </button>
          <button 
            onClick={() => handleDelete(row.phone)} 
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

  return { visitorssColumns, isEditing, currentvisitors, handleCloseEdit };
};

export default useVisitors;
