import Header from "./component/Header"
import Table from "./component/Table.js";
//import CustomizedDialogs from "./component/CustomizedDialogs"
//import Form from "./component/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom";
 //import Table from "./component/Table.js";

// import ReactDOM from "react-dom/client";

import './App.css';

function App() {
  return (
    // <div>
    // <Header/>
    //  <Table/>
    // </div>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/Table" element={<Table />} />
      {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
     */}
    </Routes>
  </BrowserRouter>
    
   
  );
}

export default App;
