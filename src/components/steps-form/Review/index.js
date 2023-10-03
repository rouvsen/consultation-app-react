import { useEffect } from 'react';
import '../../../style/form-steps.css'
import AOS from "aos";

function Review({ formData, setForm, navigation }) {

    useEffect(() => {
      AOS.init();
    }, []);

    const { firstName, address, phone } = formData;

    fetch('http://localhost:8080/api/informations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        address,
        phone
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))

    const name = formData.firstName === null ? 'Muracietci' : formData.firstName;

    return (
      <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div'>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                  <h1 style={{textAlign: 'center', color: 'blue', fontSize: '30px'}}>Hormetli {name} bey/xanim. Siz Digital Hands online konsultasiya xidmetinden istifade ederek muracietinizi tamamladiniz</h1>
                  <h4>Email-inizi yoxlayin..</h4>
                </div>
            </div>
          </div>
      </>
    );
  }
  
  export default Review;