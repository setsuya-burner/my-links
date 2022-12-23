// [INSTRUCTIONS]:
// 
// The "bio" field can be empty and it wont show on your page.
// 
// Field "language" can be one of 'en_US', 'pt_BR' or 'es_ES'.
// 
// All fields "color", "hover_color" or "text_color" accept
// all the formats supported by CSS.
// 
// The "image" field under "background" is for a URL of the image
// you want as a background. Can be empty if you only want a solid
// color for your background.
// 
// You can have any number of "networks" in this collection. Just
// copy a block as much as you want to have networks in the list.
// 
// These are all the available icons for networks (can also be an
// empty string to show no icon):
// 
// 'amazon'
// 'artstation'
// 'bandcamp'
// 'battlenet'
// 'behance'
// 'dailymotion'
// 'deviantart'
// 'discord'
// 'facebook'
// 'flickr'
// 'github'
// 'instagram'
// 'kickstarter'
// 'lastfm'
// 'linkedin'
// 'medium'
// 'patreon'
// 'paypal'
// 'pinterest'
// 'playstation'
// 'reddit'
// 'spotify'
// 'steam'
// 'telegram'
// 'tiktok'
// 'tumblr'
// 'twitch'
// 'twitter'
// 'whatsapp'
// 'xbox'
// 'youtube'
import {
  OptionsProps,
} from './types';


const defaultOptions: OptionsProps = {
  user: {
    language: 'en_US',
    name: 'YOUR NAME',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a dolor mauris. Maecenas in enim at arcu rhoncus faucibus nec in risus. Nam hendrerit et mi quis pretium. Duis ullamcorper vitae est et consequat. Duis vitae magna at justo vestibulum efficitur. Proin convallis sollicitudin nisi eu feugiat. In ultricies dictum tincidunt. Vestibulum a libero a urna ullamcorper imperdiet eget at neque. Sed sagittis turpis ac elit dapibus gravida. Sed tincidunt feugiat ante auctor sagittis. Morbi mollis lacinia eleifend. Nulla sit amet purus ex.',
    github_username: 'your_github_user',
  },
  background: {
    color: '#0f0f0f',
    image: '',
  },
  buttons: {
    color: '#f9f9f9',
    hover_color: '#e0e0e0',
    text_color: '#1f1f1f',
  },
  networks: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: 'twitter',
    },
  ],
};

export default defaultOptions;