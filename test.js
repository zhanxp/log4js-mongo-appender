const log4js = require('log4js');

log4js.configure({
	appenders: {
		mongodb: {
			//type: 'log4js-mongo-appender',
			type: './lib/index',
			connectionString: 'mongodb://127.0.0.1:27017/admin',
			databaseName: 'logs',
			collectionName: 'log4js_logs'
		}
	},
	categories: {
		default: {
			appenders: ['mongodb'],
			level: 'debug'
		}
	}
})

const logger = log4js.getLogger();
logger.level = 'debug';

logger.debug("test mongo log 6666",'some data');