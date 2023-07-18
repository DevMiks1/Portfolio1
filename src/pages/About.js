// images
import KnowMe from "../assets/about_img/know me.jpg"

// images for frontend
import Html from "../assets/about_img/skills-img/frontend-img/html.png"
import Css from "../assets/about_img/skills-img/frontend-img/css.png"
import Js from "../assets/about_img/skills-img/frontend-img/js.png"
import Bootstrap from "../assets/about_img/skills-img/frontend-img/bootstrap1.png"
import Tailwind from "../assets/about_img/skills-img/frontend-img/tailwind.png"
import React from "../assets/about_img/skills-img/frontend-img/react.png"

// images for backend
import Laravel from "../assets/about_img/skills-img/backend-img/laravel.png"
import MySql from "../assets/about_img/skills-img/backend-img/mysql.png"
import Php from "../assets/about_img/skills-img/backend-img/php.png"
import NodeJs from "../assets/about_img/skills-img/backend-img/nodejs1.png"

// images for others
import Git from "../assets/about_img/skills-img/others-img/git.png"
import GitHub from "../assets/about_img/skills-img/others-img/github.png"
import Netlify from "../assets/about_img/skills-img/others-img/netlify.png"
import Vercel from "../assets/about_img/skills-img/others-img/vercel.png.png"






export const About = () => {
  return (
    <div>
        <div className="pt-40 pb-20">
            <div className="container">
                {/* Start of know-me section */}
                <section>
                    <div className="grid lg:grid-cols-2 ">
                        <div className="h-80 w-80 bg-violet absolute top-16 -left-5 blur-2xl opacity-30 z-1 rounded-full overflow-hidden" >
                        </div>
                        <div className="h-80 w-80 bg-secondary absolute  bottom-10 right-0 blur-2xl opacity-30 z-1 rounded-full overflow-hidden" >
                        </div>
                        <img src={KnowMe} alt="" className="h-[400px] w-[400px] mx-auto z-10 mb-10"/>
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
                <section id="skills-section" className="bg-dark">    
                    <div className="container" >
                        <div className="skills" data-aos="fade-up" data-aos-duration="700">
                            <h2 className="text-secondary text-center text-5xl font-bold py-10">SKILLS</h2>
                        </div>
                        {/* start of frontend */}
                        <div className="front-end skills-effect grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 justify-center items-center py-5 lg:py-10 mb-10"data-aos="fade-up" data-aos-duration="700">
                            
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Html} alt="html" />
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Css} alt="CSS"/>
                                </div>
                            </div>

                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Js} alt="Javascript"/>
                                    
                                </div>
                            </div>
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    
                                    <img className="h-[50px] w-[50px]" src={Bootstrap} alt="Bootstrap"/>
                                </div>
                            </div>
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Tailwind} alt="Tailwind"/>
                                    
                                </div>
                            </div>
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={React} alt="React"/>
                                    
                                </div>
                            </div>
                            <div className="front-end-body lg:px-5">
                                <div className="font-bold text-4xl  pt-5 lg:pt-0">
                                    <h2>FRONT-END</h2>
                                </div>
                                <div>
                                    <p className="pt-3 ">Frontend tools are software components and frameworks used in the development of user interfaces and client-side functionality for web applications. These tools help in creating visually appealing and interactive web pages that users interact with. Here is some commonly i used in frontend.</p>
                                </div>
                            </div>
                        </div> {/* end of frontend  */} 
                        
                        {/* start of backend  */}
                        <div className="back-end skills-effect grid grid-cols-2 gap-5 lg:grid-cols-4 justify-center items-center py-5 mb-10 lg:py-7" data-aos="fade-up" data-aos-duration="700">
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Laravel} alt="laravel"/>  
                                </div>
                                
                            </div>

                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={MySql} alt="mysql"/>   
                                </div>
                            </div>

                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Php} alt="php"/>
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={NodeJs} alt="nodejs"/>
                                </div>
                            </div>
                            <div className="back-end-body md:px-20 lg:px-10">
                                <div className="font-bold text-4xl  pt-1">
                                    <h2 className=" ">BACK-END</h2>
                                </div>
                                <div className="back-end-subtitle">
                                    <p className=" ">Backend tools are software components and frameworks used in the development of server-side applications. These tools facilitate the handling of server-side operations, data management, and the creation of APIs, Here is some commonly i used in backend.</p>
                                </div>
                            </div>
                        </div>

                        {/* tools or others */}
                        <div className="tools skills-effect grid grid-cols-2 gap-5 lg:grid-cols-4 justify-center items-center py-10 " data-aos="fade-up" data-aos-duration="700">
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Git} alt="git"/>  
                                </div>
                            </div>

                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={GitHub} alt="github"/>   
                                </div>
                            </div>

                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Netlify} alt="netlify"/>
                                </div>
                            </div>
                            <div className="flex justify-center items-center md:mb-3 lg:mb-0">
                                <div className="h-[80px] w-[80px] flex justify-center items-center bg-white rounded-lg">
                                    <img className="h-[50px] w-[50px]" src={Vercel} alt="netlify"/>
                                </div>
                            </div>

                            <div className="tools-body md:px-20 lg:px-10">
                                <div className="font-bold text-4xl  pt-5">
                                    <h2>OTHERS</h2>
                                </div>
                                <div className="">
                                    <p className="pt-3">Git is a version control system that tracks changes to files, GitHub is a web-based hosting service for Git repositories with collaboration features, and Netlify is a cloud-based platform for hosting and deploying web applications, providing CI/CD workflows and backend services. Together, these tools enable efficient and collaborative development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> {/* end of skills section  */} 

                {/* start of testimonial section  */} 
                <section>
                    <div className="pt-20">
                        <div className="text-center text-4xl font-bold pb-20 text-secondary " data-aos="zoom-in">
                        TESTIMONIALS
                        </div>
                        <div>
                        <div className="container my-24 mx-auto md:px-6">
                            <section className="mb-32 ">
                            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12" data-aos="zoom-in">
                                <div className="mb-12 md:mb-0 text-left">
                                <p className="mb-4 px-10">
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
                                <div className="mb-12 md:mb-0 text-left">
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
                                <div className="mb-0 text-left">
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

