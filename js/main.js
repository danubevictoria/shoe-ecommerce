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
	'images/mulesandal.jpg',
	'Greer Mule Sandal',
	'$118.50',
	'COLOR: warm nutmeg',
	4,
	0
	);

var alicesandal = new Shoe(
	'images/alicesandal.jpg',
	'Alice Sandal',
	'$118.50',
	'COLOR: otter suede',
	4,
	0
	);

var talisabucklesandal = new Shoe(
	'images/talisabucklesandal.jpg',
	'Talisa Buckle Sandal',
	'$124.50',
	'COLOR: english saddle',
	4,
	0
	);

shoes.push(mulesandal);
shoes.push(alicesandal);
shoes.push(talisabucklesandal);

// Create each thumbnail component using bootstrap
for(var i = 0; i < shoes.length; i++) {
	var wrapper = document.createElement('div');
	// wrapper.className = 'row';
	
	var innerdiv = document.createElement('div');
	innerdiv.className = 'col-sm-4  col-md-2';
	
	var thumbnail = document.createElement('div');
	thumbnail.className = 'thumbnail';

	var img = document.createElement('img');
	img.setAttribute('src', shoes[i].pic);

	var caption = document.createElement('div');
	caption.className = 'caption';

	var label = document.createElement('h3');
	var label_text = document.createTextNode(shoes[i].name);
	label.appendChild(label_text);

	var descr = document.createElement('p');
	var descr_text = document.createTextNode(shoes[i].descr);
	descr.appendChild(descr_text);

	var rating = document.createElement('i');

	var reviews = document.createElement('span');
	var reviews_text = document.createTextNode(shoes[i].reviews + ' reviews');
	reviews.appendChild(reviews_text);

	var button_div = document.createElement('div');

	var buy = document.createElement('button');
	var button_text = document.createTextNode('Buy Now');
	buy.appendChild(button_text);
	buy.className = 'btn btn-default'

	wrapper.appendChild(innerdiv);
	innerdiv.appendChild(thumbnail);
	thumbnail.appendChild(img);
	thumbnail.appendChild(caption);
	caption.appendChild(label);
	caption.appendChild(descr);
	caption.appendChild(rating);
	caption.appendChild(reviews);
	button_div.appendChild(buy);
	caption.appendChild(button_div);
	document.getElementById('body').appendChild(wrapper);
}