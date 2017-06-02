// A shoe ecommerce shop

// Constructor for each shoe thumbnail
function Shoe(pic, name, price, descr, rating, reviews){
	this.pic = pic;
	this.name = name;
	this.price = price;
	this.descr = descr;
	this.rating = rating;
	this.reviews = reviews;
}

// Array for storing all the shoes
var shoes = [];

// Create each shoe for sale
var mulesandal = new Shoe(
	'../images/mulesandal.jpg',
	'Greer Mule Sandal',
	'$118.50',
	'COLOR: warm nutmeg',
	4,
	0
	);

shoes.push(mulesandal);

// Create each thumbnail component using bootstrap
for(var i = 0; i < shoes.length; i++) {
	var wrapper = document.createElement('div');
	wrapper.className = 'row';
	wrapper.appendChild(innerdiv);

	var innerdiv = document.createElement('div');
	innerdiv.className = 'col-sm-6  col-md-4';
	innerdiv.appendChild(thumbnail);

	var thumbnail = document.createElement('div');
	thumbnail.className = 'thumbnail';

	var img = document.createElement('img');
	img.setAttribute('src', shoes[i].pic);

	var caption = document.createElement('div');
	caption.className = 'caption';
	var label = document.createElement('h2');
	var label_text = document.createTextNode(shoes[i].name);
	caption.appendChild(label);

	var descr = document.createElement('p');
	var descr_text = document.createTextNode(shoes[i].descr);

	var rating = document.createElement('i');

	var reviews = document.createElement('span');
	var reviews_text = document.createTextNode(shoes[i].reviews + ' reviews');
	reviews.appendChild(reviews_text);
}