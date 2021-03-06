const mqtt = require('mqtt')

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

const host = 'wss://broker.emqx.io:8084/mqtt'
const topic = '__MY_TOPIC_PLACEHOLDER__'

const options = {
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
}

console.log('connecting mqtt client')
const client = mqtt.connect(host, options)

client.on('error', (err) => {
	console.log('Connection error: ', err)
	client.end()
})

client.on('reconnect', () => {
	console.log('Reconnecting...')
})

client.on('connect', () => {
	console.log('Client connected:' + clientId)
	client.subscribe(topic, { qos: 0 })
	client.publish(topic, 'ws connection demo...!', { qos: 0, retain: false }, function() {
		setTimeout(() => {
			process.exit();
		}, 2000);
	})
})

client.on('message', (topic, message, packet) => {
	console.log('Received Message: ' + message.toString() + '\nOn topic: ' + topic)
})

client.on('close', () => {
	console.log(clientId + ' disconnected')
})