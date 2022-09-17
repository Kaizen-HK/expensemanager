import ChartBar from './ChartBar';
import './Chart.css'; 

function Chart (props) {
    console.log(props.dataPoints);
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum =  Math.max(...dataPointValues);
    console.log(totalMaximum);
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint)=> {
                return (<ChartBar 
                    key ={dataPoint.id}
                    value = {dataPoint.value} 
                    maxValue = {totalMaximum}
                    label ={dataPoint.label}
                    />)
            })}
        </div>
    )
}
export default Chart;