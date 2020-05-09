import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

const module = {};

module.exports = {
  defaultBrowser: "Mozilla Firefox",      
  handlers: [
    {
      match: /https?\:\/\/korv\.com\.*/,
      browser: "Microsoft Edge"
    },
    {
      match: /https?\:\/\/\.*\.com\.*/,
      browser: "Brave Browser"
    }
  ]
}