const photos = [
{
    id:1,
    path:"resources/images/Image1.jpg",
    caption:"Image 1"
},

{
    id:2,
    path:"resources/images/Image2.jpg",
    caption:"Image 2"
},
  
{
    id:3,
    path:"resources/images/Image3.jpg",
    caption:"Image 3"
},

{
    id:4,
    path:"resources/images/Image4.jpg",
    caption:"Image 4"
    }
]


Vue.component('album',{
    
    template:`
     
    <div class="thumbnail">
            <div class="imageCont">
                <img :src="photo.path">
            </div>    
            
            <div class="caption">
                       {{photo.caption}}
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


