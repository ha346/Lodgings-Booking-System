import { GoogleLogin } from "react-google-login";

const clientId="800280250182-3vf1rid4rhfsbbul3oe3nqbdefb7rplh.apps.googleusercontent.com"

function GoogleAuthLogin() {
    
    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }

    return (
        <div className="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single-host-origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default GoogleAuthLogin;