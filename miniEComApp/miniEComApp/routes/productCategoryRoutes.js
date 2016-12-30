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
             response.render('productCategoryListing', {title: 'Product Category'})
            }
        });
        self.routeCollection.push({
            requestUrl: '/Categories/Add',
            requestType: 'GET',
            callback: function (request, response) {
                response.render('addEditProductCategory', { title: 'Add Product Category' })
            }
        });
         self.routeCollection.push({
            requestUrl: '/Categories/Add/PostData',
            requestType: 'POST',
            callback: function (request, response) {
                //response.render('addEditProductCategory', { title: 'Add Product Category' })
                console.log(request.body);
                return response.send(JSON.stringify(
                    {
                        'Name' : request.body.Name,
                        'Description': request.body.Description
                    }));
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
                self.app.post(route.requestUrl, route.callback);
            }
            else if (route.requestType === "DELETE") {
                
            }
        });

        
    }

    self.init();
};

module.exports = productCategoryRoutes;