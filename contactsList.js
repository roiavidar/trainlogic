angular.
module('trainlogicExercise').
component('contactsList', {
    templateUrl: 'contactsList.template.html',
    controller: function ContactsListController($scope) {
        this.contactVisibility = {};
        this.$onInit = function() {
            this.data.forEach(function(contact) {
                this.contactVisibility[contact.id] = false;
            });
        };
        
        this.changeContactVisibility = function(contactId) {
          this.contactVisibility[contactId] = !this.contactVisibility[contactId];
        };
    },
     bindings: {
        data: '<'
    },
});
