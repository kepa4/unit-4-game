$(document).ready(function() {	
	var heroChosen = false;
	var heros = { 
		slark: {
			name: 'Slark',
			image: '../assets/images/slark.png',
			health: 110,
			uniqueAttack() { 	
				return (Math.floor(Math.random()*20) + 10);
			}
		},
		tresdin: {
			name: 'Legion_Commander',
			image: '../assets/images/tresdin.png',
			health: 130,
			uniqueAttack() { 	 
				return (Math.floor(Math.random()*15)+ 5) 	
			}
		},
		carl: {
			name: 'Invoker',
			image: '../assets/images/carl.png',
			health: 80,
			uniqueAttack() { 	
				return (Math.floor(Math.random()*40) + 1)	
			}
		},
		windranger: {
			name: 'Windranger',
			image: '../assets/images/windranger.png',
			health: 90,
			uniqueAttack() {
				return (Math.floor(Math.random()*30) + 10)							
			}
		}
	}	
	$('#botCards').append(`<div class="hero" id=${heros.slark.name}> <p>${heros.slark.name}</p><img src=${heros.slark.image} /><p>Health</p><p class="health">${heros.slark.health}</p> <button id="lc">Attack Legion_Commander</button> <button id="in">attack invoker</button><button id="wr">attack Windranger</button> </div>`);
	$('#botCards').append(`<div class="hero" id=${heros.tresdin.name}> <p>${heros.tresdin.name}</p><img src=${heros.tresdin.image} /><p>Health</p><p class="health">${heros.tresdin.health}</p> <button id="sl">Attack Slark</button> <button id="in">attack invoker</button><button id="wr">attack Windranger</button> </div>`);
	$('#botCards').append(`<div class="hero" id=${heros.carl.name}> <p>${heros.carl.name}</p><img src=${heros.carl.image} /><p>Health</p><p class="health">${heros.carl.health}</p> <button id="sl">Attack Slark</button> <button id="lc">attack Legion_Commander</button><button id="wr">attack Windranger</button> </div>`);
	$('#botCards').append(`<div class="hero" id=${heros.windranger.name}> <p>${heros.windranger.name}</p><img src=${heros.windranger.image} /><p>Health</p><p class="health">${heros.windranger.health}</p> <button id="sl">Attack Slark</button> <button id="lc">attack Legion_Commander</button><button id="in">attack Invoker</button> </div>`);

	$(".hero").on("click", function() {
		switch(this.id) {
			case 'Slark': 
				$('#playerCard').append($('#Slark'));
				heroChosen = true;
				break;
			case 'Legion_Commander':
				$('#playerCard').append($('#Legion_Commander'));
				heroChosen = true;
				break;
			case 'Invoker':
				$('#playerCard').append($('#Invoker'));
				heroChosen = true;
				break;				
			case 'Windranger':
				$('#playerCard').append($('#Windranger'));
				heroChosen = true;
				break;
			default:
				console.log('hi')
		}	
	});

	$('#Windranger button#lc').on('click', function() {
			heros.tresdin.health  = (heros.tresdin.health - heros.windranger.uniqueAttack());	
			$("#Legion_Commander").remove();
			$('#botCards').append(`<div class="hero" id=${heros.tresdin.name}> <p>${heros.tresdin.name}</p><img src=${heros.tresdin.image} /><p>Health</p><p class="health">${heros.tresdin.health}</p> <button id="sl">Attack Slark</button> <button id="in">attack invoker</button><button id="wr">attack Windranger</button> </div>`);	
	});	
	$('#Windranger button#in').on('click', function() {
			heros.carl.health  = (heros.carl.health - heros.windranger.uniqueAttack());	
			$("#Invoker").remove();
			$('#botCards').append(`<div class="hero" id=${heros.carl.name}> <p>${heros.carl.name}</p><img src=${heros.carl.image} /><p>Health</p><p class="health">${heros.carl.health}</p> <button id="sl">Attack Slark</button> <button id="lc">attack Legion_Commander</button><button id="wr">attack Windranger</button> </div>`);
	$('#Windranger button#sl').on('click', function() {
			heros.slark.health  = (heros.slark.health - heros.windranger.uniqueAttack());	
			$("#Slark").remove(); 
			$('#botCards').append(`<div class="hero" id=${heros.slark.name}> <p>${heros.slark.name}</p><img src=${heros.slark.image} /><p>Health</p><p class="health">${heros.slark.health}</p> <button id="lc">Attack Legion_Commander</button> <button id="in">attack invoker</button><button id="wr">attack Windranger</button> </div>`);	
	});	
});	
});

// stuff still needed to implement

// invoker, slark, and legion commander need to be able to attack
// when a characters health goes below zero they need to be hidden from the screen
// the bots are supposed to attack in retaliation, leaving the attacker damaged as well
// characters health is reset if it kills another character
// log damage dealt and taken to the side of the players character 
// create a win and lose  screen
// balance the character's damages/greatly reduce it 
//  ** bug **  slark doesnt update until the other 2 characters are attacked 
