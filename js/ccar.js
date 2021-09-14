class Campingcar {
    constructor(data) {
        this.image = data.image ;
        this.name = data.name ;
        this.localisation = data.localisation ;
        this.annee = data.annee ;
        this.kilometrage = data.kilometrage ;
        this.price = data.price ;
        this.tags = data.tags ;
    }
    createhtml() {
        return `
        <figure class="card" onclick="displayFichetechnique()">
        <div class="card__img">
        <img src="./public/images/campingcars/miniatures/${this.image}" alt="">
          <h2>${this.name}</h2>
        </div>
        <figcaption class="card__content">
          <h3 class="cardTitle">${this.localisation}, ${this.annee}, ${this.kilometrage}km</h3>
          <p class="card__content__price">${this.price}€</p>
        <div class="card__content__tag tag-style">
          ${this.tags}
        </div>
        </figcaption>
        </figure>
        
        `
    }
}


