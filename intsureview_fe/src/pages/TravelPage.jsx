import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";
import RadioGroup from "../components/RadioGroup";

import styled from "styled-components";

const StyledForm = styled.form`
  padding: 20px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TravelPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TravelPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    haveTravelPartners: "",
    accommodation: "",
    nextDestination: "",
  });

  // 1 helper function to handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // return if there is a form value that is empty
    let isFormCompleted = Object.values(formData).every((value) => {
      return value !== "";
    });
    if (!isFormCompleted) {
      return alert("Please fill out all fields before submitting!");
    }

    let payload = {
      ...formData,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch("/api/survey/create/", requestOptions);
      const data = await response.json();
      if (data.status === "error") {
        throw new Error(data.message);
      }
      alert(`${data.message}`);
      setFormData({
        name: "",
        email: "",
        haveTravelPartners: "",
        accommodation: "",
        nextDestination: "",
      });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <TravelPageContainer>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <h3>
          Thank you for booking your vacation with our agency. We hope you
          enjoyed your visit to Singapore, Vietnam, Japan, and Korea! Please
          help us improve our services by filling out a short survey. Thank you!
        </h3>
        <TextInput
          label="Full Name:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
        <TextInput
          label="Email:"
          type="email"
          placeholder="johndoe123@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <RadioGroup
          label="Did you book a hotel, stay at an airbnb, or both?"
          name="accommodation"
          options={[
            { label: "Hotel", value: "hotel" },
            { label: "Airbnb", value: "airbnb" },
            { label: "Both", value: "both" },
          ]}
          onChange={handleChange}
          required
        />
        <Dropdown
          label="Did you travel with friends and/or family?"
          name="haveTravelPartners"
          value={formData.haveTravelPartners}
          onChange={handleChange}
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
          required
        />
        <TextInput
          label="Where do you want to go next?"
          type="text"
          placeholder="Hawaii, Europe, Asia, etc."
          name="nextDestination"
          value={formData.nextDestination}
          onChange={handleChange}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      <Footer />
    </TravelPageContainer>
  );
};

export default TravelPage;
