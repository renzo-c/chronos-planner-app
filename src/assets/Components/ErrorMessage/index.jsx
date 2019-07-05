import React from 'react';
import ErrorModal from './ErrorModal';

const ErrorMessage = ({ error }) => (
  <ErrorModal error={error} />
);

export default ErrorMessage;