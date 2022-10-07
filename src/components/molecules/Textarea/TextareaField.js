import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { Textarea } from 'components/atoms/Textarea/Textarea';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 12px 0;
`;

const TextareaField = React.forwardRef(
  ({ value, label, name, id, type = 'text', onChange, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Textarea
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          checked={value}
          data-testid={label}
          {...props}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextareaField;
