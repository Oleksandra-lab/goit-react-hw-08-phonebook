import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';
import { StyledForm, StyledInput } from './Pages.styled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  reset();

  }
  

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Email:</span>
        <StyledInput {...register('email', { required: true })} type="email" />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <span>Name:</span>
        <StyledInput {...register('name', { required: true })} type="text" />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <span>Password:</span>
        <StyledInput {...register('password', { required: true, minLength: 7 })} type="password" />
        {errors.password && <span>This field is required</span>}
      </label>

      <button type='submit'>Sign up</button>
    </StyledForm>
  );
};

export default RegisterPage;
