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

const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")
// let a1 = Number(document.getElementById("hfA").value)
// let b1 = Number(document.getElementById("hfB").value)
// let c1 = Number(document.getElementById("hfC").value)

function heronsFormula(a, b, c){
    let hfAnswer = 0.25 * Math.sqrt((4 * a**2 * b**2)-(a**2 + b**2 - c**2)**2)
    hfDisplay.value = hfAnswer.toFixed(3)
    console.log(hfAnswer)
}

heronCalc.addEventListener("click", () => {
    // clearFields(false, true);
    heronsFormula(document.getElementById("hfA").value, document.getElementById("hfB").value, document.getElementById("hfC").value);
});

//-----------------------------------broken rn---------------------------------------------------------------------------
const acDisplay = document.getElementById("acAnswerBlock")
const acCalc = document.getElementById("acSubmit")
const possibleTriangles = ["No Triangle", "Right Triangle", "One Triangle", "Two Triangles"]

function ambiguousCase(){
    let a2 = document.getElementById("acA").value
    let b2 = document.getElementById("acB").value
    let angleA = document.getElementById("acAngleA").value
    let h = b2*Math.sin(angleA)
    console.log(`${h} = ${b2}*Math.sin(${angleA})`)
    console.log(`a:${a2}, b:${b2}, A:${angleA}, h:${h}`)

    if (angleA < 90){
        console.log("angleA < 90")
        if ((a2 > h) && (a2 < b2)) {
            let triangle = "Two Triangles"
            console.log(`Two Triangles. ${h} < ${a2} < ${b2}`)
            acDisplay.value = triangle
        } else if (a2 == h){
            let triangle = "Right Triangle"
            console.log(`Right Triangle. ${h} == ${a2}`)
            acDisplay.value = triangle
        } else if (a2 < h){
            let triangle = "No Triangle"
            console.log(`No Triangles. ${h} < ${a2}`)
            acDisplay.value = triangle
        } else {
            let triangle = "One Triangle"
            console.log(`One Triangle. ${a2} > ${b2}`)
            acDisplay.value = triangle
        }
    } else {
        console.log("angleA !< 90")
        if ((a2 < b2) || (a === h)){
            let triangle = "No Triangles"
            console.log("No Triangle")
            acDisplay.value = triangle
        } else if (a2 > b2){
            let triangle = "One Triangle"
            console.log("One Triangle")
            acDisplay.value = triangle
        }
    }
}

acCalc.addEventListener("click", () => {
    // clearFields(true, false)
    ambiguousCase();
});
/*----------------------------------------------------------------------*/
/*Newtons Method */
/*----------------------------------------------------------------------*/
/*Polynomial Formula */

function polynomial(){

}