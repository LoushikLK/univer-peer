import { Container, Button } from "@mui/material";

import { HomeBanner } from "asset";

const HomeMain = () => {
  return (
    <div className="home-banner">
      <Container>
        <div className="home-container ">
          <div className="home-main-templete flex-row w-100 align-items-center">
            <div className="home-left-templete  ">
              <h1 className="left-templete-head">
                Hear it from students like you!
              </h1>
              <p className="left-templete-desc">
                Get the most honest advice about you dream university, Program
                or destination from current university students who will be
                happy to share their experience and insights with you.
              </p>
              <Button className="home-left-templete-btn">CONNECT NOW</Button>
            </div>
            <div className="home-right-templete d-flex align-items-center ">
              <img
                src={HomeBanner}
                alt="Univer Peers"
                className="w-100 new_animated_img"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeMain;
