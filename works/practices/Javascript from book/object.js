function change(){
    
var xname = document.getElementById('hotelname');
var hotel = {
    
    name : 'paradise',
    rooms : 30 ,
    booked : 14 ,
    checkavailability : function() {
    return this.rooms - this.booked ;
        
    }
};
//alert(hotel.checkavailability());
xname.textContent=hotel.name;
}