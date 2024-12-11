import buildBodyRing from "./buildbodyring.js";
import exponentialNum from "../utils/exponentialnum.js";

function generateBody(numRings=100, centerDiameter=250, divisor=0.2) {
    const diameter_list = []
    for (let i = 0; i < numRings; i++) {
        diameter_list.push(centerDiameter + (i * 10))
    }
    let _divisor = 2
    const body = diameter_list.map((m, i) => {
        if (i % 2 == 0) {
            _divisor += divisor
        }
        return buildBodyRing(m, 11, Math.floor(_divisor), exponentialNum(i, numRings, diameter_list.length, 0.005) + 1)
    })
    return body
}

export default generateBody