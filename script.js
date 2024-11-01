const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(a, b, c) {
  let hfAnswer =
    0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2)
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
  let x0 = document.getElementById("nmG").value //i forgot to add ".value" and spent a little under an hour beating my head against my desk
  rootApprox = Math.round(newtonsMethod(getPolynomialValues(), x0))
})

function newtonsMethod(values, x0) {
  evaluation = evaluatePolynomial(values, x0)
  derivativeEval =
    values[1][0] * values[0][0] * x0 ** --values[1][0] +
    values[1][1] * values[0][1] * x0 ** --values[1][1] +
    values[1][2] * values[0][2] * x0 ** --values[1][2];
  rootApprox.value = x0 - evaluation / derivativeEval
}
/*---------------------------------------------------------Polynomial Methods for Newtons Method and Polynomial Function-------------------------------------------------------------*/
function getPolynomialValues() {
  const coefficientArray = document.getElementById("pfC").value.split(" ")
  const exponentArray = document.getElementById("pfE").value.split(" ")
  return [[...coefficientArray], [...exponentArray]]
}

function evaluatePolynomial(values, x) {
  return values[0][0] * x ** values[1][0] + 
         values[0][1] * x ** values[1][1] + 
         values[0][2] * x ** values[1][2];
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function polynomial(values, x) {
  document.getElementById("pfEval").value = evaluatePolynomial(values, x)
  document.getElementById("pfFunction").value = `${values[0][0]}x^{${values[1][0]}} + ${values[0][1]}x^{${values[1][1]}} + ${values[0][2]}x^{${values[1][2]}}`
}

document.getElementById("pfSubmit").addEventListener("click", () => {
  polynomial(getPolynomialValues(), document.getElementById("pfX").value)
})
