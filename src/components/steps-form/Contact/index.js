import { useEffect, useState } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Contact({ formData, setForm, navigation, completingPercent, setCompletingPercent }) {

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
      console.log(formData);
    }, [formData]);

    const { field } = formData;

    const [inputValue, setInputValue] = useState(field);
    
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

    return (
      <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div'>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                  <div>
                    <h3>
                      Hansı sahə ilə maraqlanırsınız?
                    </h3>
                  </div>
                <div className='radios-div'>
                  <div>
                    <input onChange={handleSelected} type="radio" id="a" name="field" value="IT-Programlasdirma" />
                    <label for="a">İT-Proqramlaşdırma</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="b" name="field" value="Dizayn" />
                    <label for="b">Dizayn</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="c" name="field" value="Marketinq" />
                    <label for="c">Marketinq</label>
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
  
  export default Contact;
