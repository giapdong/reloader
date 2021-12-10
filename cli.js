#!/usr/bin/env node

const mqtt = require("mqtt");
const { program } = require("commander");
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

program.name("php_auto_reload");
program.helpOption("-h, --help", "For more information on a command");

program
  .command("pub")
  .option("-c, --channel <channel_name>", "Channel for hivemq")
  .description("Publish message to hivemq via channel")
  .action(cmd => {
    let mqtt_channel = cmd.channel || "qwertyuiop1234567890";

	client.on("connect", function () {
		client.subscribe(mqtt_channel, function (err) {
			client.publish(mqtt_channel, "ping", {}, e => {
				setTimeout(() => {
					process.exit();
				}, 200);
			});
		})
	});

	process.exit();
  });


program.parse(process.argv);
if (!program.args.length) program.help();