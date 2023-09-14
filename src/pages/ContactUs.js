// import state hooks
import { useState } from 'react';
// import useForm hooks
import { useForm } from 'react-hook-form';

export const ContactUs = () => {
  const { register, trigger, formState:{errors} } = useForm();
  const [errorMessagesVisible, setErrorMessagesVisible] = useState(false);

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      setErrorMessagesVisible(true)
      setTimeout(() =>{
        setErrorMessagesVisible(false)
      }, 2000)
      
    }
    
  };

  return (
    <div className="py-28 flex justify-center">
      <div className="border-secondary border-2 p-2 rounded-lg max-w-xl mx-10 px-5">
        <h1 className="text-center text-3xl font-bold text-secondary py-5">
            CONTACT ME TO GET STARTED
        </h1>
        <form action="https://formsubmit.co/d9199cd83bc9f38640ce6ba1b3800c93" method="post" onSubmit={onSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='name' className='py-3'>NAME:</label>
            <input
              type="text"
              id='name'

              placeholder='Your name goes here!'
              {...register("name",{
                required: true,
                maxLength: 100,
              })}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-transparent border-black  outline-none text-black dark:border-none"
            />
            {errors.name && errorMessagesVisible &&(
            <p className='text-red-500'>
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max Length is required."}
            </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='py-3'>Email:</label>
            <input
              type="text"
              
              placeholder='EMAIL'
              {...register("email",{
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-transparent border-black outline-none text-black dark:border-black"
            />
            {errors.email && errorMessagesVisible &&(
            <p className='text-red-500'>
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label className='py-3'>Message:</label> {/* Corrected 'htmlFor' value */}
            <textarea
              placeholder='Hit me up with a message'
              cols="30"
              rows="10"
              {...register("message",{
                required: true,
                maxLength: 2000,
              })}
              className="border rounded-lg p-2 w-full focus:outline-none focus:ring-transparent border-black outline-none text-black dark:border-black"
            />
            {errors.message && errorMessagesVisible &&(
            <p className='text-red-500'>
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" && "Max Length is 2000 char."}
            </p>
            )}
          </div>
          <button type="submit" className="btn my-5">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};
