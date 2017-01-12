var loginRoutes = function(app){
    var self = this;
    self.app = app;
    self.routeCollection  = [];
    self.init = function(){
        self.createRouteCollection();
        self.processRouteCollection();
    }

    self.createRouteCollection = function(){

        self.routeCollection.push({
            requestUrl:'/login/postData',
            requestType:'GET',
            callback:function(request, response){

            }
        });
    }

    self.processRouteCollection = function(){
        self.routeCollection.forEach(function(route){
            if(route.requestType.toUpperCase()==='GET'){
                self.app.get(route.requestUrl, route.callback);
            }
        });
    }

    self.init();
}
module.exports = loginRoutes;