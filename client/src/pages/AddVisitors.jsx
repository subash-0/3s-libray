
import {visitorsFields,initialVisitor} from '../utils/formField'
import { ReusableForm, TableComp, UpdateBook } from '../components'
import useColumns from '../utils/visitorColumes'
import { useDispatch, useSelector } from 'react-redux'
import { addVisitor, updateVisitor } from '../redux/slices/visitorSlice'
import { toast } from 'react-toastify'
import { MdClose } from 'react-icons/md'


const AddVisitors = () => {
  const {visitorssColumns , isEditing, currentvisitors , handleCloseEdit } = useColumns();
  const visitor = useSelector((state) => state.visitor.visitors);
  let visitorUpdate = useSelector((state) => state.visitor.visitors.find((visitor) => visitor.phone === currentvisitors));
  const dispatch = useDispatch();
  const updateVisitorInitial = {
    name:visitorUpdate?.name,
    phone:visitorUpdate?.phone,
    department:visitorUpdate?.department,
  }
  const handleSubmit = async (values) => {
    try {
     dispatch(addVisitor(values)).unwrap();
      toast.success("Visitor Added Successfully");
    
    } catch (error) {
      toast.error(error);
    }
      
    }
    const handleUpdate = async (value) => {
      try {
       toast.success("Book Updated Succesfully!");
        dispatch(updateVisitor(value)).unwrap();
        handleCloseEdit();
      } catch (error) {
         toast.error(error);
       
      }
     };
  return (
    <div className="w-full h-full px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md">
      <h1 className='text-center py-2 dark:text-white  font-Lora text-2xl sm:text-4xl underline'>VISITOR MANAGEMENT</h1>
        <div className="h-full w-full text-white">
           
       <div className=" flex  flex-col md:flex-row gap-3 w-full  ">
              <div className="w-full sm:w-96 bg-primary dark:bg-darkbg rounded-md h-fit">
              <h1 className="text-lg sm:text-2xl drop-shadow-blue text-center py-2 font-bold">Add Visitors</h1>
                 <ReusableForm  fields={visitorsFields} initialValues={initialVisitor} onSubmit={handleSubmit}/>
                </div>
                <div className="w-full rounded-lg overflow-hidden">
                  <TableComp data={visitor} columns={visitorssColumns} field='department'  />
                </div>
       </div>
        </div>
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

export default AddVisitors
