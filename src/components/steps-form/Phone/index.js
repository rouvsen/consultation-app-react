import { useEffect, useState } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Phone({ formData, setForm, navigation, completingPercent, setCompletingPercent }) {

    useEffect(() => {
        AOS.init();
        checkInput();
    }, []);

    const { phone } = formData;

    const [inputValue, setInputValue] = useState(phone);

    function checkInput() {
      const div = document.getElementsByClassName("show-btns")[0];
      const button = document.getElementById('btn-next');
      if(inputValue !== "") {
        div.style.display = "block";
        button.style.pointerEvents = ''; // Enable button
        return;
      } 
      div.style.display = "none";
      button.style.pointerEvents = 'none'; // Disable button
    }

    function klickEvent(event) {
      const button = document.getElementById('btn-next');
      if(event.keyCode === 13) {
        event.preventDefault(); // Prevent default behavior
        if(!button.style.pointerEvents === 'none') navigation.next(); // Go to next page only if button is enabled
      } if(event.keyCode === 13 && inputValue !== "") {
        navigation.next();
      }
    }

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
                      <span className='label-head-num'>3</span><svg fill='blue' height="10" width="11"><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>Əlaqə nömrəniz <span className='required-secs'>*</span>
                    </label>
                    <br></br>
                    <input onKeyDown={klickEvent} onKeyUp={checkInput} placeholder='Əlaqə nömrənizi qeyd edin' className='data-input' onChange={handleMultipleChange} name="phone" value={phone} required />
                  </div>
                  <div className='entry-btns-div show-btns'>
                        <button onClick={() => navigation.next()}><span>İrəli</span></button>
                        <a onClick={() => navigation.next()} href={"#"}>Enter <b>klikləyin ↵</b></a>
                  </div>
                </div>
                <div className='progress-bar'>
                    <div className='progress-percent'>
                            <div>
                                <p>{completingPercent}% completed</p>
                                <div className='mui-progress-item'>
                                    <MuiProgress value={completingPercent} />
                                </div>
                            </div>
                    </div>
                    <div className='progress-btns'>
                        <a onClick={() => navigation.previous()} href={"#"}><img src='../../../../up-arrow.svg' /></a>
                        <a id='btn-next' onClick={() => navigation.next()} href={"#"}><img src='../../../../down-arrow.svg' /></a>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
  }
  
  export default Phone;
