import { useForm } from 'react-hook-form';

export const ContactUs = () => {
  const { register, trigger, formState:{errors} } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      setTimeout(() => {
        // Display the error messages here
        // You can use a state variable or another mechanism to manage the display of error messages
        // For example, you can set a state variable to control their visibility
        // Example: setErrorMessagesVisible(true);
      }, 2000);
      console.log(setTimeout);
    }
    
  };

  return (
    <div className="py-28 flex justify-center">
      <div className="border-secondary border-2 p-2 rounded-lg max-w-xl mx-10 px-5">
        <h1 className="text-center text-3xl font-bold text-secondary py-5">
            CONTACT ME TO GET STARTED
        </h1>
        <form action="https://formsubmit.co/d9199cd83bc9f38640ce6ba1b3800c93" method="post" onSubmit={onSubmit}>
          <div>
            <label >NAME:</label>
            <input
              type="text"

              placeholder='NAME'
              {...register("name",{
                required: true,
                maxLength: 100,
              })}
              className="border rounded-lg p-2 w-full"
            />
            {errors.name && (
            <p className='text-red-500'>
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max Length is required."}
            </p>
            )}
          </div>
          <div className='pt-3'>
            <label>Email:</label>
            <input
              type="text"
              
              placeholder='EMAIL'
              {...register("email",{
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
              className="border rounded-lg p-2 w-full"
            />
            {errors.email && (
            <p className='text-red-500'>
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
            )}
          </div>
          <div className='pt-3'>
            <label>Message:</label> {/* Corrected 'htmlFor' value */}
            <textarea
              
              cols="30"
              rows="10"
              {...register("message",{
                required: true,
                maxLength: 2000,
              })}
              className="border rounded-lg p-2 w-full"
            />
            {errors.message && (
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
