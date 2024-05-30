import { express } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express();
app.use(cors());

app.get('/numbers/:numbersId',async (req,res)=>{
     const numbersId = req.params.numbersId;
     if(numbersId === "e"){
          const api= 'http://20.244.56.144/test/even';
     }
     else if(numbersId === "r"){
          const api= 'http://20.244.56.144/test/rand';
     }
     else if(numbersId === "f"){
          const api= 'http://20.244.56.144/test/fibo';
     }
     else if(numbersId === "p"){
          const api= 'http://20.244.56.144/test/primes';
     }
     try{
          const response = await fetch(api,{
               method:'GET',
               headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MDc0NTAwLCJpYXQiOjE3MTcwNzQyMDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE4MDU3ZjE3LTkxODAtNDEyNC04NWYyLTVmY2FhMzU3MzFiNyIsInN1YiI6ImJvZGFzYWlydXNoaWtAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiYWZmb3JkbWVkIiwiY2xpZW50SUQiOiIxODA1N2YxNy05MTgwLTQxMjQtODVmMi01ZmNhYTM1NzMxYjciLCJjbGllbnRTZWNyZXQiOiJVTVFQeU94bVVUWGpUWkVDIiwib3duZXJOYW1lIjoiQm9kYSBTYWkgUnVzaGlrIFJlZGR5Iiwib3duZXJFbWFpbCI6ImJvZGFzYWlydXNoaWtAZ21haWwuY29tIiwicm9sbE5vIjoiMjFCRDFBMTIwOSJ9.JgzktnoRz39Y0b7F2USZU_a0wRNSp6jHlNO1FWHUaCI'
               }    
          });
          const data = await response.json();
          const combArray = windowPrevState.concat(data);
          const uniqSet = new Set(combArray);
          const windowCurrState = Array.from(uniqSet);
          let n = windowCurrState.length;
          if(n>10){
               newWindowCurrState = windowCurrState.slice(n-10);
          }
          for(let i=0;i<(n-10);i++){
               sum = sum + newWindowCurrState[i];
          }
          const average = sum/(newWindowCurrState.length);
          const answer ={
               numbers:data,
               windowPrevState,
               newWindowCurrState,
               avg:average
          };
          windowPrevState = newWindowCurrState
          res.sendStatus(200).json(answer);
     }catch(error){
          console.log('error fetching data',error);
          res.status(500).json({error: 'failed to fetch data'});
     }
})

app.listen(3000,()=>{
     console.log("Server running on port 3000");
})