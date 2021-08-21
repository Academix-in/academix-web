import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import { AuthContext } from "../contexts/AuthContext";

function Hero() {
  const { currentUser } = useContext(AuthContext);
  let history = useHistory();
  return (
    <div class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-grid" style={{ alignItems: "center" }}>
            <div>
              <h1>Upgrade to your better self!</h1>
              <p>
                Do you ever look at YouTube videos of great personalities and
                get intimidated by their success in their respective field and
                dreamt about having all theirs achievement?
              </p>
              {currentUser === null ? (
                <div class="hero-signup-btn">Sign up for free now</div>
              ) : (
                <div
                  class="hero-signup-btn"
                  onClick={() => history.push("/interests")}
                >
                  Choose Interest
                </div>
              )}
            </div>
          </div>
          <div class="col-lg-6">
            <img src="images/svg/hero-img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
