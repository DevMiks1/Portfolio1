
import { useState } from "react"
import {motion} from "framer-motion"

// images
import KnowMe from "../assets/about_img/know me.jpg"

import SkillList from "./SkillList"

export const About = () => {
    const [skills, setSkills] = useState(SkillList)
    const [activeCategory, setActiveCategory] = useState("all");
    
        const handleCategoryClick = (category) => {
           
            setActiveCategory(category);
            if (category === 'all') {
                setSkills(SkillList);
              } else {
                const updateskills = SkillList.filter((currElem) => {
                    return currElem.category === category
                  });
                  setSkills(updateskills);
              }
        };

  return (
    <div>
        <div className="pt-40 pb-20">
            <div className="">
                {/* Start of know-me section */}
                <section className=" overflow-hidden">
                    <div className="grid lg:grid-cols-2 ">
                        <div>
                            <img src={KnowMe} alt="" className="h-[400px] w-[400px] mx-auto z-10 mb-10"/>
                        </div>
                        <div className="px-5 lg:pt-6 xl:pt-10">
                            <p className="pb-5">
                            Hi, I'm Mike Alfred Vargas. I'm inspired to become a full-stack web developer who can learn and adapt to new things. I want to create and develop solutions that can solve problems and help a lot of people since we know that there are a lot of possible solutions to implement that can give us easy access to our lives
                            </p>
                            <p className="pb-5">
                            I am passionate to learn more about UI/UX design because it is nice to have a good implementation into your website, such as layout and API building on the back-end side.
                            </p>
                            <p>
                            Before, I always challenged myself to corporate all the learnings I had when I was a beginner, such as Html, CSS, Bootstrap, Javascript,Tailwind, PHP, Laravel, and MySQL.
                            </p>
                        </div>
                    </div> 
                </section> {/* End of know-me section */}

                {/* start of skills section */}
                <section className="py-20 dark:bg-option">
                    <div className="py-10 ">
                        <div className="container1">
                            <h2 className="text-4xl font-bold pb-2"  data-aos="zoom-in" data-aos-duration="700">Tech Stacks</h2>
                            <p className="text-[16px] pb-5" data-aos="zoom-in" data-aos-duration="700"> 
                                Here are my technical stacks from my 3 months learning  in the Kodego bootcamp. I keep learning, studying, research from others and adjusting to new technologies.
                            </p>
                            
                            <div className="flex gap-2 lg:gap-10 " data-aos="zoom-in" data-aos-duration="700">
                            <button  className={`px-10 py-[8px] font-bold ${activeCategory === "all" ? 'bg-secondary text-white ' : ''}`} onClick={() => handleCategoryClick("all")}>
                                All
                            </button>
                            <button    className={`px-4 font-bold ${activeCategory === 'frontend' ? 'bg-secondary text-white ' : ''}`} onClick={() => handleCategoryClick("frontend")}>
                                frontend
                            </button>
                            <button className={`px-5 font-bold ${activeCategory === 'backend' ? 'bg-secondary text-white ' : ''}`} onClick={() => handleCategoryClick("backend")}>
                                backend
                            </button>
                            <button className={`px-8 font-bold ${activeCategory === 'others' ? 'bg-secondary text-white ' : ''}`} onClick={() => handleCategoryClick("others")}>
                                tools
                            </button>
                                
                            </div>
                            <hr />
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-10 py-20" data-aos="zoom-in" data-aos-duration="700">
                                {
                                    skills.map((skill) => {

                                    const {id,img} = skill;
                                    return (
                                        <motion.div key={id} className="flex justify-center cursor-pointer"
                                        whileHover={{scale: 1.3}}
                                        transition={{type: "spring", stiffness: 500}}
                                        >
                                            <img src={img} alt=""  className="h-[40px] w-[40px]"/>
                                          
                                            
                                        </motion.div>
                                        
                                    )
                                    
                                    })
                                }
                                
                            </div>
                        </div>


                    </div>
                </section>
                 {/* end of skills section  */} 

                {/* start of testimonial section  */} 
                <section className="dark:bg-option">
                    <div className="pt-20">
                        <div className="text-center text-4xl font-bold pb-20 text-secondary " data-aos="zoom-in">
                        TESTIMONIALS
                        </div>
                        <div>
                        <div className="container my-24 mx-auto md:px-6">
                            <section className="mb-32 ">
                            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12" >
                                <div className="mb-12 md:mb-0 text-left" data-aos="zoom-in-up" data-aos-duration="800">
                                <p className="mb-4 px-10" >
                                As a UX designer, I would like to share my testimonial to highlight the impact and value of user experience you design in creating successful website.
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 96 960 960"
                                    className="inline-block w-6"
                                    >
                                    <path
                                        fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                                    />
                                    </svg>
                                </p>
                                <p className="px-10 text-light text-sm"> - Kristel Yama | UX Designer </p>
                                </div>
                                <div className="mb-12 md:mb-0 text-left" data-aos="zoom-in-up" data-aos-duration="1000">
                                    <p className="mb-4 px-10">
                                    As a front-end developer, I would like to share my testimonial to highlight the expertise, passion, and commitment to creating exceptional user interfaces and immersive web experiences like this.
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 96 960 960"
                                    className="inline-block w-6"
                                    >
                                    <path
                                        fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                                    />
                                    </svg>  
                                    </p>
                                    <p className="px-10 text-light text-sm"> - John Sebastian | Frontend Developer </p>
                                </div>
                                <div className="mb-0 text-left" data-aos="zoom-in-up" data-aos-duration="1200">
                                <p className="mb-4 px-10">
                                    As a mobile app developer, I would like to share my testimonial to showcase your skills and dedication to creating high-quality and user-friendly mobile web design.
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 96 960 960"
                                    className="inline-block w-6"
                                    >
                                    <path
                                        fill="currentColor"
                                        d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                                    />
                                    </svg>
                                </p>
                                <p className="px-10 text-light text-sm"> - Justine Ostin | Mobile Developer </p>
                                
                                </div>
                            </div>
                            </section>
                        </div>
                        </div>
                    </div>
                </section>  {/* end of testimonial section  */} 
            </div>  
        </div>
    </div>
  )
}

