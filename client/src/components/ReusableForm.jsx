import  { useState } from 'react';
import { toast } from 'react-toastify';

const ReusableForm = ({ initialValues, onSubmit, fields }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      onSubmit(values);
    setValues(initialValues);
   
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full p-2">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="mb-1 font-medium text-white">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={values[field.name] || ''}
            placeholder={`Enter ${field.label}`}
            onChange={handleChange}
            className='p-2 rounded-md outline-none text-black dark:bg-input dark:text-white focus:outline-none border-b-2 border-primary' autoComplete="false"
            
             required     />
       
        </div>
      ))}
      <button
        type="submit"
        className="w-full px-4 py-2 font-bold text-black bg-btnbg dark:bg-primary dark:text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

export default ReusableForm;
