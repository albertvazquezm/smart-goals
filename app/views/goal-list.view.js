(function(exports){
    var Vue = require('vue');
    console.log('hello');
    exports.goalListView = new Vue({
        el : '#goal-list',
        data : {
            goals : ['goal1', 'goal2', 'goal3', 'goal4'],
            message : 'Holaaaaa'
        } 
    });
})(window);