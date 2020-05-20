import React from 'react';

const userContextDefaultValue = {
  email: '',
  setNewEmail: () => {},
};

export const LoginContext = React.createContext(userContextDefaultValue);
