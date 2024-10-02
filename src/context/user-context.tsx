import { createContext, useContext, useEffect, useReducer } from "react";
import type { Dispatch, PropsWithChildren } from "react";
import type { User } from "../types/user";
import useUser from "../hooks/use-user";

type State = {
  user: User | null;
};

type Action = {
  type: "SET_USER";
  payload: { user: User | null };
};

type Context = {
  state: State;
  dispatch: Dispatch<Action>;
};

const initialState = {
  user: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER": {
      return { ...initialState, user: action.payload.user };
    }
    default:
      return { ...state };
  }
};

export const UserContext = createContext<Context>({
  state: initialState,
  dispatch: () => undefined,
});

export const UserContextProvider = (props: PropsWithChildren): JSX.Element => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const { getUser, createUser } = useUser();

  async function getOrCreateUser() {
    let user = getUser();
    if (!user) {
      user = await createUser();
    }
    dispatch({
      type: "SET_USER",
      payload: { user },
    });
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getOrCreateUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const authContext = useContext(UserContext);

  if (!authContext) {
    throw new Error("useUserContext must be used within UserContextProvider");
  }

  return authContext;
}
