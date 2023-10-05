import { useForm, useStep } from 'react-hooks-helper';

import Names from '../steps-form/Names';
import Entry from '../steps-form/Entry';
import Review from '../steps-form/Review';
import Contact from '../steps-form/Contact';
import Age from '../steps-form/Age';
import Phone from '../steps-form/Phone';
import Specif from '../steps-form/Specif';
import { useState } from 'react';
import WhyUs from '../steps-form/WhyUs';
import HowContact from '../steps-form/HowContact';
import ContactDate from '../steps-form/ContactDate';
import Feedback from '../steps-form/Feedback';
import Email from '../steps-form/Email';

const defaultData = {
  firstName: '',
  age: '',
  phone: '',
  email: '',
  field: '',
  fieldSpec: '',
  whyUs: '',
  howContact: '',
  dateContact: '',
  feedback: '',
  
}

const steps = [
  { id: 'entry' },
  { id: 'names' },
  { id: 'age' },
  { id: 'phone' },
  { id: 'email' },
  { id: 'contact' },
  { id: 'specif' },
  { id: 'whyUs' },
  { id: 'howContact' },
  { id: 'dateContact' },
  { id: 'feedback' },
  { id: 'review' },
]

function MultiStepForm() {

    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
      steps,
      initialStep: 0
    })
    const [completingPercent, setCompletingPercent] = useState(0);

    const props = { formData, setForm, navigation, completingPercent, setCompletingPercent }

    switch(step.id) {
      case 'entry':
        return <Entry { ...props } />
      case 'names':
        return <Names { ...props } />
      case 'age':
        return <Age { ...props } />
      case 'phone':
        return <Phone { ...props } />
      case 'email':
          return <Email { ...props } />
      case 'contact':
        return <Contact { ...props } />
      case 'specif':
        return <Specif { ...props } />
      case 'whyUs':
        return <WhyUs { ...props } />
      case 'howContact':
        return <HowContact { ...props } />
      case 'dateContact':
        return <ContactDate { ...props } />
      case 'feedback':
        return <Feedback { ...props } />
      case 'review':
        return <Review { ...props } />
      default:
        return <div>Not Found</div>
    }

  }
  
  export default MultiStepForm;
  