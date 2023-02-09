import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  
  //remove user from storage
  const logout = () => {
    localStorage.removeItem("user");

    //update global state (logout action)
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
