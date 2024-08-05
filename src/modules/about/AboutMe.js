import React from "react";
import "./style/AboutMe.css";
import AboutInfo from "./AboutInfo";
import { useLottie } from "lottie-react";
import { AssetPath } from "../../shared/components/AssetPath";

const AboutMe = () => {
  const options = {
    animationData: AssetPath.Lottie.workingPerson,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <section className="section about" id="about">
      <h2 className="section--title">About Me</h2>
      <div className="section--subtitle">My Introduction</div>
      <div className="about--container container grid">
        <span class="about--image">{View}</span>
        <div className="about--info">
          <AboutInfo />
          <p className="about--description">
            I'm a passionate Software Engineer and a competent Web Developer. I
            enjoy turning complex problems into simple, beautiful and intuitive
            designs. My job is to build your website so that it is functional
            and user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way.
          </p>
          <a
            href={AssetPath.Documents.myResume}
            download=""
            className="button button--flex button--resume"
          >
            Resume
            <i className="fa-solid fa-file about-resume-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
