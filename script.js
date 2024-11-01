function clearFields(hfFields, acFields, pfFields) {
  if (hfFields) {
    document.getElementById("hfA").value = "0"
    document.getElementById("hfB").value = "0"
    document.getElementById("hfC").value = "0"
    document.getElementById("hfAnswerBlock").value = "0"
  }
  if (acFields) {
    document.getElementById("acA").value = "0"
    document.getElementById("acB").value = "0"
    document.getElementById("acAngleA").value = "0"
    document.getElementById("acAnswerBlock").value = "0"
  }
  if (pfFields) {
    document.getElementById("pfC").value = "0"
    document.getElementById("pfE").value = "0"
    document.getElementById("pfX").value = "0"
    document.getElementById("pfFunction").value = "0"
    document.getElementById("pfEval").value = "0"
  }
}
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(a, b, c) {
  let hfAnswer =
    0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2)
  hfDisplay.value = hfAnswer.toFixed(3)
  //console.log(hfAnswer)
}

heronCalc.addEventListener("click", () => {
    clearFields(false, true, true);
    let a1 = Number(document.getElementById("hfA").value)
    let b1 = Number(document.getElementById("hfB").value)
    let c1 = Number(document.getElementById("hfC").value)
    heronsFormula(a1, b1, c1);
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const acDisplay = document.getElementById("acAnswerBlock")
const acCalc = document.getElementById("acSubmit")

function toRadians(angle) {
  //forgetting that i had to convert to radians has caused me days of pain...
  //i forget when i commented this, but mr.q is explaining it now... after i finished :(
  return angle * (Math.PI / 180)
}

function ambiguousCase(a, b, A, h) {

  if (A < 90) {
    if (a > h && a < b) {
      let triangle = "Two Triangles"
      acDisplay.value = triangle
    } else if (a == h) {
      let triangle = "Right Triangle"
      acDisplay.value = triangle
    } else if (a < h) {
      let triangle = "No Triangle"
      acDisplay.value = triangle
    } else {
      let triangle = "One Triangle"
      acDisplay.value = triangle
    }
  } else {
    if (a < b || a == b) {  //told by mr.q to change from a == h to a == b (unless i heard wrong)
      let triangle = "No Triangles"
      acDisplay.value = triangle
    } else if (a > b) {
      let triangle = "One Triangle"
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
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const nmSubmit = document.getElementById("nmSubmit")
const rootApprox = document.getElementById("nmAnswerBlock")

nmSubmit.addEventListener("click", ()=>{
    let x0 = document.getElementById("nmG").value//i forgot to add ".value" and spent a little under an hour beating my head against my desk
    // console.log(`x0 1: ${x0}`)
    // console.log(`Values 1: ${getPolynomialValues()}`)
    rootApprox = Math.round(newtonsMethod(getPolynomialValues(), x0))
    console.log(`Root Approximation: ${rootApprox}`)
    
})

function newtonsMethod(values, x0){
    // console.log(`Values 2: ${values}`)
    // console.log(`x0 2: ${x0}`)
    evaluation = evaluatePolynomial(values, x0) //problem
    console.log(`Evaluation: ${evaluation}`)
    derivativeEval = ((values[1][0] * values[0][0]) * x0 ** (--values[1][0])) + ((values[1][1] * values[0][1]) * x0 ** (--values[1][1]))+((values[1][2] * values[0][2]) * x0 ** (--values[1][2]))
    console.log(`Derivative Evaluation: ${derivativeEval}`)
    x1 = x0 - (evaluation / derivativeEval)
    console.log(`x1: ${x1}`)
    rootApprox.value = x1
}
/*---------------------------------------------------------Polynomial Methods for Newtons Method and Polynomial Function-------------------------------------------------------------*/

function getPolynomialValues(){
    let coefficientString = document.getElementById("pfC").value
    const coefficientArray = coefficientString.split(" ")

    let exponentString = document.getElementById("pfE").value
    const exponentArray = exponentString.split(" ")

    return [[...coefficientArray], [...exponentArray]]
}

function evaluatePolynomial(values, x){
    a = values[0][0]
    b = values[0][1]
    c = values[0][2]
    exp1 = values[1][0]
    exp2 = values[1][1]
    exp3 = values[1][2]
    evaluation = (a*(x**exp1))+(b*(x**exp2))+(c*(x**exp3))
    // console.log(`${a}*(${x}**${exp1}))+(${b}*(${x}**${exp2}))+(${c}*(${x}**${exp3})`)
    return evaluation
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const pCalc = document.getElementById("pfSubmit")
const pFunc = document.getElementById("pfFunction")
const pfEval = document.getElementById("pfEval")

function polynomial(values, x){
    result = evaluatePolynomial(values, x)
    console.log(evaluation)
    pfEval.value = evaluation
    pFunc.value = `${values[0][0]}x^${values[1][0]}+${values[0][1]}x^${values[1][1]}+${values[0][2]}x^${values[1][2]}`
}

pCalc.addEventListener("click", () => {
    polynomialValues = getPolynomialValues()
    let x = document.getElementById("pfX").value
    clearFields(true, true, false)
    polynomial(polynomialValues, x);
});