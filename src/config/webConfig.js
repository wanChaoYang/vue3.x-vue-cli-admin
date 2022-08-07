const webConfigs = {
   test: {
      name: "admin",
      port: "9090"
   }
}
function getArgv() {
   const argv = process.env.npm_config_argv;
   const original = JSON.parse(argv).original;
   let config;
   const name = "project"
   for (let i = 0; i < original.length; i++) {
      if (original[ i ].indexOf(`--${name}=`) === 0) {
         config = original[ i ].substr(name.length + 3)
         return config
      }
   }
}

const webConfig = webConfigs[ getArgv("project") ]
module.exports = webConfig