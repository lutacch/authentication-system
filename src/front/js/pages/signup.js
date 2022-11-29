import React from "react";


const Signup = () => {

    var info = {}
    
    const sendInfo = () => {
        info.email = document.getElementById("email").value
        info.password = document.getElementById("password").value
        console.log("info",info)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(info);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

fetch("https://3001-lutacch-authentications-e2zacrakn5i.ws-eu77.gitpod.io/signup", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
    return <div>
        <h4>Email <input id="email" type="text"></input></h4>
        <h4>Password <input id="password" type="text"></input></h4>
        <button onClick={()=>{sendInfo()}}>click</button>
        
        </div>
}

export default Signup;