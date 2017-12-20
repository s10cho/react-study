import React from "react";

class ContactInfo extends React.Component{

    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }


    //Component Lifecycle API
    //이 메소드는 컴포넌트를 다시 렌더링 해야 할 지 말지 정의해줌
    /*
    *
    * 주의!
    * https://reactjs.org/docs/react-component.html#shouldcomponentupdate
    * We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate().
    * It is very inefficient and will harm performance.
    *
    *
    * */
    shouldComponentUpdate(nextProps, nextState){
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }

    render() {

        console.log("rendered: " + this.props.name);

        let getStyle = isSelect => {
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#fc0100'
            };

            return style;
        };

        return(
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.props.phone}
            </li>
        );
    }


}

export default ContactInfo;