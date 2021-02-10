var FriendsNames = ['Maliek','Chris','Kenny','Dj','Ant']
var locations = ['Comptom','Nashville', 'Vice City','Mars','Germany','Dubai','Coachella','Kings Canyon','video shoot','spot, literally right down the street' ]
var weapons = ['Headphones','bottle','knife','gun','guitar','EXACT SAME GUN that BOB shot the sheiriff with','Lizards tale','AutoGraph Copy of Drakes Album','Stick','pipe','lamp','phone','phone book','Jar','car','bar','hammer','Hammer that thor carries','Bones']

function Accusation() {

for (var i = 0; i<FriendsNames.length; i++){

    for(var j = 0; j<locations.length; j++ )

    for(var k = 0; k<weapons.length; k++)

    
    
    
    h3.addEventListener('click', function () {
       alert("I accuse" + FriendsNames[i] + 'with the' + weapons[k] + 'in' + locations[j])    
        
    })
    
}

};

