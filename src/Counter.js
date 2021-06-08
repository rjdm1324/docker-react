import React,{Fragment, useState} from "react"
import {TextField} from "@material-ui/core"
import axios from "axios"

function Counter (){
    const [status, setStatus] = useState([]);
    const [count,setCount] =useState(4);
    const [length,setLength] = useState(5);
    const [text,setText] = useState("This is a homework.");
    const [curLength,setCurLength]=useState(text.length);
    const [lan,setLan]=useState("story");
    const apiGet = async (tt,l,c) =>{
        let x;
        let url="";
        if(lan=="story"){
        url =  "https://feature-add-torch-serve-gpt-2-server-gkswjdzz.endpoint.ainize.ai/infer/gpt2-large"
        }
        else{
        url = "https://feature-add-torch-serve-gpt-2-server-gkswjdzz.endpoint.ainize.ai/infer/gpt2_story"
        }
        await axios({
         method :'post',
         url : url,
         data :
          {
             text: tt,
             length: l,
             num_samples : c
          }
         }
       
         ).then(response => 
            {
                x=response
            } 
      );
        console.log(x.data);
        setCurLength(text.length);
        setStatus(Object.values(x.data));
    }

    const ts={
        display:"flex"
    }
    const tempStyle={
    width:"500px",
    height:"200px",
    margin:"50px",
    boder:"1px solid black",
    }
    const temp2Style={
        width:"500px",
        height:"500px",
        boder:"1px solid black",
        margin:"50px"
        }

    return(
        <div style={ts}>
        <div style={tempStyle}>
            <h1>작문을 도와줘!</h1>
            <TextField
            autoFocus
            label="내용"
            size="medium"
            type="text"
            multiline
            variant ="outlined"
            onChange={(e)=>setText(e.target.value)}
            rows={25}
            value={text}
            />
            <button onClick={()=>apiGet(text,length,count)}>help</button>
        </div>
        <div style={temp2Style}>
            <h2>모드 변경</h2>
            <h3>현재 모드 : {lan =="story" ? "general" : "story"} </h3>
            <button onClick={()=>setLan(lan =="story" ? "general" : "story")}>{lan}</button>
            <h2>샘플 수</h2>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>
            <h2>단어 수</h2>
            <h3>{length}</h3>
            <button onClick={()=>setLength(length+1)}>+1</button>
            <button onClick={()=>setLength(length-1)}>-1</button>
            {status.map((st,key)=>(
            <li key={key}
                value={key}
                onClick={(e)=>{
                e.preventDefault();
                setText(text+st.substring(curLength,st.length))
                setStatus([]);
                }}>
            {st.substring(curLength,st.length)}   
            </li>))}
            {console.log(text)}
        </div>
        </div>
    )
};
export default Counter;