import React from 'react';
import "./termsAndCondition.scss"; 
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const TermsAndCondition = () => {
   return (
    <div className="termsMainContainer">
      <Navbar />
      <div className="termsContainer">    
       <div className="bigFontTerms">Customer terms of service</div>
       <div className="smallFontTerms">Summary of these Terms</div>
        <div className="paraForTerms">
          <div className="1paraForTerms" style={{marginRight:"14%"}}>Along with the Terms on this page, there are two other documents that form part of our contract with you:</div>
          <div className="2paraForTerms"><span>Our How we Work helps you to use our Platform and understand our reviews, our rankings, our recommendations, how we make money, and more.</span></div>
          <div className="3paraForTerms"><span>Our Content Standards and Guidelines help us to keep everything on our Platform relevant to and appropriate for our global audience, without limiting freedom of expression. They tell you how we manage content and take action against anything inappropriate.</span></div>
          <div className="4paraForTerms">By agreeing to our Terms, you’re agreeing to everything in all three documents. If you don’t accept any of these Terms, please do not use our Platform.</div>
          <div className="5paraForTerms">All this information is important because it (along with your booking confirmation email and any pre-contractual information provided before you book) sets out the legal terms on which Service Providers offer their Travel Experiences through our Platform.</div>
          <div className="6paraForTerms">If something goes wrong with your Travel Experience, Section A15 of these Terms explains what you can do about it. This includes making a complaint to us, going to court, and (in some cases) using an online dispute resolution service.</div>
          <div className="7paraForTerms">If you want to appeal a moderation decision, or report any content on our Platform, our Content Standards and Guidelines explain how to do so and how we manage these requests.</div>
          <div className="8paraForTerms">This summary isn’t part of our Terms, or a legal document. It’s just a simple explanation of our Terms. We encourage you to read each document in full. Some of the words in this summary have very specific meanings, so check out the "IAmBooking.com dictionary" at the end of these Terms.</div> 
        </div>
      </div>
        <div className="termsFooter">
            <Footer />
        </div>
    </div>      
  )
}

export default TermsAndCondition;
