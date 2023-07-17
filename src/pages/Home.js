
import { NavLink } from "react-router-dom"

//images for hero section or profile 
import Profile from "../assets/home_img/profile.png"

//images for hero journey 
import Journey from "../assets/home_img/journey.png"

// images for services
import CarPainting from "../assets/home_img/car-painting.jpg"
import CarTinsmith from "../assets/home_img/car-tinsmith.png"
import WebDevelopment from "../assets/home_img/web-development-services.png"

export const Home = () => {
  return (
    <div>  

      {/* start of hero-section  */}
      <section id="hero-section" className="relative ">
        <div className="h-80 w-80 bg-violet absolute top-16 -left-5 blur-2xl opacity-30 z-1 rounded-full overflow-hidden" ></div>
        <div className="h-80 w-80 bg-secondary absolute  bottom-10 right-0 blur-2xl opacity-30 z-1 rounded-full overflow-hidden" ></div>

        <div className="container ">
          <div className="py-10 mt-24 mb-14 sm:py-16 md:py-28 lg:py-44 ">
            <div className="flex flex-col items-center justify-around md:flex-row ">
              <div className="text-center leading-normal md:text-left md:pr-10 md:w-1/2">
                <h1 className="text-3xl mb-5 font-bold  md:text-3xl lg:text-4xl">HI, MY NAME IS MIKE </h1>
                <p className="uppercase mb-10">I have a dream of pursuing a career as a web designer and a graphic designer. The field of graphics and web design captivates me, and I am fully committed to honing my skills in both areas.</p>
              </div>

              <div className="z-10">        
                <img src={Profile} alt="" className="rounded-full h-56 w-56"/>
              </div>
            </div>
          </div>  
        </div>
      </section> {/* end of hero-section  */}
       
      {/* start of journey or blog section  */}
      <section className="bg-primarylight">
        <div className="container ">
          <div className="py-20 md:flex md:flex-row items-center md:gap-10 md:w-full">
            <div data-aos="zoom-in">
              <img src={Journey} alt="journey" className="mb-10 md:w-96 md:h-64 lg:w-full"/>
            </div>

            <div className="text-center md:w-1/2 md:text-center " data-aos="zoom-in">
              <h2 className="text-3xl font-bold mb-6 ">Journey</h2>
              <p className="mb-4">Before the pandemic, I studied BSCpe, but I admit that I no longer enjoy coding as it tends to overwhelm me. However, in December 2022, I discovered web development, and I can confidently say that I thoroughly enjoy creating dynamic websites with excellent design.
              </p> 
            </div>
                      
          </div>  
        </div>
      </section> {/* end of journey or blog section  */}

      {/* start of hobbies section  */}
      <section> 
            <div className="bg-hobbies text-center py-16 px-4" data-aos="zoom-in">
                <h2 className="text-4xl font-bold pb-12">HOBBIES</h2>
                <p className="text-base">When not coding, I have a variety of hobbies and interests that allow me to unwind. I love playing chess for the mind games, basketball to at least exercise my body, and watching movies and series dramas.</p>
            </div>    
        </section> {/* end of hobbies section */}

        {/* start of services section  */}
        <section> 
          <div className="container ">
            <div className="py-20">
              <div className="text-center leading-relaxed" data-aos="zoom-in">
                <h4 className="text-secondary text-xl">What we Offer</h4>
                <h2 className="text-3xl pb-20">Save Your Money To Our Services</h2>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3" data-aos="zoom-in">

                { /* start of 1st service card  */}
                <div className="services-card border-2 border-solid rounded-2xl relative "> 
                  <img src={CarPainting} alt="CarPainting" className="h-full w-full"/>
                  <div className="card-body1">
                    <h2 className="text-2xl  font-bold mb-2">CAR PAINTING</h2>
                    <p className="mb-2  text-base px-2 sm:text-xl md:text-sm lg:text-xs xl:text-sm">We specialize in delivering top-quality car painting services that will transform the look of your vehicle. Whether you want to restore the original shine or give your car a fresh, vibrant color, with our skilled and experienced technicians, we have the services to make it happen.
                    </p>
                    <NavLink to="carpaintings"><button className="btn" onClick={() => {
                window.scrollTo(0, 0);}}>Discover</button></NavLink>
                  </div>
                </div> {/* end of 1st service card  */}
                      
                {/* start of 2nd service card  */}
                <div className="services-card border-2 border-solid rounded-2xl relative "> 
                  <img src={CarTinsmith} alt="car-tinsmith" className="h-full w-full"/>
                  <div className="card-body2 m-auto text-center">
                    <div className="text-3xl font-bold mb-2">CAR TINSMITH</div>
                      <p className="pb-2 text-sm px-2 sm:text-xl md:text-xs  lg:text-xs xl:text-sm">From scratches to more extensive repairs, we specialize in working with various types of sheet metal, including steel, aluminum, and more. Using state-of-the-art tools and techniques, we meticulously shape, weld, and repair the damaged areas, seamlessly blending them with the original structure of your car.</p>
                      <NavLink to="cartinsmiths"><button className="btn" onClick={() => {
                window.scrollTo(0, 0);}}>Discover</button></NavLink>
                    </div>
                </div> {/* end of 2nd service card  */}
                      
                {/* start of 3rd service card  */}
                <div className="services-card border-2 border-solid rounded-2xl relative "> 
                  <img src={WebDevelopment}alt="car-tinsmith" className="h-full w-full"/>
                  <div className="card-body2 m-auto text-center">
                    <div className="text-3xl font-bold mb-2">WEB DEVELOPMENT</div>
                      <p className="pb-2 text-sm px-2 sm:text-xl md:text-xs md:px-1 lg:text-xs xl:text-sm">We understand that every project is unique, and we tailor our services to meet your specific needs. Whether you're starting from scratch or looking to revamp your existing website, our experienced developers will collaborate with you to understand your goals and translate them into a compelling online presence.</p>
                      <NavLink to="webdevelopments"><button className="btn" onClick={() => {
                window.scrollTo(0, 0);}}>Discover</button></NavLink>
                    </div>
                  </div> {/* end of 3rd service card  */}   
                </div>
              </div>  
            </div>
        </section> {/* end of services section  */}
        
     
    

      
      
    </div>  
  )
}

