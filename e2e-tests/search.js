'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Search page', function() {

  beforeEach(function() {
      browser.get('index.html#/search');
    });


    it('should display the correct title', function() {
      expect(element(by.binding('searchCtrl.title')).getText()).
        toBe('Search for a TV show');
    });

});
