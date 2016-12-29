var productCategoryRoutes = function (app) {
//function productCategoryRoutes(app) {
    
    var self = this;
    self.app = app
    self.routeCollection = [];
    
    self.init = function (){
        self.createRouteCollection();
        self.processRouteCollection();
    }
    
    self.createRouteCollection = function (){
        
        var self = this;
        self.routeCollection.push({
            requestUrl: '/Categories',
            requestType: 'GET',
            callback: function (request, response){
             response.render('productCategory', {title: 'Product Category'})
            }
        });
        self.routeCollection.push({
            requestUrl: '/Categories/Add',
            requestType: 'GET',
            callback: function (request, response) {
                response.render('addProductCategory', { title: 'Add Product Category' })
            }
        });
    }
    
    self.processRouteCollection = function (){
        
        var self = this;
        self.routeCollection.forEach(function (route) {
            if (route.requestType === "GET") {
                self.app.get(route.requestUrl, route.callback);
            }
            else if (route.requestType === "POST") {
                
            }
            else if (route.requestType === "DELETE") {
                
            }
        });

        
    }

    self.init();
};

module.exports = productCategoryRoutes;