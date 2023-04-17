"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 사용자 인증 미들웨어
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const entity_1 = require("../entity");
const db_1 = __importDefault(require("../loader/db"));
// 사용자 인증을 위한 JWT 토큰 설정
const jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY,
};
// JWT 인증 전략
const jwtStrategy = new passport_jwt_1.Strategy(jwtOptions, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = db_1.default.getRepository(entity_1.User);
        const user = yield userRepository.findOne(payload.sub);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
    catch (err) {
        return done(err, false);
    }
}));
// passport 초기화 및 미들웨어 등록
const initPassport = () => {
    passport_1.default.use(jwtStrategy);
    return passport_1.default.initialize();
};
exports.default = initPassport;
//# sourceMappingURL=auth.middleware.js.map