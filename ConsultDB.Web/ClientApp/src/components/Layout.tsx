import * as React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export const Layout: React.FunctionComponent = ({ children }) => {
    return (
        <>
            <NavMenu />
            <Container>
                {children}
            </Container>
        </>
    );
}
