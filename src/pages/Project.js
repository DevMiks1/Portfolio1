
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
import GitHub from "../assets/about_img/skills-img/others-img/github.png"
import Netlify from "../assets/about_img/skills-img/others-img/netlify.png"
import React from "../assets/about_img/skills-img/frontend-img/react.png"
import Vercel from "../assets/about_img/skills-img/others-img/vercel.png.png"

export const Project = () => {
    return(
        <div>
            <div className="py-40">
                <div className="container">
                    <h2 className="  text-secondary text-5xl font-bold  text-center pb-10">My Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 "  >
                        <div className="border border-white  h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}   
                        >
                            <div className="relative"> 
                                <div className="relative">
                                    <img src={Hotel} alt="Hotel Website" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://kodeledgers.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/Hotel" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                    </div>
                                </div>
                                
                                
                                <div className="px-3">
                                    <p className="pt-3 pb-3 text-2xl font-bold ">Hotel</p>
                                    
                                        <div className="pb-5">
                                            <p className="text-sm">A static website serves as the virtual gateway designed to provide guests with a seamless, delightful,  accommodations, amenities, and services.</p>
                                        </div>
                                        
                                    
                                    <div className="flex gap-2 text-sm">
                                            <p className="text-reds">#html</p>
                                            <p className="text-blues">#css</p>

                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white   h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div>
                                <div className="relative">
                                    <img src={Kodeledger} alt="Kodeledger" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://kodeledgers.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/Kodeledger" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>

                                    </div>
                                </div>
                                <div className="px-3">
                                    <p className="pt-3 pb-3 text-2xl font-bold ">Kodeledger</p>
                                        <div className="pb-5">
                                            <p className="text-sm">A static blog website, Our purpose is to provide a diverse and captivating collection of blogs that cater to a wide range of interests and passions.</p>
                                        </div>
                                    <div className="flex gap-2 text-sm">
                                        <p className="text-reds">#html</p>
                                        <p className="text-blues">#css</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white   h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div>
                                <div className="relative">
                                    <img src={Newsgrid} alt="Newsgrid Website" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://gridsnews.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/Newsgrid" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>

                                    </div>
                                </div>
                                <div className="px-3">
                                    <p className="pt-3 pb-3 text-2xl font-bold">News Grid</p>
                                    
                                        <div className="pb-5">
                                            <p className="text-sm">A static news website, Our purpose is to deliver timely, accurate, and engaging news from around the world, covering a wide  of topics that matter most to you.</p>
                                        </div>
                                        
                                    
                                    <div className="flex gap-2 text-sm">
                                            <p className="text-reds">#html</p>
                                            <p className="text-blues">#css</p>

                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div>
                                <div className="relative">
                                    <img src={RandomJokes} alt="Random Jokes" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://norrischuckjokes.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/norrischuckjokes" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>

                                    </div>
                                </div>
                                <div className="px-3">
                                    <p className="pt-3 pb-3 text-2xl font-bold">Generate Jokes</p>
                                    
                                        <div className="pb-5">
                                            <p className="text-sm">A website that have a random jokes, This APIs are designed to offer longer and more detailed jokes that may include humorous narratives, or punchlines. </p>
                                        </div>
                                        
                                    
                                    <div className="flex gap-2 text-sm">
                                            <p className="text-reds">#html</p>
                                            <p className="text-blues">#css</p>
                                            <p className="text-yellows">#javascript</p>

                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div>
                                <div className="relative">
                                    <img src={KeyCodes} alt="Key Codes" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://eventkeys.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/eventKeys" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between px-3 h-[180px]">
                                    <p className="py-3 text-2xl font-bold">Key Codes</p>
                                    <div className="pb-5">
                                        <p className="text-sm">A website that integrates event whenever you press a key it will gives a corresponding value even the shift, alt, cltr and numpad. </p>
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <p className="text-reds">#html</p>
                                        <p className="text-blues">#css</p>
                                        <p className="text-yellows">#javascript</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div>
                                <div className="relative">
                                    <img src={Feedback} alt="Feedback" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://addfeedback.000webhostapp.com/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/FeedbackApp" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-between px-3 h-[180px]">
                                    <p className="pt-3 pb-3 text-2xl font-bold">Feedback</p>
                                    
                                    <div className="pb-5">
                                        <p className="text-sm">A website app that allow users to put his/her feedback and they will see others feedback too including the name and the time. </p>
                                    </div>
    
                                    <div className="flex gap-2 text-sm">
                                        <p className="text-reds">#html</p>
                                        <p className="text-blues">#css</p>
                                        <p className="text-php">#php</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div>
                                <div className="relative">
                                    <img src={Cargo1} alt="Cargo Mini1" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://cargo-mini-project.netlify.app/" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/MiniProject1" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-between px-3 h-[180px]">
                                    <p className="pt-3 pb-3 text-2xl font-bold">Cargo Mini1</p>
                                    
                                        <div className="pb-5">
                                            <p className="text-sm">A static website that display the different types of car, prices and specs so users can choose a better car for his/her reservation. </p>
                                        </div>
                                        
                                    
                                    <div className="flex gap-2 text-sm">
                                            <p className="text-reds">#html</p>
                                            <p className="text-blues">#bootstrap</p>
                                            

                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div className="h-full">
                                <div className="relative">
                                    <img src={NutriChef} alt="Nutricious Recipe" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://nutrichefmend2.netlify.app/?fbclid=IwAR2anDXJo3qZyK32t5FYOWgC0sio8T7teuOOof1R4UKa8uRvNaqXczIKHqo" target="_blank" rel="noopener noreferrer" ><img src={Netlify} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/NutriChefHub-Mini2" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-between px-3 h-[180px]">
                                    <p className="pt-3 pb-3 text-2xl font-bold">NutfiChefHub Mini2</p>
                                    
                                        <div className="pb-5">
                                            <p className="text-sm">Web-based platform that allow users to search nutricious recipe for food including the benefits like it is strong to protein or vitamins A and etc.</p>
                                        </div>
                                        
                                    
                                    <div className="flex gap-2 text-sm">
                                            <p className="text-reds">#html</p>
                                            <p className="text-yellows">#javascript</p>
                                            <p className="text-blues">#tailwind</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-white  h-[370px] w-[320px] rounded-lg mx-auto my-10 overflow-hidden" data-aos="fade-up" data-aos-duration="700"  style={{boxShadow: "0 0 15px -5px rgba(0, 0, 0, 0.5)"}}>
                            <div>
                                <div className="relative">
                                    <img src={Cargo2} alt="Cargo Capstone" className="h-[180px] w-full rounded-lg transition-transform duration-1000 transform-gpu hover:scale-110" />
                                    <div className="flex flex-col gap-2 absolute top-6 right-3">
                                        <a href="https://capstone-cargo-4t3p97sjn-devmiks1.vercel.app/" target="_blank" rel="noopener noreferrer" ><img src={Vercel} alt="" className="h-[30px] w-[30px] cursor-pointer"/></a>
                                        <a href="https://github.com/DevMiks1/CapstoneCargo" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="" className="h-[30px] w-[30px] bg-white rounded-full cursor-pointer"/></a>

                                    </div>
                                </div>
                                <div className="flex flex-col justify-between px-3 h-[180px]">
                                    <p className="pt-3 pb-3 text-2xl font-bold">Cargo Capstone</p>
                                    <div className="pb-5">
                                        <p className="text-sm">Web-based platform that allow users to search, book and manage car rentals, providing a convenient and efficient solution for transportation needs.</p>
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <p className="text-reds">#react</p>
                                        <p className="text-greens">#mongodb</p>
                                        <p className="text-blues">#tailwind</p>
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