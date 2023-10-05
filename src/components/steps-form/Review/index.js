import { useEffect } from 'react';
import '../../../style/form-steps.css'
import AOS from "aos";
import axios from "axios";

function Review({ formData, setForm, navigation }) {

    useEffect(() => {
      AOS.init();

      axios.post("http://localhost:8080/api/informations", formData)
      .then(response => {
        const data = response.data;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
      
    }, []);

    const name = formData.firstName;
    const smile = ':)';

    return (
      <>
        <div className='container'>
            <div className='entry-main-section'>
                <div className='img-div' style={{justifyContent: 'center'}}>
                    <img className='logo' src={"../../../../logo.png"} alt={"logo"} />
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='entry-content-section'>
                  <h1 style={{textAlign: 'center', color: 'blue', fontSize: '30px'}}>Müraciətiniz üçün təşəkkür edirik! <span style={{color: 'red'}}>{name}</span> {smile}</h1>
                  <p style={{fontSize: '23px', textAlign: 'center'}}>Ən qısa zamanda sizinlə əlaqə yaradacağıq.</p>
                </div>
            </div>
          </div>
      </>
    );
  }
  
  export default Review;