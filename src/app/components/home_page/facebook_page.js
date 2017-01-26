import React from 'react';

export default class FacebookPage extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render(){
        return(
            <div>
                <div className="container">
                    <h1>Welcome Facebook Page</h1>
                    <div id="fb-root"></div>
                    <div className="fb-page"
                         data-href="https://www.facebook.com/Piggy-247240202063022/?skip_nax_wizard=true"
                         data-tabs="timeline"
                         data-width="500"
                         data-height="200"
                         data-small-header="true"
                         data-adapt-container-width="true"
                         data-hide-cover="true"
                         data-show-facepile="true">
                        <blockquote cite="https://www.facebook.com/Piggy-247240202063022/?skip_nax_wizard=true" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Piggy-247240202063022/?skip_nax_wizard=true">Piggy</a>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}