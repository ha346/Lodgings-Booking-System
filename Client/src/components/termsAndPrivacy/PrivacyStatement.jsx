import React from 'react';
import "./privacyStatement.scss";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const PrivacyStatement = () => {
    return (
    <div className="privacyMainContainer">
    <Navbar />
      <div className="privacyContainer">
      <div className="privacyTitle">Privacy Statement</div>
        <div className="privacyPara">
        <div className="1privacyPara">First things first – your privacy is important to us. That might be the kind of thing all these notices say, but we mean it. You place your trust in us by using IAmBooking.com services, and we value that trust. That means we’re committed to protecting and safeguarding your personal data. We act in our customers’ best interests and are transparent about the processing of your personal data.</div> 
        <div className="2privacyPara">This document (“this Privacy Statement” or “our Privacy Statement”) describes how we use and process your personal data, provided in a readable and transparent manner. It also tells you what rights you can exercise in relation to your personal data and how you can contact us. Please also read our Cookie Statement, which tells you how IAmBooking.com uses cookies and other similar tracking technologies.</div> 
        <div className="3privacyPara">If you’ve used us before, you know that IAmBooking.com offers online travel-related services through our own websites and mobile apps, as well as other online platforms such as partners’ websites and social media. We’d like to point out that all the info you’re about to read generally applies to not one, not two, but all of these platforms.</div> 
        <div className="4privacyPara">In fact, this single privacy statement applies to any kind of customer information we collect through all of the above platforms or by any other means connected to these platforms (such as when you contact our customer service team by email).</div> 
        <div className="5privacyPara">If you are one of our business partners, make sure to also check out our Privacy Statement for Business Partners to understand how personal data is further processed as part of the business relationship.</div> 
        <div className="6privacyPara">We might amend this Privacy Statement from time to time, so we recommend visiting this page occasionally to make sure you know where you stand. If we make any updates to the Privacy Statement that will impact you significantly, we’ll notify you about the changes before any new activities begin.</div>  
        </div>
        <div className="secondPrivacyTitle">Terms we use in this Privacy Statement</div>  
        <div className="secondPrivacyPara">
            <div className="1secondPrivacyPara">“Trip” refers to the various different travel products and services that can be ordered, acquired, purchased, bought, paid, rented, provided, reserved, combined, or consummated by you from the Trip Provider.</div>  
            <div className="2secondPrivacyPara">“Trip Provide” refers to the provider of accommodation (e.g. hotel, motel, apartment, bed & breakfast, landlord), attractions (e.g. (theme) parks, museums, sightseeing tours), transportation provider (e.g. car rentals, cruises, trains, flights, bus tours, transfers), tour operators, travel insurances, and any other travel or related product or service as from time to time available for Trip Reservation on the platform.</div>  
            <div className="3secondPrivacyPara">“Trip Service” refers to the online purchase, order, (facilitated) payment, or reservation service as offered or enabled by IAmBooking.com in regards to various products and services as from time to time made available by Trip Providers on the platform.</div>  
            <div className="4secondPrivacyPara" style={{marginRight:"25%"}}>“Trip Reservation” refers to the order, purchase, payment, booking, or reservation of a Trip.</div>     
        </div>
      </div>
        <div className="privacyFooter">
            <Footer />
        </div>
    </div>
  )
}

export default PrivacyStatement;
