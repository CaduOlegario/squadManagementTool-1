import React from 'react';
import renderer from 'react-test-renderer';
import PaperTitle from "./PaperTitle";

it('renders correctly normal input', () => {
    const tree = renderer
        .create(<PaperTitle title="Test title"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
