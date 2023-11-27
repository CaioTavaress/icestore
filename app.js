
    const app = angular.module("App", ["ngRoute"]);


    app.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl : "./pages/inicio.html"
        })
        .when("/tenis", {
            templateUrl : "./pages/categorias/tenis.html"
        })
        .when("/acessorios", {
            templateUrl : "./pages/categorias/acessorios.html"
        })
        .when("/camisas", {
            templateUrl : "./pages/categorias/camisas.html"
        })
        .when("/headshop", {
            templateUrl : "./pages/categorias/headshop.html"
        })
        .when("/cart", {
            templateUrl : "./pages/categorias/carrinho.html"
        })
    })