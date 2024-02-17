import {useSelector } from "react-redux";
import "./App.css";
import MonthSelector from "./components/MonthSelector";
import Statistics from "./components/Statistics";
import Transaction from "./components/Transaction";
import TransactionChart from "./components/TransactionChart";

const App = () => {
     const {product,category}=useSelector((state)=>state)
    console.log("product",product);
    console.log("category",category);
     return (
          <div className="App">
              <MonthSelector/>
               <Statistics product={product} />
               <Transaction product={product} />
               <TransactionChart category={category} />
          </div>
     );
};

export default App;
