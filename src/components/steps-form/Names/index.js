import { useEffect, useState } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Names({ formData, setForm, navigation, completingPercent, setCompletingPercent }) {

    useEffect(() => {
        AOS.init();
    }, []);

    const { firstName, lastName, nickname } = formData;

    const [inputValue, setInputValue] = useState(firstName);

    function handleChange(event) {
      const newValue = event.target.value;

      if (newValue === "" && inputValue !== "") {
        setCompletingPercent(completingPercent - 10);
      } else if (newValue !== "" && inputValue === "") {
        setCompletingPercent(completingPercent + 10);
      }
      setInputValue(newValue);
    }

    const handleMultipleChange = (event) => {
      handleChange(event);
      setForm(event);
    };

    return (
      <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div'>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                  <div>
                    <label className='inp-label'>
                      <span className='label-head-num'>1</span><svg fill='blue' height="10" width="11"><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>Adınız və soyadınız <span className='required-secs'>*</span>
                    </label>
                    <br></br>
                    <input placeholder='Adinizi qeyd edin' className='data-input' onChange={handleMultipleChange} name="firstName" value={firstName} required />
                  </div>
                </div>
                <div className='progress-bar'>
                    <div className='progress-percent'>
                            <div>
                                <p>{completingPercent} completed</p>
                                <div className='mui-progress-item'>
                                    <MuiProgress value={completingPercent} />
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
