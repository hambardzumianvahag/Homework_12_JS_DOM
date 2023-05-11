let first = document.querySelector('.first')
let div1 = document.querySelector('.first_answer')
first.onclick = function () {
	div1.style.width = '100%'
	div1.style.height = '100%'
	div1.innerHTML = 'ANSWER 1 - Lorem ipsum dolor si amet consectetur adipisicing elit. Suscipit quibusdam illum, est exercitationem ab quaerat facere veritatis modi, porro tempora odit, necessitatibus praesentium odio! Eius ut at maxime fugiat excepturi!'
}

let second = document.querySelector('.second')
let div2 = document.querySelector('.second_answer')
second.onclick = function () {
	div2.style.width = '100%'
	div2.style.height = '100%'
	div2.innerHTML = 'ANSWER 2 - Lorem ipsum dolor si amet consectetur adipisicing elit. Suscipit quibusdam illum, est exercitationem ab quaerat facere veritatis modi, porro tempora odit, necessitatibus praesentium odio! Eius ut at maxime fugiat excepturi!'
}

let third = document.querySelector('.third')
let div3 = document.querySelector('.third_answer')
third.onclick = function () {
	div3.style.width = '100%'
	div3.style.height = '100%'
	div3.innerHTML = 'ANSWER 3 - Lorem ipsum dolor si amet consectetur adipisicing elit. Suscipit quibusdam illum, est exercitationem ab quaerat facere veritatis modi, porro tempora odit, necessitatibus praesentium odio! Eius ut at maxime fugiat excepturi!'
}

let main = document.querySelector('.main')
let div4 = document.querySelector('.div4')
let btn1 = document.querySelector('.btn1')
btn1.onclick = function () {
	main.style.display = 'block'
}
let btn2 = document.querySelector('.btn2')
btn2.onclick = function () {
	main.style.display = 'none'
}
let send = document.querySelector('.send')
send.onclick = function () {
	let email = document.querySelector('.email').value
	let pass = document.querySelector('.pass').value
	let name = document.querySelector('.name').value
	let surname = document.querySelector('.surname').value
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const uppercasePattern = /[A-Z]/;
	if (emailPattern.test(email)) {
		console.log("Valid email");
	}
	else {
		console.log("Invalid email");
	}
	if (pass.length > 6 && uppercasePattern.test(pass)) {
		console.log('valid password')
	}
	else {
		console.log('invalid password')
	}
	let result = document.querySelector('.result')
	result.style.width = '100%'
	result.style.height = '100%'
	result.innerHTML = `Hello ${name} ${surname}`
}