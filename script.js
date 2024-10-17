function clearFields(hfFields, acFields){
    if (hfFields){
        document.getElementById("hfA").value = " "
        document.getElementById("hfB").value = " "
        document.getElementById("hfC").value = " "
        document.getElementById("hfAnswerBlock").value = " "
    }
    if (acFields){
        document.getElementById("acA").value = " "
        document.getElementById("acB").value = " "
        document.getElementById("acAA").value = " "
    }
}

const heronCalc = document.getElementById("hfSubmit")
const hfDisplay = document.getElementById("hfAnswerBlock")

function heronsFormula(){
    let a1 = Number(document.getElementById("hfA").value)
    let b1 = Number(document.getElementById("hfB").value)
    let c1 = Number(document.getElementById("hfC").value)
    let hfAnswer = 0.25 * Math.sqrt((4 * a1**2 * b1**2)-(a1**2 + b1**2 - c1**2)**2)
    hfDisplay.value = hfAnswer.toFixed(3)
    console.log(hfAnswer)
}

heronCalc.addEventListener("click", () => {
    clearFields(false, true)
    heronsFormula();
});

//--------------------------------------------------------------------------------------------------------------------------------
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
    //             ? "No Triangle"
    //             : (a2 = h)
    //                 ? "Right Triangle"
    //                 : (a2 > b2)
    //                     ? "One Triangle"
    //                     : "Two Triangles"
    //         : (a2 > b2)
    //             ? "One Triangle"
    //             : "No Triangle"


    if (angleA < 90){
        if (a2 < h){
            let triangle = "No Triangle"
            console.log("No Triangle")
            acDisplay.value = triangle
        } else if (a2 = h){
            let triangle = "Right Triangle"
            console.log("Right Triangle")
            acDisplay.value = triangle
        } else if (a2 > b2){
            let triangle = "One Triangle"
            console.log("One Triangle")
            acDisplay.value = triangle
        } else {
            let triangle = "Two Triangles"
            console.log("Two Triangles")
            acDisplay.value = triangle
        }
    } else {
        if ((a2 < b2) || (a = h)){
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
    clearFields(true, false)
    ambiguousCase();
});
