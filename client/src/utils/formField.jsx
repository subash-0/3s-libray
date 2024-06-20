export const formFields = [
    { name: 'isbn', label: 'ISBN', type: 'text' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'author', label: 'Author', type: 'text' },
    { name: 'price', label: 'Price', type: 'number' },
  ];
  
export const visitorsFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'phone', label: 'Phone', type: 'number' },
    { name: 'department', label: 'Department', type: 'text' },
  ];
  
export const initialIssuedBooks = [
  {name: 'isbn', label: 'ISBN', type: 'text'},
  {name: 'bookName', label: 'Book Name', type: 'text'},
  {name: 'name', label: 'Visitor Name', type: 'text'},
  {name: 'issueDate', label: 'Issue Date', type: 'date'},
  {name: 'amount', label: 'Amount', type: 'number'},
  {name: 'paidAmount', label: 'Paid Amount', type: 'number'},
];
  
  export const initialBooks = {
    isbn: '',
    name: '',
    author:'',
    price: ''
  }
  export const initialVisitor = {
    name: '',
    phone: '',
    department: ''
  }
