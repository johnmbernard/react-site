import React, { useState } from "react";
import { signInWithEmailAndPassword, signInAnonymously, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig/firebaseConfig";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State to manage pop-up visibility

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGuestSignIn = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      setUser(userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setIsSignUpOpen(false); // Close pop-up on successful sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleGuestSignIn}>Sign In as Guest</button>
      <button onClick={() => setIsSignUpOpen(true)}>Sign Up</button> {/* Trigger pop-up */}

      {user && <p>Welcome, {user.isAnonymous ? "Guest" : user.email}!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Pop-Up for Sign-Up */}
      {isSignUpOpen && (
        <div style={{ border: "1px solid black", padding: "20px", background: "white" }}>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignUp}>Submit</button>
          <button onClick={() => setIsSignUpOpen(false)}>Cancel</button> {/* Close pop-up */}
        </div>
      )}
    </div>
  );
};

export default SignIn;