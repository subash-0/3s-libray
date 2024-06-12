import { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { useSelector } from 'react-redux';
  

function TableComp(props) {
  const darkMode =  useSelector(state => state.darkMode);
  const [key, setKey] = useState(0);
  const customStyles = {
    headCells: {
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: darkMode ? '#EB4B98' : 'white',
      },
    },
  };
  useEffect(() => {
    createTheme('solarized', {
      text: {
        primary: '#FFFFFF',
      },
      background: {
        default: darkMode ? '#05445E' : '#189AB4',
        
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
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
	return (
    <div className="overflow-x-hidde">
		<DataTable
        key={key}
      pagination
			columns={props.columns }
			data={props.data}
      theme='solarized'
      customStyles={customStyles}
      expandableRows
      
      expandableRowsComponent={ExpandedComponent }
      
		/>
    </div>
	);
}

export default TableComp;