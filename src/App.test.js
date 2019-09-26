import React from 'react';
import App from './App'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree= renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();

})
 /* const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/



/*import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});*/
