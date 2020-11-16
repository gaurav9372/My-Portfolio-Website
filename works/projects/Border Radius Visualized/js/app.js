new Vue({
    
    el:'#app', 
    
    data:{
         
    roundness50:"15",
    roundness100:"15",
    visible:true,
    },

    computed: {

    guideCircles50: function () {
        return {
            height: this.roundness50 * 2 + 'px',
            width: this.roundness50 * 2 + 'px',
        }
    },
    guideCircles100: function () {
        return {
            height: this.roundness100 * 2 + 'px',
            width: this.roundness100 * 2 + 'px',
        }
    }
},
    methods:{

    },
    


    
});