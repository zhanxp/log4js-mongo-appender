const log4js = require('log4js');

log4js.configure({
	appenders: {
		mongodb: {
			//type: 'log4js-mongo-appender',
			type: './lib/index',
			connectionString: '127.0.0.1:27017/logs',
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

logger.debug("test mongo log",'some data');