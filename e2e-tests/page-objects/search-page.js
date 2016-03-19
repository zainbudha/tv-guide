var SearchPage = function() {
  this.title = element(by.binding('searchCtrl.title'));
  this.searchString = element(by.model('searchCtrl.searchString'));
  
  this.search = function(query) {
  	this.searchString.clear();
    this.searchString.sendKeys(query);
  };
};

module.exports = SearchPage;