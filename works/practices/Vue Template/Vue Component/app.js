const photos = [
{
    id:1,
    fileName:"Arrow"
},{ 
    id:2,
    fileName:"Cameraman"
},{
    id:3,
    fileName:"Dog"
},{
    id:4,
    fileName:"GodofWar"
    }
]

Vue.component('album',{
    
    template:`
     
    <div class="thumbnail">
            <div class="imageCont">
                <img :src="'resources/images/'+photo.fileName+'.jpg'">
            </div>    
            
            <div class="caption">
                       {{photo.fileName}}
            </div>
</div>`,
              
    props:{
      photo: Object            
    }
              
});


new Vue({
    
    el:'#app', 
    data:{ photos },

})


