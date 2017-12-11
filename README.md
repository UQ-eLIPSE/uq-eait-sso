# uq-eait-sso

Support library for interacting with the UQ single sign on system, intended for
*.uqcloud.net servers

## Installation

```bash
npm install UQ-eLIPSE/uq-eait-sso
```

## Usage

```javascript
/// Importing

// ES Modules style
import { SSO } from "uq-eait-sso";

// CommonJS style
const SSO = require("uq-eait-sso").SSO;


/// In your code...

// Initialise the SSO instance with your server's host
const sso = new SSO("your.server.uqcloud.net");

// To retrieve user information stored at a given token
sso.getUserInfoPayload("3nwAoSEmnbmXJC5ExlEatxyk63F7bY2M")
    .then((payload) => {
        // Do something with the user data
    });

```

## Background

The SSO/KVD system is described in more detail in the following links:

* [EAIT Web Authentication and Authorisation](https://xlex.s3.uqcloud.net/eaitauth.pdf) (pdf)
* [Single Sign-On for the UQ Web](https://archive.its.uq.edu.au/filething/get/6791/130208_uq_sso.pdf) (pdf)
