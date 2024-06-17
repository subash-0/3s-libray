
import {visitorsFields,initialVisitor} from '../utils/formField'
import {visitors} from '../assets/data'
import useVisitors from '../utils/visitorColumes'
import { ReusableForm, TableComp } from '../components'


const AddVisitors = () => {
  const {visitorssColumns} = useVisitors();
  return (
    <div className="w-full h-full px-4 py-10 sm:px-10 md:px-16 xl:px-20 pb-10 rounded-md">
        <div className="h-full w-full text-white">
           
       <div className=" flex  flex-col md:flex-row gap-3 w-full  ">
              <div className="w-80 bg-primary dark:bg-darkbg rounded-sm h-fit">
              <h1 className="text-lg sm:text-2xl drop-shadow-blue text-center py-2 font-bold">Add Visitors</h1>
                 <ReusableForm  fields={visitorsFields} initialValues={initialVisitor}/>
                </div>
                <div className="w-full">
                  <TableComp data={visitors} columns={visitorssColumns}  />
                </div>
       </div>
        </div>
     
    </div>
  )
}

export default AddVisitors
