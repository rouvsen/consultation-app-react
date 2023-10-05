import { useEffect, useState } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Feedback({ formData, setForm, navigation, completingPercent, setCompletingPercent }) {

    useEffect(() => {
        AOS.init();
    }, []);

    const { feedback } = formData;

    const [inputValue, setInputValue] = useState(feedback);

    function checkInput() {
      const div = document.getElementsByClassName("show-btns")[0];
      if(inputValue !== "") {
        div.style.display = "block";
        return;
      } 
      div.style.display = "none";
    }

    function klickEvent(event) {
      if(event.keyCode === 13) navigation.next();
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
                    <h3 style={{fontSize: '29px'}}>Bizə şərh və ya iradınızı bildirə bilərsiniz</h3>
                    <input onKeyDown={klickEvent} onKeyUp={checkInput} placeholder='Ürək sözləriniz' className='data-input' onChange={handleMultipleChange} name="feedback" value={feedback} required />
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
                        <a onClick={() => navigation.next()} href={"#"}><img src='../../../../down-arrow.svg' /></a>
                    </div>
                </div>
            </div>
          </div>
        </>
    );
  }
  
  export default Feedback;
