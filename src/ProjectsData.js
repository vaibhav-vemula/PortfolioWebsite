import rdc from "./img/rdc.png";
import blog from "./img/blog.png";
import forecast from "./img/forecast.png";
import ctopy from "./img/ctop.png";
import uno from "./img/uno.jpg";
import cow from "./img/im.jpg";
import app from "./img/appp.png";
import covi from "./img/covinews.png";
import tg from "./img/tg.png";

import aeolus from "./img/aeolus.png";
import hum from "./img/humanoid.png";
import marvin from "./img/marvineye.png";
import poly from "./img/poly.png";
import sm from "./img/smartcity.png";

const Carddata = [
  {
    imgsrc: rdc,
    title: "Rural Digital Companion",
    subtitle:
      "A MERN stack application for people living in rural areas and the governing agencies of villages.",
    link: "https://github.com/vaibhav-vemula/Rural-Digital-Companion",
  },
  {
    imgsrc: app,
    title: "LearnElla",
    subtitle:
      "Android app with offline English Dictionary, Quiz (with different question categories), and eBook Library.",
    link: "https://github.com/vaibhav-vemula/LearnElla",
  },
  {
    imgsrc: tg,
    title: "Taligate Detection",
    subtitle:
      "Given a CCTV footage of a secure door entry, detecting if anyone is tailgating or not using computer vision and deep learning.",
    link: "https://github.com/vaibhav-vemula/Taligate_Detection",
  },
  {
    imgsrc: forecast,
    title: "Weather Forecast",
    subtitle:
      "Weather Forecast Website with 5 day forecast and 3 hourly forecast for 5 days. Built using ReactJS.",
    link: "https://weatherforecastbyvaibhav.netlify.app",
  },
  {
    imgsrc: covi,
    title: "CoviNews",
    subtitle:
      "Flutter application with Covid-19 statistics and News related to health, Covid-19 and vaccine in india.",
    link: "https://github.com/vaibhav-vemula/CoviNews",
  },

  {
    imgsrc: ctopy,
    title: "C to Py Code Converter",
    subtitle:
      "Project (written in C) to convert C language code to its equivalent Python code",
    link: "https://www.linkedin.com/posts/vaibhavvemula_cprogramming-python-c-activity-6686565933793734656-7T67",
  },
  {
    imgsrc: blog,
    title: "Personal Blog Website",
    subtitle: "A Website for personal blog/thoughts. Built using ReactJS.",
    link: "https://vaibhavvemulablog.netlify.app",
  },

  {
    imgsrc: cow,
    title: "Classification of Waste",
    subtitle:
      "Classification of various biodegradable and non biodegradable waste using CNN.",
    link: "https://github.com/vaibhav-vemula/classification-of-waste/blob/master/classification_of_waste.ipynb",
  },
  {
    imgsrc: uno,
    title: "Arduino UNO projects",
    subtitle:
      "Simple Arduino UNO projects (Robotic ARM, Third EYE, Smart home)",
    link: "https://github.com/vaibhav-vemula/Arduino-UNO",
  },
];

const Carddata2 = [
  {
    imgsrc: sm,
    title: "Smart City Planning",
    subtitle: [
      "An application that produces a plan for the region of interest specified",
      'A system that will take an area (location/coordinate) as an input and generate the required data analysis report for it.',  "The solution will provide smart data analysis which will be in accordance with creating a smart and sustainable city."
    ],
    tags: ["GIS", "Remote Sensing", "AI/ML/DL", "OpenCV", "python"],
  },
  {
    imgsrc: hum,
    title: "Social Humanoid Robo Face with Emotions",
    subtitle: [
      "A 3D printed social humanoid robot face capable of generating various human like facial expressions and voice outputs based on the situations in which it’s situated.",
      "Researching on various Artificial intelligence, Deep learning algorithms and other cloud based APIs to efficiently learn, recognize, and react to different situations.",
    ],
    tags: ["AI/ML/DL", "WatsonAPI", "OpenCV"],
  },
  {
    imgsrc: marvin,
    title: "MarvinEye - Autonomous Navigation Framework",
    subtitle: [
      "This research project was carried out at Parallel Systems Research Lab(PSRL), PES University",
      "Designed and executed Autonomous Navigation System in Constrained Environment using DSMAC(Digital Scene Mapping and Area Correlation), Triangle Similarity and various Computer Vision and Machine Learning algorithms for guidance and navigation.",
    ],
    tags: ["AI/ML/DL", "OpenCV", "Python"],
  },
  {
    imgsrc: aeolus,
    title: "Autonomous UAV",
    subtitle: [
      "R&D of various ML algorithms & developing new insights for object detection on drones using combinations of stereo cameras and LIDAR for simultaneous localization and mapping.",

      "Implementing feature based matching algorithms to detect communication module using descriptors like SIFT, SURF and ORB.",
    ],
    tags: ["AI/ML/DL", "OpenCV", "Python"],
  },
  {
    imgsrc: poly,
    title: "Synthetic Polygon Generation",
    subtitle: [
      "Researched and developed optimised algorithms for Synthetic Polygon Generation with varieties of data distributions and spatial attributes.",
      "Generated polygon datasets - exhibiting spatial properties of Real-world Land Use/Land Cover(LULC) cases.",
    ],
    tags: ["GIS", "Python", "C++"],
  },
];

export default Carddata;
export { Carddata2 };
