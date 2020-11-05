import React from 'react';
import renderer from 'react-test-renderer';
import Tags from "./Tags";

it('renders correctly normal input', () => {
    const tree = renderer
        .create(<Tags
            label="Tags"
            placeholder="Fill with you tags"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
