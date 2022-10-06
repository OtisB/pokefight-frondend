import './FightAnimation.css'

function FightAnimation({setShowAnimation}) {

    let counter = 0;
    function wind() {
        const direction = Math.random() * 100;
    
        document.getElementById('staubwolke').style.marginLeft = parseInt(window.getComputedStyle(document.getElementById('staubwolke')).marginLeft) + parseInt(direction) + "px";
    
        const blitz_offset = Math.random() * 150;
        document.getElementById('blitz').style.marginLeft = parseInt(direction) + "px";
        document.getElementById('blitz').style.marginTop = parseInt(blitz_offset) + "px";
    
        console.log(direction, blitz_offset, window.getComputedStyle(document.getElementById('staubwolke')).marginLeft);
        
        if (document.getElementById('animation').className.indexOf('blitzed') === -1) {
            document.getElementById('animation').className = 'animated blitzed';
        } else {
            document.getElementById('animation').className = 'animated';
        }
        if (counter > 6) {
            window.clearInterval(wind);
            setShowAnimation(false);
        } 
    }

    const animInterval = window.setInterval(wind, 800);
    console.log(animInterval);
    return (

        <div id="animation">
    
            <div id="box"></div> 
            <div id="stern"></div> 
            <div id="stern2"></div> 
            <div id="stern3"></div> 
            <div id="staubwolke"></div>
            <div id="staubwolke2"></div>
            <div id="blitz"></div>

        </div>
    )
}

export default FightAnimation