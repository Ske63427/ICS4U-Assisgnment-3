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
/*------------------------------------------------------------------------------------------------------------------------------------------*/
const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(a, b, c) {
  let hfAnswer =
    0.25 * Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2)
  hfDisplay.value = hfAnswer.toFixed(3)
  //console.log(hfAnswer)
}

heronCalc.addEventListener("click", () => {
//   clearFields(false, true, true)
  let a1 = Number(document.getElementById("hfA").value)
  let b1 = Number(document.getElementById("hfB").value)
  let c1 = Number(document.getElementById("hfC").value)
  heronsFormula(a1, b1, c1)
})

//-----------------------------------------------------------------------------------------------------------------
const acDisplay = document.getElementById("acAnswerBlock")
const acCalc = document.getElementById("acSubmit")

function toRadians(angle) {
  //forgetting that i had to convert to radians has caused me days of pain
  //i forget when i commented this, but mr.q is explaining it now... after i finished :(
  return angle * (Math.PI / 180)
}

function ambiguousCase(a, b, A, h) {
  //console.log(`${h} = ${b}*Math.sin(${A})`)
  //console.log(`a:${a}, b:${b}, A:${A}, h:${h}`)
  if (A < 90) {
    //console.log("A < 90")
    if (a > h && a < b) {
      let triangle = "Two Triangles"
      //console.log(`Two Triangles. ${h} < ${a} < ${b}`)
      acDisplay.value = triangle
    } else if (a == h) {
      let triangle = "Right Triangle"
      //console.log(`Right Triangle. ${h} == ${a}`)
      acDisplay.value = triangle
    } else if (a < h) {
      let triangle = "No Triangle"
      //console.log(`No Triangles. ${h} < ${a}`)
      acDisplay.value = triangle
    } else {
      let triangle = "One Triangle"
      //console.log(`One Triangle. ${a} > ${b}`)
      acDisplay.value = triangle
    }
  } else {
    //console.log("A !< 90")
    if (a < b || a == b) {  //told by mr.q to change from a == h to a == b (unless i heard wrong)
      let triangle = "No Triangles"
      //console.log("No Triangle")
      acDisplay.value = triangle
    } else if (a > b) {
      let triangle = "One Triangle"
      //console.log("One Triangle")
      acDisplay.value = triangle
    }
  }
}

acCalc.addEventListener("click", () => {
//   clearFields(true, false, true)
  let a2 = document.getElementById("acA").value
  let b2 = document.getElementById("acB").value
  let A = toRadians(document.getElementById("acAngleA").value)
  let h = Math.round(b2 * Math.sin(A))
  ambiguousCase(a2, b2, A, h)
})

/* Common Functions for Newtons Method and Polynomial Function Start */


function getPolynomialValues() {
  let coefficientString = document.getElementById("pfC").value
  const coefficientArray = coefficientString.split(" ")

  let exponentString = document.getElementById("pfE").value
  const exponentArray = exponentString.split(" ")

  return [coefficientArray, exponentArray]
}
/* Common Functions for Newtons Method and Polynomial Function End*/

const calculate = document.getElementById("nmSubmit")
let x0 = document.getElementById("nmG")

function newtonsMethod() {}

calculate.addEventListener("click", () => {
  nmpv = getPolynomialValues() //Newtons Method Polynomial Values
  //                           a                x  ^        n        +             b                x  ^       n-1       +             c                x ^        n-2
  derivativeEval = (nmpv[0][0] * nmpv[1][0]) * (x ** nmpv[1][0] - 1) + (nmpv[0][1] * nmpv[1][1]) * (x ** nmpv[1][1] - 1) + (nmpv[0][2] * nmpv[1][2]) * (x ** nmpv[1][2] - 1)
})

/*----------------------------------------------------------------------*/
const pCalc = document.getElementById("pfSubmit")
const pFunc = document.getElementById("pfFunction")
const pfEval = document.getElementById("pfEval")

function polynomial(arr1, arr2, x) {
  evaluation = arr1[0] * x ** arr2[0] + arr1[1] * x ** arr2[1] + arr1[2] * x ** arr2[2]
  //console.log(evaluation)
  pfEval.value = evaluation

  if (arr1[0] == 1) {
    pFunc.value = `x^{${arr2[0]}}+${arr1[1]}x^{${arr2[1]}}+${arr1[2]}x^{${arr2[2]}}`
    //console.log("a == 1")
  } else if (arr1[1] == 1) {
    pFunc.value = `${arr1[0]}x^{${arr2[0]}}+x^{${arr2[1]}}+${arr1[2]}x^{${arr2[2]}}`
    //console.log("b == 1")
  } else if (arr1[2] == 0) {
    pFunc.value = `${arr1[0]}x^${arr2[0]}+${arr1[1]}x^${arr2[1]}`
    //console.log("c == 0")
  } else {
    pFunc.value = `${arr1[0]}x^{${arr2[0]}}+${arr1[1]}x^{${arr2[1]}}+${arr1[2]}x^{${arr2[2]}}`
  }
}

pCalc.addEventListener("click", () => {
  // //console.log("Clicked")
  polynomialValues = getPolynomialValues()
  const coefficientArray = [polynomialValues[0][0], polynomialValues[0][1], polynomialValues[0][2]]
  const exponentArray = [polynomialValues[1][0], polynomialValues[1][1], polynomialValues[1][2]]
  let x = document.getElementById("pfX").value

//   clearFields(true, true, false)
  polynomial(coefficientArray, exponentArray, x)
})
