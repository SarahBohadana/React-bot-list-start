import { useEffect, useState } from "react";
import { List } from "./list";
import { Filter } from "./Filter";

 
export function App() {
  const [orList, setOrList] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() =>{
    async function getData(){
      try{
        const res = await fetch('https://api.npoint.io/86690d80ff3d455133f0');
        const data = await res.json();
        setOrList(data);
        setList(data);
      }catch(err){
        setErrorMsg(err.message);
      }finally{
        setLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);


  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
        {errorMsg ? (
          <h1>{errorMsg}</h1>
        ) : loading? (
          <h1>Loading...</h1>
        ) : 
        <>
        <Filter list={orList} onFilter={setList}/>
        <List list={list}/> 
        </>})
    </div>
  );
}
