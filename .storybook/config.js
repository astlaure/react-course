import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/button.story');
  require('./stories/pizza-list.story')
  // You can require as many stories as you need.
}

configure(loadStories, module);
