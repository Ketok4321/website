import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
 
export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    })
  },
  preprocess: preprocess({})
};