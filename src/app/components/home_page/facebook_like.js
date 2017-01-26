import React from 'react';

export default class FacebookLike extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=186281625182184";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h1>Welcome Facebook Like</h1>
                    <div id="fb-root"></div>
                    <div className="fb-like"
                         data-href="http://localhost:8080/"
                         data-layout="standard"
                         data-action="like"
                         data-size="small"
                         data-show-faces="true"
                         data-share="true">
                    </div>
                </div>
            </div>
        )
    }
}