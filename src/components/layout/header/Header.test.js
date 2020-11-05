import React from 'react';
import renderer from 'react-test-renderer';
import Header from "./Header";

it('renders correctly', () => {
    const tree = renderer
        .create(<Header username="Test User Name"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});