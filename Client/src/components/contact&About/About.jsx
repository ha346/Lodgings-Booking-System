import React from 'react';
import "./about.scss";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const About = () => {
   return (
    <div className="aboutMainContainer"> 
       <Navbar />       
       <div className='aboutContainer'>
          <div className="aboutTitle">I Am Booking : About Us</div>
          <div className="aboutintro">It seems you are very much interested in what My Awesome Cart has hidden here, let’s take a tour so you can know more about us and maybe after this, we can become best of buddies.</div>
          <div className="aboutImage"><img style={{width:"60%",height:"470px"}} src="https://media.istockphoto.com/id/1163589059/photo/about-us.jpg?s=612x612&w=0&k=20&c=xiAumkYaKpQc3xepslDpn-lFhYPae6ivX_rRkgSXJgs=" alt="" /></div>
          <div className="aboutJumbotron" style={{backgroundColor:"#e9ecef"}}>
            <div className="jumbotronTitle">Our Story : My Awesome Cart</div>
            <p className="aboutParaJumbotron">
              We make it easy for you to compare Bookings from many hotels, property owners, and other Service Providers. When you make a Booking on our Platform, you enter into a contract with the Service Provider (unless otherwise stated). The information on our Platform is based on what Service Providers tell us. We do our best to keep things up to date at all times, but realistically, it can take a few hours to update, e.g. text descriptions and lists of the facilities that Accommodations provide.
            </p>
            <p className="aboutParaJumbotron">
              Only Service Providers that have a contractual relationship with us will be displayed on our Platform. They may offer Travel Experiences outside our Platform as well. We don’t own any Accommodations ourselves—each Service Provider is a separate company that has agreed to work with us in a certain way.
            </p>
            <p className="aboutParaJumbotron">
              Our Platform tells you how many Accommodations you can book through us worldwide – and our search results page tells you how many of them might be right for you, based on what you’ve told us. We don’t buy or (re-)sell any products or services. Once your stay is finished, the Service Provider simply pays us a commission.If the second Accommodation in your search results has a badge that says “Ad,” this means that the Service Provider has paid for it to appear there, as part of our “Booking Network Sponsored Ads” program.
            </p>
          </div>
          <div className="aboutParaColumn">
            <div className="aboutPara1">
               <div className="aboutParaTitle">How IAmBooking.com uses recommendation systems</div>        
                <div className="aboutParaDesc">
                    <p className="aboutParaColumn">All great properties deserve to be discovered. That’s why we use “recommendation” systems to display information on our Platform in a way that’ll help you discover properties we think you’ll like. For example, on the “Stays” landing page.</p>   
                           
                    <p className="aboutParaColumn">All the recommendation systems we use   
                    provide recommendations based on one or more of the following factors:
                    What you tell us in the search form: destination, dates, number of guests, etc.
                    Any information we’ve gathered based on how you interact with our Platform: your past searches on our Platform, the country where you are while browsing, etc.
                    An Accommodation’s performance on our Platform:
                    its click-through rate (how many people click on it)
                    its gross bookings (how many bookings are made with that Accommodation)
                    its net bookings (how many bookings are made with that Accommodation, minus how many are canceled)
                    Information about an Accommodation’s availability, pricing scores, review scores, etc.</p>
               </div>        
            </div>    
            <div className="aboutPara2">
               <div className="aboutParaTitle">Our default ranking and sorting options</div>        
               <div className="aboutParaDesc">
                    <p className="aboutParaColumn">Our search results are also a recommendation system. They show all the Accommodations (hotels, apartments, etc.) that match your search. To see all the booking options an Accommodation offers, just click it. When you first get your search results, they’ll be sorted (“ordered”) by “Our top picks” (called “Popularity” on our app):</p> 
                           
                    <p className="aboutParaColumn">As you can imagine, those numbers depend on lots of factors, including review scores, availability, policies, pricing, quality of content (e.g. photos), and other features. An Accommodation’s ranking can also be influenced by other things—for example, how much commission they pay us on Bookings, how quickly they usually pay it, whether they’re part of our Genius program or Preferred Partner(+) Program and in certain places*, whether we organize their payments. Any information we’ve gathered based on how you interact with our Platform (including what you tell us) will also be a factor.</p>         
               </div> 
             </div>    
            <div className="aboutPara3">
               <div className="aboutParaTitle">Personalized recommendations</div>        
                <div className="aboutParaDesc">
                    <p className="aboutParaColumn">Some of our recommendation systems make personalized recommendations based on how you have interacted with Booking.com systems such as Destination Postcards, Nearby destinations, and our search results. If you’re based in the EEA, you can change your settings so our recommendation systems do not provide you with personalized recommendations.</p>    
                           
                    <p className="aboutParaColumn">Even if you do that, we may still retain some information about you so we can give you a more convenient experience. This could be information that you provided (e.g., your phone number or email address) or that we gathered based on how you interact with our Platform.
                    Your preference (about personalized recommendations) will apply on any device on which you have signed in to your Booking.com account. If you’re not signed in to your account, your preference will not apply to other devices; it’ll be saved as part of your “cookies,” and when that cookie expires, so will your preference.</p>         
               </div> 
             </div>    
            </div>
          
        </div>
            <div className="aboutFooter">
                <Footer />
            </div>
    </div> 
  )
}

export default About;
