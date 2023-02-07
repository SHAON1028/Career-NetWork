import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const ContactWithEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('career_network', 'career_networkdb', form.current, 'C9iSTUwF4FqvQAVVI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div  className='py-6 max-h-[800px] p-7 '>
            <h2 className='text-center text-3xl mb-5'>Contact With Email</h2>
            <div className='flex justify-center'>
                <form ref={form} onSubmit={sendEmail} className=' w-96'>
                    <div className='form-control gap-y-3'>
                        <input className='h-12 input input-bordered' type="text" name='name' placeholder='Your Full Name' required />
                        <input className='h-12 input input-bordered' type="email" name='email' placeholder='Your Email' required />
                        <input className='h-20 input input-bordered' type="text" name='subject' placeholder='Your Subject' required />
                        <input className='h-20 input input-bordered' type="text" name='message' placeholder='Your Message' required />
                        <input className='btn btn-info w-28 text-white flex mx-auto' type="submit" value='Send' />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ContactWithEmail;