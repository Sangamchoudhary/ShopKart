import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/sangamchoudhary-a909661b0/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dsbt2mflu/image/upload/v1641894859/About%20me/Profile_pic_frwukw.jpg"
              alt="Sangam"
            />
            <Typography>Sangam Choudhary</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Linkedin
            </Button>
            <span>
              This is an Ecommerce wesbite made by <b>@SangamChoudhary</b>
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/sangamchoudhary-a909661b0/"
              target="blank"
            >
              <LinkedinIcon className="LinkedinSvgIcon" />
            </a>

            <a
              href="https://www.instagram.com/sangamchoudharyy/"
              target="blank"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
