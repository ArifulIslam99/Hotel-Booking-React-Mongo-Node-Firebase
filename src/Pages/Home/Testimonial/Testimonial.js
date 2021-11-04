import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
      <div className='my-4 py-5 mx-auto' style={{backgroundColor:'dimgray', width:'95%'}}>
          <h2 className="fs-1 fw-bold text-white">Testimonial</h2>
          <section className='row'>
          <div className='p-4 col-lg-4 col-xs-12 '>
              <div className='p-4'>
                  <img style={{borderRadius:'50%', width:'200px', height:'200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOr3cDHrDjizSMpE4E4zRDzGsV6F7EmO867A&usqp=CAU" alt="" />
              </div>
              <div>
                  <h4 className="text-warning">Sachin Tendulkar</h4>
                  <blockquote className="text-white">" A great Place to have a relax tour. Wating for visit Again. Always will be my first Choice"</blockquote>
              </div>
          </div>
          <div className='p-4 col-lg-4 col-xs-12'>
              <div className='p-4'>
                  <img style={{borderRadius:'50%', width:'200px', height:'200px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefelGyJuzRsT0k2SdTgnx-J75Tr7Z3aQsBA&usqp=CAU" alt="" />
              </div>
              <div>
              <h4 className="text-warning">Shahid Afridi</h4>
                  <blockquote className="text-white">I was here in my last entire Bpl tour. Felt like i  was in home. Great Environment and Hospitality.</blockquote>
              </div>
          </div>
          <div className='p-4 col-lg-4 col-xs-12'>
              <div className='p-4'>
                  <img style={{borderRadius:'50%', width:'200px', height:'200px'}} src="https://static.billboard.com/files/2020/11/Barack-Obama-oct-31-2020-billboard-1548-1605905761-compressed.jpg" alt="" />
              </div>
              <div>
                    <h4 className="text-warning">Barac Obama</h4>
                  <blockquote className="text-white">My One Night visit in Exodia will always remembered. The Most I enjoyed is the meal here. Great Kitchen great food. I love exodia.</blockquote>
              </div>
          </div>
          </section>
      </div>
    );
};

export default Testimonial;