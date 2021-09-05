import React, { useState, useEffect } from 'react';
import validator from 'validator';


import '../signup/Signup.css';

const Signup = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState(null);
    const [emailValidator, setEmailValidator] = useState(false);

    const [description, setDescription] = useState(null);

    const [password, setPassword] = useState(null);
    const [passwordValidator, setPasswordValidator] = useState(false);

    const [formValidator, setformValidator] = useState(false);

    useEffect(() => {
        console.log(formValidator)
        if (name !=='' && email !=='' && password !==null && description !=='') {
            if(password.length>=8)setformValidator(true);

        } else {
            setformValidator(false);
        }
        if (email !== null && validator.isEmail(email)) {
            setEmailValidator(true);
        } else {
            setEmailValidator(false);
        }

        if (password!== null && password.length >= 8) {
            setPasswordValidator(true);
        } else {
            setPasswordValidator(false);
        }

        console.log(description);

        //if(formValidator) alert('Successful');

    })

    const nameHandler = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const emailHandler = e => {
        setEmail(e.target.value);
    }

    const descriptionHandler = e => {
        setDescription(e.target.value);
    }

    const passwordHandler = e => {
        setPassword(e.target.value);
    }



    const submitHandler = e => {
        e.preventDefault();
        console.log(description);
        console.log("password :" + password);
        //let message = 'not';

    }

    return (
        <div className="Signup" onSubmit={submitHandler}>
            <h1>Let's set up your account</h1>
            <p>Already have an account <a href="">Sign in</a></p>
            <form className="form">
                <input type="text" placeholder="Your name" onChange={nameHandler}></input><br />
                <input type="email"
                    placeholder="Email"
                    onChange={emailHandler}
                    className={(email!=null && emailValidator==false)? "emailRed" : "email"}
                ></input>
                {(email!==null && emailValidator==false)? <p className="warningMessageEmail">Please Enter a valid Email Address</p> : ""}
                <br />
                <label>
                    <select placeholder="I would describe my user type as" onChange={descriptionHandler}>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label><br />
                <input 
                type="password" 
                placeholder="Password" 
                onChange={passwordHandler} 
                className={(password!==null && passwordValidator==false)? "passwordRed" : "passwordNormal"}></input><br />
                <p className="warningMessagePassowrd">Minimum 8 characters</p>
                <button type="submit" value="submit" disabled={!formValidator}>Next</button>
            </form>
            <p className="paragraph">By clicking the "Next" button, you agree to creating a free account, and to <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</p>
        </div>
    )
}

export default Signup;
