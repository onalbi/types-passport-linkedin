// Type definitions for passport-linkedin 1.0.0
// Project: https://github.com/jaredhanson/passport-linkedin
// Definitions by: Albion Liçi <https://github.com/onalbi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>


import passport = require('passport');
import express = require('express');

interface Profile extends passport.Profile {
    gender: string;
    username: string;

    _raw: string;
    _json: any;
    _accessLevel: string;
}

interface IStrategyOption {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;

    passReqToCallback?: true;
    includeEmail?: true;

    reguestTokenURL?: string;
    accessTokenURL?: string;
    userAuthorizationURL?: string;
    sessionKey?: string;

    userProfileURL?: string;
    skipExtendedUserProfile?: boolean;
}

declare class Strategy implements passport.Strategy {
    constructor(options: IStrategyOption,
                verify: (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any) => void) => void);

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}
