import React from 'react';

import Directory from '../../components/directory/directory.component'
import { HomePageContainer } from './homepage.styles'

const HomePage = () => (
    <section>
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
</section>        
);

export default HomePage