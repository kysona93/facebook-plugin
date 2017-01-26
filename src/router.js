import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import {history} from "./store.js";
import App from './app/components/app';
import FacebookComment from './app/components/home_page/facebook_comment';
import FacebookLike from './app/components/home_page/facebook_like';
import FacebookShared from './app/components/home_page/facebook_share';
import FacebookPage from './app/components/home_page/facebook_page';
import NotFound from './app/components/shared_component/not_found';

const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={FacebookComment}/>
            <Route path="/comment" component={FacebookComment}/>
            <Route path="/like" component={FacebookLike}/>
            <Route path="/share" component={FacebookShared}/>
            <Route path="/page" component={FacebookPage} />
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
);
export {router};