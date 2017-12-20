import React from "react";
import ContactInfo from './ContactInfo'
import ContactCreator from './ContactCreator'
import update from 'react-addons-update'
import ContactRemover from './ContactRemover'
import ContactEditor from './ContactEditor'

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            contactData : [
                {name: "seongyooon1", phone: "010-1234-4444"},
                {name: "seongyooon2", phone: "010-3456-3333"},
                {name: "seongyooon3", phone: "010-5678-2222"},
                {name: "seongyooon4", phone: "010-3030-1111"}
            ],
            selectedKey: -1,
            selected: {
                name: "",
                phone: ""
            }
        }
    }


    //ContactApp에 넘겨주어 state의 contactData에 항목을 추가할 수 있도록 해주는 함수.
    _insertContact(name, phone){
        let newState = update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }


    //ContactInfo에서 사용.
    _onSelect(key){
        if(key==this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: "",
                    phone: ""
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + " is selected");
    }


    //ContactInfo에서 사용.
    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }

    //ContactRemover에서 사용.
    _removeContact(){
        if(this.state.selectedKey==-1){
            console.log("contact not selected");
            return;
        }

        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }


    //ContactEditor에서 사용.
    _editContact(name, phone){
        this.setState({
            contactData: update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
    }


    render(){
        return(
            <div>
                <h1>Contact</h1>

                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                             phone={contact.phone}
                                             key={i}
                                             contactKey={i}
                                             isSelected={this._isSelected.bind(this)(i)}
                                             onSelect={this._onSelect.bind(this)}/>);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)}
                               isSelected={(this.state.selectedKey !=-1)}
                               contact={this.state.selected}/>
            </div>
        );
    }
}

export default Contact;