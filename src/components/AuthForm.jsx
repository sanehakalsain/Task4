import { useState } from "react";
import { useAuth } from "./context/AuthContext";

//Default Functions

export default function AuthForm() {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const {signup, login, loginWithGoogle} = useAuth();

    //Handle Submit Function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        try{
            if(isRegister){
                await signup(email, password);
            }
            else{
                await login(email, password);
            }
        }
        catch(error){
            setError(error.message);
        }
        finally{
            setSubmitting(false);
        }
    }
     const handleGoogleLogin = async () => {
        setSubmitting(true);
        setError("");

        try{
            await loginWithGoogle();
        }
        catch(error){

            setError(error.message);
        }
        finally{
            setSubmitting(false);
        }

        return(
            <div>
                <h2>{isRegister? "Create an Account" : "Welcome Back"}</h2>
                <p>{isRegister? "Sign up to get started" : "Sign in to continue"}</p>
                {error && <p>{error}</p>}
            </div>
        )
    }
}