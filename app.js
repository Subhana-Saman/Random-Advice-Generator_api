function generator() {

    fetch("	https://api.adviceslip.com/advice", 
        
    )
    .then(res => res.json())
    .then(data => {
        let advice= data.slip.advice
        document.getElementById('display-advice').textContent =advice
    } )
    
}
generator()