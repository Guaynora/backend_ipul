module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mariadb'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ipul24'),
        username: env('DATABASE_USERNAME', 'guaynora'),
        password: env('DATABASE_PASSWORD', 'guaynora'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
