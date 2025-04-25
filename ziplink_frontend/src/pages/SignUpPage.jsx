import AuthForm from "../components/AuthForm";

const SignUpPage = () => {
  const handleSignUp = (data) => {
    // Call backend (Django DRF) API here
    console.log("Signup data", data);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <AuthForm type="signup" onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
