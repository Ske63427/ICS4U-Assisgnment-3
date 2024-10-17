const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(){
    let a1 = Number(document.getElementById("hfA").value)
    let b1 = Number(document.getElementById("hfB").value)
    let c1 = Number(document.getElementById("hfC").value)
    let hfAnswer = 0.25 * Math.sqrt((4  *a**2 * b**2)-(a**2 + b**2 - c**2)**2)
    hfDisplay.value = hfAnswer
    console.log(hfAnswer)
}

heronCalc.addEventListener("click", () => {
    heronsFormula();
});

//
const acDisplay = document.getElementById("acAnswerBlock")
const acCalc = document.getElementById("acSubmit")
const possibleTriangles = ["No Triangle", "Right Triangle", "One Triangle", "Two Triangles"]

function ambiguousCase(){
    let a2 = Number(document.getElementById("acA").value)
    let b2 = Number(document.getElementById("acB").value)
    let angleA = Number(document.getElementById("acAA").value)
    let h = b2*Math.sin(a2)
    console.log(`${a2}, ${b2}, ${angleA}, ${h}`)

    // let (acDisplay.value) = 
    //     angleA < 90
    //         ? (a2 < h)
    //             ? possibleTriangles[0]
    //             : (a2 = h)
    //                 ? possibleTriangles[1]
    //                 : (a2 > b2)
    //                     ? possibleTriangles[2]
    //                     : possibleTriangles[3]
    //         : (a2 > b2)
    //             ? possibleTriangles[2]
    //             : possibleTriangles[0]


    if (angleA < 90){
        if (a < h){
            let triangle = "No Triangle"
            console.log(possibleTriangles[0])
        } else if (a = h){
            let triangle = "Right Triangle"
            console.log(possibleTriangles[1])
        } else if (a > b){
            let triangle = "One Triangle"
            console.log(possibleTriangles[2])
        } else {
            let triangle = "Two Triangles"
            console.log(possibleTriangles[3])
        }
    } else {
        if ((a < b) || (a = h)){
            let triangle = "No Triangles"
            console.log(possibleTriangles[0])
        } else if (a > b){
            let triangle = "One Triangle"
            console.log(possibleTriangles[2])
        }
    }
    //console.log(triangle)
}

acCalc.addEventListener("click", () => {
    ambiguousCase();
});
