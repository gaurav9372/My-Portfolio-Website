new Vue({
    
    el:'#app',
    
    data:{
         
        mouseX:0,
        mouseY:0,
        
        newCSS:{
            display:"flex",
            position:"relative",
            left: 0,
            top: 0,
        },
        
       
    },
    
    
    
    methods: {
        
        mouseIn: function(event) {
            
            this.newCSS.display = "flex";
            
            this.newCSS.position = "absolute";
            
            this.mouseX = event.offsetX ;
            this.mouseY = event.offsetY ;
            
            this.newCSS.left = 20+this.mouseX;
            
            this.newCSS.top = -30+this.mouseY;
        },
        
        mouseOut: function() {
            
            this.newCSS.display = "none";
            
        },
        
        
    },
    
    watch:{},    
    computed:{},
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});