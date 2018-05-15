webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/CentralComponents/filter-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vidhyasagar on 29.01.18.
 */

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (cities, search) {
        console.log("value " + cities);
        console.log("search " + search);
        if (search == "") {
            console.log("yes its undefined");
            return cities;
        }
        return cities.filter(function (city) {
            console.log("test pipe " + city.name.toLowerCase());
            city.name.toLowerCase().startsWith(search.toLowerCase());
        });
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'searchFilter' })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "./src/app/CentralComponents/letter-bold.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterBoldPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vidhyasagar on 29.01.18.
 */

var LetterBoldPipe = /** @class */ (function () {
    function LetterBoldPipe() {
    }
    LetterBoldPipe.prototype.transform = function (value, search) {
        if (!search) {
            return value;
        }
        var searchLength = search.length;
        var holder = value.split('');
        var indexAdder = 0;
        var indexs = this.locations(search.toLowerCase(), value.toLowerCase());
        indexs = indexs.map(function (x) {
            var solution = x + indexAdder;
            indexAdder += 2;
            return solution;
        });
        indexs.forEach(function (i) {
            holder.splice(i, 0, "<span class = 'bold'>");
            holder.splice(i + searchLength + 1, 0, "</span>");
        });
        return holder.join('');
    };
    LetterBoldPipe.prototype.locations = function (substring, searchValue) {
        var indexs = [], i = -1;
        while ((i = searchValue.indexOf(substring, i + 1)) >= 0) {
            indexs.push(i);
        }
        return indexs;
    };
    LetterBoldPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'letterBold' })
    ], LetterBoldPipe);
    return LetterBoldPipe;
}());



/***/ }),

/***/ "./src/app/CentralComponents/map-key-value-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapToEntryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by vidhyasagar on 14.02.18.
 */

var MapToEntryPipe = /** @class */ (function () {
    function MapToEntryPipe() {
    }
    MapToEntryPipe.prototype.transform = function (map) {
        var keys = [];
        map.forEach(function (value, key) {
            console.log(key, value);
        });
        for (var _i = 0, _a = map.entries; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            console.log("pushing entries here " + key);
            // keys.push({key: key, value: map[key]});
            keys.push(key);
        }
        return keys;
    };
    MapToEntryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'keys', pure: false })
    ], MapToEntryPipe);
    return MapToEntryPipe;
}());



/***/ }),

/***/ "./src/app/Services/AccountInfoServices/account-info-http-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by vidhyasagar on 13.01.18.
 */



var AccountInfoHttpService = /** @class */ (function () {
    function AccountInfoHttpService(_http) {
        this._http = _http;
    }
    /**
     *
     * @param countryName
     * @returns {Observable<R>}
     */
    AccountInfoHttpService.prototype.getCityDataFromMongoDBUsingCountryName = function (countryName) {
        // return this._http.get<ResponseFromMongo>("http://localhost:8080/mongodb/citiesByCountryName/" + countryName ).map((data) => {
        return this._http.get('http://localhost:8080/mongodb/citiesByCountryName/' + countryName).map(function (data) {
            return data;
        });
    };
    /**
     *
     * @returns {Observable<R>}
     */
    AccountInfoHttpService.prototype.getAccountInfo = function () {
        return this._http.get('http://localhost:8080/user/user-info').map(function (res) {
            console.log('json ' + JSON.stringify(res));
            return res;
        });
        // return this._http.get<AccountInfoData>("./assets/data/user_info_mockdata.json").map((data) => {
        //
        //
        //   return data;
        //
        // });
    };
    /**
     *redirect to login url after clicking logout button.
     *
     */
    AccountInfoHttpService.prototype.doLogOut = function () {
        this._http.get('http://localhost:8080/user/logout');
        // after logging out need to redirect to login page
        window.location.href = 'http://localhost:8080/login';
    };
    /**
     * get all countries name from assets.
     *
     * @returns {Observable<R>}
     */
    AccountInfoHttpService.prototype.getCountryData = function () {
        console.log('hit it before');
        return this._http.get('./assets/data/country_data.json')
            .map(function (data) {
            // console.log(data);
            return data;
        });
    };
    /**
     *
     * @param User
     */
    AccountInfoHttpService.prototype.updateAccountInfo = function (user) {
        this._http.post('http://localhost:8080/user/update-info', user).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
    };
    AccountInfoHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AccountInfoHttpService);
    return AccountInfoHttpService;
}());



/***/ }),

/***/ "./src/app/Services/AccountInfoServices/account-info-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoData; });
/**
 * Created by vidhyasagar on 13.01.18.
 */
