import { useEffect } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Names({ formData, setForm, navigation }) {

    useEffect(() => {
        AOS.init();
    }, []);

    const { firstName, lastName, nickname } = formData;

    return (
      <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div'>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                  <h1>Names</h1>
                  <div>
                    <label>FirstName :</label>
                    <input onChange={setForm} name="firstName" value={firstName} />
                  </div>
                  <div>
                    <label>LastName :</label>
                    <input onChange={setForm} name="lastName" value={lastName} />
                  </div>
                  <div>
                    <label>Nickname :</label>
                    <input onChange={setForm} name="nickname" value={nickname} />
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
  
  export default Names;