import { div } from "framer-motion/client";

export default function ContactUsSection(){
    return(
        <div className="contactus-section">
            <div className="container">        
                <h1 class="text-center mb-40">Contact Us</h1>        
                <form action="" className="contact-us-form">
                    <div className="form-row">
                        <div className="wrapper w-50">
                            <div className="form-wrap">
                                <input type="name" placeholder="Full Name"/>
                            </div>
                            <div className="form-wrap">
                                <input type="email" placeholder="Emial Address"/>
                            </div>
                        </div>
                        <div className="wrapper w-50">
                            <div className="form-wrap">
                                <input type="phone" placeholder="Phone No"/>
                            </div>
                            <div className="form-wrap">
                                <select name="cars" id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div className="wrapper w-100">
                            <textarea id="cars">
                                Messages
                            </textarea>
                        </div>
                        <div className="wrapper w-100">
                            <input type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}