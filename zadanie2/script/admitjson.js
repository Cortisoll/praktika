import {generator} from './generator.js'

const admitjson = async() => {
    let jsonfile = await fetch('../data/form-test-1.json')
    let jsonfileclean = await jsonfile.json()
    console.log(jsonfileclean)
    let block = document.getElementById('123')
    block.innerHTML = generator(jsonfileclean)

}
export {
    admitjson
}

