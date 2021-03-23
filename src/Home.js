import React from 'react'
import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';
function Home(){
    return(<>
          <section id="hero" className="d-flex flex-column justify-content-center texx">
         
    <div className="hero-container" data-aos="fade-in" data-aos-delay="50" data-aos-duration="2000">
      <h1>Hi,</h1>
      <h1>I'm Vaibhav Vemula</h1>
      <h2 className="inl">
     I'm a&nbsp;
     <Typewriter
        options={{
                strings: ['Student', 'Web Developer!','Tech Enthusiast!!','Blogger!'],
                autoStart: true,
                loop: true,}}
        />
     
      </h2>
    </div>

    <Particles id="particles-js" canvasClassName="example"
    
            params={{

                "particles": {
    "number": {
      "value": 152,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
      
    },
    "opacity": {
      "value": 0.6707754953874318,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 479.5204795204795,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 223.7762237762238,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
    
            }}   
        />
            
      
      
  </section>

    </>);
}

export default Home