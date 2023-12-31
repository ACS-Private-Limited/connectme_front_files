import React from 'react'
import { useRef, useState, useEffect, useContext}  from 'react'
//import AuthContext from "./context/AuthProvider";

const Login = () => {
   // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

  return (
    <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>Sign In</h1>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={userRef} autoComplete='off'
                   onChange={(e) => setUser(e.target.value)}
                   value={user}
                   required
                />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={userRef} autoComplete='off'
                   onChange={(e) => setPwd(e.target.value)}
                   value={pwd}
                   required
                />
          </form>
    </section>
  )
}

export default Login;