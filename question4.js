//JavaScript program to find the types of a given angle

let angles = [45, 95, 89, 150];
const findAngle = () => {
    for (let i = 0; i <= angles.length; i++) {
        if (angles[i] > 0 && angles[i] < 90) {
            console.log("Acute angle");
        } else if (angles[i] === 90) {
            console.log("Right angle");
        } else if (angles[i] > 90 && angles[i] < 180) {
            console.log("Obtuse angle");
        } else if (angles[i] === 180) {
            console.log("Straight angle");
        } else if (angles[i] > 180 && angles[i] < 360) {
            console.log("Reflex angle");
        } else {
            console.log("Complete angle")
        }
    }
}

findAngle();