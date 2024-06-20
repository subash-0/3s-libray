
import useColumns from '../utils/visitorColumes';
import { TableComp } from '../components';


const VisitorsList = () => {
  const {visitorssColumns} = useColumns();
const visitors = localStorage.getItem('visitors') ? JSON.parse(localStorage.getItem('visitors')) : visitors;
  
  return (
<div className='px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md drop-shadow-4xl'>
      <h1 className='text-primary text-2xl sm:text-4xl drop-shadow-4xl py-4'>All Registered Visitors</h1>
      
    <TableComp data={visitors} columns={visitorssColumns} field='author' />
    </div>
  )
}

export default VisitorsList
