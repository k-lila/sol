import ringGenerator from "./ringgenerator.js";

function ringSpace() {
    const sunDiameter = 30
    const numRings = 150
    let _num = 0
    const diameter_list = []
    for (let i = 0; i < numRings; i++) {
        diameter_list.push(sunDiameter + (i * 3))
    }
    const ringspace = diameter_list.map((m, i) => {
        return ringGenerator(m, 2, i + 10)
    })

    return ringspace
}

export default ringSpace