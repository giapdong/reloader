# Install

npm install -g https://github.com/giapdong/php_auto_reload#main

# Setup

- Extension for code editor - with VSCode, i use [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) extension for trigger Ctrl+S
- Chrome extension: Load unpackage in this repo

```javascript

"emeraldwalk.runonsave": {
	"commands": [
		{
			"match": ".*",
			"cmd": "<Command run script>"
		}
	]
}

```

# Client connect MQTT reference

http://www.steves-internet-guide.com/using-javascript-mqtt-client-websockets/

https://www.emqx.com/en/blog/connect-to-mqtt-broker-with-websocket

https://www.emqx.io/docs/en/v4.3/development/javascript.html#mqtt-js-usage-example


# Match pattern

https://developer.chrome.com/docs/extensions/mv3/match_patterns/