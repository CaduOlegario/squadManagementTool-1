import React from 'react';
import renderer from 'react-test-renderer';
import Input from "./Input";

it('renders correctly multiline input', () => {
    const tree = renderer
        .create(<Input
            placeholder="test placeholder"
            label="test label"
            multiline
            rows={4}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders correctly error input', () => {
    const tree = renderer
        .create(<Input
            placeholder="test placeholder"
            label="test label"
            error={true}
        />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});