# log4js-mongo-appender
log4js-mongo-appender

```
{
	appenders: {
		file: {
			type: 'dateFile',
			filename: 'logs/',
			backups: 50,
			alwaysIncludePattern: true,
			level: 'WARN'
		},
		filterFile: {
			type: 'logLevelFilter',
			level: 'WARN',
			appender: 'file'
		},
		console: {
			type: 'console'
		},
		mongodb: {
			type: 'log4js-mongo-appender',
			connectionString: 'mongodb://127.0.0.1:27017/admin',
			databaseName: 'logs',
			collectionName: 'log4js_logs'
		},
		filterMonogo: {
			type: 'logLevelFilter',
			level: 'ERROR',
			appender: 'mongodb'
		}
	},
	categories: {
		default: {
			appenders: ['console','filterFile','filterMonogo'],
			level: 'ALL'
		}
	},
	pm2: true,
	replaceConsole: true
}

```