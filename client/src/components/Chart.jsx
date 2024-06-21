import { Category, ChartComponent,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts'
import {registerLicense} from '@syncfusion/ej2-base';
import { useSelector } from 'react-redux';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeEx0Qnxbf1x0ZFBMZF9bRHBPMyBoS35RckVlW39edXBWRmZbUkBz');


const Chart = () => {
    const darkMode =  useSelector(state => state.darkMode);
    const data = localStorage.getItem('issueBook') ? JSON.parse(localStorage.getItem('issueBook')) : [];
    console.log(data);
    const primaryXAxis = {
        valueType: 'Category',
        title: 'Books',
        labelStyle: { color: darkMode ? 'white' : 'black'},
        titleStyle: {color: darkMode ? 'white' : 'black'}
    };
    const primaryYAxis = {
        labelFormat: '{value}',
        title: 'Amount',
        labelStyle: { color: darkMode ? 'white' : 'black'},
        titleStyle: {color: darkMode ? 'white' : 'black'}
    };

    return (
        <div className="dark:text-white">
        <ChartComponent
            id="charts"
            primaryXAxis={primaryXAxis}
            primaryYAxis={primaryYAxis}
            title="Issued Book Analysis"
            tooltip={{ enable: true }}
            legendSettings={{ visible: true }}
            legendStyle={{ textStyle: { color: darkMode ? 'white' : 'black'}}}
            titleStyle={{ color: darkMode ? 'white' : 'black'}}

            
        >
            <Inject services={[LineSeries, Category, Tooltip, DataLabel,Legend]} />
            <SeriesCollectionDirective>
                <SeriesDirective
                    dataSource={data}
                    xName="name"
                    yName="amount"
                    name="Amount"
                    type="Line"
                    fill={darkMode?'cyan':'black'}
                    marker={{ dataLabel: { visible: true,
                        font: { fontWeight: '600',color:darkMode?'white':'black' , size: '12'}}
                      }}
                    colorName='red'
                />
                <SeriesDirective
                    dataSource={data}
                    xName="name"
                    yName="paidAmount"
                    name="Paid Amount"
                    type="Line"
                    fill={darkMode?'red':'black'}
                    marker={{ dataLabel: { visible: true,
                        font: { fontWeight: '600',color:darkMode?'white':'black' , size: '12'}}}}
                />
            </SeriesCollectionDirective>
        </ChartComponent>
        </div>
    );
};

export default Chart
