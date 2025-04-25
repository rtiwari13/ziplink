import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  const handleLogin = (data) => {
    //  Call backend (Django DRF) API here
    console.log("Login data", data);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
