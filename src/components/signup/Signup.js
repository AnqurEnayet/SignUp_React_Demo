import React, { useState, useEffect } from 'react';
import validator from 'validator';


import '../signup/Signup.css';

const Signup = () => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState(null);
    const [emailValidator, setEmailValidator] = useState(false);

    const [description, setDescription] = useState('');

    const [password, setPassword] = useState(null);
    const [passwordValidator, setPasswordValidator] = useState(false);

    const [formValidator, setformValidator] = useState(false);

    useEffect(() => {
        console.log(formValidator)
        if (name !== '' && email !== '' && password !== null && description !== '') {
            if (password.length >= 8) setformValidator(true);

        } else {
            setformValidator(false);
        }
        if (email !== null && validator.isEmail(email)) {
            setEmailValidator(true);
        } else {
            setEmailValidator(false);
        }

        if (password !== null && password.length >= 8) {
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
        <div className="Signup">
            <p className="steps">Step 1 of 3 <span class="active-dot"></span><span class="dot"></span><span class="dot"></span></p>
            <h1 className="form-header">Let's set up your account</h1>
            <p className="account-existance">Already have an account? <a href="">Sign in</a></p>
            <form className="form" onSubmit={submitHandler}>
                <input type="text"
                    onChange={nameHandler}
                ></input>
                <label className={name == '' ? "form-Label" : "form-nameLabel"}>Your Name</label>
                <br />
                <input type="email"
                    onChange={emailHandler}
                    className={(email !== null && emailValidator == false) ? "emailRed" : "email"}
                ></input>
                <label 
                className={email == '' || email == null ? "form-Label" : "form-emailLabel"}
                style={(email!=='' && email!== null && emailValidator==false)?{color:"red"}:{}}
                >Email</label>
                {(email !== null && emailValidator == false) ? <p className="warningMessageEmail">Please Enter a valid Email Address</p> : ""}
                <br />
                <select placeholder="I would describe my user type as" onChange={descriptionHandler}>
                    <option></option>
                    <option value="Rare">Rare</option>
                    <option value="Often">Often</option>
                    <option value="Regular">Regular</option>
                </select>
                <label className={description == '' || description == null ? "form-Label" : "form-descriptionLabel"}>I would describe my user type as</label><br />
                <input
                    type="password"
                    onChange={passwordHandler}
                    className={(password !== null && passwordValidator == false) ? "passwordRed" : "passwordNormal"}
                ></input>
                <label className={password == '' || password == null ? "form-Label" : "form-passwordLabel"}>Password</label>
                <br />
                <p className="warningMessagePassowrd">Minimum 8 characters</p>
                <button type="submit" value="submit" disabled={!formValidator}>Next</button>
            </form>
            <p className="paragraph">By clicking the "Next" button, you agree to creating a free account, and to <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.</p>
        </div>
    )
}

export default Signup;
