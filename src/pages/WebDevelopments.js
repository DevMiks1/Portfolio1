
import { Link } from "react-router-dom"

// images for services
import CarPainting from "../assets/home_img/car-painting.jpg"
import CarTinsmith from "../assets/home_img/car-tinsmith.png"
import WebDevelopment from "../assets/home_img/web-development-services.png"

export const WebDevelopments = () => {
  return (
    <div>
      <div className="py-40">
        <div className="container">
          <section>
            <div className="py-5">
                <h2 className="py-5 text-4xl text-center sm:text-left sm:text-4xl font-bold px-6">Custom Web Solutions: Tailored Development Services for Your Digital Success</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 px-7">
                  <div>
                    <img src={WebDevelopment} alt="" className="w-full"/>
                  </div>

                  <div>
                    <p className="text-base pt-10 pb-5 dark:text-color-white" data-aos="zoom-in" data-aos-duration="700">
                        We offer professional web development services that cater to your unique online presence needs. Our team of skilled web developers combines their expertise in coding, design, and user experience to create visually appealing, functional, and user-friendly websites.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                        We specialize in developing responsive websites that adapt seamlessly to different devices and screen sizes. Whether you need a simple brochure website, an e-commerce platform, or a complex web application, we have the knowledge and tools to bring your vision to life.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                        Our web development process begins with a thorough understanding of your requirements and goals. We collaborate closely with you to design a website that aligns with your brand identity and effectively communicates your message to your target audience. We pay attention to the smallest details, ensuring a seamless user experience and intuitive navigation throughout the site.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                        Using the latest web technologies and frameworks, our developers write clean and efficient code that ensures your website is fast, secure, and optimized for search engines. We also integrate essential features such as contact forms, content management systems, social media integration, and more to enhance the functionality and interactivity of your site.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                        Additionally, we offer ongoing website maintenance and support services to ensure your website remains up-to-date, secure, and performs at its best. We are committed to providing exceptional customer service, timely communication, and delivering projects on schedule and within budget.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                        We understand the importance of a strong online presence, and we are dedicated to helping you achieve your goals. Trust us to be your reliable partner in creating and maintaining a successful website that drives your online presence forward."
                    </p>
                    
                  </div>
                </div>

                <div className="col-span-1 ">
                  <div className=" pt-10  px-4 border">
                    <div className="text-center border-b-2" data-aos="zoom-in-up" data-aos-duration="700">
                      <h2 className="font-bold text-4xl pb-10 ">SERVICES OFFER</h2>
                    </div>
                    <div className="grid grid-cols-3 py-5 hover:text-secondary">
                      <div className="col-span-1" data-aos="zoom-in" data-aos-duration="700">
                        <div><img src={CarPainting} alt="" /></div>
                      </div>
                      <div className="col-span-2" data-aos="zoom-in-up" data-aos-duration="700">
                        <Link to="/carpaintings" ><h3 className="px-5 text-base font-bold " onClick={() => {
                window.scrollTo(0, 0);}}>Revive Your Ride: The Art of Car Painting</h3></Link>
                        
                      </div>     
                    </div>
                    <div className="grid grid-cols-3 py-5 hover:text-secondary">
                      <div className="col-span-1" data-aos="zoom-in" data-aos-duration="700">
                        <div><img src={CarTinsmith} alt="" /></div>
                      </div>
                      <div className="col-span-2" data-aos="zoom-in-up" data-aos-duration="700">
                        <Link to="/cartinsmiths" ><h3 className="px-5 text-base font-bold" onClick={() => {
                window.scrollTo(0, 0);}}>Crafting Automotive Excellence: The Art of the Car Tinsmith</h3></Link>
                        
                      </div>     
                    </div>
                    <div className="grid grid-cols-3 py-5 hover:text-secondary">
                      <div className="col-span-1" data-aos="zoom-in" data-aos-duration="700">
                        <div><img src={WebDevelopment} alt="" /></div>
                      </div>
                      <div className="col-span-2" data-aos="zoom-in-up" data-aos-duration="700">
                        <Link to="/webdevelopments"><h3 className="px-5 text-base font-bold " onClick={() => {
                window.scrollTo(0, 0);}}>Custom Web Solutions: Tailored Development Services for Your Digital Success</h3></Link>
                        
                      </div>     
                    </div>
                  </div>
                  <div class="icons flex gap-7 py-10 item-center justify-center text-3xl" data-aos="zoom-in-up" data-aos-duration="700">
                    <span class="text-facebook"><i class="fa-brands fa-facebook"></i></span>
                    <span class="text-gmail"><i class="fa-solid fa-envelope"></i></span>
                    <span class="text-insta"><i class="fa-brands fa-instagram"></i></span>
                  </div>
                </div>

              </div>
          </section>

        </div>

      </div>

    </div>
  )
}

