import { useState } from "react";
import { authActions } from "../store/auth-slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then(response => {
                if (response.body.token) {
                    //set token in redux store
                    dispatch(authActions.setToken(response.body.token));
                    //get user data from API
                    fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${response.body.token}`
                        }
                    })
                        .then((res) => res.json())
                        .then((response) => {
                            console.log(response.body)
                            //set redux store user infos
                            dispatch(authActions.login(response.body))
                        })

                    //redirect to profile page
                    navigate('/profile')
                }
            }).catch((err) => console.log(err))

    }


    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={login}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button className="sign-in-button">Sign In</button>

                </form>
            </section>
        </main>
    )
}

export default Login