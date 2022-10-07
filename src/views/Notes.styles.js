import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';
import TextareaField from 'components/molecules/Textarea/TextareaField';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 60px;
  padding: 30px;
`;

export const FormWrapper = styled.form`
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledFormField = styled(FormField)`
  width: 100%;
  min-width: 150px;
`;

export const StyledTextareaField = styled(TextareaField)`
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
  width: 100%;
  min-width: 150px;
`;

export const StyledTextArea = styled.input``;

export const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  align-self: center;
`;
