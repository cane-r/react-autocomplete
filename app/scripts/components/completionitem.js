/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import Modal from './Modal'


class CompletionItem extends React.Component {


constructor(props) {
        super(props);
        this.state = {
            item:{},
            modalTriggered:false
        };
        this.state.item=this.props.itemVar;
    }

//generate modal here..
onClick(e){
  
    //this.showModal(item);
    this.setState({
    modalTriggered:!this.state.modalTriggered,
  })

}

showModal(i){
    
}
    

    render() {
            
      return (
                        
                <li className={ (this.state.item.isActive  ? "visible " : "invisible " ) + "list-item" } id={this.state.item._id} onClick={(e) => this.onClick(e) /*this.refs.btn.click()*/}>
                   <div className="col-sm-10 col-md-10 col-xs-10 col-lg-10 offset-sm-1 offset-md-1 offset-xs-1 offset-lg-1">
                     <div className="card mb-4">
                        <img className="card-img-top img-responsive image" src={this.state.item.picture} alt="product image"/>
                          <h6 className="card-text price">{this.state.item.price}</h6>
                            <div className="card-body">
                             <h5 className="card-title">{this.state.item.name}</h5>
                             {this.state.modalTriggered && <Modal content={this.state.item}/>}
                              <p className="card-text">{this.state.item.about}</p>
                              <div className="text-center">
                              <button ref='btn' type="button" onClick={(e) => this.onClick(e)} className="btn btn-primary btn-i">
                              Product details of {this.state.item._id}
                             </button>
                             </div>
                           </div>
                        </div>
                      </div>

                      
                    </li>
                   
                   );
                 }
              }

module.exports = CompletionItem;