"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
var User_1 = require("../model/User");
var UserDTO = /** @class */ (function () {
    function UserDTO(id, name, document, email, password) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.email = email;
        this.password = password;
    }
    UserDTO.fromModel = function (user) {
        var userDTO = new UserDTO(user.id, user.name, user.document, user.email, undefined);
        return userDTO;
    };
    UserDTO.prototype.toModel = function () {
        var newUser = new User_1.User();
        newUser.name = this.name;
        newUser.document = this.document;
        newUser.email = this.email;
        newUser.password = this.password;
        return newUser;
    };
    return UserDTO;
}());
exports.UserDTO = UserDTO;
//# sourceMappingURL=UserDTO.js.map