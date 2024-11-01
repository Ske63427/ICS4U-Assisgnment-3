const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(a, b, c) {
  let hfAnswer =
    0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2);
  hfDisplay.value = hfAnswer.toFixed(3)
}

heronCalc.addEventListener("click", () => {
  let a1 = Number(document.getElementById("hfA").value)
  let b1 = Number(document.getElementById("hfB").value)
  let c1 = Number(document.getElementById("hfC").value)
  heronsFormula(a1, b1, c1)
})

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const acDisplay = document.getElementById("acAnswerBlock")
const acCalc = document.getElementById("acSubmit")

let triangle
function ambiguousCase(a, b, A, h) {
  if (A < 90) {
    if (a > h && a < b) triangle = "Two Triangles"
    else if (a == h) triangle = "Right Triangle"
    else if (a < h) triangle = "No Triangle"
    else triangle = "One Triangle"
  } else {
    //told by mr.q to change from a == h to a == b (unless i heard wrong)
    if (a < b || a == b) triangle = "No Triangles"
    else if (a > b) triangle = "One Triangle"
  }
  acDisplay.value = triangle
}

acCalc.addEventListener("click", () => {
  let a2 = document.getElementById("acA").value
  let b2 = document.getElementById("acB").value
  let A = document.getElementById("acAngleA").value * (Math.PI / 180)
  //forgetting that i had to convert to radians has caused me days of pain...
  //i forget when i commented this(^^^), but mr.q is explaining it now... after i finished :(
  let h = Math.round(b2 * Math.sin(A))
  ambiguousCase(a2, b2, A, h)
})
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/










































































const nmSubmit = document.getElementById("nmSubmit")
const rootApprox = document.getElementById("nmAnswerBlock")

nmSubmit.addEventListener("click", () => {
  rootApprox = Math.round(newtonsMethod(getPolynomialValues(), document.getElementById("nmG").value))
  //i forgot to add ".value" and spent a little under an hour beating my head against my desk
})

function newtonsMethod(values, x0) {
  let x1
  evaluation = evaluatePolynomial(values, x0)
  derivativeEval = 0
  for (i = 0; i < values[0].length; i++) derivativeEval += values[1][i] * values[0][i] ** --values[1][i];
  x1 = x0 - evaluation / derivativeEval
  while (Math.abs(x0-x1) > 0.001){
    evaluation = evaluatePolynomial(values, x0)
    derivativeEval = 0
    for (i = 0; i < values[0].length; i++) derivativeEval += values[1][i] * values[0][i] ** --values[1][i];
    x1 = x0 - evaluation / derivativeEval
  }
  rootApprox.value = x1
  
}
/*---------------------------------------------------------Polynomial Methods for Newtons Method and Polynomial Function-------------------------------------------------------------*/
function getPolynomialValues() {
  const coefficientArray = document.getElementById("pfC").value.split(" ")
  const exponentArray = document.getElementById("pfE").value.split(" ")
  return [[...coefficientArray], [...exponentArray]]
}

function evaluatePolynomial(values, x) {
  let polyEval = 0
  // console.log(values[0].length)
  // console.log(`x: ${x}`)
  for (i = 0; i < values[0].length; i++){
    polyEval += values[0][i] * x ** values[1][i]
    // console.log(`${i}: ${values[0][i]} * x ** ${values[1][i]} = ${polyEval}`)
  }
  // console.log(polyEval)
  return polyEval
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function polynomial(values, x) {
  let xyz = ``
  for (i = 0; i < values[1].length; i++){
    xyz += `(${values[0][i]})x^{${values[1][i]}}`
    if (values[1][i] != 0) xyz += ` + `
  }
  document.getElementById("pfEval").value = evaluatePolynomial(values, x)
  document.getElementById("pfFunction").value = xyz
}

document.getElementById("pfSubmit").addEventListener("click", () => {
  polynomial(getPolynomialValues(), document.getElementById("pfX").value)
})
