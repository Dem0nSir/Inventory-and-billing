import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in as", user);
        console.log("Attempting to navigate to dashboard");
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          setError("Please enter valid email and password");
        } else {
          setError(errorMessage);
        }

        // setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main style={{ height: "100vh" }}>
        <section className="bg-light p-3 p-md-4 p-xl-5">
          <div className="container-fluid p-0 " style={{ height: "80vh" }}>
            <div className="row">
              <div className="col-12 col-xxl-12">
                <div className="card border-light-subtle shadow-sm">
                  <div className="row g-0" style={{ height: "90vh" }}>
                    <div className="col-12 col-md-6">
                      <img
                        className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                        loading="lazy"
                        src="./background/background.png"
                        alt="Welcome back you've been missed!"
                      />
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                      <div className="col-12 col-lg-11 col-xl-10 ">
                        <div className="card-body p-3 p-md-4 p-xl-5">
                          <div className="row">
                            <div className="col-12">
                              <div className="mb-8">
                                <div className="text-center mb-6">
                                  {/* <img
                                      src="./assets/img/bsb-logo.svg"
                                      alt="BootstrapBrain Logo"
                                      width="175"
                                      height="57"
                                    /> */}
                                  <h1 className="fw-bold text-muted">
                                    Inventory Management System
                                  </h1>
                                </div>
                                <h2 className="h4 text-center">Login</h2>
                              </div>
                            </div>
                          </div>
                          <form>
                            {error && (
                              <div className="alert alert-danger">{error}</div>
                            )}
                            <div className="row gy-3 overflow-hidden">
                              <div className="col-12">
                                <div className="form-floating mb-3">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                  <label for="email" className="form-label">
                                    Email
                                  </label>
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="form-floating mb-3">
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    // value=""
                                    placeholder="Password"
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    required
                                  />
                                  <label for="password" className="form-label">
                                    Password
                                  </label>
                                </div>
                              </div>
                              {/* <div className="col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    name="iAgree"
                                    id="iAgree"
                                    required
                                  />
                                  <label
                                    className="form-check-label text-secondary"
                                    for="iAgree"
                                  >
                                    I agree to the{" "}
                                    <a
                                      href="#!"
                                      className="link-primary text-decoration-none"
                                    >
                                      terms and conditions
                                    </a>
                                  </label>
                                </div>
                              </div> */}
                              <div className="col-12">
                                <div className="d-grid">
                                  <button
                                    className="btn btn-dark btn-lg"
                                    type="submit"
                                    onClick={onLogin}
                                  >
                                    Sign up
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div className="row">
                            <div className="col-12">
                              {/* <p className="mb-0 mt-5 text-secondary text-center">
                                NO account yet?{" "}
                                <NavLink to="/signup">Sign up</NavLink>
                              </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
