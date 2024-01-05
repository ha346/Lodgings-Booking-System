import { GoogleLogout } from "react-google-login";

const clientId="800280250182-3vf1rid4rhfsbbul3oe3nqbdefb7rplh.apps.googleusercontent.com"

function GoogleAuthLogout() {
    
    const onSuccess = (res) => {
        console.log("Logout Successfull!");
    }

    return (
        <div className="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess} 
            />
        </div>
    )
}

export default GoogleAuthLogout;