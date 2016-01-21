'use strict';

angular.module('confusionApp')
        .constant("baseURL", "http://localhost:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
                this.getDishes = function(){
                    return $resource(baseURL + "dishes/:id", null, {'update': {
                      method: 'PUT'}});
                };
                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function() {
                  return $resource(baseURL + "promotions/:id", null);
                };
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            var corpfac = {};
            // Implement two functions, one named getLeaders,
            corpfac.getLeaders = function() {
              return $resource(baseURL + "leadership/:id", null);
            };
            // Remember this is a factory not a service
          return corpfac;
        }])

        // Implement the FeedbackFactory to save the info on the server
        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL){
          var feedfact = {};
          feedfact.getFeedback = function() {
            return $resource(baseURL + "feedback/:id", null);
          };
          return feedfact;
        }])

;
