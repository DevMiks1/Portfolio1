
import { Link } from "react-router-dom"

// images for services
import CarPainting from "../assets/home_img/car-painting.jpg"
import CarTinsmith from "../assets/home_img/car-tinsmith.png"
import WebDevelopment from "../assets/home_img/web-development-services.png"

export const CarTinsmiths = () => {
  return (
    <div>
      <div className="py-40">
        <div className="container">
          <section>
            <div className="py-5">
                <h2 className="py-5 text-4xl text-center sm:text-left sm:text-4xl font-bold px-6">Crafting Automotive Excellence: The Art of the Car Tinsmith</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 px-7">
                  <div>
                    <img src={CarTinsmith} alt="" className="w-full"/>
                  </div>

                  <div>
                    <p className="text-base pt-10 pb-5 dark:text-color-white" data-aos="zoom-in" data-aos-duration="700">
                      We offer professional car tinsmith services that can transform the appearance of your vehicle and make it stand out on the road. Our team of skilled technicians specializes in the art of car tinsmithing, combining their expertise, precision, and the use of high-quality materials to deliver exceptional results. 
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      From dent repairs to panel replacements and rust repairs, our experienced tinsmiths are dedicated to restoring and fabricating sheet metal components of vehicles to their original condition. We understand the importance of attention to detail and take pride in our craftsmanship, ensuring that every repair and fabrication job is executed with the utmost care and precision.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      Additionally, we offer custom fabrication services, where our talented tinsmiths can create unique parts and components tailored to your specific design requirements or modifications. With our advanced welding and soldering techniques, we can seamlessly join metal pieces, repair seams, and reinforce structural components.
                    </p>
                    <p className="text-base  dark:text-color-white pb-5" data-aos="zoom-in" data-aos-duration="700">
                      We are committed to providing top-notch car tinsmith services that exceed your expectations. Our goal is to revitalize your vehicle's appearance and ensure its durability, all while delivering the highest level of customer satisfaction. Trust us to bring back the beauty and integrity of your vehicle with our professional car tinsmith services.
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
                        <Link to="/cartinsmiths" ><h3 className="px-5 text-base font-bold" onClick={() => {
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

