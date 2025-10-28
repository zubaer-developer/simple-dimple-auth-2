import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    console.log("clicked google sign in");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        console.log(result.user);
        console.log(result.user.displayName);
        console.log(result.user.email);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    console.log("clicked git hub sign in");
  };

  const handleSignOut = () => {
    console.log("clicked sign out button");
    signOut(auth)
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>Please Sign In</h1>
      <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleGitHubSignIn}>Sign In With GitHub</button>
      <button onClick={handleSignOut}>Sign Out</button>

      {user && (
        <div>
          <h3> {user.displayName} </h3>
          <h3> {user.email} </h3>
          <img src={user.photoUrl} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
