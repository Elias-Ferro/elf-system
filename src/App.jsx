// eslint-disable-next-line no-unused-vars
import React from "react";
import SignIn from "./modules/signin/SignIn";
import ProtectedRoute from "./modules/routes/ProtectedRoute";

export default function App() {
  return (
    <>
      {/* <SignIn /> */}
      <ProtectedRoute />
    </>
  );
}
