'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

var SearchPage = require('./page-objects/search-page');

describe('Search page', function() {

  beforeEach(function() {
      browser.get('index.html#/search');
    });


  it('should display the correct title', function() {
    var searchPage = new SearchPage();
    expect(searchPage.title.getText())
      .toBe('Search for a TV show');
  });

  it('should search for the entered search string', function() {
    var searchPage = new SearchPage();
    searchPage.search('a');
    expect(searchPage.searchString.getAttribute('value'))
      .toBe('a');
  });


});
