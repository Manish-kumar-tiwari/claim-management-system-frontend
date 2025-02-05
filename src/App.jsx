import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotificationPage from "./pages/NotificationPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CreatePolicyPage from "./pages/CreatePolicyPage";
import MyPoliciesPage from "./pages/MyPoliciesPage";
import MyClaimPage from "./pages/MyClaimPage";
import ProfilePage from "./pages/ProfilePage";
import CreateClaimPage from "./pages/CreateClaimPage";
import toast, { Toaster } from "react-hot-toast";
import SinglePolicyPage from "./pages/SinglePolicyPage";
import ClaimUpdateForm from "./components/ClaimUpdateForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myPolicies" element={<MyPoliciesPage />} />
          <Route path="/myClaim" element={<MyClaimPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/buyPolicy" element={<CreatePolicyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/viewPolicy/claim" element={<CreateClaimPage />} />
          <Route path="/viewPolicy" element={<SinglePolicyPage />} />
          <Route path="/updateClaim" element={<ClaimUpdateForm />} />

        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
