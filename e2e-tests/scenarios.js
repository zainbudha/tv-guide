'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('tvGuide module', function() {


  it('should automatically redirect to /guide when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/guide");
  });


  // describe('guide', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#/guide');
  //   });


  //   it('should render guide when user navigates to /guide', function() {
  //     expect(element.all(by.css('[ng-view] th')).first().getText()).
  //       toBe('Channel Name');
  //   });

  // });

});
