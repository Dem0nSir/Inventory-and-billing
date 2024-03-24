import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";
// import { db } from "../services/firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // Save additional user data in Firestore
        setDoc(doc(db, "users", user.uid), {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          // Add any additional user data here
        });
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <main style={{ height: "100vh" }}>
        <section className="bg-light p-3 p-md-4 p-xl-5">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-12 col-xxl-11">
                <div className="card border-light-subtle shadow-sm">
                  <div className="row g-0">
                    <div className="col-12 col-md-6">
                      <img
                        className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                        loading="lazy"
                        src="./background/background.png"
                        alt="Welcome back you've been missed!"
                      />
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                      <div className="col-12 col-lg-11 col-xl-10">
                        <div className="card-body p-3 p-md-4 p-xl-5">
                          <div className="row">
                            <div className="col-12">
                              <div className="mb-5">
                                <div className="text-center mb-4">
                                  <a href="#!">
                                    {/* <img
                                   src="./assets/img/bsb-logo.svg"
                                   alt="BootstrapBrain Logo"
                                   width="175"
                                   height="57"
                                 /> */}
                                    <p className="fw-bold">
                                      Inventory Management Syatem
                                    </p>
                                  </a>
                                </div>
                                <h2 className="h4 text-center">Sign up</h2>
                              </div>
                            </div>
                          </div>
                          {/* <div className="row"> */}
                          {/* <div className="col-12">
                              <div className="d-flex gap-3 flex-column">
                                <a
                                  href="#!"
                                  className="btn btn-lg btn-outline-dark"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-google"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                  </svg>
                                  <span className="ms-2 fs-6">
                                    Log in with Google
                                  </span>
                                </a>
                              </div>
                              <p className="text-center mt-4 mb-5">
                                Or enter your details to register
                              </p>
                            </div>
                          </div> */}
                          <form action="#!">
                            <div className="row gy-3 overflow-hidden">
                              <div className="col-12">
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                  />
                                  <label for="firstName" className="form-label">
                                    First Name
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="last Name"
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                  />
                                  <label for="lastName" className="form-label">
                                    Last Name
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-floating mb-3">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    value={email}
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
                                    value={password}
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
                              <div className="col-12">
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
                              </div>
                              <div className="col-12">
                                <div className="d-grid">
                                  <button
                                    className="btn btn-dark btn-lg"
                                    type="submit"
                                    onClick={onSubmit}
                                  >
                                    Sign up
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div className="row">
                            <div className="col-12">
                              <p className="mb-0 mt-5 text-secondary text-center">
                                Already have an account?{" "}
                                <NavLink to="/login">Sign in</NavLink>
                              </p>
                              {/* <button onClick={navigate('/dashboard')}>Back to dashboard</button> */}
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

export default Signup;
