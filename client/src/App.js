import react from "react";

import './App.css';
import { DayTime, PrintContent, DOMchange } from './components'


function App() {
  return (
    <div>
      <DayTime />
      <PrintContent />
      <DOMchange />
    </div>
  );
};

export default App;
