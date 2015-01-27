this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};

Handlebars.registerPartial("end", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n<section class=\"section-title\" data-background=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.theme)),stack1 == null || stack1 === false ? stack1 : stack1.mainColor)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-transition=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.theme)),stack1 == null || stack1 === false ? stack1 : stack1.specialTransition)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n	<img src=\"images/logo.png\" alt=\"Logo\" />\n	<h2>";
  if (helper = helpers.goodbyeText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.goodbyeText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n</section>\n";
  return buffer;
  }));

Handlebars.registerPartial("section", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<h3>";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <section  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.background), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "class=\"";
  if (helper = helpers.classes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.classes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <h2>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n        ";
  if (helper = helpers.uniqueContent) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqueContent); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.notes), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.image), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </section>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-background=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.color), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.image), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.size), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.repeat), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.position), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.color)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-background-image=\"images/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-background-size=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-background-repeat=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.repeat)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "data-background-position=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.background)),stack1 == null || stack1 === false ? stack1 : stack1.position)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n            <aside class=\"notes\">";
  if (helper = helpers.notes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.notes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</aside>\n        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        	<div class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1['class']), {hash:{},inverse:self.program(20, program20, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1.attribution)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.image)),stack1 == null || stack1 === false ? stack1 : stack1['class'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  return buffer;
  }

function program20(depth0,data) {
  
  
  return "image__attribution";
  }

  buffer += "\n<section class=\"section-title\" data-transition=\"zoom\">\n	<h2>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subtitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>\n\n\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.slides), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }));

Handlebars.registerPartial("start", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<li class=\"fragment\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n		";
  return buffer;
  }

  buffer += "\n<section class=\"section-title\" data-transition=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.theme)),stack1 == null || stack1 === false ? stack1 : stack1.specialTransition)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n	<h2>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<h3>";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</section>\n\n\n<section>\n	<img class=\"constrain-width\" src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'s avatar'\" />\n	<h2>";
  if (helper = helpers.greetingText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.greetingText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<p>I am "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n	<p class=\"social-links\"><a class=\"social-links__twitter\" href=\"http://twitter.com/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <a href=\"http://github.com/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.github)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.social)),stack1 == null || stack1 === false ? stack1 : stack1.github)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n</section>\n\n\n<section>\n	<h2>Presentation Overview</h2>\n	<ul>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n</section>\n";
  return buffer;
  }));