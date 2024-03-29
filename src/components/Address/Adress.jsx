import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactItem, ContactInfo } from "../../services/contactLogo";
import twitterImg from "../../assets/images/icons/twitter-icon.png";
import linkedinImg from "../../assets/images/icons/linkedin.svg";
import gitHub from "../../assets/images/icons/github.svg";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function Address() {
  return (
    <section id="contact" data-testid="address-component">
      <h2>Contacts</h2>
      <ul className="contact-list">
        <ContactInfo icon={faPhone} data="+995 591 95 06 63" type="phone" />
        <ContactInfo
          icon={faEnvelope}
          data="dbeqaabuladze@gmail.com"
          type="email"
        />
        <ContactItem
          platform="Twitter"
          link="https://twitter.com/beqaabuladze"
          imageSrc={twitterImg}
          altText="Twitter Logo"
        />

        <ContactItem
          platform="Linkedin"
          link="https://www.linkedin.com/in/beka-abuladze-50a344217/"
          imageSrc={linkedinImg}
          altText="linkedin Logo"
        />
        <ContactItem
          platform="Github"
          link="https://github.com/beka-ab"
          imageSrc={gitHub}
          altText="github Logo"
        />
      </ul>
      <div className="top-scroll">
        <Button
          icon={<FontAwesomeIcon icon={faChevronUp} onClick={scrollToTop} />}
        />
      </div>
    </section>
  );
}
