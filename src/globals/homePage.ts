import { GlobalConfig } from 'payload/types';

const HomePage: GlobalConfig = {
  slug: 'homePage',
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
  ],
};

export default HomePage;
