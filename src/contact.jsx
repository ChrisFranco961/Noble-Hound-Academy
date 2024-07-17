import phone from "./assets/phone.png"
export function Contact(){
    return <div id="contactcontainer">
        <p id="servicestitle">Contact Us</p>
        <div id="contactinfo">
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.067386858299!2d-83.07053892350089!3d38.876700047924224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8846f14adc462fa7%3A0x5b67c754158e88b4!2sDog%20Heaven!5e0!3m2!1sen!2slb!4v1721207529316!5m2!1sen!2slb" width="400" height="900" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div id="cont">
                <img id="phone" src={phone} alt="" />
                <p className="contacttext">999-999-9999</p>
                <p className="contacttext">Noble_Hound_Academy@doggy.org</p>
            </div>

        </div>
    </div>
}