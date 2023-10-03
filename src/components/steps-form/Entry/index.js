import { useEffect } from 'react';
import '../../../style/form-steps.css'
import MuiProgress from '../../MuiProgress';
import AOS from "aos";

function Entry({ formData, setForm, navigation, completingPercent }) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div'>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                    <h4>Digital Hands</h4>
                    <div>
                        <span id='span-for-p'>
                            <p>
                            Programming inkişafının sürətləndirilməsi üçün ödənişsiz konsultasiyaya müraciət etmisiniz
                            </p>
                        </span>
                    </div>
                    <div className='entry-btns-div'>
                        <button onClick={() => navigation.next()}><span>Başlayaq</span></button>
                        <a onClick={() => navigation.next()} href={"#"}>Enter <b>klikləyin ↵</b></a>
                    </div>
                </div>
                <div className='progress-bar'>
                    <div className='progress-percent'>
                            <div>
                                <p>0% completed</p>
                                <div className='mui-progress-item'>
                                    <MuiProgress value={completingPercent} />
                                </div>
                            </div>
                    </div>
                    <div className='progress-btns'>
                        <a style={{pointerEvents: 'none', opacity: '.6'}} href={"#"}><img src='../../../../up-arrow.svg' /></a>
                        <a onClick={() => navigation.next()} href={"#"}><img src='../../../../down-arrow.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Entry;
