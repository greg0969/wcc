class Fichetechnique {
	constructor(data) {
		this.name = data.name;
        this.image = data.image ;
        this.criteres = data.criteres ;
        this.description = data.description ;
}
createhtml() {
	return `
        <h1>${this.name}</h1>
        <div class="gallerie">
            <img src="public/images/campingcars/Miniatures/${this.image}" alt="">
        </div>
        <div class="ficheTechnique">
            <p class="ficheTechnique__critères">${this.criteres}</p>
            <p class="ficheTechnique__description">${this.description}</p>
        </div>
	`
	}
}