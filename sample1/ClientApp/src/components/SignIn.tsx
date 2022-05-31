import { useState } from "react";
import SignUp from "./Signup";
import './SignIn.css';
import Poster from "./Poster";
import { useAuth } from "./Auth";
import Login from "./Login";

export default function SignIn() {
    const [isSignup, setIsSignUp] = useState(true);
    const auth = useAuth();
    auth.logout();

    return (
        <div className="auth-page">
            <Poster />
            {isSignup
                ? <SignUp toggleSignInOption={setIsSignUp} />
                : <Login toggleSignInOption={setIsSignUp} />}
        </div>
    );
}