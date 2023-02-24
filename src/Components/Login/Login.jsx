
import React,{useEffect} from "react";
import "./Login.css"

const Login = () =>{
 let toLogin =()=>{
    alert("ff")
        // cv.style.animation="an5m 1s ease-in-out";
         cv.style.animation="anm2 0.3s ease-in-out";
         b.style.display="none"; 
         a.style.display="flex"; 
         
       }
       
 let toSign= ()=>{
    alert("ff")
    // cv.style.animation="an5m 1s ease-in-out";
     cv.style.animation="anm 0.3s ease-in-out";//"translateX(-700px)"
     a.style.display="none"; 
     b.style.display="flex"; 
     
   }
    useEffect(()=>{
     init();
    },[])
    return (
        <div id="bbody">
    <div id="box">
    </div>
    <div id="glass">
        <canvas id="card"></canvas>
    </div>
    <div id="c">
        <form>
            <div id="login-box">
                <h1> Login</h1> <label htmlFor="name"> Username:</label>
                <input name='username' id="name" type="text" placeholder="Username"/> <label id="ps"> Password:</label>
                <input name="password" id="pass" type="password"/>
                <p id="fp">forgot password?</p> <button id='logbt' type="submit">Submit</button> Don't have a Account
                 <a onClick={toSign} style={{color:"red"}}> Click Here! </a>
            </div>
        </form>
        <form>
            <div id="sign-box" style={{display:"none"}}>
                <h1> Sign Up </h1> <label htmlFor="name"> Username:</label>
                <input name="username" id="name" type="text" placeholder="Username"/> <label> Password:</label>
                <input name="password" id="pass" type="password"/> <label> Email:</label>
                <input name="email" id="mail" type="email"/> <button id="signbt" type="submit">Submit</button> To Log in
                <a onClick={toLogin} style={{color:"red"}}>Click Here! </a>
        </div>
        </form>
    </div>
    
    </div>
    );
   };
 

   function init(){
    let a=document.getElementById("login-box") 

let b=document.getElementById("sign-box") 
let cv=document.getElementById("card") 
let ctx=cv.getContext("2d");
let qcv=document.querySelector("#card") 

function toLogin (){
 // cv.style.animation="an5m 1s ease-in-out";
  cv.style.animation="anm2 0.3s ease-in-out";
  b.style.display="none"; 
  a.style.display="flex"; 
  
}
window.onload=
  console.log('shy');



let cstyle = getComputedStyle(qcv)

function toSign (){
 // cv.style.animation="an5m 1s ease-in-out";
  cv.style.animation="anm 0.3s ease-in-out";//"translateX(-700px)"
  a.style.display="none"; 
  b.style.display="flex"; 
  
}

function draw(){
 //ctx.beginPath(); 
 ctx.moveTo(300,0); 
 let y=0;
 for(let i=0;i<155;i++){
   if(i<75) y+=1; 
   else if(i==75)y=y
   else y-=1;
    
 ctx.lineTo(300-3*y+y*y/100,i)
 ctx.lineWidth=0.1;
 ctx.stroke()
 ctx.fillStyle="#0fffff"
 ctx.globalAlpha=0.1;
 ctx.fill()
 
 }
 ctx.closePath();
 
}
draw()
   }
   
   export default Login;