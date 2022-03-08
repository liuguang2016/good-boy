"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this._age = 0;
        _this.sex = "男";
        _this.write = '谢谢你好';
        return _this;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age = this._age + 8;
        },
        set: function (age) {
            this._age = age + 3;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.breathe = function () {
        console.log("人用鼻子呼吸");
    };
    Person.weight = 80;
    return Person;
}(Animal));
var Lady = (function (_super) {
    __extends(Lady, _super);
    function Lady(from) {
        var _this = _super.call(this, 'Li liu') || this;
        _this.from = from;
        _this.context = 'Hi,lady';
        _this.say = function () {
            return _this.context + 'good';
        };
        return _this;
    }
    return Lady;
}(Person));
var JieJie = (function (_super) {
    __extends(JieJie, _super);
    function JieJie(height) {
        var _this = _super.call(this, 'chengdu') || this;
        _this.height = height;
        _this.sayLove = function () {
            return 'I love you' + _this.context;
        };
        _this.sayHello = function () {
            return _this.context + ',你好';
        };
        return _this;
    }
    return JieJie;
}(Lady));
var liJie = new JieJie(171);
liJie.say();
liJie.sayLove();
console.log(Person.weight, liJie.age, liJie.write);
