import React, { useEffect, useState } from "react";
import firebase from "../../configs/firebase";
function LoginGoogle() {
  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {});
    setuser({
      isLogin: false,
    });
  };

  const [user, setuser] = useState({
    isLogin: false,
    name: "",
    photo: "",
  });
  useEffect(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("User signed in");
        console.log(user.displayName + "\n" + user.email);
        setuser({
          isLogin: true,
          name: user.displayName,
          photo: user.photoURL,
        });
      } else {
        console.log("No user signed in");
      }
    });
  }, []);

  return (
    <div className="login-area card mx-auto mt-5" style={{ width: 450 }}>
      {user.isLogin === false ? (
        <div className="card-body p-5">
          <h5 className="text-center mb-4">Welcome to Coding Squad</h5>
          <button
            type="button"
            className="btn btn-primary text-white w-100"
            onClick={onSubmit}
          >
            Login with Google
          </button>
        </div>
      ) : (
        <>
          <div className="card-media">
            <img src={user.photo} alt="" />
          </div>
          <div className="card-body">
            <h5>{user.name}</h5>
          </div>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
export default LoginGoogle;
