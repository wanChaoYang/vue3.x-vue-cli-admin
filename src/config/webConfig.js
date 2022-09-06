const webConfigs = {
  admin: {
    name: "admin",
    port: "9090",
  },
};

function getArgv() {
  console.log("=====", process.env)
  console.log("yyyy=", process.env.npm_config_project)
  // const argv = process.env.npm_config_argv;
  // const original = JSON.parse(argv).original;
  // console.log("xxxxx",original)
  // let config;
  // const name = "project";
  // for (let i = 0; i < original.length; i++) {
  //   if (original[i].indexOf(`${name}=`) === 0) {
  //     config = original[i].substr(name.length + 1);
  //     console.log(config)
  //     return config;
  //   }
  // }
}

const webConfig = webConfigs[process.env.npm_config_project];
module.exports = webConfig;