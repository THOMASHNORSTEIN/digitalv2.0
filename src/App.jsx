import './App.css'
import Terminal from './components/Terminal'
import Terminal2 from './components/Terminal2'

function App() {
  

  let arrayOfdata=[{name:"name1", mail:"name1@gmail.com", sales:8000},
                   {name:"name2", mail:"name2@gmail.com", sales:9520},
                   {name:"name3", mail:"name3@gmail.com", sales:8050},
                   {name:"name4", mail:"name4@gmail.com", sales:4700}];
  function sortCompare(a,b){
    if(a.sales>b.sales){
        return -1;
    }
    else if(a.sales>b.sales){
        return 1;
    }
    else{
        return 0;
    }
  };
  console.log(arrayOfdata.sort(sortCompare));
  return (
    <div className="App">
      <Terminal
      />
      <Terminal2
      />
    </div>
  )
}

export default App
