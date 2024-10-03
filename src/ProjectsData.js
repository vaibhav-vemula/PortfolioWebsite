import rdc from "./img/rdc.png";
// import blog from "./img/blog.png";
import forecast from "./img/forecast.png";
import ctopy from "./img/ctop.png";
// import uno from "./img/uno.jpg";
// import cow from "./img/im.jpg";
import app from "./img/appp.png";
import covi from "./img/covinews.png";
import tg from "./img/tg.png";
import ibm from "./img/ibm.png"
import ieee from "./img/ieee.png"
import bakery from "./img/bakery.png"

import aeolus from "./img/aeolus.png";
import hum from "./img/humanoid.png";
import marvin from "./img/marvineye.png";
import poly from "./img/poly.png";
import sm from "./img/smartcity.png";
import zm from "./img/zem.png";

const Carddata = [

  {
    imgsrc: ieee,
    title: "IEEE CS PESU",
    subtitle:
      "Website for IEEE Computer Society Student Branch Chapter, PES University",
    link: "https://ieeecspesu.tech",
  },
  {
    imgsrc: ibm,
    title: "Falcon 9 Stage 1 landing prediction",
    subtitle:
      "The goal of model is to predict when Falcon 9 Stage 1 will successfully land. Created a dashboard for visualisation.",
    link: "https://github.com/vaibhav-vemula/IBM_Applied_DataScience_Capstone/blob/master/IBM_Applied_DataScience_Capstone.pdf",
  },
  {
    imgsrc: bakery,
    title: "Bakery Shop Management System",
    subtitle:
      "Designed and implemented a SQL Database application to efficiently process the bakery’s offline and online orders.",
    link: "https://github.com/vaibhav-vemula/Bakery-Management",
  },
  
  {
    imgsrc: app,
    title: "LearnElla",
    subtitle:
      "Android app with offline English Dictionary, Quiz (with different question categories), and eBook Library.",
    link: "https://github.com/vaibhav-vemula/LearnElla",
  },
  {
    imgsrc: covi,
    title: "CoviNews",
    subtitle:
      "Flutter application with Covid-19 statistics and News related to health, Covid-19 and vaccine in india.",
    link: "https://github.com/vaibhav-vemula/CoviNews",
  },
  {
    imgsrc: tg,
    title: "Taligate Detection",
    subtitle:
      "Given a CCTV footage of a secure door entry, detecting if anyone is tailgating or not using computer vision and deep learning.",
    link: "https://github.com/vaibhav-vemula/Taligate_Detection",
  },
  {
    imgsrc: rdc,
    title: "Rural Digital Companion",
    subtitle:
      "A MERN stack application for people living in rural areas and the governing agencies of villages.",
    link: "https://github.com/vaibhav-vemula/Rural-Digital-Companion",
  },
  {
    imgsrc: forecast,
    title: "Weather Forecast",
    subtitle:
      "Weather Forecast Website with 5 day forecast and 3 hourly forecast for 5 days. Built using ReactJS.",
    link: "https://weatherforecastbyvaibhav.netlify.app",
  },
  
  {
    imgsrc: ctopy,
    title: "C to Py Code Converter",
    subtitle:
      "Project (written in C) to convert C language code to its equivalent Python code",
    link: "https://www.linkedin.com/posts/vaibhavvemula_cprogramming-python-c-activity-6686565933793734656-7T67",
  },
];

const Carddata2 = [
  {
    imgsrc: sm,
    title: "Localised Land-Use Classification using UNet and Satellite Imaging",
    subtitle: [
      "Published at 2nd International Conference on Intelligent Systems and Applications (ICISA 2023) (Springer).",
      "Developed an advanced application leveraging GIS and machine learning for urban growth analysis, utilizing Sentinel-2 and Landsat data for Land Use/Land Cover assessments, UNET for segmentation, and QGIS for visualization to support smart and sustainable city planning initiatives.",  "The solution will provide smart data analysis which will be in accordance with creating a smart and sustainable city."
    ],
    tags: ["GIS", "Remote Sensing", "AI/ML/DL", "OpenCV", "Python"] ,
  },
  {
    imgsrc: zm,
    title: "Zemoo, an e-commerce platform built on the Blockchain ",
    subtitle: [
      "This project was carried out under IEEE Computer Society Bangalore Chapter",
      'Developed a decentralised E-commerce platform based on the Polygon blockchain network.',  "Created a NFT based warranty system which auto decays after the warranty period of the product purchased. NFT warranty is used to verify the authencity of the product."
    ],
    tags: ["Polygon", "HardHat", "Solidity", "NextJS", "IPFS"],
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
