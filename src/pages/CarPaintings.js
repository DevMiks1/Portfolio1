
import { Link } from "react-router-dom"

// images for services
import CarPainting from "../assets/home_img/car-painting.jpg"
import CarTinsmith from "../assets/home_img/car-tinsmith.png"
import WebDevelopment from "../assets/home_img/web-development-services.png"

export const CarPaintings = () => {
  return (
    <div>
      <div className="py-40">
        <div className="container">
          <section>
            <div className="py-5">
                <h2 className="py-5 text-4xl text-center sm:text-left sm:text-4xl font-bold px-6">Revive Your Ride: The Art of Car Painting</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 px-7">
                  <div>
                    <img src={CarPainting} alt="" className="w-full"/>
                  </div>

                  <div>
                    <p className="text-base pt-10 pb-5 dark:text-color-white" data-aos="zoom-in" >
                      We offer professional car painting services that can revitalize the appearance of your vehicle and make it stand out on the road. Our team of skilled technicians is experienced in the art of car painting, combining expertise, precision, and high-quality materials to deliver exceptional results.  
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      Whether your car has suffered from paint damage, scratches, or fading due to environmental factors, our car painting services can bring back its original luster and shine. We provide a wide range of color options to suit your preferences and offer expert color matching to ensure a seamless finish that blends seamlessly with the rest of your vehicle.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      Our car painting process starts with thorough surface preparation, including cleaning, sanding, and priming, to ensure optimal paint adhesion and longevity. We utilize advanced painting techniques and state-of-the-art equipment to achieve a flawless and durable finish, free from streaks, drips, or imperfections.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      We understand the importance of attention to detail, and our skilled technicians take pride in their craftsmanship. From small touch-ups to complete car repaints, we treat each project with care and precision, striving for excellence in every aspect.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      With our car painting services, you can not only enhance the appearance of your vehicle but also protect its body from rust, corrosion, and other environmental damage. Our high-quality paints and finishes provide long-lasting protection, ensuring that your car looks great for years to come.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      Whether you're looking to restore a classic car, customize your vehicle with a unique color, or simply refresh its look, our car painting services can bring your vision to life. Trust us to deliver exceptional results that exceed your expectations and make your car a true reflection of your style and personality.
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
                        <Link to="/carpaintings" ><h3 className="px-5 text-base font-bold" onClick={() => {
                window.scrollTo(0, 0);}}>Revive Your Ride: The Art of Car Painting</h3></Link>
                        
                      </div>     
                    </div>
                    <div className="grid grid-cols-3 py-5 hover:text-secondary">
                      <div className="col-span-1" data-aos="zoom-in" data-aos-duration="700">
                        <div><img src={CarTinsmith} alt="" /></div>
                      </div>
                      <div className="col-span-2" data-aos="zoom-in-up" data-aos-duration="700">
                        < Link to="/cartinsmiths" ><h3 className="px-5 text-base font-bold" onClick={() => {
                window.scrollTo(0, 0);}}>Crafting Automotive Excellence: The Art of the Car Tinsmith</h3></Link>
                        
                      </div>     
                    </div>
                    <div className="grid grid-cols-3 py-5 hover:text-secondary">
                      <div className="col-span-1" data-aos="zoom-in" data-aos-duration="700">
                        <div><img src={WebDevelopment} alt="" /></div>
                      </div>
                      <div className="col-span-2" data-aos="zoom-in-up" data-aos-duration="700">
                        <Link to="/webdevelopments"><h3 className="px-5 text-base font-bold" onClick={() => {
                window.scrollTo(0, 0);}}>Custom Web Solutions: Tailored Development Services for Your Digital Success</h3></Link>
                        
                      </div>     
                    </div>
                  </div>
                  
                </div>

              </div>
          </section>

        </div>

      </div>

    </div>
  )
}

