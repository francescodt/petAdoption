'use strict';
console.log('This is working perfectly. Pet Adoption is a go.');


// var petOne = {

//     name: 'Midnight',
//     breed: 'cat',
//     age: 0,
//     imageName: 'whateverIWantNeedToChangeLookOverHereBeforeYouSubmitSomethingYouDolt',
//     interests: ['Knocking items off counters', 'Drugs', 'Judging you'],
//     isGoodWithKids: true,
//     isGoodWithDogs: false,
//     isGoodWithCats: false,
//     setAge: function() {
//         this.age = randomAge(3, 12) + 'Months';

//     }
// }

// petOne.setAge();

// var petTwo = {

//     name: 'Tiny',
//     breed: 'Lion',
//     age: 8,
//     imageName: 'kingOfTheJungle',
//     interests: ['Close encounters', 'Slabs of meat', 'Unexpected guests'],
//     isGoodWithKids: false,
//     isGoodWithDogs: false,
//     isGoodWithCats: true,
//     setAge: function() {
//         this.age = randomAge(3, 12) + 'Months';

//     }
// };

// function randomAge(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

// petOne.isFixed = true;
// petTwo.isFixed = false;


// //Create DOM elements and render it in html

// //Create a new element the parent element of the hild element that we will create to render the pet article in the HTML

//     var parentElement = document.getElementById('kittenProfiles');

// //Create Article
//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = petOne.name;
//     article.appendChild(h2);

//     var petParagraph = document.createElement('p');
//     petParagraph.textContent = 'Cats are adorable, good for the environment and this cat is ' + petOne.age + ' years old.';
//     article.appendChild(petParagraph);

//     var petUL = document.createElement('ul');
//     article.appendChild(petUL);

//     for (var i = 0; i < petOne.interests; i++) {
//         var petLI = document.createElement('li');
//         petLI.textContent = petOne.interests[i];
//         petUL.appendChild(petLI);

// }


// var petImage = document.createElement('img');

//     petImage.setAttribute('src', 'images/' + petOne.imageName + '.jpg');
//     petImage.setAttribute('alt', 'Cute Kitty cat meow.');
//     article.appendChild(petImage);





//add image

//set some values for display purposes



// 3/3/2020

function Pet(name, breed, imageName, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats) {
    this.name = name;
    this.breed = breed;
    this.age = this.setAge();
    this.imageName = imageName;
    this.interests = interests;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithCats = isGoodWithCats;

}

//Pet.prototype.functionName = function(any, parameters, can, go, here)
// Now, any pet created with the Pet constructor will be able to call this method

Pet.prototype.setAge = function () {
    this.age = randomAge(3, 12) + ' months';
};

function randomAge(min, max) {
    return Math.floor(Math.Random() * (max - min + 1) + min);
}


Pet.prototype.getInterests = function () {
    var randomIndex = Math.floor(Math.random() * this.interests.length);
    return this.interests[randomIndex];
}

// Create some DOm elements and then render them to the index.
Pet.prototype.render = function () {

    //Grab the parent Element
    var parentElement = document.getElementById('kittenProfiles');
    //create child elements, article, h2, p, ul, li, interests, and image

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.append(h2);

    var petParagraph = document.createElement('p');
    petParagraph.textContent = `${this.name} is adorable and is ${this.age} old.`;
    article.appendChild(petParagraph);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (var i = 0; i < this.interests.length; i++) {

        var li = document.createElement('li');
        li.textContent = this.interests[i];
        ul.appendChild(li);
    }

    var img = document.createElement('img');
    img.setAttribute('src', 'images/' + this.imageName + '.jpeg');
    img.setAttribute('alt', 'Adopt ' + this.name + ' now.');

};

var firstPet = new Pet('Nova', 'Lab', 'labradordog', ['toys', 'Blue eyes', 'Good girl'], true, true, true);

var secondPet = new Pet ('Tiger', 'Tiger', 'diabloBlanco', ['inquistive', 'hungry', 'attention-seeking'], false, false, false);

var thirdPet = new Pet ( 'Iggy', 'iguana', 'imageNamer', ['hot heat', 'small insects', 'dragon content'], true, true, true);

var adoptPet = [firstPet];

// loop through the object to show some information on the page.
for (var i = 0; i < adoptPet.length; i++) {
    adoptPet[i].render();
}
