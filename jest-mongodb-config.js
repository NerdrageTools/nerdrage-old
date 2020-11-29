module.exports = {
	mongodbMemoryServerOptions: {
		autoStart: false,
		binary: {
			skipMD5: true,
			version: '4.2.8',
		},
		instance: {
			dbName: 'TEST_SUITE',
		},
	},
}
