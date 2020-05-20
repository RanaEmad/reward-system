import React, { useState } from 'react';

export const useEmail = () => {
  const [email, setEmail] = useState('');

  const setNewEmail = React.useCallback((newEmail) => setEmail(newEmail), []);

  return {
    email,
    setNewEmail,
  };
};
