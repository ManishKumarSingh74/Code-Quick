const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: 'EwWdwXd1lLIk27VJ6XE40mcxMVnSwMKe',
    socket: {
        host: 'redis-19134.c321.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 19134
    }
});

module.exports = redisClient