import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const Button = styled.button`
  background-color: #21a4c5;
  padding: 8px;
  color: #fff;
  
  :hover {
    background-color: #860c94;
  }
  :active {
    background-color: #860c94;
  }
`;