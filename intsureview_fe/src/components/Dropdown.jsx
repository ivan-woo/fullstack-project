import styled from "styled-components";

const StyledSelect = styled.select`
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

const Dropdown = ({ name, value, onChange, options, label, required }) => {
  return (
    <div>
      <StyledLabel>
        {label}
        <StyledSelect
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </StyledLabel>
    </div>
  );
};

export default Dropdown;
