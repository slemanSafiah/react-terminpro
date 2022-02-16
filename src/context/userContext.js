import react, { useContext, useState } from "react";

const UserContext = react.createContext();

export function useAuth() {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    email: "",
    first: 0
  });
  const [first, setFirst] = useState(true);

  async function login(email, password) {
    if (email === "admin@gmail.com" && password === "123") {
      setCurrentUser({
        email: email,
        loggedIn: true
      });
      setFirst(false);
      return "token";
    }
    return "error";
  }

  async function logout() {
    setCurrentUser({
      email: "",
      loggedIn: false
    });
  }

  const value = {
    currentUser,
    first,
    setFirst,
    login,
    logout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
