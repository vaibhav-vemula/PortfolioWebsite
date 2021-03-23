import React from 'react'
import sm from './img/sm.gif'



class Contact extends React.Component{

  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      email:'',
      subject:'',
      message:'',
    };
    this.namin = this.namin.bind(this);
    this.emailin=this.emailin.bind(this);
    this.subin=this.subin.bind(this);
    this.messin=this.messin.bind(this);
    this.formSumbit=this.formSumbit.bind(this);
  }

  namin(e) {
    this.setState({
      name: e.target.value,
     });
     
  }
  emailin(e){
    this.setState({
      email:e.target.value,
    })
  }
  subin(e){
    this.setState({
      subject:e.target.value,
    })
  }
  messin(e){
    this.setState({
      message:e.target.value,
    })
  }

  
  formSumbit(ev){

    ev.preventDefault()
    // console.log(this.state)
    this.setState({
    name: '',
    email:'',
    subject:'',
    message:''
    })
    alert('Message Sent')
  }


  
  render(){
  return(
    <>

<section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row">

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up-right" data-aos-duration="1500">
            <form className="formm">
              <div className="row">
                <div className="form-group col-md-6">
                  <label className="namee">Your Name</label>
                  <input type="text" name="name" onChange={this.namin}
                  value={this.state.name} className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label className="namee">Your Email</label>
                  <input type="email" onChange={this.emailin}
                  value={this.state.email} className="form-control" name="email" id="email" required />
                </div>
              </div>
              <div className="form-group">
                <label className="namee">Subject</label>
                <input type="text" className="form-control" onChange={this.subin}
                  value={this.state.subject} name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label className="namee">Message</label>
                <textarea className="form-control" onChange={this.messin}
                  value={this.state.message} name="message" rows="10" required></textarea>
              </div>

              <div className="text-center">
              <button className="btnn btn-2 btn-2h" onClick={this.formSumbit} >Send Message</button>
              </div>
            </form>
          </div>



          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up-left" data-aos-duration="1500">
            <div className="info">
             
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>vaibhav25vemula23@gmail.com <br/>vemulavaibhav@pesu.pes.edu</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 7619229838</p>
              </div>
                <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Bangalore, India</p>
              </div>
              <br/>
              <div className="sss2 ">
                <a href="https://www.instagram.com/vaibhaaaavvv/" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="https://linkedin.com/in/vaibhavvemula/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/vaibhav-vemula" className="linkedin"><i className="bx bxl-github"></i></a>
                <a href="https://twitter.com/vaibhaaaavvv" className="twitter"><i className="bx bxl-twitter"></i></a>
            </div>

            </div>
            

          </div>

        </div>

      </div>
     
      <div className='tem' data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
        <img src={sm} alt="djjd"></img>
      </div>
    </section>

        
</>
);
  }
}

export default Contact