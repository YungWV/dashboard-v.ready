import './App.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Dashtwo from '../src/dashboardoptions/dashtwo'
import Dashmain from '../src/dashboardoptions/dashmain/index';
import Dashboard from '../src/components/dashboard/index';
import Dashthree from '../src/dashboardoptions/dashthree'
function App() {

  return (
    <div>
      <>
      <Dashboard
        options={Dashmain}
      />
      </>

      <>
      <>
      <Dashboard
        options={Dashtwo}
      /></>
      <>
      <Dashboard
        options={Dashthree}
      />
      </>
      </>




    </div>





  )
};

export default App;
