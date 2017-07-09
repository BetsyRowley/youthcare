angular
  .module('myApp')
  .controller('HomeController',
    ['$http', 'YouthService', function($http, YouthService) {
      //DATA-BINDING VARIABLES
        var vm = this; //controller as reference

        vm.hello = YouthService.hello;

        // vm.myInterval = 5000;
        // vm.noWrapSlides = false;
        // vm.active = 0;
        // var slides = vm.slides = [
        //   {id: 0,
        //   image: '/images/slide1.jpg',
        //   title: 'EDUCATION',
        //   text: 'YouthCare develops the academic and essential skills to' +
        //           'help youth succeed in school, work and life.'
        //   }
        // ];

    }]);
