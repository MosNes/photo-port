import React from "react";

//test dependencies
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//import About for access to the component we're testing
import About from '..';

//after each test, clean up memory data to prevent false results
afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //First Test
    it('renders', () => {
        render(<About />);
    });
    //Second Test
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})