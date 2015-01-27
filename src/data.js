// ================================================================================
// DATA
// ================================================================================

'use strict';

// Grab user's github data via the GitHub API
var githubData = getData('https://api.github.com/users/designfrontier');

// Global context for Handlebars templates in `src/templates`
var data = {
	githubData: githubData,



	// ------------------------------------------
	// CUSTOMIZE BELOW
	// ------------------------------------------
	social: {
		twitter: 'daniel_sellers',
		github: 'designfrontier',
		profile: 'http://photos-h.ak.instagram.com/hphotos-ak-xpf1/t51.2885-15/10755899_365394280313935_633423439_n.jpg',
		name: 'Daniel Sellers'
	},
	theme: {
		mainColor: 'rgb(30, 30, 30)',
		specialTransition: 'zoom'
	},
	title: 'fun(tion){}',
	subtitle: 'putting the maths in your js',
	greetingText: 'willkommen!',
	goodbyeText: 'This is goodbye text!',
	sections: [
		{
			title: 'What is a function?',
			subtitle: 'algebra what?',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '\
						<pre>\
							<code>\
var coolFunction = function() {\
    console.log("This is block of code.");\
};\
							</code>\
						</pre>'
				}
			]
		},
		{
			title: 'How do I create them?',
			subtitle: './make && make install j/k',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		},
		{
			title: 'Scope',
			subtitle: 'Everything the light touches is our kingdom.',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		},
		{
			title: 'Functions as Objects',
			subtitle: 'punching the improbability drive',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		},
		{
			title: 'Doing things the best way',
			subtitle: 'Do you know what the first rule of Hero\'s Duty is, soldier?',
			slides: [
				{
					title: 'This is the 1st slide',
					uniqueContent: '<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>'
				}
			]
		}
	]
};
