/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
//////////////extra libraries///////////////////////
import axios from 'axios';
///////////////////////////////////
class Menu extends React.Component {

    /**<
     * Main constructor for the Menu Class
     * @memberof Menu
     */
     
    
    
    constructor() {
        super();
        this.state = {
            showingCompletionItems: false,
            showingSearch: false,
            completionItems:[]
        };
        this.serverUrl="http://localhost:3035/search";
     
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.setState({
            showingSearch: !this.state.showingSearch,
            showingCompletionItems: false


        });
        if(this.state.showingSearch){
                this.refs.input.value = '';
            }

    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        if(!e.target.value){
            this.setState({completionItems: [],
                showingCompletionItems:false});
            e.target.value="";
            return;
        }
       
        // Start Here
        // ...
        // e.preventDefault();
        //console.log("it works " + e.target.value);
        //clear
        //this.setState({ completionItems: []});
        axios.get(this.serverUrl, {
            params: {
            name:  e.target.value
                }
            }).then(response => {
                if(response.data.length>0){
                     this.setState({ completionItems: response.data,
                     showingCompletionItems:true });
                     //console.log(this.state.completionItems);
                }
                else{
                    //if(this.state.completionItems.length<1)

                    this.setState({showingCompletionItems:false});
                }
               
            });
 }


 onClick(e){
    //alert(e);
 }
        


    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input ref="input" type="text" onChange={(e) => this.onSearch(e)} />
                    <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>

                <div className={ (this.state.showingCompletionItems  ? "visible " : "invisible ") + "row"}>
                    <ul className="list-item-container">
                 {this.state.completionItems.map((item, index) => {
              /*
              Here a component can be introduced also
              , like Component(attrs...,data=completionItems,props...)
    */
              return (
                <li className={ (item.isActive  ? "visible " : "invisible " ) + "list-item" } key={index} 

                id={item._id} onClick={() => this.onClick(item)}>
                <div className="col-sm-10 col-md-10 col-xs-10 col-lg-10 offset-sm-1 offset-md-1 offset-xs-1 offset-lg-1">
         <div className="card mb-4">
            <img className="card-img-top img-responsive image" src={item.picture} alt="product image"/>
            <h6 className="card-text price">{item.price}</h6>
            <div className="card-body">
               <h5 className="card-title">{item.name}</h5>
               <p className="card-text">{item.about}</p>
            </div>
         </div>
          </div>
                </li>
             );

            })}
                    </ul>
                </div>
                </div>
                


            </header>
        );
    }


}

// Export out the React Component
module.exports = Menu;