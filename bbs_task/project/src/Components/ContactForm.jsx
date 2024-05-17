import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <div>
      <div className="min-h-screen mx-6 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto">
          <div className="inset-0 bg-gradient-to-r from-white to-base-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="text-white px-4 py-10 rounded-lg bg-[#9e9eb7] shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>
            <form>
              <label htmlFor='name'>Name</label><br/>
              <input
                className="w-full"
                type="text" placeholder="Name" name="name" /><br/>
                <label htmlFor='email'>Email</label><br/>
              <input
                className="w-full"
                type="email" placeholder="Email" name="email" /><br/>
                <label htmlFor='subject'>Subject</label><br/>
              <input
                className=" w-full"
                type="text" placeholder="Subject" name="_subject" /><br/>
                <label htmlFor='des'>Description</label><br/>
              <textarea
                className="w-full"
                placeholder="Type your message here..." name="message" style={{ height: "121px" }}></textarea><br/>
              <div className="flex justify-between">
                <button className='btn btn-primary'>Send</button>
                <button className='btn btn-danger'>Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactForm;
