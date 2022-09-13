import React from "react";
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
    index: 1
}

afterEach(cleanup);

describe('Modal Component', () => {
    //render test
    it('renders', () => {
        render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
            />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(
            <Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
            />
        )
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal 
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
            />);
            
        fireEvent.click(getByText('Close this modal'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})