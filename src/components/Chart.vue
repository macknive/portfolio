<template>
    <div id="chart">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StackingBar' xName='x' yName='y'> </e-series>
                <e-series :dataSource='seriesData1' type='StackingBar' xName='x' yName='y'> </e-series>
                
                
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import { ChartPlugin,Category, StackingBarSeries} from "@syncfusion/ej2-charts";
Vue.use(ChartPlugin);
export default {
  data() {
    return {
      seriesData: [
                { x: '2014', y: 111.1 },
                { x: '2015', y: 127.3 },
                { x: '2016', y: 143.4 },
                { x: '2017', y: 159.9 }],
               seriesData1: [
                { x: '2014', y: 76.9 },
                { x: '2015', y: 99.5 },
                { x: '2016', y: 121.7 },
                { x: '2017', y: 142.5 }],
              primaryXAxis: {
                valueType: 'Category'
        },
    };
  },
  provide:{ 
     chart: [StackingBarSeries, Category]
  }
};
</script>