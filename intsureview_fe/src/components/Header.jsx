import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #007bff;
  padding: 20px;
  text-align: center;
`;

const StyledH1 = styled.h1`
  color: #fff;
  font-size: 28px;
  margin: 0;
`;

const HEADER_NAME = "WOOhooYIPpy's Travel Survey";

const Header = () => {
  return (
    <StyledHeader className="travel-header">
      <StyledH1>{HEADER_NAME}</StyledH1>
    </StyledHeader>
  );
};

export default Header;
