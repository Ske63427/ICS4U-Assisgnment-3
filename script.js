function clearFields(hfFields, acFields, pfFields){ //function doesnt work :(
    if (hfFields){
        document.getElementById("hfA").value = "0"
        document.getElementById("hfB").value = "0"
        document.getElementById("hfC").value = "0"
        document.getElementById("hfAnswerBlock").value = "0"
    }
    if (acFields){
        document.getElementById("acA").value = "0"
        document.getElementById("acB").value = "0"
        document.getElementById("acAngleA").value = "0"
        document.getElementById("acAnswerBlock").value = "0"
    }
    if (pfFields){
        document.getElementById("pfC").value = "0"
        document.getElementById("pfE").value = "0"
        document.getElementById("pfX").value = "0"
        document.getElementById("pfFunction").value = "0"
        document.getElementById("pfEval").value = "0"
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
    clearFields(false, true, true);
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
    clearFields(true, false, true)
    let a2 = document.getElementById("acA").value
    let b2 = document.getElementById("acB").value
    let A = toRadians(document.getElementById("acAngleA").value)
    let h = Math.round(b2*Math.sin(A))
    ambiguousCase(a2, b2, A, h);
});
/*----------------------------------------------------------------------*/
const nmFunction = document.getElementById("nmF")
const root = document.getElementById("nmAnswerBlock")
let x0 = document.getElementById("nmG")
// let x1 = x0 - (f(0) / f'prime'(0))

// while (Math.abs(x1-x0) > 0.001){
    
// }

/*----------------------------------------------------------------------*/
const pCalc = document.getElementById("pfSubmit")
const pFunc = document.getElementById("pfFunction")
const pfEval = document.getElementById("pfEval")

function polynomial(arr1, arr2, x){
    a = arr1[0]
    b = arr1[1]
    c = arr1[2]
    exp1 = arr2[0]
    exp2 = arr2[1]
    exp3 = arr2[2]
    evaluation = (a*(x**exp1))+(b*(x**exp2))+c
    console.log(evaluation)
    pfEval.value = evaluation

    if (arr1[0] == 1){
        pFunc.value = `x^${exp1}+${b}x^${exp2}+${c}`
        console.log("a == 1")
    } else if (arr1[1] == 1){
        pFunc.value = `${a}x^${exp1}+x^${exp2}+${c}`
        console.log("b == 1")
    } else if (arr1[2] == 0){
        pFunc.value = `${a}x^${exp1}+${b}x^${exp2}`
        console.log("c == 0")
    }
}

pCalc.addEventListener("click", () => {
    console.log("Clicked")
    let coefficientString = document.getElementById("pfC").value
    const coefficientArray = coefficientString.split(" ")

    let exponentString = document.getElementById("pfE").value
    const exponentArray = exponentString.split(" ")

    let x = document.getElementById("pfX").value

    clearFields(true, true, false)
    polynomial(coefficientArray, exponentArray, x);
});