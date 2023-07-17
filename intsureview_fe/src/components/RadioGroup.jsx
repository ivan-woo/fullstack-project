import styled from "styled-components";

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledOptionsContainer = styled.div`
  margin-top: 5px;
`;

const RadioGroup = ({ name, onChange, options, label, required }) => {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledOptionsContainer>
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={onChange}
              required={required}
              id={option.value}
            />
            <label key={option.value} htmlFor={option.value}>
              {option.label}
            </label>
          </div>
        ))}
      </StyledOptionsContainer>
    </div>
  );
};

export default RadioGroup;
