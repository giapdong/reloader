# Install

```bash
git clone git@github.com:giapdong/reloader.git
cd reloader
npm install
```

# Setup

- Run command: `node setup.js`

- Extension for code editor - with VSCode, i use [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) extension for trigger Ctrl+S

- Chrome extension: Load unpackage in this repo, for full feature we will enable extension with incognito mode. Goto chrome-extension/manfinest.json and fix `matches` property follow this [guideline](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)

- With VSCode, we will setting for `Run on Save` below

```javascript

"emeraldwalk.runonsave": {
	"commands": [
		{
			"match": "\\.html$",
			"cmd": "node <path-to-index.js>"
		},
		{
			"match": "\\.css$",
			"cmd": "node <path-to-index.js>"
		},
		{
			"match": "\\.js$",
			"cmd": "node <path-to-index.js>"
		}
	]
}

```

# Client connect MQTT reference

http://www.steves-internet-guide.com/using-javascript-mqtt-client-websockets/

https://www.emqx.com/en/blog/connect-to-mqtt-broker-with-websocket

https://www.emqx.io/docs/en/v4.3/development/javascript.html#mqtt-js-usage-example

# Sponsor

Thanks for `emqx` provide for communication power broker

Thanks [Reload icons created by srip - Flaticon](https://www.flaticon.com/free-icons/reload)
