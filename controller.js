import { readTheData } from "./model.js"
import { FirstView } from "./view.js"



async function getProducts() {

    // model.js = readTheData()
    const result = await readTheData()

    // view.js
    const view = new FirstView()
    view.handle()
    view.displayData(result)
}

getProducts()