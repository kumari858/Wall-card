import React from 'react';
import Brick from '../brick/Brick.js'
import "./style.css";

class Wall extends React.Component{
    
    constructor(props)
    {
        super(props);//data from parent to child
        this.state={
            bricks:[1,2,3,4]
        };

    }
    addMoreBricks = () =>{
        //this.state.bricks.push(5);
        const newBricksArray=[...this.state.bricks];//array
        newBricksArray.push(newBricksArray.length +1);
        this.setState({
            bricks:newBricksArray
        });
    };
    render = () => {
        return( <div className="wall-container">
            {
                this.state.bricks.map( (brick)=>{
                    return<Brick key={brick} name={brick}/>
                } )
            }
            <button className="btn" onClick={this.addMoreBricks}>Add More</button>
        </div>
        );
        
    };

}
export default Wall;