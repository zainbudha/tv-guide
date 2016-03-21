'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

var SearchPage = require('./page-objects/search-page');

describe('Search page', function() {

  var searchPage = new SearchPage();

  beforeEach(function() {
      searchPage.get();
    });


  it('should display the correct title', function() {
    expect(searchPage.title.getText())
      .toBe('Search for a TV show');
  });

  it('should search for the entered search string', function() {
    searchPage.search('a');
    expect(searchPage.searchString.getAttribute('value'))
      .toBe('a');
  });


});
