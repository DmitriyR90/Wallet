import { AuthForm } from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onFormSubmit = userData => {
    dispatch(loginUser(userData));
  };
  return (
    <>
      <h1>Login Page</h1>
      <AuthForm cbOnSubmit={onFormSubmit} buttonTitle={'LogIn'} />
    </>
  );
};
