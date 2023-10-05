import { useEffect, useState } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function ContactDate({ formData, setForm, navigation, completingPercent, setCompletingPercent }) {

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
      console.log(formData);
    }, [formData]);

    const { dateContact } = formData;

    const [inputValue, setInputValue] = useState(dateContact);
    
    function handleSelected(event) {
      setForm(event);
      const div = document.getElementsByClassName("show-btns")[0];
      div.style.display = "block";
      const newValue = event.target.value;

      if (newValue === "" && inputValue !== "") {
        setCompletingPercent(completingPercent - 10);
      } else if (newValue !== "" && inputValue === "") {
        setCompletingPercent(completingPercent + 10);
      }
      setInputValue(newValue);

    }

    const weekDaysBefore = "həftə içi (18:00-dək)";
    const weekDaysAfter = "həftə içi (18:00-dan sonra)";
    const weekendDaysBefore = "həftə sonu (15:00-dək)";
    const weekendDaysAfter = "həftə sonu (15:00-dan sonra)";

    return (
      <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div'>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                  <div>
                    <h3 style={{fontSize: '30px'}}>Günün hansı saatlarında əlaqə saxlayaq?</h3>
                  </div>
                <div className='radios-div'>
                  <div>
                    <input onChange={handleSelected} type="radio" id="a" name="dateContact" value={weekDaysBefore} />
                    <label for="a">{weekDaysBefore}</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="b" name="dateContact" value={weekDaysAfter} />
                    <label for="b">{weekDaysAfter}</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="c" name="dateContact" value={weekendDaysBefore} />
                    <label for="c">{weekendDaysBefore}</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="d" name="dateContact" value={weekendDaysAfter} />
                    <label for="d">{weekendDaysAfter}</label>
                  </div>
                </div>
                  <div className='entry-btns-div show-btns' style={{margin: '0 auto'}}>
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
  
  export default ContactDate;
