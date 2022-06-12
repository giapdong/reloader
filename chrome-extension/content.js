console.log('Extension working!');

var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

var host = 'wss://broker.emqx.io:8084/mqtt';
var topic = '__MY_TOPIC_PLACEHOLDER__';

var options = {
	keepalive: 30,
	clientId: clientId,
	protocolId: 'MQTT',
	protocolVersion: 4,
	clean: true,
	reconnectPeriod: 1000,
	connectTimeout: 30 * 1000,
	will: {
		topic: 'WillMsg',
		payload: 'Connection Closed abnormally..!',
		qos: 0,
		retain: false
	},
	rejectUnauthorized: false
};

console.log('Connecting mqtt client');
var client = mqtt.connect(host, options);

client.on('error', function(err) {
	console.log('Connection error: ', err);
	client.end();
});

client.on('reconnect', function() {
	console.log('Reconnecting...');
});

client.on('connect', function() {
	console.log('Client connected:' + clientId);
	client.subscribe(topic, { qos: 0 });
});

client.on('message', function(topic, message, packet) {
	console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic);

	chrome.runtime.sendMessage('get-enable', ({ enable }) => {
		if (!enable) {
			return;
		}

		location.reload();
	});
});

client.on('close', function() {
	console.log(clientId + ' disconnected');
});

