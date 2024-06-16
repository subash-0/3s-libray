import { MdClose } from "react-icons/md";
import { formFields } from "../assets/formField";
import ReusableForm from "./ReusableForm";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateBook } from "../redux/slices/bookSlice";
const UpdateBook = (props) => {
  const dispatch = useDispatch();
  const isbn = props.book;
  const recentBook =useSelector((state) => state.book.books.find((book) => book.isbn === isbn));
  const initialBook = {
    isbn: recentBook.isbn,
    name: recentBook.name,
    author: recentBook.author,
    price: recentBook.price,
  };
  const handleUpdate = async (value) => {
   try {
    toast.success("Book Updated Succesfully!");
     dispatch(updateBook(value)).unwrap();
    props.onClose();
   } catch (error) {
      toast.error(error);
    
   }
  };
  return (
    <div className="w-full h-full absolute top-0 left-0">
    <div className="w-full h-full  flex justify-center items-center bg-black/70">
      <div className="bg-primary dark:bg-darkbg p-4 rounded-md px-3 w-full sm:w-80">
        <div className="text-center text-2xl text-white drop-shadow-4xl"> <span>Update Book</span>
          <MdClose className="float-right text-2xl text-black cursor-pointer rounded-full p-1 bg-btnbg" onClick={props.onClose} />
        </div>
        <ReusableForm fields={formFields} initialValues={initialBook} onSubmit={handleUpdate} msg={'Boook Updated Succesfully!'} />
      </div>
    
    </div>
    
    </div>
  )
}

export default UpdateBook
