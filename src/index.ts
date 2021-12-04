import { randomInt } from "crypto"

console.log("Hello Typescript!")

let a = 1 + 2
let b = a + 3
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4

let e = randomInt(1, 6)