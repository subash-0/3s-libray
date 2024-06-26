
import { addBook } from "../redux/slices/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useColumns from "../utils/columns";

import { formFields } from "../utils/formField";
import { initialBooks } from "../utils/formField";
import { ReusableForm, TableComp, UpdateBook } from "../components";


const AddBooks = () => {
  const {booksColumns , isEditing, currentBook , handleCloseEdit } = useColumns();
  const addedBooks = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
const handleSubmit = async (values) => {
try {
 dispatch(addBook(values)).unwrap();
  toast.success("Book Added Successfully");

} catch (error) {
  toast.error(error);
}
  
}
  return (
    <div className='py-5 flex   flex-col lg:flex-row relative px-4 sm:px-10 md:px-16 xl:px-20 flex-wrap z-0'>
        <div className="h-full w-full text-primary">
           
           <div className=" flex  flex-col sm:flex-row gap-3 w-full ">
                  <div className="w-full sm:w-96 bg-primary dark:bg-darkbg rounded-sm h-fit">
                  <h1 className="text-lg text-white sm:text-2xl drop-shadow-blue text-center py-2 font-bold">Register Book</h1>
                     <ReusableForm  fields={formFields} initialValues={initialBooks} onSubmit={handleSubmit}/>
                    </div>
                    <div className="w-full">
                      <h1 className="text-lg sm:text-xl mb-4">Registered Books</h1>
                      <TableComp data={addedBooks} columns={booksColumns} field='author'  />
                    </div>
           </div>
            </div>
      {isEditing &&  <UpdateBook book={currentBook} onClose={handleCloseEdit} />
      }
    </div>
  )
}

export default AddBooks