var AccountInfoData = /** @class */ (function () {
    function AccountInfoData() {
        this._email_id = "test@gmail.com";
    }
    Object.defineProperty(AccountInfoData.prototype, "first_name", {
        get: function () {
            return this._first_name;
        },
        set: function (value) {
            this._first_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "last_name", {
        get: function () {
            return this._last_name;
        },
        set: function (value) {
            this._last_name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "date_of_birth", {
        get: function () {
            return this._date_of_birth;
        },
        set: function (value) {
            this._date_of_birth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "email_id", {
        get: function () {
            return this._email_id;
        },
        set: function (value) {
            this._email_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "mobile_number", {
        get: function () {
            return this._mobile_number;
        },
        set: function (value) {
            this._mobile_number = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "get_notification_for_new_request", {
        get: function () {
            return this._get_notification_for_new_request;
        },
        set: function (value) {
            this._get_notification_for_new_request = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "picture_url", {
        get: function () {
            return this._picture_url;
        },
        set: function (value) {
            this._picture_url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "interest", {
        get: function () {
            return this._interest;
        },
        set: function (value) {
            this._interest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "looking_for_freelancing_projects", {
        get: function () {
            return this._looking_for_freelancing_projects;
        },
        set: function (value) {
            this._looking_for_freelancing_projects = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountInfoData.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    return AccountInfoData;
}());



/***/ }),

/***/ "./src/app/Services/ChatServices/MessageService/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WebSocketService_web_socket_service__ = __webpack_require__("./src/app/Services/WebSocketService/web-socket-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageService = /** @class */ (function () {
    function MessageService(_http, _webSocketService) {
        this._http = _http;
        this._webSocketService = _webSocketService;
        this.chatBoxes = [];
        this.messages = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    /**
     *
     * @param message
     */
    MessageService.prototype.addChatBox = function (message) {
        this.messages.next(message);
        // Storing values in central array, so that we could access all around the app.
        this.chatBoxes.push(message);
    };
    /**
     *
     * @param message
     */
    MessageService.prototype.storeNewMessageInLocalDB = function (newMessage) {
        this.chatBoxes.forEach(function (chatBox) {
            console.log('test to email address ' + chatBox.emailId + ' ' + newMessage.to);
            if (chatBox.emailId == newMessage.to) {
                chatBox.messages.push(newMessage);
            }
        });
    };
    /**
     *
     * store messages in LocalDB as well as in RemoteDB
     *
     * @param chatBox
     * @param newMessage
     */
    MessageService.prototype.storeNewMessage = function (newMessage) {
        //TODO Refactor it.
        var _this = this;
        var webSocketMessage;
        webSocketMessage = newMessage;
        //todo Send the message in socket.io
        this._webSocketService.sendData(webSocketMessage);
        console.log("message to email id " + newMessage.to);
        //TODO Need to do right exception handler here.
        // store the message in localDB
        this.storeNewMessageInLocalDB(newMessage);
        //check whether the new Message has conversationId.
        if (newMessage.conversation_id == null) {
            //get conversation_id from mongoDB.
            this.getNewConversationListIdFromDB(newMessage.to).subscribe(function (data) {
                // update the message DTO with conversationID.
                newMessage.conversation_id = data.conversation_id;
                //update the localDB as well.
                _this.addNewConversationId(newMessage);
                //store it in localDB and remoteDB.
                _this.storeInRemoteDB(newMessage);
            });
        }
        else {
            //store it in localDB and remoteDB.
            this.storeInRemoteDB(newMessage);
        }
    };
    /**
     *
     * @param {Message} newMessage
     */
    MessageService.prototype.storeInRemoteDB = function (newMessage) {
        //Store in LocalDB
        //Read and Convert it to JSON
        var messageToStoreInDB = this.convertMessageToJson(newMessage);
        //Store in remoteDB (MongoDB)
        this.storeMessageInDB(messageToStoreInDB);
    };
    /**
     *
     * @param {Message} newMessage
     * @param newConversationId
     */
    MessageService.prototype.addNewConversationId = function (newMessage) {
        this.friendLists.forEach(function (friendList) {
            if (friendList.email_id == newMessage.to) {
                friendList.conversation_id = newMessage.conversation_id;
            }
        });
    };
    /**
     *
     * @param {Message} newMessage
     * @returns {any}
     */
    MessageService.prototype.convertMessageToJson = function (newMessage) {
        var messageToStoreInDB = this.generateMessageJSON(newMessage);
        return messageToStoreInDB;
    };
    /**
     *
     * @param messageToStore
     * @returns {string}
     */
    MessageService.prototype.generateMessageJSON = function (messageToStore) {
        var messageToStoreInDB = '{"to" : "' + messageToStore.to + '","conversation_id" ' +
            ': "' + messageToStore.conversation_id + '","from" : "","body" : "' + messageToStore.body + '","sent_time" : "22/5/2018"}';
        return JSON.parse(messageToStoreInDB);
    };
    /**
     * getting contact lists.
     *
     * @returns {Observable<Object>}
     */
    MessageService.prototype.getFriendLists = function () {
        return this.getFriendListsFromDB();
    };
    /**
     *
     */
    MessageService.prototype.clearMessages = function () {
        this.messages.next();
    };
    MessageService.prototype.getMessage = function () {
        return this.messages.asObservable();
    };
    /**
     * store messages in mongoDB
     *
     * needs to pass the messages to be stored in mongoDB in param
     * @param {string} messageToStore
     */
    MessageService.prototype.storeMessageInDB = function (messageToStore) {
        this._http.post('http://localhost:8080/userMessages/store', messageToStore).subscribe();
    };
    /**
     *
     * it fetches all messages from mongoDB using toAddressEmailID.
     *
     * pass toAddressEmailID as parameter
     * @param {string} conversationId
     * @returns {Observable<any[]>}
     */
    MessageService.prototype.fetchAllMessagesFromDB = function (conversationId) {
        return this._http
            .get('http://localhost:8080/userMessages/get?conversationId=' + conversationId);
    };
    /**
     * gets all contact lists first to show in frontEnd,
     * so the user can choose the remote user to chat.
     *
     * @returns {Observable<any[]>}
     */
    MessageService.prototype.getFriendListsFromDB = function () {
        return this._http
            .get('http://localhost:8080/user_contact/get/contact_lists');
        // return this._http
        //   .get<FriendList[]>
        //   ('./assets/data/contact_lists_mockdata.json');
    };
    /**
     * it adds new conversation list,
     * so we will have conversationListId to store all conversation messages.
     *
     * needs to pass remoteUserEmailId in parameter to recognize.
     * @param {string} remoteUserEmailId
     */
    MessageService.prototype.getNewConversationListIdFromDB = function (remoteUserEmailId) {
        return this._http
            .get('http://localhost:8080/userConversationList/get?emailId=' + remoteUserEmailId);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__WebSocketService_web_socket_service__["a" /* WebSocketService */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/Services/ChatServices/MessageService/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/**
 * Created by vidhyasagar on 22.03.18.
 */
var Message = /** @class */ (function () {
    function Message() {
    }
    Object.defineProperty(Message.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "conversation_id", {
        get: function () {
            return this._conversation_id;
        },
        set: function (value) {
            this._conversation_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (value) {
            this._to = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            this._from = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "body", {
        get: function () {
            return this._body;
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Message.prototype, "sentTime", {
        get: function () {
            return this._sentTime;
        },
        set: function (value) {
            this._sentTime = value;
        },
        enumerable: true,
        configurable: true
    });
    return Message;
}());



/***/ }),

/***/ "./src/app/Services/FreelancingProjectService/freelancing-project-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancingProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FreelancingProjectService = /** @class */ (function () {
    //TODO FETCH ALL FREELANCING PROJECTS BY PAGE BY PAGE.
    function FreelancingProjectService(_http) {
        this._http = _http;
    }
    /**
     *
     * @returns {Observable<FreelancingProject[]>}
     */
    FreelancingProjectService.prototype.getFreelancingProjects = function () {
        return this._http.get("/assets/version-1.1/data/freelancing_project_mockdata.json");
    };
    FreelancingProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FreelancingProjectService);
    return FreelancingProjectService;
}());



/***/ }),

/***/ "./src/app/Services/ImageServices/image-gallery-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Created by vidhyasagar on 29.03.18.
 */
var ImageGalleryService = /** @class */ (function () {
    function ImageGalleryService(_http) {
        this._http = _http;
        this.visibleImages = [];
    }
    /**
     *
     * @param {File} file
     * @returns {Observable<HttpEvent<{}>>}
     */
    ImageGalleryService.prototype.uploadImage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('POST', 'http://localhost:8080/image_gallery/upload', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this._http.request(req);
    };
    /**
     *
     * @returns {Observable<Object>}
     */
    ImageGalleryService.prototype.getImages = function () {
        return this._http.get("/assets/version-1.1/images/image-gallery");
    };
    /**
     *
     * @param {string} imageUrl
     * @returns {Observable<File>}
     */
    ImageGalleryService.prototype.getImage = function (imageName) {
        return this._http
            .get("http://localhost:8080/image_gallery/get/image/" + imageName, { responseType: 'blob' });
    };
    ImageGalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ImageGalleryService);
    return ImageGalleryService;
}());

var IMAGES = [
    { 'id': 1, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' },
    { 'id': 2, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' },
    { 'id': 3, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' },
    { 'id': 4, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' },
    { 'id': 5, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' },
    { 'id': 6, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' },
    { 'id': 7, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' },
    { 'id': 8, 'category': 'boats', 'caption': 'View from a boat', 'url': './assets/images/action-adult-dance.jpg' }
];


/***/ }),

/***/ "./src/app/Services/SearchServices/search-http-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Created by vidhyasagar on 09.03.18.
 */
var SearchPageHttpService = /** @class */ (function () {
    function SearchPageHttpService(_http) {
        this._http = _http;
        // defining circles statically.
        this.circlesInLocalDB = [];
    }
    /**
     *
     * @param userDetail
     */
    SearchPageHttpService.prototype.storeFollowingStatus = function (userDetail) {
        // for(var i =0; i<this.followingDataLocalStorage.length;i ++){
        //
        //   if(this.followingDataLocalStorage[i].emailId == userInfoToShow.emailId){
        //
        //     this.followingDataLocalStorage[i].following = !this.followingDataLocalStorage[i].following;
        //
        //   }
        //
        // }
    };
    /**
     *
     * @param searchNearbyUsers
     * @returns {Subscription}
     */
    SearchPageHttpService.prototype.getNearByUsers = function (searchNearbyUsers) {
        // return this._http.get<NearbyUser[]>('./assets/data/search_nearby_users_mockdata.json').map((data) => {
        //
        //    return data;
        // });
        return this._http.post('/search/get/nearby_users', JSON.stringify(searchNearbyUsers)).map(function (data) {
            return data;
        });
    };
    /**
     *
     * @param userDetail
     */
    SearchPageHttpService.prototype.followUser = function (userDetail) {
        this._http.get('http://localhost:8080/user_contact/follow?emailId=' + userDetail.emailId).subscribe(function (response) {
            console.log(response);
        });
    };
    /**
     *
     * @param userDetail
     */
    SearchPageHttpService.prototype.unFollowUser = function (userDetail) {
        this._http.get('http://localhost:8080/user_contact/unfollow?emailId=' + userDetail.emailId).subscribe(function (response) {
            console.log(response);
        });
    };
    SearchPageHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchPageHttpService);
    return SearchPageHttpService;
}());



/***/ }),

/***/ "./src/app/Services/WebSocketService/web-socket-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__ = __webpack_require__("./node_modules/ng2-stomp-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by vidhyasagar on 06.04.18.
 */
var WebSocketService = /** @class */ (function () {
    function WebSocketService(stomp) {
        var _this = this;
        this.stomp = stomp;
        this.serverUrl = 'http://localhost:8080/socket';
        this.dataSubscription = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        //response
        this.response = function (data) {
            // console.log(data);
            _this.dataSubscription.next(data);
        };
        //configuration
        stomp.configure({
            host: this.serverUrl,
            debug: true,
            queue: { 'init': false }
        });
        //start connection
        stomp.startConnect().then(function () {
            stomp.done('init');
            console.log('connected');
            //subscribe
            stomp.subscribe('/chat', _this.response);
            // register the user in WebSocketSession.
            _this.registerUser();
            //send data
            // stomp.send('destination',{"data":"data"});
            // to close the connection properly
            //TODO unsubscribe the user after logout or inactive mode
            // //unsubscribe
            // this.subscription.unsubscribe();
            //
            // //disconnect
            // stomp.disconnect().then(() => {
            //   console.log( 'Connection closed' )
            // })
        });
    }
    /**
     *
     * @returns {any}
     */
    WebSocketService.prototype.getDataSubscription = function () {
        return this.stomp.subscribe('/chat', this.response);
    };
    /**
     * send data/messages in web socket
     *
     * @param message
     */
    WebSocketService.prototype.sendData = function (message) {
        this.stomp.send('/app/send/message', message);
        // this.stompClient.send("/app/send/message" , {}, message);
    };
    /**
     * register the user in WebSocketSession.
     *
     * @param message
     */
    WebSocketService.prototype.registerUser = function () {
        this.stomp.send('/app/register/user', "hallo");
        // this.stompClient.send("/app/send/message" , {}, message);
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__["StompService"]])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/account-info/account-info.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" [formGroup]=\"form\"\n      (ngSubmit)=\"onSubmit(form.value)\">\n\n  <br>\n\n  <div class=\"col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4\" style=\"margin-top: 60px;\">\n\n    <div class=\"col-xs-3 col-sm-3 col-md-4 col-lg-4\" style=\"    margin-left: 8%;\">\n\n      <input type=\"text\" class=\"form-control inputBoxDark\" name=\"firstName\" placeholder=\"firstname\" formControlName=\"firstName\"\n             maxlength=\"100\">\n\n      <br>\n\n      <div *ngIf=\"form.controls.firstName.invalid\" class=\"alert alert-danger\" role=\"alert\">Please enter the first name\n      </div>\n\n\n      <input type=\"text\" class=\"inputBoxDark form-control\" name=\"lastName\" placeholder=\"lastname\" formControlName=\"lastName\"\n             maxlength=\"100\">\n\n      <br>\n\n      <div *ngIf=\"form.controls.lastName.invalid\" class=\"alert alert-danger\" role=\"alert\">Please enter the last name\n      </div>\n\n\n      <!--<my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\"-->\n                      <!--formControlName=\"myDate\"></my-date-picker>-->\n\n      <input type=\"date\" class=\"inputBoxDark form-control\" name=\"mydate\" min=\"1900-01-01\" max=\"2010-12-31\" formControlName=\"myDate\" required=\"true\" />\n\n      <br>\n\n      <select class=\"inputBoxDark form-control\" name=\"country\" formControlName=\"country\"\n              (change)=\"fetchCities()\">\n\n        <option *ngFor=\"let c of countries\" [selected]=\"c.name == 'Germany'\">{{c.name}}</option>\n\n      </select>\n\n\n      <br> <input type=\"text\" (click)=\"toggleDropDown()\" class=\"form-control\" name=\"city\" placeholder=\"city\"\n                  formControlName=\"city\"\n                  maxlength=\"100\" (keyup)=\"search($event)\" autocomplete=\"new-password\">\n\n      <div (clickOutside)=\"onClickedOutside()\" *ngIf=\"showDropDown\" class=\"state state-container-dropdown\">\n\n        <div (click)='selectValue(city.name)' *ngFor=\"let city of cities | searchFilter: getSearchValue()\">\n\n          <!--<li>-->\n\n          <!--{{city.city_name}}-->\n\n          <a [innerHTML]=\"city.name\">\n            {{city.name}}\n          </a>\n\n          <!--</li>-->\n\n        </div>\n\n      </div>\n\n\n      <br>\n\n\n      <div *ngIf=\"form.controls.city.invalid\" class=\"alert alert-danger\" role=\"alert\">Please enter the city name</div>\n\n\n      <input type=\"text\" class=\"inputBoxDark form-control\" name=\"email\" placeholder=\"email\" formControlName=\"email\"\n             maxlength=\"100\" disabled>\n\n      <br>\n\n      <input type=\"tel\" class=\"inputBoxDark form-control\" name=\"mobileNumber\" placeholder=\"+49 1726658284\" formControlName=\"mobileNumber\" maxlength=\"14\">\n\n\n      <br> <input type=\"password\" class=\"inputBoxDark form-control\" name=\"password\" placeholder=\"password\" formControlName=\"password\"\n                  maxlength=\"100\" style=\"box-shadow: 0 0 3px #CC0000;\">\n\n      <br>\n\n      <div *ngIf=\"form.controls.password.invalid\" class=\"alert alert-danger\" role=\"alert\">Please enter the password\n      </div>\n\n\n      <input type=\"password\" class=\"inputBoxDark form-control\" name=\"retypePassword\" placeholder=\"retype password\"\n             formControlName=\"retypePassword\" maxlength=\"100\">\n\n      <br>\n\n      <div *ngIf=\"form.controls.retypePassword.invalid\" class=\"alert alert-danger\" role=\"alert\">Please retype the\n        password\n      </div>\n\n\n      <input type=\"text\" class=\"inputBoxDark form-control\" name=\"notRobotCode\" placeholder=\"notRobotCode\"\n             formControlName=\"notRobotCode\" maxlength=\"100\">\n\n\n      <br> <input type=\"text\" class=\"inputBoxDark form-control\" name=\"interest\" placeholder=\"interest\" formControlName=\"interest\"\n                  maxlength=\"100\">\n\n      <br>\n\n      <div *ngIf=\"form.controls.interest.invalid\" class=\"alert alert-danger\" role=\"alert\">Please enter the interest\n      </div>\n\n\n      <input type=\"text\" class=\"inputBoxDark form-control\" name=\"description\" placeholder=\"few lines about you\"\n             formControlName=\"description\" maxlength=\"100\">\n\n      <br>\n\n      <div *ngIf=\"form.controls.description.invalid\" class=\"alert alert-danger\" role=\"alert\">Please describe yourself\n      </div>\n\n\n      <button type=\"submit\" class=\"darkButton btn-group-justified\">Save</button>\n\n\n      <!--<div class=\"g-recaptcha\" data-sitekey=\"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI\"></div>-->\n\n      <!--<noscript>-->\n      <!--<div>-->\n      <!--<iframe src=\"https://www.google.com/recaptcha/api/fallback?k=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI\"-->\n      <!--frameborder=\"0\" scrolling=\"no\"-->\n      <!--style=\"border-style: none;\">-->\n      <!--</iframe>-->\n      <!--<div style=\"border-style: none;-->\n      <!--background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px;\">-->\n      <!--<textarea id=\"g-recaptcha-response\" name=\"g-recaptcha-response\"-->\n      <!--class=\"g-recaptcha-response\"-->\n      <!--style=\"border: 1px solid #c1c1c1;\" >-->\n      <!--</textarea>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</noscript>-->\n\n    </div>\n\n\n  </div>\n\n\n</form>\n\n\n<!--<button class=\"darkButton\" value=\"UploadJSON\" (click)=\"getData()\"></button>-->\n"

/***/ }),

/***/ "./src/app/account-info/account-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_AccountInfoServices_account_info_http_service__ = __webpack_require__("./src/app/Services/AccountInfoServices/account-info-http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_AccountInfoServices_account_info_model__ = __webpack_require__("./src/app/Services/AccountInfoServices/account-info-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountInfoComponent = /** @class */ (function () {
    function AccountInfoComponent(_accountInfoService) {
        this._accountInfoService = _accountInfoService;
        this.countries = [];
        // private citiesFromJson: CityData[] = [];
        this.cities = null;
        this.showDropDown = false;
    }
    /**
     *
     */
    AccountInfoComponent.prototype.fetchCities = function () {
        var _this = this;
        console.log("hit it " + this.form.controls["country"].value);
        // set the city value null after changing
        this.form.patchValue({ "city": "" });
        this._accountInfoService.getCityDataFromMongoDBUsingCountryName(this.form.controls["country"].value).subscribe(function (data) {
            if (data.length <= 100) {
                _this.cities = data;
            }
        });
    };
    /**
     *
     */
    AccountInfoComponent.prototype.selectValue = function (value) {
        this.form.patchValue({ "city": value });
        this.showDropDown = false;
    };
    /**
     *
     */
    AccountInfoComponent.prototype.getSearchValue = function () {
        return this.form.value.city;
    };
    /**
     *
     * @param $event
     */
    AccountInfoComponent.prototype.search = function ($event) {
        // let q = $event.target.value;
        //
        // console.log("starting value " + $event.target.value);
        //
        // q = q.charAt(0).toUpperCase() + q.slice(1);
        //
        //
        // this._accountInfoService.getCityDataFromMongoDB(q).subscribe((data) => {
        //
        //   console.log("test " + JSON.stringify(data));
        //
        //   this.cities = data;
        // });
    };
    /**
     *
     */
    AccountInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._accountInfoData = new __WEBPACK_IMPORTED_MODULE_3__Services_AccountInfoServices_account_info_model__["a" /* AccountInfoData */]();
        this._accountInfoService.getCountryData().subscribe(function (data) {
            _this.countries = data;
        });
        this.initializeForm();
        this._accountInfoService.getAccountInfo().subscribe(function (data) {
            _this._accountInfoData = data;
            var firstName = _this._accountInfoData.first_name;
            var lastName = _this._accountInfoData.last_name;
            var country = _this._accountInfoData.country;
            var city = _this._accountInfoData.city;
            var emailId = _this._accountInfoData.email_id;
            var mobileNumber = _this._accountInfoData.mobile_number;
            var password = _this._accountInfoData.password;
            var interest = _this._accountInfoData.interest;
            var desc = _this._accountInfoData.description;
            var dateOfBirth = _this._accountInfoData.date_of_birth;
            console.log("mobile number test " + mobileNumber);
            _this.form.patchValue({ "firstName": firstName });
            _this.form.patchValue({ "lastName": lastName });
            _this.form.patchValue({ "email": emailId });
            _this.form.patchValue({ "country": country });
            _this.fetchCities();
            _this.form.patchValue({ "city": city });
            _this.form.patchValue({ "myDate": dateOfBirth });
            _this.form.patchValue({ "password": password });
            _this.form.patchValue({ "retypePassword": password });
            _this.form.patchValue({ "interest": interest });
            _this.form.patchValue({ "description": desc });
            _this.form.patchValue({ "mobileNumber": mobileNumber });
            console.log("test " + _this._accountInfoData.first_name);
        });
    };
    AccountInfoComponent.prototype.toggleDropDown = function () {
        this.showDropDown = !this.showDropDown;
    };
    AccountInfoComponent.prototype.onClickedOutside = function () {
        this.showDropDown = false;
    };
    AccountInfoComponent.prototype.initializeForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this._accountInfoData.first_name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this._accountInfoData.last_name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            myDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this._accountInfoData.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            mobileNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this._accountInfoData.mobile_number),
            getNotificationForNewRequests: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            uploadPicture: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this._accountInfoData.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            retypePassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            notRobotCode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            interest: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            lookingForFreelancingProjects: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](""),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("")
        });
        console.log("testing first name after initialization " + this.form.value._first_name);
    };
    AccountInfoComponent.prototype.onSubmit = function (user) {
        this._accountInfoService.updateAccountInfo(user);
        console.log("is form valid " + this.form.valid);
        console.log(user);
    };
    AccountInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-account-form',
            template: __webpack_require__("./src/app/account-info/account-info.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_AccountInfoServices_account_info_http_service__["a" /* AccountInfoHttpService */]])
    ], AccountInfoComponent);
    return AccountInfoComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#mainContainer{\n  background: rgba(0, 0, 0, 4);\n}\n\n\n.container-fluid {\n  height: 100%;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n\nh1 {\n  font-family: Pacifico;\n  font-size: 35px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 26.4px;\n  color: whitesmoke;\n}\n\n\nh3 {\n  font-family: Pacifico;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 15.4px;\n}\n\n\np {\n  font-family: Pacifico;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\n\nblockquote {\n  font-family: Pacifico;\n  font-size: 21px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 30px;\n}\n\n\npre {\n  font-family: Pacifico;\n  font-size: 13px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 18.5714px;\n}\n\n\n/* Overriding styles */\n\n\n::-webkit-input-placeholder {\n  font-family: Pacifico!important;\n}\n\n\n:-moz-placeholder { /* Firefox 18- */\n  font-family: Pacifico!important;\n}\n\n\n::-moz-placeholder {  /* Firefox 19+ */\n  font-family: Pacifico!important;\n}\n\n\n.logout-button{\n  position: fixed;\n  margin-top: -2.5%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"snap-drawers\">-->\n  <!--<div class=\"snap-drawer snap-drawer-left\">-->\n    <!--<div>-->\n      <!--<h3>HobbyMate</h3>-->\n      <!--<div class=\"demo-social\">-->\n      <!--</div>-->\n      <!--<ul>-->\n        <!--<li>-->\n          <!--<a routerLink=\"search\"-->\n             <!--routerLinkActive=\"active\">Find Match</a>-->\n        <!--</li>-->\n        <!--<li><a routerLink=\"chat\"-->\n               <!--routerLinkActive=\"active\">Messages</a></li>-->\n        <!--<li><a routerLink=\"newAccount\"-->\n               <!--routerLinkActive=\"active\">New Account</a></li>-->\n        <!--&lt;!&ndash;<li><a routerLink=\"socketChat\" routerLinkActive=\"active\">Freelancing Projects</a></li>&ndash;&gt;-->\n        <!--<li><a routerLink=\"imageGallery\"-->\n               <!--routerLinkActive=\"active\">Image Gallery</a></li>-->\n        <!--<li><a routerLink=\"freelancingProjects\"-->\n               <!--routerLinkActive=\"active\">Freelancing Projects</a></li>-->\n        <!---->\n      <!---->\n      <!--</ul>-->\n    <!---->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"snap-drawer snap-drawer-right\"></div>-->\n<!--</div>-->\n\n<!--&lt;!&ndash; in content we have background image &ndash;&gt;-->\n<!--<div id=\"content\"-->\n     <!--class=\"snap-content\">-->\n  <!---->\n  <!--<div id=\"toolbar\"-->\n       <!--class=\"row\">-->\n    <!--<div id=\"open-left\"></div>-->\n    <!---->\n    <!--<div class=\"logout-button col-xs-4 col-sm-4 col-md-4 col-lg-1 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-11\">-->\n      <!--<button class=\"darkButton\"-->\n              <!--(click)=\"logOut()\">Log out-->\n      <!--</button>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!---->\n  <!--<div id=\"main-content\">-->\n    <!---->\n    <!--<router-outlet></router-outlet>-->\n  <!---->\n  <!--</div>-->\n\n<!--</div>-->\n\n\n<div class=\"main-background\">\n\n<nav class=\"navbar navbar-inverse\" style=\"background: #191515\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <!--<a class=\"navbar-brand\" href=\"#\">WebSiteName</a>-->\n    </div>\n\n    <ul class=\"nav navbar-nav\">\n    <li>\n    <a routerLink=\"search\"\n    routerLinkActive=\"active\">Find Match</a>\n    </li>\n    <li><a routerLink=\"chat\"\n    routerLinkActive=\"active\">Messages</a></li>\n    <li><a routerLink=\"accountInfo\"\n    routerLinkActive=\"active\">Account Info</a></li>\n    <!--<li><a routerLink=\"socketChat\" routerLinkActive=\"active\">Freelancing Projects</a></li>-->\n    <li><a routerLink=\"imageGallery\"\n    routerLinkActive=\"active\">Image Gallery</a></li>\n    <li><a routerLink=\"freelancingProjects\"\n    routerLinkActive=\"active\">Freelancing Projects</a></li>\n\n\n    </ul>\n\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a (click)=\"logOut()\"><span class=\"glyphicon glyphicon-log-in\"></span> Log-Out</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n<div id=\"main-content\">\n\n<router-outlet></router-outlet>\n\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_AccountInfoServices_account_info_http_service__ = __webpack_require__("./src/app/Services/AccountInfoServices/account-info-http-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_accountInfoHttpService) {
        var _this = this;
        this._accountInfoHttpService = _accountInfoHttpService;
        this._accountInfoHttpService.getAccountInfo().subscribe(function (data) {
            _this.userName = data.first_name;
        });
        // // socket.io initialization
        //
        // console.log("intializing socket.io");
        //
        // this.socket = io();
    }
    /**
     *
     */
    AppComponent.prototype.logOut = function () {
        console.log("doing logout");
        this._accountInfoHttpService.doLogOut();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_AccountInfoServices_account_info_http_service__["a" /* AccountInfoHttpService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service__ = __webpack_require__("./node_modules/ng2-stomp-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_router__ = __webpack_require__("./src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_partner_search_partner_component__ = __webpack_require__("./src/app/search-partner/search-partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_room_chat_room_component__ = __webpack_require__("./src/app/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_room_chat_box_chat_box_component__ = __webpack_require__("./src/app/chat-room/chat-box/chat-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Services_ChatServices_MessageService_message_service__ = __webpack_require__("./src/app/Services/ChatServices/MessageService/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_info_account_info_component__ = __webpack_require__("./src/app/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Services_AccountInfoServices_account_info_http_service__ = __webpack_require__("./src/app/Services/AccountInfoServices/account-info-http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CentralComponents_filter_pipe__ = __webpack_require__("./src/app/CentralComponents/filter-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CentralComponents_letter_bold_pipe__ = __webpack_require__("./src/app/CentralComponents/letter-bold.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__socket_chat_socket_chat_component__ = __webpack_require__("./src/app/socket-chat/socket-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CentralComponents_map_key_value_pipe__ = __webpack_require__("./src/app/CentralComponents/map-key-value-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_SearchServices_search_http_service__ = __webpack_require__("./src/app/Services/SearchServices/search-http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__image_gallery_image_gallery_component__ = __webpack_require__("./src/app/image-gallery/image-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_ImageServices_image_gallery_service__ = __webpack_require__("./src/app/Services/ImageServices/image-gallery-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__image_gallery_image_full_screen_mode_image_full_screen_mode_component__ = __webpack_require__("./src/app/image-gallery/image-full-screen-mode/image-full-screen-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__freelancing_project_freelancing_projects_component__ = __webpack_require__("./src/app/freelancing-project/freelancing-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Services_WebSocketService_web_socket_service__ = __webpack_require__("./src/app/Services/WebSocketService/web-socket-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Services_FreelancingProjectService_freelancing_project_service__ = __webpack_require__("./src/app/Services/FreelancingProjectService/freelancing-project-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__CentralComponents_filter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__CentralComponents_letter_bold_pipe__["a" /* LetterBoldPipe */],
                __WEBPACK_IMPORTED_MODULE_17__CentralComponents_map_key_value_pipe__["a" /* MapToEntryPipe */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__search_partner_search_partner_component__["a" /* SearchPartnerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chat_room_chat_room_component__["a" /* ChatRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chat_room_chat_box_chat_box_component__["a" /* ChatBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_11__account_info_account_info_component__["a" /* AccountInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__socket_chat_socket_chat_component__["a" /* SocketChatComponent */],
                __WEBPACK_IMPORTED_MODULE_19__image_gallery_image_gallery_component__["a" /* ImageGalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__image_gallery_image_full_screen_mode_image_full_screen_mode_component__["a" /* ImageFullScreenModeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__freelancing_project_freelancing_projects_component__["a" /* FreelancingProjectsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                // CountryPickerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__app_router__["a" /* routes */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__Services_ChatServices_MessageService_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_12__Services_AccountInfoServices_account_info_http_service__["a" /* AccountInfoHttpService */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_stomp_service__["StompService"],
                __WEBPACK_IMPORTED_MODULE_18__Services_SearchServices_search_http_service__["a" /* SearchPageHttpService */],
                __WEBPACK_IMPORTED_MODULE_20__Services_ImageServices_image_gallery_service__["a" /* ImageGalleryService */],
                __WEBPACK_IMPORTED_MODULE_23__Services_WebSocketService_web_socket_service__["a" /* WebSocketService */],
                __WEBPACK_IMPORTED_MODULE_24__Services_FreelancingProjectService_freelancing_project_service__["a" /* FreelancingProjectService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_partner_search_partner_component__ = __webpack_require__("./src/app/search-partner/search-partner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_info_account_info_component__ = __webpack_require__("./src/app/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_chat_socket_chat_component__ = __webpack_require__("./src/app/socket-chat/socket-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_room_chat_room_component__ = __webpack_require__("./src/app/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_gallery_image_gallery_component__ = __webpack_require__("./src/app/image-gallery/image-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__freelancing_project_freelancing_projects_component__ = __webpack_require__("./src/app/freelancing-project/freelancing-projects.component.ts");







var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__search_partner_search_partner_component__["a" /* SearchPartnerComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_1__search_partner_search_partner_component__["a" /* SearchPartnerComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_4__chat_room_chat_room_component__["a" /* ChatRoomComponent */] },
    { path: 'accountInfo', component: __WEBPACK_IMPORTED_MODULE_2__account_info_account_info_component__["a" /* AccountInfoComponent */] },
    { path: 'socketChat', component: __WEBPACK_IMPORTED_MODULE_3__socket_chat_socket_chat_component__["a" /* SocketChatComponent */] },
    { path: 'imageGallery', component: __WEBPACK_IMPORTED_MODULE_5__image_gallery_image_gallery_component__["a" /* ImageGalleryComponent */] },
    { path: 'freelancingProjects', component: __WEBPACK_IMPORTED_MODULE_6__freelancing_project_freelancing_projects_component__["a" /* FreelancingProjectsComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "./src/app/chat-room/chat-box/chat-box.component.css":
/***/ (function(module, exports) {

module.exports = ".chat\n{\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.chat li\n{\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #B3A9A9;\n}\n\n.chat li.left .chat-body\n{\n  margin-left: 60px;\n}\n\n.chat li.right .chat-body\n{\n  margin-right: 60px;\n}\n\n.chat li .chat-body p\n{\n  margin: 0;\n  color: #777777;\n}\n\n.panel .slidedown .glyphicon, .chat .glyphicon\n{\n  margin-right: 5px;\n}\n\n.panel-body\n{\n  overflow-y: scroll;\n  height: 250px;\n}\n\n::-webkit-scrollbar-track\n{\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar\n{\n  width: 12px;\n  background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb\n{\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n  background-color: #555;\n}\n\n.main-cover {\n  width: 28%;\n\n}\n\n/*.chat-box-bottom{*/\n\n/*margin-top: 24%;*/\n\n/*}*/\n\n.scroll-area{\n\n  overflow-x: visible;\n  overflow-y: hidden;\n\n}\n\n.hidden-panel {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  position: absolute;\n  bottom: 22px;\n  width: 322px;\n  color: #fff;\n}\n\n.hidden-panel > .dropdown .dropdown-toggle {\n  color: inherit; }\n"

/***/ }),

/***/ "./src/app/chat-room/chat-box/chat-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-box-bottom scroll-area\"\n     style=\"position: absolute;bottom: 0\">\n  \n  <div class=\"row\"\n       style=\"display: inline-flex;\">\n    \n   <ng-container *ngFor=\"let chatBox of this._messageService.chatBoxes\">\n    \n    <div *ngIf=\"chatBox.mainPanelVisibility\" class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\"\n         style=\"width: 322px;\">\n      \n      <!--\n\n     Main panel\n\n\n     -->\n  \n  \n      <div *ngIf=\"chatBox.mainPanelVisibility\"\n           class=\"panel panel-primary\"\n           style=\"margin-bottom: 0px;\">\n        <div class=\"panel-heading\">\n          <span class=\"glyphicon glyphicon-comment\"></span> {{chatBox.name}}\n          <div class=\"btn-group pull-right\">\n            <!--<button type=\"button\"-->\n                    <!--class=\"btn btn-default btn-xs dropdown-toggle\"-->\n                    <!--data-toggle=\"dropdown\"-->\n                    <!--(click)=\"changeInVisibilityByMinimizing(chatBox)\">-->\n              <!--<span class=\"glyphicon glyphicon-chevron-down\"></span>-->\n            <!--</button>-->\n            \n            <button type=\"button\"\n                    class=\"btn btn-default btn-xs dropdown-toggle\"\n                    data-toggle=\"dropdown\"\n                    (click)=\"changeInVisibilityByClosing(chatBox)\">\n              <span class=\"glyphicon glyphicon-remove\"></span>\n            </button>\n            \n            <ul class=\"dropdown-menu slidedown\">\n              \n              <li class=\"divider\"></li>\n              <li><a href=\"http://www.jquery2dotnet.com\"><span class=\"glyphicon glyphicon-off\"></span>\n                Sign Out</a></li>\n            </ul>\n          </div>\n        </div>\n        \n        <!--\n\n       panelBody, where all messages exists.\n        -->\n        \n        <div class=\"panel-body\"\n             style=\"background-color: #30404a;\">\n          \n          <ul class=\"chat\"\n              *ngFor=\"let message of chatBox.messages\">\n            \n            <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\"\n                                 alt=\"User Avatar\"\n                                 class=\"img-circle\"/>\n                        </span>\n              <div class=\"chat-body clearfix\">\n                <div class=\"header\"\n                     style=\"color: #f5f5f5;\">\n                  <strong class=\"primary-font\">{{chatBox.name}}</strong>\n                  <small class=\"pull-right text-muted\">\n                    <span class=\"glyphicon glyphicon-time\"></span>12 mins ago\n                  </small>\n                </div>\n                \n                <p style=\"color: #f5f5f5;\">\n                  {{message.body}}\n                </p>\n              \n              </div>\n            </li>\n          \n          </ul>\n        \n        </div>\n\n        <!--\n\n       \n        Panel footer where we type the message.\n\n        -->\n   \n        <div class=\"panel-footer\">\n          <div class=\"input-group\">\n            <input id=\"btn-input\"\n                   type=\"text\"\n                   class=\"form-control input-sm\"\n                   placeholder=\"Type your message here...\"\n                   [(ngModel)]=\"textBoxValue\"\n                   #box\n                   (keyup.enter)=\"sendNewMessage(box.value, chatBox)\"\n                   \n            />\n            <span class=\"input-group-btn\">\n                            <button class=\"btn btn-warning btn-sm\"\n                                    (click)=\"sendNewMessage(box.value, chatBox)\"\n                                    id=\"btn-chat\">\n                                Send</button>\n                        </span>\n          </div>\n        </div>\n      \n      </div>\n    </div> <!-- here ends the main panel div -->\n\n   </ng-container>\n   \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat-room/chat-box/chat-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_ChatServices_MessageService_message_service__ = __webpack_require__("./src/app/Services/ChatServices/MessageService/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_ChatServices_MessageService_message__ = __webpack_require__("./src/app/Services/ChatServices/MessageService/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_WebSocketService_web_socket_service__ = __webpack_require__("./src/app/Services/WebSocketService/web-socket-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatBoxComponent = /** @class */ (function () {
    function ChatBoxComponent(_messageService, _webSocketService) {
        this._messageService = _messageService;
        this._webSocketService = _webSocketService;
        this.textBoxValue = "";
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        // subscribe to chat message via WebSocket
        this._webSocketService.dataSubscription.subscribe(function (data) {
            // after receiving the message store it in local.
            // this._messageService.storeNewMessage(data);
        });
    };
    /**
     *
     * @param text
     * @param chatBoxModel
     */
    ChatBoxComponent.prototype.sendNewMessage = function (text, chatBoxModel) {
        if (text != "" && text != null) {
            // create new message model using chatBoxModel.
            var newMessage = this.buildMessageModel(text, chatBoxModel);
            //Empty the text box.
            this.textBoxValue = "";
            //add new messages in local as well as in remote.
            this._messageService.storeNewMessage(newMessage);
        }
    };
    /**
     *
     * @param {string} text
     * @returns {Message}
     */
    ChatBoxComponent.prototype.buildMessageModel = function (text, chatBoxModel) {
        var newMessage = new __WEBPACK_IMPORTED_MODULE_2__Services_ChatServices_MessageService_message__["a" /* Message */]();
        newMessage.body = text;
        newMessage.conversation_id = chatBoxModel._conversationId;
        newMessage.to = chatBoxModel._emailId;
        newMessage.sentTime = new Date().toDateString();
        return newMessage;
    };
    /**
     *
     * @param chatBox
     */
    ChatBoxComponent.prototype.changeInHiddenPanelVisibility = function (chatBox) {
        chatBox.mainPanelVisibility = true;
    };
    /**
     *
     * @param chatBox
     */
    ChatBoxComponent.prototype.changeInVisibilityByMinimizing = function (chatBox) {
        // hiding the main panel after clicking the minimize button nd showing the hiddenpanel.
        chatBox.mainPanelVisibility = false;
    };
    /**
     *
     * @param chatBox
     */
    ChatBoxComponent.prototype.changeInVisibilityByClosing = function (chatBox) {
        //close main as well as hidden panels
        chatBox.mainPanelVisibility = false;
    };
    ChatBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-box',
            template: __webpack_require__("./src/app/chat-room/chat-box/chat-box.component.html"),
            styles: [__webpack_require__("./src/app/chat-room/chat-box/chat-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_ChatServices_MessageService_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__Services_WebSocketService_web_socket_service__["a" /* WebSocketService */]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "./src/app/chat-room/chat-box/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBox; });
var ChatBox = /** @class */ (function () {
    function ChatBox() {
        this._messages = [];
        this._tempMessage = "";
        this._mainPanelVisibility = true;
    }
    Object.defineProperty(ChatBox.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBox.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBox.prototype, "imageSrc", {
        get: function () {
            return this._imageSrc;
        },
        set: function (value) {
            this._imageSrc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBox.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        set: function (value) {
            this._messages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBox.prototype, "tempMessage", {
        get: function () {
            return this._tempMessage;
        },
        set: function (value) {
            this._tempMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBox.prototype, "emailId", {
        get: function () {
            return this._emailId;
        },
        set: function (value) {
            this._emailId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBox.prototype, "conversationId", {
        get: function () {
            return this._conversationId;
        },
        set: function (value) {
            this._conversationId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatBox.prototype, "mainPanelVisibility", {
        get: function () {
            return this._mainPanelVisibility;
        },
        set: function (value) {
            this._mainPanelVisibility = value;
        },
        enumerable: true,
        configurable: true
    });
    return ChatBox;
}());



/***/ }),

/***/ "./src/app/chat-room/chat-room.component.css":
/***/ (function(module, exports) {

module.exports = ".adjustImageHorizontal {\n  margin-top: 44%;\n}\n.container {\n  height: 50%;\n  background-color: #000;\n  /* overflow: auto; */\n}\n.row {\n  position: absolute;\n}\n.scroll-area{\n  /*width:100%;*/\n  height:calc(100% - 200px);\n  float:left;\n  overflow-y:scroll;\n}\n.form-box\n{\n  border: 2px solid rgba(153, 153, 153, 0.75);\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -khtml-border-radius: 2px;\n  -o-border-radius: 2px;\n//z-index: 3;\n  font-size: 13px !important;\n  font-family: Pacifico;\n  background-color: #0e0808;\n  opacity: 0.6;\n}\n"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!--<div class=\"top\">-->\n  <!--<h2>CONTACTS</h2>-->\n  <!--</div>-->\n  \n  <button class=\"darkButton\"\n          (click)=\"toggleMenu()\">Show-chat-list\n  </button>\n  \n  <div class=\"scroll-area form-box col-sm-3 col-md-3 col-xs-3 col-lg-3 col-xl-3\"\n       style=\"height:60%;\"\n       [@slideInOut]=\"menuState\">\n    \n    <div *ngFor=\"let chatList of this._messageService.friendLists\"\n         (click)=\"clickOnChatListName(chatList)\">\n      \n      <div class=\"col-sm-4 col-md-4 col-xs-4 col-lg-12 col-xl-4\">\n        \n        <div class=\"col-sm-1 col-md-1 col-xs-1 col-lg-3 col-xl-1\">\n          <img src=\"https://www.infrascan.net/demo/assets/img/avatar5.png\"\n               class=\"img-circle adjustImageHorizontal\"\n               width=\"30px\">\n        </div>\n        \n        <div class=\"col-sm-4 col-md-4 col-xs-4 col-lg-8 col-xl-4\">\n          <h3 style=\"color: white\">{{chatList.first_name}}</h3>\n        </div>\n      \n      </div>\n      \n      <div class=\"clearfix\"></div>\n    </div>\n  \n  </div>\n\n</div>\n\n<app-chat-box></app-chat-box>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_box_message_model__ = __webpack_require__("./src/app/chat-room/chat-box/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_ChatServices_MessageService_message_service__ = __webpack_require__("./src/app/Services/ChatServices/MessageService/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_ChatServices_MessageService_message__ = __webpack_require__("./src/app/Services/ChatServices/MessageService/message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent(_messageService) {
        this._messageService = _messageService;
        this.menuState = 'in';
        // this.name = 'Rahul';
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getFriendLists().subscribe(function (data) {
            console.log('friends list data ' + data);
            _this._messageService.friendLists = data;
        });
    };
    /**
     *
     * toggling menu to show and hiding the friend list.
     *
     */
    ChatRoomComponent.prototype.toggleMenu = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    /**
     *
     * update chat box data after clicking on chat list name
     *
     * @param chatListName
     */
    ChatRoomComponent.prototype.clickOnChatListName = function (contactList) {
        var _this = this;
        // initialize ChatBox.
        var chatBox = this.initializeChatBox(contactList);
        // check chatBoxView and open/add chatBox if it s less than 12 opened.
        if (this.canChatBoxOpen(contactList) && this._messageService.chatBoxes.length < 12) {
            // get conversation ID.
            this._messageService.getNewConversationListIdFromDB(chatBox.emailId).subscribe(function (data) {
                var conversationId = data.conversation_id;
                // fetch all messages from DB and inject it to chatBox.
                _this._messageService.fetchAllMessagesFromDB(conversationId).subscribe(function (data) {
                    chatBox._messages = data;
                    // add the chatBox in chatBoxes list.
                    _this._messageService.addChatBox(chatBox);
                });
            });
        }
    };
    /**
     *
     * check chat box already open or not. If yes, then say no.
     *
     * @param {FriendList} contactList
     * @returns {boolean}
     */
    ChatRoomComponent.prototype.canChatBoxOpen = function (contactList) {
        var _this = this;
        var isChatBoxAlreadyOpen = true;
        this._messageService.chatBoxes.forEach(function (chatBoxModelData) {
            isChatBoxAlreadyOpen = _this.checkAndSetView(chatBoxModelData, contactList, isChatBoxAlreadyOpen);
        });
        return isChatBoxAlreadyOpen;
    };
    /**
     *
     * @param chatBoxModelData
     * @param {FriendList} contactList
     * @param {boolean} showChatBox
     * @returns {boolean}
     */
    ChatRoomComponent.prototype.checkAndSetView = function (chatBoxModelData, contactList, showChatBox) {
        if (chatBoxModelData.name == contactList.first_name) {
            showChatBox = false;
            this.setPanelViewInChatBox(chatBoxModelData);
        }
        return showChatBox;
    };
    /**
     *
     * @param chatBoxModelData
     */
    ChatRoomComponent.prototype.setPanelViewInChatBox = function (chatBoxModelData) {
        //TODO Make it visible.
        chatBoxModelData.mainPanelVisibility = true;
    };
    /**
     * initalize the chat box with all details
     *
     * @param {FriendList} chatList
     * @returns {ChatBox}
     */
    ChatRoomComponent.prototype.initializeChatBox = function (chatList) {
        var chatBox = new __WEBPACK_IMPORTED_MODULE_1__chat_box_message_model__["a" /* ChatBox */]();
        var message = this.initializeMessageModel();
        chatBox.emailId = chatList.email_id;
        chatBox.name = chatList.first_name;
        chatBox.conversationId = chatList.conversation_id;
        chatBox.messages.push(message);
        chatBox.mainPanelVisibility = true;
        return chatBox;
    };
    /**
     * initialize the message in chat box.
     *
     * @returns {Message}
     */
    ChatRoomComponent.prototype.initializeMessageModel = function () {
        var message = new __WEBPACK_IMPORTED_MODULE_4__Services_ChatServices_MessageService_message__["a" /* Message */]();
        message.sentTime = Date.now().toString();
        message.body = 'Hi, how are you ?';
        return message;
    };
    ChatRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-room',
            template: __webpack_require__("./src/app/chat-room/chat-room.component.html"),
            styles: [__webpack_require__("./src/app/chat-room/chat-room.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('slideInOut', [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    })), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        transform: 'translate3d(-82%, 0, 0)'
                    })), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in-out')), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in-out'))])]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_ChatServices_MessageService_message_service__["a" /* MessageService */]])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/freelancing-project/freelancing-projects.component.css":
/***/ (function(module, exports) {

module.exports = ".freelancing-project-box-size{\n  height: 90%;\n  overflow-y: scroll;\n}\n"

/***/ }),

/***/ "./src/app/freelancing-project/freelancing-projects.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- pagination -->\n\n<nav aria-label=\"Page navigation example\" class=\"center-div\">\n  <ul class=\"justify-content-center\" style=\"display: inline-flex;\">\n    <li class=\"page-item disabled\">\n      <button class=\"page-link darkButton\" tabindex=\"-1\">Previous</button>\n    </li>\n    <li class=\"page-item\"><button class=\"page-link darkButton\" >1</button></li>\n    <li class=\"page-item\"><button class=\"page-link darkButton\" >2</button></li>\n    <li class=\"page-item\"><button class=\"page-link darkButton\" >3</button></li>\n    <li class=\"page-item\">\n      <button class=\"page-link darkButton\" href=\"#\">Next</button>\n    </li>\n  </ul>\n</nav>\n\n\n<div class=\"box freelancing-project-box-size center-div col-lg-5\" style=\"float: none;color: white\">\n\n\n\n  <!-- freelancing projects -->\n\n\n  <div class=\"projectList\" *ngFor=\"let freelancingProject of freelancingProjects\">\n    <!--title -->\n    <div class=\"row\">\n      <h1>{{freelancingProject.title}}</h1>\n    </div>\n    <!--description -->\n    <div class=\"row\">\n      <p>{{freelancingProject.description}}</p>\n    </div>\n    <!--tags -->\n    <div class=\"row\">\n      <div *ngFor=\"let tag of freelancingProject.tags\" style=\"display: inline-flex\">\n        <span class=\"badge badge-dark\">{{tag}}</span>\n      </div>\n    </div>\n    <!-- money -->\n    <div class=\"row top-space\">\n      <label>Price : {{freelancingProject.money}}</label>\n    </div>\n    <!--express interest button -->\n    <div class=\"row top-space\">\n      <button type=\"button\" class=\"btn btn-default btn-lg\"\n              [ngClass]=\"freelancingProject.is_interested == true? 'fl-marked' : 'fl-unmarked'\"\n              (click)=\"expressInterest(freelancingProject)\">\n        <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> Express Interest\n      </button>\n    </div>\n    <hr>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/freelancing-project/freelancing-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancingProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_FreelancingProjectService_freelancing_project_service__ = __webpack_require__("./src/app/Services/FreelancingProjectService/freelancing-project-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FreelancingProjectsComponent = /** @class */ (function () {
    function FreelancingProjectsComponent(_freelancingProjectService) {
        this._freelancingProjectService = _freelancingProjectService;
        this.freelancingProjects = [];
    }
    FreelancingProjectsComponent.prototype.ngOnInit = function () {
        this.createDummyProject();
        this.getFreelancingProjects();
    };
    /**
     * create dummy project to test
     */
    FreelancingProjectsComponent.prototype.createDummyProject = function () {
        var freelancingProjectDummy = {
            'id': '5af7533459eb228ac50b6d8d',
            'title': 'Java Developer',
            'category': 'IT',
            'description': 'Needed Backend developer with 3 years of experience!',
            'image_url': '',
            'posted_by': 'vidhyasgr80@gmail.com',
            'start_time': '05/05/2018 10:10:10',
            'end_time': '05/05/2018 12:10:10',
            'location': 'Frankfurt',
            'is_remote_possible': true,
            'money': '5000 Euro',
            'created_time': '05/05/2018 10:10:10',
            'tags': ['java', 'node.js', 'spring boot', 'angular 5', 'html and css'],
            'is_interested': false
        };
        this.freelancingProjects.push(freelancingProjectDummy);
    };
    /**
     *
     * @param {FreelancingProject} freelancingProject
     */
    FreelancingProjectsComponent.prototype.expressInterest = function (freelancingProject) {
        freelancingProject.is_interested = !freelancingProject.is_interested;
    };
    /**
     *
     */
    FreelancingProjectsComponent.prototype.getFreelancingProjects = function () {
        var _this = this;
        this._freelancingProjectService
            .getFreelancingProjects()
            .subscribe(function (data) {
            _this.freelancingProjects = data;
        });
    };
    FreelancingProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-freelancing-projects',
            template: __webpack_require__("./src/app/freelancing-project/freelancing-projects.component.html"),
            styles: [__webpack_require__("./src/app/freelancing-project/freelancing-projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_FreelancingProjectService_freelancing_project_service__["a" /* FreelancingProjectService */]])
    ], FreelancingProjectsComponent);
    return FreelancingProjectsComponent;
}());



/***/ }),

/***/ "./src/app/image-gallery/image-full-screen-mode/image-full-screen-mode.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/image-gallery/image-full-screen-mode/image-full-screen-mode.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  image-full-screen-mode works!\n</p>\n"

/***/ }),

/***/ "./src/app/image-gallery/image-full-screen-mode/image-full-screen-mode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageFullScreenModeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageFullScreenModeComponent = /** @class */ (function () {
    function ImageFullScreenModeComponent() {
    }
    ImageFullScreenModeComponent.prototype.ngOnInit = function () {
    };
    ImageFullScreenModeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-full-screen-mode',
            template: __webpack_require__("./src/app/image-gallery/image-full-screen-mode/image-full-screen-mode.component.html"),
            styles: [__webpack_require__("./src/app/image-gallery/image-full-screen-mode/image-full-screen-mode.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ImageFullScreenModeComponent);
    return ImageFullScreenModeComponent;
}());



/***/ }),

/***/ "./src/app/image-gallery/image-gallery.component.css":
/***/ (function(module, exports) {

module.exports = "\n.image-box\n{\n  border: 2px solid rgba(153, 153, 153, 0.75);\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -khtml-border-radius: 2px;\n  -o-border-radius: 2px;\n  opacity: 0.8;\n  /*background-color: black;*/\n  height: 80%;\n  overflow-y: scroll;\n}\n"

/***/ }),

/***/ "./src/app/image-gallery/image-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div role=\"alert\" style=\"color: white\">\n\n  <h1 class=\"text-center\">Image Gallery</h1>\n\n</div>\n\n<!--  progress bar for upload-image  -->\n\n<div *ngIf=\"currentImageUpload\" class=\"progress\">\n  <div class=\"progress-bar progress-bar-info progress-bar-striped\"\n       role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n       aria-valuemin=\"0\" aria-valuemax=\"100\"\n       [ngStyle]=\"{width:progress.percentage+'%'}\">\n    {{progress.percentage}}%</div>\n</div>\n\n<div style=\"display: inline-flex\">\n\n<label class=\"btn-default\">\n  <input type=\"file\" (change)=\"selectImage($event)\">\n</label>\n\n<!--  button to upload-image  -->\n\n<button class=\"darkButton\"\n        (click)=\"upload()\">Upload</button>\n\n<!-- test button to show-image  -->\n\n<button class=\"darkButton\"\n        (click)=\"showImage()\">Show Image</button>\n\n</div>\n\n<!--  displays all images  -->\n\n<!--<div class=\"row image-box\">-->\n\n  <!--<div class=\"col-md-4\" *ngFor=\"let image of images\">-->\n    <!--<div class=\"thumbnail\">-->\n      <!--<a href=\"/w3images/fjords.jpg\" target=\"_blank\">-->\n        <!--<img src={{image.imageData}} alt=\"Fjords\" style=\"width:100%\">-->\n        <!--<div class=\"caption\">-->\n          <!--<p>{{image.description}}</p>-->\n        <!--</div>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n\n\n  <!--&lt;!&ndash;<div class=\"col-lg-3\" *ngFor=\"let image of images\">&ndash;&gt;-->\n    <!--&lt;!&ndash;<div class=\"thumbnail\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<img src={{image.imageData}} alt=\"...\" class=\"\">&ndash;&gt;-->\n      <!--&lt;!&ndash;<div class=\"caption\">&ndash;&gt;-->\n        <!--&lt;!&ndash;<h3>{{image.title}}</h3>&ndash;&gt;-->\n        <!--&lt;!&ndash;<p>{{image.description}}</p>&ndash;&gt;-->\n        <!--&lt;!&ndash;<p>&ndash;&gt;-->\n          <!--&lt;!&ndash;<button class=\"darkButton\" role=\"button\">View</button></p>&ndash;&gt;-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\n<!--</div>-->\n\n<div class=\"row image-box\">\n\n<div class=\"responsive\" *ngFor=\"let image of images\">\n  <div class=\"gallery\">\n    <a target=\"_blank\" href=\"img_fjords.jpg\">\n      <img src={{image.imageData}} class=\"thumbnail\" alt=\"Trolltunga Norway\" width=\"300\" height=\"200\">\n    </a>\n    <div class=\"desc\">Add a description of the image here</div>\n  </div>\n</div>\n\n</div>\n\n<!--</div>-->\n\n"

/***/ }),

/***/ "./src/app/image-gallery/image-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_ImageServices_image_gallery_service__ = __webpack_require__("./src/app/Services/ImageServices/image-gallery-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image__ = __webpack_require__("./src/app/image-gallery/image.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(imageGalleryService) {
        this.imageGalleryService = imageGalleryService;
        this.images = [];
        this.progress = { percentage: 0 };
        this.showFile = false;
        //after click show full screen mode
        this.showFullScreenMode = false;
        this.visibleImages = [];
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        //just for mock
        this.showAllImages();
    };
    /**
     *
     * @param event
     */
    ImageGalleryComponent.prototype.selectImage = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            this.images.push(event.target.files);
        }
        else {
            alert('invalid format!');
        }
    };
    /**
     *
     * @param {Blob} image
     */
    ImageGalleryComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            var image = new __WEBPACK_IMPORTED_MODULE_3__image__["a" /* Image */]();
            image.imageData = reader.result;
            //todo need to fetch data from REST api.
            image.title = "Mountain";
            image.description = "its a beautiful picture";
            _this.images.push(reader.result);
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    /**
     *
     * @param {boolean} enable
     */
    ImageGalleryComponent.prototype.showImage = function (enable) {
        var _this = this;
        this.imageGalleryService.
            getImage("Bildschirmfoto 2018-05-06 um 22.04.44.png").subscribe(function (imageData) {
            _this.createImageFromBlob(imageData);
        });
    };
    /**
     *
     * mocking all images. just for test purpose
     *
     */
    ImageGalleryComponent.prototype.showAllImages = function () {
        for (var i = 1; i < 6; i++) {
            // this.images.push("../assets/version-1.1/images/image-gallery/" + i + ".jpg");
            var image = new __WEBPACK_IMPORTED_MODULE_3__image__["a" /* Image */]();
            image.description = "Its a wonderful moment!";
            image.title = "picture " + i;
            image.imageData = "../assets/version-1.1/images/image-gallery/" + i + ".jpg";
            image.tags[0] = "natural";
            this.images.push(image);
        }
    };
    /**
     *
     * after click, just upload the image in db.
     *
     */
    ImageGalleryComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.imageGalleryService.uploadImage(this.currentImageUpload).subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                _this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpResponse */]) {
                console.log('File is completely uploaded!');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ImageGalleryComponent.prototype, "showFullScreenMode", void 0);
    ImageGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-gallery',
            template: __webpack_require__("./src/app/image-gallery/image-gallery.component.html"),
            styles: [__webpack_require__("./src/app/image-gallery/image-gallery.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_ImageServices_image_gallery_service__["a" /* ImageGalleryService */]])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());



/***/ }),

/***/ "./src/app/image-gallery/image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
        this.tags = [];
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/search-partner/circle-style.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
/**
 * Created by vidhyasagar on 10.11.17.
 */
var Circle = /** @class */ (function () {
    function Circle() {
        this._itemsInCircle = [];
    }
    Object.defineProperty(Circle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "itemsInCircle", {
        get: function () {
            return this._itemsInCircle;
        },
        set: function (value) {
            this._itemsInCircle = value;
        },
        enumerable: true,
        configurable: true
    });
    return Circle;
}());



/***/ }),

/***/ "./src/app/search-partner/items-inside-circle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * Created by vidhyasagar on 10.11.17.
 */
var Item = /** @class */ (function () {
    function Item() {
        this._xAxis = 0;
        this._yAxis = 0;
    }
    Object.defineProperty(Item.prototype, "xAxis", {
        get: function () {
            return this._xAxis;
        },
        set: function (value) {
            this._xAxis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "yAxis", {
        get: function () {
            return this._yAxis;
        },
        set: function (value) {
            this._yAxis = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "nearbyUser", {
        get: function () {
            return this._nearbyUser;
        },
        set: function (value) {
            this._nearbyUser = value;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());



/***/ }),

/***/ "./src/app/search-partner/nearby-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyUser; });
/**
 * Created by vidhyasagar on 09.03.18.
 */
var NearbyUser = /** @class */ (function () {
    function NearbyUser() {
        this._isFollowing = false;
    }
    Object.defineProperty(NearbyUser.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "country", {
        get: function () {
            return this._country;
        },
        set: function (value) {
            this._country = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "cityName", {
        get: function () {
            return this._cityName;
        },
        set: function (value) {
            this._cityName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "dateOfBirth", {
        get: function () {
            return this._dateOfBirth;
        },
        set: function (value) {
            this._dateOfBirth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "emailId", {
        get: function () {
            return this._emailId;
        },
        set: function (value) {
            this._emailId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "mobileNumber", {
        get: function () {
            return this._mobileNumber;
        },
        set: function (value) {
            this._mobileNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "hobby", {
        get: function () {
            return this._hobby;
        },
        set: function (value) {
            this._hobby = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "isLookingForFreelancingProjects", {
        get: function () {
            return this._isLookingForFreelancingProjects;
        },
        set: function (value) {
            this._isLookingForFreelancingProjects = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (value) {
            this._distance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NearbyUser.prototype, "isFollowing", {
        get: function () {
            return this._isFollowing;
        },
        set: function (value) {
            this._isFollowing = value;
        },
        enumerable: true,
        configurable: true
    });
    return NearbyUser;
}());



/***/ }),

/***/ "./src/app/search-partner/search-nearby-filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNearbyFilter; });
/**
 * Created by vidhyasagar on 09.03.18.
 */
var SearchNearbyFilter = /** @class */ (function () {
    function SearchNearbyFilter(cityName, distance) {
        this._cityName = cityName;
        this._distance = distance;
    }
    Object.defineProperty(SearchNearbyFilter.prototype, "cityName", {
        get: function () {
            return this._cityName;
        },
        set: function (value) {
            this._cityName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchNearbyFilter.prototype, "distance", {
        get: function () {
            return this._distance;
        },
        set: function (value) {
            this._distance = value;
        },
        enumerable: true,
        configurable: true
    });
    return SearchNearbyFilter;
}());



/***/ }),

/***/ "./src/app/search-partner/search-partner.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- search box -->\n\n<div class=\"center-div search-box\">\n\n  <div class=\"\" style=\"display: flex\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"city name\"\n           aria-label=\"city name\" aria-describedby=\"basic-addon1\">\n    <input type=\"number\" class=\"form-control\" placeholder=\"distance\"\n           aria-label=\"distance\" aria-describedby=\"basic-addon1\" min=\"1\" max=\"100\" style=\"margin-left: 8px;\">\n    <select class=\"form-control\" style=\"margin-left: 8px;\">\n      <option>IT</option>\n      <option>Photography</option>\n      <option>Art</option>\n      <option>Music</option>\n      <option>Sport</option>\n    </select>\n    <button class=\"darkButton\" style=\"margin-left: 8px;\">Search</button>\n  </div>\n\n</div>\n\n\n\n\n<!-- circle with profile info -->\n  <div class=\"row\">\n    <div class=\"row\"\n         style=\"margin-top: 3%;\">\n      <div class=\"circles col-lg-5 col-xs-4 col-sm-4 col-md-4 col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-0\">\n        <div class=\"circle c1\">\n          <div *ngFor=\"let itemOne of this.searchPageService.circlesInLocalDB[0].itemsInCircle\">\n            <button class=\"item\"\n                    [style.left.px]=\"itemOne.xAxis\"\n                    [style.top.px]=\"itemOne.yAxis\"\n                    style=\"\n  background-image: url(http://cdn2.spiegel.de/images/image-1113381-galleryV9-nzsk-1113381.jpg);  background-size: 30px 30px;\"\n                    (click)=\"showUserInfo(itemOne)\"\n                    (mouseover)=\"showUserInfo(itemOne)\"\n                    [@state]=\"'in'\">\n            </button>\n          </div>\n          <div class=\"circle c2\">\n            <div *ngFor=\"let itemTwo of this.searchPageService.circlesInLocalDB[1].itemsInCircle\">\n              <button class=\"item\"\n                      [style.left.px]=\"itemTwo.xAxis\"\n                      [style.top.px]=\"itemTwo.yAxis\"\n                      style=\"\n  background-image: url(http://cdn2.spiegel.de/images/image-1113381-galleryV9-nzsk-1113381.jpg);  background-size: 30px 30px;\"\n                      (click)=\"showUserInfo(itemTwo)\"\n                      (mouseover)=\"showUserInfo(itemTwo)\"\n                      [@state]=\"'in'\">\n              </button>\n            </div>\n            <div class=\"circle c3\">\n              <div *ngFor=\"let itemThree of this.searchPageService.circlesInLocalDB[2].itemsInCircle\">\n                <button class=\"item\"\n                        [style.left.px]=\"itemThree.xAxis\"\n                        [style.top.px]=\"itemThree.yAxis\"\n                        style=\"\n  background-image: url(http://cdn2.spiegel.de/images/image-1113381-galleryV9-nzsk-1113381.jpg);  background-size: 30px 30px;\"\n                        (click)=\"showUserInfo(itemThree)\"\n                        (mouseover)=\"showUserInfo(itemThree)\"\n                        [@state]=\"'in'\">\n                </button>\n              </div>\n              <div class=\"circle c4\">\n                <div *ngFor=\"let itemFour of this.searchPageService.circlesInLocalDB[3].itemsInCircle\">\n                  <button class=\"item\"\n                          [style.left.px]=\"itemFour.xAxis\"\n                          [style.top.px]=\"itemFour.yAxis\"\n                          style=\"\n             background-image: url(http://cdn2.spiegel.de/images/image-1113381-galleryV9-nzsk-1113381.jpg);  background-size: 30px 30px;\"\n                          (click)=\"showUserInfo(itemFour)\"\n                          (mouseover)=\"showUserInfo(itemFour)\"\n                          [@state]=\"'in'\">\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div><!-- circles -->\n      <div class=\"form-box-profile-info col-lg-5 col-lg-offset-1\"\n           style=\"height: 500px;\">\n        <!--<div class=\"col-lg-4\">-->\n        <div class=\"row\">\n          <div class=\"profile-picture col-lg-5\"\n               style=\"margin-top: 6%;\">\n            <img src=\"./assets/version-1.1/images/architecture-bar-building.jpg\"\n                 style=\"    width: 223px;display: inline;height: 190px;\">\n          </div>\n          <!-- this is follow button for profile info window -->\n          <button class=\"darkButton col-lg-4\"\n                  (click)=\"clickOnFollowButton(userInfoToShow)\"\n                  style=\"display: inline;position: absolute;top: 0px;right: 0px;\"\n                  aria-label=\"Left Align\">\n            <span class=\"glyphicon glyphicon glyphicon-plus-sign\"\n                  aria-hidden=\"true\"></span>\n            {{userInfoToShow.isFollowing == true ? \"UnFollow\": \"Follow\"}}\n          </button>\n          <div class=\"profile-info-text col-lg-offset-1\"\n               style=\"margin-top: 10%;color: #c3bbbb;font-size: 20px !important;list-style-type:none;border-spacing: 10px;font-family: cursive;\">\n            <p>{{userInfoToShow.description}}</p>\n            <hr>\n            <table style=\"width: 55%;\">\n              <tr>\n                <td>Firstname</td>\n                <td>{{userInfoToShow.firstName}}</td>\n              </tr>\n              <tr>\n                <td>LastName</td>\n                <td>{{userInfoToShow.lastName}}</td>\n              </tr>\n              <tr>\n                <td>Email</td>\n                <td>{{userInfoToShow.emailId}}</td>\n              </tr>\n              <tr>\n                <td>CityName</td>\n                <td>{{userInfoToShow.cityName}}</td>\n              </tr>\n              <tr>\n                <td>Hobby</td>\n                <td>{{userInfoToShow.hobby}}</td>\n              </tr>\n              <tr>\n                <td>DateOfBirth</td>\n                <td>{{userInfoToShow.dateOfBirth}}</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <!--</div>-->\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/search-partner/search-partner.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nbody {\n  padding: 4em; }\n.search-box {\n  border: 2px solid rgba(153, 153, 153, 0.75);\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -khtml-border-radius: 2px;\n  -o-border-radius: 2px;\n  opacity: 0.8;\n  background-color: black;\n  width: 40%;\n  height: 15%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n#container {\n  margin: 10px auto;\n  border: 1px solid #000;\n  position: relative;\n  border-radius: 50%;\n  -webkit-animation: spin 10s linear infinite;\n          animation: spin 10s linear infinite; }\n.item {\n  width: 30px;\n  height: 30px;\n  background-size: 30px 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 50%;\n  position: absolute;\n  background: #f00;\n  animation: spin 50s linear infinite reverse; }\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn); } }\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn); } }\n.buttons-form-box {\n  margin-top: 16%; }\nimg {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 5px;\n  width: 150px; }\n.hamburger {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  width: 96px;\n  height: 96px;\n  font-size: 0;\n  text-indent: -9999px;\n  cursor: pointer;\n  outline: none;\n  background: none;\n  border: 0; }\n.hamburger span {\n  display: block;\n  position: absolute;\n  top: 44px;\n  left: 18px;\n  right: 18px;\n  height: 8px;\n  background: #1a2580; }\n.hamburger span::before,\n.hamburger span::after {\n  display: block;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 8px;\n  background-color: #1a2580;\n  content: \"\"; }\n.hamburger span::before {\n  top: -20px; }\n.hamburger span::after {\n  bottom: -20px; }\n.darkButton-filter {\n  outline: 0;\n  padding: 5px 12px;\n  display: block;\n  color: #9fa8b0;\n  font-weight: bold;\n  text-shadow: 1px 1px #1f272b;\n  border: 1px solid #1c252b;\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n  font-family: Pacifico;\n  -webkit-border-radius: 3px;\n  background: #232B30;\n  /* old browsers */\n  background: -moz-linear-gradient(top, #3D4850 3%, #313d45 4%, #232B30 100%);\n  /* firefox */\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(3%, #3D4850), color-stop(4%, #313d45), color-stop(100%, #232B30));\n  /* webkit */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3D4850', endColorstr='#232B30',GradientType=0 );\n  /* ie */\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  /* CSS3 */\n  -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  /* Firefox */\n  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  /* Safari, Chrome */ }\n.form-box-profile-info {\n  border: 2px solid rgba(153, 153, 153, 0.75);\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -khtml-border-radius: 2px;\n  -o-border-radius: 2px;\n  font-size: 13px !important;\n  font-family: Pacifico;\n  background-color: #0e0808;\n  opacity: 0.8;\n  height: 58%; }\n.form-box {\n  border: 2px solid rgba(153, 153, 153, 0.75);\n  border-radius: 2px;\n  -moz-border-radius: 2px;\n  -webkit-border-radius: 2px;\n  -khtml-border-radius: 2px;\n  -o-border-radius: 2px;\n  font-size: 13px !important;\n  font-family: Pacifico;\n  background-color: #0e0808; }\n.page-buttons {\n  text-decoration: none;\n  display: inline-block;\n  padding: 8px 16px; }\n.page-buttons:hover {\n  background-color: #ddd;\n  color: black; }\n.previous {\n  background-color: #343534;\n  color: white; }\n.next {\n  background-color: #343534;\n  color: white; }\n.round {\n  border-radius: 50%; }\n.play-button-circle {\n  background: transparent;\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.circle {\n  border-radius: 50%;\n  background: transparent;\n  border: dashed 12px red;\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-animation: spin 200s linear infinite;\n          animation: spin 200s linear infinite; }\n.c2 {\n  width: 400px;\n  height: 400px;\n  border-color: blue; }\n.c3 {\n  width: 300px;\n  height: 300px;\n  border-color: yellow; }\n.c4 {\n  width: 200px;\n  height: 200px; }\n.c5 {\n  width: 100px;\n  height: 100px; }\n/**\n * Position icons into circle (SO)\n * http://stackoverflow.com/q/12813573/1397351\n */\n.circle-container {\n  position: relative;\n  width: 12em;\n  height: 12em;\n  padding: 1.8em;\n  /*= 2em * 1.4 (2em = half the width of an img, 1.4 = sqrt(2))*/\n  border: dashed 1px;\n  border-radius: 50%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  animation: spin 10s linear infinite reverse; }\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(1turn);\n            transform: rotate(1turn); } }\n.circle-container a {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 4em;\n  height: 4em;\n  margin: -2em;\n  /* 2em = 4em/2 */\n  /* half the width */ }\n.circle-container img {\n  display: block;\n  width: 100%; }\n.deg0 {\n  -webkit-transform: translate(12em);\n          transform: translate(12em); }\n/* 12em = half the width of the wrapper */\n.deg45 {\n  -webkit-transform: rotate(45deg) translate(12em) rotate(-45deg);\n          transform: rotate(45deg) translate(12em) rotate(-45deg); }\n.deg47 {\n  -webkit-transform: rotate(47deg) translate(12em) rotate(-47deg);\n          transform: rotate(47deg) translate(12em) rotate(-47deg); }\n.deg135 {\n  -webkit-transform: rotate(135deg) translate(12em) rotate(-135deg);\n          transform: rotate(135deg) translate(12em) rotate(-135deg); }\n.deg180 {\n  -webkit-transform: translate(-12em);\n          transform: translate(-12em); }\n.deg225 {\n  -webkit-transform: rotate(225deg) translate(12em) rotate(-225deg);\n          transform: rotate(225deg) translate(12em) rotate(-225deg); }\n.deg315 {\n  -webkit-transform: rotate(315deg) translate(12em) rotate(-315deg);\n          transform: rotate(315deg) translate(12em) rotate(-315deg); }\n/* this is just for showing the angle on hover */\n.circle-container a:not(.center):before {\n  position: absolute;\n  width: 4em;\n  color: white;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.5);\n  font: 1.25em/3.45 Courier, monospace;\n  letter-spacing: 2px;\n  text-decoration: none;\n  text-indent: -2em;\n  text-shadow: 0 0 .1em deeppink;\n  -webkit-transition: .7s;\n  transition: .7s;\n  /* only works in Firefox */\n  content: attr(class) \"°\"; }\n.circle-container a:hover:before {\n  opacity: 1; }\n.circle-container:hover:after {\n  opacity: 1; }\n.circle-container a:not(.center):after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 .5em .5em white;\n          box-shadow: 0 0 .5em .5em white;\n  margin: -2px;\n  background: deeppink;\n  opacity: .3;\n  content: ''; }\n.circle-container:hover a:after {\n  opacity: 1; }\n.circle-container a:hover:after {\n  opacity: .3; }\n"

/***/ }),

/***/ "./src/app/search-partner/search-partner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPartnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_style__ = __webpack_require__("./src/app/search-partner/circle-style.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_inside_circle__ = __webpack_require__("./src/app/search-partner/items-inside-circle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_SearchServices_search_http_service__ = __webpack_require__("./src/app/Services/SearchServices/search-http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_nearby_filter__ = __webpack_require__("./src/app/search-partner/search-nearby-filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nearby_user__ = __webpack_require__("./src/app/search-partner/nearby-user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchPartnerComponent = /** @class */ (function () {
    function SearchPartnerComponent(searchPageService) {
        this.searchPageService = searchPageService;
        this.state = 'inactive';
        this.menuState = 'out';
        // userInfoToShow:Item;
        this.userInfoToShow = new __WEBPACK_IMPORTED_MODULE_6__nearby_user__["a" /* NearbyUser */]();
    }
    /**
     *
     *
     */
    SearchPartnerComponent.prototype.toggleMenu = function () {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    /**
     *
     */
    SearchPartnerComponent.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
        console.log('state ' + this.state);
    };
    SearchPartnerComponent.prototype.ngOnInit = function () {
        // empty the localDB.
        this.searchPageService.circlesInLocalDB = [];
        // get all nearby users.
        this.searchNearbyUsers();
        // initialize user detail by adding some mock data, which
        //-is shown in right side of the page after hover.
        this.initializeUserDetail();
        // initialize circles by setting style. By default we inject
        //-four circles.
        this.initializeCircles();
    };
    /**
     *
     */
    SearchPartnerComponent.prototype.initializeCircles = function () {
        var listOfItemInOneCircle = [];
        var listOfItemInTwoCircle = [];
        var listOfItemInThreeCircle = [];
        var listOfItemInFourCircle = [];
        var circleDataOne = new __WEBPACK_IMPORTED_MODULE_1__circle_style__["a" /* Circle */]();
        var circleDataTwo = new __WEBPACK_IMPORTED_MODULE_1__circle_style__["a" /* Circle */]();
        var circleDataThree = new __WEBPACK_IMPORTED_MODULE_1__circle_style__["a" /* Circle */]();
        var circleDataFour = new __WEBPACK_IMPORTED_MODULE_1__circle_style__["a" /* Circle */]();
        circleDataOne._width = 500;
        circleDataOne._height = 500;
        circleDataOne._radius = 250;
        circleDataOne._color = 'blue';
        circleDataOne._itemsInCircle = listOfItemInOneCircle;
        circleDataTwo._width = 400;
        circleDataTwo._height = 400;
        circleDataTwo._radius = 200;
        circleDataTwo._color = 'blue';
        circleDataTwo._itemsInCircle = listOfItemInTwoCircle;
        circleDataThree._width = 300;
        circleDataThree._height = 300;
        circleDataThree._radius = 150;
        circleDataThree._color = 'blue';
        circleDataThree._itemsInCircle = listOfItemInThreeCircle;
        circleDataFour._width = 200;
        circleDataFour._height = 200;
        circleDataFour._radius = 100;
        circleDataFour._color = 'blue';
        circleDataFour._itemsInCircle = listOfItemInFourCircle;
        this.searchPageService.circlesInLocalDB.push(circleDataOne);
        this.searchPageService.circlesInLocalDB.push(circleDataTwo);
        this.searchPageService.circlesInLocalDB.push(circleDataThree);
        this.searchPageService.circlesInLocalDB.push(circleDataFour);
    };
    /**
     * initialize userInfoToShow info, which is shown in right side
     * of the page
     *
     */
    SearchPartnerComponent.prototype.initializeUserDetail = function () {
        this.userInfoToShow._firstName = 'Vidhya';
        this.userInfoToShow._lastName = 'sagar';
        this.userInfoToShow._cityName = 'Görlitz';
        this.userInfoToShow._hobby = 'Photography';
        this.userInfoToShow._dateOfBirth = '15-05-1993';
        this.userInfoToShow._description = 'I am a proffesional Front end and Back end developer and ' + 'i have done many interesting projects one of the project is LocationServer based on WiFi.';
    };
    /**
     *
     * After clicking the search button, it looks for the items or persons nearby and show in image inside.
     *
     */
    SearchPartnerComponent.prototype.searchNearbyUsers = function () {
        var _this = this;
        //send REST request to get the nearby users by city and distance.
        var searchNearbyQueryModelForRest = new __WEBPACK_IMPORTED_MODULE_5__search_nearby_filter__["a" /* SearchNearbyFilter */]('Görlitz', 30);
        this.searchPageService.getNearByUsers(searchNearbyQueryModelForRest).subscribe(function (data) {
            // analyze whether its new User or not. If new, then insert it.
            _this.analyzeAndInsertNearByUser(data);
            // place the items accordingly inside the circle.
            _this.positionItemsOnCircle();
        });
    };
    /**
     *
     * @param data
     */
    SearchPartnerComponent.prototype.analyzeAndInsertNearByUser = function (data) {
        var _this = this;
        data.forEach(function (nearByUser) {
            //it checks whether the User from DB is new.
            var isNewUser = _this.isNewUser(nearByUser);
            if (isNewUser) {
                _this.sortAndInsertItemByDistance(_this.createNewItem(nearByUser));
            }
        });
    };
    /**
     *
     * @param nearByUser
     * @returns {Item}
     */
    SearchPartnerComponent.prototype.createNewItem = function (nearByUser) {
        var item = new __WEBPACK_IMPORTED_MODULE_2__items_inside_circle__["a" /* Item */]();
        item._xAxis = 185;
        item._yAxis = 0;
        item._nearbyUser = nearByUser;
        return item;
    };
    /**
     *
     * @param nearByUser
     * @returns {boolean}
     */
    SearchPartnerComponent.prototype.isNewUser = function (nearByUser) {
        this.searchPageService.circlesInLocalDB.forEach(function (circle) {
            circle.itemsInCircle.forEach(function (item) {
                if (item.nearbyUser._emailId == nearByUser.emailId) {
                    return false;
                }
            });
        });
        return true;
    };
    /**
     *
     * @param tempDistance
     * @param {Item} itemDataToStore
     */
    SearchPartnerComponent.prototype.sortAndInsertItemByDistance = function (itemDataToStore) {
        var distance = itemDataToStore.nearbyUser.distance;
        if (distance <= 20) {
            this.searchPageService.circlesInLocalDB[3].itemsInCircle.push(itemDataToStore);
        }
        else if (distance <= 60) {
            this.searchPageService.circlesInLocalDB[2].itemsInCircle.push(itemDataToStore);
        }
        else if (distance <= 100) {
            this.searchPageService.circlesInLocalDB[1].itemsInCircle.push(itemDataToStore);
        }
        else {
            this.searchPageService.circlesInLocalDB[0].itemsInCircle.push(itemDataToStore);
        }
    };
    /**
     *
     */
    SearchPartnerComponent.prototype.positionItemsOnCircle = function () {
        // This logic helps to place the items on the circle positionally and rotate it.
        for (var _i = 0, _a = this.searchPageService.circlesInLocalDB; _i < _a.length; _i++) {
            var circle = _a[_i];
            var angle = 0;
            var step = (2 * Math.PI) / circle.itemsInCircle.length;
            for (var _b = 0, _c = circle.itemsInCircle; _b < _c.length; _b++) {
                var item = _c[_b];
                item.xAxis = Math.round((circle.width / 2) + (circle.radius * Math.cos(angle)) - 30 / 2);
                item.yAxis = Math.round((circle.height / 2) + (circle.radius * Math.sin(angle)) - 30 / 2);
                angle += step;
            }
        }
    };
    /**
     *
     * @param item
     */
    SearchPartnerComponent.prototype.showUserInfo = function (item) {
        this.userInfoToShow = item.nearbyUser;
    };
    /**
     *
     * @param min
     * @param max
     * @returns {any}
     */
    SearchPartnerComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /**
     *
     * @param nearbyUser
     */
    SearchPartnerComponent.prototype.clickOnFollowButton = function (nearbyUser) {
        console.log('following status ' + this.userInfoToShow.isFollowing);
        if (this.userInfoToShow.isFollowing) {
            this.searchPageService.unFollowUser(nearbyUser);
        }
        else {
            this.searchPageService.followUser(nearbyUser);
        }
        this.userInfoToShow.isFollowing = !this.userInfoToShow.isFollowing;
    };
    SearchPartnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-partner',
            template: __webpack_require__("./src/app/search-partner/search-partner.component.html"),
            styles: [__webpack_require__("./src/app/search-partner/search-partner.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('state', [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('void => *', [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(100)]), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('* => void', [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))])]), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('slideInOut', [Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    })), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                        transform: 'translate3d(-82%, 0, 0)'
                    })), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in-out')), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('400ms ease-in-out'))])]
        }) /**
         *
         * ITEM => UserData
         * CIRCLE => to show according to the distance.
         *
         */ //TODO Need to optimize the whole class. It looks like shit after reading
        // the clean code principle.
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__Services_SearchServices_search_http_service__["a" /* SearchPageHttpService */]])
    ], SearchPartnerComponent);
    return SearchPartnerComponent;
}());



/***/ }),

/***/ "./src/app/socket-chat/socket-chat.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-body\n{\n  overflow-y: scroll;\n  height: 550px;\n}\n"

/***/ }),

/***/ "./src/app/socket-chat/socket-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  socket-chat works!\n</p>\n\n<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Panel heading without title</div>\n\n\n  <div class=\"panel-body\">\n\n    <p *ngFor=\"let message of chatMessages\">\n      {{message}}\n    </p>\n\n\n\n  </div>\n  <div class=\"panel-footer\">\n\n    <input type=\"text\" maxlength=\"250\" style=\"width: auto\"  #box (keyup.enter)=\"sendMessage(box.value)\">\n\n    <button class=\"darkButton\" style=\"display: inline;\" (click)=\"sendMessage(box.value)\">Send</button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/socket-chat/socket-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__ = __webpack_require__("./node_modules/ng2-stomp-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketChatComponent = /** @class */ (function () {
    function SocketChatComponent(stomp) {
        var _this = this;
        this.stomp = stomp;
        this.serverUrl = 'http://localhost:8080/socket';
        this.title = 'WebSockets chat';
        this.chatMessages = [];
        //response
        this.response = function (data) {
            console.log(data);
            console.log("response from the server " + data);
            _this.chatMessages.push(data);
        };
        //configuration
        stomp.configure({
            host: this.serverUrl,
            debug: true,
            queue: { 'init': false }
        });
        //start connection
        stomp.startConnect().then(function () {
            stomp.done('init');
            console.log('connected');
            //subscribe
            _this.subscription = stomp.subscribe('/chat', _this.response);
            //send data
            // stomp.send('destionation',{"data":"data"});
            // //unsubscribe
            // this.subscription.unsubscribe();
            //
            // //disconnect
            // stomp.disconnect().then(() => {
            //   console.log( 'Connection closed' )
            // })
        });
    }
    SocketChatComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @param data
     */
    SocketChatComponent.prototype.sendMessage = function (data) {
        this.chatMessages.push(data);
        this.stomp.send('/app/send/messages', data);
        // this.stompClient.send("/app/send/messages" , {}, messages);
    };
    SocketChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-socket-chat',
            template: __webpack_require__("./src/app/socket-chat/socket-chat.component.html"),
            styles: [__webpack_require__("./src/app/socket-chat/socket-chat.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__["StompService"]])
    ], SocketChatComponent);
    return SocketChatComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDnEMtuItL48n5Iy7bFUocVQdKg6uIX2lk",
        authDomain: "hobbymatecentral.firebaseapp.com",
        databaseURL: "https://hobbymatecentral.firebaseio.com",
        projectId: "hobbymatecentral",
        storageBucket: "hobbymatecentral.appspot.com",
        messagingSenderId: "664234614690"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map