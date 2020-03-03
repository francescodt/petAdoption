'use strict';
console.log('This is working perfectly. Pet Adoption is a go.');


var petOne = {

    name: 'Midnight',
    breed: 'cat',
    age: 0,
    imageName: 'whateverIWantNeedToChangeLookOverHereBeforeYouSubmitSomethingYouDolt',
    interests: ['Knocking items off counters', 'Drugs', 'Judging you'],
    isGoodWithKids: true,
    isGoodWithDogs: false,
    isGoodWithCats: false,
    setAge: function() {
        this.age = randomAge(3, 12) + 'Months';

    }
}

petOne.setAge();

var petTwo = {
    
    name: 'Tiny',
    breed: 'Lion',
    age: 8,
    imageName: 'kingOfTheJungle',
    interests: ['Close encounters', 'Slabs of meat', 'Unexpected guests'],
    isGoodWithKids: false,
    isGoodWithDogs: false,
    isGoodWithCats: true,
    setAge: function() {
        this.age = randomAge(3, 12) + 'Months';

    }
};

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

petOne.isFixed = true;
petTwo.isFixed = false;


//Create DOM elements and render it in html

//Create a new element the parent element of the hild element that we will create to render the pet article in the HTML

    var parentElement = document.getElementById('kittenProfiles');

//Create Article
    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = petOne.name;
    article.appendChild(h2);

    var petParagraph = document.createElement('p');
    petParagraph.textContent = 'Cats are adorable, good for the environment and this cat is ' + petOne.age + ' years old.';
    article.appendChild(petParagraph);

    var petUL = document.createElement('ul');
    article.appendChild(petUL);

    for (var i = 0; i < petOne.interests; i++) {
        var petLI = document.createElement('li');
        petLI.textContent = petOne.interests[i];
        petUL.appendChild(petLI);

}


var petImage = document.createElement('img');
   
    petImage.setAttribute('src', 'images/' + petOne.imageName + '.jpg');
    petImage.setAttribute('alt', 'Cute Kitty cat meow.');
    article.appendChild(petImage);





//add image

//set some values for display purposes

