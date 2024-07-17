import fivestar from "./assets/5star.png"
export function Feedback(){
    return <div id="feedback">
        <p id="servicestitle">Always Satisfied</p>
        <div id="feedbacktext">
            <p>"Training at Noble Hound Academy has been transformative for our dog! The trainers are incredibly knowledgeable and patient, making learning enjoyable for both our pup and us. Highly recommend their personalized approach to anyone looking to build a stronger bond with their furry friend." - Sarah L.</p>
            <p>"We couldn't be happier with the results from Noble Hound Academy. Our dog went from unruly to obedient in just a few sessions. The facility is top-notch, and the trainers are skilled professionals who truly care about each dog's progress. Thank you for helping us unleash our dog's potential!" - Mark and Emily C.</p>
            <p>Choosing Noble Hound Academy was the best decision we made for our new puppy. The positive reinforcement methods used here have made training fun and effective. Our puppy now listens attentively and is more confident in social situations. We look forward to continuing our training journey with Noble Hound!" - Michael and Jennifer M.</p>
        </div>
        <img id="five" src={fivestar} alt="" />
    
    </div>
}