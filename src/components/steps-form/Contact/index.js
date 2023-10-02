import { useEffect } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Contact({ formData, setForm, navigation }) {

    useEffect(() => {
      AOS.init();
    }, []);

    const { phone, email } = formData;
   
    return (
      <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div'>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                <h1>Contact</h1>
                <div>
                  <label>Phone :</label>
                  <input onChange={setForm} name="phone" value={phone} />
                </div>
                <div>
                  <label>Email :</label>
                  <input onChange={setForm} name="email" value={email} />
                </div>
                </div>
                <div className='progress-bar'>
                    <div className='progress-percent'>
                            <div>
                                <p>50% completed</p>
                                <div className='mui-progress-item'>
                                    <MuiProgress />
                                </div>
                            </div>
                    </div>
                    <div className='progress-btns'>
                        <a onClick={() => navigation.previous()} href={"#"}><img src='../../../../up-arrow.svg' /></a>
                        <a onClick={() => navigation.next()} href={"#"}><img src='../../../../down-arrow.svg' /></a>
                    </div>
                </div>
            </div>
          </div>
      </>
    );
  }
  
  export default Contact;