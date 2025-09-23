import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import SGT from "../../images/projectImages/SGT.png";
import eCommerceStore from "../../images/projectImages/E-commerce-store.png";
import TripConnect from "../../images/projectImages/TripConnect.png";
import FlowBuilder from "../../images/projectImages/Flow-Builder.png";
import ImageTextSummarizer from "../../images/projectImages/imagetextsummarizer.png";
import WeatherApps from "../../images/projectImages/WeatherApps.png";


const Project = () => {
  const projectData = [
      {
      sourceCodeLink: "https://github.com/sajjad1105/Weather-Apps",
      deployedLink: "https://sajjad1105.github.io/Weather-Apps/",
      name: "Weather Apps",
      description:
        " 🚀Developed a web-based weather application that allows users to check the current weather conditions for a given location. The app utilizes HTML, CSS, and JavaScript to create an interactive and user-friendly interface. It fetches real-time weather data from a public weather API to provide accurate and up-to-date information.",
      languages: "JavaScript  | HTML | CSS | APIs  ",
      image: WeatherApps,
      projectType: "Weather Forecast Application",
    },
    {
      sourceCodeLink: "https://github.com/sajjad1105/Image-Text-Summarizer",
      deployedLink: "https://image-text-summarizer.onrender.com/",
      name: "Image Text Summarizer",
      description:
        "🚀 Welcome to our Image to Text and Text to Summary Generation web application! This open-source project is built with Flask, a Python web framework, and leverages cutting-edge machine learning technologies to provide two essential functionalities in one place.",
      languages: "JavaScript | Flask | Python | Bootstrap | HTML | CSS | Tesseract OCR |  APIs ",
      image: ImageTextSummarizer,
      projectType: "Image Text Extraction & Summarization Tool",
    },
    {
      // sourceCodeLink: "https://github.com/sajjad1105/WhatsApp-AI-Chatbot",
      // deployedLink: "https://whatsapp-ai-chatbot.vercel.app/",
      name: "WhatsApp AI Chatbot Flow Builder",
      description:
        "The WhatsApp AI Chatbot Flow Builder lets businesses automate chat flows using a drag-and-drop UI. It supports editable questions, dynamic responses, and Twilio integration. Clean UI, easy setup, and smooth automation.",
      languages: "JavaScript | React.js | React Flow | Node.js | Express.js | MongoDB | Mongoose | Twilio API | OpenAI API | APIs | Ngrok | WhatsApp Business API | MERN Stack",
      image: FlowBuilder,
      projectType: "AI-Integrated Full Stack App",
    },
    {
      // sourceCodeLink: "https://github.com/sajjad105/Trip-connect",
      // deployedLink: "https://sajjad1105.github.io/Trip-connect/",
      name: "Trip-connect",
      description:
        "Trip-Connect is a platform that connects solo travelers to share expenses and enhance social interactions. Built with React.js, Node.js, Express.js, and MongoDB, it offers a responsive UI and real-time travel planning features for a seamless experience.",
      languages: "React JS | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt | MERN Stack",
      image: TripConnect,
      projectType: "Real-Time Full Stack Travel App",
    },
    {

      // sourceCodeLink: "https://github.com/sajjad1105/segment-tree-visualization",
      deployedLink: "https://segment-tree-visualization.vercel.app/",
      name: "Segment Tree Visualizer",
      description:
        "The Segment Tree Visualizer is a web-based application built using Next.js that provides an interactive way to understand and visualize different types of segment trees. This project showcases efficient data structure operations and dynamic visualizations.",
      languages: "Next.js | D3.js | JavaScript | HTML | CSS | Segment Tree Algorithm",
      image: SGT,
      projectType: "Advanced DSA Visualizer",
    },
    
    {
      // sourceCodeLink: "https://github.com/sajjad1105/E-Commerce-Store",
      // deployedLink: "https://github.com/Sajjad1105/E-Commerce-Store",
      name: "E-Commerce-Store",
      description:
        "E-Commerce Website is a modern shopping platform built with React, Node.js, Express.js, and MongoDB. It features user authentication, product browsing, shopping cart, secure payments (PayPal/Stripe), and an admin dashboard for managing inventory and orders. With a responsive design and seamless experience, it ensures smooth transactions.",
      languages: "React JS | Redux | Redux Toolkit | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT | Bcrypt | Tailwind CSS | MERN Stack",
      image: eCommerceStore,
      projectType: "MERN-Based E-Commerce Platform",
    },
  ];

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={`${project.name}-${index}`}
              index={index}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
