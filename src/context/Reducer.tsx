/** @format */
enum types {
  SET_USER = "SET_USER",
  SIGN_IN = "SIGN_IN",
  RESTORE_TOKEN = "RESTORE_TOKEN",
  SIGN_OUT = "SIGN_OUT",
  SET_TOKEN_ADMIN = "SET_TOKEN_ADMIN",
  SIGN_OUT_ADMIN = "SIGN_OUT_ADMIN",
}

export type state = {
  user: any;
  isLogin: boolean | null;
  isSignout: boolean | null;
  userToken: string | null;
  adminToken: string | null;
};

let initialState: any = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isLogin: JSON.parse(localStorage.getItem("isLogin") || "false"),
  isSignout: JSON.parse(localStorage.getItem("isSignout") || "false"),
  userToken: JSON.parse(localStorage.getItem("userToken") || "null"),
  adminToken: JSON.parse(localStorage.getItem("adminToken") || "null"),
};

const reducer = (state: state, action: any) => {
  //console.log({ oldState: state, type: action.type, payload: action.payload });
  switch (action.type) {
    case types.SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case types.SIGN_IN:
      localStorage.setItem("userToken", JSON.stringify(action.payload));
      localStorage.setItem("isLogin", JSON.stringify(true));
      localStorage.setItem("isSignout", JSON.stringify(false));
      return {
        ...state,
        isLogin: true,
        isSignout: false,
        userToken: action.payload,
      };

    case types.RESTORE_TOKEN:
      localStorage.setItem("userToken", JSON.stringify(action.payload));
      return {
        ...state,
        userToken: action.payload,
      };

    case types.SET_TOKEN_ADMIN:
      localStorage.setItem("adminToken", JSON.stringify(action.payload));
      return {
        ...state,
        adminToken: action.payload,
      };

    case types.SIGN_OUT_ADMIN:
      localStorage.removeItem("adminToken");
      return {
        ...state,
        adminToken: null,
      };

    case types.SIGN_OUT:
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      localStorage.setItem("isLogin", JSON.stringify(false));
      localStorage.setItem("isSignout", JSON.stringify(true));
      return {
        ...state,
        isLogin: false,
        isSignout: true,
        userToken: null,
      };

    default:
      throw new Error("Unexpected action");
  }
};
export { initialState, types, reducer };
