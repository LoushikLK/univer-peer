import React from "react";
import { Container } from "@mui/material";

import {
  ChatIcon,
  PreviewIcon,
  VideoIcon,
  ViewIcon,
  chatCard1,
  chatCard3,
  chatCard4,
  chatCard2,
  slideImg1,
  slideImg2,
} from "asset";
import { BasicCard, Card } from "components/card";

import { Slider } from "components/slider";
import { HomeMain } from ".";

const Home = () => {
  const basicCardData = [
    {
      icon: PreviewIcon,
      subject: "View Ambassadors Profile",
    },
    {
      icon: ChatIcon,
      subject: "Chat with Ambassadors",
    },
    {
      icon: VideoIcon,
      subject: "View Videos",
    },
    {
      icon: ViewIcon,
      subject: "View Documents",
    },
  ];

  const chatCardData = [
    {
      image: chatCard1,
      title: "Ahmad",
    },
    {
      image: chatCard2,
      title: "Salman",
    },
    {
      image: chatCard3,
      title: "Aisha",
    },
    {
      image: chatCard4,
      title: "Manar Muhana",
    },
  ];

  const slideImageData = [slideImg1, slideImg2];

  return (
    <>
      <main className="home-main">
        <HomeMain />
        <div className="home-profile-card">
          <Container>
            <div className=" flex-column align-items-center w-100 ">
              <h1 className="home-profile-card-heading">
                What you will see in an ambassador profile ?
              </h1>
              <div className="home-profile-card-children flex-row w-100 gap-1 ">
                {basicCardData.map((data, index) => {
                  return (
                    <BasicCard
                      icon={data.icon}
                      subject={data.subject}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
            <div className="home-profile-slider w-100">
              <Slider imageArray={slideImageData} />
            </div>
          </Container>
        </div>

        <div
          className="home-chat-now-banner"
          style={{ paddingBottom: "10rem" }}
        >
          <Container>
            <div className="home-chatting-heading w-100 flex-row justify-content-center  ">
              <h1 className="home-chatting-heading-h1">
                Start Chatting Now !{" "}
              </h1>
            </div>
            <div className="home-card-container flex-row  gap-1">
              {chatCardData.map((data, index) => {
                return (
                  <Card image={data.image} heading={data.title} key={index} />
                );
              })}
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Home;
