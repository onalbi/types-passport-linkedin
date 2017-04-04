// Type definitions for passport-linkedin 1.0.0
// Project: https://github.com/jaredhanson/passport-linkedin
// Definitions by: Albion Liçi <https://github.com/onalbi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="passport"/>


import passport = require('passport');
import express = require('express');

interface Profile extends passport.Profile {
    id: any;
    emails: any;
    provider: any;
    _raw: string;
    _json: any;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
    authType?: string;
}

interface IStrategyOption {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;

    profileFields?: string[];
}

interface IStrategyOptionWithRequest {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;

    profileFields?: string[];
}

interface VerifyFunction {
    (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void): void;
}

interface VerifyFunctionWithRequest {
    (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void): void;
}

declare class Strategy implements passport.Strategy {
    constructor(options: IStrategyOptionWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: IStrategyOption, verify: VerifyFunction);

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}
