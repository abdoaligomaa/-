let There = true
Local Scope(Three)

let One = 'One'

if (true) {
    console.log(One)
    let Two = 'Two'
    console.log(Two)

    if (true) {
        let Four = 'Four'
    }
}

if (true) {
    let Three = 'Three'
}

console.log(Two)