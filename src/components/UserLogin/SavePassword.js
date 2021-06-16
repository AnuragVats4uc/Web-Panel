import React from 'react'
import Button from '@material-ui/core/Button';
import {FormLabel} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import './SavePassword.css'
import {useHistory} from 'react-router-dom'
import auth from '../Login/auth'

function SavePassword(props) {
    const history = useHistory();
    return (
        <div>
            <div className='save-password'>

                <form className='save-password-form'>

                    <div className="save-username-content">
                        <FormLabel className='save-username-label'>Username :</FormLabel>
                        <TextField className='save-username-field' id="outlined-basic" label="Please Enter Your Username" variant="outlined" type='text' ></TextField>
                    </div>

                    <div className="save-password-content">
                        <FormLabel className='save-password-label'>New Password :</FormLabel>
                        <TextField className='save-password-field' id="outlined-basic" label="Please Enter Your New Password" variant="outlined" type='password' />

                    </div>

                    <div className="form-group form-button">
                        <Button variant="outlined" onClick={props.onSelect}>Save Password</Button>
                        <Button variant="outlined" onClick={()=> {auth.logout(()=>{history.push("/")})}}>Logout</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SavePassword
