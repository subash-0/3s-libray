import { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { SiMicrosoftexcel } from "react-icons/si";
import { MdPictureAsPdf } from "react-icons/md";
import { exportToExcel, exportToPdf } from '../utils/exports';

function TableComp(props) {
  const [filterData, setFilterData] = useState(props.data);
  const darkMode =  useSelector(state => state.darkMode);
  const [key, setKey] = useState(0);
  const customStyles = {
    headCells: {
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: darkMode ? '#EB4B98' : 'white',
        whiteSpace: 'nowrap',
        wordWrap: 'break-word',
      },
    },
  };
  useEffect(() => {
    createTheme('solarized', {
      text: {
        primary: '#FFFFFF',
      },
      background: {
        default: darkMode ? '#3a405a' : '#189AB4',
        
      },
      context: {
        background: '#189AB4',
        text: '#FFFFFF',
      },
      divider: {
        default: 'white',
      },
      action: {
        button: 'white',
        hover: 'white',
        disabled: 'rgba(0,0,0,.12)',
      },
      headCells: {
        style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
        },
      },
      pagination: {
        button: {
          default: {
            color: 'white',
            backgroundColor: darkMode ? '#05445E' : '#189AB4',
          },
          hover: {
            color: 'white',
            backgroundColor: darkMode ? '#083C5A' : '#1A8CA4',
          },
          disabled: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        style: {
          color: 'white',
        },
      },
    }
    );
    // Force re-render by changing the key
    setKey(prevKey => prevKey + 1);
  }, [darkMode]);
  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    let result =  props.data.filter((data) => {
      return(
        data.name.toLowerCase().includes(value) ||
        data[props.field].toLowerCase().includes(value) 

      )
    });

    setFilterData(result);
  };
  useEffect(() => {
    setFilterData(props.data);
  }, [props.data]);
	return (
    <div className="">
      
     <div className=" flex justify-between bg-primary text-white dark:bg-darkbg w-full mb-1 gap-10  items-center">
    <div className="flex gap-1 justify-center items-center bg-darkbg dark:bg-primary rounded-sm">
    <input type="text" placeholder='Search Here .....'  className='w-full p-2 rounded-sm bg-transparent focus:outline-none text-white placeholder-white ' onChange={handleChange}/> 
    </div>
    <div className='px-4 flex gap-3 cursor-pointer'>
     <SiMicrosoftexcel onClick={()=>exportToExcel({data:filterData})} size={20}  />
     <MdPictureAsPdf  onClick={()=>exportToPdf({data:filterData,columns:props.columns})} size={20}/>
     
    </div>
     </div>
   
		<DataTable
    allowOverflow
        key={key}
      pagination
			columns={props.columns }
			data={filterData}
      theme='solarized'
      customStyles={customStyles}
      
      
		/>
     </div>
	);
}

export default TableComp;