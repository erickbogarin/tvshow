
function buildConfig(env) {
  return require('./webpack.' + env + '.js')({ env: env });
}

const env = process.env.NODE_ENV || 'dev';
module.exports = buildConfig(env);
