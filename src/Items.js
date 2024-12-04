import React,{useState,useEffect} from 'react'
import  "./items.css"

const Items = () => {

const [data,setData]=useState('')
const [val,setVal]=useState('')

  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData= async()=>{
    const data=await fetch("http://localhost:5000/rows")
    const resp=await data.json()
    console.log(resp)
    setData(resp)
    setVal(resp)
  }

const calcPercentage=()=>{
    // console.log(perc)
    // setVal()
}


  return (
    <div>
     <table className="table">
        <div className="table-td">
        <thead>
        
            <tr>
                <th>Label</th>
                <th>Value</th>
                <th>Input</th>
                <th>Allocation %</th>
                <th>Allocation</th>
                <th>variance %</th>
            </tr>
        </thead>
        <tbody>
           <tr>
           {data && data.map((itemValue)=><>
                <td key={itemValue.id}>{itemValue.label}</td>
                <td >{itemValue.value}</td>
                <td><input type="number" value={val}/></td>
                <td><button onClick={calcPercentage}>Button1</button></td>
                <td><button>Button2</button></td>
                <td>0%</td>
                <tr>
               { itemValue.children.map((t)=><><td>{t.id}</td><td>{t.value}</td></>)}
               </tr>
                
                </>)}
           </tr>
       
        
        
        </tbody>
        </div>
     </table>


    </div>
  )
}

export default Items