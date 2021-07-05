import React from 'react';

// reducer
import authReducer from './reducers/auth';
import contactsReducer from './reducers/contacts';

// intitalStates
import authInitialState from './initialsStates/authState';
import contactsInitialState from './initialsStates/contactsState';

const GlobalContext = React.createContext({});

function GlobalProvider({children}) {
  const [authState, authDispatch] = React.useReducer(
    authReducer,
    authInitialState,
  );
  const [contactsState, contactsDispatch] = React.useReducer(
    contactsReducer,
    contactsInitialState.getContacts,
  );
  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactsState,
        authDispatch,
        contactsDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
