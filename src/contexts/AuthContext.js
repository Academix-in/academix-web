import React, { useContext, useState, useEffect } from "react";
import app, { auth, firebase } from "../firebase";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    uid: "",
    emailVerified: false,
  });
  const [loading, setLoading] = useState(true);
  const [getOtherInfo, setGetOtherInfo] = useState(false);
  const [getOTP, setGetOTP] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [error, setError] = useState("");
  let db = app.firestore();

  function signup(user, id, data, closeDrawer) {
    // First send verification mail
    user
      .updateEmail(data.email)
      .then(() => {
        user.sendEmailVerification().then(async () => {
          setVerifyEmail(true);

          // Once done - Update display name
          await user.updateProfile({
            displayName: data.displayName,
          });

          // Add User Data in database
          db.collection("users")
            .doc(id)
            .set(data)
            .then(() => {
              console.log("Document successfully written!");
              // Once Done - Add number in phoneNumber collection
              let docRef = db.collection("phoneNumbers").doc("numbers");
              docRef.update({
                allPhoneNumbers: firebase.firestore.FieldValue.arrayUnion(
                  userData.phoneNumber
                ),
              });
              closeDrawer();
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        });
      })
      .catch((err) => {
        setError(err.message);
        // logout();
        console.error(err);
      });
  }

  function login(closeDrawer) {
    closeDrawer();
    // console.log("Logged IN Successfully")
  }

  function logout() {
    return auth.signOut();
  }

  async function resendOTP(phoneNumber, appVerifier) {
    // await logout();
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // setOtpSent(true);
        // checkUserAlreadyExist(phoneNumber);
        setError("SMS sent");
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        // setOtpSent(false);
        // alert("SMS not sent")
        console.log("Error from resend otp", error);
        setError("SMS not sent");
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("User ji=>", user);
      setLoading(false);
      return unsubscribe;
    });
  }, []);

  useEffect(() => {
    if (currentUser !== null) {
      if (!currentUser.emailVerified) {
        setVerifyEmail(true);
      }
    }
  }, [currentUser]);

  const checkUserAlreadyExist = (number) => {
    let docRef = db.collection("phoneNumbers").doc("numbers");
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          let data = doc.data();
          if (data.allPhoneNumbers.includes(number)) {
            // login
            setGetOTP(true);
          } else {
            // signup
            setGetOtherInfo(true);
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const value = {
    currentUser,
    setCurrentUser,
    checkUserAlreadyExist,
    error,
    setError,
    getOtherInfo,
    resendOTP,
    verifyEmail,
    getOTP,
    userData,
    setUserData,
    login,
    signup,
    auth,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
