import { useEffect, useState } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Names({ formData, setForm, navigation, completingPercent, setCompletingPercent }) {

    useEffect(() => {
        AOS.init();
    }, []);

    const { phone } = formData;

    const [inputValue, setInputValue] = useState(phone);

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
                  <h1>Contact</h1>
                  <div>
                    <label>
                      3<svg height="10" width="11"><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>Elaqe nomreniz</label>
                    <input onChange={handleMultipleChange} name="phone" value={phone} />
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
