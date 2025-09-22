import React from "react";
import { motion } from "framer-motion"; // For animations
import "./AchievementCSS.css";

const achievementsData = [
  {
    title: "TCS CERTIFICATE 🎉",
  // img: "/images/projectImages/TCS.png", // Put image in public/images
  description: "for successfully completing TCS iON Career Edge - Young Professional course that covers Communication Skills | Presentation Skill | Soft Skills | Career Guidance Framework | Resume Writing | Group Discussion Skills | Interview Skills | Business Etiquette | Effective Email Writing | Telephone Etiquette | Accounting Fundamentals | IT Foundational Skills | Overview of Artificial Intelligence. 👇🏻 Here’s the certification link for verification",
  link: "https://drive.google.com/file/d/1RHRe1vn1ZINfLlsF3PM3LbUJUTaI7Ck2/view?usp=drive_link"
},
  {
    title: "GeeksForGeeks CERTIFICATE 🎉",
    // img: "/images/leetcode.png",
    description: "has successfully completed a 16-week course on GeeksForGeeks CUTM Training Program - Paralakhemundi Campus. 👇🏻 Here’s the certification link for verification",
    link: "https://drive.google.com/file/d/1ZZR_tNZ726Tf6z1qaYIoL66rpFvYorTn/view?usp=drivesdk",
  },
  {
    title: "Java Course for Placements CETRIFICATE 🎉",
    // img: "/images/codechef.png",
    description:
      "Has successfully completed the course titled Java Course for Placements from CodeTantra.com. 👇🏻 Here’s the certification link for verification",
    link: "https://drive.google.com/file/d/1bgulogN16ufOPkcS57GS2ZIX3Yo5DHez/view?usp=drivesdk",
  },
  {
    title: "Infotact Solutions Internship CERTIFICATE 🎉",
    // img: "/images/leetcode.png",
    description:
      "Successfully completed 2 Months internship at Infotact Solutions, where I developed a web application using HTML, CSS, JavaScript, and React.js. 👇🏻 Here’s the certification link for verification",
    link: "https://drive.google.com/file/d/1n_ceuMYpWSde_w06DA_0n7m-3Wx9REyU/view?usp=drivesdk",
  },
  {
    title: "Infotact Solutions Internship  Training CERTIFICATE 🎉",
    // img: "/images/codechef.png",
    description:
      "Successfully completed 2 Months of training at Infotact Solutions on Web Development, covering HTML, CSS, JavaScript, and React.js. 👇🏻 Here’s the certification link for verification",
    link: "https://drive.google.com/file/d/1BRNZ9saAL5SBLFcKwYYqpIDl2XJo6qe4/view?usp=drivesdk",
  },
  {
    title: "DSA using C for Placements 🎉.",
    // img: "/images/dsa.png",
    description:
      "  has successfully completed the course titled Data Structures and Algorithms using C for Placements from CodeTantra.com.👇🏻 Here’s the certification link for verification",
    link: "https://drive.google.com/file/d/1MpUpAJoK_T6Q5DAE34zNDUDYINO_uGtA/view?usp=drivesdk",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Achievements = () => {
  return (
    <div id="Achievement" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-medal section-icon"></i> Achievements
      </motion.h2>

      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <img
              src={achievement.img}
              alt={achievement.title}
              className="achievement-img"
            />
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-text">{achievement.description}</p>
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                [Link]
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;