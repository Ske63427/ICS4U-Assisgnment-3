const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(){
    let a = document.getElementByID("hfA");
    let b = document.getElementByID("hfB");
    let c = document.getElementByID("hfC");
    let hfAnswer = 0.25 * Math.sqrt((4*a**2*b**2)-(a**2+b**2-c**2)**2)
    hfDisplay.setAttribute("placeholder", hfAnswer)
    console.log(hfAnswer)
}

heronCalc.addEventListerner("click", () => {
    heronsFormula()
})