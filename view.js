export class FirstView {

    myContainer

    handle() {
        this.myContainer = document.querySelector(".container")
    }

    displayData(info) {
        info.map((i) => {
            const myImage = document.createElement("img")
            myImage.src = i.image

            const myH2 = document.createElement("h2")
            myH2.textContent = i.title

            const myPara = document.createElement("p")
            myPara.textContent = i.description

            const myH3 = document.createElement("h3")
            myH3.textContent = Math.floor(i.price * 84)

            const myDiv = document.createElement("div")
            myDiv.setAttribute("class", "products")

            const myButton = document.createElement("button")
            myButton.textContent = "ADD TO CART"

            myDiv.append(myImage)
            myDiv.append(myH2)
            myDiv.append(myPara)
            myDiv.append(myH3)
            myDiv.append(myButton)

            this.myContainer.append(myDiv)
        })
    }
}