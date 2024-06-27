
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip} from '@syncfusion/ej2-react-charts'
import { useSelector } from 'react-redux';

const PieChart = () => {
    const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : books;
  const darkMode = useSelector(state => state.darkMode);
    
  return (
    <div className='w-fit'>
       <AccumulationChartComponent id='charts' title='Book Amount Analysis' legendSettings={{position:'Bottom',color:darkMode?'white':'black'}} tooltip={{enable:true}}  titleStyle={{color:darkMode?'white':'black'}}>
    <Inject services={[PieSeries, AccumulationTooltip, AccumulationLegend, AccumulationDataLabel]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={books} innerRadius='50%' xName='name' yName='quantity' type='Pie' dataLabel={{visible:true, name:'name' , position:'Inside'}}/>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
    </div>
  )
}

export default PieChart
