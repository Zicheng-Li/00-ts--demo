"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    //  _firstName: string;
    //  _lastName: string;
    // the shortcut for constructor
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    // constructor(firstName: string, lastName: string) {
    //     this._firstName = firstName;
    //     this._lastName = lastName;
    // }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
exports.Customer = Customer;
