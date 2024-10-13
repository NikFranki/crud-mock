module.exports = {
  apps: [
    {
      name: "my-express-app",
      script: "./bin/www",
      watch: true,
      ignore_watch: ["node_modules", "src/public"],
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
