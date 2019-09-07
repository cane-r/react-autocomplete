/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import CompletionItem from  './completionitem'

class Modal extends React.Component {


constructor(props) {
        super(props);
        this.state = {
            item:{},
        };
        this.state.item=this.props.content;
    }

    render() {

   
      return (
                 

<div className="modal fade show display-true " tabIndex="-1" role="dialog" aria-modal="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="col-12 modal-title text-center">{ this.state.item.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <img className="card-img-top img-responsive image" src={this.state.item.picture} alt="product image"/>
      <h6 className="price">{this.state.item.price}</h6>                
      <div className="modal-body text-center">
        <p>{ this.state.item.about}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


);
                 }
              }

module.exports = Modal;