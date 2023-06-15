import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'
import Navbar from './Navbar';


const Landing = () => {
  const [userName, setFullName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userAddress, setAddress] = useState("");
  const [userComment, setComment] = useState("");



  return (
    <>
<Navbar />
<div id='home' className='sec1 text-white'>
    <aside>
    <h5 className='text-white'>Our goal is to enable functional freedom for our clients.</h5>
    <h2 className='text-white fs-1' >Exceptional Returns at <br /> Managed Risk</h2>
    <p className='text-white'>
       Rocket GainFX is intended for people willing to achieve <br />
       wealth and financial freedom but unable to do so because <br />
       they're not financial experts.
    </p>
    </aside>

    <aside>
    <img src={require('../Images/RocketImage4.png')} alt="" />
    </aside>
</div>

<div id='abtUS' className=" justify-content-center my-5 sec2">

  <aside>
    <h5 className='fs-1'>Get to know us</h5>
    <h2 className='fs-2 my-2'>About Rocket GainFx</h2>
    <p>
      In today's fast-paced world, investing has become more<br /> important
      than ever before. It is no longer enough to simply <br /> save money;
      we must also find ways to make it grow. <br />
      That's where investment platforms comes in.
    </p>

    <p>
      rocketgainfx platform is a tool that allows individuals <br/ >
      to invest their capital with a wide range of investment <br />
      options, with specific amount of interest adding to the
      capital <br /> with use of our Mining Rigs, Harshpower and Blockchain Technology.
    </p>
  </aside>

  <img src={require ('../Images/RocketImage3.png')} alt="" />
  
</div>

<section id='plan' className='sec3'>
  <b class="text-light">Investment Plans</b>
  <h4 class="fw-bold fs-2">Our Investment Plans</h4>

  <div class="d-flex flex-wrap justify-content-center">

    <aside>
      <h4 class="text-primary fw-bold">Bronze</h4>
      <h3>10.00% Daily</h3>
      <b>USD 500.00 - USD 2,000.00</b>
    </aside>

    <aside>
      <h4 class="text-primary fw-bold">Silver</h4>
      <h3>12.00% Daily</h3>
      <b>USD 2,000.00 - USD 5,000.00</b>
    </aside>

    <aside>
      <h4 class="text-primary fw-bold">Gold</h4>
      <h3>15.00% Daily</h3>
      <b>USD 5,000.00 - USD 20,000.00</b>
    </aside>

    <aside>
      <h4 class="text-primary fw-bold">Platinum</h4>
      <h3>20.01% Daily</h3>
      <b>USD 20,000.00 - USD 50,000.00</b>
    </aside>
  </div>

</section>


<div id='contactUS' className="form">
<div className='text-center'>
    <h6 class="text-primary fw-bold fs-2">Contact us</h6>
    <h4 class="fw-bold fs-3">Speak With Us</h4>
    <p>
      If you have any questions or queries that are not answered on <br /> our website,
      please feel free to contact us. We will try to respond to you as soon as 
      possible. Thank you.
    </p>
  </div>

  <form class="row g-3">
  <div class="col-md-6">
    <input onChange={(event)=>setFullName(event.target.value)}
     type="text" class="form-control" id="inputFullMane" placeholder='Your Name'/>
  </div>
  <div class="col-md-6">
    <input onChange={(event)=>setEmail(event.target.value)} 
    type="email" class="form-control" id="inputEmail" placeholder='Email Address' />
  </div>
  <div class="col-12">
    <input onChange={(event)=>setAddress(event.target.value)} 
    type="text" class="form-control" id="inputAddress" placeholder="Subject" />
  </div>
  <div class="form-floating">
    <textarea onChange={(event)=>setComment(event.target.value)} 
    class="form-control" placeholder="Leave a comment here" 
    id="floatingTextarea2" style={{height: "130px"}}></textarea>
    <label for="floatingTextarea2">Your Comment...</label>
  </div>

  
  <div class="col-12">
    <button type="submit" class="btn bg-info text-white w-50">Sign in</button>
  </div>
</form>
</div>

<div className='w-50 text-center mx-auto my-3 bg-red'>
      <Link to={'./testimony'}>
       <span>View Testimony</span> <i className="icofont-caret-right"></i>
      </Link>
</div>

<footer>
    
  <aside>
  <img src={require ('../Images/rocket-logo.png')} alt="" />

    <p>
      Rocket GainFX is an international financial company <br />
      engaged in investment activities, which are related to <br />
      trading on financial markets and cryptocurrency <br />
      exchanges performed by qualified professional <br /> traders.
    </p>
  </aside>

  <aside>
    <h6 className='text-white'>PRIVACY & T&Cs</h6>
    <p><Link className='text-white' to={'./privacy-policy'}>Privacy policy</Link></p>
    <p>T&C's</p>
  </aside>

  <aside>
    <h6 className='text-white'>CONTACT US</h6>
    <p>Rocket GainFX</p>
    <p>(234)235-9013</p>
    <p>info@rocketgainfxcare.com</p>
  </aside>

</footer> 
    </>
  )
}

export default Landing;