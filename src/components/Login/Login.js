import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import auth from './auth';
import { useHistory } from 'react-router';
import { Button, TextField } from '@material-ui/core';

export default function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  return (
    <>
      <div className="login-wrapper" >
        <h1>Please Log In</h1>

        <label style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', gap: '20px', paddingBottom:'10px' }}>
          <p>Username :</p>
          <TextField variant='outlined' id="outlined-basic" type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label style={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', gap: '20px',paddingBottom:'10px' }}>
          <p>Password :</p>
          <TextField variant='outlined' id="outlined-basic" type="password" onChange={e => setPassword(e.target.value)} />
        </label>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              auth.login(() => {
                history.push('/home');
              });
            }}
          >
            Submit
          </Button>
        </div>

      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}