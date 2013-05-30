var radar_data = [
{"name":"Polygot Programming", "pc":{"r":250,"t":120},"movement":"c"},    
{"name":"Automation of technical tests", "pc":{"r":180,"t":155},"movement":"c"},    
{"name":"Continuous deployment", "pc":{"r":180,"t":100},"movement":"c"},   

{"name":"Github", "pc":{"r":280,"t":70},"movement":"c"},  
{"name":"Git", "pc":{"r":70,"t":15},"movement":"c"},   
{"name":"Gradle", "pc":{"r":130,"t":45},"movement":"c"},   

{"name":"Java language end of life", "pc":{"r":290,"t":355},"movement":"c"},   
{"name":"Scala", "pc":{"r":290,"t":320},"movement":"c"},   
{"name":"Play!", "pc":{"r":290,"t":310},"movement":"c"},   

{"name":"JVM as platform", "pc":{"r":90,"t":265},"movement":"c"},   
];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":3},
{"name":"Tools", "start":3, "end":6},
{"name":"Platforms", "start":9, "end":10},
{"name":"Languages", "start":6, "end":9}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "Narmnevis Technology Radar - 2013 Q1";