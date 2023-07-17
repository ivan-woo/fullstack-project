import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledWrapper = styled.div`
  flex: 1;
  margin: 0 10px;
`;

const StyledH3 = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledListItem = styled.li`
  margin-bottom: 5px;
`;

const StyledAnchor = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const StyledParagraph = styled.p`
  margin: 5px 0;
`;

const EMAIL = "woohooyippy.travels@gmail.com";
const PHONE = "(123) 456-7890";
const FACEBOOK = "https://www.facebook.com";
const INSTAGRAM = "https://www.instagram.com";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledH3>Contact Information</StyledH3>
        <StyledParagraph>Email: {EMAIL}</StyledParagraph>
        <StyledParagraph>Phone: {PHONE}</StyledParagraph>
      </StyledWrapper>
      <StyledWrapper>
        <StyledH3>Follow Us</StyledH3>
        <StyledList>
          <StyledListItem>
            <StyledAnchor
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </StyledAnchor>
          </StyledListItem>
          <StyledListItem>
            <StyledAnchor
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </StyledAnchor>
          </StyledListItem>
        </StyledList>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
