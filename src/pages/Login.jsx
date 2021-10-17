import React from "react";
import { useState } from 'react';
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => 
{
  
    const history = useHistory();
  
    let inipass = "";
    let iniinfo = "Enter access key";
    
    const [info, changeInfo] = useState(iniinfo);
    const [pass, changePass] = useState(inipass);

    const changePassFunc = (event) => {
        changePass(event.target.value);
    };

    const passAuth = (event) => {
        event.preventDefault()

        if (pass === "iiitranchi") {
          
            history.push('/progress');
          
        }
        else {
            changeInfo("Wrong Password! Try Again.");
        }
    };

    return (
          <div id="nnwe">
          <h1 style={{marginTop:'0px'}}><img id = "logo" alt= "Google-Cloud" src= "https://events.withgoogle.com/media/ade087df/img/microsite-wsx/logos/google-cloud.png"/></h1>
            <div id="login">
                <div id="info">{info}</div>
                <form onSubmit={passAuth} id="login--form">
                    <TextField type="password" onChange={changePassFunc} label="Access key" value={pass} variant="outlined"/>
                    <Button type="submit" variant="contained" size="large">
                        Login
                    </Button>
                </form>
            </div>
            </div>
    );
};
export default Login;
