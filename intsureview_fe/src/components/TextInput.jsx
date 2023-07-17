import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const TextInput = ({ name, value, onChange, label, required, placeholder }) => {
  return (
    <div>
      <StyledLabel>
        {label}
        <StyledInput
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      </StyledLabel>
    </div>
  );
};

export default TextInput;
