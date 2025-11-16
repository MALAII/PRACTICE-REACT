//5\. Conditional Navigation** If a variable `isLoggedIn` is true, navigate to `/profile`,
//  otherwise navigate to `/login`

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConditionalNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);  // Toggle state

    if (!isLoggedIn) {
      navigate('/profile');   // If logging in → go to profile
    } else {
      navigate('/login');     // If logging out → go to login
    }
  };

  return (
    <>
      <button onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default ConditionalNavigation;
