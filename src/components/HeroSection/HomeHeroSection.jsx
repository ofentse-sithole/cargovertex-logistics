
import styled from "styled-components";
import {useEffect} from 'react';
import backgroundImage from "../../assets/truck.jpg"; // Add your image to the 'assets' folder



const HeroSection = () => {

  useEffect(() => {
    // More robust scroll handling
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        
        // Fallback for older browsers
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 100);
  }, []);

    return (
        <HeroContainer>
            <Content>
                <Title>
            <Highlight>CargoVertex Logistics</Highlight> <Moving>Moving You Forward</Moving>
                </Title>
            </Content>
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Content = styled.div`
  text-align: left;
  color: black;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: #007bff;
`;

const Moving = styled.span`
  color: white;
`;

const SearchBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 5px;

  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
  }

  button {
    padding: 10px 15px;
    font-size: 1rem;
    background: black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default HeroSection;
