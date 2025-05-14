const { createLogger } = require('../utils/logger.utils');

const logger = createLogger('GENERAL', 'combined');
const authLogger = createLogger('AUTH', 'authorization');
const emailLogger = createLogger('EMAIL', 'email');
const chatLogger = createLogger('CHAT', 'chat');
const userLogger = createLogger('USER', 'user');
const moderatorLogger = createLogger('MODERATOR', 'moderator');

module.exports = { 
  logger,
  authLogger,
  emailLogger,
  chatLogger,
  userLogger,
  moderatorLogger
};