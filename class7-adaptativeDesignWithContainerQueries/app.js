class ProductCard {
  constructor({title, description, image}) {
    //Creating article element
    this.element = document.createElement('div')
    this.element.classList.add('tarjeta')
    //Subnode: image.
    const img = document.createElement('img')
    img.src = image
    img.alt = title
    //Subnode: Tittle.
    const h3 = document.createElement('h3')
    h3.textContent = title
    //Subnode: Description
    const paragraph = document.createElement('p')
    paragraph.textContent = description
    //Subnode: Button.
    const buyButton = document.createElement('button')
    buyButton.textContent = 'Comprar'
    //Esambling node Product Card
    this.element.append(img, h3, paragraph, buyButton)
  }
  get node() {return this.element}
}

