
import useColumns from '../utils/visitorColumes';
import { ReusableForm, TableComp } from '../components';
import { visitorsFields } from '../utils/formField';
import { useDispatch, useSelector } from 'react-redux';
import { updateVisitor } from '../redux/slices/visitorSlice';
import { toast } from 'react-toastify';
import { MdClose } from 'react-icons/md';


const VisitorsList = () => {
  const dispatch = useDispatch();
  const {visitorssColumns, isEditing,currentvisitors,handleCloseEdit} = useColumns();
const visitors = localStorage.getItem('visitors') ? JSON.parse(localStorage.getItem('visitors')) : visitors;
  let visitorUpdate = localStorage.getItem('visitors') ? JSON.parse(localStorage.getItem('visitors')).find((visitor) => visitor.phone === currentvisitors) : null;
  const updateVisitorInitial = {
    name:visitorUpdate?.name,
    phone:visitorUpdate?.phone,
    department:visitorUpdate?.department,
  }
  
  const handleUpdate = async (value) => {
    try {
      dispatch(updateVisitor(value)).unwrap();
      toast.success("Visitor Updated Succesfully!");
      handleCloseEdit();
    } catch (error) {
      console.log(error);
    }
  }
  return (
<div className='px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md drop-shadow-4xl'>
      <h1 className='text-primary text-2xl sm:text-4xl drop-shadow-4xl py-4'>All Registered Visitors</h1>
      
    <TableComp data={visitors} columns={visitorssColumns} field='phone' />
    {isEditing && 
        <div className="w-full h-screen  absolute top-0 left-0">
    <div className="w-full h-full px-4  flex justify-center items-center bg-black/70">
      <div className="bg-primary dark:bg-darkbg p-4 rounded-md w-full sm:w-80">
        <div className="text-center text-2xl text-white drop-shadow-4xl"> <span>Update Book</span>
          <MdClose className="float-right text-2xl text-black cursor-pointer rounded-full p-1 bg-btnbg" onClick={()=>handleCloseEdit()} />
        </div>
        <ReusableForm fields={visitorsFields} initialValues={updateVisitorInitial} onSubmit={handleUpdate} />
      </div>
    
    </div>
    
    </div>
        
      }
    </div>
  )
}

export default VisitorsList
