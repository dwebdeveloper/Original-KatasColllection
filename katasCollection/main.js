const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]

const mainElement = document.querySelector('main')

const kata1Heading = document.createElement('h1')
kata1Heading.append('Kata 1')
mainElement.append(kata1Heading)

let array1 = []
let kata1 = 1
const limit = 20
while (kata1 <= limit) {
    array1.push(kata1)
    kata1 += 1
}

mainElement.append(array1)

const kata2Heading = document.createElement('h1')
kata2Heading.append('Kata 2')
mainElement.append(kata2Heading)

let array2 = []
let kata2 = 2
while (kata2 <= 20) {
    array2.push(kata2)
    kata2 += 2
}

mainElement.append(array2)

const kata3Heading = document.createElement('h1')
kata3Heading.append('Kata 3')
mainElement.append(kata3Heading)

let array3 = []
let kata3 = 1
while (kata3 <= 20) {
    array3.push(kata3)
    kata3 += 2
}

mainElement.append(array3)

const kata4Heading = document.createElement('h1')
kata4Heading.append('Kata 4')
mainElement.append(kata4Heading)

let array4 = []
let kata4 = 5
const limit4 = 100
while (kata4 <= limit4) {
    array4.push(kata4)
    kata4 += 5
}

mainElement.append(array4)

const kata5Heading = document.createElement('h1')
kata5Heading.append('Kata 5')
mainElement.append(kata5Heading)

let array5 = []
let kata5 = 1
const limit5 = 100
while (kata5 <= limit5) {
    const isSquare = Number.isInteger(Math.sqrt(kata5));
    if (isSquare) {
        array5.push(kata5)
    }
    kata5 += 1
}

mainElement.append(array5)

const kata6Heading = document.createElement('h1')
kata6Heading.append('Kata 6')
mainElement.append(kata6Heading)

let array6 = []
let kata6 = 20
while (kata6 >= 1) {
    array6.push(kata6)
    kata6 -= 1
}

mainElement.append(array6)

const kata7Heading = document.createElement('h1')
kata7Heading.append('Kata 7')
mainElement.append(kata7Heading)

let array7 = []
let kata7 = 20
const limit7 = 2
while (kata7 >= limit7) {
    array7.push(kata7)
    kata7 -= 2
}

mainElement.append(array7)

const kata8Heading = document.createElement('h1')
kata8Heading.append('Kata 8')
mainElement.append(kata8Heading)

let array8 = []
let kata8 = 19
const limit8 = 1
while (kata8 >= limit8) {
    array8.push(kata8)
    kata8 -= 2
}

mainElement.append(array8)

const kata9Heading = document.createElement('h1')
kata9Heading.append('Kata 9')
mainElement.append(kata9Heading)

let array9 = []
let kata9 = 100
const limit9 = 5
while (kata9 >= limit9) {
    array9.push(kata9)
    kata9 -= 5
}

mainElement.append(array9)

const kata10Heading = document.createElement('h1')
kata10Heading.append('Kata 10')
mainElement.append(kata10Heading)

let array10 = []
let kata10 = 100
const limit10 = 1
while (kata10 >= limit10) {
    const isSquare = Number.isInteger(Math.sqrt(kata10));
    if (isSquare) {
        array10.push(kata10)
    }
    kata10 -= 1
}

mainElement.append(array10)

const kata11Heading = document.createElement('h1')
kata11Heading.append('kata 11')
mainElement.append(kata11Heading)

mainElement.append(sampleArray)

const kata12Heading = document.createElement('h1')
kata12Heading.append('Kata 12')
mainElement.append(kata12Heading)

let array12 = []
for (let kata12 = 0; kata12 < sampleArray.length; kata12 += 1) {
    let currentNumber12 = sampleArray[kata12]
    if (currentNumber12 % 2 === 0) {
        array12.push(currentNumber12)
    }
}

mainElement.append(array12)


const kata13Heading = document.createElement('h1')
kata13Heading.append('Kata 13')
mainElement.append(kata13Heading)

let odds = sampleArray.filter(n => n % 2)

mainElement.append(odds)


const kata14Heading = document.createElement('h1')
kata14Heading.append('Kata 14')
mainElement.append(kata14Heading)

let square = sampleArray.map(x => Math.pow(x, 2))

mainElement.append(square)


////kata 15
const kata15Heading = document.createElement('h1')
kata15Heading.append('Kata 15')
mainElement.append(kata15Heading)

let sum15 = array1.reduce(function (a, b) {
    return a + b;
}, 0);

mainElement.append(sum15)



/////kata 16
const kata16Heading = document.createElement('h1')
kata16Heading.append('kata 16')
mainElement.append(kata16Heading)

let sum16 = sampleArray.reduce(function (a, b) {
    return a + b;
}, 0);

mainElement.append(sum16)

////Kata 17
const kata17Heading = document.createElement('h1')
mainElement.append(kata17Heading)
kata17Heading.append('Kata 17')

let lowestValue = Math.min.apply(null, sampleArray)

mainElement.append(lowestValue)


/////Kata 18
const kata18Heading = document.createElement('h1')
mainElement.append(kata18Heading)
kata18Heading.append('kata 18')

let highestValue = Math.max.apply(null, sampleArray)

mainElement.append(highestValue)
