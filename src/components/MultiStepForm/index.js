import { useForm, useStep } from 'react-hooks-helper';

import Names from '../steps-form/Names';
import Entry from '../steps-form/Entry';
import Address from '../steps-form/Address';
import Review from '../steps-form/Review';
import Contact from '../steps-form/Contact';
import { useState } from 'react';

const defaultData = {
  firstName: '',
  lastName: '',
  nickname: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  phone: '',
  email: '',
}

const steps = [
  { id: 'entry' },
  { id: 'names' },
  { id: 'address' },
  { id: 'contact' },
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
      case 'address':
        return <Address { ...props } />
      case 'contact':
        return <Contact { ...props } />
      case 'review':
        return <Review { ...props } />
      default:
        return <div>Not Found</div>
    }

  }
  
  export default MultiStepForm;
  