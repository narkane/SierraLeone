import React, {useState} from 'react';
import Link from 'next/link';
import PayPalPopup from "../components/PayPalPopup"
import ReactModal from 'react-modal';

const Donate = () => {
    const [donationAmount, setDonationAmount] = useState('');

  const handleChange = (event) => {
    setDonationAmount(event.target.value);
    console.log('Donation Amount: $'+donationAmount);
  };
    return (
        <section className="donate-area2">
            <div className="container">
                <div className="row donate-content-wrap">
                    <div className="col-lg-8">
                        <div className="donate-item">
                            <h3 className="donate__title">Enter Your Donation</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="yellow-form">
                                                <input type="number" className="form-control" style={{textAlign: 'right', fontFamily: 'sans-serif', fontWeight: '50'}} value={donationAmount} onChange={handleChange} />
                                                    <span className="dollar-sign">$</span>
                                                    {/* <span className="number-symble">.00</span> */}
                                            </div>
                                        </div>
                                    </div>
                        <PayPalPopup amount={donationAmount} />
                                </form>
                            </div>
                        </div>
                        {/* <div className="donate-item">
                            <h3 className="donate__title">Personal Info</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control"
                                                       placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="select-group">
                                                    <select className="select-option">
                                                        <option value="Country">Country</option>
                                                        <option value="usa">Usa</option>
                                                        <option value="Uk">Uk</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="textarea" name="message"
                                                      placeholder="Leave a Comment"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                        <div className="donate-item">
                            {/* <h3 className="donate__title">Payment</h3> */}
                            <div className="form-shared">
                                <form action="https://www.paypal.com/donate" method="post" target="_top">
                                    <div className="row">
                                        {/* <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Card Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="MM/YY" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Card Code (CVC)" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control"
                                                       placeholder="Billing Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="select-group">
                                                    <select className="select-option">
                                                        <option value="Country">Country</option>
                                                        <option value="usa">Usa</option>
                                                        <option value="Uk">Uk</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div style={{display: 'flex', justifyContent: 'center'}} className="col-lg-12"> */}
                                            {/* <div/> */}
                                            {/* doge: {process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID} */}
                                            {/* <form action="https://www.paypal.com/donate" method="post" target="_top"> */}
                                            {/* <div> */}
                                                {/* <input type="hidden" name="business" value="TPZWNMZVTVPZE" /> */}
                                                {/* <input type="hidden" name="no_recurring" value="0" /> */}
                                                {/* <input type="hidden" name="item_name" value="Test button" /> */}
                                                {/* <input className="form-control col-lg-9 col-sm-9" name="no_recurring" placeholder="Amount" /> */}
                                                {/* <input type="hidden" name="currency_code" value="USD" /> */}
                                                {/* <br /> */}
                                                {/* <input className="col-lg-3 col-sm-3" style={{padding: '24px'}} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
                                                {/* <button className="theme-btn submit__btn" name='submit'>donate now</button> */}
                                                {/* <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" /> */}
                                            {/* </div> */}
                                            {/* </form> */}
                                            {/* <div/> */}
                                        {/* </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget blog-content">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="/images/provisions.png" alt="" />
                                    </div>
                                    <div className="blog-inner-content" style={{paddingBottom: '28px'}}>
                                        <h3 className="blog__title"><Link href="/causes-detail"><a>Provisions & Clothing<br/><div style={{color: 'gray',textAlign: 'right', fontSize: '12pt'}}>Christmas 2024</div></a></Link>
                                        </h3>
                                        <ul className="blog__list">
                                            <li><i className="icon-target"></i> Goal: <span>$6,500</span></li>
                                            {/* <li><i className="fa fa-line-chart"></i> Raised: <span>25,270</span></li> */}
                                        </ul>
                                        {/* <p className="blog__desc">Raised by 25 donors</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="side-widget">
                                <div className="author-box">
                                    <div className="author__avatar" style={{backgroundColor: "#F2F0EC"}}>
                                        <img src="/images/jleys.png" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <span className="author__meta">created September 1, 2024</span>
                                        <h4 className="author__title">Organizer: <a href="#">Jana Leys</a></h4>
                                        <ul className="author__list">
                                            <li><i className="fa fa-tag"></i> Provisions & Clothing</li>
                                            <li><i className="fa fa-map-marker"></i> Sierra Leone, Africa</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
