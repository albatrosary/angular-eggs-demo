describe('protractor sample', function() {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:9001');
  });

  it('home - display', function() {

    // menu
    var home = element(by.css('a[ng-link="home"]'));
	home.click();

    // header
    var title = element(by.css('.navbar-brand'));

    expect(title.getText()).toEqual('demo');



  });


  it('about - display', function() {

    // menu
    var about = element(by.css('a[ng-link="about"]'));
	about.click();    

    // header
    var title = element(by.css('.navbar-brand'));
    expect(title.getText()).toEqual('demo');


    var aboutTitle = element(by.css('.panel-heading'));
    expect(aboutTitle.getText()).toEqual('Grunt The JavaScript Task Runner');

    var gruntName = function(rowIndex){
      return aboutElement(rowIndex, by.css('th'));
    };

    var aboutElement = function(rowIndex, selector){
      return element(by.repeater('list in about.list').row(rowIndex)).element(selector);
    };

    expect(gruntName(0).getText()).toEqual('connect-history-api-fallback');
    expect(gruntName(1).getText()).toEqual('grunt');
    expect(gruntName(40).getText()).toEqual('express');

  });

  it('contact - display', function() {


    // menu
    var contact = element(by.css('a[ng-link="contact"]'));

	// about画面
	contact.click();    

    // header
    var title = element(by.css('.navbar-brand'));
    expect(title.getText()).toEqual('demo');

  });

  it('todos - 新規登録', function() {

    // menu
    var todos = element(by.css('a[ng-link="todos"]'));
    todos.click(); 

    // header
    var title = element(by.css('.navbar-brand'));
    expect(title.getText()).toEqual('demo');

	todos.click();

	var todosAdd = element(by.css('a[ng-link="todo({id: undefined})"'));
    todosAdd.click();
    
	var todoTitle = element(by.model('todo.todo.title'));
	todoTitle.sendKeys('myemail@myemail.com');

	var desc = element(by.model('todo.todo.desc'));
	desc.sendKeys('ほげ');

	var todoAdd = element(by.css('[ng-click="todo.add()"]'));
	todoAdd.click();
	var todoBack = element(by.css('[ng-click="todo.back()"]'));
	todoBack.click();


	// todos画面
	// var todosTitle = element(by.css('h2'));
 //    expect(todosTitle.getText()).toEqual('Todos');
  });
});