import { Link } from "react-router-dom";
import AboutImg from "../assets/img/AboutUs/AboutUs.jpg";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";



export default function AboutUs() {
  useEffect(() => {
    console.log("Component re-rendered");
    window.scrollTo(0, 0);
  }, []);

 return (
   <div>
     <div>
       <div className="relative">
         <div className="overlay h-[29rem] opacity-[.6] bg-graydark absolute w-full "></div>
         <img
           src={AboutImg}
           className="h-[29rem] object-top w-full object-cover  "
           alt=""
         />
         <div className="absolute top-48 left-[30px] md:left-[11rem]">
           <div className="flex gap-4 items-center font-bold text-white">
             <span>Home</span>
             <hr className="h-4 w-[2px] bg-white" />
             <span>About Us</span>
           </div>
           <div className="mt-4">
             <span className="text-6xl font-bold text-white">ABOUT US</span>
           </div>
         </div>
       </div>

       <div className="py-8 flex flex-col gap-8 w-full  px-5 justify-around">
         <div className="md:w-[80%] mx-auto w-full flex flex-col gap-4 md:gap-8">
           <h1 className="text-orange md:text-4xl text-xl  font-bold">
             Shelves Tech
           </h1>
           <div className="flex flex-col gap-1">
             <h2 className="md:text-lg text-sm font-bold text-darkgray">
               Shelves Tech Capital Equipment Traders: Your Trusted Partner in
               Medical Innovation
             </h2>

             <p className="text-sm md:text-lg text-graylight  text-justify">
               At Shelves Tech, we understand that the heart of exceptional
               healthcare lies in the quality and reliability of the equipment
               used. Founded over a decade ago, our company has grown into a
               leading supplier of capital medical equipment, dedicated to
               empowering healthcare providers with the tools they need to
               deliver outstanding patient care.
             </p>
           </div>
         </div>

         <div className="md:w-[80%] mx-auto w-full flex flex-col gap-4 md:gap-8">
           <h1 className="text-orange md:text-4xl text-xl  font-bold">
             Our Vision
           </h1>
           <div className="flex flex-col gap-1">
             <p className="text-sm md:text-lg  text-graylight text-justify">
               Our vision is simple yet profound: to make advanced medical
               technology accessible to healthcare facilities worldwide. We
               believe that every medical professional should have access to the
               best equipment available, regardless of location or budget. By
               bridging the gap between innovation and accessibility, we aim to
               enhance healthcare outcomes and save lives.
             </p>
           </div>
         </div>

         <div className="md:w-[80%] mx-auto w-full flex flex-col gap-4 md:gap-8">
           <h1 className="text-orange md:text-4xl text-xl  font-bold">
             Our Mission
           </h1>
           <div className="flex flex-col gap-1">
             <p className="text-sm md:text-lg  text-justify">
               To support healthcare professionals and healthcare units by
               providing high-quality, reliable medical equipment that meets the
               evolving needs of modern medicine. We are committed to:
             </p>
             <div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">Quality :</h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   Ensuring that every product we offer meets the highest
                   standards of performance and safety.
                 </p>
               </div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">Innovation :</h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   Continually updating our inventory with the latest
                   advancements in medical technology.
                 </p>
               </div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">Service :</h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   Providing exceptional customer support and technical
                   assistance to maximize the value of your investment.
                 </p>
               </div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">
                   Affordability :
                 </h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   Offering competitive pricing and flexible financing options
                   to make top-tier equipment accessible to all.
                 </p>
               </div>
             </div>
           </div>
         </div>

         <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 md:gap-8">
           <h1 className="text-ornage md:text-4xl text-xl  font-bold">
             Our Core Values
           </h1>
           <div className="flex flex-col gap-1">
             <p className="text-sm md:text-lg  text-justify">
               At Shelves Tech, our core values guide every aspect of our
               business:
             </p>
             <div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">Integrity :</h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   We conduct our business with honesty, transparency, and
                   respect for our clients and partners.
                 </p>
               </div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">Excellence :</h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   We strive for excellence in everything we do, from product
                   selection to customer service.
                 </p>
               </div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">
                   Collaboration :
                 </h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   We believe in building strong, long-lasting relationships
                   with our clients, partners, and the medical community.
                 </p>
               </div>
               <div className="mt-4">
                 <h1 className="md:text-lg text-md text-black font-bold">Innovation :</h1>
                 <p className="ml-4 text-sm md:text-lg text-graylight">
                   We are committed to staying at the forefront of medical
                   technology to provide the best solutions for our clients.
                 </p>
               </div>
             </div>
           </div>
         </div>

         <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 ">
           <h1 className="text-orange md:text-4xl text-xl  font-bold">
             Our Team
           </h1>
           <div className="flex flex-col gap-1">
             <p className="text-sm md:text-lg text-graylight text-justify">
               Our team comprises seasoned professionals with extensive
               experience in the medical equipment industry. From engineers and
               technicians to customer service specialists, each member of our
               team is dedicated to ensuring you receive the best products and
               support. We work closely with leading manufacturers and industry
               experts to stay ahead of the curve and bring you the latest
               innovations.
             </p>
           </div>
         </div>

         <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 ">
           <h1 className="text-orange md:text-4xl text-xl  font-bold">
             Global Reach, Local Touch
           </h1>
           <div className="flex flex-col gap-1">
             <p className="text-sm md:text-lg  text-graylight text-justify">
               While we serve clients around the globe, we understand the
               importance of a personalized approach. We take the time to
               understand your specific needs and provide tailored solutions
               that fit your unique requirements. Our global network of partners
               and distributors ensures that we can deliver our products and
               services efficiently and effectively, no matter where you are.
             </p>
           </div>
         </div>

         <div className="md:w-[80%] mx-auto  w-full flex flex-col gap-4 ">
           <h1 className="text-orange md:text-4xl text-xl  font-bold">
             Join Us on Our Journey
           </h1>
           <div className="flex flex-col gap-1">
             <p className="text-sm md:text-lg text-graylight text-justify">
               At ShelvesTech, we are more than just a supplier; we are your
               partner in healthcare innovation. We invite you to join us on our
               journey to enhance healthcare and improve patient outcomes.
               Together, we can make a significant impact on the health and
               well-being of communities worldwide.
             </p>
           </div>
         </div>
       </div>
       <div className=" w-full bg-orange p-6">
         <h2 className="text-3xl md:w-[80%] text-center font-bold text-white  mx-auto">
           Shelves Tech – Empowering Healthcare, One Innovation at a Time.
         </h2>
       </div>
     </div>
   </div>
 );
}
