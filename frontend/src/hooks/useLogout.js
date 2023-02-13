import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();
  
  //remove user from storage
  const logout = () => {
    localStorage.removeItem("user");

    //update global state (logout action)
    dispatch({ type: "LOGOUT" })
    workoutsDispatch({ type: 'SET_WORKOUTS' , payload: null})
  };

  return { logout };
};
