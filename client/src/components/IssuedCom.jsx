
import { useParams } from 'react-router-dom'

const IssuedCom = () => {
   const {id} = useParams()
   const recentBook =localStorage.getItem('issueBook') ? JSON.parse(localStorage.getItem('issueBook')).find(book => book.isbn === id) : null;
   console.log(recentBook)
  return (
    <div>
       
    </div>
  )
}

export default IssuedCom
