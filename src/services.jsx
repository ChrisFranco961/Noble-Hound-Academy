import traineddog from "./assets/traineddog.png"
import puppy from "./assets/puppyicon.png"
import discipline from "./assets/discipline.png"
import guard from "./assets/guard.png"
import agility from "./assets/agility.png"
import YouTube from "react-youtube";
function removing(){
    setTimeout(()=>{
        let vid=document.getElementById("servicevideo")
        vid.style.display="none"
            let vid1=document.getElementById("servicevideo1")
        vid1.style.display="none"
            let vid2=document.getElementById("servicevideo2")
        vid2.style.display="none"
            let vid3=document.getElementById("servicevideo3")
        vid3.style.display="none"
        
    },0)
}



export function Services(){
    return <div id="servicescontainer" >
        <div id="servicestitle">Command Discipline</div>
        <div className="servicevideo" id="servicevideo">
            <button onClick={removing}>X</button>
            <YouTube id="youtubeservice" videoId="1oDGa2yPb2g"/>
        </div>
        <div className="servicevideo" id="servicevideo1">
            <button onClick={removing}>X</button>
            <YouTube id="youtubeservice" videoId="inZs4hBYZTA"/>
        </div>
        <div className="servicevideo" id="servicevideo2">
            <button onClick={removing}>X</button>
            <YouTube id="youtubeservice" videoId="vkxggodZzqc"/>
        </div>
        <div className="servicevideo" id="servicevideo3">
            <button onClick={removing}>X</button>
            <YouTube id="youtubeservice" videoId="wnAOz5N5oQE"/>
        </div>
        <div id="servicelist">
            <div id="puppy"> <img  id="puppyicon" onClick={()=>{setTimeout(() => {
                let vid=document.getElementById('servicevideo')
                vid.style.display="block"
            }, 0);}} src={puppy} alt="" /> Puppy Training </div>
            <div id="puppy"><img id="puppyicon" onClick={()=>{setTimeout(() => {
                let vid=document.getElementById('servicevideo1')
                vid.style.display="block"
            }, 0);}} src={discipline} alt="" />Discipline and Behavior Modification</div>
            <div id="puppy"><img id="puppyicon" onClick={()=>{setTimeout(() => {
                let vid=document.getElementById('servicevideo2')
                vid.style.display="block"
            }, 0);}} src={agility} alt="" />Agility and Fitness</div>
            <div id="puppy"><img id="puppyicon" onClick={()=>{setTimeout(() => {
                let vid=document.getElementById('servicevideo3')
                vid.style.display="block"
            }, 0);}} src={guard} alt="" />Protection</div>
        </div>
    </div>
}