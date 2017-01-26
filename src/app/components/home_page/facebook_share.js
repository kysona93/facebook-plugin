import React from 'react';

export default class FacebookShared extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h1>Welcome Facebook Shared</h1>
                    <div id="fb-root"></div>
                    <div className="fb-share-button"
                         data-href="http://localhost:8080/"
                         data-layout="button_count"
                         data-size="small"
                         data-mobile-iframe="true">
                         <a className="fb-xfbml-parse-ignore"
                            target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8080%2F&amp;src=sdkpreparse">Share</a>
                    </div>
                </div>
            </div>
        )
    }
}