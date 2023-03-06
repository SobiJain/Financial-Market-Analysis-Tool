import './App.css';
import Summary from './components/Display/Summary';
import PC from './components/Display/PC';
import PeerComp from './components/Display/PeerComp';
import QuaterlyResults from './components/Display/QuaterlyResults';
import PF from './components/Display/PF';
import BalanceSheet from './components/Display/BalanceSheet';
import CashFlows from './components/Display/CashFlows';
import Ratios from './components/Display/Ratios';
import Document from './components/Display/Document';




function App() {

  
  return (
    
    <div className="App">
      <Summary />
      <PC />
      <PeerComp />
      <QuaterlyResults />
      <PF />
      <BalanceSheet />
      <CashFlows />
      <Ratios />
      <Document />


    </div >
  );
}

export default App;
