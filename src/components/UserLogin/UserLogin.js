import React from 'react'
import Button from '@material-ui/core/Button';
import {FormLabel} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import './UserLogin.css'
import auth from '../Login/auth'
import {useHistory} from 'react-router-dom';

function UserLogin(props) {
    const history = useHistory();
    return (
        <div>
            <div className='login'>

                <form className='login-form'>

                    <div className="username-content">
                        <FormLabel style={{color:'#000'}} className='username-label'>Username :</FormLabel>
                        <TextField className='username-field' id="outlined-basic" label="Please Enter Your Username" variant="outlined" type='text' ></TextField>
                    </div>

                    <div className="password-content">
                        <FormLabel style={{color:'#000'}} className='password-label'>Passowrd :</FormLabel>
                        <TextField className='password-field' id="outlined-basic" label="Please Enter Your Password" variant="outlined" type='password' />

                    </div>

                    <div className="form-group form-button">
                        <Button variant="outlined" onClick={props.onSelect}>Change Password</Button>
                        <Button variant="outlined" onClick={()=> {auth.logout(()=>{history.push("/")})}} >Logout</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default UserLogin
