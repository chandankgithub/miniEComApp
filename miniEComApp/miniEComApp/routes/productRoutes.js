var productController = require('../controller/product/productController.js').productController;
var productRoutes = function(app){

    const productModuleRootPath = "admin/product/"
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
                // response.render('productListing', {'title': 'Products'});
                productController.getProductListView(request, response);
            }
        });

        self.routeCollection.push({
            requestType:'GET',
            requestUrl:'/Products/Edit',
            callback: function(request, response){
                productController.getProductEditView(request, response);
            }
        });

         self.routeCollection.push({
            requestType:'POST',
            requestUrl:'/Products/Edit/PostData',
            callback: function(request, response){
                productController.addNewProduct(request, response);
            }
        });

        self.routeCollection.push({
            requestType:'GET',
            requestUrl:'/Product/ListAll',
            callback: function(request, response){
                productController.getProductListData(request, response);
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