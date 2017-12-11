const SSO = require("./dist").SSO;

const ssoClient = new SSO("teamanneal.uqcloud.net");

const token = ssoClient.generateToken();
const redirectUrl = ssoClient.generateRedirectUrl("https://teamanneal.uqcloud.net/something?foo=bar");

ssoClient.getUserInfoPayload("81nEqipyibFGZEUmP4QyaLUY8yomOerv")
    .then((info) => {
        console.log(info);
    })
    .catch((e) => {
        console.error(e);
    });
