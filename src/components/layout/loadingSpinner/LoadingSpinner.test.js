import React from 'react';
import renderer from 'react-test-renderer';
import LoadingSpinner from "./LoadingSpinner";

it('renders correctly normal input', () => {
    const tree = renderer
        .create(<LoadingSpinner visible={true}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
