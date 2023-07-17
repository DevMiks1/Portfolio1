// image
import Hotel from "../assets/Project_img/Hotel.png"
import Kodeledger from "../assets/Project_img/Kodeledger.png"
import Newsgrid from "../assets/Project_img/Newsgrid.png"
import RandomJokes from "../assets/Project_img/RandomJokes.png"
import KeyCodes from "../assets/Project_img/KeyCodes.png"
import Feedback from "../assets/Project_img/Feedback.png"
import Cargo1 from "../assets/Project_img/Cargo1.png"
import NutriChef from "../assets/Project_img/NutfiChef.png"
import Cargo2 from "../assets/Project_img/Cargo2.png"

// skills
import Html from "../assets/about_img/skills-img/frontend-img/html.png"
import Css from "../assets/about_img/skills-img/frontend-img/css.png"
import Js from "../assets/about_img/skills-img/frontend-img/js.png"
import Tailwind from "../assets/about_img/skills-img/frontend-img/tailwind.png"
import Bootstrap from "../assets/about_img/skills-img/frontend-img/bootstrap1.png"
import Php from "../assets/about_img/skills-img/backend-img/php.png"
import GitHub from "../assets/about_img/skills-img/others-img/github.png"
import Netlify from "../assets/about_img/skills-img/others-img/netlify.png"
import React from "../assets/about_img/skills-img/frontend-img/react.png"
import NodeJs from "../assets/about_img/skills-img/backend-img/nodejs1.png"
import Vercel from "../assets/about_img/skills-img/others-img/vercel.png.png"












export const Project = () => {
    return(
        <div>
            <div className="py-40">
                <div className="container">
                    <h2 className="  text-secondary text-5xl font-bold  text-center pb-10">My Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 "  style={{background: 'rgba(255, 255, 255, 0.102)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255, 255, 255, .2)',}}>
                        <div className="border border-white  h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div> 
                                <img src={Hotel} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">Hotel</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px]"/>
                                            <img src={Css} alt="" className="h-[40px] w-[40px]" />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://exquisite-centaur-56859b.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/Hotel" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white   h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={Kodeledger} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">KodeLedger</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px]"/>
                                            <img src={Css} alt="" className="h-[40px] w-[40px]" />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://unrivaled-starlight-5cd7c7.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/Kodeledger" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white   h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={Newsgrid} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">NewsGrid</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px]"/>
                                            <img src={Css} alt="" className="h-[40px] w-[40px]" />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://radiant-semifreddo-667ec0.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/GridActivity" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={RandomJokes} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">RandomJokes</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px]"/>
                                            <img src={Css} alt="" className="h-[40px] w-[40px] pr-1" />
                                            <img src={Js} alt="" className="h-[40px] w-[40px]" />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://generate-random-jokes-xml.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/GenerateRandomJoke" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={KeyCodes} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">KeyCodes</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px]"/>
                                            <img src={Css} alt="" className="h-[40px] w-[40px] pr-1" />
                                            <img src={Js} alt="" className="h-[40px] w-[40px]" />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://event-keys-activities.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/eventKeys" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={Feedback} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">Feedback</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px]"/>
                                            <img src={Tailwind} alt="" className="h-[40px] w-[40px] pr-1" />
                                            <img src={Php} alt="" className="h-[40px] w-[40px]" />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://addfeedback.000webhostapp.com/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/FeedbackApp" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={Cargo1} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">Cargo Mini1</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px] pr-1"/>
                                            <img src={Bootstrap} alt="" className="h-[40px] w-[40px] pr-1" />
                                            
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://cargo-mini-project.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/MiniProject1" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={NutriChef} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">NutrichefHub Mini2</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={Html} alt="" className="h-[40px] w-[40px] pr-1" />
                                            <img src={Js} alt="" className="h-[40px] w-[40px] pr-1 "/>
                                            <img src={Tailwind} alt="" className="h-[40px] w-[40px] pr-1" />
                                            
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://cargo-mini-project.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/NutriChefHub-Mini2" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[300px] w-[350px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
                            <div>
                                <img src={Cargo2} alt="" className="rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                <div className="px-7">
                                    <p className="pt-5 pb-5 text-3xl">Cargo Capstone</p>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <img src={React} alt="" className="h-[40px] w-[40px] pr-1"/>
                                            <img src={NodeJs} alt="" className="h-[40px] w-[40px]"/>
                                            <img src={Tailwind} alt="" className="h-[40px] w-[40px] pr-1" />
                                            
                                        </div>
                                        <div className="flex gap-3">
                                            <a href="https://capstone-cargo-4t3p97sjn-devmiks1.vercel.app/" target="_blank" rel="noopener noreferrer" ><img src={Vercel} alt="" className="h-[40px] w-[40px] cursor-pointer"/></a>
                                            <a href="https://github.com/DevMiks1/CapstoneCargo" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[40px] w-[40px] bg-white rounded-full cursor-pointer"/></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}