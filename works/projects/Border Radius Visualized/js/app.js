new Vue({
    
    el:'#app', 
     
    data:{
         
    roundness50:"15",
    roundness100:"15",
    roundness200:"15",
    roundness400:"15",
        
    dyHeight:"200",
    dyWidth:"200",
        
    
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
    },
    guideCircles200: function () {
        return {
            height: this.roundness200 * 2 + 'px',
            width: this.roundness200 * 2 + 'px',
        }
    },
    guideCircles400: function () {
        return {
            height: this.roundness400 * 2 + 'px',
//            height: this.dyHeight+ 'px',
            width: this.roundness400 * 2 + 'px',
        }
    },
        
    
},
    methods:{

    },
    


    
});