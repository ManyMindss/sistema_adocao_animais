"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OngModule = void 0;
const common_1 = require("@nestjs/common");
const ong_service_1 = require("./ong.service");
const ong_controller_1 = require("./ong.controller");
let OngModule = class OngModule {
};
exports.OngModule = OngModule;
exports.OngModule = OngModule = __decorate([
    (0, common_1.Module)({
        controllers: [ong_controller_1.OngController],
        providers: [ong_service_1.OngService],
    })
], OngModule);
//# sourceMappingURL=ong.module.js.map