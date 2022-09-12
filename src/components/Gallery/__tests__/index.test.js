import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = { name: 'portraits', description: 'Portraits of People in my Life'};

afterEach(cleanup);

describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />);
        expect (asFragment()).toMatchSnapshot();
    });

    //test ID not present on snapshot, ask about this
    // it('renders', () => {
    //     const {getByTestId} = render (<Gallery currentCategory={portrait} />);
    //     expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
    // });
});