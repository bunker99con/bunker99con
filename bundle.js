'use strict';

try{if(!exports){exports = {};} }catch(e){var exports = {}};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends$n(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$b = function() {
    __assign$b = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$b.apply(this, arguments);
};

function __decorate$5(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata$5(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter$j(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$j(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray$9(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var SimFrontOption = {};

var SimOption$1 = {};

Object.defineProperty(SimOption$1, "__esModule", { value: true });
SimOption$1.SimOption = void 0;
var SimOption = (function () {
    function SimOption(advice, proxy) {
        if (advice === void 0) { advice = []; }
        this.advice = advice;
        this.proxy = proxy;
    }
    SimOption.prototype.addAdvicce = function (advice) {
        this.advice.push(advice);
    };
    SimOption.prototype.setAdvice = function () {
        var advice = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            advice[_i] = arguments[_i];
        }
        this.advice = advice;
        return this;
    };
    return SimOption;
}());
SimOption$1.SimOption = SimOption;

(function (exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimFrontOption = exports.UrlType = void 0;
var SimOption_1 = SimOption$1;
var UrlType;
(function (UrlType) {
    UrlType["path"] = "path";
    UrlType["hash"] = "hash";
})(UrlType = exports.UrlType || (exports.UrlType = {}));
var SimFrontOption = (function (_super) {
    __extends(SimFrontOption, _super);
    function SimFrontOption(window, advice) {
        if (advice === void 0) { advice = []; }
        var _this = _super.call(this, advice) || this;
        _this.window = window;
        _this.selector = '#app';
        _this.urlType = UrlType.path;
        return _this;
    }
    SimFrontOption.prototype.setSelector = function (selector) {
        this.selector = selector;
        return this;
    };
    SimFrontOption.prototype.setUrlType = function (urlType) {
        this.urlType = urlType;
        return this;
    };
    return SimFrontOption;
}(SimOption_1.SimOption));
exports.SimFrontOption = SimFrontOption;
}(SimFrontOption));

var SimpleBootFront$1 = {};

var Component = {};

var ReflectUtils$1 = {};

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var Reflect$1;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof commonjsGlobal === "object" ? commonjsGlobal :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect$1 || (Reflect$1 = {}));

Object.defineProperty(ReflectUtils$1, "__esModule", { value: true });
ReflectUtils$1.ReflectUtils = void 0;

var ReflectUtils = (function () {
    function ReflectUtils() {
    }
    ReflectUtils.getParameterTypes = function (target, propertyKey) {
        if (propertyKey) {
            return Reflect.getMetadata('design:paramtypes', target, propertyKey) || [];
        }
        else {
            return Reflect.getMetadata('design:paramtypes', target) || [];
        }
    };
    ReflectUtils.getReturnType = function (target, propertyKey) {
        return Reflect.getMetadata('design:returntype', target, propertyKey);
    };
    ReflectUtils.getType = function (target, propertyKey) {
        if (propertyKey) {
            return Reflect.getMetadata('design:type', target, propertyKey);
        }
        else {
            return Reflect.getMetadata('design:type', target);
        }
    };
    ReflectUtils.getMetadata = function (metadataKey, target, propertyKey) {
        if (propertyKey) {
            return Reflect.getMetadata(metadataKey, target, propertyKey);
        }
        else {
            return Reflect.getMetadata(metadataKey, target);
        }
    };
    ReflectUtils.getMetadataKeys = function (target) {
        return Reflect.getMetadataKeys(target);
    };
    ReflectUtils.getOwnMetadata = function (metadataKey, target, propertyKey) {
        if (propertyKey) {
            return Reflect.getOwnMetadata(metadataKey, target, propertyKey);
        }
        else {
            return Reflect.getOwnMetadata(metadataKey, target);
        }
    };
    ReflectUtils.getMetadatas = function (target) {
        return this.getMetadataKeys(target).map(function (it) { return ReflectUtils.getMetadata(it, target); });
    };
    ReflectUtils.metadata = function (metadataKey, data) {
        return Reflect.metadata(metadataKey, data);
    };
    ReflectUtils.defineMetadata = function (metadataKey, value, target, propertyKey) {
        if (propertyKey && Reflect.defineMetadata) {
            Reflect.defineMetadata(metadataKey, value, target, propertyKey);
        }
        else if (Reflect.defineMetadata) {
            Reflect.defineMetadata(metadataKey, value, target);
        }
    };
    return ReflectUtils;
}());
ReflectUtils$1.ReflectUtils = ReflectUtils;

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponent = exports.Component = exports.ComponentMetadataKey = exports.componentSelectors = void 0;
var ReflectUtils_1 = ReflectUtils$1;
exports.componentSelectors = new Map();
exports.ComponentMetadataKey = Symbol('Component');
var componentProcess = function (config, target) {
    if (!config.selector) {
        config.selector = target.name.toLowerCase();
    }
    ReflectUtils_1.ReflectUtils.defineMetadata(exports.ComponentMetadataKey, config, target);
    exports.componentSelectors.set(config.selector.toLowerCase(), target);
};
function Component(configOrTarget) {
    if (typeof configOrTarget === 'function') {
        componentProcess({}, configOrTarget);
    }
    else {
        return function (target) {
            componentProcess(configOrTarget, target);
        };
    }
}
exports.Component = Component;
var getComponent = function (target) {
    if (target && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.ComponentMetadataKey, target);
    }
    catch (e) {
    }
};
exports.getComponent = getComponent;
}(Component));

var Script = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScript = exports.Script = exports.ScriptMetadataKey = exports.scripts = void 0;
var ReflectUtils_1 = ReflectUtils$1;
exports.scripts = new Map();
exports.ScriptMetadataKey = Symbol('Script');
var Script = function (config) {
    return function (target) {
        if (!config) {
            config = {};
        }
        if (!config.name) {
            config.name = target.name;
        }
        exports.scripts.set(config.name, target);
        ReflectUtils_1.ReflectUtils.defineMetadata(exports.ScriptMetadataKey, config, target);
        return target;
    };
};
exports.Script = Script;
var getScript = function (target) {
    if (target && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.ScriptMetadataKey, target);
    }
    catch (e) {
    }
};
exports.getScript = getScript;
}(Script));

var DomRender$1 = {};

var DomRenderProxy$1 = {};

var RawSet$1 = {};

var RandomUtils$3 = {};

var ValidUtils$3 = {};

Object.defineProperty(ValidUtils$3, "__esModule", { value: true });
ValidUtils$3.ValidUtils = void 0;
var ValidUtils$2 = /** @class */ (function () {
    function ValidUtils() {
    }
    ValidUtils.isNullOrUndefined = function (data) {
        if (data == null || undefined === data) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidUtils.isNull = function (data) {
        if (data == null) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidUtils.isArray = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Array]';
        }
    };
    ValidUtils.isNumber = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Number]';
        }
    };
    ValidUtils.isString = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object String]';
        }
    };
    ValidUtils.isFunction = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Function]';
        }
        // if (typeof object_o === 'function') {
        //     return true;
        // }else {
        //     return false;
        // }
    };
    ValidUtils.isObject = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Object]';
        }
    };
    ValidUtils.isMap = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Map]';
        }
    };
    return ValidUtils;
}());
ValidUtils$3.ValidUtils = ValidUtils$2;

Object.defineProperty(RandomUtils$3, "__esModule", { value: true });
RandomUtils$3.RandomUtils = void 0;
var ValidUtils_1$1 = ValidUtils$3;
var RandomUtils$2 = /** @class */ (function () {
    function RandomUtils() {
    }
    RandomUtils.random = function (min, max) {
        if (ValidUtils_1$1.ValidUtils.isNullOrUndefined(min)) {
            return Math.random();
        }
        else if (!ValidUtils_1$1.ValidUtils.isNullOrUndefined(min) && ValidUtils_1$1.ValidUtils.isNullOrUndefined(max)) {
            return Math.random() * (min || 0);
        }
        else {
            return Math.random() * ((max || 0) - (min || 0)) + (min || 0);
        }
    };
    RandomUtils.uuid = function (format) {
        if (format === void 0) { format = 'xxxx-xxxx-xxxx-xxxx'; }
        return format.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    RandomUtils.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    // (Math.random().toString(36)+'00000000000000000').slice(2, 10) + Date.now()
    RandomUtils.getRandomString = function (len) {
        var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        var color = '';
        for (var i = 0; i < len; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };
    RandomUtils.d = '';
    return RandomUtils;
}());
RandomUtils$3.RandomUtils = RandomUtils$2;

var StringUtils$1 = {};

Object.defineProperty(StringUtils$1, "__esModule", { value: true });
StringUtils$1.StringUtils = void 0;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.deleteEnter = function (data) {
        return data.replace(/\r?\n/g, '');
    };
    StringUtils.regexExec = function (regex, text) {
        var varExec = regex.exec(text);
        var usingVars = [];
        while (varExec) {
            usingVars.push(varExec);
            varExec = regex.exec(varExec.input);
        }
        return usingVars;
    };
    // public static betweenRegexpStr(start: string, end: string, data: string, flag = 'gm') {
    //     const startEspace = StringUtils.escapeSpecialCharacterRegExp(start);
    //     const reg = RegExp(`(${start}(?:(${start})??[^${startEspace}]*?${end}))`,flag);
    //     return StringUtils.regexExec(reg, data);
    // }
    // public static betweenRegexpStrGroup(start: string, end: string, data: string, flag = 'gm') {
    //     const startEspace = StringUtils.escapeSpecialCharacterRegExp(start);
    //     const reg = RegExp(`(?:${start}(?:((?:${start})??[^${startEspace}]*?)${end}))`,flag);
    //     return StringUtils.regexExec(reg, data);
    // }
    // public static between(start: string, end: string, data: string, flag = 'gm') {
    //     // (\$\{(?:\[??[^\[]*?\})), (\$\{(?:(\$\{)??[^\$\{]*?\}))
    //     start = StringUtils.escapeSpecialCharacterRegExp(start);
    //     end = StringUtils.escapeSpecialCharacterRegExp(end);
    //     const reg = RegExp(`(${start}(?:(${start})??[^${start}]*?${end}))`,flag);
    //     return StringUtils.regexExec(reg, data);
    // }
    StringUtils.escapeSpecialCharacterRegExp = function (data) {
        return data.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    return StringUtils;
}());
StringUtils$1.StringUtils = StringUtils;

var ScriptUtils$1 = {};

Object.defineProperty(ScriptUtils$1, "__esModule", { value: true });
ScriptUtils$1.ScriptUtils = void 0;
var ScriptUtils = /** @class */ (function () {
    function ScriptUtils() {
    }
    ScriptUtils.getVariablePaths = function (script) {
        var usingVars = new Set();
        var GetDetectProxy = /** @class */ (function () {
            function GetDetectProxy(prefix) {
                this.prefix = prefix;
                this.usingVars = usingVars;
            }
            GetDetectProxy.prototype.set = function (target, p, value, receiver) {
                return true;
            };
            GetDetectProxy.prototype.get = function (target, p, receiver) {
                var items;
                if (typeof p === 'string' && isNaN(Number(p))) {
                    items = this.prefix ? this.prefix + '.' + p : p;
                    this.usingVars.add(items);
                }
                else if (typeof p === 'string' && !isNaN(Number(p))) {
                    items = this.prefix ? this.prefix + '[' + p + ']' : p;
                    this.usingVars.add(items);
                }
                return new Proxy(function () {
                }, new GetDetectProxy(items));
            };
            return GetDetectProxy;
        }());
        var destUser = new Proxy(function () {
        }, new GetDetectProxy());
        try {
            // eslint-disable-next-line no-new-func,no-unused-expressions
            Function("\"use strict\"; ".concat(script, "; ")).bind(destUser)();
        }
        catch (e) {
            console.error(e);
        }
        // console.log('------->', usingVars);
        return usingVars;
    };
    ScriptUtils.evalReturn = function (script, thisTarget) {
        // if (!script.startsWith('this.')) {
        //     script = 'this.' + script;
        // }
        return this.eval('return ' + script + ';', thisTarget);
    };
    ScriptUtils.eval = function (script, thisTarget) {
        // eslint-disable-next-line no-new-func,no-unused-expressions
        return Function("\"use strict\"; ".concat(script, " ")).bind(thisTarget)();
    };
    ScriptUtils.loadElement = function (name, attribute, document) {
        return new Promise(function (resolve, reject) {
            var tag = document.createElement(name);
            tag.onload = resolve;
            tag.onerror = reject;
            for (var _i = 0, _a = Object.entries(attribute); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                tag.setAttribute(key, value);
            }
            document.head.append(tag);
        });
    };
    ScriptUtils.loadStyleSheet = function (href, attribute, document) {
        if (attribute === void 0) { attribute = {}; }
        // const tag = document.createElement('link');
        // tag.type = 'text/css';
        // tag.setAttribute('rel', 'stylesheet');
        // tag.href = href;
        // for (const [key, value] of Object.entries(attribute)) {
        //     tag.setAttribute(key, value);
        // }
        // target.append(tag)
        attribute.type = 'text/css';
        attribute.rel = 'stylesheet';
        attribute.href = href;
        return ScriptUtils.loadElement('link', attribute, document);
    };
    ScriptUtils.loadScript = function (src, attribute, document) {
        if (attribute === void 0) { attribute = {}; }
        attribute.type = 'text/javascript';
        attribute.src = src;
        return ScriptUtils.loadElement('script', attribute, document);
    };
    return ScriptUtils;
}());
ScriptUtils$1.ScriptUtils = ScriptUtils;

var EventManager$1 = {};

var DomUtils$1 = {};

Object.defineProperty(DomUtils$1, "__esModule", { value: true });
DomUtils$1.DomUtils = void 0;
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    DomUtils.selectorElements = function (selector, element) {
        if (element === void 0) { element = document; }
        return Array.prototype.slice.call(element.querySelectorAll(selector));
    };
    DomUtils.selectorNodes = function (selector, element) {
        if (element === void 0) { element = document; }
        return element.querySelectorAll(selector);
    };
    DomUtils.removeAttribute = function (result, attrs) {
        attrs.forEach(function (it) {
            result.removeAttribute(it);
        });
    };
    DomUtils.setAttribute = function (result, attrs) {
        attrs.forEach(function (it) {
            result.setAttribute(it, '');
        });
    };
    DomUtils.setAttributeAttr = function (result, attrs) {
        attrs.forEach(function (it) {
            result.setAttribute(it.name, it.value);
        });
    };
    DomUtils.getAttributeToObject = function (input) {
        var attribute = {};
        input.getAttributeNames().forEach(function (ait) {
            attribute[ait] = input.getAttribute(ait);
        });
        return attribute;
    };
    DomUtils.getStyleToObject = function (input) {
        var style = {};
        for (var i = 0; i < input.style.length; i++) {
            var key = input.style[i];
            style[key] = input.style[key];
        }
        return style;
    };
    return DomUtils;
}());
DomUtils$1.DomUtils = DomUtils;

var Range$1 = {};

Object.defineProperty(Range$1, "__esModule", { value: true });
Range$1.Range = Range$1.RangeIterator = Range$1.RangeResult = void 0;
// within rangeResult.ts
// @ts-ignore
var RangeResult = /** @class */ (function () {
    function RangeResult(value, done) {
        this.done = done;
        this.value = value !== null && value !== void 0 ? value : 0;
    }
    return RangeResult;
}());
Range$1.RangeResult = RangeResult;
var RangeIterator = /** @class */ (function () {
    function RangeIterator(first, last, step) {
        this._current = this._first = first;
        this._last = last;
        this._step = step;
    }
    RangeIterator.prototype.next = function (value) {
        var r;
        if (this._first < this._last && this._current < this._last) {
            r = new RangeResult(this._current, false);
            this._current += this._step;
        }
        else if (this._first > this._last && this._current > this._last) {
            r = new RangeResult(this._current, false);
            this._current -= this._step;
        }
        else {
            r = new RangeResult(undefined, true);
        }
        return r;
    };
    return RangeIterator;
}());
Range$1.RangeIterator = RangeIterator;
var Range = /** @class */ (function () {
    function Range(first, last, step) {
        if (step === void 0) { step = 1; }
        this.first = first;
        this.last = last;
        this.step = step;
        this.isRange = true;
    }
    Range.prototype[Symbol.iterator] = function () {
        return new RangeIterator(this.first, this.last, this.step);
    };
    Range.range = function (first, last, step) {
        if (step === void 0) { step = 1; }
        if (typeof first === 'number' && last === undefined) {
            return new Range(0, first, step);
        }
        else if (typeof first === 'string') {
            var _a = first.split('..'), _first = _a[0], _b = _a[1], _last = _b === void 0 ? '0' : _b;
            var _c = _last.split(','), __last = _c[0], _d = _c[1], _step = _d === void 0 ? '1' : _d;
            return new Range(Number(_first.trim()), Number(__last.trim()), Number(_step.trim()));
        }
        else {
            return new Range(first, last !== null && last !== void 0 ? last : 0, step);
        }
    };
    return Range;
}());
Range$1.Range = Range;

var Types = {};

Object.defineProperty(Types, "__esModule", { value: true });
Types.DomRenderFinalProxy = Types.Shield = void 0;
var Shield = /** @class */ (function () {
    function Shield() {
    }
    return Shield;
}());
Types.Shield = Shield;
var DomRenderFinalProxy = /** @class */ (function () {
    function DomRenderFinalProxy() {
    }
    DomRenderFinalProxy.prototype.set = function (target, p, value, receiver) {
        target[p] = value;
        return true;
    };
    DomRenderFinalProxy.prototype.get = function (target, p, receiver) {
        return target[p];
    };
    DomRenderFinalProxy.final = function (obj) {
        obj._DomRender_isFinal = true;
        return obj;
    };
    DomRenderFinalProxy.isFinal = function (obj) {
        return '_DomRender_isFinal' in obj;
    };
    DomRenderFinalProxy.unFinal = function (obj) {
        delete obj._DomRender_isFinal;
        return obj;
    };
    DomRenderFinalProxy.prototype.has = function (target, p) {
        return p === '_DomRender_isFinal' || p in target;
    };
    return DomRenderFinalProxy;
}());
Types.DomRenderFinalProxy = DomRenderFinalProxy;

Object.defineProperty(EventManager$1, "__esModule", { value: true });
EventManager$1.eventManager = EventManager$1.EventManager = void 0;
var ScriptUtils_1$c = ScriptUtils$1;
var DomUtils_1$1 = DomUtils$1;
var Range_1$1 = Range$1;
var Types_1$4 = Types;
var EventManager = /** @class */ (function () {
    function EventManager() {
        var _this = this;
        this.eventNames = [
            'click', 'mousedown', 'mouseup', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'contextmenu',
            'keyup', 'keydown', 'keypress',
            'change', 'input', 'submit', 'resize', 'focus', 'blur'
        ];
        this.eventParam = EventManager.attrPrefix + 'event';
        this.attrNames = [
            EventManager.valueAttrName,
            EventManager.valueLinkAttrName,
            EventManager.attrAttrName,
            EventManager.normalAttrMapAttrName,
            EventManager.styleAttrName,
            EventManager.classAttrName,
            EventManager.attrPrefix + 'window-event-' + EventManager.WINDOW_EVENT_POPSTATE,
            EventManager.attrPrefix + 'window-event-' + EventManager.WINDOW_EVENT_RESIZE,
            EventManager.onInitAttrName,
            this.eventParam
        ];
        this.bindScript = "\n        const ".concat(EventManager.VALUE_VARNAME, " = this.__render.value;\n        const ").concat(EventManager.SCRIPTS_VARNAME, " = this.__render.scripts;\n        const ").concat(EventManager.RANGE_VARNAME, " = this.__render.range;\n        const ").concat(EventManager.ROUTER_VARNAME, " = this.__render.router;\n        const ").concat(EventManager.ATTRIBUTE_VARNAME, " = this.__render.attribute;\n        const ").concat(EventManager.ELEMENT_VARNAME, " = this.__render.element;\n        const ").concat(EventManager.TARGET_VARNAME, " = this.__render.target;\n        const ").concat(EventManager.EVENT_VARNAME, " = this.__render.event;\n    ");
        this.eventNames.forEach(function (it) {
            _this.attrNames.push(EventManager.attrPrefix + 'event-' + it);
        });
        if (typeof window !== 'undefined') {
            EventManager.WINDOW_EVENTS.forEach(function (eventName) {
                window === null || window === void 0 ? void 0 : window.addEventListener(eventName, function (event) {
                    var targetAttr = "dr-window-event-".concat(eventName);
                    document.querySelectorAll("[".concat(targetAttr, "]")).forEach(function (it) {
                        var _a;
                        var script = it.getAttribute(targetAttr);
                        if (script) {
                            var obj = it.obj;
                            var config = (_a = obj === null || obj === void 0 ? void 0 : obj._DomRender_proxy) === null || _a === void 0 ? void 0 : _a.config;
                            ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " ").concat(script, " "), Object.assign(obj, {
                                __render: Object.freeze({
                                    target: Types_1$4.DomRenderFinalProxy.final(event.target),
                                    element: it,
                                    event: event,
                                    range: Range_1$1.Range.range,
                                    scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj)
                                })
                            }));
                        }
                    });
                });
            });
        }
    }
    // // 순환참조때문에 우선 여기에 뺴놓는다.
    // public DomrenderProxyFinal(obj: any) {
    //     (obj as any)._DomRender_isFinal = true;
    //     return obj;
    // }
    // 중요 이벤트에 대상이될 Elements를 찾는다.
    EventManager.prototype.findAttrElements = function (fragment, config) {
        var _a, _b;
        // const datas: {name: string, value: string | null, element: Element}[] = [];
        var elements = new Set();
        var addAttributes = (_b = (_a = config === null || config === void 0 ? void 0 : config.applyEvents) === null || _a === void 0 ? void 0 : _a.map(function (it) { return it.attrName; })) !== null && _b !== void 0 ? _b : [];
        addAttributes.concat(this.attrNames).forEach(function (attrName) {
            fragment === null || fragment === void 0 ? void 0 : fragment.querySelectorAll("[".concat(attrName, "]")).forEach(function (it) {
                elements.add(it);
            });
        });
        return elements;
    };
    // 중요 처음 이벤트 처리
    // eslint-disable-next-line no-undef
    EventManager.prototype.applyEvent = function (obj, childNodes, config) {
        var _this = this;
        // console.log('eventManager applyEvent==>', obj, childNodes, config)
        // Node.ELEMENT_NODE = 1
        // event
        // childNodes.forEach(it => {
        //     if (it instanceof Element) {
        //         it.setAttribute('dr-thieVariableName', 'this')
        //     }
        // })
        this.eventNames.forEach(function (it) {
            _this.addDrEvents(obj, it, childNodes, config);
        });
        this.addDrEventPram(obj, this.eventParam, childNodes, config);
        // value
        this.procAttr(childNodes, EventManager.valueAttrName, function (it, attribute) {
            var script = attribute;
            if (script) {
                var data = ScriptUtils_1$c.ScriptUtils.evalReturn(script, obj);
                if (it.value !== data) {
                    it.value = data;
                }
            }
        });
        // normal-attr-map
        this.procAttr(childNodes, EventManager.normalAttrMapAttrName, function (it, attribute) {
            var map = new Map(JSON.parse(attribute));
            map.forEach(function (v, k) {
                var data = ScriptUtils_1$c.ScriptUtils.eval("const $element = this.element;  return ".concat(v, " "), Object.assign(obj, {
                    __render: Object.freeze({
                        element: it,
                        attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it)
                    })
                }));
                it.setAttribute(k, data);
            });
        });
        // window event
        EventManager.WINDOW_EVENTS.forEach(function (it) {
            _this.procAttr(childNodes, EventManager.attrPrefix + 'window-event-' + it, function (it, attribute) {
                it.obj = obj;
            });
        });
        // value-link event
        this.procAttr(childNodes, EventManager.valueLinkAttrName, function (it, varName) {
            if (varName) {
                var ownerVariablePathName = it.getAttribute(EventManager.ownerVariablePathAttrName);
                var mapScript_1 = it.getAttribute("".concat(EventManager.valueLinkAttrName, ":map"));
                // const inMapScript = it.getAttribute(`${valueLinkAttrName}:in-map`);
                var bindObj_1 = obj;
                if (ownerVariablePathName) {
                    bindObj_1 = ScriptUtils_1$c.ScriptUtils.evalReturn(ownerVariablePathName, obj);
                }
                var getValue = _this.getValue(obj, varName, bindObj_1);
                // TODO: 아래 나중에 리팩토링 필요함
                if (typeof getValue === 'function' && getValue) {
                    var setValue = it.value;
                    if (mapScript_1) {
                        setValue = ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " return ").concat(mapScript_1), Object.assign(bindObj_1, { __render: Object.freeze({ element: it, target: bindObj_1, range: Range_1$1.Range.range, value: setValue, scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj) }) }));
                    }
                    getValue(setValue);
                    // 여기서 value가 먼저냐 value-link가 먼저냐 선을 정해야되는거네...
                }
                else if (getValue) {
                    var setValue = getValue;
                    if (mapScript_1) {
                        setValue = ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " return ").concat(mapScript_1), Object.assign(bindObj_1, { __render: Object.freeze({ element: it, target: bindObj_1, range: Range_1$1.Range.range, value: setValue, scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj) }) }));
                    }
                    it.value = setValue;
                    // this.setValue(obj, varName, setValue)
                }
                // } else if (getValue) { // 이구분이 있어야되나?? 없어도될것같은데..
                //     let setValue = getValue;
                //     if (inMapScript) {
                //         setValue = ScriptUtils.eval(`${this.bindScript} return ${inMapScript}`, Object.assign(bindObj, {__render: Object.freeze({element: it, target: bindObj, range: Range.range, value: setValue,  scripts: EventManager.setBindProperty(config?.scripts, obj)})}));
                //     }
                //     this.setValue(obj, varName, setValue)
                // } else {
                //     let setValue = it.value;
                //     if (mapScript) {
                //         setValue = ScriptUtils.eval(`${this.bindScript} return ${mapScript}`, Object.assign(bindObj, {__render: Object.freeze({element: it, target: bindObj, range: Range.range, value: setValue,  scripts: EventManager.setBindProperty(config?.scripts, obj)})}));
                //     }
                //     this.setValue(obj, varName, setValue)
                // }
                it.addEventListener('input', function (event) {
                    var value = it.value;
                    if (mapScript_1) {
                        value = ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " return ").concat(mapScript_1), Object.assign(bindObj_1, {
                            __render: Object.freeze({
                                event: event,
                                element: it,
                                attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it),
                                target: event.target,
                                range: Range_1$1.Range.range,
                                scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj)
                            })
                        }));
                    }
                    if (typeof _this.getValue(obj, varName, bindObj_1) === 'function') {
                        _this.getValue(obj, varName, bindObj_1)(value, event);
                    }
                    else {
                        _this.setValue(obj, varName, value);
                    }
                });
            }
        });
        // on-init event
        this.procAttr(childNodes, EventManager.onInitAttrName, function (it, attribute) {
            var script = attribute;
            if (script) {
                script = 'return ' + script;
            }
            if (script) {
                ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, "; ").concat(script, " "), Object.assign(obj, {
                    __render: Object.freeze({
                        element: it,
                        attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it)
                    })
                }));
                // console.log('onInit--->', obj, varName, it)
                // if (typeof this.getValue(obj, varName) === 'function') {
                //     this.getValue(obj, varName)(it);
                // } else {
                //     this.setValue(obj, varName, it);
                // }
            }
        });
        this.changeVar(obj, childNodes, undefined, config);
        // console.log('eventManager-applyEvent-->', config?.applyEvents)
        var elements = Array.from(childNodes).filter(function (it) { return it.nodeType === 1; }).map(function (it) { return it; });
        elements.forEach(function (it) {
            var _a;
            (_a = config === null || config === void 0 ? void 0 : config.applyEvents) === null || _a === void 0 ? void 0 : _a.filter(function (ta) { return it.getAttribute(ta.attrName) !== null; }).forEach(function (ta) { return ta.callBack(it, it.getAttribute(ta.attrName), obj); });
        });
    };
    // eslint-disable-next-line no-undef
    EventManager.prototype.changeVar = function (obj, elements, varName, config) {
        var _this = this;
        // console.log('-changeVar-->', obj, elements, varName);
        // value-link event
        this.procAttr(elements, EventManager.valueLinkAttrName, function (it, attribute) {
            var ownerVariablePathName = it.getAttribute(EventManager.ownerVariablePathAttrName);
            var bindObj = obj;
            if (ownerVariablePathName) {
                bindObj = ScriptUtils_1$c.ScriptUtils.evalReturn(ownerVariablePathName, obj);
            }
            var mapScript = it.getAttribute("".concat(EventManager.valueLinkAttrName, ":map"));
            if (attribute && attribute === varName) {
                var getValue = _this.getValue(obj, attribute, bindObj);
                if (typeof getValue === 'function' && getValue) {
                    var setValue = it.value;
                    if (mapScript) {
                        setValue = ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " return ").concat(mapScript), Object.assign(bindObj, { __render: Object.freeze({ element: it, target: bindObj, range: Range_1$1.Range.range, value: setValue, scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj) }) }));
                    }
                    getValue(setValue);
                }
                else { //  if (getValue !== undefined && getValue !== null)
                    var setValue = getValue;
                    if (mapScript) {
                        setValue = ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " return ").concat(mapScript), Object.assign(bindObj, { __render: Object.freeze({ element: it, target: bindObj, range: Range_1$1.Range.range, value: setValue, scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj) }) }));
                    }
                    it.value = setValue;
                }
            }
        });
        // attribute
        this.procAttr(elements, EventManager.attrAttrName, function (it, attribute) {
            var script = attribute;
            if (script) {
                script = 'return ' + script;
            }
            if (EventManager.isUsingThisVar(script, varName) || varName === undefined) {
                var data = ScriptUtils_1$c.ScriptUtils.eval("const $element = this.__render.element; ".concat(script, " "), Object.assign(obj, {
                    __render: Object.freeze({
                        element: it,
                        attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it)
                    })
                }));
                if (typeof data === 'string') {
                    data.split(',').forEach(function (sit) {
                        var _a = sit.split('='), key = _a[0], value = _a[1];
                        var s = value.trim();
                        var k = key.trim();
                        if (s === 'null') {
                            it.removeAttribute(k);
                        }
                        else {
                            it.setAttribute(k, s);
                        }
                    });
                }
                else if (Array.isArray(data)) {
                    data.forEach(function (sit) {
                        var _a = sit.split('='), key = _a[0], value = _a[1];
                        var s = value.trim();
                        var k = key.trim();
                        if (s === 'null') {
                            it.removeAttribute(k);
                        }
                        else {
                            it.setAttribute(k, s);
                        }
                    });
                }
                else {
                    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
                        var _b = _a[_i], key = _b[0], value = _b[1];
                        if (value === null) {
                            it.removeAttribute(key);
                        }
                        else {
                            it.setAttribute(key, String(value));
                        }
                    }
                }
            }
        });
        // style
        this.procAttr(elements, EventManager.styleAttrName, function (it, attribute) {
            var script = attribute;
            if (script) {
                script = 'return ' + script;
            }
            if (EventManager.isUsingThisVar(script, varName) || varName === undefined) {
                var data = ScriptUtils_1$c.ScriptUtils.eval("const $element = this.__render.element;  ".concat(script, " "), Object.assign(obj, {
                    __render: Object.freeze({
                        element: it,
                        attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it)
                    })
                }));
                if (typeof data === 'string') {
                    it.setAttribute('style', data);
                }
                else if (Array.isArray(data)) {
                    it.setAttribute('style', data.join(';'));
                }
                else {
                    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
                        var _b = _a[_i], key = _b[0], value = _b[1];
                        if (it instanceof HTMLElement) {
                            it.style[key] = String(value);
                        }
                    }
                }
            }
        });
        // class
        this.procAttr(elements, EventManager.classAttrName, function (it, attribute) {
            var script = attribute;
            if (script) {
                script = 'return ' + script;
            }
            if (EventManager.isUsingThisVar(script, varName) || varName === undefined) {
                var data = ScriptUtils_1$c.ScriptUtils.eval("const $element = this.element;  ".concat(script, " "), Object.assign(obj, {
                    __render: Object.freeze({
                        element: it,
                        attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it)
                    })
                }));
                if (typeof data === 'string') {
                    it.setAttribute('class', data);
                }
                else if (Array.isArray(data)) {
                    it.setAttribute('class', data.join(' '));
                }
                else {
                    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
                        var _b = _a[_i], key = _b[0], value = _b[1];
                        if (it instanceof HTMLElement) {
                            if (value) {
                                it.classList.add(key);
                            }
                            else {
                                it.classList.remove(key);
                            }
                        }
                    }
                }
            }
        });
        // 중요 변수값 바꼈을때 이벤트 타겟 찾는것 normal-attr-map
        this.procAttr(elements, EventManager.normalAttrMapAttrName, function (it, attribute) {
            var map = new Map(JSON.parse(attribute));
            map.forEach(function (v, k) {
                // console.log('--->', v, k)
                var isUsing = EventManager.isUsingThisVar(v, varName);
                // console.log('---isUsing--> varName:', varName, 'k:', k, 'v:', v, 'isUsing:', isUsing);
                if (isUsing) {
                    var data = ScriptUtils_1$c.ScriptUtils.eval("const $element = this.element;  return ".concat(v, " "), Object.assign(obj, {
                        __render: Object.freeze({
                            element: it,
                            attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it)
                        })
                    }));
                    it.setAttribute(k, data);
                }
            });
        });
    };
    // eslint-disable-next-line no-undef
    EventManager.prototype.addDrEvents = function (obj, eventName, elements, config) {
        var _this = this;
        // console.log('-------?', config?.router)
        var attr = EventManager.attrPrefix + 'event-' + eventName;
        this.procAttr(elements, attr, function (it, attribute) {
            var script = attribute;
            it.addEventListener(eventName, function (event) {
                var filter = true;
                var filterScript = it.getAttribute("".concat(attr, ":filter"));
                var thisTarget = Object.assign(obj, {
                    __render: Object.freeze({
                        event: event,
                        element: it,
                        target: event.target,
                        range: Range_1$1.Range.range,
                        attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it),
                        router: config === null || config === void 0 ? void 0 : config.router,
                        scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj)
                    })
                });
                if (filterScript) {
                    filter = ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " return ").concat(filterScript), thisTarget);
                }
                if (filter) {
                    ScriptUtils_1$c.ScriptUtils.eval("".concat(_this.bindScript, " ").concat(script, " "), thisTarget);
                }
            });
        });
    };
    // eslint-disable-next-line no-undef
    EventManager.prototype.addDrEventPram = function (obj, attr, elements, config) {
        var _this = this;
        this.procAttr(elements, attr, function (it, attribute, attributes) {
            var bind = attributes[attr + ':bind'];
            if (bind) {
                var script_1 = attribute;
                var params_1 = {};
                var prefix_1 = attr + ':';
                Object.entries(attributes).filter(function (_a) {
                    var k = _a[0]; _a[1];
                    return k.startsWith(prefix_1);
                }).forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    params_1[k.slice(prefix_1.length)] = v;
                });
                bind.split(',').forEach(function (eventName) {
                    it.addEventListener(eventName.trim(), function (event) {
                        ScriptUtils_1$c.ScriptUtils.eval("const $params = this.__render.params; ".concat(_this.bindScript, "  ").concat(script_1, " "), Object.assign(obj, {
                            __render: Object.freeze({
                                event: event,
                                element: it,
                                attribute: DomUtils_1$1.DomUtils.getAttributeToObject(it),
                                target: event.target,
                                range: Range_1$1.Range.range,
                                scripts: EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj),
                                params: params_1
                            })
                        }));
                    });
                });
            }
        });
    };
    // eslint-disable-next-line no-undef
    EventManager.prototype.procAttr = function (elements, attrName, callBack) {
        if (elements === void 0) { elements = new Set(); }
        var sets = new Set();
        elements.forEach(function (it) {
            // console.log('--->type', it, it.nodeType)
            if (!it) {
                return;
            }
            // Node.ELEMENT_NODE = 1
            if (it.nodeType === 1) {
                var e = it;
                sets.add(e);
                e.querySelectorAll("[".concat(attrName, "]")).forEach(function (it) {
                    sets.add(it);
                });
            }
        });
        sets.forEach(function (it) {
            var attr = it.getAttribute(attrName);
            var attrs = DomUtils_1$1.DomUtils.getAttributeToObject(it);
            if (attr) {
                callBack(it, attr, attrs);
            }
        });
    };
    EventManager.prototype.getValue = function (obj, name, bindObj) {
        // let r = obj[name];
        var r = ScriptUtils_1$c.ScriptUtils.evalReturn(name, obj);
        if (typeof r === 'function') {
            r = r.bind(bindObj !== null && bindObj !== void 0 ? bindObj : obj);
        }
        return r;
    };
    EventManager.prototype.setValue = function (obj, name, value) {
        name = name.replaceAll('this.', 'this.this.');
        ScriptUtils_1$c.ScriptUtils.eval("".concat(name, " = this.value;"), {
            this: obj,
            value: value
        });
    };
    EventManager.isUsingThisVar = function (raws, varName) {
        // console.log('isUsingV', raws)
        // console.log('isUsingV', raws, varName, ScriptUtils.getVariablePaths(raws ?? ''))
        if (varName && raws) {
            if (varName.startsWith('this.')) {
                varName = varName.replace(/this\./, '');
            }
            EventManager.VARNAMES.forEach(function (it) {
                // raws = raws!.replace(RegExp(it.replace('$', '\\$'), 'g'), `this?.___${it}`);
                raws = raws.replace(RegExp(it.replace('$', '\\$'), 'g'), "this.___".concat(it));
            });
            var variablePaths = ScriptUtils_1$c.ScriptUtils.getVariablePaths(raws !== null && raws !== void 0 ? raws : '');
            return variablePaths.has(varName);
        }
        return false;
    };
    EventManager.setBindProperty = function (scripts, obj) {
        if (scripts) {
            // const newScripts = Object.assign({}, scripts)
            var newScripts = Object.assign({}, scripts);
            for (var _i = 0, _a = Object.entries(newScripts); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (typeof value === 'function') {
                    newScripts[key] = value.bind(obj);
                }
            }
            return newScripts;
        }
    };
    EventManager.ownerVariablePathAttrName = 'dr-owner-variable-path';
    EventManager.attrPrefix = 'dr-';
    EventManager.onInitAttrName = EventManager.attrPrefix + 'on-init';
    EventManager.valueAttrName = EventManager.attrPrefix + 'value';
    EventManager.valueLinkAttrName = EventManager.attrPrefix + 'value-link';
    EventManager.attrAttrName = EventManager.attrPrefix + 'attr';
    EventManager.normalAttrMapAttrName = EventManager.attrPrefix + 'normal-attr-map';
    EventManager.styleAttrName = EventManager.attrPrefix + 'style';
    EventManager.classAttrName = EventManager.attrPrefix + 'class';
    EventManager.VALUE_VARNAME = '$value';
    EventManager.SCRIPTS_VARNAME = '$scripts';
    EventManager.FAG_VARNAME = '$fag';
    EventManager.RAWSET_VARNAME = '$rawset';
    EventManager.RANGE_VARNAME = '$range';
    EventManager.ROUTER_VARNAME = '$router';
    EventManager.ELEMENT_VARNAME = '$element';
    EventManager.TARGET_VARNAME = '$target';
    EventManager.EVENT_VARNAME = '$event';
    EventManager.COMPONENT_VARNAME = '$component';
    EventManager.INNERHTML_VARNAME = '$innerHTML';
    EventManager.ATTRIBUTE_VARNAME = '$attribute';
    EventManager.VARNAMES = [EventManager.SCRIPTS_VARNAME, EventManager.FAG_VARNAME, EventManager.RAWSET_VARNAME, EventManager.RANGE_VARNAME, EventManager.ROUTER_VARNAME, EventManager.ELEMENT_VARNAME, EventManager.TARGET_VARNAME, EventManager.EVENT_VARNAME, EventManager.COMPONENT_VARNAME, EventManager.INNERHTML_VARNAME, EventManager.ATTRIBUTE_VARNAME];
    EventManager.WINDOW_EVENT_POPSTATE = 'popstate';
    EventManager.WINDOW_EVENT_RESIZE = 'resize';
    EventManager.WINDOW_EVENTS = [EventManager.WINDOW_EVENT_POPSTATE, EventManager.WINDOW_EVENT_RESIZE];
    return EventManager;
}());
EventManager$1.EventManager = EventManager;
EventManager$1.eventManager = new EventManager();

var DrPre$1 = {};

var OperatorExecuter = {};

(function (exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorExecuter = exports.ExecuteState = void 0;
var ScriptUtils_1 = ScriptUtils$1;
(function (ExecuteState) {
    ExecuteState[ExecuteState["EXECUTE"] = 0] = "EXECUTE";
    ExecuteState[ExecuteState["NO_EXECUTE"] = 1] = "NO_EXECUTE";
    ExecuteState[ExecuteState["STOP"] = 2] = "STOP";
})(exports.ExecuteState || (exports.ExecuteState = {}));
var OperatorExecuter = /** @class */ (function () {
    function OperatorExecuter(rawSet, render, returnContainer, elementSource, source, afterCallBack, startingExecute) {
        if (startingExecute === void 0) { startingExecute = true; }
        this.rawSet = rawSet;
        this.render = render;
        this.returnContainer = returnContainer;
        this.elementSource = elementSource;
        this.source = source;
        this.afterCallBack = afterCallBack;
        this.startingExecute = startingExecute;
    }
    OperatorExecuter.prototype.start = function () {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var attrValue, r, state;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        attrValue = this.elementSource.attr;
                        if ((_a = this.source.operatorAround) === null || _a === void 0 ? void 0 : _a.beforeAttr) {
                            attrValue = (_b = this.source.operatorAround.beforeAttr(attrValue, this)) !== null && _b !== void 0 ? _b : '';
                        }
                        r = attrValue;
                        if (r && this.startingExecute) {
                            r = ScriptUtils_1.ScriptUtils.eval(" ".concat(this.render.bindScript, "; return ").concat(attrValue), Object.assign(this.source.obj, { __render: this.render }));
                        }
                        if ((_c = this.source.operatorAround) === null || _c === void 0 ? void 0 : _c.before) {
                            r = (_d = this.source.operatorAround) === null || _d === void 0 ? void 0 : _d.before(r, this);
                        }
                        return [4 /*yield*/, this.execute(r)];
                    case 1:
                        state = _g.sent();
                        (_f = (_e = this.source.operatorAround) === null || _e === void 0 ? void 0 : _e.after) === null || _f === void 0 ? void 0 : _f.call(_e, r, this);
                        return [2 /*return*/, state];
                }
            });
        });
    };
    return OperatorExecuter;
}());
exports.OperatorExecuter = OperatorExecuter;
}(OperatorExecuter));

var __extends$m = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __awaiter$i = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$i = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrPre$1, "__esModule", { value: true });
DrPre$1.DrPre = void 0;
var OperatorExecuter_1$e = OperatorExecuter;
var DrPre = /** @class */ (function (_super) {
    __extends$m(DrPre, _super);
    function DrPre(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack) || this;
        return _this;
    }
    DrPre.prototype.execute = function (value) {
        return __awaiter$i(this, void 0, void 0, function () {
            return __generator$i(this, function (_a) {
                return [2 /*return*/, (value != null) ? OperatorExecuter_1$e.ExecuteState.EXECUTE : OperatorExecuter_1$e.ExecuteState.NO_EXECUTE];
            });
        });
    };
    return DrPre;
}(OperatorExecuter_1$e.OperatorExecuter));
DrPre$1.DrPre = DrPre;

var Dr$1 = {};

var OperatorExecuterAttrRequire$1 = {};

var __extends$l = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __awaiter$h = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$h = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(OperatorExecuterAttrRequire$1, "__esModule", { value: true });
OperatorExecuterAttrRequire$1.OperatorExecuterAttrRequire = void 0;
var OperatorExecuter_1$d = OperatorExecuter;
var OperatorExecuterAttrRequire = /** @class */ (function (_super) {
    __extends$l(OperatorExecuterAttrRequire, _super);
    function OperatorExecuterAttrRequire(rawSet, render, returnContainer, elementSource, source, afterCallBack, startingExecute) {
        if (startingExecute === void 0) { startingExecute = true; }
        return _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, startingExecute) || this;
    }
    OperatorExecuterAttrRequire.prototype.execute = function (data) {
        return __awaiter$h(this, void 0, void 0, function () {
            return __generator$h(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.elementSource.attr) {
                            return [2 /*return*/, OperatorExecuter_1$d.ExecuteState.NO_EXECUTE];
                        }
                        return [4 /*yield*/, this.executeAttrRequire(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return OperatorExecuterAttrRequire;
}(OperatorExecuter_1$d.OperatorExecuter));
OperatorExecuterAttrRequire$1.OperatorExecuterAttrRequire = OperatorExecuterAttrRequire;

var __extends$k = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$a = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$a = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$a.apply(this, arguments);
};
var __awaiter$g = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$g = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(Dr$1, "__esModule", { value: true });
Dr$1.Dr = void 0;
var OperatorExecuterAttrRequire_1$9 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$b = ScriptUtils$1;
var RawSet_1$e = RawSet$1;
var OperatorExecuter_1$c = OperatorExecuter;
var Dr = /** @class */ (function (_super) {
    __extends$k(Dr, _super);
    function Dr(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        return _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack) || this;
    }
    Dr.prototype.executeAttrRequire = function (data) {
        var _a, _b;
        return __awaiter$g(this, void 0, void 0, function () {
            var itRandom, vars, newTemp, tempalte, rr;
            var _c;
            return __generator$g(this, function (_d) {
                itRandom = RawSet_1$e.RawSet.drItOtherEncoding(this.elementSource.element);
                vars = RawSet_1$e.RawSet.drVarEncoding(this.elementSource.element, (_a = this.elementSource.attrs.drVarOption) !== null && _a !== void 0 ? _a : '');
                newTemp = this.source.config.window.document.createElement('temp');
                ScriptUtils_1$b.ScriptUtils.eval("\n                    ".concat(this.render.bindScript, "\n                    const n = $element.cloneNode(true);\n                    var destIt = ").concat(this.elementSource.attrs.drItOption, ";\n                    if (destIt !== undefined) {\n                        n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt)))\n                        // console.log('----', n.innerHTML);\n                        n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt);\n                        // console.log('----', n.innerHTML);\n                    }\n                    if (this.__render.drStripOption === 'true') {\n                        Array.from(n.childNodes).forEach(it => this.__fag.append(it));\n                    } else {\n                        this.__render.fag.append(n);\n                    }"), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$a({ fag: newTemp, drStripOption: this.elementSource.attrs.drStripOption }, this.render))
                }));
                RawSet_1$e.RawSet.drVarDecoding(newTemp, vars);
                RawSet_1$e.RawSet.drItOtherDecoding(newTemp, itRandom);
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$e.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_b = this.elementSource.element.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(this.returnContainer.fag, this.elementSource.element);
                (_c = this.returnContainer.raws).push.apply(_c, rr);
                return [2 /*return*/, OperatorExecuter_1$c.ExecuteState.EXECUTE];
            });
        });
    };
    return Dr;
}(OperatorExecuterAttrRequire_1$9.OperatorExecuterAttrRequire));
Dr$1.Dr = Dr;

var DrIf$1 = {};

var __extends$j = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$9 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$9 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$9.apply(this, arguments);
};
var __awaiter$f = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$f = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrIf$1, "__esModule", { value: true });
DrIf$1.DrIf = void 0;
var OperatorExecuterAttrRequire_1$8 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$a = ScriptUtils$1;
var RawSet_1$d = RawSet$1;
var OperatorExecuter_1$b = OperatorExecuter;
var DrIf = /** @class */ (function (_super) {
    __extends$j(DrIf, _super);
    function DrIf(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
        return _this;
    }
    DrIf.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c, _d;
        return __awaiter$f(this, void 0, void 0, function () {
            var itRandom, vars, newTemp, keepgoing, tempalte, rr;
            var _e;
            return __generator$f(this, function (_f) {
                itRandom = RawSet_1$d.RawSet.drItOtherEncoding(this.elementSource.element);
                vars = RawSet_1$d.RawSet.drVarEncoding(this.elementSource.element, (_a = this.elementSource.attrs.drVarOption) !== null && _a !== void 0 ? _a : '');
                newTemp = this.source.config.window.document.createElement('temp');
                keepgoing = ScriptUtils_1$a.ScriptUtils.eval("\n                ".concat(this.render.bindScript, "\n                ").concat((_b = this.elementSource.attrs.drBeforeOption) !== null && _b !== void 0 ? _b : '', "\n                if ($rawset.data === (").concat(attr, ")) {\n                    return false;\n                }\n                $rawset.data = ").concat(attr, ";\n                if($rawset.data) {\n                    const n = $element.cloneNode(true);\n                    Object.entries(this.__render.drAttr).filter(([k,v]) => k !== 'drIf' && v).forEach(([k, v]) => n.setAttribute(this.__render.drAttrsOriginName[k], v));\n                    var destIt = ").concat(this.elementSource.attrs.drItOption, ";\n                    if (destIt !== undefined) {\n                        n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt)))\n                        n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt);\n                    }\n                    if (this.__render.drStripOption === 'true') {\n                        Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                    } else {\n                        this.__render.fag.append(n);\n                    }\n                }\n                ").concat((_c = this.elementSource.attrs.drAfterOption) !== null && _c !== void 0 ? _c : '', ";\n                return true;\n                "), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$9({ fag: newTemp, drAttr: this.elementSource.attrs, drAttrsOriginName: RawSet_1$d.RawSet.drAttrsOriginName, drStripOption: this.elementSource.attrs.drStripOption }, this.render))
                }));
                // TODO: 뭐지?? 지워야되는거 아닌가?
                if (keepgoing === false) {
                    return [2 /*return*/, OperatorExecuter_1$b.ExecuteState.STOP];
                }
                RawSet_1$d.RawSet.drVarDecoding(newTemp, vars);
                RawSet_1$d.RawSet.drItOtherDecoding(newTemp, itRandom);
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$d.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_d = this.elementSource.element.parentNode) === null || _d === void 0 ? void 0 : _d.replaceChild(this.returnContainer.fag, this.elementSource.element);
                (_e = this.returnContainer.raws).push.apply(_e, rr);
                return [2 /*return*/, OperatorExecuter_1$b.ExecuteState.EXECUTE];
            });
        });
    };
    return DrIf;
}(OperatorExecuterAttrRequire_1$8.OperatorExecuterAttrRequire));
DrIf$1.DrIf = DrIf;

var DrThis$1 = {};

var ComponentSet$1 = {};

Object.defineProperty(ComponentSet$1, "__esModule", { value: true });
ComponentSet$1.ComponentSet = void 0;
var ComponentSet = /** @class */ (function () {
    function ComponentSet(obj, template, styles, config) {
        this.obj = obj;
        this.template = template;
        this.styles = styles;
        this.config = Object.assign({ objPath: 'obj' }, config);
    }
    return ComponentSet;
}());
ComponentSet$1.ComponentSet = ComponentSet;

var __extends$i = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __awaiter$e = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$e = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrThis$1, "__esModule", { value: true });
DrThis$1.DrThis = void 0;
var OperatorExecuterAttrRequire_1$7 = OperatorExecuterAttrRequire$1;
var RawSet_1$c = RawSet$1;
var ComponentSet_1$1 = ComponentSet$1;
var OperatorExecuter_1$a = OperatorExecuter;
var DrThis = /** @class */ (function (_super) {
    __extends$i(DrThis, _super);
    function DrThis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrThis.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c, _d, _e;
        return __awaiter$e(this, void 0, void 0, function () {
            var destroyOptions, componentBody, _f, _g, rr;
            var _h;
            return __generator$e(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!(attr && this.elementSource.attrs.drThis)) return [3 /*break*/, 5];
                        if (!(attr instanceof ComponentSet_1$1.ComponentSet)) return [3 /*break*/, 2];
                        if (this.rawSet.data) {
                            destroyOptions = (_b = (_a = this.elementSource.attrs.drDestroyOption) === null || _a === void 0 ? void 0 : _a.split(',')) !== null && _b !== void 0 ? _b : [];
                            RawSet_1$c.RawSet.destroy(this.rawSet.data.obj, [], this.source.config, destroyOptions);
                        }
                        this.rawSet.data = attr;
                        return [4 /*yield*/, RawSet_1$c.RawSet.drThisCreate(this.rawSet, this.elementSource.element, "".concat(this.elementSource.attrs.drThis).concat(attr.config.objPath ? ('.' + attr.config.objPath) : ''), (_c = this.elementSource.attrs.drVarOption) !== null && _c !== void 0 ? _c : '', this.elementSource.attrs.drStripOption, this.source.obj, this.source.config, attr)];
                    case 1:
                        componentBody = _j.sent();
                        this.returnContainer.fag.append(componentBody);
                        this.afterCallBack.onThisComponentSetCallBacks.push(attr);
                        return [3 /*break*/, 4];
                    case 2:
                        _g = (_f = this.returnContainer.fag).append;
                        return [4 /*yield*/, RawSet_1$c.RawSet.drThisCreate(this.rawSet, this.elementSource.element, this.elementSource.attrs.drThis, (_d = this.elementSource.attrs.drVarOption) !== null && _d !== void 0 ? _d : '', this.elementSource.attrs.drStripOption, this.source.obj, this.source.config)];
                    case 3:
                        _g.apply(_f, [_j.sent()]);
                        _j.label = 4;
                    case 4:
                        rr = RawSet_1$c.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                        (_e = this.elementSource.element.parentNode) === null || _e === void 0 ? void 0 : _e.replaceChild(this.returnContainer.fag, this.elementSource.element);
                        (_h = this.returnContainer.raws).push.apply(_h, rr);
                        return [3 /*break*/, 6];
                    case 5:
                        this.elementSource.element.remove();
                        _j.label = 6;
                    case 6: return [2 /*return*/, OperatorExecuter_1$a.ExecuteState.EXECUTE];
                }
            });
        });
    };
    return DrThis;
}(OperatorExecuterAttrRequire_1$7.OperatorExecuterAttrRequire));
DrThis$1.DrThis = DrThis;

var DrForm$1 = {};

var Validator$1 = {};

Object.defineProperty(Validator$1, "__esModule", { value: true });
Validator$1.Validator = void 0;
// export interface Valid<T = any, E = Element> {
//     valid(value?: T, target?: E, event?: Event): boolean;
// }
var Validator = /** @class */ (function () {
    function Validator(_value, target, event, autoValid, autoValidAction) {
        if (autoValid === void 0) { autoValid = true; }
        if (autoValidAction === void 0) { autoValidAction = true; }
        this._value = _value;
        this.setTarget(target);
        this.setEvent(event);
        this.setAutoValid(autoValid);
        this.setAutoValidAction(autoValidAction);
    }
    Validator.prototype.getValidAction = function () {
        return this._validAction;
    };
    Validator.prototype.setValidAction = function (value) {
        this._validAction = value;
        return this;
    };
    Validator.prototype.getAutoValid = function () {
        return this._autoValid;
    };
    Validator.prototype.setAutoValid = function (autoValid) {
        this._autoValid = autoValid;
        return this;
    };
    Validator.prototype.getAutoValidAction = function () {
        return this._autoValidAction;
    };
    Validator.prototype.setAutoValidAction = function (autoValid) {
        this._autoValidAction = autoValid;
        return this;
    };
    Validator.prototype.getEvent = function () {
        return this._event;
    };
    Validator.prototype.setEvent = function (event) {
        if (event) {
            this._event = this.domRenderFinal(event);
        }
        return this;
    };
    Validator.prototype.getTarget = function () {
        return this._target;
    };
    Validator.prototype.targetFocus = function () {
        var _a, _b;
        (_b = (_a = this._target) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Validator.prototype.targetReset = function () {
        var _a, _b;
        (_b = (_a = this._target) === null || _a === void 0 ? void 0 : _a.reset) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Validator.prototype.targetDispatchEvent = function (event) {
        var _a;
        return (_a = this._target) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
    };
    Validator.prototype.setTarget = function (target) {
        if (target) {
            this._target = this.domRenderFinal(target);
        }
        return this;
    };
    Validator.prototype.domRenderFinal = function (obj) {
        obj._DomRender_isFinal = true;
        return obj;
    };
    Object.defineProperty(Validator.prototype, "value", {
        get: function () {
            var _a;
            if (this._value === undefined || this._value === null) {
                this._value = (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.value;
            }
            return this._value;
        },
        set: function (value) {
            // console.log('---?set?', value, this)
            this._value = value;
            this.tickValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Validator.prototype.tickValue = function (value) {
        this.changeValue(value);
        var target = this.getTarget();
        if (target && (target === null || target === void 0 ? void 0 : target.value) !== undefined && (target === null || target === void 0 ? void 0 : target.value) !== null) {
            try {
                target.value = this._value;
            }
            catch (e) {
                console.error('set value function is blocked ');
            }
        }
        if (this.getAutoValidAction()) {
            this.validAction();
        }
        else if (this.getAutoValid()) {
            this.valid();
        }
    };
    Validator.prototype.set = function (value, target, event) {
        this.setTarget(target);
        this.setEvent(event);
        this.value = value;
    };
    Validator.prototype.changeValue = function (value) {
    };
    Object.defineProperty(Validator.prototype, "checked", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : false;
        },
        set: function (checked) {
            var target = this.getTarget();
            if (target) {
                target.checked = checked;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "selectedIndex", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.selectedIndex) !== null && _b !== void 0 ? _b : -1;
        },
        set: function (selectedIndex) {
            var target = this.getTarget();
            if (target) {
                target.selectedIndex = selectedIndex;
            }
        },
        enumerable: false,
        configurable: true
    });
    Validator.prototype.querySelector = function (selector) {
        var _a;
        return (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
    };
    Validator.prototype.querySelectorALL = function (selector) {
        var _a;
        return (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector);
    };
    Validator.prototype.validAction = function () {
        var _a;
        var valid = this.valid();
        (_a = this.getValidAction()) === null || _a === void 0 ? void 0 : _a(valid, this.value, this.getTarget(), this.getEvent());
        return valid;
    };
    Validator.prototype.inValid = function () {
        return !this.valid();
    };
    Validator.prototype.allValid = function () {
        return this.valid() && this.childInValid();
    };
    Validator.prototype.allValidAction = function () {
        return this.validAction() && this.childInValidAction();
    };
    Validator.prototype.allInValid = function () {
        return !this.allValid();
    };
    Validator.prototype.allInValidAction = function () {
        return !this.allValidAction();
    };
    Validator.prototype.childValid = function () {
        return !this.childInValid();
    };
    Validator.prototype.childValue = function () {
        var data = {};
        this.childValidators().filter(function (_a) {
            var k = _a[0], v = _a[1];
            data[k] = v.value;
        });
        return data;
    };
    Validator.prototype.childValidAction = function () {
        return !this.childInValidAction();
    };
    Validator.prototype.childInValid = function () {
        var inValid = this.childValidators().filter(function (_a) {
            _a[0]; var v = _a[1];
            return !v.valid();
        });
        return inValid.length > 0;
    };
    Validator.prototype.childInValidValidator = function () {
        var inValid = this.childValidators().filter(function (_a) {
            _a[0]; var v = _a[1];
            return !v.valid();
        });
        return inValid;
    };
    Validator.prototype.childInValidAction = function () {
        var inValid = this.childValidators().filter(function (_a) {
            _a[0]; var v = _a[1];
            return !v.validAction();
        });
        return inValid.length > 0;
    };
    Validator.prototype.childValidator = function (name) {
        var _a;
        return (_a = Object.entries(this).find(function (_a) {
            var k = _a[0], v = _a[1];
            return (k === name && (v instanceof Validator));
        })) === null || _a === void 0 ? void 0 : _a[1];
    };
    Validator.prototype.childValidators = function () {
        return Object.entries(this).filter(function (_a) {
            _a[0]; var v = _a[1];
            return (v instanceof Validator);
        });
    };
    Validator.prototype.childValidValidator = function () {
        return this.childValidators().filter(function (it) { return it[1].valid(); });
    };
    Validator.prototype.syncValue = function () {
        var _a;
        this.value = (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.value;
    };
    Validator.prototype.allSyncValue = function () {
        this.childValidators().forEach(function (_a) {
            _a[0]; var e = _a[1];
            e.syncValue();
        });
    };
    Object.defineProperty(Validator.prototype, "length", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        },
        enumerable: false,
        configurable: true
    });
    return Validator;
}());
Validator$1.Validator = Validator;

var ValidatorArray$1 = {};

var NonPassValidator$1 = {};

var __extends$h = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(NonPassValidator$1, "__esModule", { value: true });
NonPassValidator$1.NonPassValidator = void 0;
var Validator_1$2 = Validator$1;
var NonPassValidator = /** @class */ (function (_super) {
    __extends$h(NonPassValidator, _super);
    function NonPassValidator(value, target, event, autoValid) {
        if (autoValid === void 0) { autoValid = true; }
        return _super.call(this, value, target, event, autoValid) || this;
    }
    NonPassValidator.prototype.valid = function () {
        return false;
    };
    return NonPassValidator;
}(Validator_1$2.Validator));
NonPassValidator$1.NonPassValidator = NonPassValidator;

var __extends$g = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(ValidatorArray$1, "__esModule", { value: true });
ValidatorArray$1.ValidatorArray = void 0;
var Validator_1$1 = Validator$1;
var NonPassValidator_1 = NonPassValidator$1;
var ValidatorArray = /** @class */ (function (_super) {
    __extends$g(ValidatorArray, _super);
    function ValidatorArray(value, target, event, autoValid) {
        if (autoValid === void 0) { autoValid = true; }
        var _this = _super.call(this, value, target, event, autoValid) || this;
        _this._makeValidatorFactory = function (value, target, event) {
            return new NonPassValidator_1.NonPassValidator(value, target, event);
        };
        return _this;
    }
    ValidatorArray.prototype.getMakeValidatorFactory = function () {
        return this._makeValidatorFactory;
    };
    ValidatorArray.prototype.setMakeValidatorFactory = function (value) {
        this._makeValidatorFactory = value;
        return this;
    };
    ValidatorArray.prototype.setArrayValue = function (target, value, event) {
        var _a;
        (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(function (it) {
            if (it.getTarget()) {
                return it.getTarget() === target;
            }
            else {
                return false;
            }
        }).forEach(function (it) {
            it.set(value, target, event);
        });
        this.tickValue(this.value);
    };
    ValidatorArray.prototype.addValidator = function (value, target, event) {
        var _a, _b;
        if (!this.value) {
            this.value = [];
        }
        if (value instanceof Validator_1$1.Validator) {
            (_a = this.value) === null || _a === void 0 ? void 0 : _a.push(value);
        }
        else {
            (_b = this.value) === null || _b === void 0 ? void 0 : _b.push(this.makeValidator(value, target, event));
        }
        this.tickValue(this.value);
    };
    ValidatorArray.prototype.allChecked = function (checked) {
        var _a;
        this.checked = checked;
        (_a = this.value) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
            it.checked = checked;
        });
    };
    ValidatorArray.prototype.getValidators = function () {
        return this._value;
    };
    ValidatorArray.prototype.getValidator = function (e) {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(function (it) { return it.getTarget() === e; })[0];
    };
    ValidatorArray.prototype.getValidatorByValue = function (value) {
        var validatorByValue = this.getValidatorByValues(value)[0];
        return validatorByValue;
    };
    ValidatorArray.prototype.getValidatorByValues = function (value) {
        var _a, _b;
        return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(function (it) { return it.value === value; })) !== null && _b !== void 0 ? _b : [];
    };
    ValidatorArray.prototype.removeElement = function (e) {
        var value = this.value;
        if (value) {
            this.value = value.filter(function (it) { return it.getTarget() !== e; });
        }
    };
    ValidatorArray.prototype.makeValidator = function (value, target, event) {
        return this._makeValidatorFactory(value, target, event);
    };
    return ValidatorArray;
}(Validator_1$1.Validator));
ValidatorArray$1.ValidatorArray = ValidatorArray;

var __extends$f = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$8 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$8 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$8.apply(this, arguments);
};
var __awaiter$d = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$d = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrForm$1, "__esModule", { value: true });
DrForm$1.DrForm = void 0;
var ScriptUtils_1$9 = ScriptUtils$1;
var RawSet_1$b = RawSet$1;
var Validator_1 = Validator$1;
var EventManager_1$4 = EventManager$1;
var ValidatorArray_1 = ValidatorArray$1;
var OperatorExecuterAttrRequire_1$6 = OperatorExecuterAttrRequire$1;
var OperatorExecuter_1$9 = OperatorExecuter;
var DrForm = /** @class */ (function (_super) {
    __extends$f(DrForm, _super);
    function DrForm(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        return _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
    }
    DrForm.prototype.executeAttrRequire = function (attr) {
        var _a;
        return __awaiter$d(this, void 0, void 0, function () {
            var data, childs, fromName, thisName;
            var _b;
            var _this = this;
            return __generator$d(this, function (_c) {
                RawSet_1$b.RawSet.drFormOtherMoveAttr(this.elementSource.element, 'name', 'temp-name', this.source.config);
                data = ScriptUtils_1$9.ScriptUtils.evalReturn("".concat(attr), this.source.obj);
                childs = Array.from(this.elementSource.element.querySelectorAll('[name]'));
                fromName = ScriptUtils_1$9.ScriptUtils.evalReturn((_a = this.elementSource.element.getAttribute("".concat(RawSet_1$b.RawSet.DR_FORM_NAME, ":name"))) !== null && _a !== void 0 ? _a : '', this.source.obj);
                thisName = fromName !== null && fromName !== void 0 ? fromName : this.elementSource.element.getAttribute('name');
                // // 자기자신이 Input 대상일때
                if (childs.length <= 0 && thisName) {
                    childs.push(this.elementSource.element);
                }
                else {
                    if (data instanceof Validator_1.Validator) {
                        data.setTarget(this.elementSource.element);
                    }
                }
                childs.forEach(function (it) {
                    var _a, _b, _c, _d, _e;
                    var eventName = (_a = it.getAttribute("".concat(RawSet_1$b.RawSet.DR_FORM_NAME, ":event"))) !== null && _a !== void 0 ? _a : 'change';
                    var validatorName = it.getAttribute("".concat(RawSet_1$b.RawSet.DR_FORM_NAME, ":validator"));
                    var attrEventName = EventManager_1$4.EventManager.attrPrefix + 'event-' + eventName;
                    var varpath = (_c = ScriptUtils_1$9.ScriptUtils.evalReturn((_b = _this.elementSource.element.getAttribute("".concat(RawSet_1$b.RawSet.DR_FORM_NAME, ":name"))) !== null && _b !== void 0 ? _b : '', _this.source.obj)) !== null && _c !== void 0 ? _c : it.getAttribute('name');
                    if (varpath != null) {
                        if (validatorName) {
                            ScriptUtils_1$9.ScriptUtils.eval("\n                                ".concat(_this.render.bindScript, "\n                                const validator = typeof ").concat(validatorName, " ==='function' ?  new  ").concat(validatorName, "() : ").concat(validatorName, ";\n                                ").concat(attr, "['").concat(varpath, "'] = validator;\n                            "), Object.assign(_this.source.obj, {
                                __render: Object.freeze(__assign$8({ drStripOption: _this.elementSource.attrs.drStripOption }, _this.render))
                            }));
                        }
                        varpath = "".concat(attr, "['").concat(varpath, "']");
                        var data_1 = ScriptUtils_1$9.ScriptUtils.evalReturn("".concat(varpath), _this.source.obj);
                        if (data_1 instanceof ValidatorArray_1.ValidatorArray) {
                            it.setAttribute(attrEventName, "".concat(varpath, ".setArrayValue($target, $target.value, $event); ").concat((_d = it.getAttribute(attrEventName)) !== null && _d !== void 0 ? _d : '', ";"));
                            data_1.addValidator(it.value, it);
                        }
                        else if (data_1 instanceof Validator_1.Validator) {
                            // varpath += (varpath ? '.value' : 'value');
                            // varpath = drAttr.drForm + '.' + varpath;
                            // it.setAttribute(attrEventName, `${varpath} = $target.value; ${target}=$target; ${event}=$event;`);
                            it.setAttribute(attrEventName, "".concat(varpath, ".set($target.value, $target, $event); ").concat((_e = it.getAttribute(attrEventName)) !== null && _e !== void 0 ? _e : '', ";"));
                            data_1.setTarget(it);
                            data_1.value = it.value;
                        }
                        else {
                            it.setAttribute(attrEventName, "".concat(varpath, " = $target.value;"));
                        }
                    }
                });
                RawSet_1$b.RawSet.drFormOtherMoveAttr(this.elementSource.element, 'temp-name', 'name', this.source.config);
                (_b = this.returnContainer.raws).push.apply(_b, RawSet_1$b.RawSet.checkPointCreates(this.elementSource.element, this.source.obj, this.source.config));
                return [2 /*return*/, OperatorExecuter_1$9.ExecuteState.EXECUTE];
            });
        });
    };
    return DrForm;
}(OperatorExecuterAttrRequire_1$6.OperatorExecuterAttrRequire));
DrForm$1.DrForm = DrForm;

var DrInnerText$1 = {};

var __extends$e = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$7 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$7.apply(this, arguments);
};
var __awaiter$c = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$c = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrInnerText$1, "__esModule", { value: true });
DrInnerText$1.DrInnerText = void 0;
var OperatorExecuterAttrRequire_1$5 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$8 = ScriptUtils$1;
var RawSet_1$a = RawSet$1;
var OperatorExecuter_1$8 = OperatorExecuter;
var DrInnerText = /** @class */ (function (_super) {
    __extends$e(DrInnerText, _super);
    function DrInnerText(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        return _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
    }
    DrInnerText.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c;
        return __awaiter$c(this, void 0, void 0, function () {
            var newTemp, tempalte, rr;
            var _d;
            return __generator$c(this, function (_e) {
                newTemp = this.source.config.window.document.createElement('temp');
                ScriptUtils_1$8.ScriptUtils.eval(" \n                        ".concat(this.render.bindScript, "\n                        const n = $element.cloneNode(true);  \n                        ").concat((_a = this.elementSource.attrs.drBeforeOption) !== null && _a !== void 0 ? _a : '', "\n                        n.innerText = ").concat(attr, ";\n                        if (this.__render.drStripOption === 'true') {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                        ").concat((_b = this.elementSource.attrs.drAfterOption) !== null && _b !== void 0 ? _b : '', "\n                    "), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$7({ drStripOption: this.elementSource.attrs.drStripOption, fag: newTemp }, this.render))
                }));
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$a.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_c = this.elementSource.element.parentNode) === null || _c === void 0 ? void 0 : _c.replaceChild(this.returnContainer.fag, this.elementSource.element);
                (_d = this.returnContainer.raws).push.apply(_d, rr);
                return [2 /*return*/, OperatorExecuter_1$8.ExecuteState.EXECUTE];
            });
        });
    };
    return DrInnerText;
}(OperatorExecuterAttrRequire_1$5.OperatorExecuterAttrRequire));
DrInnerText$1.DrInnerText = DrInnerText;

var DrInnerHTML$1 = {};

var __extends$d = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$6 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$6.apply(this, arguments);
};
var __awaiter$b = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$b = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrInnerHTML$1, "__esModule", { value: true });
DrInnerHTML$1.DrInnerHTML = void 0;
var OperatorExecuterAttrRequire_1$4 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$7 = ScriptUtils$1;
var RawSet_1$9 = RawSet$1;
var OperatorExecuter_1$7 = OperatorExecuter;
var DrInnerHTML = /** @class */ (function (_super) {
    __extends$d(DrInnerHTML, _super);
    function DrInnerHTML(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        return _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
    }
    DrInnerHTML.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c;
        return __awaiter$b(this, void 0, void 0, function () {
            var newTemp, tempalte, rr;
            var _d;
            return __generator$b(this, function (_e) {
                newTemp = this.source.config.window.document.createElement('temp');
                ScriptUtils_1$7.ScriptUtils.eval("\n                        ".concat(this.render.bindScript, "\n                        const n = $element.cloneNode(true);\n                        ").concat((_a = this.elementSource.attrs.drBeforeOption) !== null && _a !== void 0 ? _a : '', "\n                        n.innerHTML = ").concat(attr, ";\n                        if (this.__render.drStripOption === 'true') {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                        ").concat((_b = this.elementSource.attrs.drAfterOption) !== null && _b !== void 0 ? _b : '', "\n                    "), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$6({ drStripOption: this.elementSource.attrs.drStripOption, fag: newTemp }, this.render
                    // eslint-disable-next-line no-use-before-define
                    ))
                }));
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$9.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_c = this.elementSource.element.parentNode) === null || _c === void 0 ? void 0 : _c.replaceChild(this.returnContainer.fag, this.elementSource.element);
                (_d = this.returnContainer.raws).push.apply(_d, rr);
                return [2 /*return*/, OperatorExecuter_1$7.ExecuteState.EXECUTE];
            });
        });
    };
    return DrInnerHTML;
}(OperatorExecuterAttrRequire_1$4.OperatorExecuterAttrRequire));
DrInnerHTML$1.DrInnerHTML = DrInnerHTML;

var DrFor$1 = {};

var __extends$c = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$5 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$5 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$5.apply(this, arguments);
};
var __awaiter$a = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$a = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrFor$1, "__esModule", { value: true });
DrFor$1.DrFor = void 0;
var OperatorExecuterAttrRequire_1$3 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$6 = ScriptUtils$1;
var RawSet_1$8 = RawSet$1;
var OperatorExecuter_1$6 = OperatorExecuter;
var DrFor = /** @class */ (function (_super) {
    __extends$c(DrFor, _super);
    function DrFor(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
        return _this;
    }
    DrFor.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c, _d;
        return __awaiter$a(this, void 0, void 0, function () {
            var itRandom, vars, newTemp, tempalte, rr;
            var _e;
            return __generator$a(this, function (_f) {
                itRandom = RawSet_1$8.RawSet.drItOtherEncoding(this.elementSource.element);
                vars = RawSet_1$8.RawSet.drVarEncoding(this.elementSource.element, (_a = this.elementSource.attrs.drVarOption) !== null && _a !== void 0 ? _a : '');
                newTemp = this.source.config.window.document.createElement('temp');
                ScriptUtils_1$6.ScriptUtils.eval("\n                    ".concat(this.render.bindScript, "\n                    ").concat((_b = this.elementSource.attrs.drBeforeOption) !== null && _b !== void 0 ? _b : '', "\n                    for(").concat(attr, ") {\n                        const n = this.__render.element.cloneNode(true);\n                        var destIt = ").concat(this.elementSource.attrs.drItOption, ";\n                        if (destIt !== undefined) {\n                            n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt).replace(/\\#nearForIt\\#/g, destIt).replace(/\\#nearForIndex\\#/g, destIt))) \n                            n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt).replace(/\\#index\\#/g, destIt);\n                        }\n                        if (this.__render.drStripOption === 'true') {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                    }\n                    ").concat((_c = this.elementSource.attrs.drAfterOption) !== null && _c !== void 0 ? _c : '', "\n                    "), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$5({ fag: newTemp, drStripOption: this.elementSource.attrs.drStripOption }, this.render))
                }));
                RawSet_1$8.RawSet.drVarDecoding(newTemp, vars);
                RawSet_1$8.RawSet.drItOtherDecoding(newTemp, itRandom);
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$8.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_d = this.elementSource.element.parentNode) === null || _d === void 0 ? void 0 : _d.replaceChild(this.returnContainer.fag, this.elementSource.element);
                (_e = this.returnContainer.raws).push.apply(_e, rr);
                return [2 /*return*/, OperatorExecuter_1$6.ExecuteState.EXECUTE];
            });
        });
    };
    return DrFor;
}(OperatorExecuterAttrRequire_1$3.OperatorExecuterAttrRequire));
DrFor$1.DrFor = DrFor;

var DrForOf$1 = {};

var __extends$b = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$4 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};
var __awaiter$9 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$9 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrForOf$1, "__esModule", { value: true });
DrForOf$1.DrForOf = void 0;
var OperatorExecuterAttrRequire_1$2 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$5 = ScriptUtils$1;
var RawSet_1$7 = RawSet$1;
var OperatorExecuter_1$5 = OperatorExecuter;
var DrForOf = /** @class */ (function (_super) {
    __extends$b(DrForOf, _super);
    function DrForOf(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
        return _this;
    }
    DrForOf.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c, _d;
        return __awaiter$9(this, void 0, void 0, function () {
            var itRandom, vars, newTemp, tempalte, rr;
            var _e;
            return __generator$9(this, function (_f) {
                itRandom = RawSet_1$7.RawSet.drItOtherEncoding(this.elementSource.element);
                vars = RawSet_1$7.RawSet.drVarEncoding(this.elementSource.element, (_a = this.elementSource.attrs.drVarOption) !== null && _a !== void 0 ? _a : '');
                newTemp = this.source.config.window.document.createElement('temp');
                ScriptUtils_1$5.ScriptUtils.eval("\n                    ".concat(this.render.bindScript, "\n                    ").concat((_b = this.elementSource.attrs.drBeforeOption) !== null && _b !== void 0 ? _b : '', "\n                    var i = 0; \n                    const forOf = ").concat(attr, ";\n                    const forOfStr = `").concat(attr, "`.trim();\n                    if (forOf) {\n                        for(const it of forOf) {\n                            var destIt = it;\n                            if (/\\[(.*,?)\\],/g.test(forOfStr)) {\n                                if (typeof it === 'string') {\n                                    destIt = it;\n                                } else {\n                                    destIt = forOfStr.substring(1, forOfStr.length-1).split(',')[i];\n                                }\n                            } else if (forOf.isRange) {\n                                    destIt = it;\n                            }  else {\n                                destIt = forOfStr + '[' + i +']'\n                            }\n                            const n = this.__render.element.cloneNode(true);\n                            Object.entries(this.__render.drAttr).filter(([k,v]) => k !== 'drForOf' && k !== 'drNextOption' && v).forEach(([k, v]) => n.setAttribute(this.__render.drAttrsOriginName[k], v));\n                            n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt).replace(/\\#nearForOfIt\\#/g, destIt).replace(/\\#it\\#/g, destIt).replace(/\\#nearForOfIndex\\#/g, i)))\n                            n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt).replace(/\\#index\\#/g, i);\n                            if (this.__render.drStripOption === 'true') {\n                                Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                            } else {\n                                this.__render.fag.append(n);\n                            }\n                            i++;\n                        }\n                        \n                        if('").concat(this.elementSource.attrs.drNextOption, "' !== 'null') {\n                            const n = this.__render.element.cloneNode(true);\n                            Object.entries(this.__render.drAttr).filter(([k,v]) => k !== 'drForOf' && k !== 'drNextOption' && v).forEach(([k, v]) => n.setAttribute(this.__render.drAttrsOriginName[k], v));\n                            const [name, idx] = '").concat(this.elementSource.attrs.drNextOption, "'.split(',');\n                            n.setAttribute('dr-for-of', name + '[' + idx + ']');\n                            n.setAttribute('dr-next', name + ',' +  (Number(idx) + 1));\n                            this.__render.fag.append(n);\n                        }\n                    }\n                    ").concat((_c = this.elementSource.attrs.drAfterOption) !== null && _c !== void 0 ? _c : '', "\n                    "), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$4({ drStripOption: this.elementSource.attrs.drStripOption, drAttr: this.elementSource.attrs, drAttrsOriginName: RawSet_1$7.RawSet.drAttrsOriginName, fag: newTemp }, this.render
                    // eslint-disable-next-line no-use-before-define
                    ))
                }));
                RawSet_1$7.RawSet.drVarDecoding(newTemp, vars);
                RawSet_1$7.RawSet.drItOtherDecoding(newTemp, itRandom);
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$7.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_d = this.elementSource.element.parentNode) === null || _d === void 0 ? void 0 : _d.replaceChild(this.returnContainer.fag, this.elementSource.element);
                // const rrr = rr.flatMap(it => it.render(obj, config));// .flat();
                (_e = this.returnContainer.raws).push.apply(_e, rr);
                return [2 /*return*/, OperatorExecuter_1$5.ExecuteState.EXECUTE];
            });
        });
    };
    return DrForOf;
}(OperatorExecuterAttrRequire_1$2.OperatorExecuterAttrRequire));
DrForOf$1.DrForOf = DrForOf;

var DrAppender$1 = {};

var __extends$a = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$3 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
var __awaiter$8 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$8 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrAppender$1, "__esModule", { value: true });
DrAppender$1.DrAppender = void 0;
var OperatorExecuterAttrRequire_1$1 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$4 = ScriptUtils$1;
var RawSet_1$6 = RawSet$1;
var OperatorExecuter_1$4 = OperatorExecuter;
var DrAppender = /** @class */ (function (_super) {
    __extends$a(DrAppender, _super);
    function DrAppender(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
        return _this;
    }
    DrAppender.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c, _d;
        return __awaiter$8(this, void 0, void 0, function () {
            var itRandom, vars, newTemp, tempalte, rr;
            var _e;
            return __generator$8(this, function (_f) {
                itRandom = RawSet_1$6.RawSet.drItOtherEncoding(this.elementSource.element);
                vars = RawSet_1$6.RawSet.drVarEncoding(this.elementSource.element, (_a = this.elementSource.attrs.drVarOption) !== null && _a !== void 0 ? _a : '');
                newTemp = this.source.config.window.document.createElement('temp');
                ScriptUtils_1$4.ScriptUtils.eval("\n                    try{\n                    ".concat(this.render.bindScript, "\n                    ").concat((_b = this.elementSource.attrs.drBeforeOption) !== null && _b !== void 0 ? _b : '', "\n                        const ifWrap = document.createElement('div');\n                        ifWrap.setAttribute('dr-strip', 'true');\n                        ifWrap.setAttribute('dr-if', '").concat(this.elementSource.attrs.drAppender, " && ").concat(this.elementSource.attrs.drAppender, ".length > 0');\n                        const n = this.__render.element.cloneNode(true);\n                        Object.entries(this.__render.drAttr).filter(([k,v]) => k !== 'drAppender' && v).forEach(([k, v]) => n.setAttribute(this.__render.drAttrsOriginName[k], v));\n                        n.setAttribute('dr-for-of', '").concat(this.elementSource.attrs.drAppender, "[' + (").concat(this.elementSource.attrs.drAppender, ".length-1) + ']');\n                        n.setAttribute('dr-next', '").concat(this.elementSource.attrs.drAppender, ",' + ").concat(this.elementSource.attrs.drAppender, ".length);\n                        ifWrap.append(n);\n                        this.__render.fag.append(ifWrap);\n                    ").concat((_c = this.elementSource.attrs.drAfterOption) !== null && _c !== void 0 ? _c : '', "\n                    }catch(e){}\n                    "), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$3({ drStripOption: this.elementSource.attrs.drStripOption, drAttr: this.elementSource.attrs, drAttrsOriginName: RawSet_1$6.RawSet.drAttrsOriginName, fag: newTemp }, this.render
                    // eslint-disable-next-line no-use-before-define
                    ))
                }));
                RawSet_1$6.RawSet.drVarDecoding(newTemp, vars);
                RawSet_1$6.RawSet.drItOtherDecoding(newTemp, itRandom);
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$6.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_d = this.elementSource.element.parentNode) === null || _d === void 0 ? void 0 : _d.replaceChild(this.returnContainer.fag, this.elementSource.element);
                // const rrr = rr.flatMap(it => it.render(obj, config));// .flat();
                (_e = this.returnContainer.raws).push.apply(_e, rr);
                return [2 /*return*/, OperatorExecuter_1$4.ExecuteState.EXECUTE];
            });
        });
    };
    return DrAppender;
}(OperatorExecuterAttrRequire_1$1.OperatorExecuterAttrRequire));
DrAppender$1.DrAppender = DrAppender;

var DrRepeat$1 = {};

var __extends$9 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __assign$2 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var __awaiter$7 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$7 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrRepeat$1, "__esModule", { value: true });
DrRepeat$1.DrRepeat = void 0;
var OperatorExecuterAttrRequire_1 = OperatorExecuterAttrRequire$1;
var ScriptUtils_1$3 = ScriptUtils$1;
var RawSet_1$5 = RawSet$1;
var EventManager_1$3 = EventManager$1;
var OperatorExecuter_1$3 = OperatorExecuter;
var DrRepeat = /** @class */ (function (_super) {
    __extends$9(DrRepeat, _super);
    function DrRepeat(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
        return _this;
    }
    DrRepeat.prototype.executeAttrRequire = function (attr) {
        var _a, _b, _c, _d;
        return __awaiter$7(this, void 0, void 0, function () {
            var itRandom, vars, newTemp, tempalte, rr;
            var _e;
            return __generator$7(this, function (_f) {
                itRandom = RawSet_1$5.RawSet.drItOtherEncoding(this.elementSource.element);
                vars = RawSet_1$5.RawSet.drVarEncoding(this.elementSource.element, (_a = this.elementSource.attrs.drVarOption) !== null && _a !== void 0 ? _a : '');
                newTemp = this.source.config.window.document.createElement('temp');
                ScriptUtils_1$3.ScriptUtils.eval("\n                    ".concat(this.render.bindScript, "\n                    ").concat((_b = this.elementSource.attrs.drBeforeOption) !== null && _b !== void 0 ? _b : '', "\n                    var i = 0; \n                    const repeat = ").concat(attr, ";\n                    const repeatStr = `").concat(attr, "`;\n                    let range = repeat;\n                    if (typeof repeat === 'number') {\n                        range = ").concat(EventManager_1$3.EventManager.RANGE_VARNAME, "(repeat);\n                    } \n                    for(const it of range) {\n                        var destIt = it;\n                        if (range.isRange) {\n                            destIt = it;\n                        }  else {\n                            destIt = repeatStr + '[' + i +']'\n                        }\n                        const n = this.__render.element.cloneNode(true);\n                        n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt).replace(/\\#nearRangeIt\\#/g, destIt).replace(/\\#nearRangeIndex\\#/g, destIt)))\n                        n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt).replace(/\\#index\\#/g, destIt);\n                        \n                        if (this.__render.drStripOption === 'true') {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                        i++;\n                    }\n                    ").concat((_c = this.elementSource.attrs.drAfterOption) !== null && _c !== void 0 ? _c : '', "\n                    "), Object.assign(this.source.obj, {
                    __render: Object.freeze(__assign$2({ fag: newTemp, drStripOption: this.elementSource.attrs.drStripOption }, this.render))
                }));
                RawSet_1$5.RawSet.drVarDecoding(newTemp, vars);
                RawSet_1$5.RawSet.drItOtherDecoding(newTemp, itRandom);
                tempalte = this.source.config.window.document.createElement('template');
                tempalte.innerHTML = newTemp.innerHTML;
                this.returnContainer.fag.append(tempalte.content);
                rr = RawSet_1$5.RawSet.checkPointCreates(this.returnContainer.fag, this.source.obj, this.source.config);
                (_d = this.elementSource.element.parentNode) === null || _d === void 0 ? void 0 : _d.replaceChild(this.returnContainer.fag, this.elementSource.element);
                (_e = this.returnContainer.raws).push.apply(_e, rr);
                return [2 /*return*/, OperatorExecuter_1$3.ExecuteState.EXECUTE];
            });
        });
    };
    return DrRepeat;
}(OperatorExecuterAttrRequire_1.OperatorExecuterAttrRequire));
DrRepeat$1.DrRepeat = DrRepeat;

var DrTargetElement$1 = {};

var __extends$8 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __awaiter$6 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$6 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrTargetElement$1, "__esModule", { value: true });
DrTargetElement$1.DrTargetElement = void 0;
var ScriptUtils_1$2 = ScriptUtils$1;
var RawSet_1$4 = RawSet$1;
var OperatorExecuter_1$2 = OperatorExecuter;
var DrTargetElement = /** @class */ (function (_super) {
    __extends$8(DrTargetElement, _super);
    function DrTargetElement(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
        return _this;
    }
    DrTargetElement.prototype.execute = function () {
        var _a, _b, _c, _d;
        return __awaiter$6(this, void 0, void 0, function () {
            var targetElement, documentFragment, detectAction_1, render_1, rr;
            var _e;
            var _this = this;
            return __generator$6(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        targetElement = (_b = (_a = this.source.config) === null || _a === void 0 ? void 0 : _a.targetElements) === null || _b === void 0 ? void 0 : _b.find(function (it) { return it.name.toLowerCase() === _this.elementSource.element.tagName.toLowerCase(); });
                        if (!targetElement) return [3 /*break*/, 2];
                        return [4 /*yield*/, targetElement.callBack(this.elementSource.element, this.source.obj, this.rawSet, this.elementSource.attrs, this.source.config)];
                    case 1:
                        documentFragment = _f.sent();
                        if (documentFragment) {
                            detectAction_1 = this.elementSource.element.getAttribute(RawSet_1$4.RawSet.DR_DETECT_NAME);
                            render_1 = documentFragment.render;
                            this.rawSet.fragment = documentFragment;
                            this.rawSet.data = render_1.component;
                            if (detectAction_1 && render_1) {
                                this.rawSet.detect = {
                                    action: function () {
                                        var script = "var $component = this.__render.component; var $element = this.__render.element; var $innerHTML = this.__render.innerHTML; var $attribute = this.__render.attribute;  ".concat(detectAction_1, " ");
                                        ScriptUtils_1$2.ScriptUtils.eval(script, Object.assign(_this.source.obj, {
                                            __render: render_1
                                        }));
                                    }
                                };
                            }
                            rr = RawSet_1$4.RawSet.checkPointCreates(documentFragment, this.source.obj, this.source.config);
                            (_c = this.elementSource.element.parentNode) === null || _c === void 0 ? void 0 : _c.replaceChild(documentFragment, this.elementSource.element);
                            (_e = this.returnContainer.raws).push.apply(_e, rr);
                            this.afterCallBack.onElementInitCallBacks.push({
                                name: targetElement.name.toLowerCase(),
                                obj: this.source.obj,
                                targetElement: targetElement,
                                creatorMetaData: targetElement.__creatorMetaData
                            });
                            (_d = targetElement === null || targetElement === void 0 ? void 0 : targetElement.complete) === null || _d === void 0 ? void 0 : _d.call(targetElement, this.elementSource.element, this.source.obj, this.rawSet);
                        }
                        return [2 /*return*/, OperatorExecuter_1$2.ExecuteState.EXECUTE];
                    case 2: return [2 /*return*/, OperatorExecuter_1$2.ExecuteState.NO_EXECUTE];
                }
            });
        });
    };
    return DrTargetElement;
}(OperatorExecuter_1$2.OperatorExecuter));
DrTargetElement$1.DrTargetElement = DrTargetElement;

var DrTargetAttr$1 = {};

var __extends$7 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __awaiter$5 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$5 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(DrTargetAttr$1, "__esModule", { value: true });
DrTargetAttr$1.DrTargetAttr = void 0;
var RawSet_1$3 = RawSet$1;
var OperatorExecuter_1$1 = OperatorExecuter;
var DrTargetAttr = /** @class */ (function (_super) {
    __extends$7(DrTargetAttr, _super);
    function DrTargetAttr(rawSet, render, returnContainer, elementSource, source, afterCallBack) {
        var _this = this;
        source.operatorAround = undefined;
        _this = _super.call(this, rawSet, render, returnContainer, elementSource, source, afterCallBack, false) || this;
        return _this;
    }
    DrTargetAttr.prototype.execute = function () {
        var _a, _b, _c, _d;
        return __awaiter$5(this, void 0, void 0, function () {
            var attributeNames, targetAttr, attrName, attrValue, documentFragment, rr;
            var _e;
            return __generator$5(this, function (_f) {
                attributeNames = this.elementSource.element.getAttributeNames();
                targetAttr = (_b = (_a = this.source.config) === null || _a === void 0 ? void 0 : _a.targetAttrs) === null || _b === void 0 ? void 0 : _b.find(function (it) { return attributeNames.includes(it.name); });
                if (targetAttr) {
                    attrName = targetAttr.name;
                    attrValue = this.rawSet.getAttributeAndDelete(this.elementSource.element, attrName);
                    if (attrValue && attrName && (!this.elementSource.attrs.drForOf && !this.elementSource.attrs.drFor && !this.elementSource.attrs.drRepeat)) {
                        documentFragment = targetAttr.callBack(this.elementSource.element, attrValue, this.source.obj, this.rawSet);
                        if (documentFragment) {
                            rr = RawSet_1$3.RawSet.checkPointCreates(documentFragment, this.source.obj, this.source.config);
                            (_c = this.elementSource.element.parentNode) === null || _c === void 0 ? void 0 : _c.replaceChild(documentFragment, this.elementSource.element);
                            (_e = this.returnContainer.raws).push.apply(_e, rr);
                            this.afterCallBack.onAttrInitCallBacks.push({
                                attrName: attrName,
                                attrValue: attrValue,
                                obj: this.source.obj
                            });
                            (_d = targetAttr === null || targetAttr === void 0 ? void 0 : targetAttr.complete) === null || _d === void 0 ? void 0 : _d.call(targetAttr, this.elementSource.element, attrValue, this.source.obj, this.rawSet);
                        }
                    }
                    return [2 /*return*/, OperatorExecuter_1$1.ExecuteState.EXECUTE];
                }
                return [2 /*return*/, OperatorExecuter_1$1.ExecuteState.NO_EXECUTE];
            });
        });
    };
    return DrTargetAttr;
}(OperatorExecuter_1$1.OperatorExecuter));
DrTargetAttr$1.DrTargetAttr = DrTargetAttr;

var DestroyOptionType = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestroyOptionType = void 0;
(function (DestroyOptionType) {
    DestroyOptionType["NO_DESTROY"] = "NO_DESTROY";
    DestroyOptionType["NO_MESSENGER_DESTROY"] = "NO_MESSENGER_DESTROY";
})(exports.DestroyOptionType || (exports.DestroyOptionType = {}));
}(DestroyOptionType));

var RawSetType = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawSetType = void 0;
(function (RawSetType) {
    RawSetType["TEXT"] = "TEXT";
    RawSetType["STYLE_TEXT"] = "STYLE_TEXT";
    RawSetType["TARGET_ELEMENT"] = "TARGET_ELEMENT";
    RawSetType["TARGET_ATTR"] = "TARGET_ATTR";
    RawSetType["UNKOWN"] = "UNKOWN";
})(exports.RawSetType || (exports.RawSetType = {}));
}(RawSetType));

var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __awaiter$4 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$4 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray$8 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(RawSet$1, "__esModule", { value: true });
RawSet$1.RawSet = void 0;
var RandomUtils_1 = RandomUtils$3;
var StringUtils_1 = StringUtils$1;
var ScriptUtils_1$1 = ScriptUtils$1;
var EventManager_1$2 = EventManager$1;
var Range_1 = Range$1;
var Types_1$3 = Types;
var DomUtils_1 = DomUtils$1;
var DrPre_1 = DrPre$1;
var Dr_1 = Dr$1;
var DrIf_1 = DrIf$1;
var OperatorExecuter_1 = OperatorExecuter;
var DrThis_1 = DrThis$1;
var DrForm_1 = DrForm$1;
var DrInnerText_1 = DrInnerText$1;
var DrInnerHTML_1 = DrInnerHTML$1;
var DrFor_1 = DrFor$1;
var DrForOf_1 = DrForOf$1;
var DrAppender_1 = DrAppender$1;
var DrRepeat_1 = DrRepeat$1;
var DrTargetElement_1 = DrTargetElement$1;
var DrTargetAttr_1 = DrTargetAttr$1;
var DestroyOptionType_1 = DestroyOptionType;
var RawSetType_1$2 = RawSetType;
var RawSet = /** @class */ (function () {
    function RawSet(uuid, type, point, fragment, detect, data) {
        this.uuid = uuid;
        this.type = type;
        this.point = point;
        this.fragment = fragment;
        this.detect = detect;
        this.data = data;
        // console.log('rawset constructor->', (this.point.node as Element).getAttributeNames());
    }
    Object.defineProperty(RawSet.prototype, "isConnected", {
        get: function () {
            return this.point.start.isConnected && this.point.end.isConnected;
        },
        enumerable: false,
        configurable: true
    });
    // 중요
    RawSet.prototype.getUsingTriggerVariables = function (config) {
        var usingTriggerVariables = new Set();
        this.fragment.childNodes.forEach(function (cNode, key) {
            var _a, _b, _c;
            var script = '';
            if (cNode.nodeType === Node.TEXT_NODE) {
                script = "`".concat((_a = cNode.textContent) !== null && _a !== void 0 ? _a : '', "`");
                // console.log('???????', script)
            }
            else if (cNode.nodeType === Node.ELEMENT_NODE) {
                var element_1 = cNode;
                var targetAttrNames = ((_c = (_b = config === null || config === void 0 ? void 0 : config.targetAttrs) === null || _b === void 0 ? void 0 : _b.map(function (it) { return it.name; })) !== null && _c !== void 0 ? _c : []).concat(RawSet.DR_ATTRIBUTES); // .concat(EventManager.normalAttrMapAttrName);
                var targetScripts_1 = targetAttrNames.map(function (it) { return element_1.getAttribute(it); }).filter(function (it) { return it; });
                var targetAttrMap = element_1.getAttribute(EventManager_1$2.EventManager.normalAttrMapAttrName);
                if (targetAttrMap) {
                    new Map(JSON.parse(targetAttrMap)).forEach(function (v, k) {
                        targetScripts_1.push(v);
                    });
                }
                script = targetScripts_1.join(';');
                // attribute쪽 체크하는거 추가
                // console.log('----!!!!!-->', targetAttrNames)
                // const otherAttrs = element.getAttributeNames()
                //     .filter(it => !targetAttrNames.includes(it.toLowerCase()) && RawSet.isExporesion(element.getAttribute(it)))
                //     .map(it => {
                //         return `\`${element.getAttribute(it) ?? ''}\``;
                //     }).join(';');
                // script += ';' + otherAttrs
            }
            if (script) {
                // script = script.replace('}$','}');
                // console.log('----------->', script)
                EventManager_1$2.EventManager.VARNAMES.forEach(function (it) {
                    // script = script.replace(RegExp(it.replace('$', '\\$'), 'g'), `this?.___${it}`);
                    // script = script.replace(RegExp(it.replace('$', '\\$'), 'g'), `this.___${it}`);
                    script = script.replace(RegExp(it.replace('$', '\\$'), 'g'), "this.___".concat(it));
                    // console.log('scripts-->', script)
                });
                // console.log('----------', script);
                Array.from(ScriptUtils_1$1.ScriptUtils.getVariablePaths(script)).filter(function (it) { return !it.startsWith("___".concat(EventManager_1$2.EventManager.SCRIPTS_VARNAME)); }).forEach(function (it) { return usingTriggerVariables.add(it); });
            }
        });
        // console.log('usingTriggerVariable----------->', usingTriggerVariables)
        return usingTriggerVariables;
    };
    // 중요 render 처리 부분
    RawSet.prototype.render = function (obj, config) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        return __awaiter$4(this, void 0, void 0, function () {
            var genNode, raws, onAttrInitCallBacks, onElementInitCallBacks, onThisComponentSetCallBacks, drAttrs, _i, _y, cNode, attribute, __render, fag, textContent, runText, newNode, r, template, r, element, drAttr, operators, _z, operators_1, operator, state, _0, onThisComponentSetCallBacks_1, it_1, _1, onElementInitCallBacks_1, it_2, oninit, param, script, _2, onAttrInitCallBacks_1, it_3;
            var _this = this;
            return __generator$4(this, function (_3) {
                switch (_3.label) {
                    case 0:
                        genNode = config.window.document.importNode(this.fragment, true);
                        raws = [];
                        onAttrInitCallBacks = [];
                        onElementInitCallBacks = [];
                        onThisComponentSetCallBacks = [];
                        drAttrs = [];
                        _i = 0, _y = Array.from(genNode.childNodes.values());
                        _3.label = 1;
                    case 1:
                        if (!(_i < _y.length)) return [3 /*break*/, 7];
                        cNode = _y[_i];
                        attribute = {};
                        if (cNode.nodeType === Node.ELEMENT_NODE) {
                            attribute = DomUtils_1.DomUtils.getAttributeToObject(cNode);
                        }
                        __render = Object.freeze({
                            rawset: this,
                            scripts: EventManager_1$2.EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj),
                            router: config === null || config === void 0 ? void 0 : config.router,
                            range: Range_1.Range.range,
                            element: cNode,
                            attribute: attribute,
                            bindScript: "\n                    const ".concat(EventManager_1$2.EventManager.SCRIPTS_VARNAME, " = this.__render.scripts;\n                    const ").concat(EventManager_1$2.EventManager.RAWSET_VARNAME, " = this.__render.rawset;\n                    const ").concat(EventManager_1$2.EventManager.ELEMENT_VARNAME, " = this.__render.element;\n                    const ").concat(EventManager_1$2.EventManager.ATTRIBUTE_VARNAME, " = this.__render.attribute;\n                    const ").concat(EventManager_1$2.EventManager.RANGE_VARNAME, " = this.__render.range;\n                    const ").concat(EventManager_1$2.EventManager.ROUTER_VARNAME, " = this.__render.router;\n            ")
                            // eslint-disable-next-line no-use-before-define
                        });
                        fag = config.window.document.createDocumentFragment();
                        if (!(cNode.nodeType === Node.TEXT_NODE && cNode.textContent)) return [3 /*break*/, 2];
                        textContent = cNode.textContent;
                        runText = RawSet.exporesionGrouops(textContent)[0][1];
                        newNode = void 0;
                        if (textContent === null || textContent === void 0 ? void 0 : textContent.startsWith('#')) {
                            r = ScriptUtils_1$1.ScriptUtils.eval("".concat(__render.bindScript, " return ").concat(runText), Object.assign(obj, { __render: __render }));
                            template = config.window.document.createElement('template');
                            template.innerHTML = r;
                            newNode = template.content;
                        }
                        else {
                            r = ScriptUtils_1$1.ScriptUtils.eval("".concat(__render.bindScript, "  return ").concat(runText), Object.assign(obj, { __render: __render }));
                            newNode = config.window.document.createTextNode(r);
                        }
                        (_a = cNode.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newNode, cNode);
                        // console.log('-------', this.point.start.parentNode.nodeName)
                        // 중요 style value change 됐을때 다시 처리해야되기떄문에: 마지막에 completed 없는 attr 가지고 판단 하니깐
                        if (this.type === RawSetType_1$2.RawSetType.STYLE_TEXT && this.point.parent) {
                            this.point.parent.removeAttribute('completed');
                        }
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(cNode.nodeType === Node.ELEMENT_NODE)) return [3 /*break*/, 6];
                        element = cNode;
                        drAttr = {
                            dr: this.getAttributeAndDelete(element, RawSet.DR_NAME),
                            drIf: this.getAttributeAndDelete(element, RawSet.DR_IF_NAME),
                            drFor: this.getAttributeAndDelete(element, RawSet.DR_FOR_NAME),
                            drForOf: this.getAttributeAndDelete(element, RawSet.DR_FOR_OF_NAME),
                            drAppender: this.getAttributeAndDelete(element, RawSet.DR_APPENDER_NAME),
                            drRepeat: this.getAttributeAndDelete(element, RawSet.DR_REPEAT_NAME),
                            drThis: this.getAttributeAndDelete(element, RawSet.DR_THIS_NAME),
                            drForm: this.getAttributeAndDelete(element, RawSet.DR_FORM_NAME),
                            drPre: this.getAttributeAndDelete(element, RawSet.DR_PRE_NAME),
                            drInnerHTML: this.getAttributeAndDelete(element, RawSet.DR_INNERHTML_NAME),
                            drInnerText: this.getAttributeAndDelete(element, RawSet.DR_INNERTEXT_NAME),
                            drItOption: this.getAttributeAndDelete(element, RawSet.DR_IT_OPTIONNAME),
                            drVarOption: this.getAttributeAndDelete(element, RawSet.DR_VAR_OPTIONNAME),
                            drNextOption: this.getAttributeAndDelete(element, RawSet.DR_NEXT_OPTIONNAME),
                            drAfterOption: this.getAttributeAndDelete(element, RawSet.DR_AFTER_OPTIONNAME),
                            drBeforeOption: this.getAttributeAndDelete(element, RawSet.DR_BEFORE_OPTIONNAME),
                            drCompleteOption: this.getAttributeAndDelete(element, RawSet.DR_COMPLETE_OPTIONNAME),
                            drStripOption: this.getAttributeAndDelete(element, RawSet.DR_STRIP_OPTIONNAME),
                            drDestroyOption: this.getAttributeAndDelete(element, RawSet.DR_DESTROY_OPTIONNAME)
                        };
                        drAttrs.push(drAttr);
                        operators = [
                            new DrPre_1.DrPre(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_PRE_NAME, attr: drAttr.drPre, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_b = config.operatorAround) === null || _b === void 0 ? void 0 : _b.drPre }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new Dr_1.Dr(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_NAME, attr: drAttr.dr, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_c = config.operatorAround) === null || _c === void 0 ? void 0 : _c.dr }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrIf_1.DrIf(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_IF_NAME, attr: drAttr.drIf, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_d = config.operatorAround) === null || _d === void 0 ? void 0 : _d.drIf }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrThis_1.DrThis(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_THIS_NAME, attr: drAttr.drThis, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_e = config.operatorAround) === null || _e === void 0 ? void 0 : _e.drThis }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrForm_1.DrForm(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_FOR_NAME, attr: drAttr.drForm, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_f = config.operatorAround) === null || _f === void 0 ? void 0 : _f.drForm }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrInnerText_1.DrInnerText(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_INNERTEXT_NAME, attr: drAttr.drInnerText, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_g = config.operatorAround) === null || _g === void 0 ? void 0 : _g.drInnerText }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrInnerHTML_1.DrInnerHTML(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_INNERHTML_NAME, attr: drAttr.drInnerHTML, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_h = config.operatorAround) === null || _h === void 0 ? void 0 : _h.drInnerHTML }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrFor_1.DrFor(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_FOR_NAME, attr: drAttr.drFor, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_j = config.operatorAround) === null || _j === void 0 ? void 0 : _j.drFor }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrForOf_1.DrForOf(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_FOR_OF_NAME, attr: drAttr.drForOf, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_k = config.operatorAround) === null || _k === void 0 ? void 0 : _k.drForOf }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrAppender_1.DrAppender(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_APPENDER_NAME, attr: drAttr.drAppender, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_l = config.operatorAround) === null || _l === void 0 ? void 0 : _l.drAppender }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrRepeat_1.DrRepeat(this, __render, { raws: raws, fag: fag }, { element: element, attrName: RawSet.DR_REPEAT_NAME, attr: drAttr.drRepeat, attrs: drAttr }, { config: config, obj: obj, operatorAround: (_m = config.operatorAround) === null || _m === void 0 ? void 0 : _m.drRepeat }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrTargetElement_1.DrTargetElement(this, __render, { raws: raws, fag: fag }, { element: element, attrs: drAttr }, { config: config, obj: obj }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks }),
                            new DrTargetAttr_1.DrTargetAttr(this, __render, { raws: raws, fag: fag }, { element: element, attrs: drAttr }, { config: config, obj: obj }, { onAttrInitCallBacks: onAttrInitCallBacks, onElementInitCallBacks: onElementInitCallBacks, onThisComponentSetCallBacks: onThisComponentSetCallBacks })
                        ];
                        _z = 0, operators_1 = operators;
                        _3.label = 3;
                    case 3:
                        if (!(_z < operators_1.length)) return [3 /*break*/, 6];
                        operator = operators_1[_z];
                        return [4 /*yield*/, operator.start()];
                    case 4:
                        state = _3.sent();
                        if (state === OperatorExecuter_1.ExecuteState.EXECUTE) {
                            return [3 /*break*/, 6];
                        }
                        else if (state === OperatorExecuter_1.ExecuteState.STOP) {
                            return [2 /*return*/, raws];
                        }
                        _3.label = 5;
                    case 5:
                        _z++;
                        return [3 /*break*/, 3];
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        this.applyEvent(obj, genNode, config);
                        this.replaceBody(genNode); // 중요 여기서 마지막에 연션된 값을 그려준다.
                        drAttrs.forEach(function (it) {
                            if (it.drCompleteOption) {
                                // genNode.childNodes
                                var render = Object.freeze({
                                    rawset: _this,
                                    fag: genNode,
                                    scripts: EventManager_1$2.EventManager.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj)
                                });
                                ScriptUtils_1$1.ScriptUtils.eval("\n                const ".concat(EventManager_1$2.EventManager.FAG_VARNAME, " = this.__render.fag;\n                const ").concat(EventManager_1$2.EventManager.SCRIPTS_VARNAME, " = this.__render.scripts;\n                const ").concat(EventManager_1$2.EventManager.RAWSET_VARNAME, " = this.__render.rawset;\n                ").concat(it.drCompleteOption), Object.assign(obj, { __render: render }));
                            }
                        });
                        // 중요 style isolation 나중에 :scope로 대체 가능할듯.
                        RawSet.generateStyleSheetsLocal();
                        for (_0 = 0, onThisComponentSetCallBacks_1 = onThisComponentSetCallBacks; _0 < onThisComponentSetCallBacks_1.length; _0++) {
                            it_1 = onThisComponentSetCallBacks_1[_0];
                            (_p = (_o = it_1.obj) === null || _o === void 0 ? void 0 : _o.onInitRender) === null || _p === void 0 ? void 0 : _p.call(_o);
                        }
                        for (_1 = 0, onElementInitCallBacks_1 = onElementInitCallBacks; _1 < onElementInitCallBacks_1.length; _1++) {
                            it_2 = onElementInitCallBacks_1[_1];
                            if (((_r = (_q = it_2.targetElement) === null || _q === void 0 ? void 0 : _q.__render) === null || _r === void 0 ? void 0 : _r.element) && ((_t = (_s = it_2.targetElement) === null || _s === void 0 ? void 0 : _s.__render) === null || _t === void 0 ? void 0 : _t.component)) {
                                oninit = it_2.targetElement.__render.element.getAttribute(RawSet.DR_ON_INIT_ARGUMENTS_OPTIONNAME);
                                param = [];
                                if (oninit) {
                                    script = "".concat(it_2.targetElement.__render.renderScript, " return ").concat(oninit, " ");
                                    param = ScriptUtils_1$1.ScriptUtils.eval(script, Object.assign(obj, {
                                        __render: it_2.targetElement.__render
                                    }));
                                    if (!Array.isArray(param)) {
                                        param = [param];
                                    }
                                }
                                (_v = (_u = it_2.targetElement.__render.component).onInitRender) === null || _v === void 0 ? void 0 : _v.call.apply(_v, __spreadArray$8([_u], param, false));
                            }
                            (_w = config === null || config === void 0 ? void 0 : config.onElementInit) === null || _w === void 0 ? void 0 : _w.call(config, it_2.name, obj, this, it_2.targetElement);
                        }
                        // TODO: 이부분도 위에 targetElement 처럼 해야될까?
                        for (_2 = 0, onAttrInitCallBacks_1 = onAttrInitCallBacks; _2 < onAttrInitCallBacks_1.length; _2++) {
                            it_3 = onAttrInitCallBacks_1[_2];
                            (_x = config === null || config === void 0 ? void 0 : config.onAttrInit) === null || _x === void 0 ? void 0 : _x.call(config, it_3.attrName, it_3.attrValue, obj, this);
                        }
                        // component destroy
                        if (obj.__domrender_components) {
                            Object.entries(obj.__domrender_components).forEach(function (_a) {
                                var _b, _c;
                                var key = _a[0], value = _a[1];
                                var domrenderComponentNew = value.__domrender_component_new;
                                var rawSet = domrenderComponentNew === null || domrenderComponentNew === void 0 ? void 0 : domrenderComponentNew.rawSet;
                                var drAttrs = domrenderComponentNew === null || domrenderComponentNew === void 0 ? void 0 : domrenderComponentNew.drAttrs;
                                if (rawSet && !rawSet.isConnected) {
                                    // const domrenderComponent = obj.__domrender_components[key];
                                    // console.log('component destroy--->', key, rawSet, rawSet.isConnected, domrenderComponent.name, domrenderComponent);
                                    var destroyOptions = (_c = (_b = drAttrs === null || drAttrs === void 0 ? void 0 : drAttrs.drDestroyOption) === null || _b === void 0 ? void 0 : _b.split(',')) !== null && _c !== void 0 ? _c : [];
                                    RawSet.destroy(obj.__domrender_components[key], [domrenderComponentNew], config, destroyOptions);
                                    delete obj.__domrender_components[key];
                                }
                            });
                        }
                        return [2 /*return*/, raws];
                }
            });
        });
    };
    RawSet.generateStyleSheetsLocal = function () {
        Array.from(window.document.styleSheets).filter(function (it) { return it.ownerNode && it.ownerNode instanceof Element && it.ownerNode.hasAttribute('domstyle') && it.ownerNode.getAttribute('id') && !it.ownerNode.getAttribute('completed'); }).forEach(function (it) {
            var _a;
            var styleElement = it.ownerNode;
            var split = (_a = styleElement.getAttribute('id')) === null || _a === void 0 ? void 0 : _a.split('-');
            split === null || split === void 0 ? void 0 : split.pop();
            var id = split === null || split === void 0 ? void 0 : split.join('-');
            if (id) {
                // console.log('------->', id)
                Array.from(it.cssRules).forEach(function (it) {
                    RawSet.generateCSS(id, it);
                });
            }
            it.ownerNode.setAttribute('completed', 'true');
        });
    };
    RawSet.generateCSS = function (id, cssRule) {
        var _this = this;
        var start = "#".concat(id, "-start");
        var end = "#".concat(id, "-end");
        if (cssRule.constructor.name === 'CSSStyleRule') {
            var rule = cssRule;
            // rule.selectorText = `${start} ~ *:not(${start} ~ ${end} ~ *) ${rule.selectorText}`;
            // rule.selectorText = `${start} ~ *:not(${start} ~ ${end} ~ ${rule.selectorText})`;
            // console.log('-----', rule, rule.selectorText)
            if (!rule.selectorText.startsWith(':root')) {
                // rule.selectorText = `${start} ~ ${rule.selectorText}:not(${start} ~ ${end} ~ *)`;
                // rule.selectorText = `${start} ~ ${rule.selectorText}:not(${start} ~ ${end} ~ *)`;
                var selectorText = ":is(".concat(start, " ~ *:not(").concat(start, " ~ ").concat(end, " ~ *))");
                if (rule.selectorText.startsWith('.')) {
                    rule.selectorText = "".concat(selectorText).concat(rule.selectorText, ", ").concat(selectorText, " ").concat(rule.selectorText);
                    //     rule.selectorText = `${start} ~ *:not(${start} ~ ${end} ~ *)${rule.selectorText}`;
                }
                else {
                    var divText = "".concat(start, " ~ ").concat(rule.selectorText, ":not(").concat(start, " ~ ").concat(end, " ~ *)");
                    rule.selectorText = "".concat(selectorText, " ").concat(rule.selectorText, ", ").concat(divText);
                    // rule.selectorText = `${selectorText} ${rule.selectorText}`;
                    //     rule.selectorText = `${rule.selectorText} ~ ${start} ~ *:not(${start} ~ ${end} ~ *)`;
                }
            }
            // console.log(rule.selectorText);
        }
        else if (cssRule.constructor.name === 'CSSMediaRule') {
            var rule = cssRule;
            Array.from(rule.cssRules).forEach(function (it) {
                _this.generateCSS(id, it);
            });
        }
    };
    // 중요 스타일 적용 부분
    RawSet.generateStyleTransform = function (styleBody, id, styleTagWrap) {
        if (styleTagWrap === void 0) { styleTagWrap = true; }
        if (Array.isArray(styleBody)) {
            styleBody = styleBody.join('\n');
        }
        if (styleTagWrap) {
            styleBody = "<style id='".concat(id, "-style' domstyle>").concat(styleBody, "</style>");
        }
        return styleBody;
    };
    RawSet.prototype.applyEvent = function (obj, fragment, config) {
        if (fragment === void 0) { fragment = this.fragment; }
        EventManager_1$2.eventManager.applyEvent(obj, EventManager_1$2.eventManager.findAttrElements(fragment, config), config);
    };
    RawSet.prototype.getAttribute = function (element, attr) {
        var data = element.getAttribute(attr);
        return data;
    };
    RawSet.prototype.getAttributeAndDelete = function (element, attr) {
        var data = element.getAttribute(attr);
        element.removeAttribute(attr);
        return data;
    };
    RawSet.prototype.getDrAppendAttributeAndDelete = function (element, obj) {
        var data = element.getAttribute(RawSet.DR_APPENDER_NAME);
        // if (data && !/\[[0-9]+\]/g.test(data)) {
        if (data && !/\[.+\]/g.test(data)) {
            var currentIndex = ScriptUtils_1$1.ScriptUtils.evalReturn("".concat(data, "?.length -1"), obj);
            // console.log('------?', currentIndex)
            // if (currentIndex === undefined || isNaN(currentIndex)) {
            //     return undefined;
            // }
            // const currentIndex = ScriptUtils.evalReturn(`${data}.length`, obj);
            data = "".concat(data, "[").concat(currentIndex, "]");
            element.setAttribute(RawSet.DR_APPENDER_NAME, data);
            // element.setAttribute(RawSet.DR_IF_NAME, data);
            // element.setAttribute('dr-id', data);
            // console.log('-->', element)
        }
        // if (data && !/\.childs\[[0-9]+\]/g.test(data)) {
        //     const currentIndex = ScriptUtils.evalReturn(`${data}.currentIndex`, obj);
        //     data = `${data}.childs[${currentIndex}]`;
        //     element.setAttribute(RawSet.DR_APPENDER_NAME, data)
        // }
        element.removeAttribute(RawSet.DR_APPENDER_NAME);
        return data;
    };
    RawSet.prototype.replaceBody = function (genNode) {
        var _a;
        this.childAllRemove();
        (_a = this.point.start.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(genNode, this.point.start.nextSibling); // 중요 start checkpoint 다음인 end checkpoint 앞에 넣는다. 즉 중간 껴넣기 (나중에 meta tag로 변경을 해도될듯하긴한데..)
    };
    // 중요 important
    RawSet.checkPointCreates = function (element, obj, config) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // console.log('start==========')
        var thisVariableName = element.__domrender_this_variable_name;
        // console.log('checkPointCreates thisVariableName', thisVariableName);
        var nodeIterator = config.window.document.createNodeIterator(element, NodeFilter.SHOW_ALL, {
            acceptNode: function (node) {
                var _a, _b, _c, _d, _e;
                if (node.nodeType === Node.TEXT_NODE) {
                    // console.log('text--->', node.textContent)
                    // console.log('????????', node.parentElement, node.parentElement?.getAttribute('dr-pre'));
                    // console.log('???????/',node.textContent, node.parentElement?.getAttribute('dr-pre'))
                    // TODO: 나중에
                    // const between = StringUtils.betweenRegexpStr('[$#]\\{', '\\}', StringUtils.deleteEnter((node as Text).data ?? ''))
                    var between = RawSet.exporesionGrouops(StringUtils_1.StringUtils.deleteEnter((_a = node.data) !== null && _a !== void 0 ? _a : ''));
                    // console.log('bbbb', between)
                    return (between === null || between === void 0 ? void 0 : between.length) > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                    // return /\$\{.*?\}/g.test(StringUtils.deleteEnter((node as Text).data ?? '')) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                    // return /[$#]\{.*?\}/g.test(StringUtils.deleteEnter((node as Text).data ?? '')) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
                else if (node.nodeType === Node.ELEMENT_NODE) {
                    var element_2 = node;
                    // console.log('------>', element);
                    var isElement = ((_c = (_b = config.targetElements) === null || _b === void 0 ? void 0 : _b.map(function (it) { return it.name.toLowerCase(); })) !== null && _c !== void 0 ? _c : []).includes(element_2.tagName.toLowerCase());
                    var targetAttrNames_1 = ((_e = (_d = config.targetAttrs) === null || _d === void 0 ? void 0 : _d.map(function (it) { return it.name; })) !== null && _e !== void 0 ? _e : []).concat(RawSet.DR_ATTRIBUTES);
                    var normalAttrs_1 = new Map();
                    var isAttr = element_2.getAttributeNames().filter(function (it) {
                        var value = element_2.getAttribute(it);
                        if (value && RawSet.isExporesion(value)) {
                            normalAttrs_1.set(it, RawSet.exporesionGrouops(value)[0][1]);
                        }
                        // console.log(element.getAttribute(it), attrExpresion);
                        var isTargetAttr = targetAttrNames_1.includes(it.toLowerCase());
                        return isTargetAttr;
                    }).length > 0;
                    // 기본 attribute를 처리하기위해
                    if (normalAttrs_1.size) {
                        element_2.setAttribute(EventManager_1$2.EventManager.normalAttrMapAttrName, JSON.stringify(Array.from(normalAttrs_1.entries())));
                    }
                    return (isAttr || isElement) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_REJECT;
            }
        });
        var pars = [];
        var currentNode;
        var _loop_1 = function () {
            if (currentNode.nodeType === Node.TEXT_NODE) {
                var text = (_a = currentNode.textContent) !== null && _a !== void 0 ? _a : '';
                var template = config.window.document.createElement('template');
                // const a = StringUtils.regexExec(/\$\{.*?\}/g, text);
                // const a = StringUtils.regexExec(/[$#]\{.*?\}/g, text);
                // const a = StringUtils.betweenRegexpStr('[$#]\\{', '\\}', text); // <--TODO: 나중에..
                var groups = RawSet.exporesionGrouops(text);
                var map = groups.map(function (it) { return ({ uuid: RandomUtils_1.RandomUtils.getRandomString(40), content: it[0], regexArr: it }); });
                var lasterIndex = 0;
                for (var i = 0; i < map.length; i++) {
                    var it_4 = map[i];
                    var regexArr = it_4.regexArr;
                    var preparedText = regexArr.input.substring(lasterIndex, regexArr.index);
                    // const start = config.window.document.createElement('meta');
                    // start.setAttribute('id', `${it.uuid}-start`);
                    // const end = config.window.document.createElement('meta');
                    // end.setAttribute('id', `${it.uuid}-end`);
                    var type = void 0;
                    if (currentNode.parentNode && currentNode.parentNode.nodeName.toUpperCase() === 'STYLE') {
                        type = RawSetType_1$2.RawSetType.STYLE_TEXT;
                    }
                    else {
                        type = RawSetType_1$2.RawSetType.TEXT;
                    }
                    var startEndPoint = RawSet.createStartEndPoint(it_4.uuid, type, config);
                    // layout setting
                    template.content.append(document.createTextNode(preparedText)); // 앞 부분 넣고
                    template.content.append(startEndPoint.start); // add start checkpoint
                    template.content.append(startEndPoint.end); // add end checkpoint
                    // content 안쪽 RawSet render 할때 start 와 end 사이에 fragment 연산해서 들어간다.
                    var fragment = config.window.document.createDocumentFragment();
                    fragment.append(config.window.document.createTextNode(it_4.content));
                    pars.push(new RawSet(it_4.uuid, type, {
                        start: startEndPoint.start,
                        node: currentNode,
                        end: startEndPoint.end,
                        parent: currentNode.parentNode,
                        thisVariableName: thisVariableName
                    }, fragment));
                    lasterIndex = regexArr.index + it_4.content.length;
                }
                template.content.append(config.window.document.createTextNode(text.substring(lasterIndex, text.length)));
                (_b = currentNode === null || currentNode === void 0 ? void 0 : currentNode.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(template.content, currentNode); // <-- 여기서 text를 fragment로 replace했기때문에 추적 변경이 가능하다.
            }
            else if (currentNode.nodeType === Node.ELEMENT_NODE) {
                var uuid = RandomUtils_1.RandomUtils.getRandomString(40);
                var element_3 = currentNode;
                var fragment = config.window.document.createDocumentFragment();
                var type = RawSetType_1$2.RawSetType.TARGET_ELEMENT;
                var startEndPoint = RawSet.createStartEndPoint(uuid, type, config);
                var isElement = ((_d = (_c = config.targetElements) === null || _c === void 0 ? void 0 : _c.map(function (it) { return it.name.toLowerCase(); })) !== null && _d !== void 0 ? _d : []).includes(element_3.tagName.toLowerCase());
                var targetAttrNames_2 = ((_f = (_e = config.targetAttrs) === null || _e === void 0 ? void 0 : _e.map(function (it) { return it.name; })) !== null && _f !== void 0 ? _f : []).concat(RawSet.DR_ATTRIBUTES);
                var isAttr = element_3.getAttributeNames().filter(function (it) { return targetAttrNames_2.includes(it.toLowerCase()); }).length > 0;
                (_g = currentNode === null || currentNode === void 0 ? void 0 : currentNode.parentNode) === null || _g === void 0 ? void 0 : _g.insertBefore(startEndPoint.start, currentNode);
                (_h = currentNode === null || currentNode === void 0 ? void 0 : currentNode.parentNode) === null || _h === void 0 ? void 0 : _h.insertBefore(startEndPoint.end, currentNode.nextSibling);
                fragment.append(currentNode);
                pars.push(new RawSet(uuid, isElement ? type : (isAttr ? RawSetType_1$2.RawSetType.TARGET_ATTR : RawSetType_1$2.RawSetType.UNKOWN), {
                    start: startEndPoint.start,
                    node: currentNode,
                    end: startEndPoint.end,
                    parent: currentNode.parentNode,
                    thisVariableName: thisVariableName
                }, fragment));
            }
        };
        // eslint-disable-next-line no-cond-assign
        while (currentNode = nodeIterator.nextNode()) {
            _loop_1();
        }
        // console.log('check-->', pars)
        return pars;
    };
    RawSet.createStartEndPoint = function (id, type, config) {
        if (type === RawSetType_1$2.RawSetType.TARGET_ELEMENT) {
            var start = config.window.document.createElement('meta');
            var end = config.window.document.createElement('meta');
            start.setAttribute('id', "".concat(id, "-start"));
            end.setAttribute('id', "".concat(id, "-end"));
            return {
                start: start,
                end: end
            };
        }
        else if (type === RawSetType_1$2.RawSetType.STYLE_TEXT) {
            return {
                start: config.window.document.createTextNode("/*start text ".concat(id, "*/")),
                end: config.window.document.createTextNode("/*end text ".concat(id, "*/"))
            };
        }
        else { // text
            return {
                start: config.window.document.createComment("start text ".concat(id)),
                end: config.window.document.createComment("end text ".concat(id))
            };
        }
    };
    RawSet.prototype.childAllRemove = function () {
        var next = this.point.start.nextSibling;
        while (next) {
            if (next === this.point.end) {
                break;
            }
            next.remove();
            next = this.point.start.nextSibling;
        }
    };
    RawSet.drItOtherEncoding = function (element) {
        var random = RandomUtils_1.RandomUtils.uuid();
        var regex = /#it#/g;
        element.querySelectorAll("[".concat(RawSet.DR_IT_OPTIONNAME, "], [").concat(RawSet.DR_FOR_OF_NAME, "], [").concat(RawSet.DR_REPEAT_NAME, "]")).forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(regex, random);
        });
        return random;
    };
    RawSet.drItOtherDecoding = function (element, random) {
        element.querySelectorAll("[".concat(RawSet.DR_IT_OPTIONNAME, "], [").concat(RawSet.DR_FOR_OF_NAME, "], [").concat(RawSet.DR_REPEAT_NAME, "]")).forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(RegExp(random, 'g'), '#it#');
        });
    };
    RawSet.drThisEncoding = function (element, drThis) {
        var thisRandom = RandomUtils_1.RandomUtils.uuid();
        // const thisRegex = /(?<!(dr-|\.))this(?=.?)/g;
        // const thisRegex = /[^(dr\-)]this(?=.?)/g;
        // const thisRegex = /[^(dr\-)]this\./g;
        // safari 때문에 전위 검색 regex가 안됨 아 짜증나서 이걸로함.
        // element.querySelectorAll(`[${RawSet.DR_PRE_NAME}]`).forEach(it => {
        //     let message = it.innerHTML;
        // })
        element.querySelectorAll("[".concat(RawSet.DR_PRE_NAME, "]")).forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(/this/g, thisRandom);
        });
        element.querySelectorAll("[".concat(RawSet.DR_THIS_NAME, "]")).forEach(function (it) {
            var message = it.innerHTML;
            StringUtils_1.StringUtils.regexExec(/([^(dr\-)])?this(?=.?)/g, message).reverse().forEach(function (it) {
                var _a;
                message = message.substr(0, it.index) + message.substr(it.index).replace(it[0], "".concat((_a = it[1]) !== null && _a !== void 0 ? _a : '').concat(drThis));
            });
            it.innerHTML = message;
        });
        var message = element.innerHTML;
        StringUtils_1.StringUtils.regexExec(/([^(dr\-)])?this(?=.?)/g, message).reverse().forEach(function (it) {
            var _a;
            message = message.substr(0, it.index) + message.substr(it.index).replace(it[0], "".concat((_a = it[1]) !== null && _a !== void 0 ? _a : '').concat(drThis));
        });
        element.innerHTML = message;
        return thisRandom;
    };
    RawSet.drThisDecoding = function (element, thisRandom) {
        element.querySelectorAll("[".concat(RawSet.DR_PRE_NAME, "]")).forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(RegExp(thisRandom, 'g'), 'this');
        });
        element.querySelectorAll("[".concat(RawSet.DR_THIS_NAME, "]")).forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(RegExp(thisRandom, 'g'), 'this');
        });
    };
    RawSet.drFormOtherMoveAttr = function (element, as, to, config) {
        element.querySelectorAll("[".concat(RawSet.DR_FORM_NAME, "]")).forEach(function (subElement) {
            var _a;
            var nodeIterator = config.window.document.createNodeIterator(subElement, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function (node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        var element_4 = node;
                        return element_4.hasAttribute(as) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                    }
                    else {
                        return NodeFilter.FILTER_REJECT;
                    }
                }
            });
            var node;
            // eslint-disable-next-line no-cond-assign
            while (node = nodeIterator.nextNode()) {
                var element_5 = node;
                element_5.setAttribute(to, (_a = element_5.getAttribute(as)) !== null && _a !== void 0 ? _a : '');
                element_5.removeAttribute(as);
            }
        });
    };
    RawSet.drVarEncoding = function (element, drVarOption) {
        var _a;
        var vars = ((_a = drVarOption === null || drVarOption === void 0 ? void 0 : drVarOption.split(',')) !== null && _a !== void 0 ? _a : []).map(function (it) {
            var _a, _b;
            var s = it.trim().split('=');
            var name = (_a = s[0]) === null || _a === void 0 ? void 0 : _a.trim();
            var value = (_b = s[1]) === null || _b === void 0 ? void 0 : _b.trim();
            return {
                name: name,
                value: value,
                // regex: RegExp('(?<!(dr-|\\.))var\\.' + s[0] + '(?=.?)', 'g'),
                regex: RegExp('\\$var\\.' + name + '(?=.?)', 'g'),
                random: RandomUtils_1.RandomUtils.uuid()
            };
        });
        // element.querySelectorAll(`[${RawSet.DR_THIS_NAME}]`).forEach(it => {
        element.querySelectorAll("[".concat(RawSet.DR_VAR_OPTIONNAME, "]")).forEach(function (it) {
            vars.filter(function (vit) { return vit.value && vit.name; }).forEach(function (vit) {
                it.innerHTML = it.innerHTML.replace(vit.regex, vit.random);
            });
        });
        vars.filter(function (vit) { return vit.value && vit.name; }).forEach(function (vit) {
            element.innerHTML = element.innerHTML.replace(vit.regex, vit.value);
        });
        return vars;
    };
    RawSet.drVarDecoding = function (element, vars) {
        element.querySelectorAll("[".concat(RawSet.DR_THIS_NAME, "]")).forEach(function (it) {
            vars.filter(function (vit) { return vit.value && vit.name; }).forEach(function (vit) {
                it.innerHTML = it.innerHTML.replace(RegExp(vit.random, 'g'), vit.value);
            });
        });
    };
    RawSet.drThisCreate = function (rawSet, element, drThis, drVarOption, drStripOption, obj, config, set) {
        var _a, _b, _c, _d, _e;
        return __awaiter$4(this, void 0, void 0, function () {
            var fag, n, stylePromises, templatePromise, _f, i, it_5, _g, _h, _j, _k, _l, style, onCreate, renderScript, createParam, script, oninit, script, thisRandom, vars;
            return __generator$4(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        fag = config.window.document.createDocumentFragment();
                        n = element.cloneNode(true);
                        if (!set) return [3 /*break*/, 12];
                        stylePromises = [];
                        if (!(set.template && set.template.startsWith('lazy://'))) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetch(set.template.substring(6))];
                    case 1:
                        _f = (_m.sent()).text();
                        return [3 /*break*/, 3];
                    case 2:
                        _f = Promise.resolve(set.template);
                        _m.label = 3;
                    case 3:
                        templatePromise = (_f);
                        i = 0;
                        _m.label = 4;
                    case 4:
                        if (!(set.styles && i < ((_a = set.styles.length) !== null && _a !== void 0 ? _a : 0))) return [3 /*break*/, 9];
                        it_5 = set.styles[i];
                        _h = (_g = stylePromises).push;
                        if (!it_5.startsWith('lazy://')) return [3 /*break*/, 6];
                        return [4 /*yield*/, fetch(it_5.substring(6))];
                    case 5:
                        _j = (_m.sent()).text();
                        return [3 /*break*/, 7];
                    case 6:
                        _j = Promise.resolve(it_5);
                        _m.label = 7;
                    case 7:
                        _h.apply(_g, [_j]);
                        _m.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 4];
                    case 9:
                        _k = set;
                        return [4 /*yield*/, templatePromise];
                    case 10:
                        _k.template = _m.sent();
                        _l = set;
                        return [4 /*yield*/, Promise.all(stylePromises)];
                    case 11:
                        _l.styles = _m.sent();
                        style = RawSet.generateStyleTransform((_b = set.styles) !== null && _b !== void 0 ? _b : [], rawSet.uuid, true);
                        n.innerHTML = style + ((_c = set.template) !== null && _c !== void 0 ? _c : '');
                        onCreate = element.getAttribute(RawSet.DR_ON_CREATE_ARGUMENTS_OPTIONNAME);
                        renderScript = '';
                        createParam = [];
                        if (onCreate) {
                            script = "".concat(renderScript, " return ").concat(onCreate, " ");
                            createParam = ScriptUtils_1$1.ScriptUtils.eval(script, obj);
                            if (!Array.isArray(createParam)) {
                                createParam = [createParam];
                            }
                        }
                        (_e = (_d = set.obj) === null || _d === void 0 ? void 0 : _d.onCreateRender) === null || _e === void 0 ? void 0 : _e.call.apply(_e, __spreadArray$8([_d], createParam, false));
                        oninit = element.getAttribute(RawSet.DR_ON_CREATED_CALLBACK_OPTIONNAME);
                        if (oninit) {
                            script = "".concat(renderScript, "  ").concat(oninit, " ");
                            ScriptUtils_1$1.ScriptUtils.eval(script, obj);
                        }
                        _m.label = 12;
                    case 12:
                        n.querySelectorAll(EventManager_1$2.eventManager.attrNames.map(function (it) { return "[".concat(it, "]"); }).join(',')).forEach(function (it) {
                            it.setAttribute(EventManager_1$2.EventManager.ownerVariablePathAttrName, 'this');
                        });
                        thisRandom = this.drThisEncoding(n, drThis);
                        vars = this.drVarEncoding(n, drVarOption);
                        this.drVarDecoding(n, vars);
                        this.drThisDecoding(n, thisRandom);
                        if (drStripOption && (drStripOption === true || drStripOption === 'true')) {
                            // console.log('------childNodes', Array.from(n.childNodes))
                            Array.from(n.childNodes).forEach(function (it) { return fag.append(it); });
                        }
                        else {
                            fag.append(n);
                        }
                        fag.__domrender_this_variable_name = drThis;
                        // console.log('set __domrender_this_variable_name', (fag as any).__domrender_this_variable_name)
                        return [2 /*return*/, fag];
                }
            });
        });
    };
    RawSet.createComponentTargetAttribute = function (name, getThisObj, factory) {
        var targetAttribute = {
            name: name,
            callBack: function (element, attrValue, obj, rawSet) {
                var _a;
                var thisObj = getThisObj(element, attrValue, obj, rawSet);
                var data = factory(element, attrValue, obj, rawSet);
                rawSet.point.thisVariableName = data.__domrender_this_variable_name;
                if (thisObj) {
                    var i = thisObj.__domrender_component_new = ((_a = thisObj.__domrender_component_new) !== null && _a !== void 0 ? _a : new Proxy({}, new Types_1$3.DomRenderFinalProxy()));
                    i.thisVariableName = rawSet.point.thisVariableName;
                    i.rawSet = rawSet;
                    i.innerHTML = element.innerHTML;
                    i.rootCreator = new Proxy(obj, new Types_1$3.DomRenderFinalProxy());
                    i.creator = new Proxy(rawSet.point.thisVariableName ? ScriptUtils_1$1.ScriptUtils.evalReturn(rawSet.point.thisVariableName, obj) : obj, new Types_1$3.DomRenderFinalProxy());
                }
                return data;
            }
        };
        return targetAttribute;
    };
    RawSet.createComponentTargetElement = function (name, objFactory, template, styles) {
        if (template === void 0) { template = ''; }
        if (styles === void 0) { styles = []; }
        var targetElement = {
            name: name,
            styles: styles,
            template: template,
            callBack: function (element, obj, rawSet, attrs, config) {
                var _a, _b, _c, _d, _e, _f, _g;
                return __awaiter$4(this, void 0, void 0, function () {
                    var stylePromises, templatePromise, _h, i_1, it_6, _j, _k, _l, _m, _o, domrenderComponents, componentKey, attribute, renderScript, render, constructor, constructorParam, script, param, instance, i, normalAttrMap, onCreate, createParam, script, applayTemplate, innerHTMLThisRandom, componentName, innerHTMLName, oninit, script, style, data, template_1;
                    return __generator$4(this, function (_p) {
                        switch (_p.label) {
                            case 0:
                                stylePromises = [];
                                if (!(this.template && this.template.startsWith('lazy://'))) return [3 /*break*/, 2];
                                return [4 /*yield*/, fetch(this.template.substring(6))];
                            case 1:
                                _h = (_p.sent()).text();
                                return [3 /*break*/, 3];
                            case 2:
                                _h = Promise.resolve(this.template);
                                _p.label = 3;
                            case 3:
                                templatePromise = (_h);
                                i_1 = 0;
                                _p.label = 4;
                            case 4:
                                if (!(this.styles && i_1 < this.styles.length)) return [3 /*break*/, 9];
                                it_6 = this.styles[i_1];
                                _k = (_j = stylePromises).push;
                                if (!it_6.startsWith('lazy://')) return [3 /*break*/, 6];
                                return [4 /*yield*/, fetch(it_6.substring(6))];
                            case 5:
                                _l = (_p.sent()).text();
                                return [3 /*break*/, 7];
                            case 6:
                                _l = Promise.resolve(it_6);
                                _p.label = 7;
                            case 7:
                                _k.apply(_j, [_l]);
                                _p.label = 8;
                            case 8:
                                i_1++;
                                return [3 /*break*/, 4];
                            case 9:
                                // const templateResponse = await templatePromise;
                                // const styleResponses = await Promise.all(stylePromises);
                                _m = this;
                                return [4 /*yield*/, templatePromise];
                            case 10:
                                // const templateResponse = await templatePromise;
                                // const styleResponses = await Promise.all(stylePromises);
                                _m.template = _p.sent();
                                _o = this;
                                return [4 /*yield*/, Promise.all(stylePromises)];
                            case 11:
                                _o.styles = _p.sent();
                                // console.log('targetsub-22-', this.styles)
                                // console.log('targetsub-222-', this.template, this.styles)
                                // Promise.all(promises).then([])
                                // console.log('callback------->', element)
                                if (!obj.__domrender_components) {
                                    obj.__domrender_components = {};
                                }
                                domrenderComponents = obj.__domrender_components;
                                componentKey = rawSet.uuid;
                                attribute = DomUtils_1.DomUtils.getAttributeToObject(element);
                                renderScript = 'var $component = this.__render.component; var $element = this.__render.element; var $router = this.__render.router; var $innerHTML = this.__render.innerHTML; var $attribute = this.__render.attribute; var $creatorMetaData = this.__render.creatorMetaData;';
                                render = Object.freeze({
                                    renderScript: renderScript,
                                    element: element,
                                    innerHTML: element.innerHTML,
                                    attribute: attribute,
                                    rawset: rawSet,
                                    router: config.router,
                                    componentKey: componentKey,
                                    scripts: EventManager_1$2.EventManager.setBindProperty((_a = config.scripts) !== null && _a !== void 0 ? _a : {}, obj)
                                    // eslint-disable-next-line no-use-before-define
                                });
                                constructor = element.getAttribute(RawSet.DR_ON_CONSTRUCTOR_ARGUMENTS_OPTIONNAME);
                                constructorParam = [];
                                // dr-constructor
                                if (constructor) {
                                    script = "".concat(renderScript, " return ").concat(constructor, " ");
                                    param = (_b = ScriptUtils_1$1.ScriptUtils.eval(script, Object.assign(obj, { __render: render }))) !== null && _b !== void 0 ? _b : [];
                                    if (!Array.isArray(param)) {
                                        param = [param];
                                    }
                                    constructorParam = param;
                                }
                                // console.log('------22', attrs);
                                domrenderComponents[componentKey] = objFactory(element, obj, rawSet, constructorParam);
                                instance = domrenderComponents[componentKey];
                                i = instance.__domrender_component_new = ((_c = instance.__domrender_component_new) !== null && _c !== void 0 ? _c : new Proxy({}, new Types_1$3.DomRenderFinalProxy()));
                                i.thisVariableName = rawSet.point.thisVariableName;
                                i.thisFullVariableName = "this.__domrender_components.".concat(componentKey);
                                i.componentKey = componentKey;
                                i.rawSet = rawSet;
                                i.attribute = attribute;
                                i.router = config.router;
                                i.scripts = render.scripts;
                                i.drAttrs = attrs;
                                i.innerHTML = element.innerHTML;
                                i.rootCreator = new Proxy(obj, new Types_1$3.DomRenderFinalProxy());
                                i.creator = new Proxy(rawSet.point.thisVariableName ? ScriptUtils_1$1.ScriptUtils.evalReturn(rawSet.point.thisVariableName, obj) : obj, new Types_1$3.DomRenderFinalProxy());
                                this.__creatorMetaData = i;
                                render = __assign$1({ component: instance, creatorMetaData: i }, render);
                                normalAttrMap = element.getAttribute(EventManager_1$2.EventManager.normalAttrMapAttrName);
                                if (instance.onChangeAttrRender && normalAttrMap) {
                                    new Map(JSON.parse(normalAttrMap)).forEach(function (value, key) {
                                        var script = "".concat(renderScript, " return ").concat(value, " ");
                                        var cval = ScriptUtils_1$1.ScriptUtils.eval(script, Object.assign(obj, { __render: render }));
                                        // element.setAttribute(key, cval);
                                        instance.onChangeAttrRender(key, cval);
                                    });
                                }
                                onCreate = element.getAttribute(RawSet.DR_ON_CREATE_ARGUMENTS_OPTIONNAME);
                                this.__render = render;
                                createParam = [];
                                if (onCreate) {
                                    script = "".concat(renderScript, " return ").concat(onCreate, " ");
                                    createParam = ScriptUtils_1$1.ScriptUtils.eval(script, Object.assign(obj, { __render: render }));
                                    if (!Array.isArray(createParam)) {
                                        createParam = [createParam];
                                    }
                                }
                                (_d = instance === null || instance === void 0 ? void 0 : instance.onCreateRender) === null || _d === void 0 ? void 0 : _d.call.apply(_d, __spreadArray$8([instance], createParam, false));
                                applayTemplate = element.innerHTML;
                                componentName = (_e = element.getAttribute(RawSet.DR_COMPONENT_NAME_OPTIONNAME)) !== null && _e !== void 0 ? _e : 'component';
                                innerHTMLName = (_f = element.getAttribute(RawSet.DR_COMPONENT_INNER_HTML_NAME_OPTIONNAME)) !== null && _f !== void 0 ? _f : 'innerHTML';
                                if (applayTemplate) {
                                    // if (rawSet.point.thisVariableName) {
                                    // 넘어온 innerHTML에 this가 있으면 해당안되게 우선 치환.
                                    innerHTMLThisRandom = RandomUtils_1.RandomUtils.uuid();
                                    applayTemplate = applayTemplate.replace(/this\./g, innerHTMLThisRandom);
                                    // }
                                    applayTemplate = applayTemplate.replace(RegExp("#".concat(componentName, "#"), 'g'), 'this');
                                }
                                // applayTemplate = template.replace(RegExp(`#${innerHTMLName}#`, 'g'), applayTemplate);
                                applayTemplate = ((_g = this.template) !== null && _g !== void 0 ? _g : '').replace(RegExp("#".concat(innerHTMLName, "#"), 'g'), applayTemplate);
                                oninit = element.getAttribute(RawSet.DR_ON_CREATED_CALLBACK_OPTIONNAME);
                                if (oninit) {
                                    script = "".concat(renderScript, "  ").concat(oninit, " ");
                                    ScriptUtils_1$1.ScriptUtils.eval(script, Object.assign(obj, {
                                        __render: render
                                    }));
                                }
                                style = RawSet.generateStyleTransform(this.styles, componentKey, true);
                                element.innerHTML = style + (applayTemplate !== null && applayTemplate !== void 0 ? applayTemplate : '');
                                return [4 /*yield*/, RawSet.drThisCreate(rawSet, element, "this.__domrender_components.".concat(componentKey), '', true, obj, config)];
                            case 12:
                                data = _p.sent();
                                // 넘어온 innerHTML에 this가 있는걸 다시 복호화해서 제대로 작동하도록한다.
                                if (innerHTMLThisRandom) {
                                    template_1 = config.window.document.createElement('template');
                                    template_1.content.append(data);
                                    template_1.innerHTML = template_1.innerHTML.replace(RegExp(innerHTMLThisRandom, 'g'), 'this.');
                                    data = template_1.content;
                                }
                                data.render = render;
                                return [2 /*return*/, data];
                        }
                    });
                });
            }
            // complete
        };
        return targetElement;
    };
    RawSet.isExporesion = function (data) {
        var reg = /(?:[$#]\{(?:(([$#]\{)??[^$#]?[^{]*?)\}[$#]))/g;
        return reg.test(data !== null && data !== void 0 ? data : '');
    };
    RawSet.exporesionGrouops = function (data) {
        // const reg = /(?:[$#]\{(?:(([$#]\{)??[^$#]*?)\}[$#]))/g;
        var reg = /(?:[$#]\{(?:(([$#]\{)??[^$#]?[^{]*?)\}[$#]))/g;
        return StringUtils_1.StringUtils.regexExec(reg, data !== null && data !== void 0 ? data : '');
    };
    // public static metaStart(id: string) {
    //     return `<meta id='${id}-start' />`;
    // }
    //
    // public static metaEnd(id: string) {
    //     return `<meta id='${id}-end' />`;
    // }
    RawSet.destroy = function (obj, parameter, config, destroyOptions) {
        var _a;
        if (destroyOptions === void 0) { destroyOptions = []; }
        if (!destroyOptions.some(function (it) { return it === DestroyOptionType_1.DestroyOptionType.NO_DESTROY; })) {
            if (!destroyOptions.some(function (it) { return it === DestroyOptionType_1.DestroyOptionType.NO_MESSENGER_DESTROY; })) {
                if (config.messenger && obj) {
                    config.messenger.deleteChannelFromObj(obj);
                }
            }
            if (obj) {
                (_a = obj.onDestroyRender) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray$8([obj], parameter, false));
            }
        }
    };
    RawSet.DR_NAME = 'dr';
    RawSet.DR_IF_NAME = 'dr-if';
    RawSet.DR_FOR_NAME = 'dr-for';
    RawSet.DR_FOR_OF_NAME = 'dr-for-of';
    RawSet.DR_REPEAT_NAME = 'dr-repeat';
    RawSet.DR_THIS_NAME = 'dr-this';
    RawSet.DR_FORM_NAME = 'dr-form';
    RawSet.DR_PRE_NAME = 'dr-pre';
    RawSet.DR_APPENDER_NAME = 'dr-appender';
    RawSet.DR_INNERHTML_NAME = 'dr-inner-html';
    RawSet.DR_INNERTEXT_NAME = 'dr-inner-text';
    RawSet.DR_DETECT_NAME = 'dr-detect';
    RawSet.DR_IT_OPTIONNAME = 'dr-it';
    RawSet.DR_VAR_OPTIONNAME = 'dr-var';
    RawSet.DR_AFTER_OPTIONNAME = 'dr-after';
    RawSet.DR_NEXT_OPTIONNAME = 'dr-next';
    RawSet.DR_BEFORE_OPTIONNAME = 'dr-before';
    RawSet.DR_COMPLETE_OPTIONNAME = 'dr-complete';
    RawSet.DR_STRIP_OPTIONNAME = 'dr-strip';
    RawSet.DR_DESTROY_OPTIONNAME = 'dr-destroy';
    RawSet.DR_COMPONENT_NAME_OPTIONNAME = 'dr-component-name';
    RawSet.DR_COMPONENT_INNER_HTML_NAME_OPTIONNAME = 'dr-component-inner-html-name';
    RawSet.DR_ON_CREATE_ARGUMENTS_OPTIONNAME = 'dr-on-create:arguments';
    RawSet.DR_ON_CREATED_CALLBACK_OPTIONNAME = 'dr-on-create:callback';
    RawSet.DR_ON_INIT_ARGUMENTS_OPTIONNAME = 'dr-on-init:arguments';
    RawSet.DR_ON_CONSTRUCTOR_ARGUMENTS_OPTIONNAME = 'dr-on-constructor:arguments';
    RawSet.drAttrsOriginName = {
        dr: RawSet.DR_NAME,
        drIf: RawSet.DR_IF_NAME,
        drFor: RawSet.DR_FOR_NAME,
        drForOf: RawSet.DR_FOR_OF_NAME,
        drAppender: RawSet.DR_APPENDER_NAME,
        drRepeat: RawSet.DR_REPEAT_NAME,
        drThis: RawSet.DR_THIS_NAME,
        drForm: RawSet.DR_FORM_NAME,
        drPre: RawSet.DR_PRE_NAME,
        drInnerHTML: RawSet.DR_INNERHTML_NAME,
        drInnerText: RawSet.DR_INNERTEXT_NAME,
        drItOption: RawSet.DR_IT_OPTIONNAME,
        drVarOption: RawSet.DR_VAR_OPTIONNAME,
        drAfterOption: RawSet.DR_AFTER_OPTIONNAME,
        drNextOption: RawSet.DR_NEXT_OPTIONNAME,
        drBeforeOption: RawSet.DR_BEFORE_OPTIONNAME,
        drCompleteOption: RawSet.DR_COMPLETE_OPTIONNAME,
        drStripOption: RawSet.DR_STRIP_OPTIONNAME,
        drDestroyOption: RawSet.DR_DESTROY_OPTIONNAME
    };
    RawSet.DR_TAGS = [];
    RawSet.DR_ATTRIBUTES = [RawSet.DR_NAME, RawSet.DR_APPENDER_NAME, RawSet.DR_IF_NAME, RawSet.DR_FOR_OF_NAME, RawSet.DR_FOR_NAME, RawSet.DR_THIS_NAME, RawSet.DR_FORM_NAME, RawSet.DR_PRE_NAME, RawSet.DR_INNERHTML_NAME, RawSet.DR_INNERTEXT_NAME, RawSet.DR_REPEAT_NAME, RawSet.DR_DETECT_NAME];
    return RawSet;
}());
RawSet$1.RawSet = RawSet;

var __awaiter$3 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$3 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray$7 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(DomRenderProxy$1, "__esModule", { value: true });
DomRenderProxy$1.DomRenderProxy = void 0;
var RawSet_1$2 = RawSet$1;
var EventManager_1$1 = EventManager$1;
var ScriptUtils_1 = ScriptUtils$1;
var Types_1$2 = Types;
var RawSetType_1$1 = RawSetType;
var excludeGetSetPropertys = ['onBeforeReturnGet', 'onBeforeReturnSet', '__domrender_components', '__render', '_DomRender_isFinal', '_domRender_ref', '_rawSets', '_domRender_proxy', '_targets', '_DomRender_origin', '_DomRender_ref', '_DomRender_proxy'];
var DomRenderProxy = /** @class */ (function () {
    function DomRenderProxy(_domRender_origin, target, config) {
        this._domRender_origin = _domRender_origin;
        this.config = config;
        this._domRender_ref = new Map();
        this._rawSets = new Map();
        this._targets = new Set();
        if (target) {
            this._targets.add(target);
        }
    }
    DomRenderProxy.unFinal = function (obj) {
        return Types_1$2.DomRenderFinalProxy.unFinal(obj);
    };
    DomRenderProxy.final = function (obj) {
        return Types_1$2.DomRenderFinalProxy.final(obj);
    };
    DomRenderProxy.isFinal = function (obj) {
        return Types_1$2.DomRenderFinalProxy.isFinal(obj);
    };
    DomRenderProxy.prototype.run = function (objProxy) {
        var _this = this;
        var _a, _b;
        this._domRender_proxy = objProxy;
        (_b = (_a = objProxy) === null || _a === void 0 ? void 0 : _a.onProxyDomRender) === null || _b === void 0 ? void 0 : _b.call(_a, this.config);
        var obj = objProxy._DomRender_origin;
        if (obj) {
            Object.keys(obj).forEach(function (it) {
                var _a, _b;
                // console.log('key-------->', it)
                var target = obj[it];
                if (target !== undefined && target !== null && typeof target === 'object' && !DomRenderProxy.isFinal(target) && !Object.isFrozen(target) && !(obj instanceof Types_1$2.Shield)) {
                    // console.log('target-------->', it, target);
                    // console.count('target')
                    // console.log('target-------->')
                    var filter = (_b = (_a = _this.config.proxyExcludeTyps) === null || _a === void 0 ? void 0 : _a.filter(function (it) { return target instanceof it; })) !== null && _b !== void 0 ? _b : [];
                    if (filter.length === 0) {
                        // console.log('--------', objProxy, target, it)
                        var proxyAfter = _this.proxy(objProxy, target, it);
                        obj[it] = proxyAfter;
                    }
                }
            });
        }
        this._targets.forEach(function (target) {
            _this.initRender(target);
        });
    };
    DomRenderProxy.prototype.initRender = function (target) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var onCreate = (_b = (_a = target).getAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, RawSet_1$2.RawSet.DR_ON_CREATE_ARGUMENTS_OPTIONNAME);
        var createParam = [];
        if (onCreate) {
            createParam = ScriptUtils_1.ScriptUtils.evalReturn(onCreate, this._domRender_proxy);
            if (!Array.isArray(createParam)) {
                createParam = [createParam];
            }
        }
        (_d = (_c = this._domRender_proxy) === null || _c === void 0 ? void 0 : _c.onCreateRender) === null || _d === void 0 ? void 0 : _d.call.apply(_d, __spreadArray$7([_c], createParam, false));
        (_e = target.innerHTML) !== null && _e !== void 0 ? _e : '';
        this._targets.add(target);
        var rawSets = RawSet_1$2.RawSet.checkPointCreates(target, this._domRender_proxy, this.config);
        // console.log('initRender -------rawSet', rawSets)
        // 중요 초기에 한번 튕겨줘야함.
        EventManager_1$1.eventManager.applyEvent(this._domRender_proxy, EventManager_1$1.eventManager.findAttrElements(target, this.config), this.config);
        rawSets.forEach(function (it) {
            var variables = it.getUsingTriggerVariables(_this.config);
            if (variables.size <= 0) {
                _this.addRawSet('', it);
            }
            else {
                variables.forEach(function (sit) {
                    _this.addRawSet(sit, it);
                });
            }
        });
        this.render(this.getRawSets());
        // const render = {target} as Render;
        // const creatorMetaData = {
        //     creator: this._domRender_proxy,
        //     rootCreator: this._domRender_proxy,
        //     innerHTML
        // } as CreatorMetaData;
        (_g = (_f = target).getAttribute) === null || _g === void 0 ? void 0 : _g.call(_f, RawSet_1$2.RawSet.DR_ON_INIT_ARGUMENTS_OPTIONNAME);
        var initParam = [];
        if (onCreate) {
            initParam = ScriptUtils_1.ScriptUtils.evalReturn(onCreate, this._domRender_proxy);
            if (!Array.isArray(initParam)) {
                initParam = [initParam];
            }
        }
        (_j = (_h = this._domRender_proxy) === null || _h === void 0 ? void 0 : _h.onInitRender) === null || _j === void 0 ? void 0 : _j.call.apply(_j, __spreadArray$7([_h], initParam, false));
    };
    DomRenderProxy.prototype.getRawSets = function () {
        var set = new Set();
        this._rawSets.forEach(function (v, k) {
            v.forEach(function (it) { return set.add(it); });
        });
        return Array.from(set);
    };
    // 중요 important
    DomRenderProxy.prototype.render = function (raws, fullPathStr) {
        var _a, _b, _c;
        return __awaiter$3(this, void 0, void 0, function () {
            var iter, removeRawSets, rawSets, _loop_1, this_1, _i, rawSets_1, it_1;
            var _this = this;
            return __generator$3(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (typeof raws === 'string') {
                            iter = this._rawSets.get(raws);
                            if (iter) {
                                raws = Array.from(iter);
                            }
                            else {
                                raws = undefined;
                            }
                        }
                        removeRawSets = [];
                        rawSets = raws !== null && raws !== void 0 ? raws : this.getRawSets();
                        _loop_1 = function (it_1) {
                            var targetAttrMap, rawSets_2;
                            return __generator$3(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        it_1.getUsingTriggerVariables(this_1.config).forEach(function (path) { return _this.addRawSet(path, it_1); });
                                        if (!it_1.isConnected) return [3 /*break*/, 5];
                                        targetAttrMap = (_b = (_a = it_1.point.node) === null || _a === void 0 ? void 0 : _a.getAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, EventManager_1$1.EventManager.normalAttrMapAttrName);
                                        if (!((_c = it_1.detect) === null || _c === void 0 ? void 0 : _c.action)) return [3 /*break*/, 1];
                                        it_1.detect.action();
                                        return [3 /*break*/, 4];
                                    case 1:
                                        if (!(it_1.type === RawSetType_1$1.RawSetType.TARGET_ELEMENT && it_1.data && fullPathStr && targetAttrMap && it_1.fragment.render)) return [3 /*break*/, 2];
                                        new Map(JSON.parse(targetAttrMap)).forEach(function (v, k) {
                                            var _a;
                                            // it?.data.onChangeAttrRender(k, null, v);
                                            var isUsing = EventManager_1$1.EventManager.isUsingThisVar(v, "this.".concat(fullPathStr));
                                            if (isUsing) {
                                                var render = it_1.fragment.render;
                                                // console.log('render-->', (it.fragment as any).render)
                                                var script = "".concat(render.renderScript, " return ").concat(v, " ");
                                                var cval = ScriptUtils_1.ScriptUtils.eval(script, Object.assign((_a = _this._domRender_proxy) !== null && _a !== void 0 ? _a : {}, { __render: render }));
                                                it_1.data.onChangeAttrRender(k, cval);
                                            }
                                            // console.log('---?', v, fullPathStr, isUsing);
                                        });
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, it_1.render(this_1._domRender_proxy, this_1.config)];
                                    case 3:
                                        rawSets_2 = _e.sent();
                                        // 그외 자식들 render
                                        if (rawSets_2 && rawSets_2.length > 0) {
                                            this_1.render(rawSets_2);
                                        }
                                        _e.label = 4;
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        removeRawSets.push(it_1);
                                        _e.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, rawSets_1 = rawSets;
                        _d.label = 1;
                    case 1:
                        if (!(_i < rawSets_1.length)) return [3 /*break*/, 4];
                        it_1 = rawSets_1[_i];
                        return [5 /*yield**/, _loop_1(it_1)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (removeRawSets.length > 0) {
                            this.removeRawSet.apply(this, removeRawSets);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DomRenderProxy.prototype.root = function (paths, value, lastDoneExecute) {
        var _this = this;
        if (lastDoneExecute === void 0) { lastDoneExecute = true; }
        // console.log('root--->', paths, value, this._domRender_ref, this._domRender_origin);
        var fullPaths = [];
        if (this._domRender_ref.size > 0) {
            this._domRender_ref.forEach(function (it, key) {
                if ('_DomRender_isProxy' in key) {
                    it.forEach(function (sit) {
                        var _a;
                        try {
                            var items = (_a = key._DomRender_proxy) === null || _a === void 0 ? void 0 : _a.root(paths.concat(sit), value, lastDoneExecute);
                            fullPaths.push(items.join(','));
                        }
                        catch (e) {
                            // 오브젝트들 없어졌을수도있다 Destroy시점에서 오류나는경우가 있다. 따라서 참조 하는부분 없어져야한다.
                            // console.error(e)
                            // it.delete(sit);
                        }
                    });
                }
            });
        }
        else {
            var strings = paths.reverse();
            // array같은경우도 키값으로 접근하기때문에 특정 인덱스를 찾아서 그부분만 바꿔줄수 있다.
            var fullPathStr_1 = strings.map(function (it) { return isNaN(Number(it)) ? '.' + it : "[".concat(it, "]"); }).join('').slice(1);
            if (lastDoneExecute) {
                var iterable = this._rawSets.get(fullPathStr_1);
                // console.log('----->', iterable);
                // array check
                var front = strings.slice(0, strings.length - 1).map(function (it) { return isNaN(Number(it)) ? '.' + it : "[".concat(it, "]"); }).join('');
                var last = strings[strings.length - 1];
                var data = ScriptUtils_1.ScriptUtils.evalReturn('this' + front, this._domRender_proxy);
                if (last === 'length' && Array.isArray(data)) {
                    var aIterable = this._rawSets.get(front.slice(1));
                    if (aIterable) {
                        this.render(Array.from(aIterable));
                    }
                }
                else if (iterable) {
                    this.render(Array.from(iterable), fullPathStr_1);
                }
                this._targets.forEach(function (it) {
                    // console.log('target------->,', it)
                    // return;
                    if (it.nodeType === Node.DOCUMENT_FRAGMENT_NODE || it.nodeType === Node.ELEMENT_NODE) {
                        var targets = EventManager_1$1.eventManager.findAttrElements(it, _this.config);
                        // console.log('------>', targets);
                        EventManager_1$1.eventManager.changeVar(_this._domRender_proxy, targets, "this.".concat(fullPathStr_1), _this.config);
                    }
                });
            }
            fullPaths.push(fullPathStr_1);
        }
        return fullPaths;
    };
    DomRenderProxy.prototype.set = function (target, p, value, receiver) {
        var _a, _b, _c;
        if (typeof p === 'string' && p !== '__domrender_components' && excludeGetSetPropertys.includes(p)) {
            target[p] = value;
            return true;
        }
        // console.log('set proxy-->', target, p, value, this._rawSets, this._domRender_ref);
        // if (typeof p === 'string' && '__render' === p) {
        //     (target as any)[p] = value;
        //     return true;
        // }
        // console.log('set--?', p, target, value);
        if (typeof p === 'string') {
            value = this.proxy(receiver, value, p);
        }
        target[p] = value;
        var fullPath;
        if (typeof p === 'string') {
            fullPath = this.root([p], value);
        }
        // console.log('full path:', fullPath);
        if (('onBeforeReturnSet' in receiver) && typeof p === 'string' && !((_a = this.config.proxyExcludeOnBeforeReturnSets) !== null && _a !== void 0 ? _a : []).concat(excludeGetSetPropertys).includes(p)) {
            (_c = (_b = receiver) === null || _b === void 0 ? void 0 : _b.onBeforeReturnSet) === null || _c === void 0 ? void 0 : _c.call(_b, p, value, fullPath);
        }
        return true;
    };
    DomRenderProxy.prototype.get = function (target, p, receiver) {
        var _a, _b, _c;
        // console.log('get-->', target, p, receiver);
        if (p === '_DomRender_origin') {
            return this._domRender_origin;
        }
        else if (p === '_DomRender_ref') {
            return this._domRender_ref;
        }
        else if (p === '_DomRender_proxy') {
            return this;
        }
        else {
            // Date라던지 이런놈들은-_-프록시가 이상하게 동작해서
            // console.log('--->', p, target, target.bind, 'bind' in target)
            // if ((p in target) && ('bind' in target)) {
            //     try{
            //     return (target as any)[p].bind(target);
            //     }catch (e) {
            //         console.error(e)
            //     }
            // } else {
            //     return (target as any)[p]
            // }
            // return (p in target) ? (target as any)[p].bind(target) : (target as any)[p]
            // console.log('-->', p, Object.prototype.toString.call((target as any)[p]), (target as any)[p])
            // return (target as any)[p]
            var it_2 = target[p];
            if (it_2 && typeof it_2 === 'object' && ('_DomRender_isProxy' in it_2) && Object.prototype.toString.call(it_2._DomRender_origin) === '[object Date]') {
                it_2 = it_2._DomRender_origin;
            }
            if (('onBeforeReturnGet' in receiver) && typeof p === 'string' && !((_a = this.config.proxyExcludeOnBeforeReturnGets) !== null && _a !== void 0 ? _a : []).concat(excludeGetSetPropertys).includes(p)) {
                (_c = (_b = receiver) === null || _b === void 0 ? void 0 : _b.onBeforeReturnGet) === null || _c === void 0 ? void 0 : _c.call(_b, p, it_2, this.root([p], it_2, false));
            }
            return it_2;
        }
    };
    DomRenderProxy.prototype.has = function (target, p) {
        return p === '_DomRender_isProxy' || p in target;
    };
    DomRenderProxy.prototype.proxy = function (parentProxy, obj, p) {
        var _a, _b;
        var proxyTarget = ((_b = (_a = this.config.proxyExcludeTyps) === null || _a === void 0 ? void 0 : _a.filter(function (it) { return obj instanceof it; })) !== null && _b !== void 0 ? _b : []).length <= 0;
        if (proxyTarget && obj !== undefined && obj !== null && typeof obj === 'object' && !('_DomRender_isProxy' in obj) && !DomRenderProxy.isFinal(obj) && !Object.isFrozen(obj) && !(obj instanceof Types_1$2.Shield)) {
            var domRender = new DomRenderProxy(obj, undefined, this.config);
            domRender.addRef(parentProxy, p);
            var proxy = new Proxy(obj, domRender);
            domRender.run(proxy);
            return proxy;
        }
        if (proxyTarget && obj !== undefined && obj !== null && typeof obj === 'object' && ('_DomRender_isProxy' in obj) && !DomRenderProxy.isFinal(obj) && !Object.isFrozen(obj) && !(obj instanceof Types_1$2.Shield)) {
            var d = obj._DomRender_proxy;
            d.addRef(this._domRender_proxy, p);
            return obj;
        }
        else {
            return obj;
        }
    };
    DomRenderProxy.prototype.addRef = function (parent, path) {
        var _a;
        if (!this._domRender_ref.get(parent)) {
            this._domRender_ref.set(parent, new Set());
        }
        (_a = this._domRender_ref.get(parent)) === null || _a === void 0 ? void 0 : _a.add(path);
    };
    DomRenderProxy.prototype.addRawSetAndRender = function (path, rawSet) {
        this.addRawSet(path, rawSet);
        this.render([rawSet]);
    };
    DomRenderProxy.prototype.addRawSet = function (path, rawSet) {
        var _a;
        // console.log('addRawSet--> path:', path, 'rawSet:', rawSet)
        if (!this._rawSets.get(path)) {
            this._rawSets.set(path, new Set());
        }
        (_a = this._rawSets.get(path)) === null || _a === void 0 ? void 0 : _a.add(rawSet);
    };
    // public removeRawSet(...raws: RawSet[]) {
    //     this._rawSets.forEach(it => {
    //         raws.forEach(sit => it.delete(sit));
    //     })
    //     this.garbageRawSet();
    // }
    DomRenderProxy.prototype.removeRawSet = function () {
        var raws = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            raws[_i] = arguments[_i];
        }
        this._rawSets.forEach(function (it) {
            it.forEach(function (sit) {
                if (!sit.isConnected) {
                    it.delete(sit);
                }
                else if (raws.includes(sit)) {
                    it.delete(sit);
                }
            });
        });
        this.targetGarbageRawSet();
    };
    DomRenderProxy.prototype.targetGarbageRawSet = function () {
        var _this = this;
        this._targets.forEach(function (it) {
            if (!it.isConnected) {
                _this._targets.delete(it);
            }
        });
    };
    DomRenderProxy.prototype.garbageRawSet = function () {
        var _this = this;
        this._targets.forEach(function (it) {
            if (!it.isConnected) {
                _this._targets.delete(it);
            }
        });
        this._rawSets.forEach(function (it) {
            it.forEach(function (sit) {
                if (!sit.isConnected) {
                    it.delete(sit);
                }
            });
        });
    };
    return DomRenderProxy;
}());
DomRenderProxy$1.DomRenderProxy = DomRenderProxy;

var PathRouter$1 = {};

var Router$2 = {};

var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(Router$2, "__esModule", { value: true });
Router$2.Router = void 0;
var EventManager_1 = EventManager$1;
var Router$1 = /** @class */ (function () {
    function Router(rootObj, window) {
        this.rootObj = rootObj;
        this.window = window;
        this.attachCallbacks = new Set();
        this.go(this.getUrl());
    }
    Router.prototype.addAttachCallback = function (callback) {
        this.attachCallbacks.add(callback);
    };
    Router.prototype.attach = function () {
        var _this = this;
        var proxy = this.rootObj._DomRender_proxy;
        if (proxy) {
            var key = "___".concat(EventManager_1.EventManager.ROUTER_VARNAME);
            proxy.render(key);
        }
        this.attachCallbacks.forEach(function (it) {
            it(_this.getRouteData());
        });
    };
    Router.prototype.testRegexp = function (regexp) {
        var b = RegExp(regexp).test(this.getPath());
        return b;
    };
    Router.prototype.getRouteData = function (urlExpression) {
        var newVar = {
            path: this.getPath(),
            url: this.getUrl(),
            searchParams: this.getSearchParams()
        };
        var data = this.getData();
        if (data) {
            newVar.data = data;
        }
        if (urlExpression) {
            var data_1 = this.getPathData(urlExpression);
            if (data_1) {
                newVar.pathData = data_1;
            }
        }
        return Object.freeze(newVar);
    };
    // eslint-disable-next-line no-dupe-class-members
    Router.prototype.go = function (path, urlExpressionOrData, dataOrTitle, title) {
        // console.log('go-->', path, urlExpressionOrData, dataOrTitle, title);
        if (typeof urlExpressionOrData === 'string') {
            var pathData = this.getPathData(urlExpressionOrData, path);
            if (pathData) {
                dataOrTitle = dataOrTitle !== null && dataOrTitle !== void 0 ? dataOrTitle : {};
                dataOrTitle = __assign(__assign({}, dataOrTitle), pathData);
            }
            this.set(path, dataOrTitle, title !== null && title !== void 0 ? title : '');
        }
        else {
            this.set(path, urlExpressionOrData, dataOrTitle !== null && dataOrTitle !== void 0 ? dataOrTitle : '');
        }
        this.attach();
        this.dispatchPopStateEvent();
    };
    Router.prototype.pushState = function (data, title, path) {
        this.window.history.pushState(data, title, path);
    };
    Router.prototype.dispatchPopStateEvent = function () {
        this.window.dispatchEvent(new Event('popstate'));
    };
    Router.prototype.reload = function () {
        this.window.dispatchEvent(new Event('popstate'));
    };
    Router.prototype.getPathData = function (urlExpression, currentUrl) {
        // console.log('getPathData-->', urlExpression, currentUrl);
        // const regexps = StringUtils.regexExec(/(\{(?:\{??[^{]*?\}))/g, urlExpression);
        // const regexpMap = new Map<string, string>()
        // regexps.forEach((item, idx) => {
        //     const key = `{${idx}}`;
        //     const value = item[0];
        //     urlExpression = urlExpression.replace(value, key)
        //     regexpMap.set(key, value)
        // })
        if (currentUrl === void 0) { currentUrl = this.getPath(); }
        var urls = currentUrl.split('?')[0].split('/');
        var urlExpressions = urlExpression.split('/');
        if (urls.length !== urlExpressions.length) {
            return;
        }
        var data = {};
        for (var i = 0; i < urlExpressions.length; i++) {
            var it_1 = urlExpressions[i];
            // it = regexpMap.get(it) ?? it;
            var urlit = urls[i];
            // ex) {serialNo:[0-9]+} or {no}  ..
            var execResult = /^\{(.+)\}$/g.exec(it_1);
            if (!execResult) {
                if (it_1 !== urlit) {
                    return;
                }
                continue;
            }
            // regex check
            var _a = execResult[1].split(':'), name_1 = _a[0], regex = _a[1]; // group1
            var regExp = RegExp(regex);
            if (regex && !regExp.test(urlit)) {
                return;
            }
            data[name_1] = urlit;
        }
        return data;
    };
    return Router;
}());
Router$2.Router = Router$1;

var __extends$6 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(PathRouter$1, "__esModule", { value: true });
PathRouter$1.PathRouter = void 0;
var Router_1$2 = Router$2;
var PathRouter = /** @class */ (function (_super) {
    __extends$6(PathRouter, _super);
    function PathRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PathRouter.prototype.test = function (urlExpression) {
        if (this.getPathData(urlExpression)) {
            return true;
        }
        else {
            return false;
        }
    };
    PathRouter.prototype.getData = function () {
        return this.window.history.state;
    };
    PathRouter.prototype.getSearchParams = function () {
        return (new URL(this.window.document.location.href)).searchParams;
    };
    PathRouter.prototype.set = function (path, data, title) {
        if (title === void 0) { title = ''; }
        _super.prototype.pushState.call(this, data, title, path);
    };
    PathRouter.prototype.getUrl = function () {
        var url = new URL(this.window.document.location.href);
        return url.pathname + url.search;
    };
    PathRouter.prototype.getPath = function () {
        return this.window.location.pathname;
    };
    return PathRouter;
}(Router_1$2.Router));
PathRouter$1.PathRouter = PathRouter;

var HashRouter$1 = {};

var LocationUtils$1 = {};

Object.defineProperty(LocationUtils$1, "__esModule", { value: true });
LocationUtils$1.LocationUtils = void 0;
var LocationUtils = /** @class */ (function () {
    function LocationUtils() {
    }
    LocationUtils.hash = function (window) {
        return window.location.hash.replace('#', '');
    };
    LocationUtils.hashPath = function (window) {
        return window.location.hash.replace('#', '').split('?')[0];
    };
    LocationUtils.hashSearch = function (window) {
        return window.location.hash.replace('#', '').split('?')[1];
    };
    LocationUtils.hashQueryParams = function (window) {
        var s = window.location.hash.replace('#', '').split('?')[1] || '';
        return this.queryStringToMap(s);
    };
    LocationUtils.path = function (window) {
        return window.location.pathname;
    };
    LocationUtils.pathQueryParamsObject = function (window) {
        return this.queryStringToObject(window.location.search.substring(1));
    };
    LocationUtils.hashQueryParamsObject = function (window) {
        var _a;
        var s = (_a = window.location.hash.split('?').pop()) !== null && _a !== void 0 ? _a : '';
        if (s.startsWith('#')) {
            return {};
        }
        else {
            return this.queryStringToObject(s);
        }
    };
    LocationUtils.pathQueryParams = function (window) {
        return this.queryStringToMap(window.location.search.substring(1));
    };
    LocationUtils.queryStringToMap = function (s) {
        var params = new Map();
        var vars = s.split('&') || [];
        vars.forEach(function (it) {
            var kv = it.split('=') || [];
            if (kv[0] && kv[0].length > 0) {
                params.set(kv[0], kv[1]);
            }
        });
        return params;
    };
    LocationUtils.queryStringToObject = function (s) {
        var params = {};
        var vars = s.split('&') || [];
        vars.forEach(function (it) {
            var kv = it.split('=') || [];
            if (kv[0] && kv[0].length > 0) {
                params[kv[0]] = kv[1];
            }
        });
        return params;
    };
    return LocationUtils;
}());
LocationUtils$1.LocationUtils = LocationUtils;

var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(HashRouter$1, "__esModule", { value: true });
HashRouter$1.HashRouter = void 0;
var Router_1$1 = Router$2;
var LocationUtils_1$1 = LocationUtils$1;
var HashRouter = /** @class */ (function (_super) {
    __extends$5(HashRouter, _super);
    function HashRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HashRouter.prototype.test = function (urlExpression) {
        if (this.getPathData(urlExpression)) {
            return true;
        }
        else {
            return false;
        }
    };
    HashRouter.prototype.getData = function () {
        return this.window.history.state;
    };
    HashRouter.prototype.getSearchParams = function () {
        return new URLSearchParams(LocationUtils_1$1.LocationUtils.hashSearch(this.window));
    };
    HashRouter.prototype.set = function (path, data, title) {
        if (title === void 0) { title = ''; }
        path = '#' + path;
        _super.prototype.pushState.call(this, data, title, path);
    };
    HashRouter.prototype.getUrl = function () {
        return LocationUtils_1$1.LocationUtils.hash(this.window) || '/';
    };
    HashRouter.prototype.getPath = function () {
        return LocationUtils_1$1.LocationUtils.hashPath(this.window) || '/';
    };
    return HashRouter;
}(Router_1$1.Router));
HashRouter$1.HashRouter = HashRouter;

var DefaultMessenger$1 = {};

var Messenger$1 = {};

Object.defineProperty(Messenger$1, "__esModule", { value: true });
Messenger$1.Messenger = Messenger$1.Channel = Messenger$1.ChannelSubscriber = Messenger$1.ChannelSubscription = void 0;
var Types_1$1 = Types;
var CallBackType;
(function (CallBackType) {
    CallBackType[CallBackType["FILTER"] = 0] = "FILTER";
    CallBackType[CallBackType["MAP"] = 1] = "MAP";
    CallBackType[CallBackType["SUBSCRIBE"] = 2] = "SUBSCRIBE";
})(CallBackType || (CallBackType = {}));
var ChannelSubscription = /** @class */ (function () {
    function ChannelSubscription(channel, subscriber) {
        this.channel = channel;
        this.subscriber = subscriber;
    }
    ChannelSubscription.prototype.unsubscribe = function () {
        this.subscriber.unsubscribe();
    };
    return ChannelSubscription;
}());
Messenger$1.ChannelSubscription = ChannelSubscription;
var ChannelSubscriber = /** @class */ (function () {
    function ChannelSubscriber(channel) {
        this.channel = channel;
        this.callbacks = [];
    }
    ChannelSubscriber.prototype.exeCallback = function (data, metaData) {
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            if (callback.type === CallBackType.FILTER && !callback.callback(data, metaData)) {
                break;
            }
            else if (callback.type === CallBackType.MAP) {
                data = callback.callback(data, metaData);
            }
            else if (callback.type === CallBackType.SUBSCRIBE) {
                data = callback.callback(data, metaData);
                break;
            }
        }
        return data;
    };
    // chaining point
    ChannelSubscriber.prototype.filter = function (callback) {
        this.callbacks.push({ type: CallBackType.FILTER, callback: callback });
        return this;
    };
    ChannelSubscriber.prototype.map = function (callback) {
        this.callbacks.push({ type: CallBackType.MAP, callback: callback });
        return this;
    };
    ChannelSubscriber.prototype.subscribe = function (callback) {
        this.callbacks.push({ type: CallBackType.SUBSCRIBE, callback: callback });
        this.channel.subscribers.add(this);
        return new ChannelSubscription(this.channel, this);
    };
    ChannelSubscriber.prototype.unsubscribe = function () {
        this.channel.subscribers.delete(this);
    };
    ChannelSubscriber.prototype.deleteSubscriber = function () {
        this.unsubscribe();
        this.channel.subscribers.delete(this);
    };
    return ChannelSubscriber;
}());
Messenger$1.ChannelSubscriber = ChannelSubscriber;
var Channel = /** @class */ (function () {
    function Channel(messenger, obj, key) {
        this.messenger = messenger;
        this.obj = obj;
        this.key = key;
        this.subscribers = new Set();
    }
    Channel.prototype.publish = function (key, data, action) {
        var _this = this;
        var _a;
        var rtns = [];
        (_a = this.messenger.getChannels(key)) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
            try {
                it.subscribers.forEach(function (its) {
                    var rdata = its.exeCallback(data, { channel: _this, action: action });
                    rtns.push({ channel: it, data: rdata });
                });
            }
            catch (e) {
                console.error(e);
            }
        });
        return rtns;
    };
    Channel.prototype.allPublish = function (data, action) {
        var _this = this;
        var rtns = [];
        this.messenger.getAllChannelKeys().forEach(function (it) {
            rtns.push(_this.publish(it, data));
        });
        return rtns.flat();
    };
    // string point
    Channel.prototype.filter = function (filterF) {
        var subscriber = new ChannelSubscriber(this);
        subscriber.filter(filterF);
        return subscriber;
    };
    Channel.prototype.map = function (filterF) {
        var subscriber = new ChannelSubscriber(this);
        subscriber.map(filterF);
        return subscriber;
    };
    Channel.prototype.subscribe = function (subscribeCallback) {
        var subscriber = new ChannelSubscriber(this);
        return subscriber.subscribe(subscribeCallback);
    };
    Channel.prototype.deleteChannel = function () {
        this.messenger.deleteChannel(this);
    };
    return Channel;
}());
Messenger$1.Channel = Channel;
var Messenger = /** @class */ (function () {
    function Messenger(config) {
        var _this = this;
        this.config = config;
        this.channels = new Set();
        this.config.window.addEventListener(Messenger.EVENT_PUBLISH_KEY, function (e) {
            var _a, _b;
            var detail = e.detail;
            // console.log('--->', detail)
            var rtns = [];
            (_a = _this.getChannels(detail.key)) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
                try {
                    it.subscribers.forEach(function (its) {
                        var rdata = its.exeCallback(detail.data, { action: detail.action });
                        rtns.push({ channel: it, data: rdata });
                    });
                }
                catch (e) {
                    console.error(e);
                }
            });
            (_b = detail.result) === null || _b === void 0 ? void 0 : _b.call(detail, rtns);
        });
        this.config.window.addEventListener(Messenger.EVENT_SUBSCRIBE_KEY, function (e) {
            var detail = e.detail;
            // console.log('--->', detail)
            var channel = _this.createChannel(detail.obj, detail.key);
            detail.init(channel, channel.subscribe(detail.subscribe));
        });
    }
    Messenger.publish = function (window, detail) {
        window.dispatchEvent(new CustomEvent(Messenger.EVENT_PUBLISH_KEY, { detail: detail }));
    };
    Messenger.subscribe = function (window, detail) {
        window.dispatchEvent(new CustomEvent(Messenger.EVENT_SUBSCRIBE_KEY, { detail: detail }));
    };
    Messenger.prototype.createChannel = function (obj, key) {
        if (key === void 0) { key = obj.constructor.name; }
        var channel = Types_1$1.DomRenderFinalProxy.final(new Channel(this, obj, key));
        this.channels.add(channel);
        // this.channels.get(key) ? this.channels.get(key)!.push(channel) : this.channels.set(key, [channel]);
        return channel;
    };
    Messenger.prototype.deleteChannel = function (channel) {
        this.channels.delete(channel);
    };
    Messenger.prototype.deleteChannelFromObj = function (obj) {
        var _this = this;
        if (obj) {
            this.channels.forEach(function (it) {
                if (it.obj === obj) {
                    // console.log('dddddddddddd', obj)
                    _this.deleteChannel(it);
                }
            });
        }
    };
    Messenger.prototype.addChannel = function (channel) {
        this.channels.add(channel);
    };
    Messenger.prototype.getChannels = function (key) {
        if (typeof key === 'object') {
            key = key.constructor.name;
        }
        else if (typeof key === 'function') {
            key = key.name;
        }
        return Array.from(this.channels.values()).filter(function (it) { return it.key === key; });
    };
    Messenger.prototype.getAllChannels = function () {
        return Array.from(this.channels.values());
    };
    Messenger.prototype.getAllChannelKeys = function () {
        return Array.from(this.channels.values()).map(function (it) { return it.key; });
    };
    Messenger.EVENT_PUBLISH_KEY = 'domRenderMessenger_publish';
    Messenger.EVENT_SUBSCRIBE_KEY = 'domRenderMessenger_subscribe';
    return Messenger;
}());
Messenger$1.Messenger = Messenger;

var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(DefaultMessenger$1, "__esModule", { value: true });
DefaultMessenger$1.DefaultMessenger = void 0;
var Messenger_1 = Messenger$1;
var DefaultMessenger = /** @class */ (function (_super) {
    __extends$4(DefaultMessenger, _super);
    function DefaultMessenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DefaultMessenger;
}(Messenger_1.Messenger));
DefaultMessenger$1.DefaultMessenger = DefaultMessenger;

var __spreadArray$6 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(DomRender$1, "__esModule", { value: true });
DomRender$1.DomRender = void 0;
var DomRenderProxy_1 = DomRenderProxy$1;
var PathRouter_1 = PathRouter$1;
var HashRouter_1 = HashRouter$1;
var Types_1 = Types;
var RawSet_1$1 = RawSet$1;
var DefaultMessenger_1 = DefaultMessenger$1;
var DomRender = /** @class */ (function () {
    function DomRender() {
    }
    DomRender.run = function (obj, target, oConfig) {
        var _a, _b, _c, _d;
        var robj = obj;
        if ('_DomRender_isProxy' in obj) {
            if (target) {
                obj._DomRender_proxy.initRender(target);
            }
            robj = obj;
            return robj;
        }
        var config = oConfig;
        if (!config) {
            config = { window: window };
        }
        if (config && !config.window) {
            config.window = window;
        }
        config.routerType = config.routerType || 'none';
        config.messenger = Types_1.DomRenderFinalProxy.final((_a = config.messenger) !== null && _a !== void 0 ? _a : new DefaultMessenger_1.DefaultMessenger(config));
        var domRender = new DomRenderProxy_1.DomRenderProxy(obj, target, config);
        var dest = new Proxy(obj, domRender);
        robj = dest;
        if (config.routerType === 'path') {
            config.router = (_b = config.router) !== null && _b !== void 0 ? _b : new PathRouter_1.PathRouter(robj, config.window);
        }
        else if (config.routerType === 'hash') {
            config.router = (_c = config.router) !== null && _c !== void 0 ? _c : new HashRouter_1.HashRouter(robj, config.window);
        }
        else { // default
            config.routerType = 'hash';
            config.router = (_d = config.router) !== null && _d !== void 0 ? _d : new HashRouter_1.HashRouter(robj, config.window);
        }
        domRender.run(robj);
        return robj;
    };
    DomRender.createComponent = function (param) {
        var _a, _b;
        // console.log('===>', typeof param.type, param.type.name, param.type.constructor.name)
        var component = RawSet_1$1.RawSet.createComponentTargetElement((_a = param.tagName) !== null && _a !== void 0 ? _a : (typeof param.type === 'function' ? param.type.name : param.type.constructor.name), function (e, o, r2, counstructorParam) {
            var _a;
            return typeof param.type === 'function' ? new ((_a = param.type).bind.apply(_a, __spreadArray$6([void 0], counstructorParam, false)))() : param.type;
        }, (_b = param.template) !== null && _b !== void 0 ? _b : '', Array.isArray(param.styles) ? param.styles : (param.styles ? [param.styles] : undefined));
        return component;
    };
    DomRender.createAttribute = function (attrName, getThisObj, factory) {
        var targetAttribute = RawSet_1$1.RawSet.createComponentTargetAttribute(attrName, getThisObj, factory);
        return targetAttribute;
    };
    return DomRender;
}());
DomRender$1.DomRender = DomRender;

var SimAtomic$1 = {};

var SimDecorator = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostConstruct = exports.PostConstruct = exports.getSim = exports.Sim = exports.SimMetadataKey = exports.sims = exports.Lifecycle = void 0;

var ReflectUtils_1 = ReflectUtils$1;
var Lifecycle;
(function (Lifecycle) {
    Lifecycle["Singleton"] = "Singleton";
    Lifecycle["Transient"] = "Transient";
})(Lifecycle = exports.Lifecycle || (exports.Lifecycle = {}));
exports.sims = new Map();
exports.SimMetadataKey = Symbol('Sim');
var simProcess = function (config, target) {
    var _a;
    ReflectUtils_1.ReflectUtils.defineMetadata(exports.SimMetadataKey, config, target);
    var adding = function (targetKey, target) {
        var _a;
        if (target === void 0) { target = targetKey; }
        var items = (_a = exports.sims.get(targetKey)) !== null && _a !== void 0 ? _a : new Set();
        items.add(target);
        exports.sims.set(targetKey, items);
    };
    config.scope = (_a = config === null || config === void 0 ? void 0 : config.scope) !== null && _a !== void 0 ? _a : Lifecycle.Singleton;
    if (Array.isArray(config === null || config === void 0 ? void 0 : config.type)) {
        config === null || config === void 0 ? void 0 : config.type.forEach(function (it) {
            adding(it, target);
        });
    }
    else if (config.type) {
        adding(config === null || config === void 0 ? void 0 : config.type, target);
    }
    else {
        adding(target);
    }
};
function Sim(configOrTarget) {
    if (typeof configOrTarget === 'function') {
        simProcess({}, configOrTarget);
    }
    else {
        return function (target) {
            simProcess(configOrTarget, target);
        };
    }
}
exports.Sim = Sim;
var getSim = function (target) {
    if (target != null && target !== undefined && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.SimMetadataKey, target);
    }
    catch (e) { }
};
exports.getSim = getSim;
var PostConstructMetadataKey = Symbol('PostConstruct');
var PostConstruct = function (target, propertyKey, descriptor) {
    ReflectUtils_1.ReflectUtils.defineMetadata(PostConstructMetadataKey, PostConstructMetadataKey, target, propertyKey);
};
exports.PostConstruct = PostConstruct;
var getPostConstruct = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(PostConstructMetadataKey, target, propertyKey);
};
exports.getPostConstruct = getPostConstruct;
}(SimDecorator));

Object.defineProperty(SimAtomic$1, "__esModule", { value: true });
SimAtomic$1.SimAtomic = void 0;
var SimDecorator_1$6 = SimDecorator;
var ReflectUtils_1$2 = ReflectUtils$1;
var SimAtomic = (function () {
    function SimAtomic(type, simstanceManager) {
        this.type = type;
        this.simstanceManager = simstanceManager;
    }
    SimAtomic.prototype.getConfig = function (key) {
        if (key === void 0) { key = SimDecorator_1$6.SimMetadataKey; }
        return ReflectUtils_1$2.ReflectUtils.getMetadata(key, this.type);
    };
    SimAtomic.prototype.getConfigs = function () {
        return ReflectUtils_1$2.ReflectUtils.getMetadatas(this.type);
    };
    Object.defineProperty(SimAtomic.prototype, "value", {
        get: function () {
            return this.simstanceManager.getOrNewSim(this.type);
        },
        enumerable: false,
        configurable: true
    });
    return SimAtomic;
}());
SimAtomic$1.SimAtomic = SimAtomic;

var SimpleApplication$1 = {};

var SimstanceManager$1 = {};

var SimNoSuch$1 = {};

var SimError$1 = {};

Object.defineProperty(SimError$1, "__esModule", { value: true });
SimError$1.SimError = void 0;
var SimError = (function () {
    function SimError(message, name, stack) {
        this.message = message;
        this.name = name;
        this.stack = stack;
    }
    return SimError;
}());
SimError$1.SimError = SimError;

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(SimNoSuch$1, "__esModule", { value: true });
SimNoSuch$1.SimNoSuch = void 0;
var SimError_1$1 = SimError$1;
var SimNoSuch = (function (_super) {
    __extends$3(SimNoSuch, _super);
    function SimNoSuch(message, name, stack) {
        return _super.call(this, message, name, stack) || this;
    }
    return SimNoSuch;
}(SimError_1$1.SimError));
SimNoSuch$1.SimNoSuch = SimNoSuch;

var ObjectUtils$1 = {};

Object.defineProperty(ObjectUtils$1, "__esModule", { value: true });
ObjectUtils$1.ObjectUtils = void 0;
var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    ObjectUtils.getAllProtoTypeName = function (target) {
        var data = [];
        if (target) {
            var proto = Object.getPrototypeOf(target);
            if (proto && (data = Object.keys(proto) || []).length > 0) {
                data = data.concat(this.getAllProtoTypeName(proto));
            }
        }
        return data.filter(function (it) { return it !== 'constructor'; });
    };
    ObjectUtils.getOwnPropertyNames = function (target) {
        var data = [];
        if (target) {
            if (!target.prototype) {
                var a = Object.getPrototypeOf(target);
                data.push.apply(data, Object.getOwnPropertyNames(a));
            }
            else {
                data.push.apply(data, Object.getOwnPropertyNames(Object.getPrototypeOf(target)));
            }
        }
        return data.filter(function (it) { return it !== 'constructor'; });
    };
    ObjectUtils.getProtoTypeName = function (target) {
        var data = [];
        if (target) {
            var proto = Object.getPrototypeOf(target);
            data = Object.keys(proto) || [];
        }
        return data.filter(function (it) { return it !== 'constructor'; });
    };
    ObjectUtils.getProtoTypes = function (target) {
        var data = [];
        if (target) {
            var proto_1 = Object.getPrototypeOf(target);
            (Object.keys(proto_1) || []).filter(function (it) { return it !== 'constructor'; }).forEach(function (it) {
                data.push(proto_1[it]);
            });
        }
        return data;
    };
    ObjectUtils.seal = function (target) {
        return Object.seal(target);
    };
    ObjectUtils.isPrototypeOfTarget = function (start, target) {
        if (start && target) {
            return Object.prototype.isPrototypeOf.call(start.prototype, target);
        }
        else {
            return false;
        }
    };
    ObjectUtils.getPrototypeOfDepth = function (target, dest) {
        var object = target;
        var r = [];
        if (dest) {
            do {
                object = Object.getPrototypeOf(object);
                if ((object === null || object === void 0 ? void 0 : object.constructor) === dest) {
                    break;
                }
                r.push(object);
            } while (object);
        }
        return r;
    };
    ObjectUtils.getAllProtoType = function (start) {
        var protos = [];
        while (start) {
            protos.push(start);
            start = Object.getPrototypeOf(start);
        }
        return protos;
    };
    ObjectUtils.getPrototypeOf = function (start) {
        return Object.getPrototypeOf(start);
    };
    ObjectUtils.getPrototypeKeyMap = function (target) {
        var data = new Map();
        if (target) {
            var proto_2 = Object.getPrototypeOf(target);
            (Object.keys(proto_2) || []).filter(function (it) { return it !== 'constructor'; }).forEach(function (it) {
                data.set(proto_2[it], it);
            });
        }
        return data;
    };
    ObjectUtils.getPrototypeName = function (target, fnc) {
        return this.getPrototypeKeyMap(target).get(fnc);
    };
    return ObjectUtils;
}());
ObjectUtils$1.ObjectUtils = ObjectUtils;

var Inject = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInject = exports.Inject = exports.SituationTypeContainers = exports.SituationTypeContainer = exports.InjectSituationType = void 0;

var ReflectUtils_1 = ReflectUtils$1;
(function (InjectSituationType) {
    InjectSituationType["INDEX"] = "SIMPLE_BOOT_CORE://Inject/INDEX";
})(exports.InjectSituationType || (exports.InjectSituationType = {}));
var SituationTypeContainer = (function () {
    function SituationTypeContainer(_a) {
        var situationType = _a.situationType, data = _a.data, index = _a.index;
        this.situationType = situationType;
        this.data = data;
        this.index = index;
    }
    return SituationTypeContainer;
}());
exports.SituationTypeContainer = SituationTypeContainer;
var SituationTypeContainers = (function () {
    function SituationTypeContainers(containers) {
        var _a;
        this.containers = [];
        if (containers) {
            (_a = this.containers).push.apply(_a, containers);
        }
    }
    SituationTypeContainers.prototype.push = function () {
        var _a;
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        (_a = this.containers).push.apply(_a, item);
    };
    Object.defineProperty(SituationTypeContainers.prototype, "length", {
        get: function () {
            return this.containers.length;
        },
        enumerable: false,
        configurable: true
    });
    SituationTypeContainers.prototype.find = function (predicate, thisArg) {
        return this.containers.find(predicate);
    };
    return SituationTypeContainers;
}());
exports.SituationTypeContainers = SituationTypeContainers;
var InjectMetadataKey = Symbol('Inject');
var injectProcess = function (config, target, propertyKey, parameterIndex) {
    if (propertyKey && typeof target === 'object') {
        var otarget = target;
        target = target.constructor;
        var saves = (Reflect.getOwnMetadata(InjectMetadataKey, target, propertyKey) || []);
        var type = ReflectUtils_1.ReflectUtils.getParameterTypes(otarget, propertyKey)[parameterIndex];
        saves.push({ index: parameterIndex, config: config, propertyKey: propertyKey, type: type });
        ReflectUtils_1.ReflectUtils.defineMetadata(InjectMetadataKey, saves, target, propertyKey);
    }
    else if (!propertyKey || typeof target === 'function') {
        var existingInjectdParameters = (ReflectUtils_1.ReflectUtils.getMetadata(InjectMetadataKey, target) || []);
        var type = ReflectUtils_1.ReflectUtils.getParameterTypes(target)[parameterIndex];
        existingInjectdParameters.push({ index: parameterIndex, config: config, type: type });
        ReflectUtils_1.ReflectUtils.defineMetadata(InjectMetadataKey, existingInjectdParameters, target);
    }
};
function Inject(configOrTarget, propertyKey, parameterIndex) {
    if (propertyKey && parameterIndex !== undefined) {
        injectProcess({}, configOrTarget, propertyKey, parameterIndex);
    }
    else {
        return function (target, propertyKey, parameterIndex) {
            injectProcess(configOrTarget, target, propertyKey, parameterIndex);
        };
    }
}
exports.Inject = Inject;
var getInject = function (target, propertyKey) {
    if (target != null && target !== undefined && typeof target === 'object') {
        target = target.constructor;
    }
    if (propertyKey) {
        var parameters = Reflect.getOwnMetadata(InjectMetadataKey, target, propertyKey);
        return parameters;
    }
    else {
        return ReflectUtils_1.ReflectUtils.getMetadata(InjectMetadataKey, target);
    }
};
exports.getInject = getInject;
}(Inject));

var SimProxyHandler$1 = {};

var AOPDecorator = {};

var MetaDataAtomic$1 = {};

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(MetaDataAtomic$1, "__esModule", { value: true });
MetaDataAtomic$1.MetaDataPropertyAtomic = MetaDataAtomic$1.MetaDataAtomic = void 0;

var MetaDataAtomic = (function () {
    function MetaDataAtomic(target, metaData) {
        this.target = target;
        this.metaData = metaData;
    }
    return MetaDataAtomic;
}());
MetaDataAtomic$1.MetaDataAtomic = MetaDataAtomic;
var MetaDataPropertyAtomic = (function (_super) {
    __extends$2(MetaDataPropertyAtomic, _super);
    function MetaDataPropertyAtomic(target, metaData, property, parameter) {
        var _this = _super.call(this, target, metaData) || this;
        _this.property = property;
        _this.parameter = parameter;
        return _this;
    }
    MetaDataPropertyAtomic.prototype.call = function () {
        var _a;
        var parameter = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameter[_i] = arguments[_i];
        }
        return (_a = this.target)[this.property].apply(_a, parameter);
    };
    return MetaDataPropertyAtomic;
}(MetaDataAtomic));
MetaDataAtomic$1.MetaDataPropertyAtomic = MetaDataPropertyAtomic;

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAround = exports.Around = exports.AroundForceReturn = exports.getProtoBefores = exports.getBefores = exports.getBefore = exports.Before = exports.getProtoAfters = exports.getAfters = exports.getAfter = exports.After = void 0;

var ReflectUtils_1 = ReflectUtils$1;
var MetaDataAtomic_1 = MetaDataAtomic$1;
var ObjectUtils_1 = ObjectUtils$1;
var AfterMetadataKey = Symbol('After');
var BeforeMetadataKey = Symbol('Before');
var AroundMetadataKey = Symbol('Around');
var After = function (data) {
    return ReflectUtils_1.ReflectUtils.metadata(AfterMetadataKey, data);
};
exports.After = After;
var getAfter = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(AfterMetadataKey, target, propertyKey);
};
exports.getAfter = getAfter;
var getAfters = function (target) {
    return ObjectUtils_1.ObjectUtils.getAllProtoTypeName(target)
        .map(function (it) { return new MetaDataAtomic_1.MetaDataPropertyAtomic(target, (0, exports.getAfter)(target, it), it); })
        .filter(function (it) { return it.metaData !== undefined; }) || [];
};
exports.getAfters = getAfters;
var getProtoAfters = function (target, propertyKey, type) {
    return (0, exports.getAfters)(target).filter(function (it) { var _a; return propertyKey === it.metaData.property && type === ((_a = it.metaData.type) === null || _a === void 0 ? void 0 : _a.prototype); }) || [];
};
exports.getProtoAfters = getProtoAfters;
var Before = function (data) {
    return ReflectUtils_1.ReflectUtils.metadata(BeforeMetadataKey, data);
};
exports.Before = Before;
var getBefore = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(BeforeMetadataKey, target, propertyKey);
};
exports.getBefore = getBefore;
var getBefores = function (target) {
    return ObjectUtils_1.ObjectUtils.getAllProtoTypeName(target)
        .map(function (it) { return new MetaDataAtomic_1.MetaDataPropertyAtomic(target, (0, exports.getBefore)(target, it), it); })
        .filter(function (it) { return it.metaData !== undefined; }) || [];
};
exports.getBefores = getBefores;
var getProtoBefores = function (target, propertyKey, type) {
    return (0, exports.getBefores)(target).filter(function (it) { var _a; return propertyKey === it.metaData.property && type === ((_a = it.metaData.type) === null || _a === void 0 ? void 0 : _a.prototype); }) || [];
};
exports.getProtoBefores = getProtoBefores;
var AroundForceReturn = (function () {
    function AroundForceReturn(value) {
        this.value = value;
    }
    return AroundForceReturn;
}());
exports.AroundForceReturn = AroundForceReturn;
var Around = function (config) {
    return function (target, propertyKey, descriptor) {
        ReflectUtils_1.ReflectUtils.defineMetadata(AroundMetadataKey, config, target, propertyKey);
        var method = descriptor.value;
        descriptor.value = function () {
            var _a, _b;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var before = undefined;
            var r = undefined;
            if (config.before) {
                try {
                    before = (_a = config.before) === null || _a === void 0 ? void 0 : _a.call(config, this, propertyKey, args);
                }
                catch (e) {
                    if (e instanceof AroundForceReturn) {
                        return e.value;
                    }
                }
                r = method.apply(this, before);
            }
            else {
                r = method.apply(this, args);
            }
            if (config.after) {
                try {
                    r = (_b = config.after) === null || _b === void 0 ? void 0 : _b.call(config, this, propertyKey, args, r);
                }
                catch (e) {
                    if (e instanceof AroundForceReturn) {
                        return e.value;
                    }
                }
            }
            return r;
        };
    };
};
exports.Around = Around;
var getAround = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(AroundMetadataKey, target, propertyKey);
};
exports.getAround = getAround;
}(AOPDecorator));

var ExceptionDecorator = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetExceptionHandler = exports.targetExceptionHandlers = exports.getExceptionHandlers = exports.getExceptionHandler = exports.ExceptionHandler = exports.ExceptionHandlerSituationType = void 0;

var ReflectUtils_1 = ReflectUtils$1;
var ObjectUtils_1 = ObjectUtils$1;
(function (ExceptionHandlerSituationType) {
    ExceptionHandlerSituationType["ERROR_OBJECT"] = "SIMPLE_BOOT_CORE://ExceptionHandler/ERROR_OBJECT";
    ExceptionHandlerSituationType["PARAMETER"] = "SIMPLE_BOOT_CORE://ExceptionHandler/PARAMETER";
})(exports.ExceptionHandlerSituationType || (exports.ExceptionHandlerSituationType = {}));
var ExceptionHandlerMetadataKey = Symbol('ExceptionHandler');
var ExceptionHandler = function (config) {
    if (config === void 0) { config = {}; }
    return function (target, propertyKey, descriptor) {
        var _a;
        var saveMappingConfigs = ((_a = ReflectUtils_1.ReflectUtils.getMetadata(ExceptionHandlerMetadataKey, target.constructor)) !== null && _a !== void 0 ? _a : []);
        var method = target[propertyKey];
        saveMappingConfigs.push({ propertyKey: propertyKey, method: method, config: config });
        ReflectUtils_1.ReflectUtils.defineMetadata(ExceptionHandlerMetadataKey, saveMappingConfigs, target.constructor);
        ReflectUtils_1.ReflectUtils.defineMetadata(ExceptionHandlerMetadataKey, config, target, propertyKey);
    };
};
exports.ExceptionHandler = ExceptionHandler;
var getExceptionHandler = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(ExceptionHandlerMetadataKey, target, propertyKey);
};
exports.getExceptionHandler = getExceptionHandler;
var getExceptionHandlers = function (target) {
    if (target !== null && undefined !== target && typeof target === 'object') {
        target = target.constructor;
    }
    return ReflectUtils_1.ReflectUtils.getMetadata(ExceptionHandlerMetadataKey, target);
};
exports.getExceptionHandlers = getExceptionHandlers;
var targetExceptionHandlers = function (target, error) {
    var _a;
    var exceptionHandlers = (0, exports.getExceptionHandlers)(target);
    var emptyTargets = exceptionHandlers === null || exceptionHandlers === void 0 ? void 0 : exceptionHandlers.filter(function (it) { return it.config.type === undefined; });
    var targets = exceptionHandlers === null || exceptionHandlers === void 0 ? void 0 : exceptionHandlers.filter(function (it) { return ObjectUtils_1.ObjectUtils.isPrototypeOfTarget(it.config.type, error); });
    var targetSorts = targets === null || targets === void 0 ? void 0 : targets.sort(function (a, b) {
        var aPrototypeOfDepth = ObjectUtils_1.ObjectUtils.getPrototypeOfDepth(error, a.config.type);
        var bPrototypeOfDepth = ObjectUtils_1.ObjectUtils.getPrototypeOfDepth(error, b.config.type);
        return aPrototypeOfDepth.length - bPrototypeOfDepth.length;
    });
    return (_a = (targetSorts !== null && targetSorts !== void 0 ? targetSorts : [])).concat.apply(_a, emptyTargets !== null && emptyTargets !== void 0 ? emptyTargets : []);
};
exports.targetExceptionHandlers = targetExceptionHandlers;
var targetExceptionHandler = function (target, error, excludeMethods) {
    if (excludeMethods === void 0) { excludeMethods = []; }
    var exceptionHandlers = (0, exports.targetExceptionHandlers)(target, error);
    exceptionHandlers = exceptionHandlers === null || exceptionHandlers === void 0 ? void 0 : exceptionHandlers.filter(function (it) { return !excludeMethods.includes(it.method); });
    if (exceptionHandlers && exceptionHandlers.length > 0) {
        return exceptionHandlers[0];
    }
    else {
        return undefined;
    }
};
exports.targetExceptionHandler = targetExceptionHandler;
}(ExceptionDecorator));

var __spreadArray$5 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(SimProxyHandler$1, "__esModule", { value: true });
SimProxyHandler$1.SimProxyHandler = void 0;
var AOPDecorator_1 = AOPDecorator;
var ObjectUtils_1$1 = ObjectUtils$1;
var ExceptionDecorator_1 = ExceptionDecorator;
var Inject_1$1 = Inject;
var SimProxyHandler = (function () {
    function SimProxyHandler(simstanceManager, simOption) {
        this.simstanceManager = simstanceManager;
        this.simOption = simOption;
    }
    SimProxyHandler.prototype.get = function (target, name) {
        if (name === '_SimpleBoot_simstanceManager') {
            return this.simstanceManager;
        }
        else if (name === '_SimpleBoot_simOption') {
            return this.simOption;
        }
        else {
            return target[name];
        }
    };
    SimProxyHandler.prototype.set = function (obj, prop, value, receiver) {
        var _a;
        value = (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.proxy(value);
        obj[prop] = value;
        return true;
    };
    SimProxyHandler.prototype.apply = function (target, thisArg, argumentsList) {
        var r;
        try {
            this.aopBefore(thisArg, target);
            try {
                r = target.apply(thisArg, argumentsList);
            }
            catch (e) {
                throw e;
            }
            finally {
                this.aopAfter(thisArg, target);
            }
        }
        catch (e) {
            console.error(e);
            var inHandlers = this.getExceptionHandler(e, thisArg, target);
            if (inHandlers.length > 0 && inHandlers[0]) {
                var inHandler = inHandlers[0];
                this.executeExceptionHandler(e, inHandler, argumentsList);
            }
            else {
                throw e;
            }
        }
        return r;
    };
    SimProxyHandler.prototype.executeExceptionHandler = function (e, inHandler, argumentsList) {
        var _a;
        var otherStorage = new Map();
        otherStorage.set(e.constructor, e);
        var situationErrorTypeContainer = new Inject_1$1.SituationTypeContainer({
            situationType: ExceptionDecorator_1.ExceptionHandlerSituationType.ERROR_OBJECT,
            data: e
        });
        var situationParameterTypeContainer = new Inject_1$1.SituationTypeContainer({
            situationType: ExceptionDecorator_1.ExceptionHandlerSituationType.PARAMETER,
            data: argumentsList
        });
        otherStorage.set(Inject_1$1.SituationTypeContainers, new Inject_1$1.SituationTypeContainers([situationErrorTypeContainer, situationParameterTypeContainer]));
        argumentsList === null || argumentsList === void 0 ? void 0 : argumentsList.forEach(function (it) {
            otherStorage.set(it.constructor, it);
        });
        try {
            this.simstanceManager.executeBindParameterSim({
                target: inHandler.thisArg,
                targetKey: inHandler.config.propertyKey
            }, otherStorage);
        }
        catch (es) {
            e = es;
        }
        if (inHandler.config.config.throw) {
            var exceptionHandler = this.getExceptionHandler(e, inHandler.thisArg, inHandler.config.method);
            if (((_a = exceptionHandler === null || exceptionHandler === void 0 ? void 0 : exceptionHandler.length) !== null && _a !== void 0 ? _a : 0) > 0) {
                this.executeExceptionHandler(e, exceptionHandler[0], argumentsList);
            }
        }
    };
    SimProxyHandler.prototype.getExceptionHandler = function (e, thisArg, target) {
        var _this = this;
        var _a;
        var globalConfigSets = (_a = this.simOption.advice.map(function (it) { var _a; return (_a = _this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(it); }).filter(function (it) { return it; }).map(function (it) {
            return { thisArg: it, config: (0, ExceptionDecorator_1.targetExceptionHandler)(it, e, [target]) };
        })) !== null && _a !== void 0 ? _a : [];
        var thisConfigSet = { thisArg: thisArg, config: (0, ExceptionDecorator_1.targetExceptionHandler)(thisArg, e, [target]) };
        var inHandlers = __spreadArray$5([thisConfigSet], globalConfigSets, true).filter(function (it) { return it && it.config; });
        return inHandlers;
    };
    SimProxyHandler.prototype.aopBefore = function (obj, protoType) {
        var _a;
        var propertyName = ObjectUtils_1$1.ObjectUtils.getPrototypeName(obj, protoType);
        if (propertyName && obj) {
            (0, AOPDecorator_1.getProtoBefores)(obj, propertyName).forEach(function (it) {
                it.call(obj, protoType, propertyName);
            });
            for (var i = 0; i < this.simOption.advice.length; i++) {
                var sim = (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(this.simOption.advice[i]);
                var protoBefores = (0, AOPDecorator_1.getProtoBefores)(sim, propertyName, Object.getPrototypeOf(obj));
                protoBefores.forEach(function (it) {
                    it.call(obj, protoType, propertyName);
                });
            }
        }
    };
    SimProxyHandler.prototype.aopAfter = function (obj, protoType) {
        var _a;
        var propertyName = ObjectUtils_1$1.ObjectUtils.getPrototypeName(obj, protoType);
        if (propertyName) {
            (0, AOPDecorator_1.getProtoAfters)(obj, propertyName).forEach(function (it) {
                it.call(obj, protoType, propertyName);
            });
            for (var i = 0; i < this.simOption.advice.length; i++) {
                var sim = (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(this.simOption.advice[i]);
                var protoBefores = (0, AOPDecorator_1.getProtoAfters)(sim, propertyName, Object.getPrototypeOf(obj));
                protoBefores.forEach(function (it) {
                    it.call(obj, protoType, propertyName);
                });
            }
        }
    };
    SimProxyHandler.prototype.has = function (target, key) {
        if (key === 'isProxy') {
            return true;
        }
        return key in target;
    };
    return SimProxyHandler;
}());
SimProxyHandler$1.SimProxyHandler = SimProxyHandler;

var __awaiter$2 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray$4 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(SimstanceManager$1, "__esModule", { value: true });
SimstanceManager$1.SimstanceManager = void 0;

var SimNoSuch_1$1 = SimNoSuch$1;
var SimDecorator_1$5 = SimDecorator;
var ObjectUtils_1 = ObjectUtils$1;
var SimAtomic_1$3 = SimAtomic$1;
var ReflectUtils_1$1 = ReflectUtils$1;
var Inject_1 = Inject;
var SimOption_1$1 = SimOption$1;
var SimProxyHandler_1 = SimProxyHandler$1;
var SimstanceManager = (function () {
    function SimstanceManager(option) {
        this.option = option;
        this._storage = new Map();
        this.set(SimstanceManager, this);
        this.set(option.constructor, option);
        this.set(SimOption_1$1.SimOption, option);
        this.simProxyHandler = new SimProxyHandler_1.SimProxyHandler(this, option);
    }
    Object.defineProperty(SimstanceManager.prototype, "storage", {
        get: function () {
            return this._storage;
        },
        enumerable: false,
        configurable: true
    });
    SimstanceManager.prototype.getSimAtomics = function () {
        var _this = this;
        var r = [];
        Array.from(this._storage.values()).forEach(function (it) {
            r.push.apply(r, Array.from(Array.from(it.keys())).map(function (sit) { return new SimAtomic_1$3.SimAtomic(sit, _this); }));
        });
        return r;
    };
    SimstanceManager.prototype.getSimConfig = function (scheme) {
        var newVar = this.getSimAtomics().filter(function (it) {
            var _a;
            return scheme && it && scheme === ((_a = it === null || it === void 0 ? void 0 : it.getConfig()) === null || _a === void 0 ? void 0 : _a.scheme);
        }) || [];
        return newVar;
    };
    SimstanceManager.prototype.findFirstSim = function (_a) {
        var scheme = _a.scheme, type = _a.type;
        if (scheme || type) {
            var simAtomics = this.getSimAtomics();
            var find = simAtomics.find(function (it) {
                var _a;
                var b = (scheme ? scheme === ((_a = it.getConfig()) === null || _a === void 0 ? void 0 : _a.scheme) : true) && (type ? it.type === type : true);
                return b;
            });
            return find;
        }
    };
    SimstanceManager.prototype.getStoreSets = function (targetKey) {
        var _a, _b, _c;
        var map = this.storage.get(targetKey);
        var datas = ((_c = Array.from((_b = (_a = map === null || map === void 0 ? void 0 : map.entries) === null || _a === void 0 ? void 0 : _a.call(map)) !== null && _b !== void 0 ? _b : [])) !== null && _c !== void 0 ? _c : []).reverse();
        return datas.map(function (it) { return ({ type: it[0], instance: it[1] }); });
    };
    SimstanceManager.prototype.getStoreSet = function (targetKey, target) {
        var _a;
        return (_a = this.getStoreSets(targetKey).find(function (it) { return it.type === target; })) !== null && _a !== void 0 ? _a : this.getStoreSets(targetKey)[0];
    };
    SimstanceManager.prototype.getStoreInstance = function (targetKey, target) {
        var _a;
        return (_a = this.getStoreSet(targetKey, target)) === null || _a === void 0 ? void 0 : _a.instance;
    };
    SimstanceManager.prototype.getOrNewSim = function (target) {
        if (target) {
            var registed = this.getStoreSet(target);
            if ((registed === null || registed === void 0 ? void 0 : registed.type) && !(registed === null || registed === void 0 ? void 0 : registed.instance)) {
                return this.resolve(target);
            }
            return registed === null || registed === void 0 ? void 0 : registed.instance;
        }
    };
    SimstanceManager.prototype.register = function (keyType, regTyps) {
        var _a;
        var itemMap = (_a = this._storage.get(keyType)) !== null && _a !== void 0 ? _a : new Map();
        regTyps.forEach(function (it) {
            if (!itemMap.has(it)) {
                itemMap.set(it, undefined);
            }
        });
        this._storage.set(keyType, itemMap);
    };
    SimstanceManager.prototype.set = function (targetKey, obj, target) {
        var _a;
        if (target === void 0) { target = targetKey; }
        var itemMap = (_a = this._storage.get(targetKey)) !== null && _a !== void 0 ? _a : new Map();
        itemMap.set(target, obj);
        this._storage.set(targetKey, itemMap);
    };
    SimstanceManager.prototype.resolve = function (targetKey, target) {
        var _this = this;
        var _a, _b, _c, _d;
        var registed = this.getStoreSet(targetKey, target);
        if (registed === null || registed === void 0 ? void 0 : registed.instance) {
            return registed.instance;
        }
        if (this._storage.has(targetKey) && undefined === (registed === null || registed === void 0 ? void 0 : registed.instance)) {
            var newSim = this.newSim((_a = registed === null || registed === void 0 ? void 0 : registed.type) !== null && _a !== void 0 ? _a : targetKey, function (data) {
                var _a, _b, _c;
                if (((_c = (0, SimDecorator_1$5.getSim)((_b = (_a = registed === null || registed === void 0 ? void 0 : registed.type) !== null && _a !== void 0 ? _a : target) !== null && _b !== void 0 ? _b : targetKey)) === null || _c === void 0 ? void 0 : _c.scope) === SimDecorator_1$5.Lifecycle.Singleton) {
                    _this.set(targetKey, data, target);
                }
            });
            (_b = newSim === null || newSim === void 0 ? void 0 : newSim.onSimCreate) === null || _b === void 0 ? void 0 : _b.call(newSim);
            return newSim;
        }
        var simNoSuch = new SimNoSuch_1$1.SimNoSuch('SimNoSuch: no simple instance ' + 'name:' + ((_d = (_c = targetKey === null || targetKey === void 0 ? void 0 : targetKey.prototype) === null || _c === void 0 ? void 0 : _c.constructor) === null || _d === void 0 ? void 0 : _d.name) + ',' + targetKey);
        console.error(simNoSuch);
        throw simNoSuch;
    };
    SimstanceManager.prototype.newSim = function (target, simCreateAfter, otherStorage) {
        var r = new (target.bind.apply(target, __spreadArray$4([void 0], this.getParameterSim({ target: target }, otherStorage), false)))();
        var p = this.proxy(r);
        simCreateAfter === null || simCreateAfter === void 0 ? void 0 : simCreateAfter(p);
        this.callBindPostConstruct(p);
        return p;
    };
    SimstanceManager.prototype.callBindPostConstruct = function (obj) {
        var _this = this;
        var set = new Set(ObjectUtils_1.ObjectUtils.getAllProtoTypeName(obj));
        set.forEach(function (it) {
            var _a;
            var postConstruct = (0, SimDecorator_1$5.getPostConstruct)(obj, it);
            if (postConstruct) {
                (_a = obj)[it].apply(_a, _this.getParameterSim({ target: obj, targetKey: it }));
            }
        });
    };
    SimstanceManager.prototype.executeBindParameterSimPromise = function (_a, otherStorage) {
        var target = _a.target, targetKey = _a.targetKey, firstCheckMaker = _a.firstCheckMaker;
        return __awaiter$2(this, void 0, void 0, function () {
            var value;
            return __generator$2(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        value = this.executeBindParameterSim({ target: target, targetKey: targetKey, firstCheckMaker: firstCheckMaker }, otherStorage);
                        if (!(value instanceof Promise)) return [3, 2];
                        return [4, value];
                    case 1:
                        value = _b.sent();
                        _b.label = 2;
                    case 2: return [2, value];
                }
            });
        });
    };
    SimstanceManager.prototype.executeBindParameterSim = function (_a, otherStorage) {
        var _b;
        var _c;
        var target = _a.target, targetKey = _a.targetKey, firstCheckMaker = _a.firstCheckMaker;
        var binds = this.getParameterSim({ target: target, targetKey: targetKey, firstCheckMaker: firstCheckMaker }, otherStorage);
        if (typeof target === 'object' && targetKey) {
            var targetMethod = target[targetKey];
            return (_c = targetMethod === null || targetMethod === void 0 ? void 0 : targetMethod.bind(target)) === null || _c === void 0 ? void 0 : _c.apply(void 0, binds);
        }
        else if (typeof target === 'function' && !targetKey) {
            return new ((_b = target).bind.apply(_b, __spreadArray$4([void 0], binds, false)))();
        }
    };
    SimstanceManager.prototype.getParameterSim = function (_a, otherStorage) {
        var _this = this;
        var target = _a.target, targetKey = _a.targetKey, firstCheckMaker = _a.firstCheckMaker;
        var paramTypes = ReflectUtils_1$1.ReflectUtils.getParameterTypes(target, targetKey);
        var injections = [];
        var injects = (0, Inject_1.getInject)(target, targetKey);
        injections = paramTypes.map(function (token, idx) {
            var _a;
            var _b, _c;
            var saveInject = injects === null || injects === void 0 ? void 0 : injects.find(function (it) { return it.index === idx; });
            if (saveInject === null || saveInject === void 0 ? void 0 : saveInject.config.disabled) {
                return undefined;
            }
            for (var _i = 0, _d = firstCheckMaker !== null && firstCheckMaker !== void 0 ? firstCheckMaker : []; _i < _d.length; _i++) {
                var f = _d[_i];
                var firstCheckObj = f({ target: target, targetKey: targetKey }, token, idx, saveInject);
                if (undefined !== firstCheckObj) {
                    return firstCheckObj;
                }
            }
            if (saveInject) {
                var inject_1 = saveInject.config;
                var obj = otherStorage === null || otherStorage === void 0 ? void 0 : otherStorage.get(token);
                if (token === Array && (inject_1.type || inject_1.scheme)) {
                    var p = [];
                    if (inject_1.type) {
                        p.push.apply(p, _this.getStoreSets(inject_1.type).map(function (it) { return _this.resolve(inject_1.type, it.type); }).reverse());
                    }
                    if (inject_1.scheme) {
                        p.push.apply(p, _this.getSimConfig(inject_1.scheme).map(function (it) { return it.value; }));
                    }
                    return p;
                }
                if (inject_1.situationType && otherStorage) {
                    var situations = otherStorage.get(Inject_1.SituationTypeContainers);
                    var situation = otherStorage.get(Inject_1.SituationTypeContainer);
                    if (inject_1.situationType === (situation === null || situation === void 0 ? void 0 : situation.situationType)) {
                        obj = situation.data;
                    }
                    else if (situations && situations.length > 0) {
                        var find = situations.find(function (a) { return a.situationType === inject_1.situationType; });
                        if (find) {
                            obj = find.data;
                        }
                    }
                }
                if (!obj) {
                    var findFirstSim = _this.findFirstSim({ scheme: inject_1.scheme, type: inject_1.type });
                    obj = findFirstSim ? _this.resolve((_b = findFirstSim === null || findFirstSim === void 0 ? void 0 : findFirstSim.type) !== null && _b !== void 0 ? _b : token) : _this.resolve(token);
                }
                if (inject_1.applyProxy) {
                    if (inject_1.applyProxy.param) {
                        obj = new Proxy(obj, new ((_a = inject_1.applyProxy.type).bind.apply(_a, __spreadArray$4([void 0], inject_1.applyProxy.param, false)))());
                    }
                    else {
                        obj = new Proxy(obj, new inject_1.applyProxy.type());
                    }
                }
                return obj;
            }
            else if (token) {
                return (_c = otherStorage === null || otherStorage === void 0 ? void 0 : otherStorage.get(token)) !== null && _c !== void 0 ? _c : _this.resolve(token);
            }
            return undefined;
        });
        return injections;
    };
    SimstanceManager.prototype.proxy = function (target) {
        var _this = this;
        if (target !== null && (0, SimDecorator_1$5.getSim)(target) && (typeof target === 'object') && (!('isProxy' in target))) {
            for (var key in target) {
                target[key] = this.proxy(target[key]);
            }
            var protoTypeName = ObjectUtils_1.ObjectUtils.getOwnPropertyNames(target);
            protoTypeName.filter(function (it) { return typeof target[it] === 'function'; }).forEach(function (it) {
                target[it] = new Proxy(target[it], _this.simProxyHandler);
            });
            if (this.simProxyHandler) {
                target = new Proxy(target, this.simProxyHandler);
            }
        }
        if (this.option.proxy) {
            target = this.option.proxy.onProxy(target);
        }
        return target;
    };
    SimstanceManager.prototype.run = function (otherInstanceSim) {
        var _this = this;
        var _a;
        this.otherInstanceSim = otherInstanceSim;
        (_a = this.otherInstanceSim) === null || _a === void 0 ? void 0 : _a.forEach(function (value, key) {
            _this.set(key, value);
        });
        SimDecorator_1$5.sims.forEach(function (regTypes, k) {
            _this.register(k, regTypes);
        });
        this.callBindPostConstruct(this);
    };
    return SimstanceManager;
}());
SimstanceManager$1.SimstanceManager = SimstanceManager;

var IntentManager$1 = {};

var Intent = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intent = exports.PublishType = void 0;
(function (PublishType) {
    PublishType["DATA_PARAMETERS"] = "DATA_PARAMETERS";
    PublishType["INLINE_DATA_PARAMETERS"] = "INLINE_DATA_PARAMETERS";
})(exports.PublishType || (exports.PublishType = {}));
var Intent = (function () {
    function Intent(uri, data, event) {
        this.uri = uri;
        this.data = data;
        this.event = event;
        this.sessionData = new Map();
    }
    Object.defineProperty(Intent.prototype, "scheme", {
        get: function () {
            return this.uri.split('://')[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "paths", {
        get: function () {
            var _a;
            return ((_a = this.pathname.split('/')) !== null && _a !== void 0 ? _a : []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "fullPath", {
        get: function () {
            var _a;
            var paths = this.uri.split('://');
            return (_a = paths[paths.length >= 2 ? 1 : 0]) !== null && _a !== void 0 ? _a : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "pathname", {
        get: function () {
            var paths = this.fullPath.split('?');
            return paths[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "query", {
        get: function () {
            var _a;
            var paths = this.fullPath.split('?');
            return (_a = paths[1]) !== null && _a !== void 0 ? _a : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "queryParams", {
        get: function () {
            var _a;
            var param = {};
            (_a = this.query.split('&')) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
                var a = it.split('=');
                param[a[0]] = a[1];
            });
            return param;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "queryParamsAfterDecodeURI", {
        get: function () {
            var params = this.queryParams;
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    params[key] = decodeURIComponent(params[key]);
                }
            }
            return params;
        },
        enumerable: false,
        configurable: true
    });
    Intent.prototype.getPathnameData = function (urlExpression) {
        var urls = this.pathname.split('/');
        var urlExpressions = urlExpression.split('/');
        if (urls.length !== urlExpressions.length) {
            return;
        }
        var data = {};
        for (var i = 0; i < urlExpressions.length; i++) {
            var it_1 = urlExpressions[i];
            var urlit = urls[i];
            var execResult = /^\{(.+)\}$/g.exec(it_1);
            if (!execResult) {
                if (it_1 !== urlit) {
                    return;
                }
                continue;
            }
            var _a = execResult[1].split(':'), name = _a[0], regex = _a[1];
            if (regex && !new RegExp(regex).test(urlit)) {
                return;
            }
            data[name] = urlit;
        }
        return data;
    };
    return Intent;
}());
exports.Intent = Intent;
}(Intent));

var __decorate$4 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArray$3 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(IntentManager$1, "__esModule", { value: true });
IntentManager$1.IntentManager = void 0;
var Intent_1$3 = Intent;
var SimstanceManager_1$3 = SimstanceManager$1;
var SimDecorator_1$4 = SimDecorator;
var IntentManager = (function () {
    function IntentManager(simstanceManager) {
        this.simstanceManager = simstanceManager;
    }
    IntentManager.prototype.publish = function (it, data) {
        var _this = this;
        if (typeof it === 'string') {
            it = new Intent_1$3.Intent(it, data);
        }
        var intent = it;
        var r = [];
        var target = intent.scheme ? this.simstanceManager.getSimConfig(intent.scheme) : this.simstanceManager.getSimAtomics();
        target.forEach(function (data) {
            var _a, _b, _c, _d;
            var orNewSim = (_a = _this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(data.type);
            if (orNewSim) {
                if (intent.paths.length > 0) {
                    var callthis_1 = orNewSim;
                    var lastProp_1 = '';
                    intent.paths.filter(function (i) { return i; }).forEach(function (i) {
                        callthis_1 = orNewSim;
                        orNewSim = orNewSim === null || orNewSim === void 0 ? void 0 : orNewSim[i];
                        lastProp_1 = i;
                    });
                    if (orNewSim && typeof orNewSim === 'function') {
                        if (Intent_1$3.PublishType.DATA_PARAMETERS === intent.publishType) {
                            r.push(orNewSim.call(callthis_1, intent.data));
                        }
                        else if (Intent_1$3.PublishType.INLINE_DATA_PARAMETERS === intent.publishType) {
                            r.push(orNewSim.call.apply(orNewSim, __spreadArray$3([callthis_1], intent.data, false)));
                        }
                        else {
                            r.push(orNewSim.call(callthis_1, intent));
                        }
                    }
                    else if (orNewSim) {
                        callthis_1[lastProp_1] = intent.data;
                        r.push(callthis_1[lastProp_1]);
                    }
                }
                else {
                    if (Intent_1$3.PublishType.DATA_PARAMETERS === intent.publishType) {
                        r.push((_b = orNewSim === null || orNewSim === void 0 ? void 0 : orNewSim.intentSubscribe) === null || _b === void 0 ? void 0 : _b.call(orNewSim, intent.data));
                    }
                    else if (Intent_1$3.PublishType.INLINE_DATA_PARAMETERS === intent.publishType) {
                        r.push((_c = orNewSim === null || orNewSim === void 0 ? void 0 : orNewSim.intentSubscribe) === null || _c === void 0 ? void 0 : _c.call.apply(_c, __spreadArray$3([orNewSim], intent.data, false)));
                    }
                    else {
                        r.push((_d = orNewSim === null || orNewSim === void 0 ? void 0 : orNewSim.intentSubscribe) === null || _d === void 0 ? void 0 : _d.call(orNewSim, intent));
                    }
                }
            }
        });
        return r;
    };
    IntentManager = __decorate$4([
        SimDecorator_1$4.Sim,
        __metadata$4("design:paramtypes", [SimstanceManager_1$3.SimstanceManager])
    ], IntentManager);
    return IntentManager;
}());
IntentManager$1.IntentManager = IntentManager;

var RouterManager$1 = {};

var RouterModule$1 = {};

var Injection$1 = {};

Object.defineProperty(Injection$1, "__esModule", { value: true });
Injection$1.getInjection = Injection$1.Injection = void 0;
var ReflectUtils_1 = ReflectUtils$1;
var InjectionMetadataKey = Symbol('Injection');
function Injection(configOrTarget, propertyKey, descriptor) {
    if (propertyKey && descriptor) {
        var target = configOrTarget;
        ReflectUtils_1.ReflectUtils.defineMetadata(InjectionMetadataKey, {}, target, propertyKey);
    }
    else {
        return function (target, propertyKey, descriptor) {
            var config = configOrTarget;
            ReflectUtils_1.ReflectUtils.defineMetadata(InjectionMetadataKey, config !== null && config !== void 0 ? config : {}, target, propertyKey);
        };
    }
}
Injection$1.Injection = Injection;
var getInjection = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(InjectionMetadataKey, target, propertyKey);
};
Injection$1.getInjection = getInjection;

var MethodNoSuch$1 = {};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
Object.defineProperty(MethodNoSuch$1, "__esModule", { value: true });
MethodNoSuch$1.MethodNoSuch = void 0;
var SimError_1 = SimError$1;
var MethodNoSuch = (function (_super) {
    __extends$1(MethodNoSuch, _super);
    function MethodNoSuch(message, name, propertyKeys, stack) {
        var _this = _super.call(this, message, name, stack) || this;
        _this.propertyKeys = propertyKeys;
        return _this;
    }
    return MethodNoSuch;
}(SimError_1.SimError));
MethodNoSuch$1.MethodNoSuch = MethodNoSuch;

var __spreadArray$2 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(RouterModule$1, "__esModule", { value: true });
RouterModule$1.RouterModule = void 0;
var Injection_1 = Injection$1;
var MethodNoSuch_1 = MethodNoSuch$1;
var RouterModule = (function () {
    function RouterModule(simstanceManager, router, module, routerChains) {
        if (routerChains === void 0) { routerChains = []; }
        this.simstanceManager = simstanceManager;
        this.router = router;
        this.module = module;
        this.routerChains = routerChains;
    }
    RouterModule.prototype.getModuleInstance = function (propertyKey, instanceBind) {
        if (instanceBind === void 0) { instanceBind = true; }
        var instance = this.simstanceManager.getOrNewSim(this.module);
        if (propertyKey && this.propertyKeys && this.propertyKeys.includes(propertyKey)) {
            var instanceElement = instance[propertyKey];
            if (instanceBind && typeof instanceBind === 'boolean') {
                instanceElement = instanceElement.bind(instance);
            }
            else if (instanceBind && typeof instanceBind === 'object') {
                instanceElement = instanceElement.bind(instanceBind);
            }
            return instanceElement;
        }
        else {
            return instance;
        }
    };
    RouterModule.prototype.executeModuleProperty = function (propertyKey) {
        var _a;
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var target = this.getModuleInstance();
        if (propertyKey) {
            var config = (0, Injection_1.getInjection)(target, propertyKey);
            if (config) {
                var other_1 = new Map();
                param.forEach(function (it) { return other_1.set(it.constructor, it); });
                return this.simstanceManager.executeBindParameterSim({ target: target, targetKey: propertyKey }, other_1);
            }
            else {
                if (target[propertyKey]) {
                    return (_a = target[propertyKey]) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray$2([target], param, false));
                }
                else {
                    throw new MethodNoSuch_1.MethodNoSuch("".concat(propertyKey.toString(), " noSuch"), propertyKey.toString(), propertyKey);
                }
            }
        }
    };
    Object.defineProperty(RouterModule.prototype, "lastRouteChain", {
        get: function () {
            return this.routerChains[this.routerChains.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouterModule.prototype, "lastRouteChainValue", {
        get: function () {
            return this.lastRouteChain.value;
        },
        enumerable: false,
        configurable: true
    });
    RouterModule.prototype.hasActivateInLastRoute = function (obj) {
        var _a;
        return ((_a = this.lastRouteChainValue) === null || _a === void 0 ? void 0 : _a.hasActivate(obj)) === true;
    };
    Object.defineProperty(RouterModule.prototype, "queryParams", {
        get: function () {
            if (this.intent) {
                return this.intent.queryParams;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouterModule.prototype, "queryParamsAfterDecodeURI", {
        get: function () {
            if (this.intent) {
                return this.intent.queryParamsAfterDecodeURI;
            }
        },
        enumerable: false,
        configurable: true
    });
    return RouterModule;
}());
RouterModule$1.RouterModule = RouterModule;

var Router = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = exports.getRoute = exports.Route = exports.RouteMetadataKey = exports.getRouter = exports.Router = exports.RouterMetadataKey = void 0;
var ReflectUtils_1 = ReflectUtils$1;
exports.RouterMetadataKey = Symbol('Router');
var routerProcess = function (config, target) {
    var _a;
    (_a = (0, exports.getRoutes)(target)) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
        var _a;
        var _b, _c;
        config.route = ((_b = config.route) !== null && _b !== void 0 ? _b : {});
        var paths = Array.isArray(it.config.path) ? it.config.path : [it.config.path];
        for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var path = paths_1[_i];
            if (config.route[path]) {
                var route = config.route[path];
                route.propertyKeys.push(it.propertyKey);
                route.filters = (_c = route.filters) !== null && _c !== void 0 ? _c : [];
                if (Array.isArray(it.config.filters)) {
                    (_a = route.filters).push.apply(_a, it.config.filters);
                }
                else if (it.config.filters) {
                    route.filters.push(it.config.filters);
                }
            }
            else {
                config.route[path] = { target: target, propertyKeys: [it.propertyKey], filters: it.config.filters };
            }
        }
    });
    ReflectUtils_1.ReflectUtils.defineMetadata(exports.RouterMetadataKey, config, target);
};
function Router(configOrTarget) {
    if (typeof configOrTarget === 'function') {
        var routerConfig = {
            path: ''
        };
        routerProcess(routerConfig, configOrTarget);
    }
    else {
        return function (target) {
            var _a;
            configOrTarget.path = (_a = configOrTarget.path) !== null && _a !== void 0 ? _a : '';
            routerProcess(configOrTarget, target);
        };
    }
}
exports.Router = Router;
var getRouter = function (target) {
    if (target != null && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.RouterMetadataKey, target);
    }
    catch (e) { }
};
exports.getRouter = getRouter;
exports.RouteMetadataKey = Symbol('RouteMetadataKey');
var Route = function (config) {
    return function (target, propertyKey, descriptor) {
        var _a;
        var saveRouteConfigs = ((_a = ReflectUtils_1.ReflectUtils.getMetadata(exports.RouteMetadataKey, target.constructor)) !== null && _a !== void 0 ? _a : []);
        var method = target[propertyKey];
        saveRouteConfigs.push({ propertyKey: propertyKey, method: method, config: config });
        ReflectUtils_1.ReflectUtils.defineMetadata(exports.RouteMetadataKey, saveRouteConfigs, target.constructor);
        ReflectUtils_1.ReflectUtils.defineMetadata(exports.RouteMetadataKey, config, target, propertyKey);
    };
};
exports.Route = Route;
var getRoute = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(exports.RouteMetadataKey, target, propertyKey);
};
exports.getRoute = getRoute;
var getRoutes = function (target) {
    if (target !== null && undefined !== target && typeof target === 'object') {
        target = target.constructor;
    }
    return ReflectUtils_1.ReflectUtils.getMetadata(exports.RouteMetadataKey, target);
};
exports.getRoutes = getRoutes;
}(Router));

var OnRoute = {};

(function (exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnRoute = exports.OnRoute = exports.OnRouteMetadataKey = exports.onRoutes = void 0;
var ReflectUtils_1 = ReflectUtils$1;
exports.onRoutes = new Map();
exports.OnRouteMetadataKey = Symbol('OnRoute');
var onRouteProcess = function (config, target, propertyKey, description) {
    var _a;
    if (target !== null && undefined !== target && typeof target === 'object') {
        target = target.constructor;
    }
    if (!exports.onRoutes.get(target)) {
        exports.onRoutes.set(target, []);
    }
    (_a = exports.onRoutes.get(target)) === null || _a === void 0 ? void 0 : _a.push(propertyKey);
    ReflectUtils_1.ReflectUtils.defineMetadata(exports.OnRouteMetadataKey, config, target, propertyKey);
};
function OnRoute(configOrTarget, propertyKey, descriptor) {
    if (propertyKey && descriptor) {
        onRouteProcess({}, configOrTarget, propertyKey);
    }
    else {
        return function (target, propertyKey, descriptor) {
            onRouteProcess(configOrTarget, target, propertyKey);
        };
    }
}
exports.OnRoute = OnRoute;
var getOnRoute = function (target, propertyKey) {
    if (target !== null && undefined !== target && typeof target === 'object') {
        target = target.constructor;
    }
    return ReflectUtils_1.ReflectUtils.getMetadata(exports.OnRouteMetadataKey, target, propertyKey);
};
exports.getOnRoute = getOnRoute;
}(OnRoute));

var __decorate$3 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter$1 = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray$1 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(RouterManager$1, "__esModule", { value: true });
RouterManager$1.RouterManager = void 0;
var Intent_1$2 = Intent;
var RouterModule_1 = RouterModule$1;
var Router_1 = Router;
var SimAtomic_1$2 = SimAtomic$1;
var SimstanceManager_1$2 = SimstanceManager$1;
var OnRoute_1 = OnRoute;
var SimDecorator_1$3 = SimDecorator;
var RouterManager = (function () {
    function RouterManager(simstanceManager, rootRouter) {
        this.simstanceManager = simstanceManager;
        this.rootRouter = rootRouter;
    }
    RouterManager.prototype.routingMap = function (prefix, router) {
        var _this = this;
        var _a;
        if (prefix === void 0) { prefix = ''; }
        if (router === void 0) { router = this.rootRouter; }
        var map = {};
        if (router) {
            var routerAtomic = new SimAtomic_1$2.SimAtomic(router, this.simstanceManager);
            var routerData = routerAtomic.getConfig(Router_1.RouterMetadataKey);
            if (routerData) {
                var currentPrefix_1 = prefix + routerData.path;
                if (routerData.route) {
                    Object.entries(routerData.route).forEach(function (_a) {
                        var key = _a[0], value = _a[1];
                        map[currentPrefix_1 + key] = value;
                    });
                }
                (_a = routerData.routers) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
                    Object.assign(map, _this.routingMap(currentPrefix_1, it));
                });
            }
        }
        return map;
    };
    RouterManager.prototype.routing = function (intent) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return __awaiter$1(this, void 0, void 0, function () {
            var routers, routerAtomic, rootRouter, executeModule, i, current, next, value, routerChain, module_1, otherStorage, _loop_1, this_1, _i, _t, _u, key, value, i, current, next, value, routerModule;
            return __generator$1(this, function (_v) {
                switch (_v.label) {
                    case 0:
                        if (!this.rootRouter) {
                            throw new Error('no root router');
                        }
                        routers = [];
                        routerAtomic = new SimAtomic_1$2.SimAtomic(this.rootRouter, this.simstanceManager);
                        rootRouter = routerAtomic.value;
                        executeModule = this.getExecuteModule(routerAtomic, intent, routers);
                        if (!(executeModule === null || executeModule === void 0 ? void 0 : executeModule.router)) return [3, 13];
                        executeModule.routerChains = routers;
                        if (!(((_a = executeModule.routerChains) === null || _a === void 0 ? void 0 : _a.length) && ((_b = executeModule.routerChains) === null || _b === void 0 ? void 0 : _b.length) > 0)) return [3, 4];
                        i = 0;
                        _v.label = 1;
                    case 1:
                        if (!(i < executeModule.routerChains.length)) return [3, 4];
                        current = executeModule.routerChains[i];
                        next = executeModule.routerChains[i + 1];
                        value = current.value;
                        if (!next) return [3, 3];
                        return [4, ((_c = value === null || value === void 0 ? void 0 : value.canActivate) === null || _c === void 0 ? void 0 : _c.call(value, intent, (_d = next === null || next === void 0 ? void 0 : next.value) !== null && _d !== void 0 ? _d : null))];
                    case 2:
                        _v.sent();
                        _v.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4:
                        this.activeRouterModule = executeModule;
                        if (!!(executeModule === null || executeModule === void 0 ? void 0 : executeModule.module)) return [3, 6];
                        routerChain = executeModule.routerChains[executeModule.routerChains.length - 1];
                        return [4, ((_f = (_e = routerChain === null || routerChain === void 0 ? void 0 : routerChain.value) === null || _e === void 0 ? void 0 : _e.canActivate) === null || _f === void 0 ? void 0 : _f.call(_e, intent, executeModule.getModuleInstance()))];
                    case 5:
                        _v.sent();
                        return [3, 8];
                    case 6:
                        module_1 = null;
                        module_1 = executeModule.getModuleInstance();
                        return [4, ((_j = (_h = (_g = executeModule.router) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.canActivate) === null || _j === void 0 ? void 0 : _j.call(_h, intent, module_1))];
                    case 7:
                        _v.sent();
                        _v.label = 8;
                    case 8:
                        otherStorage = new Map();
                        otherStorage.set(Intent_1$2.Intent, intent);
                        otherStorage.set(RouterModule_1.RouterModule, executeModule);
                        _loop_1 = function (key, value) {
                            var sim_1, _w, value_1, v, onRouteConfig, r;
                            return __generator$1(this, function (_x) {
                                switch (_x.label) {
                                    case 0:
                                        _x.trys.push([0, 5, , 6]);
                                        sim_1 = this_1.simstanceManager.findFirstSim({ type: key });
                                        _w = 0, value_1 = value;
                                        _x.label = 1;
                                    case 1:
                                        if (!(_w < value_1.length)) return [3, 4];
                                        v = value_1[_w];
                                        onRouteConfig = (0, OnRoute_1.getOnRoute)(key, v);
                                        r = void 0;
                                        if (!(onRouteConfig === null || onRouteConfig === void 0 ? void 0 : onRouteConfig.isActivateMe)) {
                                            r = (_l = sim_1 === null || sim_1 === void 0 ? void 0 : (_k = sim_1.value)[v]) === null || _l === void 0 ? void 0 : _l.call.apply(_l, __spreadArray$1([_k], this_1.simstanceManager.getParameterSim({ target: sim_1 === null || sim_1 === void 0 ? void 0 : sim_1.value, targetKey: v }, otherStorage), false));
                                        }
                                        else if ((_o = (_m = this_1.activeRouterModule) === null || _m === void 0 ? void 0 : _m.routerChains) === null || _o === void 0 ? void 0 : _o.some(function (it) { var _a, _b; return (_b = (_a = it.value) === null || _a === void 0 ? void 0 : _a.hasActivate) === null || _b === void 0 ? void 0 : _b.call(_a, sim_1 === null || sim_1 === void 0 ? void 0 : sim_1.value); })) {
                                            r = (_q = sim_1 === null || sim_1 === void 0 ? void 0 : (_p = sim_1.value)[v]) === null || _q === void 0 ? void 0 : _q.call.apply(_q, __spreadArray$1([_p], this_1.simstanceManager.getParameterSim({ target: sim_1 === null || sim_1 === void 0 ? void 0 : sim_1.value, targetKey: v }, otherStorage), false));
                                        }
                                        if (!(r instanceof Promise)) return [3, 3];
                                        return [4, r];
                                    case 2:
                                        _x.sent();
                                        _x.label = 3;
                                    case 3:
                                        _w++;
                                        return [3, 1];
                                    case 4: return [3, 6];
                                    case 5:
                                        _x.sent();
                                        return [3, 6];
                                    case 6: return [2];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _t = Array.from(OnRoute_1.onRoutes);
                        _v.label = 9;
                    case 9:
                        if (!(_i < _t.length)) return [3, 12];
                        _u = _t[_i], key = _u[0], value = _u[1];
                        return [5, _loop_1(key, value)];
                    case 10:
                        _v.sent();
                        _v.label = 11;
                    case 11:
                        _i++;
                        return [3, 9];
                    case 12: return [2, this.activeRouterModule];
                    case 13:
                        if (!(routers.length && routers.length > 0)) return [3, 17];
                        i = 0;
                        _v.label = 14;
                    case 14:
                        if (!(i < routers.length)) return [3, 17];
                        current = routers[i];
                        next = routers[i + 1];
                        value = current.value;
                        return [4, ((_r = value === null || value === void 0 ? void 0 : value.canActivate) === null || _r === void 0 ? void 0 : _r.call(value, intent, (_s = next === null || next === void 0 ? void 0 : next.value) !== null && _s !== void 0 ? _s : null))];
                    case 15:
                        _v.sent();
                        _v.label = 16;
                    case 16:
                        i++;
                        return [3, 14];
                    case 17:
                        routerModule = new RouterModule_1.RouterModule(this.simstanceManager, rootRouter, undefined, routers);
                        this.activeRouterModule = routerModule;
                        return [2, this.activeRouterModule];
                }
            });
        });
    };
    RouterManager.prototype.getExecuteModule = function (router, intent, parentRouters) {
        var _this = this;
        var path = intent.pathname;
        var routerConfig = router.getConfig(Router_1.RouterMetadataKey);
        if (routerConfig) {
            var filters = [];
            if (Array.isArray(routerConfig.filters)) {
                filters.push.apply(filters, routerConfig.filters);
            }
            else if (routerConfig.filters) {
                filters.push(routerConfig.filters);
            }
            var noAccept = filters.some(function (it) { var _a; return ((_a = (typeof it === 'function' ? _this.simstanceManager.getOrNewSim(it) : it)) === null || _a === void 0 ? void 0 : _a.isAccept(intent)) === false; });
            if (noAccept) {
                return;
            }
            var routerStrings = parentRouters.slice(1).map(function (it) { var _a; return ((_a = it.getConfig(Router_1.RouterMetadataKey)) === null || _a === void 0 ? void 0 : _a.path) || ''; });
            var isRoot = this.isRootUrl(routerConfig.path, routerStrings, path);
            if (isRoot) {
                parentRouters.push(router);
                if (routerConfig.routers && routerConfig.routers.length > 0) {
                    for (var _i = 0, _a = routerConfig.routers; _i < _a.length; _i++) {
                        var child = _a[_i];
                        var routerAtomic = new SimAtomic_1$2.SimAtomic(child, this.simstanceManager);
                        var router_1 = routerAtomic.value;
                        var executeModule = this.getExecuteModule(routerAtomic, intent, parentRouters);
                        if (router_1 && executeModule) {
                            return executeModule;
                        }
                    }
                }
                var module_2 = this.findRouting(router, routerConfig, routerStrings, intent);
                if (module_2 === null || module_2 === void 0 ? void 0 : module_2.module) {
                    module_2.intent = intent;
                    return module_2;
                }
            }
        }
    };
    RouterManager.prototype.isRootUrl = function (path, parentRoots, url) {
        return url.startsWith(parentRoots.join('') + (path || ''));
    };
    RouterManager.prototype.findRouting = function (router, routerData, parentRoots, intent) {
        var urlRoot = parentRoots.join('') + routerData.path;
        if (routerData.route) {
            for (var _i = 0, _a = Object.keys(routerData.route).filter(function (it) { return !it.startsWith('_'); }); _i < _a.length; _i++) {
                var it_1 = _a[_i];
                var pathnameData = intent.getPathnameData(urlRoot + it_1);
                if (pathnameData) {
                    try {
                        var dataSet = this.findRouteProperty(routerData.route, it_1, intent);
                        var rm = new RouterModule_1.RouterModule(this.simstanceManager, router, dataSet.child);
                        rm.data = dataSet.data;
                        rm.pathData = pathnameData;
                        rm.propertyKeys = dataSet.propertyKeys;
                        return rm;
                    }
                    catch (e) {
                    }
                }
            }
        }
    };
    RouterManager.prototype.findRouteProperty = function (route, propertyName, intent) {
        var _this = this;
        var _a;
        var child;
        var data;
        var propertyKeys;
        var routeElement = route[propertyName];
        if (typeof routeElement === 'function') {
            child = routeElement;
        }
        else if (typeof routeElement === 'string') {
            return this.findRouteProperty(route, routeElement, intent);
        }
        else if (Array.isArray(routeElement)) {
            var r = routeElement === null || routeElement === void 0 ? void 0 : routeElement[0];
            if (typeof r === 'object' && 'filters' in r && 'target' in r) {
                var filters = [];
                if (Array.isArray(r.filters)) {
                    filters.push.apply(filters, r.filters);
                }
                else if (r.filters) {
                    filters.push(r.filters);
                }
                var noAccept = filters.some(function (it) { var _a; return ((_a = (typeof it === 'function' ? _this.simstanceManager.getOrNewSim(it) : it)) === null || _a === void 0 ? void 0 : _a.isAccept(intent)) === false; });
                if (!noAccept) {
                    child = r.target;
                }
            }
            else {
                child = r;
            }
            data = routeElement === null || routeElement === void 0 ? void 0 : routeElement[1];
        }
        else if (typeof routeElement === 'object' && 'target' in routeElement && 'propertyKeys' in routeElement) {
            var noAccept = (_a = routeElement.filters) === null || _a === void 0 ? void 0 : _a.filter(function (it) { return it; }).some(function (it) { var _a; return ((_a = (typeof it === 'function' ? _this.simstanceManager.getOrNewSim(it) : it)) === null || _a === void 0 ? void 0 : _a.isAccept(intent)) === false; });
            if (!noAccept) {
                child = routeElement.target;
                propertyKeys = routeElement.propertyKeys;
            }
        }
        else if (typeof routeElement === 'object' && 'filters' in routeElement && 'target' in routeElement) {
            var filters = [];
            if (Array.isArray(routeElement.filters)) {
                filters.push.apply(filters, routeElement.filters);
            }
            else if (routeElement.filters) {
                filters.push(routeElement.filters);
            }
            var noAccept = filters.some(function (it) { var _a; return ((_a = (typeof it === 'function' ? _this.simstanceManager.getOrNewSim(it) : it)) === null || _a === void 0 ? void 0 : _a.isAccept(intent)) === false; });
            if (!noAccept) {
                child = routeElement.target;
            }
        }
        return {
            child: child,
            data: data,
            propertyKeys: propertyKeys
        };
    };
    RouterManager = __decorate$3([
        SimDecorator_1$3.Sim,
        __metadata$3("design:paramtypes", [SimstanceManager_1$2.SimstanceManager, Object])
    ], RouterManager);
    return RouterManager;
}());
RouterManager$1.RouterManager = RouterManager;

Object.defineProperty(SimpleApplication$1, "__esModule", { value: true });
SimpleApplication$1.SimpleApplication = void 0;

var SimstanceManager_1$1 = SimstanceManager$1;
var SimOption_1 = SimOption$1;
var IntentManager_1$1 = IntentManager$1;
var RouterManager_1$1 = RouterManager$1;
var Intent_1$1 = Intent;
var SimAtomic_1$1 = SimAtomic$1;
var SimNoSuch_1 = SimNoSuch$1;
var SimpleApplication = (function () {
    function SimpleApplication(rootRouter, option) {
        if (option === void 0) { option = new SimOption_1.SimOption(); }
        if (rootRouter instanceof SimOption_1.SimOption) {
            option = rootRouter;
        }
        else if (typeof rootRouter === 'function') {
            this.rootRouter = rootRouter;
        }
        this.option = option;
        this.simstanceManager = new SimstanceManager_1$1.SimstanceManager(option);
        this.simstanceManager.set(SimpleApplication, this);
        this.simstanceManager.set(SimstanceManager_1$1.SimstanceManager, this.simstanceManager);
        this.intentManager = this.simstanceManager.proxy(new IntentManager_1$1.IntentManager(this.simstanceManager));
        this.routerManager = this.simstanceManager.proxy(new RouterManager_1$1.RouterManager(this.simstanceManager, this.rootRouter));
        this.simstanceManager.set(IntentManager_1$1.IntentManager, this.intentManager);
        this.simstanceManager.set(RouterManager_1$1.RouterManager, this.routerManager);
    }
    SimpleApplication.prototype.getSimstanceManager = function () {
        return this.simstanceManager;
    };
    SimpleApplication.prototype.getIntentManager = function () {
        return this.intentManager;
    };
    SimpleApplication.prototype.getRouterManager = function () {
        return this.routerManager;
    };
    SimpleApplication.prototype.run = function (otherInstanceSim) {
        this.simstanceManager.run(otherInstanceSim);
        return this.simstanceManager;
    };
    SimpleApplication.prototype.simAtomic = function (type) {
        var routerAtomic = new SimAtomic_1$1.SimAtomic(type, this.simstanceManager);
        return routerAtomic;
    };
    SimpleApplication.prototype.getInstance = function (type) {
        var _a, _b;
        var i = this.sim(type);
        if (i) {
            return i;
        }
        else {
            throw new SimNoSuch_1.SimNoSuch('SimNoSuch: no simple instance. ' + 'name:' + ((_b = (_a = type === null || type === void 0 ? void 0 : type.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) + ',' + type);
        }
    };
    SimpleApplication.prototype.sim = function (type) {
        return this.simAtomic(type).value;
    };
    SimpleApplication.prototype.publishIntent = function (i, data) {
        if (i instanceof Intent_1$1.Intent) {
            return this.intentManager.publish(i);
        }
        else {
            return this.intentManager.publish(i, data);
        }
    };
    SimpleApplication.prototype.routing = function (i, data) {
        if (i instanceof Intent_1$1.Intent) {
            return this.routerManager.routing(i);
        }
        else {
            return this.routerManager.routing(new Intent_1$1.Intent(i, data));
        }
    };
    return SimpleApplication;
}());
SimpleApplication$1.SimpleApplication = SimpleApplication;

var Navigation$1 = {};

var __decorate$2 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(Navigation$1, "__esModule", { value: true });
Navigation$1.Navigation = void 0;
var SimDecorator_1$2 = SimDecorator;
var SimFrontOption_1$1 = SimFrontOption;
var LocationUtils_1 = LocationUtils$1;
var Navigation = (function () {
    function Navigation(option) {
        this.option = option;
    }
    Object.defineProperty(Navigation.prototype, "url", {
        get: function () {
            var queryParams = this.queryParamsObject;
            var queryString = Object.entries(queryParams).map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(value);
            }).join('&');
            var path = this.path;
            return path + (queryString.length > 0 ? ('?' + queryString) : '');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "path", {
        get: function () {
            if (SimFrontOption_1$1.UrlType.path === this.option.urlType) {
                return LocationUtils_1.LocationUtils.path(this.option.window);
            }
            else if (SimFrontOption_1$1.UrlType.hash === this.option.urlType) {
                return LocationUtils_1.LocationUtils.hashPath(this.option.window);
            }
            else {
                return '';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "queryParams", {
        get: function () {
            if (SimFrontOption_1$1.UrlType.path === this.option.urlType) {
                return LocationUtils_1.LocationUtils.pathQueryParams(this.option.window);
            }
            else if (SimFrontOption_1$1.UrlType.hash === this.option.urlType) {
                return LocationUtils_1.LocationUtils.hashQueryParams(this.option.window);
            }
            else {
                return new Map();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "queryParamsObject", {
        get: function () {
            if (SimFrontOption_1$1.UrlType.path === this.option.urlType) {
                return LocationUtils_1.LocationUtils.pathQueryParamsObject(this.option.window);
            }
            else if (SimFrontOption_1$1.UrlType.hash === this.option.urlType) {
                return LocationUtils_1.LocationUtils.hashQueryParamsObject(this.option.window);
            }
            else {
                return {};
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "pathInfo", {
        get: function () {
            return { path: this.path, queryParams: this.queryParams };
        },
        enumerable: false,
        configurable: true
    });
    Navigation.prototype.reload = function () {
        this.option.window.dispatchEvent(new Event('popstate'));
    };
    Navigation.prototype.pathAndSearch = function () {
        return this.option.window.location.pathname + this.option.window.location.search;
    };
    Navigation.prototype.goNoPopStateEvent = function (path, data, title) {
        if (data === void 0) { data = {}; }
        if (title === void 0) { title = ''; }
        if (SimFrontOption_1$1.UrlType.path === this.option.urlType) {
            this.option.window.history.pushState(data, title, path);
        }
        else if (SimFrontOption_1$1.UrlType.hash === this.option.urlType) {
            path = '#' + path;
            this.option.window.history.pushState(data, title, path);
        }
    };
    Navigation.prototype.go = function (path, data, title) {
        if (data === void 0) { data = {}; }
        if (title === void 0) { title = ''; }
        this.goNoPopStateEvent(path, data, title);
        this.option.window.dispatchEvent(new Event('popstate'));
    };
    Navigation.prototype.state = function () {
        return this.option.window.history.state;
    };
    Navigation = __decorate$2([
        SimDecorator_1$2.Sim,
        __metadata$2("design:paramtypes", [SimFrontOption_1$1.SimFrontOption])
    ], Navigation);
    return Navigation;
}());
Navigation$1.Navigation = Navigation;

var ViewService$1 = {};

var View$1 = {};

Object.defineProperty(View$1, "__esModule", { value: true });
View$1.View = void 0;
var View = (function () {
    function View(_e) {
        this._e = _e;
    }
    Object.defineProperty(View.prototype, "e", {
        get: function () {
            if (typeof this._e === 'string') {
                return document.querySelector(this._e);
            }
            else {
                return this._e;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "value", {
        get: function () {
            return this.e.value;
        },
        enumerable: false,
        configurable: true
    });
    return View;
}());
View$1.View = View;

var __decorate$1 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(ViewService$1, "__esModule", { value: true });
ViewService$1.ViewService = void 0;
var SimDecorator_1$1 = SimDecorator;
var View_1 = View$1;
var ViewService = (function () {
    function ViewService() {
    }
    ViewService.prototype.e = function (selector) {
        try {
            var querySelector = document.querySelector(selector);
            if (querySelector) {
                return new View_1.View(querySelector);
            }
            else {
                return undefined;
            }
        }
        catch (e) {
            return undefined;
        }
    };
    ViewService.prototype.eI = function (selector) {
        var _a;
        return (_a = this.e("#".concat(selector))) !== null && _a !== void 0 ? _a : undefined;
    };
    ViewService.prototype.eC = function (selector) {
        var _a;
        return (_a = this.e(".".concat(selector))) !== null && _a !== void 0 ? _a : undefined;
    };
    ViewService = __decorate$1([
        SimDecorator_1$1.Sim,
        __metadata$1("design:paramtypes", [])
    ], ViewService);
    return ViewService;
}());
ViewService$1.ViewService = ViewService;

var HttpService$1 = {};

var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(HttpService$1, "__esModule", { value: true });
HttpService$1.HttpService = void 0;
var SimDecorator_1 = SimDecorator;
var HttpService = (function () {
    function HttpService() {
    }
    HttpService = __decorate([
        SimDecorator_1.Sim,
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());
HttpService$1.HttpService = HttpService;

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
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
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(SimpleBootFront$1, "__esModule", { value: true });
var SimpleBootFront_2 = SimpleBootFront$1.SimpleBootFront = void 0;
var SimFrontOption_1 = SimFrontOption;
var Component_1 = Component;
var Script_1 = Script;
var DomRender_1 = DomRender$1;
var SimAtomic_1 = SimAtomic$1;
var SimpleApplication_1 = SimpleApplication$1;
var Intent_1 = Intent;
var Navigation_1 = Navigation$1;
var ViewService_1 = ViewService$1;
var HttpService_1 = HttpService$1;
var SimstanceManager_1 = SimstanceManager$1;
var IntentManager_1 = IntentManager$1;
var RouterManager_1 = RouterManager$1;
var RawSet_1 = RawSet$1;
var RawSetType_1 = RawSetType;
var ComponentSet_1 = ComponentSet$1;
var SimpleBootFront = (function (_super) {
    __extends(SimpleBootFront, _super);
    function SimpleBootFront(rootRouter, option) {
        var _this = _super.call(this, rootRouter, option) || this;
        _this.rootRouter = rootRouter;
        _this.option = option;
        _this.domRendoerExcludeProxy = [SimpleApplication_1.SimpleApplication, IntentManager_1.IntentManager, RouterManager_1.RouterManager, SimstanceManager_1.SimstanceManager, SimFrontOption_1.SimFrontOption, Navigation_1.Navigation, ViewService_1.ViewService, HttpService_1.HttpService, HTMLElement];
        _this.domRenderTargetElements = [];
        _this.domRenderTargetAttrs = [];
        _this.domRenderConfig = {
            routerType: 'none',
            window: option.window,
            targetElements: _this.domRenderTargetElements,
            targetAttrs: _this.domRenderTargetAttrs,
            onElementInit: function (name, obj, rawSet, targetElement) {
            },
            onAttrInit: function (attrName, attrValue, obj, rawSet) {
            },
            scripts: { application: _this },
            applyEvents: [{
                    attrName: 'router-link',
                    callBack: function (elements, attrValue, obj) {
                        elements.addEventListener('click', function (event) {
                            var _a;
                            (_a = _this.getSimstanceManager().getOrNewSim(Navigation_1.Navigation)) === null || _a === void 0 ? void 0 : _a.go(attrValue);
                        });
                    }
                }],
            proxyExcludeTyps: _this.domRendoerExcludeProxy,
            operatorAround: {
                drThis: {
                    before: function (data, operatorExecutor) {
                        var _a, _b;
                        if (data && !(data instanceof ComponentSet_1.ComponentSet) && operatorExecutor.elementSource.element.getAttribute("".concat(RawSet_1.RawSet.DR_THIS_NAME, ":type")) === 'outlet') {
                            var component = (0, Component_1.getComponent)(data);
                            if (component) {
                                var styles = (_a = component === null || component === void 0 ? void 0 : component.styles) !== null && _a !== void 0 ? _a : [];
                                var template = (_b = component === null || component === void 0 ? void 0 : component.template) !== null && _b !== void 0 ? _b : '';
                                return new ComponentSet_1.ComponentSet(data, template, styles, { objPath: null });
                            }
                            else {
                                return undefined;
                            }
                        }
                        return data;
                    }
                }
            }
        };
        _this.option.window.__dirname = 'simple-boot-front__dirname';
        option.proxy = {
            onProxy: function (it) { return _this.createDomRender(it); }
        };
        return _this;
    }
    SimpleBootFront.prototype.getComponentInnerHtml = function (targetObj, id) {
        var _a, _b;
        var component = (0, Component_1.getComponent)(targetObj);
        var styles = RawSet_1.RawSet.generateStyleTransform((_a = component === null || component === void 0 ? void 0 : component.styles) !== null && _a !== void 0 ? _a : [], id);
        var template = ((_b = component === null || component === void 0 ? void 0 : component.template) !== null && _b !== void 0 ? _b : '');
        return styles + template;
    };
    SimpleBootFront.prototype.createDomRender = function (obj) {
        var component = (0, Component_1.getComponent)(obj);
        if (component && typeof obj === 'object') {
            return DomRender_1.DomRender.run(obj, undefined, this.domRenderConfig);
        }
        return obj;
    };
    SimpleBootFront.prototype.initRun = function (otherInstanceSim) {
        var _this = this;
        var simstanceManager = _super.prototype.run.call(this, otherInstanceSim);
        this.initDomRenderScripts();
        this.initDomRenderTargetElements();
        this.navigation = this.simstanceManager.getOrNewSim(Navigation_1.Navigation);
        this.initWriteRootRouter();
        this.option.window.addEventListener('intent', function (event) {
            var cevent = event;
            _this.publishIntent(new Intent_1.Intent(cevent.detail.uri, cevent.detail.data, event));
        });
        this.option.window.addEventListener('popstate', function (event) {
            var intent = new Intent_1.Intent(_this.navigation.url || '/');
            _this.routing(intent).then(function (it) {
                _this.afterSetting();
            });
        });
        return simstanceManager;
    };
    SimpleBootFront.prototype.initWriteRootRouter = function () {
        var _a;
        var routerAtomic = this.writeRootRouter();
        var target = this.option.window.document.querySelector(this.option.selector);
        if (target && routerAtomic && routerAtomic.value) {
            var val = routerAtomic.value;
            var domRenderProxy = val._DomRender_proxy;
            domRenderProxy.initRender(target);
            (_a = val === null || val === void 0 ? void 0 : val.onInit) === null || _a === void 0 ? void 0 : _a.call(val);
        }
    };
    SimpleBootFront.prototype.writeRootRouter = function () {
        var routerAtomic = new SimAtomic_1.SimAtomic(this.rootRouter, this.getSimstanceManager());
        var target = this.option.window.document.querySelector(this.option.selector);
        if (target && routerAtomic.value) {
            var id = 'root-router';
            var startEndPoint = RawSet_1.RawSet.createStartEndPoint(id, RawSetType_1.RawSetType.TARGET_ELEMENT, this.domRenderConfig);
            target.innerHTML = '';
            target.appendChild(startEndPoint.start);
            target.insertAdjacentHTML('beforeend', this.getComponentInnerHtml(this.rootRouter, id));
            target.appendChild(startEndPoint.end);
        }
        return routerAtomic;
    };
    SimpleBootFront.prototype.goRouting = function (url) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var intent, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.navigation.goNoPopStateEvent(url);
                        intent = new Intent_1.Intent((_a = this.navigation.url) !== null && _a !== void 0 ? _a : '');
                        return [4, this.routing(intent)];
                    case 1:
                        data = _b.sent();
                        this.afterSetting();
                        return [2, data];
                }
            });
        });
    };
    SimpleBootFront.prototype.runRouting = function (otherInstanceSim, url) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var intent, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.initRun(otherInstanceSim);
                        if (url) {
                            this.navigation.goNoPopStateEvent(url);
                        }
                        intent = new Intent_1.Intent((_a = this.navigation.url) !== null && _a !== void 0 ? _a : '');
                        return [4, this.routing(intent)];
                    case 1:
                        data = _b.sent();
                        this.afterSetting();
                        return [2, data];
                }
            });
        });
    };
    SimpleBootFront.prototype.run = function (otherInstanceSim, url) {
        var simstanceManager = this.initRun(otherInstanceSim);
        if (url) {
            this.navigation.go(url);
        }
        this.option.window.dispatchEvent(new Event('popstate'));
        return simstanceManager;
    };
    SimpleBootFront.prototype.afterSetting = function () {
        var _this = this;
        this.option.window.document.querySelectorAll('[router-link]').forEach(function (it) {
            var _a, _b, _c, _d;
            var link = it.getAttribute('router-link');
            if (link) {
                var activeClasss = it.getAttribute('router-active-class');
                var aClasss = activeClasss === null || activeClasss === void 0 ? void 0 : activeClasss.split(',');
                var inActiveClasss = it.getAttribute('router-inactive-class');
                var iClasss = inActiveClasss === null || inActiveClasss === void 0 ? void 0 : inActiveClasss.split(',');
                if (_this.navigation.path === link) {
                    if (aClasss && aClasss.length > 0) {
                        (_a = it.classList).add.apply(_a, aClasss);
                    }
                    if (iClasss && iClasss.length > 0) {
                        (_b = it.classList).remove.apply(_b, iClasss);
                    }
                }
                else {
                    if (aClasss && aClasss.length > 0) {
                        (_c = it.classList).remove.apply(_c, aClasss);
                    }
                    if (iClasss && iClasss.length > 0) {
                        (_d = it.classList).add.apply(_d, iClasss);
                    }
                }
            }
        });
    };
    SimpleBootFront.prototype.initDomRenderScripts = function () {
        var _this = this;
        var simstanceManager = this.simstanceManager;
        Script_1.scripts.forEach(function (val, name) {
            _this.domRenderConfig.scripts[name] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var obj;
                try {
                    obj = simstanceManager.getOrNewSim(val);
                }
                catch (e) {
                    obj = simstanceManager.newSim(val);
                }
                var render = this.__render;
                var scriptRunnable = obj;
                if (render.rawset) {
                    scriptRunnable.rawSets.set(render.rawset, this);
                }
                return scriptRunnable.run.apply(scriptRunnable, args);
            };
        });
    };
    SimpleBootFront.prototype.initDomRenderTargetElements = function () {
        var _this = this;
        var selectors = Component_1.componentSelectors;
        selectors.forEach(function (val, name) {
            var component = (0, Component_1.getComponent)(val);
            var items = RawSet_1.RawSet.createComponentTargetElement(name, function (e, obj, r, counstructorParam) {
                var newSim;
                if (counstructorParam === null || counstructorParam === void 0 ? void 0 : counstructorParam.length) {
                    newSim = new (val.bind.apply(val, __spreadArray([void 0], counstructorParam, false)))();
                }
                else {
                    newSim = _this.simstanceManager.newSim(val);
                }
                return newSim;
            }, component === null || component === void 0 ? void 0 : component.template, component === null || component === void 0 ? void 0 : component.styles);
            _this.domRenderTargetElements.push(items);
        });
    };
    SimpleBootFront.prototype.getSimstanceManager = function () {
        return this.simstanceManager;
    };
    SimpleBootFront.prototype.go = function (url) {
        var _a;
        (_a = this.getSimstanceManager().getOrNewSim(Navigation_1.Navigation)) === null || _a === void 0 ? void 0 : _a.go(url);
    };
    return SimpleBootFront;
}(SimpleApplication_1.SimpleApplication));
SimpleBootFront_2 = SimpleBootFront$1.SimpleBootFront = SimpleBootFront;

var template$7 = "<modal dr-for-of=\"this.modals\" dr-on-create:arguments=\"[#it#]\"></modal>\n<div class=\"min-h-full min-h-screen flex flex-col\">\n    <nav class=\"bg-gray-800\">\n        <div class=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">\n            <div class=\"flex h-16 items-center justify-between\">\n                <div class=\"flex items-center\">\n                    <button router-link=\"/\" class=\"flex-shrink-0 flex items-center\">\n                        <div>\n                            <img class=\"h-8 w-8\" src=\"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500\" alt=\"Your Company\">\n                        </div>\n                        <div class=\"text-gray-300 ml-3\">\n                            Quiz-log\n                        </div>\n                    </button>\n                    <div class=\"\">\n                        <div class=\"ml-10 flex items-baseline space-x-4\">\n                            <button router-link=\"/market\" class=\"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center\" aria-current=\"page\">\n<!--                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\"-->\n<!--                                     stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">-->\n<!--                                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\"-->\n<!--                                          d=\"M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z\"/>-->\n<!--                                </svg>-->\n                                <img src=\"https://www.clipartmax.com/png/full/51-515413_treasure-chest-clipart.png\" class=\"w-6 h-6\">\n                                <div class=\"ml-3\">\n                                    market\n                                </div>\n                            </button>\n                        </div>\n                    </div>\n                    <div dr-if=\"this.address\" class=\"\">\n                        <div class=\"ml-10 flex items-baseline space-x-4\">\n                            <button router-link=\"/quiz\" class=\"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center\" aria-current=\"page\">\n                                <img src=\"https://www.clipartmax.com/png/full/46-463256_quiz-time-quiz-time.png\" class=\"w-6 h-6\">\n                                <div class=\"ml-3\">\n                                    Quiz\n                                </div>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"hidden md:block\">\n                    <div class=\"ml-4 flex items-center md:ml-6\">\n                        <button dr-if=\"this.address\" class=\"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center\" aria-current=\"page\" dr-event-click=\"this.connectWallet()\">\n                        <div class=\"text-white\">${this.address}$</div>\n                        </button>\n                        <button type=\"button\" class=\"rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800\" dr-event-click=\"this.connectWallet()\">\n                            <span class=\"sr-only\">View notifications</span>\n                            <img class=\"w-6 h-6\" src=\"https://www.clipartmax.com/png/full/201-2010951_metamask-ethereum.png\">\n<!--                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">-->\n<!--                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3\" />-->\n<!--                            </svg>-->\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n\n    <div class=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow pt-10 pb-10\" dr-this=\"this.child\" dr-this:type=\"outlet\" dr-strip=\"false\"></div>\n    <footer class=\"bg-gray-800\">\n        <div class=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">\n            <div class=\"border-t border-slate-900/5 py-1\">\n                <p class=\"mt-3 text-center text-sm leading-6 text-slate-500\">© 2022 Quiz-log Labs Inc. All rights\n                    reserved.</p>\n                <div class=\"mt-3 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700\">\n                    <a href=\"#\">Privacy policy</a>\n                    <div class=\"h-4 w-px bg-slate-500/20\"></div>\n                    <a href=\"#\">Changelog</a></div>\n            </div>\n        </div>\n    </footer>\n    <!--    <header class=\"bg-white shadow\">-->\n    <!--        <div class=\"mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8\">-->\n    <!--            <h1 class=\"text-3xl font-bold tracking-tight text-gray-900\">Dashboard</h1>-->\n    <!--        </div>-->\n    <!--    </header>-->\n    <!--    <main>-->\n    <!--        <div class=\"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8\">-->\n    <!--            &lt;!&ndash; Replace with your content &ndash;&gt;-->\n    <!--            <div class=\"px-4 py-6 sm:px-0\">-->\n    <!--                <div class=\"h-96 rounded-lg border-4 border-dashed border-gray-200\"></div>-->\n    <!--            </div>-->\n    <!--            &lt;!&ndash; /End replace &ndash;&gt;-->\n    <!--        </div>-->\n    <!--    </main>-->\n</div>\n\n\n";

var style$6 = "";

var template$6 = "<div class=\"bg-white\">\n    <div>\n\n        <div class=\"relative z-40 lg:hidden\" role=\"dialog\" aria-modal=\"true\">\n\n            <div class=\"fixed inset-0 bg-black bg-opacity-25\"></div>\n\n            <div class=\"fixed inset-0 z-40 flex\">\n\n                <div class=\"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl\">\n                    <div class=\"flex items-center justify-between px-4\">\n                        <h2 class=\"text-lg font-medium text-gray-900\">Filters</h2>\n                        <button type=\"button\" class=\"-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400\">\n                            <span class=\"sr-only\">Close menu</span>\n                            <!-- Heroicon name: outline/x-mark -->\n                            <svg class=\"h-6 w-6\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n                                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"/>\n                            </svg>\n                        </button>\n                    </div>\n\n                    <!-- Filters -->\n                    <form class=\"mt-4 border-t border-gray-200\">\n                        <h3 class=\"sr-only\">Categories</h3>\n                        <ul role=\"list\" class=\"px-2 py-3 font-medium text-gray-900\">\n                            <li>\n                                <a href=\"#\" class=\"block px-2 py-3\">Totes</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\" class=\"block px-2 py-3\">Backpacks</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\" class=\"block px-2 py-3\">Travel Bags</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\" class=\"block px-2 py-3\">Hip Bags</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\" class=\"block px-2 py-3\">Laptop Sleeves</a>\n                            </li>\n                        </ul>\n\n                        <div class=\"border-t border-gray-200 px-4 py-6\">\n                            <h3 class=\"-mx-2 -my-3 flow-root\">\n                                <!-- Expand/collapse section button -->\n                                <button type=\"button\" class=\"flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500\" aria-controls=\"filter-section-mobile-0\" aria-expanded=\"false\">\n                                    <span class=\"font-medium text-gray-900\">Color</span>\n                                    <span class=\"ml-6 flex items-center\">\n                    <!--\n                      Expand icon, show/hide based on section open state.\n\n                      Heroicon name: mini/plus\n                    -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path d=\"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z\"/>\n                    </svg>\n                                        <!--\n                                          Collapse icon, show/hide based on section open state.\n\n                                          Heroicon name: mini/minus\n                                        -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path fill-rule=\"evenodd\" d=\"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z\" clip-rule=\"evenodd\"/>\n                    </svg>\n                  </span>\n                                </button>\n                            </h3>\n                            <!-- Filter section, show/hide based on section state. -->\n                            <div class=\"pt-6\" id=\"filter-section-mobile-0\">\n                                <div class=\"space-y-6\">\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-color-0\" name=\"color[]\" value=\"white\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-color-0\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">White</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-color-1\" name=\"color[]\" value=\"beige\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-color-1\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Beige</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-color-2\" name=\"color[]\" value=\"blue\" type=\"checkbox\" checked=\"checked\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-color-2\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Blue</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-color-3\" name=\"color[]\" value=\"brown\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-color-3\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Brown</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-color-4\" name=\"color[]\" value=\"green\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-color-4\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Green</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-color-5\" name=\"color[]\" value=\"purple\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-color-5\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Purple</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"border-t border-gray-200 px-4 py-6\">\n                            <h3 class=\"-mx-2 -my-3 flow-root\">\n                                <!-- Expand/collapse section button -->\n                                <button type=\"button\" class=\"flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500\" aria-controls=\"filter-section-mobile-1\" aria-expanded=\"false\">\n                                    <span class=\"font-medium text-gray-900\">Category</span>\n                                    <span class=\"ml-6 flex items-center\">\n                    <!--\n                      Expand icon, show/hide based on section open state.\n\n                      Heroicon name: mini/plus\n                    -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path d=\"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z\"/>\n                    </svg>\n                                        <!--\n                                          Collapse icon, show/hide based on section open state.\n\n                                          Heroicon name: mini/minus\n                                        -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path fill-rule=\"evenodd\" d=\"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z\" clip-rule=\"evenodd\"/>\n                    </svg>\n                  </span>\n                                </button>\n                            </h3>\n                            <!-- Filter section, show/hide based on section state. -->\n                            <div class=\"pt-6\" id=\"filter-section-mobile-1\">\n                                <div class=\"space-y-6\">\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-category-0\" name=\"category[]\" value=\"new-arrivals\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-category-0\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">New Arrivals</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-category-1\" name=\"category[]\" value=\"sale\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-category-1\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Sale</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-category-2\" name=\"category[]\" value=\"travel\" type=\"checkbox\" checked=\"checked\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-category-2\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Travel</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-category-3\" name=\"category[]\" value=\"organization\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-category-3\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Organization</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-category-4\" name=\"category[]\" value=\"accessories\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-category-4\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">Accessories</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"border-t border-gray-200 px-4 py-6\">\n                            <h3 class=\"-mx-2 -my-3 flow-root\">\n                                <!-- Expand/collapse section button -->\n                                <button type=\"button\" class=\"flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500\" aria-controls=\"filter-section-mobile-2\" aria-expanded=\"false\">\n                                    <span class=\"font-medium text-gray-900\">Size</span>\n                                    <span class=\"ml-6 flex items-center\">\n                    <!--\n                      Expand icon, show/hide based on section open state.\n\n                      Heroicon name: mini/plus\n                    -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path d=\"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z\"/>\n                    </svg>\n                                        <!--\n                                          Collapse icon, show/hide based on section open state.\n\n                                          Heroicon name: mini/minus\n                                        -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path fill-rule=\"evenodd\" d=\"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z\" clip-rule=\"evenodd\"/>\n                    </svg>\n                  </span>\n                                </button>\n                            </h3>\n                            <!-- Filter section, show/hide based on section state. -->\n                            <div class=\"pt-6\" id=\"filter-section-mobile-2\">\n                                <div class=\"space-y-6\">\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-size-0\" name=\"size[]\" value=\"2l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-size-0\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">2L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-size-1\" name=\"size[]\" value=\"6l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-size-1\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">6L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-size-2\" name=\"size[]\" value=\"12l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-size-2\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">12L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-size-3\" name=\"size[]\" value=\"18l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-size-3\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">18L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-size-4\" name=\"size[]\" value=\"20l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-size-4\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">20L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-mobile-size-5\" name=\"size[]\" value=\"40l\" type=\"checkbox\" checked=\"checked\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-mobile-size-5\" class=\"ml-3 min-w-0 flex-1 text-gray-500\">40L</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n        <main class=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">\n            <div class=\"flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6\">\n                <h1 class=\"text-4xl font-bold tracking-tight text-gray-900\">New Arrivals</h1>\n\n                <div class=\"flex items-center\">\n                    <div class=\"relative inline-block text-left\">\n                        <div>\n                            <button type=\"button\" class=\"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900\" id=\"menu-button\" aria-expanded=\"false\" aria-haspopup=\"true\">\n                                Sort\n                                <!-- Heroicon name: mini/chevron-down -->\n                                <svg class=\"-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                                    <path fill-rule=\"evenodd\" d=\"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z\" clip-rule=\"evenodd\"/>\n                                </svg>\n                            </button>\n                        </div>\n\n\n                    </div>\n\n                    <button type=\"button\" class=\"-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7\">\n                        <span class=\"sr-only\">View grid</span>\n                        <!-- Heroicon name: mini/squares-2x2 -->\n                        <svg class=\"h-5 w-5\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                            <path fill-rule=\"evenodd\" d=\"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z\" clip-rule=\"evenodd\"/>\n                        </svg>\n                    </button>\n                    <button type=\"button\" class=\"-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden\">\n                        <span class=\"sr-only\">Filters</span>\n                        <!-- Heroicon name: mini/funnel -->\n                        <svg class=\"h-5 w-5\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                            <path fill-rule=\"evenodd\" d=\"M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z\" clip-rule=\"evenodd\"/>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n\n            <section aria-labelledby=\"products-heading\" class=\"pt-6 pb-24\">\n                <h2 id=\"products-heading\" class=\"sr-only\">Products</h2>\n\n                <div class=\"grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4\">\n                    <!-- Filters -->\n                    <form class=\"hidden lg:block\">\n                        <h3 class=\"sr-only\">Categories</h3>\n                        <ul role=\"list\" class=\"space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900\">\n                            <li>\n                                <a href=\"#\">Totes</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\">Backpacks</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\">Travel Bags</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\">Hip Bags</a>\n                            </li>\n\n                            <li>\n                                <a href=\"#\">Laptop Sleeves</a>\n                            </li>\n                        </ul>\n\n                        <div class=\"border-b border-gray-200 py-6\">\n                            <h3 class=\"-my-3 flow-root\">\n                                <!-- Expand/collapse section button -->\n                                <button type=\"button\" class=\"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500\" aria-controls=\"filter-section-0\" aria-expanded=\"false\">\n                                    <span class=\"font-medium text-gray-900\">Color</span>\n                                    <span class=\"ml-6 flex items-center\">\n                    <!--\n                      Expand icon, show/hide based on section open state.\n\n                      Heroicon name: mini/plus\n                    -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path d=\"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z\"/>\n                    </svg>\n                                        <!--\n                                          Collapse icon, show/hide based on section open state.\n\n                                          Heroicon name: mini/minus\n                                        -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path fill-rule=\"evenodd\" d=\"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z\" clip-rule=\"evenodd\"/>\n                    </svg>\n                  </span>\n                                </button>\n                            </h3>\n                            <!-- Filter section, show/hide based on section state. -->\n                            <div class=\"pt-6\" id=\"filter-section-0\">\n                                <div class=\"space-y-4\">\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-color-0\" name=\"color[]\" value=\"white\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-color-0\" class=\"ml-3 text-sm text-gray-600\">White</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-color-1\" name=\"color[]\" value=\"beige\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-color-1\" class=\"ml-3 text-sm text-gray-600\">Beige</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-color-2\" name=\"color[]\" value=\"blue\" type=\"checkbox\" checked=\"checked\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-color-2\" class=\"ml-3 text-sm text-gray-600\">Blue</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-color-3\" name=\"color[]\" value=\"brown\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-color-3\" class=\"ml-3 text-sm text-gray-600\">Brown</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-color-4\" name=\"color[]\" value=\"green\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-color-4\" class=\"ml-3 text-sm text-gray-600\">Green</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-color-5\" name=\"color[]\" value=\"purple\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-color-5\" class=\"ml-3 text-sm text-gray-600\">Purple</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"border-b border-gray-200 py-6\">\n                            <h3 class=\"-my-3 flow-root\">\n                                <!-- Expand/collapse section button -->\n                                <button type=\"button\" class=\"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500\" aria-controls=\"filter-section-1\" aria-expanded=\"false\">\n                                    <span class=\"font-medium text-gray-900\">Category</span>\n                                    <span class=\"ml-6 flex items-center\">\n                    <!--\n                      Expand icon, show/hide based on section open state.\n\n                      Heroicon name: mini/plus\n                    -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path d=\"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z\"/>\n                    </svg>\n                                        <!--\n                                          Collapse icon, show/hide based on section open state.\n\n                                          Heroicon name: mini/minus\n                                        -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path fill-rule=\"evenodd\" d=\"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z\" clip-rule=\"evenodd\"/>\n                    </svg>\n                  </span>\n                                </button>\n                            </h3>\n                            <!-- Filter section, show/hide based on section state. -->\n                            <div class=\"pt-6\" id=\"filter-section-1\">\n                                <div class=\"space-y-4\">\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-category-0\" name=\"category[]\" value=\"new-arrivals\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-category-0\" class=\"ml-3 text-sm text-gray-600\">New Arrivals</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-category-1\" name=\"category[]\" value=\"sale\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-category-1\" class=\"ml-3 text-sm text-gray-600\">Sale</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-category-2\" name=\"category[]\" value=\"travel\" type=\"checkbox\" checked=\"checked\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-category-2\" class=\"ml-3 text-sm text-gray-600\">Travel</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-category-3\" name=\"category[]\" value=\"organization\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-category-3\" class=\"ml-3 text-sm text-gray-600\">Organization</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-category-4\" name=\"category[]\" value=\"accessories\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-category-4\" class=\"ml-3 text-sm text-gray-600\">Accessories</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"border-b border-gray-200 py-6\">\n                            <h3 class=\"-my-3 flow-root\">\n                                <!-- Expand/collapse section button -->\n                                <button type=\"button\" class=\"flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500\" aria-controls=\"filter-section-2\" aria-expanded=\"false\">\n                                    <span class=\"font-medium text-gray-900\">Size</span>\n                                    <span class=\"ml-6 flex items-center\">\n                    <!--\n                      Expand icon, show/hide based on section open state.\n\n                      Heroicon name: mini/plus\n                    -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path d=\"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z\"/>\n                    </svg>\n                                        <!--\n                                          Collapse icon, show/hide based on section open state.\n\n                                          Heroicon name: mini/minus\n                                        -->\n                    <svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                      <path fill-rule=\"evenodd\" d=\"M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z\" clip-rule=\"evenodd\"/>\n                    </svg>\n                  </span>\n                                </button>\n                            </h3>\n                            <!-- Filter section, show/hide based on section state. -->\n                            <div class=\"pt-6\" id=\"filter-section-2\">\n                                <div class=\"space-y-4\">\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-size-0\" name=\"size[]\" value=\"2l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-size-0\" class=\"ml-3 text-sm text-gray-600\">2L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-size-1\" name=\"size[]\" value=\"6l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-size-1\" class=\"ml-3 text-sm text-gray-600\">6L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-size-2\" name=\"size[]\" value=\"12l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-size-2\" class=\"ml-3 text-sm text-gray-600\">12L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-size-3\" name=\"size[]\" value=\"18l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-size-3\" class=\"ml-3 text-sm text-gray-600\">18L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-size-4\" name=\"size[]\" value=\"20l\" type=\"checkbox\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-size-4\" class=\"ml-3 text-sm text-gray-600\">20L</label>\n                                    </div>\n\n                                    <div class=\"flex items-center\">\n                                        <input id=\"filter-size-5\" name=\"size[]\" value=\"40l\" type=\"checkbox\" checked=\"checked\" class=\"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500\">\n                                        <label for=\"filter-size-5\" class=\"ml-3 text-sm text-gray-600\">40L</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n\n                    <!-- Product grid -->\n                    <div class=\"lg:col-span-3\">\n                        <!-- Replace with your content -->\n                        <div class=\"h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full\">\n                            <img src=\"${this.avatarService.randomAvatarUrl()}$\">\n                        </div>\n                        <!-- /End replace -->\n                    </div>\n                </div>\n            </section>\n        </main>\n    </div>\n</div>\n";

var style$5 = "";

var AvatarService = /** @class */ (function () {
    function AvatarService() {
        this.sprites = [
            'adventurer', 'adventurer-neutral', 'avataaars', 'big-ears', 'big-ears-neutral',
            'big-smile', 'bottts', 'croodles', 'croodles-neutral', 'identicon', 'initials',
            'micah', 'miniavs', 'open-peeps', 'personas', 'pixel-art', 'pixel-art-neutral'
        ];
    }
    AvatarService.prototype.randomAvatarUrl = function () {
        return "https://avatars.dicebear.com/api/".concat(this.sprites[Math.floor(Math.random() * this.sprites.length)], "/").concat(Math.random(), ".svg");
    };
    AvatarService.prototype.randomAvatarUrls = function (count) {
        var _this = this;
        return Array.from({ length: count }, function () { return _this.randomAvatarUrl(); });
    };
    AvatarService.prototype.randomProfile = function () {
        return this.randomProfiles().then(function (it) { return it.results[0]; });
    };
    AvatarService.prototype.randomProfiles = function (results) {
        var url = new URL('/api/', 'https://randomuser.me');
        if (results) {
            url.searchParams.append('results', results.toString());
        }
        return fetch(url).then(function (it) { return it.json(); });
    };
    AvatarService = __decorate$5([
        SimDecorator.Sim
    ], AvatarService);
    return AvatarService;
}());

var Profile = /** @class */ (function () {
    function Profile(avatarService) {
        this.avatarService = avatarService;
        this.name = 'Profile';
        this.toggle = true;
        console.log('Profile constructor home');
    }
    Profile.prototype.onCreateRender = function () {
        console.log('Profile!');
    };
    Profile.prototype.onInitRender = function () {
        console.log('Profile--------------');
    };
    Profile = __decorate$5([
        SimDecorator.Sim({}),
        Component.Component({
            template: template$6,
            styles: [style$5]
        }),
        __metadata$5("design:paramtypes", [AvatarService])
    ], Profile);
    return Profile;
}());

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray$9(__spreadArray$9([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config$1 = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray$9([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray$9([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

var context = null;
function errorContext(cb) {
    if (config$1.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends$n(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends$n(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config$1.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config$1.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends$n(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends$n(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

var RandomUtils$1 = {};

var ValidUtils$1 = {};

Object.defineProperty(ValidUtils$1, "__esModule", { value: true });
ValidUtils$1.ValidUtils = void 0;
var ValidUtils = (function () {
    function ValidUtils() {
    }
    ValidUtils.isNullOrUndefined = function (data) {
        return data == null || undefined === data;
    };
    ValidUtils.isNotNullUndefined = function (data) {
        return data !== null && data !== undefined;
    };
    ValidUtils.isNull = function (data) {
        return data === null;
    };
    ValidUtils.isUndefined = function (data) {
        return data === undefined;
    };
    ValidUtils.isArray = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Array]';
        }
    };
    ValidUtils.isNumber = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Number]';
        }
    };
    ValidUtils.isString = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object String]';
        }
    };
    ValidUtils.isFunction = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Function]';
        }
    };
    ValidUtils.isObject = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Object]';
        }
    };
    ValidUtils.isMap = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Map]';
        }
    };
    return ValidUtils;
}());
ValidUtils$1.ValidUtils = ValidUtils;

Object.defineProperty(RandomUtils$1, "__esModule", { value: true });
var RandomUtils_2 = RandomUtils$1.RandomUtils = void 0;
var ValidUtils_1 = ValidUtils$1;
var RandomUtils = (function () {
    function RandomUtils() {
    }
    RandomUtils.random = function (min, max) {
        if (ValidUtils_1.ValidUtils.isNullOrUndefined(min)) {
            return Math.random();
        }
        else if (!ValidUtils_1.ValidUtils.isNullOrUndefined(min) && ValidUtils_1.ValidUtils.isNullOrUndefined(max)) {
            return Math.random() * (min || 0);
        }
        else {
            return Math.random() * ((max || 0) - (min || 0)) + (min || 0);
        }
    };
    RandomUtils.uuid = function (format) {
        if (format === void 0) { format = 'xxxx-xxxx-xxxx-xxxx'; }
        return format.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    RandomUtils.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    RandomUtils.getRandomString = function (len) {
        var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        var color = '';
        for (var i = 0; i < len; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };
    RandomUtils.d = '';
    return RandomUtils;
}());
RandomUtils_2 = RandomUtils$1.RandomUtils = RandomUtils;

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.subject = new Subject();
    }
    Object.defineProperty(ModalService.prototype, "observable", {
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    ModalService.prototype.next = function (data) {
        this.subject.next(__assign$b(__assign$b({}, data), { uuid: RandomUtils_2.uuid() }));
    };
    ModalService = __decorate$5([
        SimDecorator.Sim
    ], ModalService);
    return ModalService;
}());

var StorageUtils$1 = {};

Object.defineProperty(StorageUtils$1, "__esModule", { value: true });
var StorageUtils_2 = StorageUtils$1.StorageUtils = void 0;
var StorageUtils = /** @class */ (function () {
    function StorageUtils() {
    }
    StorageUtils.setLocalStorageItem = function (k, v, window) {
        if (typeof v === 'object') {
            v = JSON.stringify(v);
        }
        window.localStorage.setItem(k, v);
    };
    StorageUtils.getLocalStorageItem = function (k, window) {
        return window.localStorage.getItem(k);
    };
    StorageUtils.cutLocalStorageItem = function (k, window) {
        var data = StorageUtils.getLocalStorageItem(k, window);
        StorageUtils.removeLocalStorageItem(k, window);
        return data;
    };
    StorageUtils.removeLocalStorageItem = function (k, window) {
        return window.localStorage.removeItem(k);
    };
    StorageUtils.getLocalStorageJsonItem = function (k, window) {
        var item = window.localStorage.getItem(k);
        if (item) {
            try {
                return JSON.parse(item);
            }
            catch (e) {
                return undefined;
            }
        }
        else {
            return undefined;
        }
    };
    StorageUtils.cutLocalStorageJsonItem = function (k, window) {
        var item = StorageUtils.getLocalStorageJsonItem(k, window);
        StorageUtils.removeLocalStorageItem(k, window);
        return item;
    };
    StorageUtils.clearLocalStorage = function (window) {
        window.localStorage.clear();
    };
    return StorageUtils;
}());
StorageUtils_2 = StorageUtils$1.StorageUtils = StorageUtils;

var template$5 = "<div class=\"relative z-10\" aria-labelledby=\"modal-title\" role=\"dialog\" aria-modal=\"true\" dr-event-click=\"this.close($event)\">\n  <div class=\"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity\"></div>\n  <div class=\"fixed inset-0 z-10 overflow-y-auto\">\n    <div class=\"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0\">\n      <div class=\"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg\" dr-event-click=\"$event.stopPropagation();\">\n        <div class=\"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4\">\n          <div class=\"sm:flex sm:items-start\">\n            <div dr-if=\"this.param?.icon === 'danger'\" class=\"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10\">\n              <svg class=\"h-6 w-6 text-red-600\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z\"/>\n              </svg>\n            </div>\n            <div dr-if=\"this.param?.icon === 'info'\" class=\"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"{1.5}\" stroke=\"currentColor\" className=\"w-6 h-6\">\n                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z\"/>\n              </svg>\n            </div>\n            <div dr-if=\"this.param?.icon === 'success'\" class=\"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\"/>\n              </svg>\n            </div>\n            <div dr-if=\"this.param?.icon === 'warning'\" class=\"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-300 sm:mx-0 sm:h-10 sm:w-10\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z\"/>\n              </svg>\n            </div>\n            <div class=\"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left\">\n              <h3 dr-if=\"this.param?.title\" class=\"text-lg font-medium leading-6 text-gray-900\" id=\"modal-title\">${this.param?.title ?? ''}$</h3>\n              <div dr-if=\"this.param?.content\" class=\"mt-2\">\n                <p class=\"text-sm text-gray-500\">${this.param?.content ?? ''}$</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6\">\n<!--          <button                                type=\"button\" class=\"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm\">Deactivate</button>-->\n          <button dr-for-of=\"this.param.buttons\" type=\"button\" dr-event-click=\"#it#?.onClick?.(this)\" dr-class=\"'mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm ' + (#it#.classNames ?? '')\">\n            ${#it#.text}$</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.prototype.onCreateRender = function (param) {
        var _a, _b;
        (_a = param.icon) !== null && _a !== void 0 ? _a : (param.icon = 'info');
        param.buttons = ((_b = param.buttons) !== null && _b !== void 0 ? _b : []).reverse();
        this.param = param;
        console.log('------', param);
    };
    Modal.prototype.close = function () {
        var _a, _b;
        (_b = (_a = this.param) === null || _a === void 0 ? void 0 : _a.close) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Modal = __decorate$5([
        SimDecorator.Sim,
        Component.Component({
            selector: 'modal',
            template: template$5
        })
    ], Modal);
    return Modal;
}());

var template$4 = "\n\n<div>\n    <h1 class=\"text-base font-semibold leading-7 text-indigo-600\">Quiz-log</h1>\n    <h1 class=\"mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl\">Today\n        Rankings <span class=\"text-blue-500\">Top 10</span> USER.</h1>\n    <p class=\"text-lg font-normal text-gray-500 lg:text-xl\">Here at Quiz-log we focus on markets where technology,\n        innovation, and capital can unlock long-term value and drive economic growth.</p>\n    <div class=\"container relative w-full flex gap-6 snap-x overflow-x-auto pb-5 mt-10 overflow-x-auto\">\n        <div class=\"snap-center shrink-0\">\n            <div class=\"shrink-0 w-4 sm:w-48\"></div>\n        </div>\n        <div dr-for-of=\"this.profiles\" class=\"snap-center shrink-0 first:pl-8 last:pr-8\">\n            <div router-link=\"/profile/2\" class=\"cursor-pointer flex flex-col items-center border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 border-gray-700 bg-gray-800 hover:bg-gray-700\">\n                <img class=\"object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg\" src=\"${this.avatarService.randomAvatarUrl()}$\" alt=\"\">\n                <div class=\"flex flex-col justify-between p-4 leading-normal\">\n                    <h5 class=\"mb-2 text-2xl font-bold tracking-tight text-white\">${#it#.login.username}$</h5>\n                    <p class=\"mb-3 font-normal text-gray-400\">#${#it#.login.uuid}$</p>\n                    <div class=\"flex flex-row items-center justify-end\">\n                        <button type=\"button\" class=\"text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center\">profile</button>\n                        <img src=\"https://www.clipartmax.com/png/full/4-44076_irish-clipart-gold-coin-gold-coins-st-patricks-day.png\" class=\"w-10 h-10 m-1\">\n                        <div class=\"text-white\">\n                            ${#it#.registered.age}$\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n        <div class=\"snap-center shrink-0\">\n            <div class=\"shrink-0 w-4 sm:w-48\"></div>\n        </div>\n    </div>\n\n\n    <h1 class=\"mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl mt-10\">Today\n        Rankings <span class=\"text-blue-500\">Season</span> USER.</h1>\n    <div class=\"flex flex-row justify-around\">\n        <div class=\"w-full max-w-md p-4 border rounded-lg shadow-md sm:p-8 bg-gray-800 border-gray-700\">\n            <div class=\"flex items-center justify-between mb-4\">\n                <h5 class=\"text-xl font-bold leading-none text-white\">Ranker 1~10</h5>\n                <a href=\"#\" class=\"text-sm font-medium hover:underline text-blue-500\">\n                    View all\n                </a>\n            </div>\n            <div class=\"flow-root\">\n                <ul role=\"list\" class=\"divide-y divide-gray-700\">\n                    <li dr-for-of=\"this.profiles\" class=\"py-3 sm:py-4\">\n                        <div class=\"flex items-center space-x-4\">\n                            <div class=\"flex-shrink-0\">\n                                <img class=\"w-8 h-8 rounded-full\" src=\"${this.avatarService.randomAvatarUrl()}$\" alt=\"Neil image\">\n                            </div>\n                            <div class=\"flex-1 min-w-0\">\n                                <p class=\"text-sm font-medium truncate text-white\">\n                                    ${#it#.name.first}$\n                                </p>\n                                <p class=\"text-sm truncate text-gray-400\">\n                                    #${#it#.login.md5}$\n                                </p>\n                            </div>\n                            <div class=\"inline-flex items-center text-base font-semibold text-white\">\n\n                                <img src=\"https://www.clipartmax.com/png/full/4-44076_irish-clipart-gold-coin-gold-coins-st-patricks-day.png\" class=\"w-4 h-4 m-1\">\n                                ${#it#.registered.age}$\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"w-full max-w-md p-4 border rounded-lg shadow-md sm:p-8 bg-gray-800 border-gray-700\">\n            <div class=\"flex items-center justify-between mb-4\">\n                <h5 class=\"text-xl font-bold leading-none text-white\">Ranker 11~20</h5>\n                <a href=\"#\" class=\"text-sm font-medium hover:underline text-blue-500\">\n                    View all\n                </a>\n            </div>\n            <div class=\"flow-root\">\n                <ul role=\"list\" class=\"divide-y divide-gray-700\">\n                    <li dr-for-of=\"this.profiles\" class=\"py-3 sm:py-4\">\n                        <div class=\"flex items-center space-x-4\">\n                            <div class=\"flex-shrink-0\">\n                                <img class=\"w-8 h-8 rounded-full\" src=\"${this.avatarService.randomAvatarUrl()}$\" alt=\"Neil image\">\n                            </div>\n                            <div class=\"flex-1 min-w-0\">\n                                <p class=\"text-sm font-medium truncate text-white\">\n                                    ${#it#.name.first}$\n                                </p>\n                                <p class=\"text-sm truncate text-gray-400\">\n                                    #${#it#.login.md5}$\n                                </p>\n                            </div>\n                            <div class=\"inline-flex items-center text-base font-semibold text-white\">\n\n                                <img src=\"https://www.clipartmax.com/png/full/4-44076_irish-clipart-gold-coin-gold-coins-st-patricks-day.png\" class=\"w-4 h-4 m-1\">\n                                ${#it#.registered.age}$\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mt-10 relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3\">\n        <div class=\"flex\">\n            <div class=\"p-0.5\">\n                <svg class=\"h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]\" viewBox=\"0 0 40 40\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z\" class=\"fill-indigo-50 stroke-indigo-500\"></path>\n                    <path d=\"M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336\" class=\"stroke-indigo-500/50\"></path>\n                    <path d=\"M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z\" class=\"stroke-indigo-500\"></path>\n                </svg>\n            </div>\n            <div class=\"ml-6\"><h2 class=\"text-sm font-semibold leading-6 text-slate-900\">Quiz-log?</h2>\n                <p class=\"mt-2 text-sm leading-6 text-slate-700\">일상을 살아가며 짬나는 시간에 암호화폐 및 블록체인 관련 퀴즈를 풀면\n                    포인트를 얻고, 얻은 포인트를 통해 NFT를 구매하거나, 현금화 하는 Q2E</p></div>\n        </div>\n        <div class=\"flex\">\n            <div class=\"p-0.5\">\n                <svg class=\"h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]\" viewBox=\"0 0 40 40\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z\" class=\"fill-indigo-50 stroke-indigo-500\"></path>\n                    <path d=\"M22.25 11.75l-4.5 16.5\" class=\"stroke-indigo-500/50\"></path>\n                    <path d=\"M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5\" class=\"stroke-indigo-500\"></path>\n                </svg>\n            </div>\n            <div class=\"ml-6\"><h2 class=\"text-sm font-semibold leading-6 text-slate-900\">Goals</h2>\n                <p class=\"mt-2 text-sm leading-6 text-slate-700\">퀴즈라는 매체를 통해 효율적으로 블록체인 및 암호화폐 지식을 쌓으며\n                    궁극적으로 시장 전체에 활동적인 유저 증가를 목표로 함.</p></div>\n        </div>\n        <div class=\"flex\">\n            <div class=\"p-0.5\">\n                <svg class=\"h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12]\" viewBox=\"0 0 40 40\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path d=\"M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z\" class=\"fill-indigo-50 stroke-indigo-500\"></path>\n                    <path d=\"M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5\" class=\"stroke-indigo-500/50\"></path>\n                    <path d=\"M31.5 8.5l-23 23\" class=\"stroke-indigo-500\"></path>\n                    <path d=\"M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5\" class=\"stroke-indigo-500\"></path>\n                </svg>\n            </div>\n            <div class=\"ml-6\"><h2 class=\"text-sm font-semibold leading-6 text-slate-900\">Why? X2E</h2>\n                <p class=\"mt-2 text-sm leading-6 text-slate-700\">앱테크의 가장 큰 단점인 출금의 제약인 최소 출금 금액과 기프티콘과 같은\n                    현금화 방식을 제약없는 출금정책을 통해 해결하고자 함.</p></div>\n        </div>\n    </div>\n</div>";

var style$4 = ".container {\n    /*width: 250px;*/\n    /*height: 140px;*/\n    /*overflow: auto;*/\n}\n.container::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n}\n.container::-webkit-scrollbar-thumb {\n    background-color: #808080;\n    border-radius: 10px;\n    background-clip: padding-box;\n    border: 2px solid transparent;\n}\n.container::-webkit-scrollbar-track {\n    background-color: #e0e0e0;\n    border-radius: 10px;\n    box-shadow: inset 0px 0px 2px white;\n}";

var ScriptRunnable$1 = {};

Object.defineProperty(ScriptRunnable$1, "__esModule", { value: true });
var ScriptRunnable_2 = ScriptRunnable$1.ScriptRunnable = void 0;
var ScriptRunnable = (function () {
    function ScriptRunnable() {
        this.rawSets = new Map();
    }
    ScriptRunnable.prototype.render = function () {
        var _this = this;
        this.rawSets.forEach(function (value, key) {
            var _a;
            if (key.isConnected) {
                (_a = value._DomRender_proxy) === null || _a === void 0 ? void 0 : _a.render([key]);
            }
            else {
                _this.rawSets.delete(key);
            }
        });
    };
    return ScriptRunnable;
}());
ScriptRunnable_2 = ScriptRunnable$1.ScriptRunnable = ScriptRunnable;

var ConcatScript = /** @class */ (function (_super) {
    __extends$n(ConcatScript, _super);
    function ConcatScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcatScript.prototype.run = function (data1, data2) {
        return data1 + ' or ' + data2;
    };
    ConcatScript = __decorate$5([
        SimDecorator.Sim,
        Script.Script({
            name: 'concat'
        })
    ], ConcatScript);
    return ConcatScript;
}(ScriptRunnable_2));

var Home = /** @class */ (function () {
    function Home(avatarService) {
        this.avatarService = avatarService;
    }
    Home.prototype.onSimCreate = function () {
        var _this = this;
        this.avatarService.randomProfiles(10).then(function (it) {
            _this.profiles = it.results;
            console.log('profiles', _this.profiles);
        });
    };
    Home.prototype.onCreateRender = function () {
        console.log('!');
    };
    Home.prototype.onInitRender = function () {
        console.log('--------------');
    };
    Home = __decorate$5([
        SimDecorator.Sim({
            using: [ConcatScript]
        }),
        Component.Component({
            template: template$4,
            styles: [style$4]
        }),
        __metadata$5("design:paramtypes", [AvatarService])
    ], Home);
    return Home;
}());

var template$3 = "<div class=\"flex flex-col justify-center items-center\">\n    <div class=\"grid grid-rows-2 grid-flow-col gap-4\">\n        <button dr-for-of=\"$range(6)\" router-link=\"/quiz/1\" class=\"w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700\">\n            <img class=\"p-8 rounded-t-lg\" src=\"https://www.clipartmax.com/png/full/46-463256_quiz-time-quiz-time.png\" alt=\"product image\">\n            <div class=\"px-5 pb-5\">\n                <h5 class=\"text-xl font-semibold tracking-tight text-white\">Crypto Qiuz ${#it#+1}$</h5>\n                <div class=\"flex items-center mt-2.5 mb-5\">\n                    <svg aria-hidden=\"true\" class=\"w-5 h-5 text-yellow-300\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><title>First star</title>\n                        <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path>\n                    </svg>\n                    <svg aria-hidden=\"true\" class=\"w-5 h-5 text-yellow-300\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><title>Second star</title>\n                        <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path>\n                    </svg>\n                    <svg aria-hidden=\"true\" class=\"w-5 h-5 text-yellow-300\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><title>Third star</title>\n                        <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path>\n                    </svg>\n                    <svg aria-hidden=\"true\" class=\"w-5 h-5 text-yellow-300\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><title>Fourth star</title>\n                        <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path>\n                    </svg>\n                    <svg aria-hidden=\"true\" class=\"w-5 h-5 text-yellow-300\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><title>Fifth star</title>\n                        <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\"></path>\n                    </svg>\n                    <span class=\"text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3\">${(#it#+1)}$</span>\n                </div>\n                <div class=\"flex items-center justify-between\">\n                <span class=\"text-3xl font-bold text-white\">\n                    <div class=\"flex flex-row items-center gap-2\">\n                        <img src=\"https://www.clipartmax.com/png/full/4-44076_irish-clipart-gold-coin-gold-coins-st-patricks-day.png\" class=\"w-6 h-6\">\n                       <div>${(#it#+1)*10}$</div>\n                    </div>\n                </span>\n                    <div class=\"focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 text-white\">Start</div>\n                </div>\n            </div>\n        </button>\n    </div>\n    <div class=\"m-5\">\n        <div class=\"inline-flex rounded-md shadow-sm\" role=\"group\">\n            <button type=\"button\" class=\"py-2 px-4 text-sm font-medium rounded-l-lg border focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white\">\n                Step1\n            </button>\n            <button type=\"button\" router-link=\"/market\" class=\"flex flex-row items-center gap-2 py-2 px-4 text-sm font-medium border-t border-b focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white\">\n                <img src=\"https://www.clipartmax.com/png/full/135-1354792_spectator-tickets-sold-at-the-door-only-single-day-ticket-icon-png.png\" class=\"w-4 h-4\">\n                <div>Step2</div>\n            </button>\n            <button type=\"button\" router-link=\"/market\" class=\"flex flex-row items-center gap-2 py-2 px-4 text-sm font-medium rounded-r-md border focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-700 border-gray-600 text-white hover:text-white hover:bg-gray-600 focus:ring-blue-500 focus:text-white\">\n                <img src=\"https://www.clipartmax.com/png/full/135-1354792_spectator-tickets-sold-at-the-door-only-single-day-ticket-icon-png.png\" class=\"w-4 h-4\">\n                <div>Step3</div>\n            </button>\n        </div>\n    </div>\n</div>\n";

var style$3 = "";

var Quiz = /** @class */ (function () {
    function Quiz() {
        this.name = 'Quiz';
        this.toggle = true;
        console.log('Quiz constructor home');
    }
    Quiz.prototype.onCreateRender = function () {
        console.log('Quiz!');
    };
    Quiz.prototype.onInitRender = function () {
        console.log('Quiz--------------');
    };
    Quiz = __decorate$5([
        SimDecorator.Sim,
        Component.Component({
            template: template$3,
            styles: [style$3]
        }),
        __metadata$5("design:paramtypes", [])
    ], Quiz);
    return Quiz;
}());

var template$2 = "<div class=\"bg-white\">\n    <div class=\"mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8\">\n        <div>\n            <h2 class=\"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl\">Technical Specifications</h2>\n            <p class=\"mt-4 text-gray-500\">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>\n\n            <dl class=\"mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8\">\n                <div class=\"border-t border-gray-200 pt-4\">\n                    <dt class=\"font-medium text-gray-900\">Origin</dt>\n                    <dd class=\"mt-2 text-sm text-gray-500\">Designed by Good Goods, Inc.</dd>\n                </div>\n\n                <div class=\"border-t border-gray-200 pt-4\">\n                    <dt class=\"font-medium text-gray-900\">Material</dt>\n                    <dd class=\"mt-2 text-sm text-gray-500\">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>\n                </div>\n\n                <div class=\"border-t border-gray-200 pt-4\">\n                    <dt class=\"font-medium text-gray-900\">Dimensions</dt>\n                    <dd class=\"mt-2 text-sm text-gray-500\">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>\n                </div>\n\n                <div class=\"border-t border-gray-200 pt-4\">\n                    <dt class=\"font-medium text-gray-900\">Finish</dt>\n                    <dd class=\"mt-2 text-sm text-gray-500\">Hand sanded and finished with natural oil</dd>\n                </div>\n\n                <div class=\"border-t border-gray-200 pt-4\">\n                    <dt class=\"font-medium text-gray-900\">Includes</dt>\n                    <dd class=\"mt-2 text-sm text-gray-500\">Wood card tray and 3 refill packs</dd>\n                </div>\n\n                <div class=\"border-t border-gray-200 pt-4\">\n                    <dt class=\"font-medium text-gray-900\">Considerations</dt>\n                    <dd class=\"mt-2 text-sm text-gray-500\">Made from natural materials. Grain and color vary with each item.</dd>\n                </div>\n            </dl>\n        </div>\n        <div class=\"grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8\">\n            <img src=\"${this.avatarService.randomAvatarUrl()}$\" router-link=\"/market/1\" alt=\"Walnut card tray with white powder coated steel divider and 3 punchout holes.\" class=\"rounded-lg bg-gray-100 cursor-pointer\">\n            <img src=\"${this.avatarService.randomAvatarUrl()}$\" router-link=\"/market/2\" alt=\"Top down view of walnut card tray with embedded magnets and card groove.\" class=\"rounded-lg bg-gray-100 cursor-pointer\">\n            <img src=\"${this.avatarService.randomAvatarUrl()}$\" router-link=\"/market/3\" alt=\"Side of walnut card tray with card groove and recessed card area.\" class=\"rounded-lg bg-gray-100 cursor-pointer\">\n            <img src=\"https://www.clipartmax.com/png/full/135-1354792_spectator-tickets-sold-at-the-door-only-single-day-ticket-icon-png.png\" router-link=\"/market/4\" alt=\"Walnut card tray filled with cards and card angled in dedicated groove.\" class=\"rounded-lg bg-gray-100 cursor-pointer\">\n        </div>\n    </div>\n</div>";

var style$2 = "";

var Market = /** @class */ (function () {
    function Market(avatarService) {
        this.avatarService = avatarService;
        this.name = 'Market';
        this.toggle = true;
        console.log('market constructor home');
    }
    Market.prototype.onCreateRender = function () {
        console.log('market!');
    };
    Market.prototype.onInitRender = function () {
        console.log('market--------------');
    };
    Market = __decorate$5([
        SimDecorator.Sim,
        Component.Component({
            template: template$2,
            styles: [style$2]
        }),
        __metadata$5("design:paramtypes", [AvatarService])
    ], Market);
    return Market;
}());

var template$1 = "<!--\n  This example requires some changes to your config:\n\n  ```\n  // tailwind.config.js\n  module.exports = {\n    // ...\n    theme: {\n      extend: {\n        gridTemplateRows: {\n          '[auto,auto,1fr]': 'auto auto 1fr',\n        },\n      },\n    },\n    plugins: [\n      // ...\n      require('@tailwindcss/aspect-ratio'),\n    ],\n  }\n  ```\n-->\n<div class=\"bg-white\">\n    <div class=\"pt-6\">\n        <nav aria-label=\"Breadcrumb\">\n            <ol role=\"list\" class=\"mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8\">\n                <li>\n                    <div class=\"flex items-center\">\n                        <a href=\"#\" class=\"mr-2 text-sm font-medium text-gray-900\">Men</a>\n                        <svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"h-5 w-4 text-gray-300\">\n                            <path d=\"M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z\"/>\n                        </svg>\n                    </div>\n                </li>\n\n                <li>\n                    <div class=\"flex items-center\">\n                        <a href=\"#\" class=\"mr-2 text-sm font-medium text-gray-900\">Clothing</a>\n                        <svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"h-5 w-4 text-gray-300\">\n                            <path d=\"M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z\"/>\n                        </svg>\n                    </div>\n                </li>\n\n                <li class=\"text-sm\">\n                    <a href=\"#\" aria-current=\"page\" class=\"font-medium text-gray-500 hover:text-gray-600\">Basic Tee 6-Pack</a>\n                </li>\n            </ol>\n        </nav>\n\n        <!-- Image gallery -->\n        <div class=\"mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8\">\n<!--            <div class=\"aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block\">-->\n<!--                <img src=\"${this.avatarService.randomAvatarUrl()}$\" alt=\"Two each of gray, white, and black shirts laying flat.\" class=\"h-full w-full object-cover object-center\">-->\n<!--            </div>-->\n<!--            <div class=\"hidden lg:grid lg:grid-cols-1 lg:gap-y-8\">-->\n<!--                <div class=\"aspect-w-3 aspect-h-2 overflow-hidden rounded-lg\">-->\n<!--                    <img src=\"${this.avatarService.randomAvatarUrl()}$\" alt=\"Model wearing plain black basic tee.\" class=\"h-full w-full object-cover object-center\">-->\n<!--                </div>-->\n<!--                <div class=\"aspect-w-3 aspect-h-2 overflow-hidden rounded-lg\">-->\n<!--                    <img src=\"${this.avatarService.randomAvatarUrl()}$\" alt=\"Model wearing plain gray basic tee.\" class=\"h-full w-full object-cover object-center\">-->\n<!--                </div>-->\n<!--            </div>-->\n            <div class=\"aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4\">\n                <img src=\"${this.avatarService.randomAvatarUrl()}$\" alt=\"Model wearing plain white basic tee.\" class=\"h-full w-full object-cover object-center\">\n            </div>\n        </div>\n\n        <!-- Product info -->\n        <div class=\"mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24\">\n            <div class=\"lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8\">\n                <h1 class=\"text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl\">Basic Tee 6-Pack</h1>\n            </div>\n\n            <!-- Options -->\n            <div class=\"mt-4 lg:row-span-3 lg:mt-0\">\n                <h2 class=\"sr-only\">Product information</h2>\n                <p class=\"text-3xl tracking-tight text-gray-900\">$192</p>\n\n                <!-- Reviews -->\n                <div class=\"mt-6\">\n                    <h3 class=\"sr-only\">Reviews</h3>\n                    <div class=\"flex items-center\">\n                        <div class=\"flex items-center\">\n                            <!--\n                              Heroicon name: mini/star\n\n                              Active: \"text-gray-900\", Default: \"text-gray-200\"\n                            -->\n                            <svg class=\"text-gray-900 h-5 w-5 flex-shrink-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\" d=\"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z\" clip-rule=\"evenodd\"/>\n                            </svg>\n\n                            <!-- Heroicon name: mini/star -->\n                            <svg class=\"text-gray-900 h-5 w-5 flex-shrink-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\" d=\"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z\" clip-rule=\"evenodd\"/>\n                            </svg>\n\n                            <!-- Heroicon name: mini/star -->\n                            <svg class=\"text-gray-900 h-5 w-5 flex-shrink-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\" d=\"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z\" clip-rule=\"evenodd\"/>\n                            </svg>\n\n                            <!-- Heroicon name: mini/star -->\n                            <svg class=\"text-gray-900 h-5 w-5 flex-shrink-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\" d=\"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z\" clip-rule=\"evenodd\"/>\n                            </svg>\n\n                            <!-- Heroicon name: mini/star -->\n                            <svg class=\"text-gray-200 h-5 w-5 flex-shrink-0\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n                                <path fill-rule=\"evenodd\" d=\"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z\" clip-rule=\"evenodd\"/>\n                            </svg>\n                        </div>\n                        <p class=\"sr-only\">4 out of 5 stars</p>\n                        <a href=\"#\" class=\"ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500\">117 reviews</a>\n                    </div>\n                </div>\n\n                <form class=\"mt-10\">\n                    <!-- Colors -->\n                    <div>\n                        <h3 class=\"text-sm font-medium text-gray-900\">Color</h3>\n\n                        <fieldset class=\"mt-4\">\n                            <legend class=\"sr-only\">Choose a color</legend>\n                            <div class=\"flex items-center space-x-3\">\n                                <!--\n                                  Active and Checked: \"ring ring-offset-1\"\n                                  Not Active and Checked: \"ring-2\"\n                                -->\n                                <label class=\"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400\">\n                                    <input type=\"radio\" name=\"color-choice\" value=\"White\" class=\"sr-only\" aria-labelledby=\"color-choice-0-label\">\n                                    <span id=\"color-choice-0-label\" class=\"sr-only\"> White </span>\n                                    <span aria-hidden=\"true\" class=\"h-8 w-8 bg-white border border-black border-opacity-10 rounded-full\"></span>\n                                </label>\n\n                                <!--\n                                  Active and Checked: \"ring ring-offset-1\"\n                                  Not Active and Checked: \"ring-2\"\n                                -->\n                                <label class=\"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400\">\n                                    <input type=\"radio\" name=\"color-choice\" value=\"Gray\" class=\"sr-only\" aria-labelledby=\"color-choice-1-label\">\n                                    <span id=\"color-choice-1-label\" class=\"sr-only\"> Gray </span>\n                                    <span aria-hidden=\"true\" class=\"h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full\"></span>\n                                </label>\n\n                                <!--\n                                  Active and Checked: \"ring ring-offset-1\"\n                                  Not Active and Checked: \"ring-2\"\n                                -->\n                                <label class=\"-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900\">\n                                    <input type=\"radio\" name=\"color-choice\" value=\"Black\" class=\"sr-only\" aria-labelledby=\"color-choice-2-label\">\n                                    <span id=\"color-choice-2-label\" class=\"sr-only\"> Black </span>\n                                    <span aria-hidden=\"true\" class=\"h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full\"></span>\n                                </label>\n                            </div>\n                        </fieldset>\n                    </div>\n\n                    <!-- Sizes -->\n                    <div class=\"mt-10\">\n                        <div class=\"flex items-center justify-between\">\n                            <h3 class=\"text-sm font-medium text-gray-900\">Size</h3>\n                            <a href=\"#\" class=\"text-sm font-medium text-indigo-600 hover:text-indigo-500\">Size guide</a>\n                        </div>\n\n                        <fieldset class=\"mt-4\">\n                            <legend class=\"sr-only\">Choose a size</legend>\n                            <div class=\"grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4\">\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"XXS\" disabled=\"disabled\" class=\"sr-only\" aria-labelledby=\"size-choice-0-label\">\n                                    <span id=\"size-choice-0-label\">XXS</span>\n\n                                    <span aria-hidden=\"true\" class=\"pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200\">\n                    <svg class=\"absolute inset-0 h-full w-full stroke-2 text-gray-200\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" stroke=\"currentColor\">\n                      <line x1=\"0\" y1=\"100\" x2=\"100\" y2=\"0\" vector-effect=\"non-scaling-stroke\"/>\n                    </svg>\n                  </span>\n                                </label>\n\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"XS\" class=\"sr-only\" aria-labelledby=\"size-choice-1-label\">\n                                    <span id=\"size-choice-1-label\">XS</span>\n\n                                    <!--\n                                      Active: \"border\", Not Active: \"border-2\"\n                                      Checked: \"border-indigo-500\", Not Checked: \"border-transparent\"\n                                    -->\n                                    <span class=\"pointer-events-none absolute -inset-px rounded-md\" aria-hidden=\"true\"></span>\n                                </label>\n\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"S\" class=\"sr-only\" aria-labelledby=\"size-choice-2-label\">\n                                    <span id=\"size-choice-2-label\">S</span>\n\n                                    <!--\n                                      Active: \"border\", Not Active: \"border-2\"\n                                      Checked: \"border-indigo-500\", Not Checked: \"border-transparent\"\n                                    -->\n                                    <span class=\"pointer-events-none absolute -inset-px rounded-md\" aria-hidden=\"true\"></span>\n                                </label>\n\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"M\" class=\"sr-only\" aria-labelledby=\"size-choice-3-label\">\n                                    <span id=\"size-choice-3-label\">M</span>\n\n                                    <!--\n                                      Active: \"border\", Not Active: \"border-2\"\n                                      Checked: \"border-indigo-500\", Not Checked: \"border-transparent\"\n                                    -->\n                                    <span class=\"pointer-events-none absolute -inset-px rounded-md\" aria-hidden=\"true\"></span>\n                                </label>\n\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"L\" class=\"sr-only\" aria-labelledby=\"size-choice-4-label\">\n                                    <span id=\"size-choice-4-label\">L</span>\n\n                                    <!--\n                                      Active: \"border\", Not Active: \"border-2\"\n                                      Checked: \"border-indigo-500\", Not Checked: \"border-transparent\"\n                                    -->\n                                    <span class=\"pointer-events-none absolute -inset-px rounded-md\" aria-hidden=\"true\"></span>\n                                </label>\n\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"XL\" class=\"sr-only\" aria-labelledby=\"size-choice-5-label\">\n                                    <span id=\"size-choice-5-label\">XL</span>\n\n                                    <!--\n                                      Active: \"border\", Not Active: \"border-2\"\n                                      Checked: \"border-indigo-500\", Not Checked: \"border-transparent\"\n                                    -->\n                                    <span class=\"pointer-events-none absolute -inset-px rounded-md\" aria-hidden=\"true\"></span>\n                                </label>\n\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"2XL\" class=\"sr-only\" aria-labelledby=\"size-choice-6-label\">\n                                    <span id=\"size-choice-6-label\">2XL</span>\n\n                                    <!--\n                                      Active: \"border\", Not Active: \"border-2\"\n                                      Checked: \"border-indigo-500\", Not Checked: \"border-transparent\"\n                                    -->\n                                    <span class=\"pointer-events-none absolute -inset-px rounded-md\" aria-hidden=\"true\"></span>\n                                </label>\n\n                                <!-- Active: \"ring-2 ring-indigo-500\" -->\n                                <label class=\"group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer\">\n                                    <input type=\"radio\" name=\"size-choice\" value=\"3XL\" class=\"sr-only\" aria-labelledby=\"size-choice-7-label\">\n                                    <span id=\"size-choice-7-label\">3XL</span>\n\n                                    <!--\n                                      Active: \"border\", Not Active: \"border-2\"\n                                      Checked: \"border-indigo-500\", Not Checked: \"border-transparent\"\n                                    -->\n                                    <span class=\"pointer-events-none absolute -inset-px rounded-md\" aria-hidden=\"true\"></span>\n                                </label>\n                            </div>\n                        </fieldset>\n                    </div>\n\n                    <button type=\"submit\" class=\"mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2\">Add to bag</button>\n                </form>\n            </div>\n\n            <div class=\"py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8\">\n                <!-- Description and details -->\n                <div>\n                    <h3 class=\"sr-only\">Description</h3>\n\n                    <div class=\"space-y-6\">\n                        <p class=\"text-base text-gray-900\">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>\n                    </div>\n                </div>\n\n                <div class=\"mt-10\">\n                    <h3 class=\"text-sm font-medium text-gray-900\">Highlights</h3>\n\n                    <div class=\"mt-4\">\n                        <ul role=\"list\" class=\"list-disc space-y-2 pl-4 text-sm\">\n                            <li class=\"text-gray-400\"><span class=\"text-gray-600\">Hand cut and sewn locally</span></li>\n\n                            <li class=\"text-gray-400\"><span class=\"text-gray-600\">Dyed with our proprietary colors</span></li>\n\n                            <li class=\"text-gray-400\"><span class=\"text-gray-600\">Pre-washed &amp; pre-shrunk</span></li>\n\n                            <li class=\"text-gray-400\"><span class=\"text-gray-600\">Ultra-soft 100% cotton</span></li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div class=\"mt-10\">\n                    <h2 class=\"text-sm font-medium text-gray-900\">Details</h2>\n\n                    <div class=\"mt-4 space-y-6\">\n                        <p class=\"text-sm text-gray-600\">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

var style$1 = "";

var MarketDetail = /** @class */ (function () {
    function MarketDetail(avatarService) {
        this.avatarService = avatarService;
        this.name = 'MarketDetail';
        this.toggle = true;
        console.log('market-detail constructor home');
    }
    MarketDetail.prototype.onCreateRender = function () {
        console.log('market-detail!');
    };
    MarketDetail.prototype.onInitRender = function () {
        console.log('market-detail--------------');
    };
    MarketDetail = __decorate$5([
        SimDecorator.Sim,
        Component.Component({
            template: template$1,
            styles: [style$1]
        }),
        __metadata$5("design:paramtypes", [AvatarService])
    ], MarketDetail);
    return MarketDetail;
}());

var template = "<div class=\"flex flex-col justify-center items-center w-full\">\n    <div>\n        <h2 class=\"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl\">Quiz-log (crypto) #${this.question?.idx}$</h2>\n        <p class=\"mt-4 text-gray-500\">${this.question?.description}$</p>\n\n    </div>\n    <div class=\"m-5 w-full\">\n\n        <h3 class=\"mb-4 font-semibold text-gray-900 dark:text-white\">Select</h3>\n        <ul class=\"items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex\">\n            <li dr-for-of=\"this.question?.answers\" class=\"w-full border-b border-gray-200 sm:border-b-0 sm:border-r\">\n                <div class=\"flex items-center pl-3\">\n                    <input id=\"horizontal-list-radio-license\" type=\"radio\" value=\"\" name=\"list-radio\" class=\"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500\">\n                    <label for=\"horizontal-list-radio-license\" class=\"py-3 ml-2 w-full text-sm font-medium text-gray-900\">${#it#}$ </label>\n                </div>\n            </li>\n        </ul>\n\n    </div>\n    <button type=\"button\" class=\"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\" router-link=\"/quiz\">Submit</button>\n</div>\n";

var style = "";

var QuizDetail = /** @class */ (function () {
    function QuizDetail() {
        this.name = 'quiz-detail';
        this.toggle = true;
        this.questions = [
            { idx: 1, description: '아프리카에서 암호화폐 붐의 원인은 무엇일까요?', answers: ['급격하게 악화되는 지역 물가에 대처', '암호화폐는 아프리카에서 쉽게 채굴됩니다.'], correct: 0 },
            { idx: 2, description: '암호화폐 지갑에 대한 다음 설명 중 올바른 것은?', answers: ['지갑을 소유하는 것은 블록체인 프로젝트에서 돈을 버는 첫 단계입니다.', '지갑은 전혀 중요하지 않다.'], correct: 0 },
            { idx: 3, description: '다음 글이 알맞은 글인가요? \'NFT는 공급망과 결합할 수도 있습니다. 예를 들어 이탈리아에서 생산된 신발의 경우 생산에서 나온 물류 데이터, 수령까지의 배송은 NFT의 형태로 블록체인에 기록될 수 있습니다. 신발이 구매자에게 배송되면, 구매자는 NFT를 스캔하여 신발 및 물류 세부 정보를 확인할 수 있습니다.', answers: ['정답', '틀림'], correct: 0 },
            { idx: 4, description: '2021년 5월 크리스티 경매에서 미국 아티스트 Beeple의 가상 컬렉션(NFT)이 판매되었으며, 경매에서 세계에서 가장 비싼 세 작품 중 하나였습니다.이 작품의 가격은 얼마일까요?', answers: ['$70,000,000', '$70,000'], correct: 0 },
            { idx: 5, description: '2021년 말까지 글로벌 암호화폐 전체 시가 총액은 얼마였습니까?', answers: ['1,580억$', '15억 8천만$'], correct: 0 },
            { idx: 6, description: '"Smart Contract"이란 무엇입니까?', answers: ['미리 설정된 조건이 충족되면 실행할 수 있는 블록체인상의 프로그램', '이용자가 APP 이용을 위해 서명한 동의서'], correct: 0 },
            { idx: 7, description: '다음 글이 알맞은 글인가요? \'프랑스는 암호화폐 규제의 세계적 리더입니다. 프랑스, 암호화폐 서비스를 제공하는 모든 회사는 AMF에 등록되어야 합니다.\'', answers: ['정답', '틀림'], correct: 0 },
            { idx: 8, description: '인도네시아의 암호화폐 거래가 합법화된 최초의 시기는 언제였습니까?', answers: ['2018년 9월', '2008년 9월'], correct: 0 },
            { idx: 9, description: '"다음 글이 알맞은 글인가요? \'메타버스에서는 모든 사람이 가상의 정체성을 갖고 가상 세계에서 생활하고 일할 수 있으며, 쇼핑, 여행, 친구와의 데이트, 동료와의 만남 등 현실 세계와 마찬가지로 메타버스는 디지털로 볼 수 있으며 가상화된 실제 세계입니다.\'"', answers: ['정답', '틀림'], correct: 0 },
            { idx: 10, description: '다음 글이 알맞은 글인가요? \'암호화폐가 많은 주목을 받은 이유는 암호화폐가 새로운 신용 메커니즘을 제공하기 때문입니다. 과거에는 사람들이 은행과 같은 기관을 신뢰했습니다. 이제 사람들은 암호화폐에 대한 블록체인 기술을 신뢰합니다.\'', answers: ['정답', '틀림'], correct: 0 },
            { idx: 11, description: 'Web3.0 세상에서 "GMI"라는 단어를 자주 볼 수 있습니다. 이 단어는 무엇을 의미합니까?', answers: ['Gonna Make It', '글로벌 음악 산업 (Global Music Industry)'], correct: 0 },
            { idx: 12, description: '니모닉에 대한 설명으로 옳은 것은?', answers: ['니모닉은 본인만 이해할 수 있는 비밀번호 프롬프트와 유사합니다.', '니모닉은 공개 키로 은행 카드 번호와 유사합니다.'], correct: 0 },
        ];
        console.log('quiz-detail constructor home');
    }
    QuizDetail.prototype.onCreateRender = function () {
        this.question = this.randomQuestion();
    };
    QuizDetail.prototype.onInitRender = function () {
        console.log('quiz-detail--------------');
    };
    QuizDetail.prototype.randomQuestion = function () {
        return this.questions[Math.floor(Math.random() * this.questions.length)];
    };
    QuizDetail = __decorate$5([
        SimDecorator.Sim,
        Component.Component({
            template: template,
            styles: [style]
        }),
        __metadata$5("design:paramtypes", [])
    ], QuizDetail);
    return QuizDetail;
}());

var Index = /** @class */ (function () {
    function Index(modalService) {
        var _a;
        this.modalService = modalService;
        this.modals = [];
        this.address = (_a = StorageUtils_2.getLocalStorageItem('auth', window)) !== null && _a !== void 0 ? _a : '';
    }
    Index.prototype.onSimCreate = function () {
        var _this = this;
        this.modalService.observable.subscribe(function (it) {
            _this.modals.push(it);
            it.close = function () {
                _this.modals = _this.modals.filter(function (i) { return i.uuid !== it.uuid; });
            };
        });
    };
    //
    Index.prototype.connectWallet = function () {
        var _this = this;
        var _a;
        if (((_a = this.address) === null || _a === void 0 ? void 0 : _a.length) <= 0) {
            if (typeof window.ethereum !== 'undefined') {
                window.ethereum.request({ method: 'eth_requestAccounts' }).then(function (i) {
                    _this.address = i[0];
                    StorageUtils_2.setLocalStorageItem('auth', _this.address, window);
                });
            }
            else {
                this.modalService.next({
                    icon: 'danger', title: '메타마스크 설치 필요', content: '메타마스크 설치가 필요합니다.', buttons: [
                        { text: '설치하기', onClick: function () { return window.open('https://metamask.io/download.html', '_blank'); } },
                        { text: '닫기', classNames: 'text-white bg-red-600', onClick: function (modal) { modal.close(); } }
                    ]
                });
            }
        }
        else {
            this.address = '';
            StorageUtils_2.removeLocalStorageItem('auth', window);
        }
    };
    Index.prototype.canActivate = function (url, module) {
        return __awaiter$j(this, void 0, void 0, function () {
            return __generator$j(this, function (_a) {
                this.child = module;
                console.log('route->', url, module);
                return [2 /*return*/];
            });
        });
    };
    Index = __decorate$5([
        SimDecorator.Sim({
            using: [Modal]
        }),
        Router.Router({
            path: '',
            route: {
                '/': Home,
                '/quiz': Quiz,
                '/quiz/{id}': QuizDetail,
                '/market': Market,
                '/market/{id}': MarketDetail,
                '/profile/{id}': Profile
            }
        }),
        Component.Component({
            template: template$7,
            styles: [style$6]
        }),
        __metadata$5("design:paramtypes", [ModalService])
    ], Index);
    return Index;
}());
var config = new SimFrontOption.SimFrontOption(window).setUrlType(SimFrontOption.UrlType.hash);
// const config = new SimFrontOption(window).setUrlType(UrlType.path);
var simpleApplication = new SimpleBootFront_2(Index, config);
simpleApplication.run();

exports.Index = Index;
//# sourceMappingURL=bundle.js.map
