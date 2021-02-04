import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import Classic from '../components/pages/blogs/classic';

export default function BlogsRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/classic` } component={ Classic } />
            </Layout>
        </Switch>
    )
}