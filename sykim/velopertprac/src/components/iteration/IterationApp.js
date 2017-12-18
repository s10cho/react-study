import React from 'react';



class IterationApp extends React.Component{

    render(){
        return(
            <Contact/>
        );
    }

}

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            contactData : [
                {name: "seongyooon1", phone: "010-1234-4444"},
                {name: "seongyooon2", phone: "010-3456-3333"},
                {name: "seongyooon3", phone: "010-5678-2222"},
                {name: "seongyooon4", phone: "010-3030-1111"}
            ]
        }
    }


    render(){
        return(
            <div>
                <h1>Contact</h1>

                <ul>
                    {
                        this.state.contactData.map((contact,i) => {
                            return(

                                <ContactInfo name={contact.name} phone={contact.phone} />
                                // 컴포넌트에 identity (독자성) 을 부여해줍니다
                                // https://reactjs.org/docs/lists-and-keys.html#keys
                                // 키는 내부적으로 사용됨
                                // 참고 url: https://reactjs.org/docs/lists-and-keys.html#keys
                                //  https://blog.coderifleman.com/2015/06/27/learning-react-3
                            //         -> "React.js에서 중요한 key" 부분 참
                            //    https://blog.arkency.com/2014/10/react-dot-js-and-dynamic-children-why-the-keys-are-important/



                                /*
                                 key




                                 */
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

class ContactInfo extends React.Component{
    render(){
        return(
            <li>{this.props.name} {this.props.phone}</li>
        );
    }
}

export default IterationApp;