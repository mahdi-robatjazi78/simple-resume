import React, { Fragment ,  useState } from "react";
import ReactDOM from "react-dom";
import App from "./src/components/app";
import DefaultAvatar from "./images/photo.png";
import AvatarMahdi from "./images/mahdi.png";

//////////////////////////////////////////////////////////////////////
const fakeData = {
  Avatar: DefaultAvatar,
  fullName: "Alex Smith",
  specialities: ["Web Designer", "Frontend-developer"],
  socialLinks: {
    twitter: "#",
    youtube: "#",
    instagram: "#",
    facebook: "#",
  },
  aboutme: ` Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor
  volutpat ac. Duis nulla enim, condimentum nec ultricies.`,
  personinformation: {
    Age: 29,
    Residence: "USA",
    Address: "Los Angles - USA",
    "e-mail": "email@example.com",
    Phone: "+0123 123 456 789",
    Freelance: "Available",
  },
};
//////////////////////////////////////////////////////////////////
const mahdiData = {
  Avatar: AvatarMahdi,
  fullName: "Mahdi Robatjazi",
  specialities: ["Web Designer", "Software-Enginner", "Frontend-developer"],
  socialLinks: {
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  aboutme: `سلام بچه هامن مهدی رباط جزی ام _ این متن تستی رو برای این تمرین درنظر گرفتم 
            امیدوارم از کارم خوشتون بیاد`,
  personinformation: {
    Age: 22,
    Residence: "IR",
    Address: "Tehran - IRAN",
    "e-mail": "realmehdi1999m@gmail.com",
    Phone: "09046464180",
    Freelance: "Available",
  },
};
/////////////////////////////////////////////////////////////////////
const Container = () => {
  const [datamode, setDatamode] = React.useState("");

  let data = {};

  datamode === "fakeInfo" ?  data = fakeData : data = mahdiData;

  const [color, setColor] = React.useState({ color: "#ffc107" });

  console.log(data)

  return (
    <Fragment>
      <App 
        fullName = {data.fullName}
        avatar = {data.Avatar}
        specialities = {data.specialities}
        socialLinks = {data.socialLinks}
        aboutme = {data.aboutme}
        personinformation = {data.personinformation}
        setDatamode={setDatamode}
        setColor={setColor}
        color={color}
      />
    </Fragment>
  );
}

ReactDOM.render(<Container />, document.getElementById("root"));
