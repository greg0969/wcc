

// Affiche les Camping Car 

const displayCampingcar = (ArrayOfCampingcar) => {
    const main = document.querySelector(".main");
    ArrayOfCampingcar.forEach((campingcar) => {
        let campingcarModel = new Campingcar(campingcar)
        main.innerHTML += campingcarModel.createhtml()
    });
};

// Affiche la fiche technique de chaque camping car




// Filtre les camping car par tags

/*const filterTag = (arrayOfPhotographer) => {
    const tags = document.querySelectorAll(".tags");
    tags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        let currentTag = e.currentTarget.getAttribute("tag");
        const newArrayOfPhotographer = arrayOfPhotographer.filter((div) =>
          div.tags.includes(currentTag)
        );
        currentArrayOfPhotographer = [newArrayOfPhotographer];
        main.innerHTML = "" ;
        displayPhotographer(newArrayOfPhotographer);
      });
    });
  };*/

// récupérer fichier JSON


const getData = async () =>
    await fetch("../data.json")
      .then((res) => res.json())
      .catch((error) => console.log("erreur"))
      

const init = async() => {
    const data = await getData();
    displayCampingcar(data.campingcars);
    //filterTag(data.campingcars);
}
init();
