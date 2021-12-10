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
			"cmd": "php_auto_reload pub -c <your_mqtt_channel>"
		}
	]
}

```