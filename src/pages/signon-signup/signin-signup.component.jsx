import React from 'react';
import SignOn from '../../components/signon/signon.component';
import SignUp from '../../components/signup/signup.component';

import './signin-signup.styles.scss';

const SignInSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignOn/>
        <SignUp/>
    </div>
);

export default SignInSignUpPage;