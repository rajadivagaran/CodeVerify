import React,{useState} from "react";
import '../Stylesheets/Library.css'


function Library(){

    // const [update,changeVal] = useState({greet :"Hell",time:" Good Morning"});
    const [update,changeVal] = useState("Hell");
    const [count,setChange] = useState(5);




    let Attendance = () =>{

        let promise = new Promise(function(resolve, reject){
            let xhr = new XMLHttpRequest();
        
            xhr.onload = function() {
                // console.log(JSON.parse (this.responseText));
                resolve(JSON.parse (this.responseText));
            }
            xhr.onerror = function(){
                reject(new Error("Error"));
            }
            xhr.open("GET","https://7yqcnood3j.api.quickmocker.com/", true);
        
            xhr.send();
        });
        
        promise.then(function(data){
            let k = '<tbody>'
            for(let i = 0;i < data.length; i++){
            k+= '<tr>';
            k+= '<td>' + data[i].Day + '</td>';
            k+= '<td>' + data[i].Value + '</td>';
            k+= '</tr>';
        }
        k+='</tbody>';
        document.getElementById('tableData').innerHTML = k;

    
        }).catch(function(err){
            console.error(err);
            });
      }

    return(

        <div>
            <div className="det">
                <div className="text">
                    {/* <h2>Hello</h2> */}
                    {/* <button onClick={(e) => changeVal({greet : "Hi how are you"})}>Show</button> */}
                    {/* <input />
                    <button onClick={(e) => changeVal("Hi how are you")}>Show</button> */}
                    <button onClick={Attendance} className="btn" >Show</button>


                    <table id="demo" className="attend">
                        <thead>
                            <tr>
                                <th id="col1">Day</th>
                                <th id="col2">Value</th>
                            </tr>
                        </thead>
                        <tbody id="tableData"></tbody>
                    </table>


                    {/* <button onClick={() => setChange(count+10)}>Increment</button>
                    <div>
                        <p>{update}</p>
                        <p>{count}</p>
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default Library;