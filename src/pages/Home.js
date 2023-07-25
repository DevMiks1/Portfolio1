
import { NavLink } from "react-router-dom"
import {motion} from "framer-motion"


//images for hero section or profile 
import Profile from "../assets/home_img/profile.png"

//images for hero journey 
import Journey from "../assets/home_img/journey.png"

// images for services
import CarPainting from "../assets/home_img/car-painting.jpg"
import CarTinsmith from "../assets/home_img/car-tinsmith.png"
import WebDevelopment from "../assets/home_img/web-development-services.png"

export const Home = () => {



  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3,
      },
    },
  };
  
  return (
    
    <div>  
      {/* start of hero-section  */}
      <motion.section id="hero-section" className="bg-white dark:bg-black dark:text-white"
      
      >      
        <div className="container ">
          <div className="py-24 md:py-44 lg:py-52 ">
            <div className="flex flex-col items-center justify-around md:flex-row ">
              <motion.div className="text-center leading-normal md:text-left md:pr-10 md:w-1/2"

              initial= {{opacity: 0, y: "-100%"}}
              animate= {{opacity: 1, y: 0}}
              exit= {{opacity: 0, y: "-100%"}}
              transition={{ease: "easeInOut", duration: 1,}}

              >
                <p className="text-secondary font-bold">Introduction</p>
                <h1 className="text-3xl mb-5 font-bold  md:text-3xl lg:text-4xl">HI, MY NAME IS MIKE </h1>
                <p className="mb-10">I have a dream of pursuing a career as a web designer and a graphic designer. The field of graphics and web design captivates me, and I am fully committed to honing my skills in both areas.</p>
                <div className="flex gap-7 justify-center md:justify-start pb-10">
                  <div
                  
                  >
                    <a href="https://www.facebook.com/buboyvargas/" target="_blank" rel="noopener noreferrer">
                      <motion.button className="border border-secondary px-4 py-2 text-secondary rounded-lg font-bold hover:bg-secondary hover:text-white "
                      variants={buttonVariants}
                      whileHover="hover"
                      >Contact Me
                      </motion.button>
                    </a>
                  </div>
                  
                  <div>
                    <a href="https://drive.google.com/uc?export=download&id=1LSoTWa0nev_p0fyXERtrGvKvLZb0MORW" download>
                      <motion.button className="border border-secondary bg-secondary text-white px-6 py-2 rounded-lg font-bold hover:bg-transparent hover:text-secondary"
                      variants={buttonVariants}
                      whileHover="hover"
                      
                      >Resume
                      </motion.button>
                    </a>

                  </div>

                </div>
                
              </motion.div>

              <motion.div className="z-10"
              initial= {{scale: 0}}
              animate= {{scale: 1}}
              exit= {{scale: 0}}
              transition={{ease: "easeInOut", duration: 1}}
              
              >        
                <motion.img src={Profile} alt="" className="rounded-full h-56 w-56 cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                />
              </motion.div>
            </div>
          </div>  
        </div>
      </motion.section> {/* end of hero-section  */}
       
      {/* start of journey or blog section  */}
      <section
      
      >
        
        <div className="container">
          <div className="py-20 md:flex md:flex-row justify-center items-center md:gap-10 md:w-full">
            <div data-aos="zoom-in " >
              <img src={Journey} alt="journey" className="m-auto md:w-96 md:h-64   lg:w-max"/>
            </div>

            <div className="text-center md:w-1/2 md:text-center pt-5" data-aos="zoom-in">
              <h2 className="text-3xl font-bold mb-6 text-secondary dark:text-white">Journey</h2>
              <p className="mb-4">Before the pandemic, I studied BSCpe, but I admit that I no longer enjoy coding as it tends to overwhelm me. However, in December 2022, I discovered web development, and I can confidently say that I thoroughly enjoy creating dynamic websites with excellent design.
              </p> 
            </div>
                      
          </div>  
        </div>
      </section> {/* end of journey or blog section  */}

      {/* start of hobbies section  */}
      <section> 
            <div className="bg-hobbies text-center py-16 px-4 text-white" >
                <h2 className="text-4xl font-bold pb-12">HOBBIES</h2>
                <p className="text-base">When not coding, I have a variety of hobbies and interests that allow me to unwind. I love playing chess for the mind games, basketball to at least exercise my body, and watching movies and series dramas.</p>
            </div>    
        </section> {/* end of hobbies section */}

        {/* start of services section  */}
        <section className=""> 
          <div className="container ">
            <div className="pt-20 pb-40">
              <div className="text-center leading-relaxed" data-aos="zoom-in">
                <h4 className="text-secondary text-xl">What we Offer</h4>
                <h2 className="text-3xl pb-20">Save Your Money To Our Services</h2>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3" data-aos="zoom-in">

                { /* start of 1st service card  */}
                <div className="border-2 border-white  h-[440px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden " data-aos="fade-up" data-aos-duration="700" style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                  <div>
                    <div className="relative">
                      <img src={CarPainting} alt="" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                    </div>
                    <div className="flex flex-col px-3 ">
                      <p className="pt-3 pb-3 text-2xl font-bold">Car Painting</p>
                                    
                      <div>
                        <p className="text-sm pb-3">We specialize in delivering top-quality car painting services that will transform the look of your vehicle. Whether you want to restore the original shine or give your car a fresh, vibrant color, with our skilled and experienced technicians, we have the services to make it happen.</p>
                        
                      </div>
                      <NavLink to="carpaintings"><button className="btn w-[100px]" onClick={() => window.scrollTo(0, 0)}>Discover</button></NavLink>
                    </div>
                  </div>
                </div> {/* end of 1st service card  */}
                      
                {/* start of 2nd service card  */}
                <div className="border border-white  h-[440px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden shadow-box"  data-aos="fade-up" data-aos-duration="700" style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                  <div>
                    <div className="relative">
                      <img src={CarTinsmith} alt="" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />

                    </div>

                    <div className="flex flex-col px-3 ">
                      <p className="pt-3 pb-3 text-2xl font-bold">Car Tinsmith</p>
                                    
                      <div className="pb-5">
                        <p className="text-sm pb-3">From scratches to more extensive repairs, we specialize in working with various types of sheet metal, including steel, aluminum, and more. We meticulously shape, weld, and repair the damaged areas, seamlessly blending them with the original structure of your car.</p>
                      
                      </div>
                      <NavLink to="cartinsmiths"><button className="btn w-[100px]" onClick={() => window.scrollTo(0, 0)}>Discover</button></NavLink>
                    </div>
                  </div>
                </div>{/* end of 2nd service card  */}
                      
                {/* start of 3rd service card  */}
                <div className="border border-white  h-[440px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700" style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                  <div>
                    <div className="relative">
                      <img src={WebDevelopment} alt="" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    
                      <div className= " flex flex-col px-3 ">
                        <p className="pt-3 pb-3 text-2xl font-bold">Web Development</p>
                                    
                        <div className="pb-5">
                        <p className="text-sm pb-3">
                          We understand that every project is unique, and we tailor our services to meet your specific needs. Whether you're starting from scratch or looking to revamp your existing website, our experienced developers will collaborate with you to understand your goals.
                        </p>
                       
                      </div>
                      <NavLink to="webdevelopments"><button className="btn w-[100px]" onClick={() => window.scrollTo(0, 0)}>Discover</button></NavLink>
                      </div>
                    </div>
                  </div> {/* end of 3rd service card  */}   
                </div>
              </div>  
            </div>
          </div>
        </section> {/* end of services section  */}
        
     
    

      
      
    </div>  
    
  )
}

