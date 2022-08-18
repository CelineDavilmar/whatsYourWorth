import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
// Components
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  const navigate = useNavigate();
  const navigateWelcome = () => {
    navigate('/Welcome');
  };
  const navigateContact = () => {
    navigate('/Contact');
  };
  return (
    <div className="whiteBg" style={{ padding: "60px 0" }}>
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">How We Get Your Money into Shape?</h1>
        </HeaderInfo>
        <ServiceBoxRow className="flex">
          <ServiceBoxWrapper>
            <ServiceBox
              icon="monitor"
              title="Asset Tracking"
              subtitle="Connect your bank account and all your transactions will get automatically imported or add your cash expenses manually"
            />
          </ServiceBoxWrapper>
          <ServiceBoxWrapper>
            <ServiceBox
              icon="brush"
              title="Know your Habits"
              subtitle="People start from different places and have varying levels of understanding when it comes to personal finance."
            />
          </ServiceBoxWrapper>
          <ServiceBoxWrapper>
            <ServiceBox
              icon="printer"
              title="Budget"
              subtitle="Develop a Budget based on your current financial picture."
            />
          </ServiceBoxWrapper>
          <ServiceBoxWrapper>
            <ServiceBox icon="monitor" title="Cash Flow" subtitle="Manage your money and improve your saving so you can stop living paycheck to paycheck." />
          </ServiceBoxWrapper>
        </ServiceBoxRow>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <h4 className="font15 semiBold">Dump your spreadsheet.</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Connect your accounts, track your money  and develop a full financial picture in one place instantly.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={navigateWelcome} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={navigateContact} border />
                </div>
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={AddImage1} alt="office" />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={AddImage2} alt="office" />
                  </AddImgWrapp2>
                </div>
                <div className="flexNullCenter">
                  <AddImgWrapp3>
                    <img src={AddImage3} alt="office" />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={AddImage4} alt="office" />
                  </AddImgWrapp4>
                </div>
              </AddRightInner>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </div>

  );
}

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;