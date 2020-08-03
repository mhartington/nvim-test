"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("@neovim/decorators");
const neovim_1 = require("neovim");
let MyClass = class MyClass {
    constructor(nvim) {
        this.nvim = nvim;
    }
    async myTestCmd() {
        await this.nvim.outWrite('hello \n');
    }
};
tslib_1.__decorate([
    decorators_1.Command('MyTest'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], MyClass.prototype, "myTestCmd", null);
MyClass = tslib_1.__decorate([
    decorators_1.Plugin,
    tslib_1.__metadata("design:paramtypes", [neovim_1.Neovim])
], MyClass);
