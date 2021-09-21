////Class Component

class App extends React.Component {

    
    state = {
        
        name : "null",
        weight: "null",
        height: "null",
        age : "null",
        bmi:"null",
        
        firstScreen:"screen active firstScreen",
        secondScreen:"screen secondScreen",
        thirdScreen:"screen  thirdScreen",
        fourthScreen:"screen fourthScreen",

    }

    getName = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value,
    
        });

    }
    getHeight = (e) => {
        e.preventDefault();
        this.setState({
            height: e.target.value,
    
        });

    }
    getWeight = (e) => {
        e.preventDefault();
        this.setState({
            weight: e.target.value,
    
        });

    }

    firstScreenComp=(e)=>{
       e.preventDefault();
        
        this.setState({
            
        firstScreen:"screen firstScreen",
            
        secondScreen:"screen active secondScreen",
             
        });
          
    }
    
    secondScreenComp=(e)=>{
       e.preventDefault();
        
        this.setState({
            
        secondScreen:"screen secondScreen",
            
        thirdScreen:"screen active thirdScreen",
            
        });
          
    }
    
    thirdScreenComp=(e)=>{
       e.preventDefault();
        
        this.setState({
            
        thirdScreen:"screen thirdScreen",
            
        fourthScreen:"screen active fourthScreen",
            
        bmi:  (this.state.weight/
            ((this.state.height/100)*(this.state.height/100))).toFixed(2),
            
        });
          
    }

    

    render(){
        return (
            <section className="frame">
            

         
                
           
            <div className={this.state.firstScreen}>
                
                
                <form onSubmit={this.firstScreenComp}>
                    

                    <p>Hello User ,</p>
                    <p className="requestText">Enter your name
                    </p>
                    
                    <input type="text" 
                        onChange={this.getName}/>
                    
                    <button>Submit</button>
                
                </form>
                
                
            </div>
            
             
<div className={this.state.secondScreen}>

    <form onSubmit = {this.secondScreenComp}>

    <p> {this.state.name},</p>

    <p className = "requestText" >
    Enter your weight <br/>(in kg) </p>

    <input type="text" onChange={this.getWeight}/>

    <button > Submit </button>
    </form>
    
</div>
                    
<div className={this.state.thirdScreen}>
                
    <form onSubmit={this.thirdScreenComp}>
                    
        <p>Good , now</p>
        <p className="requestText"> Enter your height </p>
            
        <div className="row">
            .
        ...
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <input type="text" onChange={this.getHeight} placeholder="5.2"></input>
                    
        <select className="heightDropDown">
        <option>foot </option>
        <option>cm</option>
        </select>
        
        </div>
        
        <button>Submit</button>
                
    </form>
                
</div> 
                
                
<div className={this.state.fourthScreen}>
            
                <div className="result">
                    <p>Your BMI is</p>
                    <p className="BMIresult"> {this.state.bmi}
                    </p>
                </div>
            </div> 
                
            </section>
            
            
            
            
        )
    }
}
                

ReactDOM.render(
    <App />,
    document.getElementById('comp')
);











//






//increment=()=>{
//        this.setState(
//            {counter : this.state.counter+1}
//        );
//    }

//    clickBut=()=>{
//       $(".data").show();
//    }

//

//<p>Your name is : 
//                    <span className="data">
//                        { this.state.name }
//                    </span>
//                </p>
//                
//                <p>My age is : 
//                    <span className="data">
//                        { this.state.age }
//                    </span>
//                </p> 
//                
//                <p>
//                    <span className="data">
//                        {Math.random() *10 }
//                    </span>    
//                </p>      

//
//<p>
//                    
//                    {this.state.counter}
//                      
//                </p>
//<button onClick={this.increment}>
//                    Add
//                </button>
//<button onClick={this.clickBut}>
//                    Reveal
//                </button>




//Function Component

//props

//function Counter(data){
//    return (
//        
//    <div className="card">
//    
//    <h2>Hello </h2>
//            
//    my name is {data.name},<br />
//        
//    my age is {data.age} <br />
//        
//    and I am from {data.location}. 
//        
//    </div>
//        
//    );
//}
//
//var initial = 0;
////initial=initial+1;
////    return <p id="counter"> {initial} </p>;
//
//const user1 = <Counter name="Gaurav" age="23" location="Varanasi"/>;
//
//const user2 = <Counter name="Rishabh" age="25" location="Lucknow"/>;
//
//
//ReactDOM.render(
//    user2,
//    document.getElementById('comp')
//    
//);
//
//setInterval(Counter, 1000)


//Multiple items

//function Item(data) {
//    return (
//        
//    <div className="item">
//    
//    <p className="pName">
//        {data.name}
//    </p>
//            
//    <p className="pPrice">
//        {data.price}
//    </p>
//    
//    </div>
//        
//    );
//}
//
//function List(){
//    
//    return (
//<div>
//    <Item name="Mouse" price="300 Rs" />
//    <Item name="Trimmer" price="2000 Rs" />
//    <Item name="Tube Light" price="150 Rs" />
//</div>
//    );
//}
//
//
//ReactDOM.render(
//    <List />,
//    document.getElementById('comp')  
//);
