let city1 = prompt('Where are you?: ');
let city2 = prompt('Where are you going?: ');
let mesafe = prompt('Enter distance: ');
let suret = prompt('Enter speed: ');

let vaxt = mesafe/suret;

let netice = city1 + " sheherinden " + city2 + " sheherine mesafe "+ mesafe + " km olarsa ve biz " + suret + " km/saata suretle hereket etmishik.. O zaman biz " + vaxt + " saata " + city2 + " sheherine catariq.";

document.getElementById('ayaz').innerHTML = netice;