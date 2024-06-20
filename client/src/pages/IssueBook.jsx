import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { toast } from "react-toastify";
import { addIssueBook, getAllIssueBook, updateIssueBook } from "../redux/slices/issueBookSlice";
import { ReusableForm, TableComp } from "../components";
import IssueColumns from "../utils/IssueColumns";
import { initialIssuedBooks } from "../utils/formField";
import { MdClose } from "react-icons/md";

const IssueBook = () => {
  
  const {currentissuedBooks,handleCloseEdit,isEditing,issuedBooksColumns} = IssueColumns();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.issuedBook.issueBook);
  console.log(item);
  let updateIssued = useSelector((state) => state.issuedBook.issueBook.find((book) => book.isbn === currentissuedBooks));
  const updateInitialVluae = {
    isbn: updateIssued?.isbn,
    bookName: updateIssued?.bookName,
    name: updateIssued?.name,
    issueDate: updateIssued?.issueDate,
    amount: updateIssued?.amount,
    paidAmount: updateIssued?.paidAmount,
    dueAmount: updateIssued?.dueAmount,
  };
  
  const [formData, setFormData] = useState({
    isbn: "",
    bookName: "",
    name: "librarian",
    issueDate: "",
    amount: 30,
    paidAmount: 0,
    dueAmount: 0,
  });
  const darkMode = useSelector((state) => state.darkMode);
  const book = localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : items;
  const visitor = localStorage.getItem("visitors")
    ? JSON.parse(localStorage.getItem("visitors"))
    : visitor;
  let inputStlye = {
    height: "34px",
    border: "none",
    borderRadius: "2px",
    backgroundColor: darkMode ? "#1f2937" : "#f3f4f6",
    boxShadow: "none",
    color: darkMode ? "#f3f4f6" : "#1f2937",
  };

   
  const formatResult = (item) => {
    return (
      <>
        <div style={{ display: "flex",gap:"10px", textAlign: "left",margin:"2px" }}>
        <span>{item?.isbn}</span>
          {item.name}
        </div>
      </>
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (formData.paidAmount > 30) {
        return toast.error("You can't pay more than 30");
      }
      setFormData({ ...formData, dueAmount: 30 - formData.paidAmount});
      await dispatch(addIssueBook(formData));
      await dispatch(getAllIssueBook());
      toast.success("Book Issued Successfully");
      setFormData({
        isbn: "",
        bookName: "",
        name: "librarian",
        issueDate: "",
        amount: 30,
        paidAmount: 0,
        dueAmount: 0,
      })
    } catch (error) {
      toast.error("An error occurred while issuing book");
    }
   
  };
  const updateIssuedBook = async (value) => {

    try {
      toast.success("Book Updated Succesfully!");
      dispatch(updateIssueBook(value)).unwrap();
      handleCloseEdit();
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="px-4 py-10 sm:px-10 md:px-16 lg:px-36 xl:px-48 pb-10 rounded-md font-Lora">
      <h1 className="text-center text-2xl sm:text-4xl drop-shadow-blue my-2 dark:text-white">
        Issue Book
      </h1>
      <div className="flex justify-center items-center gap-6 flex-col">
        <div className="bg-primary w-full sm:w-96 h-full p-4 rounded-md text-white dark:bg-darkbg">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="searchBook" className="p-1">
                Book's Name :
              </label>
              <ReactSearchAutocomplete
              key={formData.bookName}
                id="searchBook"
                items={book}
                onSelect={(item) =>
                  setFormData({ ...formData, bookName: item?.name, isbn: item?.isbn})
                }
                formatResult={formatResult}
                showIcon={false}
                styling={inputStlye}
                placeholder="Search Book"
                value={formData.bookName}
                className="z-10 my-2 "
              />
            </div>
            <div>
              <label htmlFor="searchVisitor" className="p-1">
                Visitor's Name :
              </label>
              <ReactSearchAutocomplete
              key={formData.name}
                id="searchVisitor"
                items={visitor}
                onSelect={(item) =>
                  setFormData({ ...formData, name: item.name })
                }
                formatResult={formatResult}
                showIcon={false}
                styling={inputStlye}
                placeholder="Search Visitor"
                className="z-0 my-2 "
              />
            </div>

            <label htmlFor="issueDate">Issue Date:</label>
            <input
              type="date"
              id="issueDate"
                value={formData.issueDate}
                onChange={(e) =>
                    setFormData({ ...formData, issueDate: e.target.value })}
                placeholder="Issue Date"
              className="w-full p-1 rounded-sm my-1  outline-none text-black dark:bg-input/90 dark:text-white"
              required
            />
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              placeholder="30"
              value={formData.amount}
              className="w-full p-1 rounded-sm my-2  outline-none  text-black bg-white dark:bg-input/80 dark:text-white"
              disabled
            />
            <label htmlFor="pay">Paid Amount</label>
            <input
              type="number"
              id="pay"
              value={formData.paidAmount}
              onChange={(e) =>
                setFormData({ ...formData, paidAmount: e.target.value })}
              placeholder="Paid Amount"
              className="w-full p-1 rounded-sm my-2  outline-none text-black  dark:bg-input/80 dark:text-white"
              required
            />
            <button className="text-white hover:opacity-85  bg-darkbg dark:bg-input/80 w-full p-2 rounded-sm my-2  dark:text-white font-Lora" type="submit">
              Issue
            </button>
          </form>
        </div>

        <div className="w-full">
          <TableComp
            columns={issuedBooksColumns}
            data={item}
            field='bookName'
          />
        
        </div>
      </div>
      {isEditing && (
         <div className="w-full min-h-screen  absolute top-0 left-0 z-40">
         <div className="w-full h-full p-4  flex justify-center items-center bg-black/70">
           <div className="bg-primary dark:bg-darkbg  rounded-md w-full sm:w-80">
             <div className="text-center text-2xl text-white drop-shadow-4xl"> <span>Update Book</span>
               <MdClose className="float-right text-2xl text-black cursor-pointer rounded-full p-1 bg-btnbg" onClick={()=>handleCloseEdit()} />
             </div>
             <ReusableForm fields={initialIssuedBooks} initialValues={updateInitialVluae} onSubmit={updateIssuedBook} />
           </div>
           </div>
            </div>
      )}
    </div>
  );
};

export default IssueBook;
