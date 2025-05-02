import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the home page after a short delay
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 500);
    
    return () => clearTimeout(redirectTimer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-eee-purple to-eee-dark-purple text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-6">EEE Foundation</h1>
        <p className="text-xl mb-8">Educate. Empower. Elevate.</p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 rounded-full bg-white animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
        <p className="mt-6 text-white/80">Redirecting to homepage...</p>
      </div>
    </div>
  );
};

export default Index;
