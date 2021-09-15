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
            <p class="ficheTechnique__critères">Année-modèle : ${this.criteres[0]}, 
            Mise en circulation : ${this.criteres[1]}, Kilométrage : ${this.criteres[2]}, Référence : ${this.criteres[3]}
            </p>
            <div>
            <p class="ficheTechnique__description">${this.description[0]}</p>
            <p class="ficheTechnique__description">${this.description[1]}</p>
            <p class="ficheTechnique__description">${this.description[2]}</p>
            <p class="ficheTechnique__description">${this.description[3]}</p>
            <p class="ficheTechnique__description">${this.description[4]}</p>
            <p class="ficheTechnique__description">${this.description[5]}</p>
            </div>     
        </div>
        <button class="acheter" role="acheter">Je suis intéressé</button>
	`
	}
}