import React from 'react';
import './Facilities.css'

const Facilities = () => {
    return (
        <div className="fac-card">
           <div className="con">
               <img className="image-fac" src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" alt="" />
               <h2>Middle of downtown</h2>
               <p>Hotel Exodia is Located exactly in the centre of down town. So You can out the City from anytime</p>
           </div> 
           <div  className="con">
               <img className="image-fac" src="https://image.freepik.com/free-photo/3d-rendering-modern-loft-office-lounge-co-working-space_105762-1981.jpg" alt="" />
               <h2>Great Environment</h2>
               <p>We have a very amazing environment dedicated to our guest. We offer the best service in the city</p>
           </div> 
           <div  className="con">
               <img className="image-fac" src="https://image.freepik.com/free-photo/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table_1150-37858.jpg" alt="" />
               <h2>Free Breakfast</h2>
               <p>There are free Breakfast Facilities from our hotel kitcen. Also you can order any item for lunch.</p>
           </div> 
           <div  className="con">
               <img className="image-fac" src="https://image.freepik.com/free-photo/young-woman-with-rubber-gloves-ready-clean_144627-42904.jpg" alt="" />
               <h2>Clean and Fresh</h2>
               <p>We are very clean and safe towards. Our cleaning team is very proffesional and hardworking.</p>
           </div> 
           <div  className="con">
               <img className="image-fac" src="https://image.freepik.com/free-photo/dancing-concert-while-singer-is-performing-surrounded-with-lights_181624-22022.jpg" alt="" />
               <h2>Enjoy NightLife</h2>
               <p>You can enjoy your evening. There are movies sports concert etc. </p>
           </div> 
           <div className="con">
               <img className="image-fac" src="https://image.freepik.com/free-photo/diverse-friends-students-shoot_53876-47012.jpg" alt="" />
               <h2>Meet New People</h2>
               <p>Our Loby is always open for the guest . So you can meet and chill with new people always</p>
           </div> 
        </div>
    );
};

export default Facilities;