import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase";

const googleProvider = new GoogleAuthProvider();

function App() {
  const handleGoogleSignIn = () => {
    console.log("clicked google sign in");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
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
    </>
  );
}

export default App;
