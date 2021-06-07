import React, { useEffect } from "react"
import Counter from "./Counter"
import axios from "axios"

const apiGet = async () =>{
  const url =  "https://feature-add-torch-serve-gpt-2-server-gkswjdzz.endpoint.ainize.ai/infer/GPT2-large_Fairytale"
  await axios({
   method :'post',
   url : url,
   data :
    {
       text:"i was born to laili. lolli",
       length:3,
       num_samples : 5
    }
   }).then(response => console.log(response)
);
  

}

const App = () =>{
  useEffect(()=>{
    apiGet();
  },[])
  return <Counter/>
}

export default App;
