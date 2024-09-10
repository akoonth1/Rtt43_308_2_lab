




console.log('Hello World!');


console.log(Math.PI);

let r = 5;

let area = Math.PI * r * r;

let population = 20;

let growth_rate = 2;

let min_space = .8 //meters squared

console.log('The area of the circle is ' + area + ' meters squared.');

let intial_area = population * min_space;

console.log('The initial area is ' + intial_area + ' meters squared.');
 

let area_left = area - intial_area;

console.log('The area left is ' + area_left + ' meters squared.');

let max_population = area / min_space;
let max_change_population = max_population - population;

console.log('The max population is ' + max_population + ' trees.');
console.log('The max change in population is ' + max_change_population + ' trees.');

let change_population = growth_rate * population;

let weeks = 1

let growth_value = growth_rate ** (weeks - 1);

let current_population = population * growth_value;

console.log('The current population is ' + current_population + ' trees.');

weeks = 2

growth_value = growth_rate ** (weeks - 1);

current_population = population * growth_value;

console.log('The current population is ' + current_population + ' trees.');

weeks = 3

growth_value = growth_rate ** (weeks - 1);

current_population = population * growth_value;

console.log('The current population is ' + current_population + ' trees.');

weeks = 4

growth_value = growth_rate ** (weeks - 1);

current_population = population * growth_value;

console.log('The current population is ' + current_population + ' trees.');

let weeks_till_full = Math.log(5)/Math.log(2) + 1 ;

weeks = weeks_till_full

growth_value = growth_rate ** (weeks - 1);

current_population = population * growth_value;

console.log('The current population is ' + current_population + ' trees.');


//Part 2   100 trees and 10 weeks

population = 100;
weeks = 10;

growth_value = growth_rate ** (weeks - 1);

current_population = population * growth_value;

console.log('The current population is ' + current_population + ' trees.');

area_needed=current_population*min_space;

console.log('The area needed is ' + area_needed + ' meters squared.');

new_radius = Math.sqrt(area_needed/Math.PI);

console.log('The new radius is ' + new_radius + ' meters.');



//Part 3

try {
    if (population > max_population) {
        throw 'The population is greater than the max population.';
    }
    
} catch (error) {
    console.log('There was an error '+ error);
    
}
finally {
    console.log('The program has ended.');
}
