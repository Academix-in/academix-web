import React, { useContext, useState } from "react";
import { firebase } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
// import { TextField } from "@material-ui/core";

function Drawer(prop) {
  const {
    currentUser,
    getOtherInfo,
    resendOTP,
    userData,
    setUserData,
    signup,
    login,
    checkUserAlreadyExist,
    getOTP,
    error,
    setError,
  } = useContext(AuthContext);
  const [submitBtn, setSubmitBtn] = useState(true);
  const [enteredOtp, setEnteredOtp] = useState();
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setError("");
    let { name, value } = e.target;
    // console.log(name, "=", value);
    if (name === "enteredOtp") {
      // console.log("length", value.length);
      if (value.length > 6) {
        value = parseInt(value.toString().slice(0, 6), 10);
        setEnteredOtp(value);
      }
      // else return
      setEnteredOtp(value);
    } else {
      setUserData(() => ({ ...userData, [name]: value }));
    }
  };

  const handlePhoneChange = (value) => {
    // console.log(value," ", country," ", e," ", formattedValue);
    setUserData(() => ({ ...userData, phoneNumber: value }));
  };

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("captchaResolved");
          handlePhoneSubmit();
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
          const appVerifier = window.recaptchaVerifier;
          // appVerifier.verify()
          console.log("Capcha expired");
          appVerifier.reset();
        },
      }
    );
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setUpRecaptcha();
    const phoneNumber = "+" + userData.phoneNumber;
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setOtpSent(true);
        checkUserAlreadyExist(phoneNumber);
      })
      .catch((error) => {
        // Error; SMS not sent
        setOtpSent(false);
        console.log("sms", error);
        alert("SMS not sent");
      });
  };

  const handleSignupOTP = async (e) => {
    e.preventDefault();
    if (currentUser !== null) {
      signup(currentUser, currentUser.uid, userData, prop.closeHandle);
    } else {
      let optConfirm = await window.confirmationResult;
      optConfirm
        .confirm(enteredOtp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;

          userData.phoneNumber = user.phoneNumber;
          userData.uid = user.uid;
          userData.photoURL = user.photoURL;
          userData.emailVerified = user.emailVerified;

          signup(user, user.uid, userData, prop.closeHandle);
        })
        .catch(() => {
          // User couldn't sign in (bad verification code?)
          setError("Invalid OTP");
        });
    }
  };

  const handleLoginOTP = (e) => {
    e.preventDefault();
    let optConfirm = window.confirmationResult;
    optConfirm
      .confirm(enteredOtp)
      .then(() => {
        // User signed in successfully.
        // const user = result.user;
        login(prop.closeHandle);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        setError("Invalid OTP");
      });
  };

  const handleResentOTP = (e) => {
    e.preventDefault();
    // setUpRecaptcha()
    const phoneNumber = "+" + userData.phoneNumber;
    // const appVerifier = window.recaptchaVerifier;
    resendOTP(phoneNumber, window.recaptchaVerifier);
  };
  return (
    <div
      class={
        prop.drawerState ? "drawer-container" : "drawer-container drawer-closed"
      }
    >
      <div class="drawer-bg" onClick={prop.closeHandle}></div>
      <div class="drawer">
        <div class="close-btn" onClick={prop.closeHandle}></div>
        <div class="">
          <h1>Login</h1>
          <p>
            Or <a href="">create a new account</a>
          </p>

          {!otpSent && (
            <>
              <form onSubmit={handlePhoneSubmit}>
                <div class="input-field">
                  <PhoneInput
                    country={"in"}
                    value={userData.phoneNumber}
                    defaultErrorMessage="Invalid value"
                    onChange={(value) => handlePhoneChange(value)}
                    isValid={(value, country) => {
                      if (value.match(/12345/)) {
                        setSubmitBtn(true);
                        return "Invalid value: " + value + ", " + country.name;
                      } else if (value.length > 3 && value.length < 12) {
                        setSubmitBtn(true);
                        return "Invalid phone number, must be 10 digits";
                      } else if (value.length < 12) {
                        setSubmitBtn(true);
                        return true;
                      } else {
                        setSubmitBtn(false);
                        return true;
                      }
                    }}
                  />
                </div>
                <div id="recaptcha-container"></div>
                <button
                  disabled={submitBtn}
                  class="btn btn-primary"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </>
          )}

          {getOtherInfo && (
            <>
              <form onSubmit={handleSignupOTP}>
                <div class="input-field">
                  <input
                    type="number"
                    placeholder="One time password"
                    name="enteredOtp"
                    className="otp-field"
                    value={enteredOtp}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div class="input-field">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="displayName"
                    value={userData.displayName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-field">
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <button class="btn btn-primary" type="submit">
                  Submit
                </button>
                {/* <button class="btn btn-primary" onClick={handleResentOTP}>
                  Resend OTP
                </button> */}
              </form>
            </>
          )}

          {getOTP && (
            <>
              <form onSubmit={handleLoginOTP}>
                <div class="input-field">
                  <input
                    type="number"
                    placeholder="One time password"
                    name="enteredOtp"
                    className="otp-field"
                    value={enteredOtp || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <button
                  disabled={submitBtn}
                  class="btn btn-primary"
                  type="submit"
                >
                  Submit
                </button>
                {/* <button class="btn btn-primary" onClick={handleResentOTP}>
                  Resend OTP
                </button> */}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
