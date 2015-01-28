// ================================================================================
// DATA
// ================================================================================

'use strict';

// Global context for Handlebars templates in `src/templates`
var data = {
	
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
	goodbyeText: 'Thanks for watching!',
	goodbyeImage: 'fin.gif',
	sections: [
		{
			title: 'What is a function?',
			subtitle: 'algebra what?',
			slides: [
				{
					uniqueContent: '\
						<blockquote>\
							In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output.\
						</blockquote>'
				}
				, {
					title: 'so...',
					uniqueContent: 'for any one input (x) there should be one output (y).'
				}
			]
		},
		{
			title: 'How do I create them?',
			subtitle: './make && make install j/k',
			slides: [
				{
					title: 'Constructors',
					uniqueContent: '<pre><code>\
\nfunction Car() {};\
\nvar car1 = new Car();\
\n\
					</code></pre>'
				}
				, {
					title: 'declerations',
					uniqueContent: '<pre><code>\
\nfunction power (base, power) {\
\n   return Math.pow(base, power);\
\n}\n\
					</code></pre>'
				}
				, {
					title: 'expressions',
					uniqueContent: '<pre><code>\
\nvar power = function (base, power) {\
\n   return Math.pow(base, power);\
\n};\n\
					</code></pre>'
				}
				, {
					title: 'iife',
					uniqueContent: 'immediately invoked function expression'
				}
				, {
					title: 'iife',
					uniqueContent: '<pre><code>\
\n(function (attachTo) {\
\n    attachTo.power = function (base, power) {\
\n       return Math.pow(base, power);\
\n    };\
\n})(window);\n\
					</code></pre>'
				}

				, {
					title: 'things you might see...',
					uniqueContent: '<pre><code>\n!function () {\n}();\n\n+function () {\n}();\n\n~function () {\n}();\n\n-function () {\n}();\n</code></pre>'
				}
				, {
					title: 'But why?!',
					uniqueContent: 'the simplest answer is that it instructs the runtime to treat the function decleration as an expression and execute it.'
				}

				, {
					title: 'this one is special',
					uniqueContent: '<pre><code>\
\n;(function () {\
\n})();\n\
					</code></pre> <p>It prevents concat errors and is common in libraries.</p>'
				}
			]
		},
		{
			title: 'Scope',
			subtitle: 'Everything the light touches is our kingdom.',
			slides: [
				{
					title: 'scope...',
					uniqueContent: '<p>That thing people ask you about in job interviews</p>'
				}
				, {
					title: 'function scope',
					uniqueContent: '<pre><code>\
\n\\\\Things out here are global\
\n(function () {\
\n    \\\\things in here only exist here\
\n})();\n\
					</code></pre>'
				}
				, {
					title: 'example time'
				}
				, {
					uniqueContent: '<p>Until es6 and the introduction of <code>let</code>, javascript has function scope. Even afterwards it is probably better to just think of scope in javascript as function scope.</p>'
				}
			]
		},
		{
			title: 'Functions as Objects',
			subtitle: 'punching the improbability drive',
			slides: [
				{
					title: 'everything in javascript is an...',
					uniqueContent: '<p>object!</p>'
				}
				, {
					uniqueContent: '<pre><code>\
\nvar fun = function () {\
\n    return \'is here!\'\
\n};\n\
\
\nfun.type = \'dance\';\
\nfun.tempo = 120;\n\
					</code></pre>'
				}
				, {
					title: 'example time'
				}
			]
		},
		{
			title: 'Doing things the best way',
			subtitle: 'Do you know what the first rule of Hero\'s Duty is, soldier?',
			slides: [
				{
					title: '<code>new</code>',
					uniqueContent: '<p>and <code>new</code> style constructor functions</p>'
				}
				, {
					background: {
						image: 'no.gif'
					}
				}
				, {
					title: 'just say no.'
				}
				, {
					title: 'use other patterns',
					uniqueContent: '<p>like functional constructors or factories. Check out our presentation on inheritance :-)</p>'
				}
				, {
					title: 'use semi-colons appropriately'
				}
				, {
					title: 'avoid using <code>this</code>'
				}

				, {
					title: 'avoid Globals.'
					, uniqueContent: '<p>iifes let you create non global storage for your application easily. Use them</p>'
				}
				, {
					uniqueContent: '<blockquote>"By reducing your global footprint to a single name, you significantly reduce the chance of bad interactions with other applications, widgets, or libraries." 
- Douglas Crockford</blockquote>'
				}
				, {
					title: 'functional purity'
				}
				, {
					title: '... is about encapsulation'
					, uniqueContent: '<p>Anything that a function effects beyond its return value damages encapsulation.</p>'
				}
				, {
					uniqueContent: '<blockquote>In computer programming, a function may be described as a pure function if both these statements about the function hold:</blockquote>'
				}
				, {
					uniqueContent: '<blockquote>1. The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state...</blockquote>'
				}

				, {
					uniqueContent: '<blockquote>2. valuation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices.</blockquote>'
				}
				, {
					title: 'this is the goal'
					, uniqueContent: '<p>but some aspect of your application will certainly break it.</p>'
				}
			]
		}
	]
};
