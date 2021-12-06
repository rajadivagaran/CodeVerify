import React from "react";
import '../Stylesheets/Examination.css'



function Examination(){


    let scholarship1 = () =>{
        let check=[];
        let lang=document.getElementById("lang").value;
        check.push(lang);
        let maths=document.getElementById("maths").value;
        check.push(maths);
        let science=document.getElementById("science").value;
        check.push(science);
        let social=document.getElementById("social").value;
        check.push(social);
    
        console.log(check);
    
        let eligible = check.every((value)=> value >= 90);
    
        if(eligible)
        {
            document.getElementById("result").innerHTML="eligible";
    
        }
        else{
            document.getElementById("result").innerHTML="Not eligible";
        }
    
        return true;
    }
    
    
    
    let scholarship2 = () =>{
        let check=[];
        let lang=document.getElementById("lang1").value;
        check.push(lang);
        let maths=document.getElementById("maths1").value;
        check.push(maths);
        let science=document.getElementById("science1").value;
        check.push(science);
        let social=document.getElementById("social1").value;
        check.push(social);
    
        console.log(check);
    
        let eligible = check.some((value)=> value >= 90);
    
        if(eligible)
        {
            document.getElementById("result1").innerHTML="eligible";
    
        }
        else{
            document.getElementById("result1").innerHTML="Not eligible";
        }
    
    }
    


    return(
        <div id="mySidenav">
            <a href="#" id="Scholarship1" 
            onclick="document.getElementById('id01').style.display='block'">Scholarship1 Checker</a>
            <div id="id01" class="modal">
  
                <form class="modal-content animate">
                  <div class="imgcontainer">
                    <span onclick="document.getElementById('id01').style.display='none'" type="reset" class="close" title="Close Modal">&times;</span>
                  </div>
              
                    <div class="container">
                        <label for="lang">Language</label>
                        <input type="text" id="lang" name="lang" />
    
    
                        <label for="maths">Maths</label>
                        <input type="text" id="maths" name="maths" />
    
    
                        <label for="science">Science</label>
                        <input type="text" id="science" name="science" />
    
    
                        <label for="social">Social</label>
                        <input type="text" id="social" name="social" />


                        <button id="submitMarks" onclick={scholarship1}>Check</button>
                        
                        <textarea id="result" placeholder="Result"></textarea>
                    </div>
                </form>
            </div>
        <a href="#" id="Scholarship2" 
        onclick="document.getElementById('id02').style.display='block'">Scholarship2 Checker</a>
        <div id="id02" class="modal">
  
            <form class="modal-content animate">
              <div class="imgcontainer">
                <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
              </div>
          
                <div class="container">
                    <label for="lang">Language</label>
                    <input type="text" id="lang1" name="lang" />


                    <label for="maths">Maths</label>
                    <input type="text" id="maths1" name="maths" />


                    <label for="science">Science</label>
                    <input type="text" id="science1" name="science" />


                    <label for="social">Social</label>
                    <input type="text" id="social1" name="social" />


                    <button id="submitMarks1" onclick={scholarship2}>Check</button>

                    <textarea id="result1" placeholder="Result"></textarea>
                </div>
            </form>
        </div>
    </div>
    );
}
export default Examination;