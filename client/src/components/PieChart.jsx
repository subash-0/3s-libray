
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip} from '@syncfusion/ej2-react-charts'

const PieChart = () => {
    const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : books;

    
  return (
    <div className='w-fit'>
       <AccumulationChartComponent id='charts' title='Book Amount Analysis' legendSettings={{position:'Bottom'}} tooltip={{enable:true}}>
    <Inject services={[PieSeries, AccumulationTooltip, AccumulationLegend, AccumulationDataLabel]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective dataSource={books} innerRadius='50%' xName='name' yName='quantity' type='Pie' dataLabel={{visible:true, name:'name' , position:'Inside'}}/>
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
    </div>
  )
}

export default PieChart
