const initState = {
  list: [],

  refuser: {},
  
};

// ACTION TYPES
const USER_CREATE = "USER_CREATE";
const USER_UPDATE = "USER_UPDATE";
const USER_DELETE = "USER_DELETE";
const USER_GET_ALL = "USER_GET_ALL";
const USER_GET_BY_ID = "USER_GET_BY_ID";

const REF_USER= "REF_USER";

// ACTIONS :: COmponents are interacting with this action
export function createUserAction(payload) {
  // return { type: EMPLOYEE_CREATE, payload: payload };

  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/user/";
    const requestBody = { ...payload, age: 30 };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: USER_CREATE, payload: payload });
  };
}

export function updateUserAction(payload) {
  // return { type: EMPLOYEE_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/user/${payload.id}`;
    const requestBody = { ...payload, age: 25 };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefUser({}));
  };
}

export function deleteUserAction(payload) {
  // return { type: EMPLOYEE_DELETE, payload: payload };

  // redux thunk
  return async (dispatch) => {
    const url = `http://localhost:8080/api/user/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllUserAction());
  };
}

export function getAllUserAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/user/";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const userList = await response.json();
    console.log(userList);

    // Update the UI
    dispatch({ type: USER_GET_ALL, payload: userList });
  };
}

export function getByIdUserAction(payload) {
  // return { type: EMPLOYEE_GET_BY_ID, payload: payload };
  return async (dispatch) => {
    const url = `http://localhost:8080/api/user/${payload.id}`;
    const response = await fetch(url);
    const userObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefUser(userObj));
  };
}

export function updateRefUser(payload) {
  return { type: REF_USER, payload: payload };
}

// REDUCER LOGIC
export function UserReducer(state = initState, action) {
  switch (action.type) {
    case USER_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case USER_UPDATE:
      // TODO
      return state;
    case USER_DELETE:
      // TODO
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case USER_GET_ALL:
      // Update the list
      return { ...state, list: action.payload };
    case USER_GET_BY_ID:
      // TODO
      return state;

    case REF_USER:
      return { ...state, refemp: action.payload };

    default:
      return state;
  }
}
