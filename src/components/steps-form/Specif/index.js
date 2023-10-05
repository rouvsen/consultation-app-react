import { useEffect, useState } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Specif({ formData, setForm, navigation, completingPercent, setCompletingPercent }) {

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
      console.log(formData);
    }, [formData]);

    const { field, fieldSpec } = formData;

    useEffect(() => {
        const programming = document.getElementById('programming');
        const design = document.getElementById('design');
        const marketing = document.getElementById('marketing');
        const nonSelected = document.getElementById('nonSelected');
        if(field === 'IT-Programlasdirma') {
            programming.style.display = 'flex';
        } else if(field === 'Dizayn') {
            design.style.display = 'flex';
        } else if(field === 'Marketinq') {
            marketing.style.display = 'flex';
        } else{
            nonSelected.style.display = 'block';
        }
      }, []);

    const [inputValue, setInputValue] = useState(fieldSpec);
    
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
                  <div id='nonSelected' style={{display: 'none'}}>
                    <h3 style={{color: 'red', fontSize: '30px'}}>İxtisas olaraq seçim etmədiniz ..</h3>
                  </div>
                <div className='radios-div' id='programming' style={{display: 'none'}}>
                  <div>
                    <input onChange={handleSelected} type="radio" id="a" name="fieldSpec" value="Front-end Development" />
                    <label for="a">Front-end Development</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="b" name="fieldSpec" value="Full-stack Development" />
                    <label for="b">Full-stack Development</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="c" name="fieldSpec" value="Mobile Development" />
                    <label for="c">Mobile Development</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="d" name="fieldSpec" value="Java Back-end Development" />
                    <label for="d">Java Back-end Development</label>
                  </div>
                </div>
                <div className='radios-div' id='design' style={{display: 'none'}}>
                  <div>
                    <input onChange={handleSelected} type="radio" id="e" name="fieldSpec" value="UX/UI Dizayn" />
                    <label for="e">UX/UI Dizayn</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="f" name="fieldSpec" value="Qrafik Dizayn" />
                    <label for="f">Qrafik Dizayn</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="m" name="fieldSpec" value="Mehsul Dizayn" />
                    <label for="m">Məhsul Dizayn</label>
                  </div>
                </div>
                <div className='radios-div' id='marketing' style={{display: 'none'}}>
                  <div>
                    <input onChange={handleSelected} type="radio" id="p" name="fieldSpec" value="Enenevi Marketinq" />
                    <label for="p">Ənənəvi Marketinq</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="o" name="fieldSpec" value="Reqemsal Marketing" />
                    <label for="o">Rəqəmsal Marketinq</label>
                  </div>
                  <div>
                    <input onChange={handleSelected} type="radio" id="r" name="fieldSpec" value="SMM Telimi" />
                    <label for="r">SMM Təlimi</label>
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
  
  export default Specif;
