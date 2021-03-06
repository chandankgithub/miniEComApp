﻿var productCategoryController = require('../controller/productCategory/productCategoryController.js');

var productCategoryRoutes = function (app) {
    
    const productModuleRootPath = "admin/product/"
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
            //  response.render(productModuleRootPath + 'productCategoryListing', {title: 'Product Category'})
                productCategoryController.getCategories(request,response);
            }
        });

        self.routeCollection.push({
            requestUrl: '/CategoryList',
            requestType: 'GET',
            callback: function (request, response){
            //  response.render(productModuleRootPath + 'productCategoryListing', {title: 'Product Category'})
                productCategoryController.getCategoryList(request,response);
            }
        });

        self.routeCollection.push({
            requestUrl: '/Categories/Add',
            requestType: 'GET',
            callback: function (request, response) {
                response.render(productModuleRootPath + 'addEditProductCategory', { title: 'Add Product Category' })
            }
        });

        self.routeCollection.push({
            requestUrl: '/Categories/Add/{id}',
            requestType: 'GET',
            callback: function (request, response) {
                response.render(productModuleRootPath + 'addEditProductCategory', { title: 'Add Product Category' })
            }
        });

         self.routeCollection.push({
            requestUrl: '/Categories/Add/PostData',
            requestType: 'POST',
            callback: function (request, response) {
                // //response.render('addEditProductCategory', { title: 'Add Product Category' })
                // console.log(request.body);
                // return response.send(JSON.stringify(
                //     {
                //         'Name' : request.body.Name,
                //         'Description': request.body.Description
                //     }));
                // //response.redirect('/Categories');
                productCategoryController.addProductCategory(request,response);
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