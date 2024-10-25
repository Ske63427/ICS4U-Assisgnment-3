function clearFields(hfFields, acFields){
    if (hfFields){
        document.getElementById("hfA").value = " ";
        document.getElementById("hfB").value = " ";
        document.getElementById("hfC").value = " ";
        document.getElementById("hfAnswerBlock").value = " ";
    }
    if (acFields){
        document.getElementById("acA").value = " ";
        document.getElementById("acB").value = " ";
        document.getElementById("acAA").value = " ";
    }
}
/*------------------------------------------------------------------------------------------------------------------------------------------*/
const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(a, b, c){
    let hfAnswer = 0.25 * Math.sqrt((4 * a**2 * b**2)-(a**2 + b**2 - c**2)**2)
    hfDisplay.value = hfAnswer.toFixed(3)
    console.log(hfAnswer)
}

heronCalc.addEventListener("click", () => {
    // clearFields(false, true);
    let a1 = Number(document.getElementById("hfA").value)
    let b1 = Number(document.getElementById("hfB").value)
    let c1 = Number(document.getElementById("hfC").value)
    heronsFormula(a1, b1, c1);
});

//-----------------------------------------------------------------------------------------------------------------
const acDisplay = document.getElementById("acAnswerBlock")
const acCalc = document.getElementById("acSubmit")

function toRadians(angle) { //forgetting that i had to convert to radians has caused me days of pain
    return angle * (Math.PI/180);
}

function ambiguousCase(a, b, A, h){
    console.log(`${h} = ${b}*Math.sin(${A})`)
    console.log(`a:${a}, b:${b}, A:${A}, h:${h}`)
    if (A < 90){
        console.log("A < 90")
        if ((a > h) && (a < b)) {
            let triangle = "Two Triangles"
            console.log(`Two Triangles. ${h} < ${a} < ${b}`)
            acDisplay.value = triangle
        } else if (a == h){
            let triangle = "Right Triangle"
            console.log(`Right Triangle. ${h} == ${a}`)
            acDisplay.value = triangle
        } else if (a < h){
            let triangle = "No Triangle"
            console.log(`No Triangles. ${h} < ${a}`)
            acDisplay.value = triangle
        } else {
            let triangle = "One Triangle"
            console.log(`One Triangle. ${a} > ${b}`)
            acDisplay.value = triangle
        }
    } else {
        console.log("A !< 90")
        if ((a < b) || (a == h)){
            let triangle = "No Triangles"
            console.log("No Triangle")
            acDisplay.value = triangle
        } else if (a > b){
            let triangle = "One Triangle"
            console.log("One Triangle")
            acDisplay.value = triangle
        }
    }
}

acCalc.addEventListener("click", () => {
    // clearFields(true, false)
    let a2 = document.getElementById("acA").value
    let b2 = document.getElementById("acB").value
    let A = toRadians(document.getElementById("acAngleA").value)
    let h = Math.round(b2*Math.sin(A))
    ambiguousCase(a2, b2, A, h);
});
/*----------------------------------------------------------------------*/
/*Newtons Method */
/*----------------------------------------------------------------------*/
/*Polynomial Formula */


function polynomial(){
    let coefficients = document.getElementById("pfC").value
    let Exponents = document.getElementById("pfE").value
    let A = document.getElementById("pfX").value
}