var productRoutes = function(app){

    var self = this;
    self.routeCollection = [];
    self.app = app;
    self.init = function(){
        self.buildRoutes();
        self.processRoutes();

    };

    self.buildRoutes = function(){
        var self = this;

        self.routeCollection.push({
            requestType:'GET',
            requestUrl:'/Products',
            callback: function(request, response){
                response.render('productListing', {'title': 'Products'});
            }
        });

        self.routeCollection.push({
            requestType:'GET',
            requestUrl:'/Products/Edit',
            callback: function(request, response){
                response.render('productEdit', {'title': 'Product Add-Edit'});
            }
        });
    };

    self.processRoutes = function(){
        var self = this;

        self.routeCollection.forEach(function(route){
                if(route.requestType === 'GET'){
                    self.app.get(route.requestUrl, route.callback);
                }
                else if(route.requestType === 'POST'){
                    self.app.post(route.requestUrl, route.callback);
                }
                else if(route.requestType === 'DELETE'){
                    self.app.delete(route.requestUrl, route.callback);
                }
        });
    }
    self.init();
};

module.exports = productRoutes;