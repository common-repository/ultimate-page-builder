/*!
 * Ultimate Page Builder v1.0.11 
 * 
 * Author: Emran Ahmed ( https://themehippo.com/ ) 
 * Date: 2018-2-14 19:33:41
 * Released under the MIT license.
 */
webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sanitize_html__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sanitize_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sanitize_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var store = function () {
    function store() {
        _classCallCheck(this, store);

        this.tabs = _upb_tabs;
        this.status = _upb_status;
        this.routes = _upb_routes || [];
        this.fields = _upb_fields || [];
        this.upb_user_inputs_mixin = _upb_user_inputs_mixin || {};

        this.l10n = _upb_l10n;
        this.router_config = _upb_router_config;
        this.devices = _upb_preview_devices;
        this.hidden_devices = _upb_responsive_hidden_devices;
        this.grid = _upb_grid_system;
        this.elements = _upb_registered_elements;
        this.preview = 'upb-preview-frame';
        this.panel = '';
        this.subpanel = '';
        this.sidebarExpanded = true;
        this.currentPreviewDevice = '';
        this._el_id = 0;
    }

    _createClass(store, [{
        key: "isLocal",
        value: function isLocal() {
            var link = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


            if (link.trim() === '') {
                return true;
            }

            var $link = __WEBPACK_IMPORTED_MODULE_2_url___default.a.parse(link.trim(), true);

            return this.l10n.skipHosts.includes($link.host);

            // return $link.host === window.location.host;
        }
    }, {
        key: "isElementRegistered",
        value: function isElementRegistered(tag) {
            return this.elements.includes(tag);
        }
    }, {
        key: "previewDocument",
        value: function previewDocument() {
            return window.frames[this.preview].contentWindow ? window.frames[this.preview].contentWindow.document : window.frames[this.preview].document;
        }
    }, {
        key: "previewWindow",
        value: function previewWindow() {
            return window.frames[this.preview].contentWindow ? window.frames[this.preview].contentWindow : window.frames[this.preview];
        }
    }, {
        key: "reloadPreview",
        value: function reloadPreview() {
            if (window.frames[this.preview].contentWindow) {
                window.frames[this.preview].contentWindow.location.reload(true);
            } else {
                window.frames[this.preview].location.reload(true);
            }
        }
    }, {
        key: "getTabs",
        value: function getTabs() {
            return this.tabs;
        }
    }, {
        key: "addContentsToTab",
        value: function addContentsToTab(tabId) {
            var contents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            this.getTabs().map(function (tab, index) {
                if (tab.id == tabId) {
                    if (_.isArray(contents) && !_.isEmpty(contents)) {
                        contents.map(function (content) {
                            tab.contents.push(content);
                        });
                    }
                }
            });
        }
    }, {
        key: "getContentsOfTab",
        value: function getContentsOfTab(tabId) {
            return this.getTabs().filter(function (tab) {
                return tab.id == tabId;
            });
        }
    }, {
        key: "getSettings",
        value: function getSettings() {
            return this.getContentsOfTab('settings').pop().contents;
        }
    }, {
        key: "getSetting",
        value: function getSetting() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            if (!id) {
                return null;
            }

            var setting = this.getSettings().filter(function (setting) {
                return setting.metaId == id;
            }).pop();

            if (_.isObject(setting)) {
                return setting.metaValue;
            } else {
                return null;
            }
        }
    }, {
        key: "loadTabContents",
        value: function loadTabContents() {
            var _this = this;

            this.getTabs().map(function (tab) {

                _this.getPanelContents("_get_upb_" + tab.id + "_panel_contents", function (contents) {
                    tab.contents = __WEBPACK_IMPORTED_MODULE_0_extend___default()(true, [], contents);
                }, function (error) {
                    console.log(error);
                });
            });
        }
    }, {
        key: "getStatus",
        value: function getStatus() {
            return this.status;
        }
    }, {
        key: "isDirty",
        value: function isDirty() {
            return this.status.dirty;
        }
    }, {
        key: "stateChanged",
        value: function stateChanged() {
            this.status.dirty = true;
        }
    }, {
        key: "stateSaved",
        value: function stateSaved() {
            this.status.dirty = false;
        }
    }, {
        key: "addElementUniqueID",
        value: function addElementUniqueID(attributes) {
            attributes._upb_el_uid = this._el_id;
            this._el_id++;
            return attributes;
        }
    }, {
        key: "cleanup",
        value: function cleanup(contents) {
            var _this2 = this;

            var add_unique_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return contents.map(function (content) {
                delete content['_upb_settings'];
                delete content['_upb_options'];
                delete content['_upb_field_attrs'];
                delete content['_upb_field_type'];

                /* if (content['contents'] && _.isString(content['contents'])) {
                     delete content.attributes._contents;
                 }*/

                if (content.attributes) {
                    if (add_unique_id) {
                        content.attributes = _this2.addElementUniqueID(content.attributes);
                    }

                    _this2.removePrivateAttributes(content.attributes);
                }

                if (content['contents'] && _.isArray(content['contents'])) {
                    _this2.cleanup(content['contents']);
                }

                return content;
            });
        }
    }, {
        key: "closeSubPanel",
        value: function closeSubPanel() {
            this.subpanel = '';
        }
    }, {
        key: "getNonce",
        value: function getNonce() {
            return this.status._nonce;
        }
    }, {
        key: "getId",
        value: function getId() {
            return this.status._id;
        }
    }, {
        key: "saveState",
        value: function saveState(success, error) {
            var _this3 = this;

            var contents = {};

            this.tabs.map(function (data) {
                var newdata = __WEBPACK_IMPORTED_MODULE_0_extend___default()(true, {}, data);
                contents[data['id']] = _this3.cleanup(newdata.contents);
            });

            if (contents['elements']) {
                delete contents.elements;
            }

            if (contents['layouts']) {
                delete contents.layouts;
            }

            wp.ajax.send("_upb_save", {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce,
                    id: this.status._id,
                    states: contents,
                    shortcode: this.getShortcode(contents.sections)
                }
            });
        }
    }, {
        key: "getShortcode",
        value: function getShortcode(shortcodes) {
            var _this4 = this;

            return shortcodes.map(function (shortcode) {

                var attributes = __WEBPACK_IMPORTED_MODULE_0_extend___default()(true, {}, shortcode.attributes);

                attributes = _this4.removePrivateAttributes(attributes);

                return wp.shortcode.string({
                    tag: shortcode.tag,
                    attrs: attributes,
                    type: _this4.filterBoolean(shortcode.contents) ? 'self-closing' : 'closed',
                    content: _this4.getShortcodeContent(shortcode.contents)
                });
            }).join('');
        }
    }, {
        key: "removePrivateAttributes",
        value: function removePrivateAttributes(attributes) {

            if (!_.isUndefined(attributes['_contents'])) {
                delete attributes._contents;
            }

            // If user use "__" as key prefix this will deleted :)
            Object.keys(attributes).map(function (key) {
                if (key.substring(0, 2) == '__') {
                    delete attributes[key];
                }
            });

            return attributes;
        }
    }, {
        key: "generateShortcode",
        value: function generateShortcode(tag, attrs) {
            var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


            var attributes = __WEBPACK_IMPORTED_MODULE_0_extend___default()(true, {}, attrs);

            attributes = this.removePrivateAttributes(attributes);

            return wp.shortcode.string({
                tag: tag,
                attrs: attributes,
                type: this.filterBoolean(content) ? 'self-closing' : 'closed',
                content: this.getShortcodeContent(content)
            });
        }
    }, {
        key: "filterBoolean",
        value: function filterBoolean(value) {
            return _.isString(value) && ['true', 'false', '0', '1', 'null', 'undefined', '-0'].includes(value.trim().toLowerCase());
        }
    }, {
        key: "getShortcodeContent",
        value: function getShortcodeContent(content) {

            if (_.isArray(content)) {
                return this.getShortcode(content);
            }

            if (_.isString(content)) {
                return this.wpKsesPost(content);
            }
            return null;
        }
    }, {
        key: "getPanelContents",
        value: function getPanelContents(panel_hook, success, error) {

            wp.ajax.send(panel_hook, {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce,
                    id: this.status._id
                }
            });
        }
    }, {
        key: "getSavedSections",
        value: function getSavedSections(success, error) {

            wp.ajax.send('_get_saved_sections', {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce
                },
                cache: true
            });
        }
    }, {
        key: "saveSectionToOption",
        value: function saveSectionToOption(contents, success, error) {

            wp.ajax.send('_save_section', {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce,
                    contents: this.cleanup([__WEBPACK_IMPORTED_MODULE_0_extend___default()(true, {}, contents)]).pop()
                }
            });
        }
    }, {
        key: "saveAllSectionToOption",
        value: function saveAllSectionToOption(contents, success, error) {

            wp.ajax.send('_save_section_all', {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce,
                    contents: this.cleanup(__WEBPACK_IMPORTED_MODULE_0_extend___default()(true, [], contents))
                }
            });
        }
    }, {
        key: "getSavedLayouts",
        value: function getSavedLayouts(success, error) {

            wp.ajax.send('_get_saved_layouts', {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce
                },
                cache: true
            });
        }
    }, {
        key: "getShortCodePreviewTemplate",
        value: function getShortCodePreviewTemplate() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
            var success = arguments[1];
            var error = arguments[2];


            wp.ajax.send("_get_upb_shortcode_preview_" + name, {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce,
                    id: this.status._id
                },
                cache: true
            });
        }
    }, {
        key: "getAllUPBElements",
        value: function getAllUPBElements(success, error) {
            wp.ajax.send("_get_upb_elements_panel_contents", {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce
                }
            });
        }
    }, {
        key: "wpKsesPost",
        value: function wpKsesPost(contents) {
            return __WEBPACK_IMPORTED_MODULE_1_sanitize_html___default()(contents, {
                allowedTags: this.l10n.allowedTags,
                allowedAttributes: this.l10n.allowedAttributes,
                allowedSchemes: this.l10n.allowedSchemes
            });
        }
    }, {
        key: "addUPBOptions",
        value: function addUPBOptions(contents, success, error) {
            wp.ajax.send("_add_upb_options", {
                success: success,
                error: error,
                data: {
                    _nonce: this.status._nonce,
                    post_id: this.status._id,
                    contents: contents
                }
            });
        }
    }, {
        key: "wpAjax",
        value: function wpAjax(action, query, success, error) {
            var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

            wp.ajax.send(action, __WEBPACK_IMPORTED_MODULE_0_extend___default()(true, {
                success: success,
                error: error,
                data: __WEBPACK_IMPORTED_MODULE_0_extend___default()(true, {
                    _nonce: this.status._nonce,
                    post_id: this.status._id
                }, query)
                //,cache   : true,
                //type    : 'GET'
            }, options));
        }
    }]);

    return store;
}();

/* harmony default export */ __webpack_exports__["a"] = (new store());

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




/* harmony default export */ __webpack_exports__["a"] = ({

    props: ['index', 'target', 'model', 'attributes', 'item', 'items', 'keyindexname', 'keyvaluename', 'defaultValue'], // model[target]
    data: function data() {
        return {
            input: this.model[this.target],
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            showInput: true
        };
    },


    computed: {
        store: function store() {
            return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */];
        },
        deviceClass: function deviceClass() {
            return this.attributes.device ? [this.attributes.deviceIcon, "device-icon", this.attributes.device == this.store.currentPreviewDevice ? 'active' : 'inactive'] : [this.attributes.deviceIcon, "device-icon", "active"];
        },
        multiple: function multiple() {
            return !_.isUndefined(this.attributes['multiple']) && this.attributes.multiple ? true : false;
        },
        value: function value() {
            return this.model[this.target];
        },
        useAttributeValue: function useAttributeValue() {
            if (this.attributes.use) {
                return this.getValueOf(this.attributes.use);
            }
        },
        isRequired: function isRequired() {
            return this.showInput;
        }
    },

    watch: {
        input: function input(value, oldValue) {
            this.setValue(value);
        },
        value: function value(_value, oldValue) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', _value);
        },


        items: {
            handler: function handler(value, oldValue) {
                this.checkRequired();
            },
            deep: true
        }
    },

    created: function created() {
        // console.log('Common mixin', this.$options._componentTag)
        this.checkRequired();
    },


    methods: {
        checkRequired: function checkRequired() {
            var _this = this;

            if (this.attributes.required) {

                // console.log(this.attributes.title);

                this.showInput = this.attributes.required.every(function (request) {
                    var _request = _slicedToArray(request, 3),
                        id = _request[0],
                        operator = _request[1],
                        desireValue = _request[2];

                    var currentValue = _.isNull(_this.getValueOf(id)) ? '' : _this.getValueOf(id);

                    switch (operator) {
                        case '=':
                        case '==':

                            if ((_.isBoolean(desireValue) || _.isString(desireValue)) && currentValue == desireValue) {
                                return request;
                            }

                            if (_.isArray(currentValue) && _.isString(desireValue) && currentValue.includes(desireValue)) {
                                return request;
                            }

                            if (_.isString(currentValue) && _.isArray(desireValue) && desireValue.includes(currentValue)) {
                                return request;
                            }

                            break;
                        case '!=':
                        case '!==':

                            if ((_.isBoolean(desireValue) || _.isString(desireValue)) && currentValue != desireValue) {
                                return request;
                            }

                            if (_.isArray(currentValue) && _.isString(desireValue) && !currentValue.includes(desireValue.trim())) {
                                return request;
                            }

                            if (_.isString(currentValue) && _.isArray(desireValue) && !desireValue.includes(currentValue.trim())) {
                                return request;
                            }
                            break;
                    }
                });
            }
        },
        getValueOf: function getValueOf() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!_.isEmpty(key)) {

                var find = {};
                find[this.keyindexname] = key;

                var item = _.findWhere(this.items, find);

                if (!_.isUndefined(item)) {
                    return item[this.keyvaluename];
                }
            }
            return null;
        },
        setValueOf: function setValueOf(key, value) {
            var _this2 = this;

            this.items.map(function (item, index) {

                if (item[_this2.keyindexname] == key) {

                    // Settings Panel
                    if (!_.isUndefined(item['_upb_field_attrs'])) {
                        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(item._upb_field_attrs, 'value', value);
                    }

                    // Element Setting
                    if (!_.isUndefined(_this2.model[key])) {
                        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this2.model, key, value);
                    }

                    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(item, _this2.keyvaluename, value);
                }
            });
        },
        str2Bool: function str2Bool(strvalue) {
            return strvalue && typeof strvalue == 'string' ? strvalue.toLowerCase() == 'true' || strvalue == '1' : strvalue == true;
        },
        typeClass: function typeClass() {
            return [this.attributes.type + "-field-wrapper", "form-field-wrapper", this.attributes.device ? "has-device" : ''].join(' ');
        },
        setValue: function setValue(value) {

            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this.attributes, 'value', value);
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this.model, this.target, value);

            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();

            if (this.attributes['reload']) {
                __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].reloadPreview();
            }
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function () {
    var inputType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (inputType && !_.isUndefined(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].upb_user_inputs_mixin[inputType]) && _.isObject(window[__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].upb_user_inputs_mixin[inputType]])) {
        return window[__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].upb_user_inputs_mixin[inputType]];
    }
    return {};
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);




var fieldsComponents = {
    'upb-input-ajax-icon-select': function upbInputAjaxIconSelect() {
        return Promise.resolve().then(function () {
            return __webpack_require__(203);
        });
    },
    'upb-input-ajax-select': function upbInputAjaxSelect() {
        return Promise.resolve().then(function () {
            return __webpack_require__(205);
        });
    },
    'upb-input-background-image': function upbInputBackgroundImage() {
        return Promise.resolve().then(function () {
            return __webpack_require__(207);
        });
    },
    'upb-input-background-image-position': function upbInputBackgroundImagePosition() {
        return Promise.resolve().then(function () {
            return __webpack_require__(211);
        });
    },
    'upb-input-checkbox': function upbInputCheckbox() {
        return Promise.resolve().then(function () {
            return __webpack_require__(213);
        });
    },
    'upb-input-checkbox-icon': function upbInputCheckboxIcon() {
        return Promise.resolve().then(function () {
            return __webpack_require__(215);
        });
    },
    'upb-input-color': function upbInputColor() {
        return Promise.resolve().then(function () {
            return __webpack_require__(217);
        });
    },
    'upb-input-contents': function upbInputContents() {
        return Promise.resolve().then(function () {
            return __webpack_require__(220);
        });
    },
    'upb-input-device-hidden': function upbInputDeviceHidden() {
        return Promise.resolve().then(function () {
            return __webpack_require__(222);
        });
    },
    'upb-input-editor': function upbInputEditor() {
        return Promise.resolve().then(function () {
            return __webpack_require__(224);
        });
    },
    'upb-input-hidden': function upbInputHidden() {
        return Promise.resolve().then(function () {
            return __webpack_require__(226);
        });
    },
    'upb-input-icon-select': function upbInputIconSelect() {
        return Promise.resolve().then(function () {
            return __webpack_require__(228);
        });
    },
    'upb-input-icon-popup': function upbInputIconPopup() {
        return Promise.resolve().then(function () {
            return __webpack_require__(230);
        });
    },
    'upb-input-media-image': function upbInputMediaImage() {
        return Promise.resolve().then(function () {
            return __webpack_require__(235);
        });
    },
    'upb-input-media-query-radio-tab': function upbInputMediaQueryRadioTab() {
        return Promise.resolve().then(function () {
            return __webpack_require__(237);
        });
    },
    'upb-input-message': function upbInputMessage() {
        return Promise.resolve().then(function () {
            return __webpack_require__(239);
        });
    },
    'upb-input-heading': function upbInputHeading() {
        return Promise.resolve().then(function () {
            return __webpack_require__(241);
        });
    },
    'upb-input-number': function upbInputNumber() {
        return Promise.resolve().then(function () {
            return __webpack_require__(243);
        });
    },
    'upb-input-radio': function upbInputRadio() {
        return Promise.resolve().then(function () {
            return __webpack_require__(245);
        });
    },
    'upb-input-radio-icon': function upbInputRadioIcon() {
        return Promise.resolve().then(function () {
            return __webpack_require__(247);
        });
    },
    'upb-input-radio-image': function upbInputRadioImage() {
        return Promise.resolve().then(function () {
            return __webpack_require__(249);
        });
    },
    'upb-input-range': function upbInputRange() {
        return Promise.resolve().then(function () {
            return __webpack_require__(251);
        });
    },
    'upb-input-spacing': function upbInputSpacing() {
        return Promise.resolve().then(function () {
            return __webpack_require__(253);
        });
    },
    'upb-input-select': function upbInputSelect() {
        return Promise.resolve().then(function () {
            return __webpack_require__(255);
        });
    },
    'upb-input-select2': function upbInputSelect2() {
        return Promise.resolve().then(function () {
            return __webpack_require__(257);
        });
    },
    'upb-input-select2-icon': function upbInputSelect2Icon() {
        return Promise.resolve().then(function () {
            return __webpack_require__(259);
        });
    },
    'upb-input-text': function upbInputText() {
        return Promise.resolve().then(function () {
            return __webpack_require__(261);
        });
    },
    'upb-input-textarea': function upbInputTextarea() {
        return Promise.resolve().then(function () {
            return __webpack_require__(263);
        });
    },
    'upb-input-toggle': function upbInputToggle() {
        return Promise.resolve().then(function () {
            return __webpack_require__(265);
        });
    }
};

Object.keys(fieldsComponents).map(function (key) {
    if (_.isObject(fieldsComponents[key])) {
        // Vue.component(key, fieldsComponents[key])
    }
});

if (_.isArray(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].fields) && !_.isEmpty(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].fields)) {
    __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].fields.map(function (input) {

        if (!_.isUndefined(input['component']) && !_.isUndefined(input['name'])) {

            // Input mixin
            var userInputMixin = {};
            var mixinName = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].upb_user_inputs_mixin[input.name];

            if (!_.isUndefined(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].upb_user_inputs_mixin[input.name]) && _.isObject(window[mixinName])) {
                userInputMixin = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, window[mixinName]);
            }

            fieldsComponents["upb-input-" + input.name] = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {
                mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], userInputMixin]
            }, window[input.component] || {});
        }
        // Vue.component(`upb-input-${input.name}`, fieldsComponent[`upb-input-${input.name}`])
    });
}

/* harmony default export */ __webpack_exports__["a"] = (fieldsComponents);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _this = this;



var Select2 = function Select2(el, binding, vnode) {
    var init = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


    jQuery(el).select2(jQuery.extend(true, {}, binding.value));

    if (init) {

        jQuery(el).on("select2:select", function (e) {

            if (!vnode.context.onChange) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement the `onChange` method', vnode.context);
            }

            vnode.context.onChange(e.params.data, e);

            //$(el).trigger('change.select2');
        });

        jQuery(el).on("select2:unselect", function (e) {

            if (!vnode.context.onRemove) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement the `onRemove` method', vnode.context);
            }

            vnode.context.onRemove(e.params.data, e);

            //$(el).trigger('change.select2');
        });
    }
};

var Directive = {
    unbind: function unbind(el) {
        jQuery(el).select2("destroy");
    },
    update: function update(el, binding, vnode) {

        if (!_.isUndefined(binding.value['ajax'])) {
            jQuery(el).select2("destroy");

            vnode.context.$nextTick(function () {
                Select2(el, binding, vnode, false);
            });
        }
    },
    inserted: function inserted(el, binding, vnode) {
        Select2(el, binding, vnode);
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (!jQuery().select2) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('select2 is not installed or found globally to use `vue-select2` directive..', _this);
    }

    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('select2', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_copy_to_clipboard__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_copy_to_clipboard__);







/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'sections-panel',
    props: ['index', 'model'],

    data: function data() {
        return {

            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            breadcrumb: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].breadcrumb,

            showHelp: false,
            showSearch: false,
            searchQuery: '',
            sortable: {
                handle: '> .tools > .handle',
                placeholder: "upb-sort-placeholder",
                axis: 'y'
            },

            transitionName: 'slide-left'
        };
    },


    computed: {
        contents: function contents() {

            var query = this.searchQuery.toLowerCase().trim();
            if (query) {
                return this.model.contents.filter(function (data) {
                    return new RegExp(query, 'gui').test(data.attributes.title.toLowerCase().trim());
                });
            } else {
                return this.model.contents;
            }
        }
    },

    methods: {
        panelClass: function panelClass() {
            //return [`upb-${this.model.id}-panel`, this.currentPanel ? 'current' : ''].join(' ');
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            var _this = this;

            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (_this.showSearch) {
                    _this.$el.querySelector('input[type="search"]').focus();
                }
            });
        },
        openSubPanel: function openSubPanel(data, event) {
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].subpanel = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].subpanel == data ? '' : data;
        },
        copyLayoutToClipboard: function copyLayoutToClipboard() {

            if (this.model.contents.length > 0) {
                var item = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], this.model.contents);
                var json = JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].cleanup(item, false));

                __WEBPACK_IMPORTED_MODULE_4_copy_to_clipboard___default()(json);

                this.$toast.success(Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.layoutCopied, this.l10n.pageTitle));
            } else {
                this.$toast.info(this.l10n.layoutNotCopied);
            }
        },
        toolsActiveClass: function toolsActiveClass(tool) {
            return _.isString(tool.data) && __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].subpanel == tool.data ? 'active' : '';
        },
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = _.isUndefined(tool['data']) ? false : tool.data;

            if (!this[tool.action]) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        addNew: function addNew(content) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, content);
            data.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(data.attributes.title, this.model.contents.length + 1);

            this.model.contents.push(data);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },


        // List Contents

        listPanel: function listPanel(id) {
            return "section-list";
        },
        deleteItem: function deleteItem(index) {
            this.model.contents.splice(index, 1);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        cloneItem: function cloneItem(index, item) {
            var cloned = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, item);

            cloned.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.clone, cloned.attributes.title);

            this.model.contents.splice(index + 1, 0, cloned);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        onStart: function onStart(e) {
            this.searchQuery = '';
        },
        onUpdate: function onUpdate(e, values) {
            var _this2 = this;

            //###
            //this.contents.splice(values.newIndex, 0, this.contents.splice(values.oldIndex, 1).pop());
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();

            var list = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], this.model.contents);

            list.splice(values.newIndex, 0, list.splice(values.oldIndex, 1).pop());

            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.model, 'contents');

            this.$nextTick(function () {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this2.model, 'contents', __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], list));
            });
        }
    },

    components: {
        'section-list': function sectionList() {
            return Promise.resolve().then(function () {
                return __webpack_require__(194);
            });
        }
    }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'section-list',
    props: ['index', 'model'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n
        };
    },
    created: function created() {
        this.$watch("model.attributes", function (value) {
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        }, { deep: true });
    },


    methods: {
        activeFocus: function activeFocus() {
            this.model._upb_options.focus = true;
        },
        removeFocus: function removeFocus() {
            this.model._upb_options.focus = false;
        },
        contentsAction: function contentsAction(id, tool) {

            this.removeFocus();

            this.$router.push({
                name: "section-" + id,
                params: {
                    //tab       : 'sections',
                    sectionId: this.index,
                    type: id
                }
            });
        },
        settingsAction: function settingsAction(id, tool) {

            this.removeFocus();

            this.$router.push({
                name: "section-" + id,
                params: {
                    //tab       : 'sections',
                    sectionId: this.index,
                    type: id
                }
            });
        },
        deleteAction: function deleteAction(id, tool) {
            if (confirm(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.l10n.delete, this.model.attributes.title))) {
                this.$emit('deleteItem');
            }
        },
        cloneAction: function cloneAction(id, tool) {
            this.$emit('cloneItem');
        },
        enableAction: function enableAction(id, tool) {
            this.model.attributes.enable = false;
        },
        disableAction: function disableAction(id, tool) {
            this.model.attributes.enable = true;
        },
        clickActions: function clickActions(id, tool) {
            if (this[id + "Action"]) {
                this[id + "Action"](id, tool);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement " + id + "Action method.", this);
            }
        },
        enabled: function enabled(id) {

            if (id == 'enable') {
                return this.model.attributes.enable;
            }

            if (id == 'disable') {
                return !this.model.attributes.enable;
            }

            return true;
        },
        toolsClass: function toolsClass(id, tool) {
            return tool['class'] ? id + " " + tool['class'] : "" + id;
        },
        itemClass: function itemClass() {
            return [this.model.attributes.enable ? 'item-enabled' : 'item-disabled', this.model._upb_options.focus ? 'item-focused' : 'item-unfocused'].join(' ');
        },
        getContentPanel: function getContentPanel(id) {
            return id + "-contents-panel";
        },
        getSettingPanel: function getSettingPanel(id) {
            return id + "-settings-panel";
        }
    }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'section-contents',
    props: ['index', 'selected', 'model'],

    data: function data() {
        return {

            defaultRowId: 0,
            showRowColumn: false,
            rowContentsComponent: '',

            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            breadcrumb: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].breadcrumb,
            showHelp: false,
            showSearch: false,
            sortable: {
                handle: '> .tools > .handle',
                placeholder: "upb-sort-placeholder",
                axis: 'y'
            },

            searchQuery: '',
            item: {}
        };
    },
    created: function created() {

        if (this.model.contents.length < 1) {
            this.$router.replace('/sections');
        } else {
            this.item = this.getItem();

            if (this.item.contents.length > 0) {
                this.defaultRowId = 0;
                this.openRowContentsPanel(this.defaultRowId); // row column list
            }
        }
    },


    computed: {
        panelTitle: function panelTitle() {

            if (this.item['_upb_options']) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.item._upb_options.meta.contents.title, this.item.attributes.title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.contents.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.contents.search;
            } else {
                return false;
            }
        },
        panelMetaTools: function panelMetaTools() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.contents;
            } else {
                return false;
            }
        },
        contents: function contents() {

            if (!this.item['contents']) {
                return {};
            }

            var query = this.searchQuery.toLowerCase().trim();

            if (query) {
                return this.item.contents.filter(function (data) {
                    return new RegExp(query, 'gui').test(data.attributes.title.toLowerCase().trim());
                });
            } else {
                return this.item.contents;
            }
        }
    },

    watch: {
        searchQuery: function searchQuery(search) {
            if (search.trim()) {
                this.showRowColumn = false; // searching rows
            }
        }
    },

    methods: {
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        back: function back() {
            //console.log(this.$route.path.split('/').slice(1, -2));
            this.$router.go(-1);
        },
        panelClass: function panelClass() {
            return ["upb-" + this.item.tag + "-panel", "upb-panel-wrapper"].join(' ');
        },
        isCurrentRow: function isCurrentRow(index) {
            return this.defaultRowId == index && this.showRowColumn;
        },
        getItem: function getItem() {
            var sectionId = this.$route.params['sectionId'];
            return this.model.contents[sectionId];
        },
        afterSort: function afterSort(values) {
            this.defaultRowId = values.newIndex;
            this.showRowColumn = true;
        },
        showSettingsPanel: function showSettingsPanel() {

            this.$router.push({
                name: "section-settings",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    type: 'settings'
                }
            });
        },
        openRowContentsPanel: function openRowContentsPanel(index) {
            this.showRowColumn = true;
            this.defaultRowId = index;
            this.rowContentsComponent = 'row-contents';
        },
        saveSectionLayout: function saveSectionLayout() {
            var _this = this;

            this.$toast.info(this.l10n.sectionSaving);

            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].saveSectionToOption(this.item, function (data) {

                _this.$toast.remove();

                if (data) {
                    _this.$toast.success(_this.l10n.sectionSaved);
                } else {
                    _this.$toast.error(_this.l10n.sectionNotSaved);
                }
            }, function () {
                _this.$toast.remove();
                _this.$toast.error(_this.l10n.sectionNotSaved);
            });

            // console.log(this.item)
        },


        // Sub Panel

        listPanel: function listPanel(id) {
            return "row-list";
        },
        deleteItem: function deleteItem(index) {
            this.item.contents.splice(index, 1);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        cloneItem: function cloneItem(index, item) {
            var cloned = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, item);
            cloned.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.clone, cloned.attributes.title);
            this.item.contents.splice(index + 1, 0, cloned);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        onUpdate: function onUpdate(e, values) {
            var _this2 = this;

            //###
            //this.contents.splice(values.newIndex, 0, this.contents.splice(values.oldIndex, 1).pop());
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();

            //### If you Need to modify this.model.contents then you should use this code :)
            var list = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], this.item.contents);

            list.splice(values.newIndex, 0, list.splice(values.oldIndex, 1).pop());

            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.item, 'contents');

            this.$nextTick(function () {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this2.item, 'contents', __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], list));
                _this2.afterSort(values);
            });

            // store.stateChanged();
        },
        onStart: function onStart(e) {
            this.searchQuery = '';
            this.showRowColumn = false;
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            var _this3 = this;

            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (_this3.showSearch) {
                    _this3.$el.querySelector('input[type="search"]').focus();
                }
            });
        },
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        cleanup: function cleanup(model) {

            model.contents = model.contents.map(function (data, index) {

                data.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(data.attributes.title, data.contents.length + 1);

                return data;
            });

            return model;
        },
        addNew: function addNew(content) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            // Only For Column cleanup

            var data = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, this.cleanup(content));
            data.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(data.attributes.title, this.item.contents.length + 1);

            this.item.contents.push(data);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        }
    },

    components: {
        'row-list': function rowList() {
            return Promise.resolve().then(function () {
                return __webpack_require__(70);
            });
        },
        'row-contents': function rowContents() {
            return Promise.resolve().then(function () {
                return __webpack_require__(199);
            });
        }
    }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_RowList_js__ = __webpack_require__(71);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_460a22e3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowList_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_RowList_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_460a22e3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_460a22e3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/row/RowList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-460a22e3", Component.options)
  } else {
    hotAPI.reload("data-v-460a22e3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'row-list',
    props: ['index', 'model', 'selected'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n
        };
    },


    computed: {},

    created: function created() {
        this.$watch("model.attributes", function (value) {
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        }, { deep: true });
    },


    methods: {
        activeFocus: function activeFocus() {
            this.model._upb_options.focus = true;
        },
        removeFocus: function removeFocus() {
            this.model._upb_options.focus = false;
        },
        contentsAction: function contentsAction(id, tool) {

            this.$emit('showContentsPanel');

            // console.log('OPEN Row contents PANEL')
            // this.breadcrumb.push(`${this.model.id}`)
        },
        settingsAction: function settingsAction(id, tool) {

            this.removeFocus();

            this.$router.push({
                name: "row-" + id,
                params: {
                    //tab       : 'sections',
                    rowId: this.index,
                    sectionId: this.$route.params.sectionId,
                    type: id
                }
            });
        },
        deleteAction: function deleteAction(id, tool) {
            if (confirm(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.l10n.delete, this.model.attributes.title))) {
                this.$emit('deleteItem');
            }
        },
        cloneAction: function cloneAction(id, tool) {
            this.$emit('cloneItem');
        },
        enableAction: function enableAction(id, tool) {
            this.model.attributes.enable = false;
        },
        disableAction: function disableAction(id, tool) {
            this.model.attributes.enable = true;
        },
        clickActions: function clickActions(id, tool) {
            // console.log(`${id}Action`);

            if (this[id + "Action"]) {
                this[id + "Action"](id, tool);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement " + id + "Action method.", this);
            }
        },
        enabled: function enabled(id) {

            if (id == 'enable') {
                return this.model.attributes.enable;
            }

            if (id == 'disable') {
                return !this.model.attributes.enable;
            }

            return true;
        },
        toolsClass: function toolsClass(id, tool) {
            return tool['class'] ? id + " " + tool['class'] : "" + id;
        },
        itemClass: function itemClass() {
            return [this.model.attributes.enable ? 'item-enabled' : 'item-disabled', this.model._upb_options.focus ? 'item-focused' : 'item-unfocused', this.selected == this.index ? 'item-selected' : ''].join(' ');
        },
        getContentPanel: function getContentPanel(id) {
            return id + "-contents-panel";
        },
        getSettingPanel: function getSettingPanel(id) {
            return id + "-settings-panel";
        }
    }
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__);






/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'row-contents',
    props: ['index', 'model', 'row'],

    data: function data() {
        return {

            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            grid: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].grid,

            breadcrumb: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].breadcrumb,
            showHelp: false,
            showSearch: false,
            sortable: {
                //handle      : '> .tools > .handle',
                //placeholder : "upb-sort-placeholder",
                // axis        : 'y'
            },
            searchQuery: '',
            selectedColumnLayout: {},
            showManualInput: {},
            manualLayout: {},
            devices: []
        };
    },


    computed: {
        layoutOfTitle: function layoutOfTitle() {
            return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.columnLayoutOf, this.model.attributes.title);
        },
        contents: function contents() {
            return this.model.contents;
        }
    },

    created: function created() {

        this.devices = this.getDevices();
        this.setToolsForDevices();
        this.setSelectedColumnLayout();
        this.onSelectedColumnLayoutChange();
    },


    methods: {
        deviceTitle: function deviceTitle(device) {

            if (device.reconfig) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.reConfigDeviceColumn, device.title);
            }

            if (!device.current) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.showDeviceColumn, device.title);
            }

            return device.title;
        },
        toggleDeviceTitle: function toggleDeviceTitle(device) {

            if (device.reconfig) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.reConfigDeviceColumn, device.title);
            }

            if (device.active) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.disableDeviceColumn, device.title);
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.enableDeviceColumn, device.title);
            }
        },
        openColumnContents: function openColumnContents(columnId) {

            this.removeFocus(columnId);

            this.$router.push({
                name: "column-" + this.$route.params.type,
                params: {
                    //tab       : 'sections',
                    columnId: columnId,
                    rowId: this.row,
                    sectionId: this.$route.params.sectionId,
                    type: this.$route.params.type
                }
            });
        },
        activeFocus: function activeFocus(index) {
            this.model.contents[index]._upb_options.focus = true;
        },
        removeFocus: function removeFocus(index) {
            this.model.contents[index]._upb_options.focus = false;
        },
        panelClass: function panelClass() {
            return ["upb-" + this.model.tag + "-panel", "upb-panel-wrapper"].join(' ');
        },
        sortOrderClass: function sortOrderClass(index, content, device) {
            var layout = content.attributes[device.id].replace(':', '-');

            // We Implemented grid 12
            var upb_total_column = Math.round(12 / layout.split('-')[1]);
            var upb_split_column = parseInt(layout.split(':')[0]);

            var column = Math.round(upb_total_column * upb_split_column);

            return ["column-" + layout, "upb-mini-column", "upb-mini-column-" + column, this.model.contents[index]._upb_options.focus ? 'item-focused' : ''].join(' ');
        },
        columnLayoutTitle: function columnLayoutTitle(content, device) {
            return content.attributes[device.id];
        },
        onSelectedColumnLayoutChange: function onSelectedColumnLayoutChange() {
            var _this = this;

            this.devices.map(function (device) {

                _this.$watch("selectedColumnLayout." + device.id, function (value) {

                    var activeDevices = _this.devices.filter(function (d) {
                        return !!d.active;
                    });
                    var totalColumns = _.compact(activeDevices.map(function (d) {
                        return _this.selectedColumnLayout[d.id];
                    })).join(' + ').split('+');
                    var currentColLength = value.split('+').length;

                    if (activeDevices.length == 1) {
                        //
                        // console.log('Only One Device Using')
                    }

                    _this.devices.map(function (d) {

                        var colLength = _this.selectedColumnLayout[d.id].split('+').length;

                        d.reconfig = device.active && d.active && activeDevices.length > 1 && d.id != device.id && currentColLength !== colLength ? true : false;
                    });

                    _this.selectedColumnOperation(device, value);

                    //return this.model._upb_options.tools[deviceId];

                    _this.isManualLayout(device, value);
                }, { deep: true });
            });
        },
        isManualLayout: function isManualLayout(device) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            if (!value) {
                value = this.selectedColumnLayout[device.id];
            }

            var isPredefined = this.model._upb_options.tools[device.id].filter(function (predefined) {
                return predefined.value.trim() == value.trim();
            });

            return this.manualLayout[device.id] = isPredefined.length <= 0 ? true : false;
            //
        },
        selectedColumnOperation: function selectedColumnOperation(device, value) {
            var _this2 = this;

            var runOperation = !this.devices.some(function (d) {
                return d.reconfig == true;
            });
            var activeDevices = this.devices.filter(function (d) {
                return !!d.active;
            });
            var totalColumns = _.compact(activeDevices.map(function (d) {
                return _this2.selectedColumnLayout[d.id];
            })).join(' + ').split('+');

            var shouldAddNewColumn = Math.round(totalColumns.length / activeDevices.length) > this.model.contents.length;
            var shouldRemoveColumn = Math.round(totalColumns.length / activeDevices.length) < this.model.contents.length;

            this.validateColumnInput(device, value);

            if (runOperation && shouldAddNewColumn && totalColumns.length % activeDevices.length === 0) {

                var columnNeedToAdd = Math.round(totalColumns.length / activeDevices.length) - this.model.contents.length;
                for (var i = 1; i <= columnNeedToAdd; i++) {
                    this.addNew(this.model._upb_options.tools.contents.new);
                }
            }

            if (runOperation && shouldRemoveColumn) {
                var columnNeedToRemove = this.model.contents.length - Math.round(totalColumns.length / activeDevices.length);
                var start = Math.round(totalColumns.length / activeDevices.length);
                this.deleteItem(start, columnNeedToRemove);
            }

            this.changeDeviceColumnLayout(device);

            // this.model.contents

            // extend(true, {}, this.model._upb_options.tools.contents.new)
        },
        getDevices: function getDevices() {
            var _this3 = this;

            var grid = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, this.grid);
            var hasCurrent = false;
            var lastIndex = 0;

            var devices = grid.devices.map(function (device, index) {

                device['active'] = false;
                device['current'] = false;
                device['reconfig'] = false;
                device['ratioSuggestion'] = false;
                device['ratioSuggestionMsg'] = '';

                _this3.model.contents.map(function (column) {
                    var selected = column.attributes[device.id].trim();

                    if (selected) {
                        device.active = true;
                        lastIndex = index;
                    }
                });

                device.current = device.active && device.id == grid.defaultDeviceId ? true : false;

                if (device.current) {
                    hasCurrent = true;
                }

                return device;
            });

            if (!hasCurrent) {
                devices[lastIndex].current = true;
            }

            return devices;
        },
        setToolsForDevices: function setToolsForDevices() {
            var _this4 = this;

            this.devices.map(function (device) {
                _this4.model._upb_options.tools[device.id] = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], _this4.model._upb_options.tools.contents.layouts);
            });
        },
        toggleDevice: function toggleDevice(device) {
            device.active = !device.active;
            this.reConfigColumnNotice(device);
        },
        reConfigColumnNotice: function reConfigColumnNotice(device) {
            var _this5 = this;

            var columns = this.selectedColumnLayout[device.id].trim();

            var activeDevices = this.devices.filter(function (d) {
                return !!d.active;
            });

            var totalColumns = _.compact(activeDevices.map(function (device) {
                return _this5.selectedColumnLayout[device.id];
            })).join(' + ').split(' + ');

            this.selectedColumnLayout[device.id] = columns;

            // no column layout selected.
            // so we should show re-config based on active / inactive.
            if (!columns) {
                device.reconfig = device.active ? true : false;
            } else {

                var currentColLength = columns.split('+').length;

                this.devices.map(function (d) {

                    var colLength = _this5.selectedColumnLayout[d.id].split('+').length;

                    d.reconfig = false;

                    if (device.active && d.active && activeDevices.length > 1 && d.id != device.id && currentColLength !== colLength) {
                        d.reconfig = true;
                    }
                });
            }

            this.changeDeviceColumnLayout(device);
        },
        changeDeviceColumnLayout: function changeDeviceColumnLayout(device) {
            var _this6 = this;

            this.devices.map(function (d) {
                if (d.active) {
                    var columns = _this6.selectedColumnLayout[d.id].trim();

                    //console.log(d.id, columns);

                    columns.split('+').map(function (col, i) {
                        if (_this6.model.contents[i]) {
                            _this6.model.contents[i].attributes[d.id] = col.trim();
                        }
                    });
                } else {

                    // When Deactive device remove attribute value also :)
                    var _columns = _this6.selectedColumnLayout[d.id].trim();
                    _columns.split('+').map(function (col, i) {
                        if (_this6.model.contents[i]) {
                            _this6.model.contents[i].attributes[d.id] = '';
                        }
                    });
                }
            });

            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        currentDevice: function currentDevice(device) {

            this.devices.map(function (d) {
                d.current = false;
            });

            device.current = true;
        },
        validateColumnInput: function validateColumnInput(device, value) {

            //console.log(device, value);

            try {

                device.ratioSuggestion = false;
                device.ratioSuggestionMsg = '';

                var totalGrid = value.split('+').map(function (i) {
                    return i.trim();
                });

                var gridArray = totalGrid.map(function (i) {
                    return parseInt(i.split(':')[0].trim());
                });

                var gridValueCount = totalGrid.reduce(function (old, i) {
                    var col = i.split(':')[0].trim();
                    return old + parseInt(col);
                }, 0);

                var totalGridValue = totalGrid.reduce(function (old, i) {
                    var ratio = i.split(':')[1].trim();
                    return old + parseInt(ratio);
                }, 0);

                var grid = totalGridValue / totalGrid.length;

                if (grid == gridValueCount) {

                    // Show Ratio Suggestion

                    this.ratioSuggestion(device, gridArray, gridValueCount);
                } else {}
                // errors


                //console.log(ratio);
                //console.log(items);
            } catch (e) {
                console.log(e);
            }
        },
        gcd: function gcd(input) {
            if (toString.call(input) !== "[object Array]") return false;
            var len, a, b;
            len = input.length;
            if (!len) {
                return null;
            }
            a = input[0];
            for (var i = 1; i < len; i++) {
                b = input[i];
                a = this.gcd_two(a, b);
            }
            return a;
        },
        gcd_two: function gcd_two(x, y) {
            if (typeof x !== 'number' || typeof y !== 'number') return false;
            x = Math.abs(x);
            y = Math.abs(y);
            while (y) {
                var t = y;
                y = x % y;
                x = t;
            }
            return x;
        },
        ratioSuggestion: function ratioSuggestion(device, gridArray, gridValueCount) {

            //  A ratio can be simplified by dividing both sides of the ratio by the Highest Common Factor (HCF). I mean greatest common divisor :D

            var itemArray = gridArray.slice(0, gridArray.length);

            itemArray.push(gridValueCount);

            //console.log(itemArray);

            var common = this.gcd(itemArray);
            if (common > 1) {

                itemArray.pop();

                var simplifiedRatio = gridValueCount / common;

                var simplifiedGrid = itemArray.map(function (i) {
                    return i / common + ":" + simplifiedRatio;
                });

                device.ratioSuggestionMsg = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.grid.simplifiedRatio, simplifiedGrid.join(' + '));

                device.ratioSuggestion = true;
            }
        },
        openManualInput: function openManualInput(deviceId) {
            this.showManualInput[deviceId] = !this.showManualInput[deviceId];
        },
        columnLayouts: function columnLayouts(device) {
            return this.model._upb_options.tools[device.id];
        },
        deviceClass: function deviceClass(device) {
            return [device.current ? 'current selected' : '', device.active ? 'active' : 'inactive', device.reconfig ? 're-config-column' : ''].join(' ');
        },
        setSelectedColumnLayout: function setSelectedColumnLayout() {
            var _this7 = this;

            //console.log(this.model.contents);

            this.devices.map(function (device) {

                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this7.selectedColumnLayout, device.id, '');
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this7.showManualInput, device.id, false);
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this7.manualLayout, device.id, false);

                var selected = _this7.model.contents.map(function (column) {

                    if (column.attributes[device.id].trim()) {
                        return column.attributes[device.id].trim();
                    }
                    return false;
                });

                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this7.selectedColumnLayout, device.id, _.compact(selected).join(' + '));

                _this7.isManualLayout(device);
            });
        },
        changeColumnLayout: function changeColumnLayout(layout, deviceId) {
            this.selectedColumnLayout[deviceId] = layout.value.trim();
        },
        miniColumns: function miniColumns(columns) {
            return columns.split('+').map(function (i) {
                return i.trim();
            });
        },
        miniColumnItem: function miniColumnItem(item) {
            return item.split(':')[0].trim();
        },
        miniColumnItemClass: function miniColumnItemClass(item) {
            var i = item.split(':')[0].trim();
            return "grid-item-" + i;
        },
        columnLayoutClass: function columnLayoutClass(layout, deviceId) {
            return [layout.value == this.selectedColumnLayout[deviceId] ? 'active' : '', layout.class].join(' ');
        },
        manualLayoutClass: function manualLayoutClass(deviceId) {
            return [this.manualLayout[deviceId] ? 'active' : '', 'manual'].join(' ');
        },
        deleteItem: function deleteItem(start) {
            var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            this.model.contents.splice(start, end);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        onUpdate: function onUpdate(e, values) {

            //###
            //this.contents.splice(values.newIndex, 0, this.contents.splice(values.oldIndex, 1).pop());
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();

            //### If you Need to modify this.model.contents then you should use this code :)
            var list = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], this.model.contents);

            list.splice(values.newIndex, 0, list.splice(values.oldIndex, 1).pop());

            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.model, 'contents');

            this.$nextTick(function () {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this.model, 'contents', __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], list));

                this.updateColumnOrder();
                // console.log(this.model.contents);
            });

            // store.stateChanged();
        },
        updateColumnOrder: function updateColumnOrder() {
            var _this8 = this;

            var sorted = [];

            this.devices.map(function (device) {

                var value = [];
                _this8.model.contents.map(function (content) {
                    if (content.attributes[device.id].trim()) {
                        value.push(content.attributes[device.id]);
                    }
                });

                sorted.push({ id: device.id, grid: value });
            });

            sorted.map(function (device) {
                if (device.grid.length > 0) {
                    _this8.selectedColumnLayout[device.id] = device.grid.join(' + ').trim();
                }
            });
        },
        onStart: function onStart(e) {
            this.searchQuery = '';
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (this.showSearch) {
                    this.$el.querySelector('input[type="search"]').focus();
                }
            });
        },
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        cleanup: function cleanup(content) {
            this.devices.map(function (d) {
                content.attributes[d.id] = '';
            });
            return content;
        },
        addNew: function addNew(content) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            // Only For Column cleanup

            var data = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, this.cleanup(content));

            if (data.attributes.title) {
                data.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(data.attributes.title, this.model.contents.length + 1);
            }
            this.model.contents.push(data);

            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        }
    },

    components: {
        'row-list': function rowList() {
            return Promise.resolve().then(function () {
                return __webpack_require__(70);
            });
        }
    }
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__ = __webpack_require__(10);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'section-settings',
    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            showHelp: false,
            showSearch: false,
            item: {}
        };
    },
    created: function created() {

        if (this.model.contents.length < 1) {
            this.$router.replace('/sections');
        } else {
            this.item = this.getItem();
        }
    },


    computed: {
        panelTitle: function panelTitle() {
            if (this.item['_upb_options']) {
                return Object(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__["sprintf"])(this.item._upb_options.meta.settings.title, this.item.attributes.title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.settings.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {
            return false;
        },
        panelMetaTools: function panelMetaTools() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.settings;
            } else {
                return false;
            }
        },
        contents: function contents() {
            return this.item['_upb_settings'] ? this.item : {};
        }
    },

    methods: {
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                util.warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        back: function back() {
            this.$router.go(-1);
        },
        showContentPanel: function showContentPanel() {

            var params = this.$route.params;

            this.$router.push({
                name: "section-contents",
                params: {
                    //tab       : 'sections',
                    sectionId: params.sectionId,
                    type: 'contents'
                }
            });
        },
        getItem: function getItem() {
            var sectionId = this.$route.params['sectionId'];
            return this.model.contents[sectionId];
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        }
    },

    components: __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__["a" /* default */]

});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_mixins__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugins_vue_select2__ = __webpack_require__(17);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6__plugins_vue_select2__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-ajax-icon-select',
    mixins: [__WEBPACK_IMPORTED_MODULE_2__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_5__user_mixins__["a" /* default */])('ajax-icon-select')],

    computed: {
        settings: function settings() {
            var _this = this;

            var settings = {
                ajax: {
                    cache: true,
                    url: this.l10n.ajaxUrl,
                    dataType: 'json',
                    data: function data(params) {
                        return {
                            action: _this.attributes.hooks.search,
                            extra: _this.attributes.extra,
                            query: params.term, // search query
                            search: params.term, // search query
                            _nonce: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getNonce()
                        };
                    },
                    processResults: function processResults(result, params) {
                        return {
                            results: result.data
                        };
                    }
                },
                minimumInputLength: 3,

                templateResult: function templateResult(state) {
                    return _this.template(state);
                },
                templateSelection: function templateSelection(state) {
                    return _this.template(state);
                },
                escapeMarkup: function escapeMarkup(markup) {
                    return markup;
                }
            };
            return __WEBPACK_IMPORTED_MODULE_3_extend___default()(true, settings, this.attributes.settings);
        },
        options: function options() {
            return this.attributes.options;
        }
    },

    mounted: function mounted() {
        var _this2 = this;

        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].wpAjax(this.attributes.hooks.load, {
            id: this.input,
            ids: this.input,
            load: this.input,
            extra: this.attributes.extra
        }, function (options) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this2.attributes, 'options', __WEBPACK_IMPORTED_MODULE_3_extend___default()(true, {}, options));
        }, function (error) {
            if (error == 0) {
                console.info("You need to implement wp ajax: \"wp_ajax_" + _this2.attributes.hooks.load + "\" action.");
            } else {
                console.info(error);
            }
        }, this.attributes.hooks.ajaxOptions || {
            cache: true,
            type: 'GET'
        });
    },


    methods: {
        template: function template(data) {

            if (!data.id || data.loading) {
                return data.text;
            }

            // Template format should be like: "<span class="select2-icon-input"><i class="%(id)s"></i>  %(title)s</div>"
            // And always should an id ( small ) not ID ( capital )

            // return jQuery(`<span class="select2-icon-input"><i class="${state.element.value}"></i> &nbsp; ${state.text}</span>`);
            if (_.isUndefined(this.attributes['template'])) {
                return "<span class=\"select2-icon-input\"><i class=\"" + data.id + "\"></i>  " + data.title + "</span>";
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_4_sprintf_js__["sprintf"])(this.attributes.template, data);
            }
        },
        onChange: function onChange(data, e) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', data.id.toString());
        },
        onRemove: function onRemove(data) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', '');
        }
    }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugins_vue_select2__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_mixins__ = __webpack_require__(5);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__plugins_vue_select2__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-ajax-select',

    mixins: [__WEBPACK_IMPORTED_MODULE_4__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_6__user_mixins__["a" /* default */])('ajax-select')],

    computed: {
        settings: function settings() {
            var _this = this;

            var settings = {
                multiple: this.multiple,
                ajax: {
                    cache: true,
                    url: this.l10n.ajaxUrl,
                    dataType: 'json',
                    data: function data(params) {
                        return {
                            action: _this.attributes.hooks.search,
                            extra: _this.attributes.extra,
                            query: params.term, // search query
                            search: params.term, // search query
                            multiple: _this.multiple,
                            _nonce: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].getNonce()
                        };
                    },
                    processResults: function processResults(result, params) {
                        return {
                            results: result.data
                        };
                    }
                },
                minimumInputLength: 3,

                templateResult: function templateResult(state) {
                    return _this.template(state);
                },
                templateSelection: function templateSelection(state) {
                    return _this.template(state);
                },
                escapeMarkup: function escapeMarkup(markup) {
                    return markup;
                }
            };

            return __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, settings, this.attributes.settings);
        },
        options: function options() {
            return this.attributes.options;
        }
    },

    mounted: function mounted() {
        var _this2 = this;

        __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].wpAjax(this.attributes.hooks.load, {
            id: this.input,
            ids: this.input,
            load: this.input,
            multiple: this.multiple,
            extra: this.attributes.extra
        }, function (options) {

            if (_this2.multiple) {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this2.attributes, 'options', __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, [], options));
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this2.attributes, 'options', __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {}, options));
            }
        }, function (error) {

            if (error == 0) {
                console.info("You need to implement wp ajax: \"wp_ajax_" + _this2.attributes.hooks.load + "\" action.");
            } else {
                console.info(error);
            }
        }, this.attributes.hooks.ajaxOptions || {
            cache: true,
            type: 'GET'
        });
    },


    methods: {
        template: function template(data) {

            if (!data.id || data.loading) {
                return data.text;
            }

            // Template format should be like: "<div> ID# %(id)s - %(title)s</div>"
            // And always should an id ( small ) not ID ( capital )

            if (_.isUndefined(this.attributes['template'])) {
                return "<div> ID# " + data.id + " - " + data.title + "</div>";
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.attributes.template, data);
            }
        },
        onChange: function onChange(data, e) {

            if (this.multiple) {
                var id = _.isNumber(data.id) ? data.id.toString() : data.id;
                this.input.push(id);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', data.id.toString());
            }
        },
        onRemove: function onRemove(data, event) {
            var _this3 = this;

            if (this.multiple) {

                // Need this hack to remove already select item for multiple select2 item
                this.$nextTick(function () {
                    jQuery(_this3.$el).find('select > option').each(function (el) {
                        if (jQuery(this).val() == data.id) {
                            jQuery(this).remove();
                        }
                    });
                });

                var id = _.isNumber(data.id) ? data.id.toString() : data.id;
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', _.without(this.input, id));
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', '');
            }
        }
    }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_mixins__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_vue_upb_media__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins_vue_background_position__ = __webpack_require__(209);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3__plugins_vue_upb_media__["a" /* default */]);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4__plugins_vue_background_position__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-background-image',

    mixins: [__WEBPACK_IMPORTED_MODULE_1__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__user_mixins__["a" /* default */])('background-image')],

    methods: {
        onInsert: function onInsert(e, attachment) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', attachment.url);
        },
        onRemove: function onRemove(e) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', '');
        },
        pointerMovedTo: function pointerMovedTo(position) {
            if (this.attributes.use) {
                this.setValueOf(this.attributes.use, position);
            }
        }
    }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_upb_media__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_upb_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_upb_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(2);
var _this = this;





var Directive = {
    inserted: function inserted(el, binding, vnode) {

        var frame = void 0;

        jQuery('.new-button', el).on('click', function (event) {

            event.preventDefault();

            // if the frame already exists, open it
            if (frame) {
                frame.open();
                return;
            }

            frame = new wp.media.view.MediaFrame.UPBMedia({
                title: vnode.context.attributes.title,
                button: {
                    text: vnode.context.attributes.buttons.add
                },
                upbOptions: {
                    size: vnode.context.attributes.size
                },
                selectedDisplaySettings: {
                    size: vnode.context.attributes.size
                },
                library: {
                    type: vnode.context.attributes.library
                },
                url: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].isLocal(vnode.context.attributes.value) ? '' : vnode.context.attributes.value
            });

            frame.on('insert', function () {
                var state = frame.state(),
                    attachment = {};

                if ('upb-embed' === state.get('id')) {
                    _.extend(attachment, { id: 0 }, state.props.toJSON());
                } else {
                    _.extend(attachment, state.get('selection').first().toJSON(), { url: state.get('selection').first().toJSON().src });
                }

                if (!vnode.context.onInsert) {
                    __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement the \"onInsert\" method", vnode.context);
                    return false;
                }

                vnode.context.onInsert(event, attachment);
            });

            frame.on('open', function () {
                var id = vnode.context.id;
                var size = vnode.context.size;
                var selection = frame.state().get('selection');
                selection.reset(id ? [wp.media.attachment(id)] : []);
            });

            frame.open();
        });

        jQuery('.remove-button', el).on('click', function (event) {
            event.preventDefault();

            if (!vnode.context.onRemove) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement the \"onRemove\" method", vnode.context);
            }

            vnode.context.onRemove(event);
        });

        jQuery(el).on('click', '.preview', function (event) {
            event.preventDefault();
            var metadata = {
                id: vnode.context.id || 0,
                url: vnode.context.src,
                size: vnode.context.size,
                attachment_id: vnode.context.id || 0,
                error: false
            };

            frame = wp.media({
                frame: 'image',
                state: 'image-details',
                metadata: metadata
            });

            frame.state('image-details').on('update', function () {
                var attachment = frame.state().attributes.image.toJSON();
                vnode.context.onInsert(event, attachment);
                _.delay(function () {
                    frame = null;
                });
            });

            frame.on('close', function () {
                _.delay(function () {
                    frame = null;
                });
            });

            frame.open();
        });
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (_.isUndefined(wp) || _.isUndefined(wp.media)) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("\"wp.media\" is not loaded or found globally to use \"vue-image-media\" directive..", _this);
    }

    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('upb-media', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-background-image-position',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('background-image-position')]
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-checkbox',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('checkbox')]
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-checkbox-icon',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('checkbox-icon')]
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_vue_colorpicker__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__plugins_vue_colorpicker__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-color',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__user_mixins__["a" /* default */])('color')],
    methods: {
        onColorChange: function onColorChange(color) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', color.toString());
        }
    }
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_mixins__ = __webpack_require__(5);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-contents',

    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__user_mixins__["a" /* default */])('contents')],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n
        };
    },


    computed: {
        id: function id() {
            return 'wp-editor-' + this.attributes._id;
        }
    },

    watch: {
        input: function input(value) {
            this.item.contents = value;
        }
    },

    beforeDestroy: function beforeDestroy() {
        this.destroyEditor(this.id);
    },
    mounted: function mounted() {

        this.buildEditor(this.id);
        // [...this.$el.querySelectorAll('.button.insert-media.add_media')].map()
        Array.from(this.$el.querySelectorAll('.button.insert-media.add_media'), function (el) {
            el.innerHTML = '<span class="wp-media-buttons-icon"></span>';
        });
    },


    methods: {
        saveValue: function saveValue(data) {
            this.input = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].wpKsesPost(data);
        },
        destroyEditor: function destroyEditor(id) {
            if (window.tinymce.get(id)) {
                wp.editor.remove(id);
            }
        },
        buildEditor: function buildEditor(id) {
            var _this = this;

            var editor = void 0;

            // Abort building if the textarea is gone, likely due to the widget having been deleted entirely.
            if (!document.getElementById(id)) {
                return;
            }

            // Add or enable the `wpview` plugin.
            jQuery(document).one('wp-before-tinymce-init.upb-editor', function (event, init) {
                // If somebody has removed all plugins, they must have a good reason.
                // Keep it that way.
                if (!init.plugins) {
                    return;
                } else if (!/\bwpview\b/.test(init.plugins)) {
                    init.plugins += ',wpview';
                }
            });

            wp.editor.initialize(id, this.l10n.editorSettings);

            editor = window.tinymce.get(id);

            if (!editor) {
                throw new Error('Failed to initialize editor');
            }

            editor.on('input change NodeChange paste blur hide', function (e) {
                editor.save();
                _this.saveValue(editor.getContent());
            });
        }
    }
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_mixins__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-device-hidden',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__user_mixins__["a" /* default */])('device-hidden')],
    computed: {
        options: function options() {
            var newOptions = [];
            var attributesOptions = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, [], this.attributes.options);
            while (attributesOptions.length > 0) {
                newOptions.push(attributesOptions.splice(0, this.attributes.split));
            }
            return newOptions;
        }
    },

    created: function created() {
        var _this = this;

        this.$watch("input", function (value) {
            _this.disabled();
        }, { immediate: true });
    },


    methods: {
        disabled: function disabled() {
            var _this2 = this;

            this.attributes.options.map(function (device) {

                device.disabled = false;

                _this2.input.map(function (selected) {

                    if (_this2.attributes.disable[selected]) {
                        var disable = _this2.attributes.disable[selected];
                        // console.log('id', device.id, 'selected', selected, 'disabled', disable);
                        // device.disabled = disable.includes(device.id);
                        if (disable.includes(device.id)) {
                            device.disabled = true;
                        }
                    }
                });
            });
        }
    }
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_mixins__ = __webpack_require__(5);
/* global tinymce, switchEditors */





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-editor',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__user_mixins__["a" /* default */])('editor')],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n
        };
    },


    computed: {
        id: function id() {
            return 'wp-editor-' + this.attributes._id;
        }
    },

    beforeDestroy: function beforeDestroy() {
        this.destroyEditor(this.id);
    },
    mounted: function mounted() {
        this.buildEditor(this.id);
        // [...this.$el.querySelectorAll('.button.insert-media.add_media')].map()
        Array.from(this.$el.querySelectorAll('.button.insert-media.add_media'), function (el) {
            el.innerHTML = '<span class="wp-media-buttons-icon"></span>';
        });
    },


    methods: {
        saveValue: function saveValue(data) {
            this.input = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].wpKsesPost(data);
        },
        destroyEditor: function destroyEditor(id) {
            if (window.tinymce.get(id)) {
                wp.editor.remove(id);
            }
        },
        buildEditor: function buildEditor(id) {
            var _this = this;

            var editor = void 0;

            // Abort building if the textarea is gone, likely due to the widget having been deleted entirely.
            if (!document.getElementById(id)) {
                return;
            }

            // Add or enable the `wpview` plugin.
            jQuery(document).one('wp-before-tinymce-init.upb-editor', function (event, init) {
                // If somebody has removed all plugins, they must have a good reason.
                // Keep it that way.
                if (!init.plugins) {
                    return;
                } else if (!/\bwpview\b/.test(init.plugins)) {
                    init.plugins += ',wpview';
                }
            });

            wp.editor.initialize(id, this.l10n.editorSettings);

            editor = window.tinymce.get(id);

            if (!editor) {
                throw new Error('Failed to initialize editor');
            }

            editor.on('input change NodeChange paste blur hide', function (e) {
                editor.save();
                _this.saveValue(editor.getContent());
            });
        }
    }
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-hidden'
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_mixins__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugins_vue_select2__ = __webpack_require__(17);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__plugins_vue_select2__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-icon-select',
    mixins: [__WEBPACK_IMPORTED_MODULE_3__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__user_mixins__["a" /* default */])('icon-select')],
    computed: {
        settings: function settings() {
            var _this = this;

            var settings = {
                templateResult: function templateResult(state) {
                    return _this.template(state);
                },
                templateSelection: function templateSelection(state) {
                    return _this.template(state);
                },
                escapeMarkup: function escapeMarkup(markup) {
                    return markup;
                }
            };
            return __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, settings, this.attributes.settings);
        }
    },

    methods: {
        template: function template(data) {
            if (!data.id) {
                return data.text;
            }

            data.icon = data.element.value;

            if (_.isUndefined(this.attributes['template'])) {
                return "<span class=\"select2-icon-input\"><i class=\"" + data.icon + "\"></i> " + data.text + "</span>";
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.attributes.template, data);
            }
        },
        onChange: function onChange(data, e) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', data.id.toString());
        },
        onRemove: function onRemove(data) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', '');
        }
    }
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_mixins__ = __webpack_require__(5);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-icon-popup',

    mixins: [__WEBPACK_IMPORTED_MODULE_2__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__user_mixins__["a" /* default */])('icon-popup')],

    data: function data() {
        return {
            show: false
        };
    },


    computed: {
        providers: function providers() {
            return this.attributes.providers;
        }
    },

    methods: {
        iconSelected: function iconSelected(selected) {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', selected.id);
        },
        removeIcon: function removeIcon() {
            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', '');
        },
        closePopup: function closePopup() {
            this.show = false;
        },
        openPopup: function openPopup() {
            this.show = true;
        }
    },

    components: {
        'upb-media-icon-popup': function upbMediaIconPopup() {
            return Promise.resolve().then(function () {
                return __webpack_require__(231);
            });
        }
    }
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-media-icon-popup',

    props: {
        title: {
            type: String,
            default: 'Icons'
        },
        button: {
            type: String,
            default: 'Add Icon'
        },
        providers: {
            type: Array,
            required: true
        },

        columns: {
            type: Number,
            default: 8
        }
    },

    data: function data() {
        return {

            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,

            queuedIcons: [],
            selected: {},
            selectedProvider: {},
            iconProviders: [],
            isLoading: false,
            searchIcon: '',

            start: 0,
            limit: 160,
            total: 0
        };
    },


    watch: {
        searchIcon: function searchIcon(value) {
            this.searchStringWatch();
        }
    },

    computed: {
        mediaFrameClass: function mediaFrameClass() {
            var frameClass = ['media-frame', 'mode-select', 'wp-core-ui', 'hide-router'];
            if (this.providers.length < 2) {
                frameClass.push('hide-menu');
            }
            return frameClass.join(' ');
        },
        icons: function icons() {
            var query = this.searchIcon.toLowerCase().trim();

            //if (query) {
            //    return this.queuedIcons.filter((icon, key) => {
            //        return new RegExp(query, 'gui').test(icon.name.toLowerCase().trim())
            //    })
            //}
            //else {
            return this.queuedIcons;
            //}
        }
    },

    created: function created() {
        this.defaultProvider();
    },
    mounted: function mounted() {
        this.loadMoreOnScroll();
    },


    methods: {
        defaultProvider: function defaultProvider() {

            this.iconProviders = this.providers.map(function (provider, index) {
                // O index is active one
                provider.active = index == 0;
                return provider;
            });

            this.setSelectedProvider();
        },
        activeProvider: function activeProvider(id) {
            this.iconProviders = this.providers.map(function (provider) {
                provider.active = provider.id == id;
                return provider;
            });
            this.setSelectedProvider();
        },
        setSelectedProvider: function setSelectedProvider() {
            this.selectedProvider = this.iconProviders.filter(function (provider) {
                return provider.active;
            }).pop();

            this.start = 0;
            this.total = 0;
            this.queuedIcons = [];
            this.fetchIcons();
        },


        searchStringWatch: _.debounce(function () {

            this.start = 0;
            this.total = 0;
            this.queuedIcons = [];

            this.fetchIcons();
        }, 400),

        loadMoreIcons: _.debounce(function () {
            this.fetchIcons();
        }, 400),

        loadMoreOnScroll: function loadMoreOnScroll() {
            var _this = this;

            var element = this.$el.querySelector('#upb-attachments');

            element.addEventListener('scroll', function () {

                var fullHeight = element.scrollHeight;
                var height = element.clientHeight;
                var top = element.scrollTop;
                var offset = 100; // start loading before 100px
                var alreadyScrolled = height + top + offset;

                if (alreadyScrolled > fullHeight && _this.total > _this.queuedIcons.length) {
                    _this.loadMoreIcons();
                }
            });
        },
        fetchIcons: function fetchIcons() {
            var _this2 = this;

            this.isLoading = true;
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].wpAjax('_upb_icon_popup_load', {
                provider: this.selectedProvider.id,
                start: this.start,
                limit: this.limit,
                total: this.total,
                search: this.searchIcon.toLowerCase().trim()
            }, function (iconObject) {
                _this2.isLoading = false;

                if (_this2.searchIcon.toLowerCase().trim()) {
                    _this2.queuedIcons = _.uniq(iconObject.icons);
                } else {
                    _this2.queuedIcons = _.uniq(_this2.queuedIcons.concat(iconObject.icons));
                }

                _this2.start = _this2.queuedIcons.length;
                _this2.total = parseInt(iconObject.total);
            }, function (error) {
                _this2.isLoading = false;

                console.log(error);
                console.info('%c Error on Icon fetch. Use filter "upb_icon_popup_icons" to add or modify icons list.', 'color:red; font-size:18px');
            }, {
                cache: true,
                type: 'GET'
            });
        },
        isSelected: function isSelected() {
            return !_.isEmpty(this.selected);
        },
        deSelectIcon: function deSelectIcon() {
            Vue.set(this, 'selected', {});
        },
        chooseIcon: function chooseIcon(icon) {
            Vue.set(this, 'selected', {
                id: icon.id,
                name: icon.name,
                provider: this.selectedProvider.title
            });
        },
        selectedIconClass: function selectedIconClass(icon) {

            var className = ['attachment', 'save-ready'];

            if (this.selected.id == icon.id) {

                className.push('selected');
                className.push('details');
            }
            return className.join(' ');
        },
        onCloseEvent: function onCloseEvent() {
            this.$emit('close');
        },
        onInsertEvent: function onInsertEvent() {
            this.$emit('insert', this.selected);
            this.onCloseEvent();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_mixins__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugins_vue_upb_media__ = __webpack_require__(77);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4__plugins_vue_upb_media__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-media-image',

    mixins: [__WEBPACK_IMPORTED_MODULE_2__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__user_mixins__["a" /* default */])('media-image')],

    data: function data() {
        return {
            id: '',
            size: '',
            src: ''
        };
    },
    created: function created() {
        this.parseImageData();
    },


    methods: {
        parseImageData: function parseImageData() {
            if (this.input) {
                var _input$split = this.input.split('|'),
                    _input$split2 = _slicedToArray(_input$split, 3),
                    id = _input$split2[0],
                    size = _input$split2[1],
                    src = _input$split2[2];

                if (!src) {
                    this.src = id;
                } else {
                    this.id = id;
                    this.size = size;
                    this.src = src;
                }
            }
        },
        combineImageData: function combineImageData(attachment) {
            this.id = attachment.id;
            this.size = attachment.size;
            this.src = attachment.url;
            this.input = [this.id, this.size, this.src].join('|');
        },
        onInsert: function onInsert(e, attachment) {
            this.combineImageData(attachment);
        },
        onRemove: function onRemove(e) {
            this.input = '';
            this.id = '';
            this.size = '';
            this.src = '';
        }
    }
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-media-query-radio-tab',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */]],
    computed: {
        currentDevice: function currentDevice() {
            this.setValue(this.store.currentPreviewDevice);
            return [this.store.currentPreviewDevice, 'form-group'].join(' ');
        }
    },
    methods: {
        setValue: function setValue(value) {

            Vue.set(this.attributes, 'value', value);
            Vue.set(this.model, this.target, value);

            // store.stateChanged();

            if (this.attributes['reload']) {
                // store.reloadPreview()
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-message',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__user_mixins__["a" /* default */])('message')],
    computed: {
        title: function title() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].wpKsesPost(this.attributes.title);
        }
    },
    methods: {
        messageClass: function messageClass() {
            return 'upb-input-message ' + this.attributes.style;
        }
    }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-heading',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__user_mixins__["a" /* default */])('heading')],
    computed: {
        title: function title() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].wpKsesPost(this.attributes.title);
        }
    }
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-number',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('number')]
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-radio',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('radio')]
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-radio-icon',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('radio-icon')]
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-radio-image',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('radio-image')]
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-range',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('range')]
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-spacing',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('spacing')],
    data: function data() {
        return {

            options: {},

            property: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },

            values: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            },

            shorthand: false
        };
    },

    computed: {
        generatedValue: function generatedValue() {
            var _this = this;

            var currentValue = this.input;

            return Object.keys(this.attributes.options).reduce(function (arr, cValue, cIndex) {
                var value = parseFloat(_this.property[cValue].toString());
                var val = isNaN(value) ? currentValue[cIndex] : '' + value + _this.attributes.unit;
                arr.push(val);
                return arr;
            }, []);
        }
    },

    watch: {
        'property.top': function propertyTop(value) {

            if (this.shorthand) {
                this.updateOtherPropertyValue(value);
            }

            if (!_.isEqual(this.input, this.generatedValue)) {
                this.setValue(this.generatedValue);
            }
        },
        'property.right': function propertyRight(value) {
            if (this.shorthand) {
                this.updateOtherPropertyValue(value);
            }

            if (!_.isEqual(this.input, this.generatedValue)) {
                this.setValue(this.generatedValue);
            }
        },
        'property.bottom': function propertyBottom(value) {
            if (this.shorthand) {
                this.updateOtherPropertyValue(value);
            }

            if (!_.isEqual(this.input, this.generatedValue)) {
                this.setValue(this.generatedValue);
            }
        },
        'property.left': function propertyLeft(value) {
            if (this.shorthand) {
                this.updateOtherPropertyValue(value);
            }

            if (!_.isEqual(this.input, this.generatedValue)) {
                this.setValue(this.generatedValue);
            }
        }
    },

    created: function created() {

        var currentValue = this.input;

        this.options = {
            top: this.attributes.options['top'],
            right: this.attributes.options['right'],
            bottom: this.attributes.options['bottom'],
            left: this.attributes.options['left']
        };

        this.calculateShorthand({
            top: isNaN(parseFloat(currentValue[0].toString())) ? '' : parseFloat(currentValue[0].toString()),
            right: isNaN(parseFloat(currentValue[1].toString())) ? '' : parseFloat(currentValue[1].toString()),
            bottom: isNaN(parseFloat(currentValue[2].toString())) ? '' : parseFloat(currentValue[2].toString()),
            left: isNaN(parseFloat(currentValue[3].toString())) ? '' : parseFloat(currentValue[3].toString())
        });
    },


    methods: {
        toggleShorthand: function toggleShorthand() {
            this.shorthand = !this.shorthand;
        },
        calculateShorthand: function calculateShorthand(currentValue) {
            var _this2 = this;

            var usingOptions = Object.keys(this.options).filter(function (key) {
                return _this2.options[key];
            });

            var totalOptions = usingOptions.length;

            if (totalOptions <= 1) {
                console.info('%c Better use type \'number\' or \'range\' instead of \'spacing\' for single spacing value.', 'color:red; font-size:18px');
            }

            var totalValues = usingOptions.reduce(function (total, option) {
                return total += parseFloat(currentValue[option]);
            }, 0);

            var checkValue = totalValues / totalOptions;

            this.shorthand = usingOptions.every(function (option) {
                var value = parseFloat(currentValue[option]);
                return value === checkValue;
            });

            Object.keys(this.options).map(function (option) {
                _this2.property[option] = currentValue[option].toString();
            });

            // console.log(usingOptions, currentValue, this.property, totalValues, (totalValues / totalOptions), this.shorthand)
        },
        isNumeric: function isNumeric(value) {
            return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
        },
        updateOtherPropertyValue: function updateOtherPropertyValue(value) {

            var currentValue = this.input;

            if (this.options['top']) {
                this.property.top = value;
                this.values.top = '' + value + this.attributes.unit;
            } else {
                this.values.top = currentValue[0].toString();
            }

            if (this.options['right']) {
                this.property.right = value;
                this.values.right = '' + value + this.attributes.unit;
            } else {
                this.values.right = currentValue[1].toString();
            }

            if (this.options['bottom']) {
                this.property.bottom = value;
                this.values.bottom = '' + value + this.attributes.unit;
            } else {
                this.values.bottom = currentValue[2].toString();
            }

            if (this.options['left']) {
                this.property.left = value;
                this.values.left = '' + value + this.attributes.unit;
            } else {
                this.values.left = currentValue[3].toString();
            }
        }
    }
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-select',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('select')]
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_mixins__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_vue_select2__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3__plugins_vue_select2__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-select2',
    mixins: [__WEBPACK_IMPORTED_MODULE_1__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__user_mixins__["a" /* default */])('select2')],
    methods: {
        onChange: function onChange(data, e) {

            if (this.multiple) {
                var id = _.isNumber(data.id) ? data.id.toString() : data.id;
                this.input.push(id);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', data.id.toString());
            }
        },
        onRemove: function onRemove(data) {
            if (this.multiple) {
                var id = _.isNumber(data.id) ? data.id.toString() : data.id;
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', _.without(this.input, id));
            }
        }
    }
});

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_mixins__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugins_vue_select2__ = __webpack_require__(17);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__plugins_vue_select2__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-select2-icon',
    mixins: [__WEBPACK_IMPORTED_MODULE_3__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_4__user_mixins__["a" /* default */])('select2-icon')],
    computed: {
        settings: function settings() {
            var _this = this;

            var settings = {
                templateResult: function templateResult(state) {
                    return _this.template(state);
                },
                templateSelection: function templateSelection(state) {
                    return _this.template(state);
                },
                escapeMarkup: function escapeMarkup(markup) {
                    return markup;
                }
            };
            return __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, settings, this.attributes.settings);
        }
    },
    methods: {
        template: function template(data) {
            if (!data.id) {
                return data.title;
            }

            data.icon = data.element.dataset.icon;

            if (_.isUndefined(this.attributes['template'])) {
                return "<span class=\"select2-icon-input\"><i class=\"" + data.icon + "\"></i> " + data.title + "</span>";
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.attributes.template, data);
            }
        },
        onChange: function onChange(data, e) {

            if (this.multiple) {
                var id = _.isNumber(data.id) ? data.id.toString() : data.id;
                this.input.push(id);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', data.id.toString());
            }
        },
        onRemove: function onRemove(data) {
            if (this.multiple) {
                var id = _.isNumber(data.id) ? data.id.toString() : data.id;
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this, 'input', _.without(this.input, id));
            }
        }
    }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-text',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('text')]
});

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-textarea',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('textarea')]
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_mixins__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-input-toggle',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__common__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__user_mixins__["a" /* default */])('toggle')]
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__ = __webpack_require__(10);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'row-settings',
    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            showHelp: false,
            showSearch: false,
            item: {}
        };
    },
    created: function created() {

        if (this.model.contents.length < 1) {
            this.$router.replace("/sections");
        } else {
            this.item = this.getItem();
        }
    },


    computed: {
        panelTitle: function panelTitle() {
            if (this.item['_upb_options']) {
                return Object(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__["sprintf"])(this.item._upb_options.meta.settings.title, this.item.attributes.title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.settings.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {
            return false;
        },
        panelMetaTools: function panelMetaTools() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.settings;
            } else {
                return false;
            }
        },
        contents: function contents() {
            return this.item['_upb_settings'] ? this.item : {};
        }
    },

    methods: {
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                util.warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        back: function back() {
            this.$router.go(-1);
        },
        showContentPanel: function showContentPanel() {

            this.$router.push({
                name: "section-contents",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    type: 'contents'
                }
            });
        },
        getItem: function getItem() {

            var sectionId = this.$route.params['sectionId'];
            var rowId = this.$route.params['rowId'];

            // console.log(this.model.contents[sectionId]['contents'][rowId]);

            return this.model.contents[sectionId]['contents'][rowId];
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        }
    },

    components: __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__["a" /* default */]
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__);






/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'column-contents',
    props: ['index', 'model'],

    data: function data() {
        return {

            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            showHelp: false,
            showSearch: false,
            sortable: {
                handle: '> .tools > .handle',
                placeholder: "upb-sort-placeholder",
                axis: 'y'
            },
            searchQuery: '',
            item: {}
        };
    },
    created: function created() {
        if (this.model.contents.length < 1) {
            this.$router.replace('/sections');
        } else {
            this.item = this.getItem();
        }
    },


    computed: {
        panelTitle: function panelTitle() {

            if (this.item['_upb_options']) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.item._upb_options.meta.contents.title, this.item.attributes.title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.contents.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.contents.search;
            } else {
                return false;
            }
        },
        panelMetaTools: function panelMetaTools() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.contents;
            } else {
                return false;
            }
        },
        contents: function contents() {

            if (!this.item['contents']) {
                return {};
            }

            var query = this.searchQuery.toLowerCase().trim();

            if (query) {
                return this.item.contents.filter(function (data) {
                    var title = data.attributes['title'] ? data.attributes.title : data._upb_options.element.name;
                    return new RegExp(query, 'gui').test(title.toLowerCase().trim());
                });
            } else {
                return this.item.contents;
            }
        }
    },

    methods: {
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        back: function back() {
            this.$router.go(-1);
        },
        panelClass: function panelClass() {
            return ["upb-" + this.item.tag + "-panel", "upb-panel-wrapper"].join(' ');
        },
        getItem: function getItem() {
            var sectionId = this.$route.params['sectionId'];
            var rowId = this.$route.params['rowId'];
            var columnId = this.$route.params['columnId'];
            return this.model.contents[sectionId].contents[rowId].contents[columnId];
        },
        showSettingsPanel: function showSettingsPanel() {
            this.$router.push({
                name: "column-settings",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    type: 'settings'
                }
            });
        },
        showElementsPanel: function showElementsPanel() {
            this.$router.push({
                name: "elements",
                params: {
                    tab: "elements"
                }
            });
        },
        deleteItem: function deleteItem(index) {
            this.item.contents.splice(index, 1);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        cloneItem: function cloneItem(index, item) {
            var cloned = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, item);
            if (cloned.attributes['title']) {
                cloned.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.clone, cloned.attributes.title);
            }
            this.item.contents.splice(index + 1, 0, cloned);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        onUpdate: function onUpdate(e, values) {
            var _this = this;

            //###
            //this.contents.splice(values.newIndex, 0, this.contents.splice(values.oldIndex, 1).pop());
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();

            //### If you Need to modify this.model.contents then you should use this code :)
            var list = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], this.item.contents);

            list.splice(values.newIndex, 0, list.splice(values.oldIndex, 1).pop());

            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.item, 'contents');

            this.$nextTick(function () {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this.item, 'contents', __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], list));
            });

            // store.stateChanged();
        },
        onStart: function onStart(e) {
            this.searchQuery = '';
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            var _this2 = this;

            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (_this2.showSearch) {
                    _this2.$el.querySelector('input[type="search"]').focus();
                }
            });
        },
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        }
    },

    components: {
        'element-list': function elementList() {
            return Promise.resolve().then(function () {
                return __webpack_require__(271);
            });
        }
    }
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'element-list',
    props: ['index', 'model'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            item: []
        };
    },
    created: function created() {
        this.$watch('model.attributes', function (value) {
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        }, { deep: true });
    },

    methods: {
        title: function title() {
            return this.model.attributes['title'] ? this.model.attributes.title : this.model._upb_options.element.name;
        },
        activeFocus: function activeFocus() {
            this.model._upb_options.focus = true;
        },
        removeFocus: function removeFocus() {
            this.model._upb_options.focus = false;
        },
        contentsAction: function contentsAction(id, tool) {

            this.removeFocus();

            this.$router.push({
                name: 'element-' + id,
                params: {
                    //tab       : 'sections',
                    elementId: this.index,
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    type: id
                }
            });
        },
        settingsAction: function settingsAction(id, tool) {

            this.removeFocus();

            this.$router.push({
                name: 'element-' + id,
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.index,
                    type: id
                }
            });
        },
        deleteAction: function deleteAction(id, tool) {

            var title = this.model.attributes['title'] ? this.model.attributes.title : this.model._upb_options.element.name;

            if (confirm(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.l10n.delete, title))) {
                this.$emit('deleteItem');
            }
        },
        cloneAction: function cloneAction(id, tool) {
            this.$emit('cloneItem');
        },
        enableAction: function enableAction(id, tool) {
            this.model.attributes.enable = false;
        },
        disableAction: function disableAction(id, tool) {
            this.model.attributes.enable = true;
        },
        enabled: function enabled(id) {

            if (id == 'enable') {
                return this.model.attributes.enable;
            }

            if (id == 'disable') {
                return !this.model.attributes.enable;
            }

            return true;
        },
        clickActions: function clickActions(id, tool) {
            if (this[id + 'Action']) {
                this[id + 'Action'](id, tool);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement "' + id + 'Action" method.', this);
            }
        },
        toolsClass: function toolsClass(id, tool) {
            return tool['class'] ? id + ' ' + tool['class'] : '' + id;
        },
        itemClass: function itemClass() {

            // If not enable found default class will be true
            var isEnable = _.isUndefined(this.model.attributes['enable']) || this.model.attributes.enable ? true : false;

            return [isEnable ? 'item-enabled' : 'item-disabled', this.model._upb_options.focus ? 'item-focused' : 'item-unfocused'].join(' ');
        }
    }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__ = __webpack_require__(10);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'column-settings',
    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            showHelp: false,
            showSearch: false,
            item: {}
        };
    },
    created: function created() {

        if (this.model.contents.length < 1) {
            this.$router.replace("/sections");
        } else {
            this.item = this.getItem();
        }
    },


    computed: {
        panelTitle: function panelTitle() {
            if (this.item['_upb_options']) {
                return Object(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__["sprintf"])(this.item._upb_options.meta.settings.title, this.item.attributes.title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.settings.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {
            return false;
        },
        panelMetaTools: function panelMetaTools() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.settings;
            } else {
                return false;
            }
        },
        contents: function contents() {
            return this.item['_upb_settings'] ? this.item : {};
        }
    },

    methods: {
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                util.warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        back: function back() {
            this.$router.go(-1);
        },
        showContentPanel: function showContentPanel() {

            this.$router.push({
                name: "column-contents",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    type: 'contents'
                }
            });
        },
        getItem: function getItem() {

            var sectionId = this.$route.params['sectionId'];
            var rowId = this.$route.params['rowId'];
            var columnId = this.$route.params['columnId'];
            return this.model.contents[sectionId].contents[rowId].contents[columnId];
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        }
    },

    components: __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__["a" /* default */]
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__);







/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'element-contents',
    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            breadcrumb: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].breadcrumb,

            showHelp: false,
            showSearch: false,
            searchQuery: '',
            sortable: {
                handle: '> .tools > .handle',
                placeholder: "upb-sort-placeholder",
                axis: 'y'
            },
            item: {}
        };
    },
    created: function created() {

        if (this.model.contents.length < 1) {
            this.$router.replace("/sections");
        } else {
            this.item = this.getItem();
        }
    },


    computed: {
        panelTitle: function panelTitle() {
            if (this.item['_upb_options']) {
                var title = this.item.attributes['title'] ? this.item.attributes.title : this.item._upb_options.element.name;
                return Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.item._upb_options.meta.contents.title, title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {
            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.contents.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {
            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.contents.search;
            } else {
                return false;
            }
        },
        panelMetaTools: function panelMetaTools() {

            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.contents;
            } else {
                return false;
            }
        },
        contents: function contents() {

            if (!this.item['contents']) {
                return {};
            }

            var query = this.searchQuery.toLowerCase().trim();

            if (query) {
                return this.item.contents.filter(function (data) {
                    var title = data.attributes['title'] ? data.attributes.title : data._upb_options.element.name;
                    return new RegExp(query, 'gui').test(title.toLowerCase().trim());
                });
            } else {
                return this.item.contents;
            }
        }
    },

    methods: {
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        back: function back() {
            this.$router.go(-1);
        },
        addNew: function addNew(content) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, content);
            data.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(data.attributes.title, this.item.contents.length + 1);

            this.item.contents.push(data);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        deleteItem: function deleteItem(index) {
            this.item.contents.splice(index, 1);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        cloneItem: function cloneItem(index, item) {
            var cloned = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, {}, item);
            if (cloned.attributes['title']) {
                cloned.attributes.title = Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.clone, cloned.attributes.title);
            }

            // Default Active Is False
            if (cloned.attributes['active'] && cloned.attributes.active) {
                cloned.attributes.active = false;
            }

            this.item.contents.splice(index + 1, 0, cloned);
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        },
        onStart: function onStart(e) {
            this.searchQuery = '';
        },
        onUpdate: function onUpdate(e, values) {
            var _this = this;

            //###
            //this.contents.splice(values.newIndex, 0, this.contents.splice(values.oldIndex, 1).pop());
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();

            var list = __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], this.item.contents);

            list.splice(values.newIndex, 0, list.splice(values.oldIndex, 1).pop());

            __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.item, 'contents');

            this.$nextTick(function () {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this.item, 'contents', __WEBPACK_IMPORTED_MODULE_2_extend___default()(true, [], list));
            });
        },


        // Alias of showContentPanel
        showContentsPanel: function showContentsPanel() {
            this.showContentPanel();
        },
        showContentPanel: function showContentPanel() {

            this.$router.push({
                name: "element-contents",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.$route.params.elementId,
                    type: 'contents'
                }
            });
        },
        showSettingsPanel: function showSettingsPanel() {

            this.$router.push({
                name: "element-settings",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.$route.params.elementId,
                    type: 'settings'
                }
            });
        },
        getItem: function getItem() {

            var sectionId = this.$route.params['sectionId'];
            var rowId = this.$route.params['rowId'];
            var columnId = this.$route.params['columnId'];
            var elementId = this.$route.params['elementId'];
            return this.model.contents[sectionId].contents[rowId].contents[columnId].contents[elementId];
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            var _this2 = this;

            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (_this2.showSearch) {
                    _this2.$el.querySelector('input[type="search"]').focus();
                }
            });
        }
    },

    components: {
        'element-item-list': function elementItemList() {
            return Promise.resolve().then(function () {
                return __webpack_require__(277);
            });
        }
    }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'element-item-list',
    props: ['index', 'model'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            item: []
        };
    },
    created: function created() {
        this.$watch("model.attributes", function (value) {
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
        }, { deep: true });
    },

    methods: {
        title: function title() {
            return this.model.attributes['title'] ? this.model.attributes.title : this.model._upb_options.element.name;
        },
        activeFocus: function activeFocus() {
            this.model._upb_options.focus = true;
        },
        removeFocus: function removeFocus() {
            this.model._upb_options.focus = false;
        },
        contentsAction: function contentsAction(id, tool) {

            this.removeFocus();

            this.$router.push({
                name: "element-item-" + id,
                params: {
                    //tab       : 'sections',
                    elementItemId: this.index,
                    elementId: this.$route.params.elementId,
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    type: id
                }
            });
        },
        settingsAction: function settingsAction(id, tool) {

            this.removeFocus();

            this.$router.push({
                name: "element-item-" + id,
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.$route.params.elementId,
                    elementItemId: this.index,
                    type: id
                }
            });
        },
        deleteAction: function deleteAction(id, tool) {

            var title = this.model.attributes['title'] ? this.model.attributes.title : this.model._upb_options.element.name;

            if (confirm(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.l10n.delete, title))) {
                this.$emit('deleteItem');
            }
        },
        cloneAction: function cloneAction(id, tool) {
            this.$emit('cloneItem');
        },
        enableAction: function enableAction(id, tool) {
            this.model.attributes.enable = false;
        },
        disableAction: function disableAction(id, tool) {
            this.model.attributes.enable = true;
        },
        enabled: function enabled(id) {

            if (id == 'enable') {
                return this.model.attributes.enable;
            }

            if (id == 'disable') {
                return !this.model.attributes.enable;
            }

            return true;
        },
        active: function active(id) {

            if (id == 'active') {
                return this.model.attributes.active;
            }
            return true;
        },
        clickActions: function clickActions(id, tool) {

            if (tool.action == false) {
                return '';
            }

            if (this[id + "Action"]) {
                this[id + "Action"](id, tool);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement \"" + id + "Action\" method. Or Make Action false on " + id, this);
            }
        },
        toolsClass: function toolsClass(id, tool) {
            return tool['class'] ? id + " " + tool['class'] : "" + id;
        },
        itemClass: function itemClass() {

            // If not enable found default class will be true
            var isEnable = _.isUndefined(this.model.attributes['enable']) || this.model.attributes.enable ? true : false;
            var isDefaultActive = _.isUndefined(this.model.attributes['active']) || this.model.attributes.active ? true : false;

            return [isDefaultActive ? 'item-active' : '', isEnable ? 'item-enabled' : 'item-disabled', this.model._upb_options.focus ? 'item-focused' : 'item-unfocused'].join(' ');
        }
    }
});

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_input_fields__ = __webpack_require__(10);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'element-settings',
    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            showHelp: false,
            showSearch: false,
            item: {}
        };
    },
    created: function created() {

        if (this.model.contents.length < 1) {
            this.$router.replace("/sections");
        } else {
            this.item = this.getItem();
        }
    },


    computed: {
        panelTitle: function panelTitle() {
            if (this.item['_upb_options']) {
                var title = this.item.attributes['title'] ? this.item.attributes.title : this.item._upb_options.element.name;
                return Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.item._upb_options.meta.settings.title, title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {
            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.settings.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {
            return false;
        },
        panelMetaTools: function panelMetaTools() {
            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.settings;
            } else {
                return false;
            }
        },
        contents: function contents() {
            return this.item['_upb_settings'] ? this.item : {};
        }
    },

    methods: {
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        back: function back() {
            this.$router.go(-1);
        },


        // Alias of showContentPanel
        showContentsPanel: function showContentsPanel() {
            this.showContentPanel();
        },
        showContentPanel: function showContentPanel() {

            this.$router.push({
                name: "element-contents",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.$route.params.elementId,
                    type: 'contents'
                }
            });
        },
        showSettingsPanel: function showSettingsPanel() {

            this.$router.push({
                name: "element-settings",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.$route.params.elementId,
                    type: 'settings'
                }
            });
        },
        getItem: function getItem() {

            var sectionId = this.$route.params['sectionId'];
            var rowId = this.$route.params['rowId'];
            var columnId = this.$route.params['columnId'];
            var elementId = this.$route.params['elementId'];
            return this.model.contents[sectionId].contents[rowId].contents[columnId].contents[elementId];
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        }
    },

    components: __WEBPACK_IMPORTED_MODULE_3__settings_input_fields__["a" /* default */]

});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_input_fields__ = __webpack_require__(10);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'element-item-settings',
    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n,
            showHelp: false,
            showSearch: false,
            item: {}
        };
    },
    created: function created() {

        if (this.model.contents.length < 1) {
            this.$router.replace("/sections");
        } else {
            this.item = this.getItem();
        }
    },


    computed: {
        panelTitle: function panelTitle() {
            if (this.item['_upb_options']) {
                var title = this.item.attributes['title'] ? this.item.attributes.title : this.item._upb_options.element.name;
                return Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.item._upb_options.meta.settings.title, title);
            } else {
                return false;
            }
        },
        panelMetaHelp: function panelMetaHelp() {
            if (this.item['_upb_options']) {
                return this.item._upb_options.meta.settings.help;
            } else {
                return false;
            }
        },
        panelMetaSearch: function panelMetaSearch() {
            return false;
        },
        panelMetaTools: function panelMetaTools() {
            if (this.item['_upb_options']) {
                return this.item._upb_options.tools.settings;
            } else {
                return false;
            }
        },
        contents: function contents() {
            return this.item['_upb_settings'] ? this.item : {};
        }
    },

    methods: {
        toolsAction: function toolsAction(tool) {
            var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            var data = tool.data ? tool.data : false;

            if (!this[tool.action]) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement '" + tool.action + "' method.", this);
            } else {
                this[tool.action](data, event);
            }
        },
        isSubPanel: function isSubPanel() {
            return this.$route.meta['subPanel'] ? this.$route.meta.subPanel : false;
        },
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        back: function back() {
            this.$router.go(-1);
        },


        // Alias of showContentPanel
        showContentsPanel: function showContentsPanel() {
            this.showContentPanel();
        },
        showContentPanel: function showContentPanel() {

            this.$router.push({
                name: "element-item-contents",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.$route.params.elementId,
                    elementItemId: this.$route.params.elementItemId,
                    type: 'contents'
                }
            });
        },
        showSettingsPanel: function showSettingsPanel() {

            this.$router.push({
                name: "element-item-settings",
                params: {
                    //tab       : 'sections',
                    sectionId: this.$route.params.sectionId,
                    rowId: this.$route.params.rowId,
                    columnId: this.$route.params.columnId,
                    elementId: this.$route.params.elementId,
                    elementItemId: this.$route.params.elementItemId,
                    type: 'settings'
                }
            });
        },
        getItem: function getItem() {

            var sectionId = this.$route.params['sectionId'];
            var rowId = this.$route.params['rowId'];
            var columnId = this.$route.params['columnId'];
            var elementId = this.$route.params['elementId'];
            var elementItemId = this.$route.params['elementItemId'];
            return this.model.contents[sectionId].contents[rowId].contents[columnId].contents[elementId].contents[elementItemId];
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        }
    },

    components: __WEBPACK_IMPORTED_MODULE_3__settings_input_fields__["a" /* default */]
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'elements-panel',
    props: ['index', 'model'],

    data: function data() {
        return {
            showHelp: false,
            showSearch: false,
            searchQuery: ''
        };
    },


    computed: {
        items: function items() {
            return this.model.contents.filter(function (data) {

                if (data._upb_options.core) {
                    return false;
                } else {
                    if (data._upb_options.element.child) {
                        return false;
                    }
                }

                return true;
            });
        },
        contents: function contents() {
            var query = this.searchQuery.toLowerCase().trim();
            if (query) {
                return this.items.filter(function (data) {
                    return new RegExp(query, 'gui').test(data._upb_options.element.name.toLowerCase().trim());
                });
            } else {
                return this.items;
            }
        }
    },

    methods: {
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            var _this = this;

            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (_this.showSearch) {
                    _this.$el.querySelector('input[type="search"]').focus();
                }
            });
        }
    },

    components: {
        'upb-elements-list': function upbElementsList() {
            return Promise.resolve().then(function () {
                return __webpack_require__(285);
            });
        }
    }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_vue_draggable__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__plugins_vue_draggable__["a" /* default */]);

// import UIDraggable from '../../plugins/vue-ui-draggable'
// Vue.use(UIDraggable);

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'upb-elements-list',

    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n
        };
    },


    computed: {
        elementTagClass: function elementTagClass() {
            return [this.model._upb_options.element.tag.toLowerCase(), 'element-tag-ribbon'];
        }
    },

    methods: {
        activeFocus: function activeFocus() {
            this.model._upb_options.focus = true;
        },
        removeFocus: function removeFocus() {
            this.model._upb_options.focus = false;
        },
        contentsAction: function contentsAction(id, tool) {

            this.$emit('showContentsPanel');

            // console.log('OPEN CONTENTS PANEL')
            //this.breadcrumb.push(`${this.model.id}`)
        },
        settingsAction: function settingsAction(id, tool) {
            // this.$emit('showSettingsPanel')

            // console.log('OPEN SETTINGS PANEL')

            //this.$route.params
            this.$router.push({
                name: "row-" + id,
                params: {
                    //tab       : 'sections',
                    rowId: this.index,
                    //sectionId : this.$route.params
                    type: id
                }
            });
        },
        deleteAction: function deleteAction(id, tool) {
            if (confirm(Object(__WEBPACK_IMPORTED_MODULE_3_sprintf_js__["sprintf"])(this.l10n.delete, this.model.attributes.title))) {
                this.$emit('deleteItem');
            }
        },
        cloneAction: function cloneAction(id, tool) {
            this.$emit('cloneItem');
        },
        enableAction: function enableAction(id, tool) {
            this.model.attributes.enable = false;
        },
        disableAction: function disableAction(id, tool) {
            this.model.attributes.enable = true;
        },
        clickActions: function clickActions(id, tool) {

            console.log(id + "Action");

            if (this[id + "Action"]) {
                this[id + "Action"](id, tool);
            } else {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn("You need to implement " + id + "Action method.", this);
            }
        },
        enabled: function enabled(id) {

            if (id == 'enable') {
                return this.model.attributes.enable;
            }

            if (id == 'disable') {
                return !this.model.attributes.enable;
            }

            return true;
        },
        toolsClass: function toolsClass(id, tool) {
            return tool['class'] ? id + " " + tool['class'] : "" + id;
        },
        itemClass: function itemClass() {

            return this.model.tag + "-element upb-element element";
        },
        getContentPanel: function getContentPanel(id) {
            return id + "-contents-panel";
        },
        getSettingPanel: function getSettingPanel(id) {
            return id + "-settings-panel";
        }
    }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__ = __webpack_require__(10);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'settings-panel',
    props: ['index', 'model'],

    data: function data() {
        return {
            showHelp: false,
            showSearch: false
        };
    },


    computed: {
        contents: function contents() {
            var query = this.searchQuery.toLowerCase().trim();
            if (query) {
                return this.model.contents.filter(function (data) {
                    return new RegExp(query, 'gui').test(data.title.toLowerCase().trim());
                });
            } else {
                return this.model.contents;
            }
        }
    },

    methods: {
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            var _this = this;

            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (_this.showSearch) {
                    _this.$el.querySelector('input[type="search"]').focus();
                }
            });
        }
    },

    components: __WEBPACK_IMPORTED_MODULE_2__settings_input_fields__["a" /* default */]
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'layouts-panel',
    props: ['index', 'model'],

    data: function data() {
        return {
            showHelp: false,
            showSearch: false,
            searchQuery: ''
        };
    },


    computed: {
        items: function items() {
            return this.model.contents;
        },
        contents: function contents() {
            var query = this.searchQuery.toLowerCase().trim();
            if (query) {
                return this.items.filter(function (data) {
                    var title = new RegExp(query, 'gui').test(data.title.toLowerCase().trim());
                    var desc = data.desc ? new RegExp(query, 'gui').test(data.desc.toLowerCase().trim()) : false;
                    return title || desc;
                });
            } else {
                return this.items;
            }
        }
    },

    methods: {
        panelClass: function panelClass() {
            return ["upb-" + this.model.id + "-panel", "upb-panel-wrapper"].join(' ');
        },
        toggleHelp: function toggleHelp() {
            this.showSearch = false;
            this.showHelp = !this.showHelp;
        },
        toggleFilter: function toggleFilter() {
            var _this = this;

            this.showHelp = false;
            this.showSearch = !this.showSearch;

            this.$nextTick(function () {
                if (_this.showSearch) {
                    _this.$el.querySelector('input[type="search"]').focus();
                }
            });
        }
    },

    components: {
        'upb-layouts-list': function upbLayoutsList() {
            return Promise.resolve().then(function () {
                return __webpack_require__(292);
            });
        }
    }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-layouts-list',
    props: ['index', 'model'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].l10n
        };
    },

    computed: {
        image: function image() {
            return this.model.preview ? model.preview : this.l10n.layoutPlaceholder;
        }
    },
    methods: {
        useLayout: function useLayout() {
            var _this = this;

            var template = this.model.template.trim();
            try {
                var code = JSON.parse(template);

                // console.log(code);
                // Send Ajax and get UPB Options
                __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].addUPBOptions(code, function (data) {
                    if (_.isArray(data)) {
                        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].addContentsToTab('sections', data);
                        _this.$toast.success(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(_this.l10n.layoutAdded, _this.l10n.pageTitle));
                        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
                        _this.$router.replace('/sections');
                    }
                }, function (data) {
                    console.log(data);
                });
            } catch (err) {
                // console.log('Could Not Copy', err);
                this.$toast.error('Use valid JSON Data');
            }
        }
    }
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_vue_nprogress__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugins_vue_toastr__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_vue_sortable__ = __webpack_require__(301);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('upb-breadcrumb', function () {
    return Promise.resolve().then(function () {
        return __webpack_require__(302);
    });
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1__plugins_vue_nprogress__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2__plugins_vue_toastr__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3__plugins_vue_sortable__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-sidebar',
    data: function data() {
        return this.$root.$data;
    },

    components: {
        'upb-sidebar-header': function upbSidebarHeader() {
            return Promise.resolve().then(function () {
                return __webpack_require__(304);
            });
        },
        'upb-sidebar-content': function upbSidebarContent() {
            return Promise.resolve().then(function () {
                return __webpack_require__(309);
            });
        },
        'upb-sidebar-footer': function upbSidebarFooter() {
            return Promise.resolve().then(function () {
                return __webpack_require__(312);
            });
        },
        'upb-sidebar-sub-panel': function upbSidebarSubPanel() {
            return Promise.resolve().then(function () {
                return __webpack_require__(315);
            });
        }
    }
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-breadcrumb',
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            breadcrumb: [],
            path: [],
            link: ''
        };
    },
    created: function created() {
        var _this = this;

        var sections = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {}, __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].tabs.filter(function (t) {
            return t.id == _this.$route.params.tab;
        }).pop());

        var sliced = this.$route.path.split('/').slice(2, -2); // trim sections and contents|settings

        this.path = this.$route.path.split('/').slice(1, -2);

        // Sections Added
        this.link = "/" + sections.id;
        this.breadcrumb.push({ title: sections.title, link: "/" + sections.id });

        if (sliced.length > 0) {
            var unflattenPath = this.unflatten(sliced);
            this.generateBreadcrumb(sections.contents, unflattenPath);
        }
    },


    methods: {
        className: function className() {
            return ["breadcrumb", this.breadcrumb.length > 1 ? 'breadcrumb-arrow' : ''].join(' ');
        },
        goTo: function goTo(link) {
            if (link) {
                this.$router.replace(link);
            }
        },
        generateBreadcrumb: function generateBreadcrumb(contents, path) {
            var index = path[0]['index'];
            var child = path[0]['child'];
            var data = contents[index];
            this.link += "/" + index;

            var title = data.attributes['title'] ? data.attributes.title : data._upb_options.element.name;
            var link = this.link + "/" + this.$route.params.type;

            this.breadcrumb.push({ title: title, link: link });

            if (child.length > 0) {
                this.generateBreadcrumb(data.contents, child);
            }
        },
        unflatten: function unflatten(arr) {
            var newlist = [];
            newlist.push({ index: arr.shift(), child: [] });
            if (arr.length > 0) {
                newlist[0].child = this.unflatten(arr);
            }
            return newlist;
        }
    }
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-sidebar-header',
    props: ['index', 'model'],

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n
        };
    },


    methods: {
        removeActive: function removeActive() {
            this.model.map(function (item) {
                item.active = false;
            });
        },
        save: function save() {
            var _this = this;

            if (__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].isDirty()) {

                this.$progressbar.show();
                __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].saveState(function () {
                    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].stateSaved();
                    // store.reloadPreview();
                    _this.$progressbar.hide();
                    _this.$toast.success(_this.l10n.saved);
                }, function () {
                    _this.$progressbar.hide();
                    _this.$toast.error(_this.l10n.savingProblem);
                });
            }
        },
        isDirty: function isDirty() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].isDirty();
        }
    },

    components: {
        'upb-sidebar-header-item': function upbSidebarHeaderItem() {
            return Promise.resolve().then(function () {
                return __webpack_require__(306);
            });
        }
    }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-sidebar-header-item',
    props: ['index', 'model'],

    methods: {
        url: function url() {
            return '/' + this.model.id;
        },
        isDirty: function isDirty() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].isDirty();
        }
    }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-sidebar-contents',
    props: ['index', 'model'],
    data: function data() {
        return {

            item: {},

            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            breadcrumb: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].breadcrumb,

            showHelp: false,
            showSearch: false,
            searchQuery: '',
            sortable: {
                handle: '> .tools > .handle',
                placeholder: "upb-sort-placeholder",
                axis: 'y'
            },

            transitionName: 'slide-left'
        };
    },


    watch: {
        $route: function $route(to, from) {
            var toDepth = to.path.split('/').length;
            var fromDepth = from.path.split('/').length;
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';

            // Close Sub Panel If opened
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].closeSubPanel();
            this.item = this.getTabContent();
        }
    },

    created: function created() {
        this.item = this.getTabContent();
    },


    methods: {
        getItem: function getItem() {

            var item = _.findWhere(this.model, { id: this.$route.params.tab });

            var sectionId = this.$route.params['sectionId'];
            var rowId = this.$route.params['rowId'];
            var columnId = this.$route.params['columnId'];

            var type = this.$route.params['type'] == 'settings' ? '_upb_settings' : this.$route.params['type'].trim();

            // Get Element

            // Get Elements

            // Get Column
            if (this.has('sectionId') && this.has('rowId') && this.has('columnId')) {
                // this.item = item.contents[this.$route.params['sectionId']].contents[this.$route.params['rowId']].contents[this.$route.params['columnId']]
                this.item = item.contents[sectionId].contents[rowId][type][columnId];
            }

            // Get Row
            else if (this.has('sectionId') && this.has('rowId') && !this.has('columnId')) {
                    //this.item = item.contents[this.$route.params['sectionId']].contents[this.$route.params['rowId']]

                    this.item = item.contents[sectionId][type][rowId];
                }

                // Get Section
                else if (this.has('sectionId') && !this.has('rowId') && !this.has('columnId')) {
                        this.item = item[type][sectionId];
                    }
        },
        getTabContent: function getTabContent() {
            return _.findWhere(this.model, { id: this.$route.params.tab });
        },
        has: function has(keyName) {
            return typeof this.$route.params[keyName] == 'number';
        }
    }
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-sidebar-footer',
    props: ['index', 'model'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            devices: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].devices,
            sidebarExpand: true,
            skeletonPreview: false,
            deviceWidths: {},
            actualDevice: '',
            deviceSwitched: false,
            currentDevices: []
        };
    },


    computed: {
        devicePreview: function devicePreview() {
            return this.devices.map(function (device) {
                if (device.active) {
                    return device.id;
                }
            }).join('');
        }
    },

    created: function created() {
        var _this = this;

        this.deviceWidths = this.devices.reduce(function (widths, device) {
            widths[device.id] = parseFloat(device.width);
            return widths;
        }, {});

        this.windowResize();

        window.addEventListener('resize', function () {
            return _this.windowResize();
        });
    },


    methods: {

        windowResize: _.debounce(function () {
            var _this2 = this;

            // console.log(window.innerWidth); // 1400

            this.deviceSwitched = false;

            this.currentDevices = Object.keys(this.deviceWidths).filter(function (deviceId) {
                return window.innerWidth >= _this2.deviceWidths[deviceId];
            });

            var lastDevice = _.last(Object.keys(this.deviceWidths));

            if (this.currentDevices.length < 1) {
                this.currentDevices.push(lastDevice);
            }

            this.actualDevice = this.currentDevices[0];

            this.devices.map(function (d) {
                d.active = d.id == _this2.actualDevice;
            });

            this.toggleResponsivePreviewWidth(this.actualDevice);
            // this.toggleResponsivePreview(this.actualDevice);
        }, 300),

        deviceAvailable: function deviceAvailable(deviceId) {
            return this.currentDevices.includes(deviceId);
        },
        currentDevice: function currentDevice(deviceId) {
            return this.devicePreview == deviceId;
        },
        collapseSidebar: function collapseSidebar() {
            this.sidebarExpand = false;
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].sidebarExpanded = false;
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].subpanel = '';
            document.getElementById('upb-wrapper').classList.remove('expanded');
            document.getElementById('upb-wrapper').classList.add('collapsed');
            //this.windowResize();
        },
        expandSidebar: function expandSidebar() {
            this.sidebarExpand = true;
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].sidebarExpanded = true;
            document.getElementById('upb-wrapper').classList.remove('collapsed');
            document.getElementById('upb-wrapper').classList.add('expanded');
            //this.windowResize();
        },
        toggleSkeletonPreview: function toggleSkeletonPreview() {

            this.skeletonPreview = !this.skeletonPreview;
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].subpanel = '';

            if (this.skeletonPreview) {
                document.getElementById('upb-wrapper').classList.remove('preview-default');
                document.getElementById('upb-wrapper').classList.add('preview-skeleton');
            } else {
                document.getElementById('upb-wrapper').classList.remove('preview-skeleton');
                document.getElementById('upb-wrapper').classList.add('preview-default');
            }
        },
        toggleResponsivePreviewWidth: function toggleResponsivePreviewWidth(deviceId) {

            document.getElementById('upb-wrapper').classList.add('preview-' + deviceId);

            // console.log('clicked: ', deviceId, 'actual: ', this.actualDevice);

            if (this.actualDevice == deviceId) {
                document.getElementById('upb-preview-wrapper').style.width = '100%';
            } else {
                if (this.deviceWidths[deviceId]) {
                    document.getElementById('upb-preview-wrapper').style.width = this.deviceWidths[deviceId] + 'px';
                }
            }
        },
        toggleResponsivePreview: function toggleResponsivePreview(deviceId) {

            this.devices.map(function (d) {
                d.active = d.id == deviceId;
                document.getElementById('upb-wrapper').classList.remove('preview-' + d.id);
            });

            this.deviceSwitched = true;

            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].currentPreviewDevice = deviceId;

            this.toggleResponsivePreviewWidth(deviceId);
        }
    }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-sidebar-sub-panel',
    props: ['index', 'model', 'panel'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            devices: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].devices,
            sidebarExpand: true,
            skeletonPreview: false
        };
    },


    computed: {
        subPanelClass: function subPanelClass() {
            return ['sub-panel-wrapper', 'sub-panel-' + this.panel + '-opened'].join(' ');
        },
        subPanelComponent: function subPanelComponent() {
            return 'upb-sub-panel-' + this.panel;
        }
    },

    watch: {
        panel: function panel(panelId) {

            if (_.isEmpty(panelId)) {
                this.closeSubPanel();
            } else {
                this.openSubPanel(panelId);
            }
        }
    },

    methods: {
        openSubPanel: function openSubPanel(panel) {
            document.getElementById('upb-wrapper').classList.add('show-subpanel');
        },
        closeSubPanel: function closeSubPanel() {
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].subpanel = '';
            document.getElementById('upb-wrapper').classList.remove('show-subpanel');
        }
    },

    components: {
        'upb-sub-panel-sections': function upbSubPanelSections() {
            return Promise.resolve().then(function () {
                return __webpack_require__(317);
            });
        }
    }
});

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_copy_to_clipboard__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_copy_to_clipboard__);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-sub-panel-sections',
    props: ['index', 'model'],
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            searchQuery: '',
            showTextarea: false,
            textareaContents: '',
            item: []
        };
    },


    computed: {
        contents: function contents() {

            var query = this.searchQuery.toLowerCase().trim();
            if (query) {
                return this.item.filter(function (data) {
                    return new RegExp(query, 'gui').test(data.attributes.title.toLowerCase().trim());
                });
            } else {
                return this.item;
            }
        }
    },

    created: function created() {
        this.loadContents();
    },


    methods: {
        loadContents: function loadContents() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getSavedSections(function (contents) {
                _this.$nextTick(function () {
                    Vue.set(this, 'item', contents);
                });
            }, function (data) {
                console.log(data);
            });
        },
        toggleTextArea: function toggleTextArea() {
            this.textareaContents = '';
            this.showTextarea = !this.showTextarea;
        },
        saveSection: function saveSection() {
            var _this2 = this;

            var data = this.textareaContents.trim();

            if (data) {

                try {
                    var item = JSON.parse(data);

                    if (item.tag == 'upb-section' && _.isArray(item.contents) && _.isObject(item.attributes)) {

                        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].saveSectionToOption(item, function (data) {
                            _this2.toggleTextArea();
                            _this2.loadContents();
                            _this2.$toast.success(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(_this2.l10n.sectionAdded, ''));
                        });
                    } else {
                        this.$toast.error('Use valid section content');
                    }
                } catch (err) {
                    // console.log('Could Not Copy', err);
                    this.$toast.error('Use valid JSON Data');
                }
            }
        },
        deleteSection: function deleteSection(index) {
            var _this3 = this;

            this.item.splice(index, 1);

            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].saveAllSectionToOption(this.item, function (data) {
                _this3.$toast.success(_this3.l10n.sectionDeleted);
            }, function (data) {
                console.log(data);
            });
        },
        copySection: function copySection(index) {
            var item = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {}, this.item[index]);
            var json = JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].cleanup([item], false).pop());
            __WEBPACK_IMPORTED_MODULE_3_copy_to_clipboard___default()(json);
            this.$toast.success(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(this.l10n.sectionCopied, item.attributes.title));
        },
        addSection: function addSection(index) {
            var _this4 = this;

            var item = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {}, this.item[index]);

            this.model.filter(function (tab) {
                if (tab.id == 'sections') {
                    tab.contents.push(item);
                    _this4.$toast.success(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(_this4.l10n.sectionAdded, item.attributes.title));

                    tab.contents[tab.contents.length - 1]._upb_options.focus = true;
                }
            });

            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].stateChanged();
            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].closeSubPanel();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalPreviewMixins__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentPreviewMixins__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugins_vue_droppable__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugins_vue_preview_element__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plugins_vue_ui_droppable__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plugins_vue_ui_draggable__ = __webpack_require__(327);











__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('upb-preview-mini-toolbar', function () {
    return Promise.resolve().then(function () {
        return __webpack_require__(328);
    });
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5__plugins_vue_droppable__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6__plugins_vue_preview_element__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_7__plugins_vue_ui_droppable__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_8__plugins_vue_ui_draggable__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getAllUPBElements(function (elements) {

    elements.map(function (element) {

        if (element._upb_options.previews && (_.isArray(element._upb_options.previews) || _.isObject(element._upb_options.previews))) {

            var previews = _.isObject(element._upb_options.previews) ? _.values(element._upb_options.previews) : element._upb_options.previews;

            previews.map(function (el) {

                var template = el.template;
                var component = el.component;
                var componentMixins = el.mixins;
                var upbComponentMixins = _.isEmpty(__WEBPACK_IMPORTED_MODULE_4__componentPreviewMixins__["a" /* default */][template]) ? false : __WEBPACK_IMPORTED_MODULE_4__componentPreviewMixins__["a" /* default */][template];

                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(component, function (resolve, reject) {
                    __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getShortCodePreviewTemplate(template, function (templateData) {

                        resolve({
                            name: component,
                            template: templateData,
                            mixins: [__WEBPACK_IMPORTED_MODULE_3__globalPreviewMixins__["a" /* default */], upbComponentMixins, componentMixins]
                        });
                    });
                });
            });
        }
        //else {
        var template = element._upb_options.preview.template;
        //let component          = `upb-${element.tag}`;
        var component = element._upb_options.preview.component;
        var componentMixins = JSON.parse(element._upb_options.preview.mixins);
        //let upbComponentMixins = _.isEmpty(componentPreviewMixins[element.tag]) ? false : componentPreviewMixins[element.tag];
        var upbComponentMixins = typeof __WEBPACK_IMPORTED_MODULE_4__componentPreviewMixins__["a" /* default */][template] === 'undefined' ? {} : __WEBPACK_IMPORTED_MODULE_4__componentPreviewMixins__["a" /* default */][template];

        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(component, function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getShortCodePreviewTemplate(template, function (templateData) {

                if (_.isEmpty(templateData)) {
                    console.info("%c \"" + element.tag + "\" preview file \"previews/" + template + ".php\" is not available or empty.", 'color:red; font-size:18px');
                }
                resolve({
                    name: component,
                    template: templateData || "<div style=\"color: red\">\"" + element.tag + "\" preview file \"previews/" + template + ".php\" is not available or empty.</div>",
                    mixins: [__WEBPACK_IMPORTED_MODULE_3__globalPreviewMixins__["a" /* default */], upbComponentMixins, componentMixins]
                });
            });
        });
        //}
    });
}, function () {});

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-preview',
    data: function data() {
        return {};
    },

    computed: {
        model: function model() {
            return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getContentsOfTab('sections').pop();
        },
        settings: function settings() {
            var settings = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getContentsOfTab('settings').pop();
            return settings['contents'] ? settings.contents : [];
        }
    },

    updated: function updated() {
        if (this.model.contents) {
            this.addKeyIndex();
        } else {
            this.$nextTick(function () {
                this.addKeyIndex();
            });
        }
    },
    created: function created() {

        this.addKeyIndex();

        /*this.$watch('model.contents', _=> {
         // ELEMENTS POSITION changes then create element
         //    this.addKeyIndex();
         }, {deep : true});*/
    },


    methods: {
        addKeyIndex: function addKeyIndex() {
            var regenerate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (_.isArray(this.model.contents)) {
                this.model.contents.map(function (m, i) {
                    m._upb_options['_keyIndex'] = "" + i;

                    //this.addIndexAttribute(m, m.attributes, m.contents, regenerate);
                });
            }
        },
        addIndexAttribute: function addIndexAttribute(model, attrs, contents) {
            var _this = this;

            var regenerate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (_.isArray(contents)) {
                contents.map(function (m, i) {
                    if (__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].isElementRegistered(m.tag)) {
                        //m._upb_options['focus']     = false;

                        //if (regenerate) {
                        //    m._upb_options['_keyIndex'] = `${model._upb_options._keyIndex}/${i}`;
                        //}

                        //if (_.isUndefined(m._upb_options['_keyIndex'])) {
                        m._upb_options['_keyIndex'] = model._upb_options._keyIndex + "/" + i;
                        //}

                        _this.addIndexAttribute(m, m.attributes, m.contents, regenerate);
                    } else {
                        console.info("%c Element \"" + m.tag + "\" is used but not registered. It's going to remove...", 'color:red; font-size:18px');
                        _this.model.contents.splice(i, 1);
                        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].stateChanged();
                        _this.$toast.warning(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(_this.l10n.elementNotRegistered, m.tag));
                    }
                });
            }
        }
    }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upb-preview-mini-toolbar',
    props: {
        parent: {
            type: Object,
            required: true
        },
        model: {
            type: Object
        },
        contents: {
            type: Boolean,
            default: true
        },
        settings: {
            type: Boolean,
            default: true
        },
        onlyBorder: {
            type: Boolean,
            default: false
        },
        showDelete: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n
        };
    },

    computed: {
        is_movable: function is_movable() {
            return !this.model._upb_options.core && !this.model._upb_options.element.child;
        },
        is_sidebar_expanded: function is_sidebar_expanded() {

            if (this.$root.$data.store.sidebarExpanded) {
                Vue.set(this.model._upb_options, 'hasMiniToolbar', true);
            } else {
                Vue.set(this.model._upb_options, 'hasMiniToolbar', false);
            }

            return this.$root.$data.store.sidebarExpanded;
        },
        is_enabled: function is_enabled() {

            if (!_.isUndefined(this.model.attributes['enable'])) {
                return this.model.attributes.enable;
            } else {
                return true;
            }
        },
        $router: function $router() {
            return this.$root.$data.store.panel._router;
        },
        $route: function $route() {
            return this.$root.$data.store.panel._route;
        },
        has_contents: function has_contents() {
            return _.isArray(this.model.contents);
        },
        has_settings: function has_settings() {
            return _typeof(this.model.attributes) === 'object';
        },
        is_focused: function is_focused() {
            return this.model._upb_options.focus;
        }
    },
    methods: {
        className: function className() {
            return ['upb-preview-mini-toolbar', this.is_focused ? 'highlight' : ''].join(' ');
        },
        openContentsPanel: function openContentsPanel() {
            var _this = this;

            this.$router.replace('/sections');
            this.$nextTick(function () {
                var path = '/sections/%/contents'.replace('%', _this.model._upb_options._keyIndex);
                _this.$router.replace(path);
            });
        },
        removeElement: function removeElement() {
            if (this.showDelete) {
                if (confirm(Object(__WEBPACK_IMPORTED_MODULE_1_sprintf_js__["sprintf"])(this.l10n.delete, this.model._upb_options.element.name))) {

                    var index = this.model._upb_options._keyIndex.split('/').pop();
                    this.parent.contents.splice(index, 1);

                    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].stateChanged();

                    this.$router.replace('/elements');
                }
            }
        },
        openSettingsPanel: function openSettingsPanel() {
            var _this2 = this;

            this.$router.replace('/sections');
            this.$nextTick(function () {
                var path = '/sections/%/settings'.replace('%', _this2.model._upb_options._keyIndex);
                _this2.$router.replace(path);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
__webpack_require__(331);
__webpack_require__(332);
__webpack_require__(333);
__webpack_require__(334);
__webpack_require__(335);
module.exports = __webpack_require__(336);


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UPBSidebar_vue__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UPBPreview_vue__ = __webpack_require__(321);






__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].loadTabContents();

var upbBuilder = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    el: '#upb-sidebar',
    data: {
        store: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */]
    },

    mounted: function mounted() {
        this.$nextTick(function () {
            document.getElementById('upb-pre-loader').classList.add('loaded');
        });
    },


    render: function render(createElement) {
        return createElement(__WEBPACK_IMPORTED_MODULE_3__UPBSidebar_vue__["a" /* default */]);
    }
});

var previewWindow = {

    upbBuilderPreview: null,

    frame: document.getElementById('upb-preview-frame'),
    frameDocument: document.getElementById('upb-preview-frame').contentDocument || document.getElementById('upb-preview-frame').contentWindow.document,

    destroy: function destroy() {
        if (this.upbBuilderPreview) {
            this.upbBuilderPreview.$destroy();
        }
    },
    mount: function mount() {

        __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].panel = upbBuilder;

        if (__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getSetting('enable')) {
            this.upbBuilderPreview = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
                data: {
                    store: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */]
                },
                render: function render(createElement) {
                    return createElement(__WEBPACK_IMPORTED_MODULE_4__UPBPreview_vue__["a" /* default */]);
                }
            }).$mount(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].previewDocument().getElementById(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].getSetting('position')));
        }
    },
    setUrl: function setUrl() {
        // document.getElementById('upb-preview-frame').src = document.getElementById('upb-preview-frame').dataset.url;
        this.frame.src = this.frame.dataset.url;
    }
};

window.addEventListener('load', function () {
    previewWindow.setUrl();
});

previewWindow.frame.addEventListener('load', function () {
    previewWindow.destroy();
    previewWindow.mount();
});

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(66);



Vue.use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["default"]);

var config = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {}, __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].router_config);
var routes = [{
    path: '',
    redirect: '/sections'
}, {
    name: 'sections',
    path: '/:tab(sections)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(192);
        });
    }
}, {
    name: 'section-contents',
    path: '/:tab(sections)/:sectionId(\\d+)/:type(contents)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(197);
        });
    }, // row list and column list
    meta: { subPanel: true }
}, {
    name: 'section-settings',
    path: '/:tab(sections)/:sectionId(\\d+)/:type(settings)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(202);
        });
    }, // section setting
    meta: { subPanel: true }
}, {
    name: 'row-contents',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:type(contents)',
    component: {
        template: '<span></span>',
        created: function created() {
            this.$router.replace("/sections/" + this.$route.params.sectionId + "/" + this.$route.params.type);
        }
    },
    meta: { subPanel: true }
}, {
    name: 'row-settings',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:type(settings)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(268);
        });
    },
    meta: { subPanel: true }
}, {
    name: 'column-contents',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:columnId(\\d+)/:type(contents)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(270);
        });
    },
    meta: { subPanel: true }
}, {
    name: 'column-settings',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:columnId(\\d+)/:type(settings)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(274);
        });
    },
    meta: { subPanel: true }
}, {
    name: 'element-contents',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:columnId(\\d+)/:elementId(\\d+)/:type(contents)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(276);
        });
    },
    meta: { subPanel: true }
}, {
    name: 'element-settings',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:columnId(\\d+)/:elementId(\\d+)/:type(settings)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(280);
        });
    },
    meta: { subPanel: true }
}, {
    name: 'element-item-contents',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:columnId(\\d+)/:elementId(\\d+)/:elementItemId(\\d+)/:type(contents)',
    // component : ElementItemContents,
    meta: { subPanel: true }
}, {
    name: 'element-item-settings',
    path: '/:tab(sections)/:sectionId(\\d+)/:rowId(\\d+)/:columnId(\\d+)/:elementId(\\d+)/:elementItemId(\\d+)/:type(settings)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(282);
        });
    },
    meta: { subPanel: true }
}, {
    name: 'elements',
    path: '/:tab(elements)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(284);
        });
    }
}, {
    name: 'settings',
    path: '/:tab(settings)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(289);
        });
    }
}, {
    name: 'layouts',
    path: '/:tab(layouts)',
    component: function component() {
        return Promise.resolve().then(function () {
            return __webpack_require__(291);
        });
    }
}];

// New Routes from WP Hook
if (__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].routes.length > 0) {
    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].routes.map(function (r) {
        if (r['component']) {
            r.component = window[r.component];
            routes.push(r);
        }
    });
}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_2_vue_router__["default"](Object.assign({}, config, { routes: routes })));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionsPanel_js__ = __webpack_require__(67);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bed5b74_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionsPanel_vue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionsPanel_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bed5b74_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionsPanel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bed5b74_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionsPanel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/panels/SectionsPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bed5b74", Component.options)
  } else {
    hotAPI.reload("data-v-4bed5b74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 193 */,
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionList_js__ = __webpack_require__(68);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fde6679_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionList_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionList_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fde6679_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fde6679_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/section/SectionList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fde6679", Component.options)
  } else {
    hotAPI.reload("data-v-2fde6679", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      class: _vm.itemClass(),
      on: {
        mouseover: function($event) {
          _vm.activeFocus()
        },
        mouseout: function($event) {
          _vm.removeFocus()
        }
      }
    },
    [
      _c(
        "ul",
        { staticClass: "tools" },
        _vm._l(_vm.model._upb_options.tools.list, function(tool, id) {
          return _vm.enabled(id)
            ? _c(
                "li",
                {
                  key: id,
                  class: _vm.toolsClass(id, tool),
                  attrs: { title: tool.title },
                  on: {
                    click: function($event) {
                      _vm.clickActions(id, tool)
                    }
                  }
                },
                [_c("i", { class: tool.icon })]
              )
            : _vm._e()
        })
      ),
      _vm._v(" "),
      _c("div", {
        domProps: { textContent: _vm._s(_vm.model.attributes.title) }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2fde6679", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.model.title) }
              })
            ]),
            _vm._v(" "),
            _vm.model.help
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.model.search
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.model.help) } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSearch
            ? _c("div", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  attrs: { placeholder: _vm.model.search, type: "search" },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.model.tools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    class: _vm.toolsActiveClass(tool),
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        {
          directives: [
            {
              name: "sortable",
              rawName: "v-sortable",
              value: _vm.sortable,
              expression: "sortable"
            }
          ],
          staticClass: "upb-panel-contents-items"
        },
        _vm._l(_vm.contents, function(item, index) {
          return _c(_vm.listPanel(item.tag), {
            key: index,
            tag: "component",
            attrs: { index: index, model: item },
            on: {
              cloneItem: function($event) {
                _vm.cloneItem(index, item)
              },
              deleteItem: function($event) {
                _vm.deleteItem(index)
              }
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4bed5b74", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionContents_js__ = __webpack_require__(69);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e2ecd16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionContents_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionContents_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e2ecd16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionContents_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e2ecd16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionContents_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/section/SectionContents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e2ecd16", Component.options)
  } else {
    hotAPI.reload("data-v-5e2ecd16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.model._upb_options
    ? _c(
        "li",
        {
          class: _vm.itemClass(),
          on: {
            mouseover: function($event) {
              _vm.activeFocus()
            },
            mouseout: function($event) {
              _vm.removeFocus()
            }
          }
        },
        [
          _c(
            "ul",
            { staticClass: "tools" },
            _vm._l(_vm.model._upb_options.tools.list, function(tool, id) {
              return _vm.enabled(id)
                ? _c(
                    "li",
                    {
                      key: id,
                      class: _vm.toolsClass(id, tool),
                      attrs: { title: tool.title },
                      on: {
                        click: function($event) {
                          _vm.clickActions(id, tool)
                        }
                      }
                    },
                    [_c("i", { class: tool.icon })]
                  )
                : _vm._e()
            })
          ),
          _vm._v(" "),
          _c("div", {
            domProps: { textContent: _vm._s(_vm.model.attributes.title) }
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-460a22e3", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_RowContents_js__ = __webpack_require__(72);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac10df_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowContents_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_RowContents_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac10df_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowContents_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38ac10df_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowContents_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/row/RowContents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38ac10df", Component.options)
  } else {
    hotAPI.reload("data-v-38ac10df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { staticClass: "row-contents-layout" }, [
    _c("li", {
      staticClass: "row-grid-title",
      domProps: { textContent: _vm._s(_vm.layoutOfTitle) }
    }),
    _vm._v(" "),
    _c("li", {
      staticClass: "row-grid-screen-sizes-title",
      domProps: { textContent: _vm._s(_vm.grid.deviceSizeTitle) }
    }),
    _vm._v(" "),
    _c("li", { staticClass: "row-grid-screen-sizes" }, [
      _c(
        "ul",
        _vm._l(_vm.devices, function(device) {
          return _c(
            "li",
            {
              key: device.id,
              class: _vm.deviceClass(device),
              attrs: { title: _vm.deviceTitle(device) },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.currentDevice(device)
                }
              }
            },
            [
              _c("i", { class: device.icon }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: device.reconfig,
                      expression: "device.reconfig"
                    }
                  ],
                  staticClass: "re-config-icon"
                },
                [_vm._v("!")]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "device-activity",
                  attrs: { title: _vm.toggleDeviceTitle(device) },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.toggleDevice(device)
                    }
                  }
                },
                [
                  device.active
                    ? _c("span", { staticClass: "active" }, [_vm._v("✓")])
                    : _c("span", { staticClass: "inactive" }, [_vm._v("×")])
                ]
              )
            ]
          )
        })
      )
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "row-grid-layouts-wrapper" }, [
      _c(
        "ul",
        _vm._l(_vm.devices, function(device) {
          return device.current
            ? _c(
                "li",
                {
                  key: device.id,
                  class: [
                    { "active-device": device.active, current: device.current }
                  ],
                  attrs: { title: device.title }
                },
                [
                  _c("ul", [
                    _c("li", {
                      staticClass: "row-grid-structure-title",
                      domProps: {
                        textContent: _vm._s(
                          _vm.l10n.columnLayout + " - " + device.title
                        )
                      }
                    }),
                    _vm._v(" "),
                    device.reconfig
                      ? _c("li", {
                          staticClass: "reconfig-message",
                          domProps: {
                            textContent: _vm._s(_vm.toggleDeviceTitle(device))
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "row-grid-structure-wrapper" },
                      [
                        _vm._l(_vm.columnLayouts(device), function(
                          layout,
                          lid
                        ) {
                          return _c(
                            "a",
                            {
                              key: lid,
                              class: _vm.columnLayoutClass(layout, device.id),
                              attrs: { title: layout.value, href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.changeColumnLayout(layout, device.id)
                                }
                              }
                            },
                            _vm._l(_vm.miniColumns(layout.value), function(
                              item,
                              iid
                            ) {
                              return _c("span", {
                                key: iid,
                                class: _vm.miniColumnItemClass(item)
                              })
                            })
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            class: _vm.manualLayoutClass(device.id),
                            attrs: { title: _vm.l10n.columnManual, href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.openManualInput(device.id)
                              }
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "manual",
                              domProps: {
                                textContent: _vm._s(_vm.l10n.columnManual)
                              }
                            })
                          ]
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showManualInput[device.id],
                            expression: "showManualInput[device.id]"
                          }
                        ],
                        staticClass: "row-grid-column"
                      },
                      [
                        _c("div", { staticClass: "row-grid-column-input" }, [
                          device.ratioSuggestion
                            ? _c("div", {
                                staticClass: "ratio-suggestion-message",
                                domProps: {
                                  textContent: _vm._s(device.ratioSuggestionMsg)
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model.lazy",
                                value: _vm.selectedColumnLayout[device.id],
                                expression: "selectedColumnLayout[device.id]",
                                modifiers: { lazy: true }
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: {
                              value: _vm.selectedColumnLayout[device.id]
                            },
                            on: {
                              change: function($event) {
                                _vm.$set(
                                  _vm.selectedColumnLayout,
                                  device.id,
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    device.active
                      ? _c("li", {
                          staticClass: "row-grid-order-title",
                          domProps: {
                            textContent: _vm._s(
                              _vm.l10n.columnOrder + " - " + device.title
                            )
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("li", { staticClass: "row-grid-order-wrapper" }, [
                      _c(
                        "ul",
                        {
                          directives: [
                            {
                              name: "sortable",
                              rawName: "v-sortable",
                              value: _vm.sortable,
                              expression: "sortable"
                            }
                          ],
                          staticClass: "row-grid-order upb-mini-row"
                        },
                        _vm._l(_vm.contents, function(content, index) {
                          return device.active
                            ? _c(
                                "li",
                                {
                                  key: index,
                                  class: _vm.sortOrderClass(
                                    index,
                                    content,
                                    device
                                  ),
                                  on: {
                                    click: function($event) {
                                      _vm.openColumnContents(index)
                                    },
                                    mouseover: function($event) {
                                      _vm.activeFocus(index)
                                    },
                                    mouseout: function($event) {
                                      _vm.removeFocus(index)
                                    }
                                  }
                                },
                                [
                                  _c("div", {
                                    attrs: { title: _vm.l10n.columnTitle },
                                    domProps: {
                                      textContent: _vm._s(
                                        _vm.columnLayoutTitle(content, device)
                                      )
                                    }
                                  })
                                ]
                              )
                            : _vm._e()
                        })
                      )
                    ])
                  ])
                ]
              )
            : _vm._e()
        })
      )
    ]),
    _vm._v(" "),
    _c("li")
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38ac10df", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSearch
            ? _c("div", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  attrs: { placeholder: _vm.panelMetaSearch, type: "search" },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "li",
      { staticClass: "upb-panel-contents" },
      [
        _c(
          "ul",
          {
            directives: [
              {
                name: "sortable",
                rawName: "v-sortable",
                value: _vm.sortable,
                expression: "sortable"
              }
            ],
            staticClass: "upb-panel-contents-items"
          },
          _vm._l(_vm.contents, function(item, index) {
            return _c(_vm.listPanel(item.tag), {
              key: index,
              tag: "component",
              attrs: { index: index, selected: _vm.defaultRowId, model: item },
              on: {
                showContentsPanel: function($event) {
                  _vm.openRowContentsPanel(index)
                },
                deleteItem: function($event) {
                  _vm.deleteItem(index)
                },
                cloneItem: function($event) {
                  _vm.cloneItem(index, item)
                }
              }
            })
          })
        ),
        _vm._v(" "),
        _vm._l(_vm.contents, function(item, index) {
          return _vm.isCurrentRow(index)
            ? _c(_vm.rowContentsComponent, {
                key: index,
                tag: "component",
                attrs: { row: _vm.defaultRowId, index: index, model: item }
              })
            : _vm._e()
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e2ecd16", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionSettings_js__ = __webpack_require__(73);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_83bb6404_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionSettings_vue__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SectionSettings_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_83bb6404_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionSettings_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_83bb6404_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SectionSettings_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/section/SectionSettings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83bb6404", Component.options)
  } else {
    hotAPI.reload("data-v-83bb6404", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputAjaxIconSelect_js__ = __webpack_require__(74);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44f878e7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputAjaxIconSelect_vue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputAjaxIconSelect_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44f878e7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputAjaxIconSelect_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44f878e7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputAjaxIconSelect_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputAjaxIconSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44f878e7", Component.options)
  } else {
    hotAPI.reload("data-v-44f878e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "select2",
                  rawName: "v-select2",
                  value: _vm.settings,
                  expression: "settings"
                }
              ],
              staticClass: "select2-input",
              staticStyle: { width: "100%" },
              attrs: { id: _vm.attributes._id }
            },
            [
              _c("option", {
                attrs: { title: _vm.options.title },
                domProps: {
                  value: _vm.input,
                  textContent: _vm._s(_vm.options.text)
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-44f878e7", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputAjaxSelect_js__ = __webpack_require__(75);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57501ee4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputAjaxSelect_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputAjaxSelect_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57501ee4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputAjaxSelect_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57501ee4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputAjaxSelect_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputAjaxSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57501ee4", Component.options)
  } else {
    hotAPI.reload("data-v-57501ee4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _vm.multiple
          ? _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "select2",
                      rawName: "v-select2",
                      value: _vm.settings,
                      expression: "settings"
                    }
                  ],
                  staticClass: "select2-input select2-input-multiple",
                  staticStyle: { width: "100%" },
                  attrs: { multiple: "", id: _vm.attributes._id }
                },
                _vm._l(_vm.options, function(option) {
                  return _c("option", {
                    key: option.id,
                    attrs: { selected: "selected", title: option.title },
                    domProps: {
                      value: option.id,
                      textContent: _vm._s(option.text)
                    }
                  })
                })
              )
            ])
          : _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "select2",
                      rawName: "v-select2",
                      value: _vm.settings,
                      expression: "settings"
                    }
                  ],
                  staticClass: "select2-input",
                  staticStyle: { width: "100%" },
                  attrs: { id: _vm.attributes._id }
                },
                [
                  _c("option", {
                    attrs: { title: _vm.options.title },
                    domProps: {
                      value: _vm.input,
                      textContent: _vm._s(_vm.options.text)
                    }
                  })
                ]
              )
            ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-57501ee4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputBackgroundImage_js__ = __webpack_require__(76);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bcea4f2a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputBackgroundImage_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputBackgroundImage_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bcea4f2a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputBackgroundImage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bcea4f2a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputBackgroundImage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputBackgroundImage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bcea4f2a", Component.options)
  } else {
    hotAPI.reload("data-v-bcea4f2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 208 */
/***/ (function(module, exports) {

/* global wp, _ */

(function ($) {

    wp.media.view.MediaFrame.UPBMedia = wp.media.view.MediaFrame.Select.extend({
        initialize: function initialize() {

            _.defaults(this.options, {
                className: 'media-frame upb-media-frame',
                title: wp.media.view.l10n.chooseImage,
                multiple: false,
                editing: false,
                // frame     : 'upb-media',
                state: 'upb-media', // upb-media
                button: {
                    text: wp.media.view.l10n.addMedia
                },
                metadata: {},
                selectedDisplaySettings: {}
            });

            // Call 'initialize' directly on the parent class.
            wp.media.view.MediaFrame.Select.prototype.initialize.apply(this, arguments);
        },
        createStates: function createStates() {

            var options = this.options;

            this.states.add([new wp.media.controller.Library({
                id: 'upb-media',
                title: options.title,
                priority: 20,
                toolbar: 'main-insert',
                filterable: 'date',
                library: wp.media.query(_.defaults(options.library, {
                    type: 'image' // image, audio, video
                })),
                multiple: false,
                editable: false,
                allowLocalEdits: false,
                displaySettings: true,
                displayUserSettings: false,
                selectedDisplaySettings: options.selectedDisplaySettings
            }),

            // Embed states.
            new wp.media.controller.Embed({
                id: 'upb-embed',
                title: wp.media.view.l10n.insertFromUrlTitle,
                metadata: {
                    url: options.url ? options.url : ''
                }
            })]);
        },
        bindHandlers: function bindHandlers() {

            this.on('toolbar:create:main-insert', this.createToolbar, this);
            this.on('toolbar:render:main-insert', this.mainInsertToolbar, this);
            this.on('toolbar:create:main-embed', this.mainEmbedToolbar, this);
            this.on('menu:render:default', this.mainMenu, this);
            this.on('content:render:embed', this.embedContent, this);

            wp.media.view.MediaFrame.Select.prototype.bindHandlers.apply(this, arguments);
        },
        mainMenu: function mainMenu(view) {
            view.set({
                'library-separator': new wp.media.View({
                    className: 'separator',
                    priority: 100
                })
            });
        },
        embedContent: function embedContent() {

            var view = new wp.media.view.Embed({
                controller: this,
                model: this.state()
            }).render();

            this.content.set(view);

            if (!wp.media.isTouchDevice) {
                view.url.focus();
            }
        },
        selectionStatusToolbar: function selectionStatusToolbar(view) {

            var editable = this.state().get('editable');

            view.set('selection', new wp.media.view.Selection({
                controller: this,
                collection: this.state().get('selection'),
                priority: -40
            }).render());
        },
        mainInsertToolbar: function mainInsertToolbar(view) {
            var controller = this;

            this.selectionStatusToolbar(view);

            view.set('insert', {
                style: 'primary',
                priority: 80,
                text: this.options.button.text,
                requires: { selection: true },

                click: function click() {
                    var state = controller.state(),
                        selection = state.get('selection');

                    selection.each(function (attachment) {

                        var display = state.display(attachment).toJSON(),
                            object = attachment.toJSON(),
                            props = wp.media.string.props(display, object),
                            single = selection.single();

                        if (props.type == 'image') {
                            single.set('src', props.src);
                            single.set('size', props.size);
                        } else {
                            single.set('src', props.linkUrl);
                            single.set('size', '');
                        }
                    });

                    controller.close();
                    state.trigger('insert', selection).reset();
                }
            });
        },
        mainEmbedToolbar: function mainEmbedToolbar(toolbar) {
            toolbar.view = new wp.media.view.Toolbar.Embed({
                controller: this,
                text: this.options.button.text,
                event: 'insert'
            });
        }
    });
    wp.media.view.Settings.AttachmentDisplay = wp.media.view.Settings.AttachmentDisplay.extend({
        template: function template(view) {

            var upb_state = this.controller.state().id;
            var templateId = 'attachment-display-settings';

            // console.log(this.controller.options.upbOptions.size);

            if ('upb-media' == upb_state) {
                // Set Default Size
                this.model.attributes.size = this.controller.options.upbOptions.size;
                templateId = 'upb-attachment-display-settings';
            }

            return wp.media.template(templateId)(view);
        }
    });

    wp.media.view.Attachment.Details = wp.media.view.Attachment.Details.extend({
        template: function template(view) {

            var upb_state = this.controller.state().id;
            var templateId = 'attachment-details';

            if ('upb-media' == upb_state) {
                templateId = 'upb-attachment-details';
            }

            return wp.media.template(templateId)(view);
        }
    });

    wp.media.view.EmbedImage = wp.media.view.EmbedImage.extend({
        template: function template(view) {

            var upb_state = this.controller.state().id;
            var templateId = 'embed-image-settings';

            if ('upb-embed' == upb_state) {
                templateId = 'upb-embed-image-settings';
            }

            return wp.media.template(templateId)(view);
        }
    });
    wp.media.view.EmbedLink = wp.media.view.EmbedLink.extend({
        template: function template(view) {

            var upb_state = this.controller.state().id;
            var templateId = 'embed-link-settings';

            if ('upb-embed' == upb_state) {
                templateId = 'upb-embed-link-settings';
            }

            return wp.media.template(templateId)(view);
        }
    });
})(jQuery);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _this = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var Directive = {
    bind: function bind(el, binding, vnode) {},
    update: function update(el, binding, vnode) {},
    unbind: function unbind(el) {
        jQuery(el).draggable("destroy");
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {
        var _binding$value$split = binding.value.split(' '),
            _binding$value$split2 = _slicedToArray(_binding$value$split, 2),
            left = _binding$value$split2[0],
            top = _binding$value$split2[1];

        jQuery(el).css('left', left.trim());
        jQuery(el).css('top', top.trim());
    },
    inserted: function inserted(el, binding, vnode) {
        var _binding$value$split3 = binding.value.split(' '),
            _binding$value$split4 = _slicedToArray(_binding$value$split3, 2),
            left = _binding$value$split4[0],
            top = _binding$value$split4[1];

        jQuery(el).css('left', left.trim());
        jQuery(el).css('top', top.trim());

        jQuery(el).draggable({
            cursor: "crosshair",
            cursorAt: { top: 8, left: 8 },
            containment: "parent",

            drag: function drag(event, ui) {

                if (!vnode.context.pointerMovedTo) {
                    __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement the `pointerMovedTo` method', vnode.context);
                }

                var imgW = jQuery(this).next()[0].naturalWidth;
                var imgH = jQuery(this).next()[0].naturalHeight;
                var bg = jQuery(this).next()[0].currentSrc;

                var appWidth = jQuery(this).parent().width();
                var appHeight = jQuery(this).parent().height();

                var left = Math.round(ui.position.left / (appWidth / 100));
                var top = Math.round(ui.position.top / (appHeight / 100));

                vnode.context.pointerMovedTo(left + "% " + top + "%");
            }
        });
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (!jQuery().draggable) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('jQueryUI Draggable not installed or found globally to use `vue-background-position` directive..', _this);
    }

    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('background-position', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [{ name: "upb-media", rawName: "v-upb-media" }],
            staticClass: "attachment-media-view"
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "preview background-preview"
              },
              [
                _c("div", {
                  directives: [
                    {
                      name: "background-position",
                      rawName: "v-background-position",
                      value: _vm.useAttributeValue,
                      expression: "useAttributeValue"
                    }
                  ],
                  staticClass: "pointer"
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: { src: _vm.input, alt: "", draggable: "false" }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.input,
                  expression: "!input"
                }
              ],
              staticClass: "placeholder",
              domProps: { textContent: _vm._s(_vm.attributes.placeholder) }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "actions" }, [
              _c("button", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "button remove-button",
                attrs: { type: "button" },
                domProps: { textContent: _vm._s(_vm.attributes.buttons.remove) }
              }),
              _vm._v(" "),
              _c("button", {
                staticClass: "button new-button",
                attrs: { type: "button" },
                domProps: { textContent: _vm._s(_vm.attributes.buttons.choose) }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "clear" })
            ])
          ]
        ),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bcea4f2a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputBackgroundImagePosition_vue__ = __webpack_require__(78);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11a88634_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputBackgroundImagePosition_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputBackgroundImagePosition_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11a88634_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputBackgroundImagePosition_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11a88634_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputBackgroundImagePosition_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputBackgroundImagePosition.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11a88634", Component.options)
  } else {
    hotAPI.reload("data-v-11a88634", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.lazy",
                value: _vm.input,
                expression: "input",
                modifiers: { lazy: true }
              }
            ],
            staticClass: "text-input",
            attrs: { type: "text", placeholder: _vm.attributes.placeholder },
            domProps: { value: _vm.input },
            on: {
              change: function($event) {
                _vm.input = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11a88634", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputCheckbox_vue__ = __webpack_require__(79);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f43ac7d6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputCheckbox_vue__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputCheckbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f43ac7d6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputCheckbox_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f43ac7d6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputCheckbox_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputCheckbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f43ac7d6", Component.options)
  } else {
    hotAPI.reload("data-v-f43ac7d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _vm._l(_vm.attributes.options, function(label, value) {
            return _c("label", { key: value }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "checkbox-input",
                attrs: { type: "checkbox" },
                domProps: {
                  value: value,
                  checked: Array.isArray(_vm.input)
                    ? _vm._i(_vm.input, value) > -1
                    : _vm.input
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.input,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = value,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.input = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.input = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.input = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { domProps: { textContent: _vm._s(label) } })
            ])
          }),
          _vm._v(" "),
          _vm.attributes.desc
            ? _c("p", {
                staticClass: "description",
                domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
              })
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f43ac7d6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputCheckboxIcon_vue__ = __webpack_require__(80);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a5e51ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputCheckboxIcon_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputCheckboxIcon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a5e51ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputCheckboxIcon_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a5e51ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputCheckboxIcon_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputCheckboxIcon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a5e51ae", Component.options)
  } else {
    hotAPI.reload("data-v-5a5e51ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "title-wrapper" }, [
          _vm.attributes.deviceIcon
            ? _c("i", {
                class: _vm.deviceClass,
                attrs: { title: _vm.attributes.deviceTitle }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("span", {
            staticClass: "title",
            domProps: { textContent: _vm._s(_vm.attributes.title) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "device-hidden-input" },
          _vm._l(_vm.attributes.options, function(option, value) {
            return _c("label", { key: value }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "device-hidden-input",
                attrs: { type: "checkbox" },
                domProps: {
                  value: value,
                  checked: Array.isArray(_vm.input)
                    ? _vm._i(_vm.input, value) > -1
                    : _vm.input
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.input,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = value,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.input = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.input = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.input = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { class: option.icon, attrs: { title: option.title } })
            ])
          })
        ),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5a5e51ae", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputColor_vue__ = __webpack_require__(81);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d11e28fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputColor_vue__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputColor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d11e28fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputColor_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d11e28fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputColor_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputColor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d11e28fe", Component.options)
  } else {
    hotAPI.reload("data-v-d11e28fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _this = this;



var Directive = {
    inserted: function inserted(el, binding, vnode) {

        var options = {
            change: function change(event, ui) {
                if (!vnode.context.onColorChange) {
                    __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement the `onColorChange` method', vnode.context);
                }

                vnode.context.onColorChange(ui.color);
            }
        };

        jQuery(el).upbColorPicker(jQuery.extend(true, options, binding.value || {}));
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (!jQuery().upbColorPicker) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('wpColorPicker is not installed or found globally to use `vue-colorpicker` directive..', _this);
    }

    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('colorpicker', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "colorpicker",
                rawName: "v-colorpicker",
                value: _vm.attributes.options,
                expression: "attributes.options"
              }
            ],
            staticClass: "color-input",
            attrs: {
              "data-alpha": _vm.attributes.options.alpha,
              type: "text",
              "data-default-color": _vm.attributes.value,
              placeholder: _vm.attributes.placeholder
            },
            domProps: { value: _vm.attributes.value }
          })
        ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d11e28fe", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputContents_js__ = __webpack_require__(82);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0957ec_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputContents_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputContents_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0957ec_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputContents_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b0957ec_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputContents_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputContents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b0957ec", Component.options)
  } else {
    hotAPI.reload("data-v-1b0957ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { class: _vm.typeClass() }, [
    _c("div", { staticClass: "form-group" }, [
      _c("label", [
        _c("span", {
          staticClass: "title",
          domProps: { textContent: _vm._s(_vm.attributes.title) }
        })
      ]),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.input,
            expression: "input"
          }
        ],
        staticClass: "wp-editor-area text",
        staticStyle: { height: "200px" },
        attrs: { id: _vm.id, rows: "16", cols: "20" },
        domProps: { value: _vm.input },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.input = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm.attributes.desc
        ? _c("p", {
            staticClass: "description",
            domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
          })
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b0957ec", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputDeviceHidden_js__ = __webpack_require__(83);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77ae2c72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputDeviceHidden_vue__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputDeviceHidden_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77ae2c72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputDeviceHidden_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77ae2c72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputDeviceHidden_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputDeviceHidden.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77ae2c72", Component.options)
  } else {
    hotAPI.reload("data-v-77ae2c72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "title-wrapper" }, [
          _c("span", {
            staticClass: "title",
            domProps: { textContent: _vm._s(_vm.attributes.title) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "device-hidden-input" },
          _vm._l(_vm.options, function(option, i) {
            return _c(
              "div",
              { key: i },
              _vm._l(option, function(device) {
                return _c("label", { key: device.id }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.input,
                        expression: "input"
                      }
                    ],
                    staticClass: "device-hidden-input",
                    attrs: { disabled: device.disabled, type: "checkbox" },
                    domProps: {
                      value: device.id,
                      checked: Array.isArray(_vm.input)
                        ? _vm._i(_vm.input, device.id) > -1
                        : _vm.input
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.input,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = device.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.input = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.input = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.input = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", {
                    class: device.icon,
                    attrs: { title: device.title }
                  }),
                  _vm._v(" "),
                  device.suffix && device.symbol
                    ? _c("span", {
                        staticClass: "device-symbol",
                        domProps: { innerHTML: _vm._s(device.symbol) }
                      })
                    : _vm._e()
                ])
              })
            )
          })
        ),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77ae2c72", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputEditor_js__ = __webpack_require__(84);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a0ad7982_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputEditor_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputEditor_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a0ad7982_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputEditor_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a0ad7982_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputEditor_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputEditor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a0ad7982", Component.options)
  } else {
    hotAPI.reload("data-v-a0ad7982", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.input,
              expression: "input"
            }
          ],
          staticClass: "wp-editor-area text",
          staticStyle: { height: "200px" },
          attrs: { id: _vm.id, rows: "16", cols: "20" },
          domProps: { value: _vm.input },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.input = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a0ad7982", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputHidden_vue__ = __webpack_require__(85);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac958fc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputHidden_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputHidden_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac958fc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputHidden_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac958fc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputHidden_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputHidden.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ac958fc", Component.options)
  } else {
    hotAPI.reload("data-v-0ac958fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ac958fc", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputIconSelect_js__ = __webpack_require__(86);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f0dc0b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputIconSelect_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputIconSelect_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f0dc0b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputIconSelect_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f0dc0b2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputIconSelect_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputIconSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f0dc0b2", Component.options)
  } else {
    hotAPI.reload("data-v-0f0dc0b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.input,
                  expression: "input"
                },
                {
                  name: "select2",
                  rawName: "v-select2",
                  value: _vm.settings,
                  expression: "settings"
                }
              ],
              staticClass: "select2-input",
              staticStyle: { width: "100%" },
              attrs: { id: _vm.attributes._id },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.input = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.attributes.options, function(option, value) {
              return _c("option", {
                key: value,
                domProps: { value: value, textContent: _vm._s(option) }
              })
            })
          )
        ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0f0dc0b2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputIconPopup_js__ = __webpack_require__(87);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64bb6e5e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputIconPopup_vue__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputIconPopup_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64bb6e5e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputIconPopup_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64bb6e5e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputIconPopup_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputIconPopup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64bb6e5e", Component.options)
  } else {
    hotAPI.reload("data-v-64bb6e5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBMediaIconPopup_js__ = __webpack_require__(88);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6c5c112_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBMediaIconPopup_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(232)
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBMediaIconPopup_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6c5c112_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBMediaIconPopup_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f6c5c112_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBMediaIconPopup_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/extra/UPBMediaIconPopup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6c5c112", Component.options)
  } else {
    hotAPI.reload("data-v-f6c5c112", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 232 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticStyle: { position: "relative", display: "block" },
      attrs: { tabindex: "0" }
    },
    [
      _c("div", { staticClass: "media-modal wp-core-ui" }, [
        _c(
          "button",
          {
            staticClass: "media-modal-close",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                _vm.onCloseEvent()
              }
            }
          },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "media-modal-content" }, [
          _c("div", { class: _vm.mediaFrameClass }, [
            _c("div", { staticClass: "media-frame-menu" }, [
              _c(
                "div",
                { staticClass: "media-menu" },
                _vm._l(_vm.iconProviders, function(provider) {
                  return _c("a", {
                    key: provider.id,
                    class: { "media-menu-item": true, active: provider.active },
                    attrs: { href: "#" },
                    domProps: { textContent: _vm._s(provider.title) },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.activeProvider(provider.id)
                      }
                    }
                  })
                })
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-frame-title" }, [
              _c("h1", { domProps: { textContent: _vm._s(_vm.title) } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "media-frame-router" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "media-frame-content",
                attrs: { "data-columns": _vm.columns }
              },
              [
                _c("div", { staticClass: "attachments-browser" }, [
                  _c("div", { staticClass: "media-toolbar" }, [
                    _c("div", { staticClass: "media-toolbar-secondary" }, [
                      _c("span", {
                        class: { spinner: true, "is-active": _vm.isLoading }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "media-toolbar-primary search-form" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "screen-reader-text",
                            attrs: { for: "media-search-input" }
                          },
                          [_vm._v("Search Icon")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.searchIcon,
                              expression: "searchIcon"
                            }
                          ],
                          staticClass: "search",
                          attrs: {
                            type: "search",
                            placeholder: "Search icons...",
                            id: "media-search-input"
                          },
                          domProps: { value: _vm.searchIcon },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.searchIcon = $event.target.value
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass:
                        "attachments ui-sortable ui-sortable-disabled",
                      attrs: { id: "upb-attachments", tabindex: "-1" }
                    },
                    _vm._l(_vm.icons, function(icon) {
                      return _c(
                        "li",
                        {
                          key: icon.id,
                          class: _vm.selectedIconClass(icon),
                          attrs: { tabindex: "0" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "attachment-preview",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.chooseIcon(icon)
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "thumbnail" }, [
                                _c("div", { staticClass: "icon-holder" }, [
                                  _c("i", {
                                    class: icon.id,
                                    attrs: { title: icon.name }
                                  })
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button-link check",
                              attrs: { type: "button", tabindex: "-1" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.deSelectIcon()
                                }
                              }
                            },
                            [
                              _c("span", { staticClass: "media-modal-icon" }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "screen-reader-text" },
                                [_vm._v("Deselect")]
                              )
                            ]
                          )
                        ]
                      )
                    })
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-sidebar" }, [
                    _vm.isSelected()
                      ? _c(
                          "div",
                          {
                            staticClass: "attachment-details save-ready",
                            attrs: { tabindex: "0" }
                          },
                          [
                            _c("h2", {
                              domProps: {
                                textContent: _vm._s(_vm.l10n.iconDetailsTitle)
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "attachment-info" }, [
                              _c(
                                "div",
                                { staticClass: "thumbnail thumbnail-icon" },
                                [
                                  _c("i", {
                                    class: _vm.selected.id,
                                    attrs: { title: _vm.selected.name }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "details thumbnail-icon-details"
                                },
                                [
                                  _c("div", {
                                    staticClass: "filename",
                                    domProps: {
                                      textContent: _vm._s(_vm.selected.name)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", {
                                    staticClass: "file-size",
                                    domProps: {
                                      textContent: _vm._s(_vm.selected.provider)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "compat-meta" })
                                ]
                              )
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "media-frame-toolbar" }, [
              _c("div", { staticClass: "media-toolbar" }, [
                _c("div", { staticClass: "media-toolbar-secondary" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "media-toolbar-primary search-form" },
                  [
                    _c("button", {
                      staticClass:
                        "button media-button button-primary button-large media-button-insert",
                      attrs: { type: "button", disabled: !_vm.isSelected() },
                      domProps: { textContent: _vm._s(_vm.button) },
                      on: {
                        click: function($event) {
                          _vm.onInsertEvent()
                        }
                      }
                    })
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "media-modal-backdrop" })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "media-modal-icon" }, [
      _c("span", { staticClass: "screen-reader-text" })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f6c5c112", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _vm.show
            ? _c("upb-media-icon-popup", {
                attrs: {
                  title: _vm.attributes.title,
                  button: _vm.attributes.buttons.add,
                  providers: _vm.providers
                },
                on: {
                  insert: function($event) {
                    _vm.iconSelected($event)
                  },
                  close: function($event) {
                    _vm.closePopup()
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("label", [
            _c("div", { staticClass: "title-wrapper" }, [
              _vm.attributes.deviceIcon
                ? _c("i", {
                    class: _vm.deviceClass,
                    attrs: { title: _vm.attributes.deviceTitle }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("span", {
                staticClass: "title",
                domProps: { textContent: _vm._s(_vm.attributes.title) }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "attachment-icon-view" }, [
            _vm.input
              ? _c("div", { staticClass: "preview" }, [
                  _c("i", { class: _vm.input })
                ])
              : _c("div", { staticClass: "placeholder" }),
            _vm._v(" "),
            _c("div", { staticClass: "actions" }, [
              _c("button", {
                staticClass: "button icon-modal-popup",
                attrs: { type: "button" },
                domProps: {
                  textContent: _vm._s(_vm.attributes.buttons.choose)
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.openPopup()
                  }
                }
              }),
              _vm._v(" "),
              _vm.input
                ? _c("button", {
                    staticClass: "button remove-button",
                    attrs: { type: "button" },
                    domProps: {
                      textContent: _vm._s(_vm.attributes.buttons.remove)
                    },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.removeIcon()
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "clear" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "clear" })
          ]),
          _vm._v(" "),
          _vm.attributes.desc
            ? _c("p", {
                staticClass: "description",
                domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
              })
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64bb6e5e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputMediaImage_js__ = __webpack_require__(89);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42a5f0ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMediaImage_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputMediaImage_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42a5f0ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMediaImage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42a5f0ae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMediaImage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputMediaImage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42a5f0ae", Component.options)
  } else {
    hotAPI.reload("data-v-42a5f0ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [{ name: "upb-media", rawName: "v-upb-media" }],
            staticClass: "attachment-media-view"
          },
          [
            _vm.input
              ? _c("div", { staticClass: "preview" }, [
                  _c("img", {
                    attrs: { src: _vm.src, alt: "", draggable: "false" }
                  })
                ])
              : _c("div", {
                  staticClass: "placeholder",
                  domProps: { textContent: _vm._s(_vm.attributes.placeholder) }
                }),
            _vm._v(" "),
            _c("div", { staticClass: "actions" }, [
              _c("button", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "button remove-button",
                attrs: { type: "button" },
                domProps: { textContent: _vm._s(_vm.attributes.buttons.remove) }
              }),
              _vm._v(" "),
              _c("button", {
                staticClass: "button new-button",
                attrs: { type: "button" },
                domProps: { textContent: _vm._s(_vm.attributes.buttons.choose) }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "clear" })
            ])
          ]
        ),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42a5f0ae", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputMediaQueryRadioTab_vue__ = __webpack_require__(90);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ce70160_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMediaQueryRadioTab_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputMediaQueryRadioTab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ce70160_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMediaQueryRadioTab_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ce70160_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMediaQueryRadioTab_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputMediaQueryRadioTab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ce70160", Component.options)
  } else {
    hotAPI.reload("data-v-0ce70160", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { class: _vm.currentDevice }, [
        _c("div", { staticClass: "title-wrapper" }, [
          _c("span", {
            staticClass: "title",
            domProps: { textContent: _vm._s(_vm.attributes.title) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "device-hidden-input" },
          _vm._l(_vm.attributes.options, function(option, value) {
            return _c("label", { key: value }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "device-hidden-input",
                attrs: { type: "radio" },
                domProps: { value: value, checked: _vm._q(_vm.input, value) },
                on: {
                  change: function($event) {
                    _vm.input = value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { class: option.icon, attrs: { title: option.title } })
            ])
          })
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ce70160", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputMessage_vue__ = __webpack_require__(91);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f4320a5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMessage_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputMessage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f4320a5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMessage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4f4320a5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputMessage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputMessage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f4320a5", Component.options)
  } else {
    hotAPI.reload("data-v-4f4320a5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("p", {
          class: _vm.messageClass(),
          domProps: { innerHTML: _vm._s(_vm.title) }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4f4320a5", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputHeading_vue__ = __webpack_require__(92);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d1ebadc0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputHeading_vue__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputHeading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d1ebadc0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputHeading_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d1ebadc0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputHeading_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputHeading.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1ebadc0", Component.options)
  } else {
    hotAPI.reload("data-v-d1ebadc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("p", {
          staticClass: "upb-input-heading",
          domProps: { innerHTML: _vm._s(_vm.title) }
        })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d1ebadc0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputNumber_vue__ = __webpack_require__(93);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15e4a1ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputNumber_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputNumber_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15e4a1ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputNumber_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15e4a1ca_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputNumber_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputNumber.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15e4a1ca", Component.options)
  } else {
    hotAPI.reload("data-v-15e4a1ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "number-input-group" }, [
            _c("span", {
              staticClass: "prefix",
              domProps: { textContent: _vm._s(_vm.attributes.options.prefix) }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.input,
                  expression: "input"
                }
              ],
              staticClass: "number-input",
              attrs: {
                placeholder: _vm.attributes.placeholder,
                type: "number",
                min: _vm.attributes.options.min,
                max: _vm.attributes.options.max,
                size: _vm.attributes.options.size,
                step: _vm.attributes.options.step
              },
              domProps: { value: _vm.input },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.input = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", {
              staticClass: "suffix",
              domProps: { textContent: _vm._s(_vm.attributes.options.suffix) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clear" }),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15e4a1ca", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRadio_vue__ = __webpack_require__(94);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30ec77ce_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadio_vue__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRadio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30ec77ce_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadio_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30ec77ce_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadio_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputRadio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30ec77ce", Component.options)
  } else {
    hotAPI.reload("data-v-30ec77ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c(
        "div",
        { staticClass: "form-group" },
        [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _vm._l(_vm.attributes.options, function(option, value) {
            return _c("div", { key: value }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "radio-input",
                attrs: { type: "radio", id: value },
                domProps: { value: value, checked: _vm._q(_vm.input, value) },
                on: {
                  change: function($event) {
                    _vm.input = value
                  }
                }
              }),
              _vm._v(" "),
              _c("label", {
                attrs: { for: value },
                domProps: { textContent: _vm._s(option) }
              })
            ])
          }),
          _vm._v(" "),
          _vm.attributes.desc
            ? _c("p", {
                staticClass: "description",
                domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
              })
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30ec77ce", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRadioIcon_vue__ = __webpack_require__(95);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_772c509c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadioIcon_vue__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRadioIcon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_772c509c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadioIcon_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_772c509c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadioIcon_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputRadioIcon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-772c509c", Component.options)
  } else {
    hotAPI.reload("data-v-772c509c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "title-wrapper" }, [
          _vm.attributes.deviceIcon
            ? _c("i", {
                class: _vm.deviceClass,
                attrs: { title: _vm.attributes.deviceTitle }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("span", {
            staticClass: "title",
            domProps: { textContent: _vm._s(_vm.attributes.title) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "device-hidden-input" },
          _vm._l(_vm.attributes.options, function(option, value) {
            return _c("label", { key: value }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.input,
                    expression: "input"
                  }
                ],
                staticClass: "device-hidden-input",
                attrs: { type: "radio" },
                domProps: { value: value, checked: _vm._q(_vm.input, value) },
                on: {
                  change: function($event) {
                    _vm.input = value
                  }
                }
              }),
              _vm._v(" "),
              _c("i", { class: option.icon, attrs: { title: option.title } })
            ])
          })
        ),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-772c509c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRadioImage_vue__ = __webpack_require__(96);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c0be51c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadioImage_vue__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRadioImage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c0be51c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadioImage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c0be51c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRadioImage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputRadioImage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c0be51c", Component.options)
  } else {
    hotAPI.reload("data-v-2c0be51c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "title-wrapper" }, [
          _vm.attributes.deviceIcon
            ? _c("i", {
                class: _vm.deviceClass,
                attrs: { title: _vm.attributes.deviceTitle }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("span", {
            staticClass: "title",
            domProps: { textContent: _vm._s(_vm.attributes.title) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "image-selects" },
          [
            _vm._l(_vm.attributes.options, function(option, value) {
              return _c("label", { key: value }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    }
                  ],
                  staticClass: "image-select-input",
                  attrs: { type: "radio" },
                  domProps: { value: value, checked: _vm._q(_vm.input, value) },
                  on: {
                    change: function($event) {
                      _vm.input = value
                    }
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src: option.url,
                    title: option.title,
                    alt: option.title,
                    draggable: "false"
                  }
                })
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "clear" })
          ],
          2
        ),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c0be51c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRange_vue__ = __webpack_require__(97);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16dd0f4a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRange_vue__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputRange_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16dd0f4a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRange_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16dd0f4a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputRange_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputRange.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16dd0f4a", Component.options)
  } else {
    hotAPI.reload("data-v-16dd0f4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "range-input-group" }, [
            _c("span", {
              staticClass: "prefix",
              domProps: { textContent: _vm._s(_vm.attributes.options.prefix) }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.input,
                  expression: "input"
                }
              ],
              staticClass: "range-input",
              attrs: {
                type: "range",
                min: _vm.attributes.options.min,
                max: _vm.attributes.options.max,
                step: _vm.attributes.options.step
              },
              domProps: { value: _vm.input },
              on: {
                __r: function($event) {
                  _vm.input = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.input,
                  expression: "input"
                }
              ],
              staticClass: "number-input",
              attrs: {
                placeholder: _vm.attributes.placeholder,
                type: "number",
                min: _vm.attributes.options.min,
                max: _vm.attributes.options.max,
                size: _vm.attributes.options.size,
                step: _vm.attributes.options.step
              },
              domProps: { value: _vm.input },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.input = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", {
              staticClass: "suffix",
              domProps: { textContent: _vm._s(_vm.attributes.options.suffix) }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clear" }),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16dd0f4a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputSpacing_js__ = __webpack_require__(98);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_142486e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSpacing_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputSpacing_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_142486e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSpacing_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_142486e1_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSpacing_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputSpacing.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-142486e1", Component.options)
  } else {
    hotAPI.reload("data-v-142486e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("div", { staticClass: "title-wrapper" }, [
          _vm.attributes.deviceIcon
            ? _c("i", {
                class: _vm.deviceClass,
                attrs: { title: _vm.attributes.deviceTitle }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("span", {
            staticClass: "title",
            domProps: { textContent: _vm._s(_vm.attributes.title) }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "spacing-input-group" },
          [
            _vm._l(_vm.options, function(option, key) {
              return _c("label", { key: key }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.property[key],
                      expression: "property[key]"
                    }
                  ],
                  staticClass: "tiny-text",
                  attrs: {
                    disabled: !option,
                    min: _vm.attributes.min,
                    max: _vm.attributes.max,
                    step: _vm.attributes.step,
                    type: "number"
                  },
                  domProps: { value: _vm.property[key] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.property, key, $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", {
                  staticClass: "spacing-title",
                  domProps: { textContent: _vm._s(_vm.attributes.titles[key]) }
                })
              ])
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "shorthand-toggle",
                on: {
                  click: function($event) {
                    _vm.toggleShorthand()
                  }
                }
              },
              [
                _vm.shorthand
                  ? _c("i", { staticClass: "mdi mdi-link" })
                  : _c("i", { staticClass: "mdi mdi-link-off" })
              ]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "clear" }),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-142486e1", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputSelect_vue__ = __webpack_require__(99);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac8c1164_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputSelect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac8c1164_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac8c1164_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac8c1164", Component.options)
  } else {
    hotAPI.reload("data-v-ac8c1164", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _vm.multiple
          ? _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    }
                  ],
                  staticClass: "select-multiple-input",
                  attrs: { multiple: "" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.input = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.attributes.options, function(option, value) {
                  return _c("option", {
                    key: value,
                    domProps: { value: value, textContent: _vm._s(option) }
                  })
                })
              )
            ])
          : _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    }
                  ],
                  staticClass: "select-input",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.input = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.attributes.options, function(option, value) {
                  return _c("option", {
                    key: value,
                    domProps: { value: value, textContent: _vm._s(option) }
                  })
                })
              )
            ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ac8c1164", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputSelect2_vue__ = __webpack_require__(100);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4c6c858_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect2_vue__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputSelect2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4c6c858_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect2_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e4c6c858_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect2_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputSelect2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4c6c858", Component.options)
  } else {
    hotAPI.reload("data-v-e4c6c858", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _vm.multiple
          ? _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    },
                    {
                      name: "select2",
                      rawName: "v-select2",
                      value: _vm.attributes.settings,
                      expression: "attributes.settings"
                    }
                  ],
                  staticClass: "select2-multiple-input",
                  staticStyle: { width: "100%" },
                  attrs: { multiple: "", id: _vm.attributes._id },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.input = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.attributes.options, function(option, value) {
                  return _c("option", {
                    key: value,
                    attrs: { title: option },
                    domProps: { value: value, textContent: _vm._s(option) }
                  })
                })
              )
            ])
          : _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    },
                    {
                      name: "select2",
                      rawName: "v-select2",
                      value: _vm.attributes.settings,
                      expression: "attributes.settings"
                    }
                  ],
                  staticClass: "select2-input",
                  staticStyle: { width: "100%" },
                  attrs: { id: _vm.attributes._id },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.input = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.attributes.options, function(option, value) {
                  return _c("option", {
                    key: value,
                    attrs: { title: option },
                    domProps: { value: value, textContent: _vm._s(option) }
                  })
                })
              )
            ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e4c6c858", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputSelect2Icon_js__ = __webpack_require__(101);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf74c26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect2Icon_vue__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBInputSelect2Icon_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf74c26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect2Icon_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf74c26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputSelect2Icon_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputSelect2Icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cf74c26", Component.options)
  } else {
    hotAPI.reload("data-v-1cf74c26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _vm.multiple
          ? _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    },
                    {
                      name: "select2",
                      rawName: "v-select2",
                      value: _vm.settings,
                      expression: "settings"
                    }
                  ],
                  staticClass: "select2-multiple-input",
                  staticStyle: { width: "100%" },
                  attrs: { multiple: "" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.input = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.attributes.options, function(option, value) {
                  return _c("option", {
                    key: value,
                    attrs: { "data-icon": option.icon, title: option.title },
                    domProps: {
                      value: value,
                      textContent: _vm._s(option.title)
                    }
                  })
                })
              )
            ])
          : _c("label", [
              _c("div", { staticClass: "title-wrapper" }, [
                _vm.attributes.deviceIcon
                  ? _c("i", {
                      class: _vm.deviceClass,
                      attrs: { title: _vm.attributes.deviceTitle }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("span", {
                  staticClass: "title",
                  domProps: { textContent: _vm._s(_vm.attributes.title) }
                })
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.input,
                      expression: "input"
                    },
                    {
                      name: "select2",
                      rawName: "v-select2",
                      value: _vm.settings,
                      expression: "settings"
                    }
                  ],
                  staticClass: "select2-input",
                  staticStyle: { width: "100%" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.input = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.attributes.options, function(option, value) {
                  return _c("option", {
                    key: value,
                    attrs: { "data-icon": option.icon, title: option.title },
                    domProps: {
                      value: value,
                      textContent: _vm._s(option.title)
                    }
                  })
                })
              )
            ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1cf74c26", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputText_vue__ = __webpack_require__(102);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_410fad7f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputText_vue__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputText_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_410fad7f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputText_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_410fad7f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputText_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputText.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-410fad7f", Component.options)
  } else {
    hotAPI.reload("data-v-410fad7f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.input,
                expression: "input"
              }
            ],
            staticClass: "text-input",
            attrs: { type: "text", placeholder: _vm.attributes.placeholder },
            domProps: { value: _vm.input },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.input = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-410fad7f", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputTextarea_vue__ = __webpack_require__(103);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7142a40c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputTextarea_vue__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputTextarea_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7142a40c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputTextarea_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7142a40c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputTextarea_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputTextarea.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7142a40c", Component.options)
  } else {
    hotAPI.reload("data-v-7142a40c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c("label", [
          _c("div", { staticClass: "title-wrapper" }, [
            _vm.attributes.deviceIcon
              ? _c("i", {
                  class: _vm.deviceClass,
                  attrs: { title: _vm.attributes.deviceTitle }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "title",
              domProps: { textContent: _vm._s(_vm.attributes.title) }
            })
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.input,
                expression: "input"
              }
            ],
            staticClass: "textarea-input",
            attrs: {
              wrap: _vm.attributes.options.wrap,
              rows: _vm.attributes.options.rows,
              placeholder: _vm.attributes.placeholder
            },
            domProps: { value: _vm.input },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.input = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7142a40c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputToggle_vue__ = __webpack_require__(104);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cc2dcb4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputToggle_vue__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_node_modules_vue_loader_lib_selector_type_script_index_0_UPBInputToggle_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cc2dcb4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputToggle_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cc2dcb4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBInputToggle_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/settings-input/UPBInputToggle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cc2dcb4", Component.options)
  } else {
    hotAPI.reload("data-v-4cc2dcb4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isRequired,
          expression: "isRequired"
        }
      ],
      class: _vm.typeClass()
    },
    [
      _c("div", { staticClass: "form-group toggle" }, [
        _c("div", { staticClass: "title-wrapper" }, [
          _vm.attributes.deviceIcon
            ? _c("i", {
                class: _vm.deviceClass,
                attrs: { title: _vm.attributes.deviceTitle }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("span", {
            staticClass: "title",
            domProps: { textContent: _vm._s(_vm.attributes.title) }
          })
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "switch toggle-input-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.input,
                expression: "input"
              }
            ],
            staticClass: "toggle-input",
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.input)
                ? _vm._i(_vm.input, null) > -1
                : _vm.input
            },
            on: {
              change: function($event) {
                var $$a = _vm.input,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.input = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.input = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.input = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "slider round" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clear" }),
        _vm._v(" "),
        _vm.attributes.desc
          ? _c("p", {
              staticClass: "description",
              domProps: { innerHTML: _vm._s(_vm.attributes.desc) }
            })
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4cc2dcb4", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.contents._upb_settings, function(settings, index) {
          return _c(settings._upb_field_type, {
            key: index,
            tag: "component",
            attrs: {
              index: index,
              keyindexname: "id",
              keyvaluename: "value",
              defaultValue: _vm.contents._upb_settings.default,
              items: _vm.contents._upb_settings,
              item: _vm.contents,
              attributes: settings,
              target: settings.id,
              model: _vm.item.attributes
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-83bb6404", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_RowSettings_js__ = __webpack_require__(105);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25e5c568_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowSettings_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_RowSettings_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25e5c568_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowSettings_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25e5c568_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RowSettings_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/row/RowSettings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25e5c568", Component.options)
  } else {
    hotAPI.reload("data-v-25e5c568", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.contents._upb_settings, function(settings, index) {
          return _c(settings._upb_field_type, {
            key: index,
            tag: "component",
            attrs: {
              index: index,
              keyindexname: "id",
              keyvaluename: "value",
              defaultValue: _vm.contents._upb_settings.default,
              items: _vm.contents._upb_settings,
              item: _vm.contents,
              attributes: settings,
              target: settings.id,
              model: _vm.item.attributes
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-25e5c568", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ColumnContents_js__ = __webpack_require__(106);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49345fae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnContents_vue__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ColumnContents_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49345fae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnContents_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49345fae_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnContents_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/column/ColumnContents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49345fae", Component.options)
  } else {
    hotAPI.reload("data-v-49345fae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementList_js__ = __webpack_require__(107);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d162dcb2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementList_vue__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementList_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d162dcb2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d162dcb2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/element/ElementList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d162dcb2", Component.options)
  } else {
    hotAPI.reload("data-v-d162dcb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      class: _vm.itemClass(),
      on: {
        mouseover: function($event) {
          _vm.activeFocus()
        },
        mouseout: function($event) {
          _vm.removeFocus()
        }
      }
    },
    [
      _c(
        "ul",
        { staticClass: "tools" },
        _vm._l(_vm.model._upb_options.tools.list, function(tool) {
          return _vm.enabled(tool.id)
            ? _c(
                "li",
                {
                  key: tool.id,
                  class: _vm.toolsClass(tool.id, tool),
                  attrs: { title: tool.title },
                  on: {
                    click: function($event) {
                      _vm.clickActions(tool.id, tool)
                    }
                  }
                },
                [_c("i", { class: tool.icon })]
              )
            : _vm._e()
        })
      ),
      _vm._v(" "),
      _c("div", { domProps: { textContent: _vm._s(_vm.title()) } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d162dcb2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSearch
            ? _c("div", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  attrs: { placeholder: _vm.panelMetaSearch, type: "search" },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        {
          directives: [
            {
              name: "sortable",
              rawName: "v-sortable",
              value: _vm.sortable,
              expression: "sortable"
            }
          ],
          staticClass: "upb-panel-contents-items"
        },
        _vm._l(_vm.contents, function(item, index) {
          return _c("element-list", {
            key: index,
            tag: "component",
            attrs: { model: item, index: index },
            on: {
              deleteItem: function($event) {
                _vm.deleteItem(index)
              },
              cloneItem: function($event) {
                _vm.cloneItem(index, item)
              }
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49345fae", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ColumnSettings_js__ = __webpack_require__(108);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ec0f69c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnSettings_vue__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ColumnSettings_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ec0f69c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnSettings_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ec0f69c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ColumnSettings_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/column/ColumnSettings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ec0f69c", Component.options)
  } else {
    hotAPI.reload("data-v-6ec0f69c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.contents._upb_settings, function(settings, index) {
          return _c(settings._upb_field_type, {
            key: index,
            tag: "component",
            attrs: {
              index: index,
              keyindexname: "id",
              keyvaluename: "value",
              defaultValue: _vm.contents._upb_settings.default,
              items: _vm.contents._upb_settings,
              item: _vm.contents,
              attributes: settings,
              target: settings.id,
              model: _vm.item.attributes
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ec0f69c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementContents_js__ = __webpack_require__(109);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60d37da3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementContents_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementContents_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60d37da3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementContents_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60d37da3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementContents_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/element/ElementContents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60d37da3", Component.options)
  } else {
    hotAPI.reload("data-v-60d37da3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementItemList_js__ = __webpack_require__(110);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d57db92_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementItemList_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementItemList_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d57db92_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementItemList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d57db92_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementItemList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/element-item/ElementItemList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d57db92", Component.options)
  } else {
    hotAPI.reload("data-v-6d57db92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      class: _vm.itemClass(),
      on: {
        mouseover: function($event) {
          _vm.activeFocus()
        },
        mouseout: function($event) {
          _vm.removeFocus()
        }
      }
    },
    [
      _c(
        "ul",
        { staticClass: "tools" },
        _vm._l(_vm.model._upb_options.tools.list, function(tool) {
          return _vm.enabled(tool.id) && _vm.active(tool.id)
            ? _c(
                "li",
                {
                  key: tool.id,
                  class: _vm.toolsClass(tool.id, tool),
                  attrs: { title: tool.title },
                  on: {
                    click: function($event) {
                      _vm.clickActions(tool.id, tool)
                    }
                  }
                },
                [_c("i", { class: tool.icon })]
              )
            : _vm._e()
        })
      ),
      _vm._v(" "),
      _c("div", { domProps: { textContent: _vm._s(_vm.title()) } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6d57db92", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSearch
            ? _c("div", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  attrs: { placeholder: _vm.panelMetaSearch, type: "search" },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        {
          directives: [
            {
              name: "sortable",
              rawName: "v-sortable",
              value: _vm.sortable,
              expression: "sortable"
            }
          ],
          staticClass: "upb-panel-contents-items"
        },
        _vm._l(_vm.contents, function(item, index) {
          return _c("element-item-list", {
            key: index,
            tag: "component",
            attrs: { model: item, index: index },
            on: {
              deleteItem: function($event) {
                _vm.deleteItem(index)
              },
              cloneItem: function($event) {
                _vm.cloneItem(index, item)
              }
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60d37da3", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementSettings_js__ = __webpack_require__(111);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e0d322c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementSettings_vue__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementSettings_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e0d322c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementSettings_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4e0d322c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementSettings_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/element/ElementSettings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e0d322c", Component.options)
  } else {
    hotAPI.reload("data-v-4e0d322c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.contents._upb_settings, function(settings, index) {
          return _c(settings._upb_field_type, {
            key: index,
            tag: "component",
            attrs: {
              index: index,
              keyindexname: "id",
              keyvaluename: "value",
              defaultValue: _vm.contents._upb_settings.default,
              items: _vm.contents._upb_settings,
              item: _vm.contents,
              attributes: settings,
              target: settings.id,
              model: _vm.item.attributes
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e0d322c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementItemSettings_js__ = __webpack_require__(112);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09398e97_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementItemSettings_vue__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementItemSettings_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09398e97_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementItemSettings_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09398e97_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementItemSettings_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/element-item/ElementItemSettings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09398e97", Component.options)
  } else {
    hotAPI.reload("data-v-09398e97", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _vm.isSubPanel()
            ? _c(
                "a",
                {
                  staticClass: "back",
                  attrs: { title: _vm.l10n.back, href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.back()
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-chevron-left" })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.panelTitle) }
              })
            ]),
            _vm._v(" "),
            _vm.panelMetaHelp
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.panelMetaSearch
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.panelMetaHelp) } })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.panelMetaTools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.contents._upb_settings, function(settings, index) {
          return _c(settings._upb_field_type, {
            key: index,
            tag: "component",
            attrs: {
              index: index,
              keyindexname: "id",
              keyvaluename: "value",
              defaultValue: _vm.contents._upb_settings.default,
              items: _vm.contents._upb_settings,
              item: _vm.contents,
              attributes: settings,
              target: settings.id,
              model: _vm.item.attributes
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-09398e97", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementsPanel_js__ = __webpack_require__(113);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43fdfcc6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementsPanel_vue__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementsPanel_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43fdfcc6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementsPanel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43fdfcc6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementsPanel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/panels/ElementsPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43fdfcc6", Component.options)
  } else {
    hotAPI.reload("data-v-43fdfcc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementsList_js__ = __webpack_require__(114);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6aab9915_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementsList_vue__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_ElementsList_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6aab9915_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementsList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6aab9915_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ElementsList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/panels/ElementsList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6aab9915", Component.options)
  } else {
    hotAPI.reload("data-v-6aab9915", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var Directive = {
    bind: function bind(el, binding, vnode) {},
    update: function update(el, binding, vnode) {},
    unbind: function unbind(el, binding, vnode) {
        el.setAttribute("draggable", false);
    },
    componentUpdated: function componentUpdated() {},
    inserted: function inserted(el, binding, vnode) {

        if (binding.value == 'soon') {
            el.setAttribute("draggable", false);
        } else {
            el.setAttribute("draggable", true);
        }

        el.classList.add('upb-draggable-element');

        el.addEventListener('dragstart', function (event) {
            this.classList.add('upb-element-drag-start');
            event.dataTransfer.setData("text", JSON.stringify(vnode.context.model));
        });

        el.addEventListener('dragend', function (event) {
            this.classList.remove('upb-element-drag-start');
        });
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('draggable', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      directives: [
        {
          name: "draggable",
          rawName: "v-draggable",
          value: _vm.model._upb_options.element.tag,
          expression: "model._upb_options.element.tag"
        }
      ],
      class: _vm.itemClass()
    },
    [
      _vm.model._upb_options.element.tag
        ? _c("div", {
            class: _vm.elementTagClass,
            domProps: {
              textContent: _vm._s(_vm.model._upb_options.element.tag)
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "icon-wrapper" }, [
        _c("i", { class: _vm.model._upb_options.element.icon })
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "element-name",
        domProps: { textContent: _vm._s(_vm.model._upb_options.element.name) }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6aab9915", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.model.title) }
              })
            ]),
            _vm._v(" "),
            _vm.model.help
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.model.search
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.model.help) } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSearch
            ? _c("div", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  attrs: { placeholder: _vm.model.search, type: "search" },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.model.tools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.contents, function(item, index) {
          return _c("upb-elements-list", {
            key: index,
            tag: "component",
            attrs: { index: index, model: item }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-43fdfcc6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SettingsPanel_js__ = __webpack_require__(115);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90ae501e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsPanel_vue__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_SettingsPanel_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90ae501e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsPanel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90ae501e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsPanel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/panels/SettingsPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90ae501e", Component.options)
  } else {
    hotAPI.reload("data-v-90ae501e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.model.title) }
              })
            ]),
            _vm._v(" "),
            _vm.model.help
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.model.search
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.model.help) } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSearch
            ? _c("div", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  attrs: { placeholder: _vm.model.search, type: "search" },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.model.tools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.model.contents, function(setting, index) {
          return _c(setting._upb_field_type, {
            key: index,
            tag: "component",
            attrs: {
              keyindexname: "metaId",
              keyvaluename: "metaValue",
              items: _vm.model.contents,
              index: index,
              defaultValue: setting._upb_field_attrs.default,
              attributes: setting._upb_field_attrs,
              target: "metaValue",
              model: _vm.model.contents[index]
            }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-90ae501e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_LayoutsPanel_js__ = __webpack_require__(116);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_700a10db_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LayoutsPanel_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_LayoutsPanel_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_700a10db_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LayoutsPanel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_700a10db_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LayoutsPanel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/panels/LayoutsPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-700a10db", Component.options)
  } else {
    hotAPI.reload("data-v-700a10db", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_LayoutsList_js__ = __webpack_require__(117);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0876abd2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LayoutsList_vue__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_LayoutsList_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0876abd2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LayoutsList_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0876abd2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_LayoutsList_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/panels/LayoutsList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0876abd2", Component.options)
  } else {
    hotAPI.reload("data-v-0876abd2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "upb-layout-list" }, [
    _c("div", { staticClass: "preview-image-wrapper" }, [
      _c(
        "a",
        {
          attrs: { href: "#", title: _vm.l10n.layoutUse },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.useLayout()
            }
          }
        },
        [
          _c("img", {
            attrs: { src: _vm.image, draggable: "false", alt: _vm.model.title }
          })
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "layouts-contents" }, [
      _c("div", { domProps: { textContent: _vm._s(_vm.model.title) } }),
      _vm._v(" "),
      _c("div", { domProps: { textContent: _vm._s(_vm.model.desc) } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0876abd2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { class: _vm.panelClass() }, [
    _c("li", { staticClass: "upb-panel-header-wrapper" }, [
      _c("ul", [
        _c("li", { staticClass: "upb-panel-header" }, [
          _c("div", { staticClass: "panel-heading-wrapper" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c(
                "div",
                { staticClass: "upb-breadcrumb" },
                [_c("upb-breadcrumb")],
                1
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "panel-title",
                domProps: { textContent: _vm._s(_vm.model.title) }
              })
            ]),
            _vm._v(" "),
            _vm.model.help
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showHelp },
                      "upb-content-help-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleHelp()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-help-circle-outline" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.model.search
              ? _c(
                  "button",
                  {
                    class: [
                      { active: _vm.showSearch },
                      "upb-content-search-toggle"
                    ],
                    attrs: { tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toggleFilter()
                      }
                    }
                  },
                  [_c("i", { staticClass: "mdi mdi-magnify" })]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-meta" }, [
          _vm.showHelp
            ? _c("div", { domProps: { innerHTML: _vm._s(_vm.model.help) } })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSearch
            ? _c("div", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchQuery,
                      expression: "searchQuery"
                    }
                  ],
                  attrs: { placeholder: _vm.model.search, type: "search" },
                  domProps: { value: _vm.searchQuery },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.searchQuery = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "upb-panel-tools" }, [
          _c(
            "ul",
            _vm._l(_vm.model.tools, function(tool) {
              return _c("li", { key: tool.id }, [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.toolsAction(tool, $event)
                      }
                    }
                  },
                  [
                    _c("i", { class: tool.icon }),
                    _vm._v(" "),
                    _c("div", { domProps: { textContent: _vm._s(tool.title) } })
                  ]
                )
              ])
            })
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("li", { staticClass: "upb-panel-contents" }, [
      _c(
        "ul",
        { staticClass: "upb-panel-contents-items" },
        _vm._l(_vm.contents, function(item, index) {
          return _c("upb-layouts-list", {
            key: index,
            tag: "component",
            attrs: { index: index, model: item }
          })
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-700a10db", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebar_js__ = __webpack_require__(118);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45126e6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebar_vue__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(296)
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebar_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45126e6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_45126e6e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UPBSidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45126e6e", Component.options)
  } else {
    hotAPI.reload("data-v-45126e6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 296 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nprogress__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Helper = function () {
    function Helper(options) {
        _classCallCheck(this, Helper);

        __WEBPACK_IMPORTED_MODULE_0__nprogress___default.a.configure(__WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {
            parent: '#progress-bar',
            showSpinner: false,
            minimum: 0.6,
            trickleRate: 0.4
        }, options));
    }

    _createClass(Helper, [{
        key: "show",
        value: function show() {
            __WEBPACK_IMPORTED_MODULE_0__nprogress___default.a.start();
        }
    }, {
        key: "hide",
        value: function hide() {
            __WEBPACK_IMPORTED_MODULE_0__nprogress___default.a.done();
        }
    }]);

    return Helper;
}();

// Usages:
//
// The helper globally `Vue.Helper` or in a Vue instance `this.$helper`
// import Helper from "./Helper";
// Vue.use(Helper, { someOption: true })

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.ProgressBar = new Helper(options);

    Object.defineProperty(Vue.prototype, '$progressbar', {
        value: Vue.ProgressBar
    });
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function (root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }
})(this, function () {

  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function (options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function (n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = n === 1 ? null : n;

    var progress = NProgress.render(!started),
        bar = progress.querySelector(Settings.barSelector),
        speed = Settings.speed,
        ease = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function (next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function () {
          css(progress, {
            transition: 'all ' + speed + 'ms linear',
            opacity: 0
          });
          setTimeout(function () {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function () {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function () {
    if (!NProgress.status) NProgress.set(0);

    var work = function work() {
      setTimeout(function () {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function (force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function (amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function () {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function () {
    var initial = 0,
        current = 0;

    NProgress.promise = function ($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function () {
        current--;
        if (current === 0) {
          initial = 0;
          NProgress.done();
        } else {
          NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };
  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function (fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');

    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar = progress.querySelector(Settings.barSelector),
        perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent = document.querySelector(Settings.parent),
        spinner;

    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function () {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function () {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function () {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = 'WebkitTransform' in bodyStyle ? 'Webkit' : 'MozTransform' in bodyStyle ? 'Moz' : 'msTransform' in bodyStyle ? 'ms' : 'OTransform' in bodyStyle ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }

  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d(' + toBarPerc(n) + '%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate(' + toBarPerc(n) + '%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n) + '%' };
    }

    barCSS.transition = 'all ' + speed + 'ms ' + ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = function () {
    var pending = [];

    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function (fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  }();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = function () {
    var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
        cssProps = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function (element, properties) {
      var args = arguments,
          prop,
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    };
  }();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toastr__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Helper = function Helper(options) {
    _classCallCheck(this, Helper);

    __WEBPACK_IMPORTED_MODULE_0__toastr___default.a.options = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {
        positionClass: 'toast-top-right',
        timeOut: 3000
    }, options);

    return __WEBPACK_IMPORTED_MODULE_0__toastr___default.a;
};

// Usages:
//
// The helper globally `Vue.Helper` or in a Vue instance `this.$helper`
// import Helper from "./Helper";
// Vue.use(Helper, { someOption: true })

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.Toast = new Helper(options);

    Object.defineProperty(Vue.prototype, '$toast', {
        value: Vue.Toast
    });
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */

;(function (root, factory) {

    if (( false ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = factory(window.jQuery);
    } else {
        root.toastr = factory(window.jQuery); // window.toastr :)
    }
})(this, function ($) {
    return function () {
        var $container;
        var listener;
        var toastId = 0;
        var toastType = {
            error: 'error',
            info: 'info',
            success: 'success',
            warning: 'warning'
        };

        var toastr = {
            clear: clear,
            remove: remove,
            error: error,
            getContainer: getContainer,
            info: info,
            options: {},
            subscribe: subscribe,
            success: success,
            version: '2.1.2',
            warning: warning
        };

        var previousToast;

        return toastr;

        ////////////////

        function error(message, title, optionsOverride) {
            return notify({
                type: toastType.error,
                iconClass: getOptions().iconClasses.error,
                message: message,
                optionsOverride: optionsOverride,
                title: title
            });
        }

        function getContainer(options, create) {
            if (!options) {
                options = getOptions();
            }
            $container = $('#' + options.containerId);
            if ($container.length) {
                return $container;
            }
            if (create) {
                $container = createContainer(options);
            }
            return $container;
        }

        function info(message, title, optionsOverride) {
            return notify({
                type: toastType.info,
                iconClass: getOptions().iconClasses.info,
                message: message,
                optionsOverride: optionsOverride,
                title: title
            });
        }

        function subscribe(callback) {
            listener = callback;
        }

        function success(message, title, optionsOverride) {
            return notify({
                type: toastType.success,
                iconClass: getOptions().iconClasses.success,
                message: message,
                optionsOverride: optionsOverride,
                title: title
            });
        }

        function warning(message, title, optionsOverride) {
            return notify({
                type: toastType.warning,
                iconClass: getOptions().iconClasses.warning,
                message: message,
                optionsOverride: optionsOverride,
                title: title
            });
        }

        function clear($toastElement, clearOptions) {
            var options = getOptions();
            if (!$container) {
                getContainer(options);
            }
            if (!clearToast($toastElement, options, clearOptions)) {
                clearContainer(options);
            }
        }

        function remove($toastElement) {
            var options = getOptions();
            if (!$container) {
                getContainer(options);
            }
            if ($toastElement && $(':focus', $toastElement).length === 0) {
                removeToast($toastElement);
                return;
            }
            if ($container.children().length) {
                $container.remove();
            }
        }

        // internal functions

        function clearContainer(options) {
            var toastsToClear = $container.children();
            for (var i = toastsToClear.length - 1; i >= 0; i--) {
                clearToast($(toastsToClear[i]), options);
            }
        }

        function clearToast($toastElement, options, clearOptions) {
            var force = clearOptions && clearOptions.force ? clearOptions.force : false;
            if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                $toastElement[options.hideMethod]({
                    duration: options.hideDuration,
                    easing: options.hideEasing,
                    complete: function complete() {
                        removeToast($toastElement);
                    }
                });
                return true;
            }
            return false;
        }

        function createContainer(options) {
            $container = $('<div/>').attr('id', options.containerId).addClass(options.positionClass).attr('aria-live', 'polite').attr('role', 'alert');

            $container.appendTo($(options.target));
            return $container;
        }

        function getDefaults() {
            return {
                tapToDismiss: true,
                toastClass: 'toast',
                containerId: 'toast-container',
                debug: false,

                showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                showDuration: 300,
                showEasing: 'swing', //swing and linear are built into jQuery
                onShown: undefined,
                hideMethod: 'fadeOut',
                hideDuration: 1000,
                hideEasing: 'swing',
                onHidden: undefined,
                closeMethod: false,
                closeDuration: false,
                closeEasing: false,

                extendedTimeOut: 1000,
                iconClasses: {
                    error: 'toast-error',
                    info: 'toast-info',
                    success: 'toast-success',
                    warning: 'toast-warning'
                },
                iconClass: 'toast-info',
                positionClass: 'toast-top-right',
                timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                titleClass: 'toast-title',
                messageClass: 'toast-message',
                escapeHtml: false,
                target: 'body',
                closeHtml: '<button type="button">&times;</button>',
                newestOnTop: true,
                preventDuplicates: false,
                progressBar: false
            };
        }

        function publish(args) {
            if (!listener) {
                return;
            }
            listener(args);
        }

        function notify(map) {
            var options = getOptions();
            var iconClass = map.iconClass || options.iconClass;

            if (typeof map.optionsOverride !== 'undefined') {
                options = $.extend(options, map.optionsOverride);
                iconClass = map.optionsOverride.iconClass || iconClass;
            }

            if (shouldExit(options, map)) {
                return;
            }

            toastId++;

            $container = getContainer(options, true);

            var intervalId = null;
            var $toastElement = $('<div/>');
            var $titleElement = $('<div/>');
            var $messageElement = $('<div/>');
            var $progressElement = $('<div/>');
            var $closeElement = $(options.closeHtml);
            var progressBar = {
                intervalId: null,
                hideEta: null,
                maxHideTime: null
            };
            var response = {
                toastId: toastId,
                state: 'visible',
                startTime: new Date(),
                options: options,
                map: map
            };

            personalizeToast();

            displayToast();

            handleEvents();

            publish(response);

            if (options.debug && console) {
                console.log(response);
            }

            return $toastElement;

            function escapeHtml(source) {
                if (source == null) source = "";

                return new String(source).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }

            function personalizeToast() {
                setIcon();
                setTitle();
                setMessage();
                setCloseButton();
                setProgressBar();
                setSequence();
            }

            function handleEvents() {
                $toastElement.hover(stickAround, delayedHideToast);
                if (!options.onclick && options.tapToDismiss) {
                    $toastElement.click(hideToast);
                }

                if (options.closeButton && $closeElement) {
                    $closeElement.click(function (event) {
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                            event.cancelBubble = true;
                        }
                        hideToast(true);
                    });
                }

                if (options.onclick) {
                    $toastElement.click(function (event) {
                        options.onclick(event);
                        hideToast();
                    });
                }
            }

            function displayToast() {
                $toastElement.hide();

                $toastElement[options.showMethod]({ duration: options.showDuration, easing: options.showEasing, complete: options.onShown });

                if (options.timeOut > 0) {
                    intervalId = setTimeout(hideToast, options.timeOut);
                    progressBar.maxHideTime = parseFloat(options.timeOut);
                    progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    if (options.progressBar) {
                        progressBar.intervalId = setInterval(updateProgress, 10);
                    }
                }
            }

            function setIcon() {
                if (map.iconClass) {
                    $toastElement.addClass(options.toastClass).addClass(iconClass);
                }
            }

            function setSequence() {
                if (options.newestOnTop) {
                    $container.prepend($toastElement);
                } else {
                    $container.append($toastElement);
                }
            }

            function setTitle() {
                if (map.title) {
                    $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                    $toastElement.append($titleElement);
                }
            }

            function setMessage() {
                if (map.message) {
                    $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                    $toastElement.append($messageElement);
                }
            }

            function setCloseButton() {
                if (options.closeButton) {
                    $closeElement.addClass('toast-close-button').attr('role', 'button');
                    $toastElement.prepend($closeElement);
                }
            }

            function setProgressBar() {
                if (options.progressBar) {
                    $progressElement.addClass('toast-progress');
                    $toastElement.prepend($progressElement);
                }
            }

            function shouldExit(options, map) {
                if (options.preventDuplicates) {
                    if (map.message === previousToast) {
                        return true;
                    } else {
                        previousToast = map.message;
                    }
                }
                return false;
            }

            function hideToast(override) {
                var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                var duration = override && options.closeDuration !== false ? options.closeDuration : options.hideDuration;
                var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                if ($(':focus', $toastElement).length && !override) {
                    return;
                }
                clearTimeout(progressBar.intervalId);
                return $toastElement[method]({
                    duration: duration,
                    easing: easing,
                    complete: function complete() {
                        removeToast($toastElement);
                        if (options.onHidden && response.state !== 'hidden') {
                            options.onHidden();
                        }
                        response.state = 'hidden';
                        response.endTime = new Date();
                        publish(response);
                    }
                });
            }

            function delayedHideToast() {
                if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                    intervalId = setTimeout(hideToast, options.extendedTimeOut);
                    progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                    progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                }
            }

            function stickAround() {
                clearTimeout(intervalId);
                progressBar.hideEta = 0;
                $toastElement.stop(true, true)[options.showMethod]({ duration: options.showDuration, easing: options.showEasing });
            }

            function updateProgress() {
                var percentage = (progressBar.hideEta - new Date().getTime()) / progressBar.maxHideTime * 100;
                $progressElement.width(percentage + '%');
            }
        }

        function getOptions() {
            return $.extend({}, getDefaults(), toastr.options);
        }

        function removeToast($toastElement) {
            if (!$container) {
                $container = getContainer();
            }
            if ($toastElement.is(':visible')) {
                return;
            }
            $toastElement.remove();
            $toastElement = null;
            if ($container.children().length === 0) {
                $container.remove();
                previousToast = undefined;
            }
        }
    }();
});

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _this = this;



var Directive = {
    bind: function bind(el, binding, vnode) {},
    update: function update(el, binding, vnode) {},
    unbind: function unbind(el) {
        jQuery(el).sortable("destroy");
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {},
    inserted: function inserted(el, binding, vnode) {

        var values = { oldIndex: 0, newIndex: 0 };

        jQuery(el).sortable(binding.value || {});

        jQuery(el).sortable("option", "start", function (event, ui) {
            values.oldIndex = ui.item.index();

            if (vnode.context.onStart) {
                vnode.context.onStart(event);
            }
        });

        jQuery(el).sortable("option", "update", function (event, ui) {

            values.newIndex = ui.item.index();

            if (!vnode.context.onUpdate) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement the `onUpdate` method', vnode.context);
            }

            vnode.context.onUpdate(event, jQuery.extend(true, {}, values));

            // reset :)
            values.oldIndex = 0;
            values.newIndex = 0;
        });

        jQuery(el).disableSelection();
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (!jQuery().sortable) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('jQueryUI Sortable not installed or found globally to use `vue-sortable` directive..', _this);
    }

    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('sortable', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBBreadcrumb_js__ = __webpack_require__(119);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ef9356a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBBreadcrumb_vue__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBBreadcrumb_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ef9356a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBBreadcrumb_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ef9356a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBBreadcrumb_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/extra/UPBBreadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ef9356a", Component.options)
  } else {
    hotAPI.reload("data-v-6ef9356a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", [
    _vm.path.length > 0
      ? _c(
          "li",
          { class: _vm.className() },
          _vm._l(_vm.breadcrumb, function(b, index) {
            return _c("a", {
              key: index,
              attrs: { href: "#" },
              domProps: { textContent: _vm._s(b.title) },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.goTo(b.link)
                }
              }
            })
          })
        )
      : _c("li", {
          staticClass: "no-breadcrumb",
          domProps: { textContent: _vm._s(_vm.l10n.breadcrumbRoot) }
        })
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ef9356a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarHeader_js__ = __webpack_require__(120);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26265325_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarHeader_vue__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(305)
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarHeader_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26265325_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarHeader_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26265325_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarHeader_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/sidebar/UPBSidebarHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26265325", Component.options)
  } else {
    hotAPI.reload("data-v-26265325", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 305 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarHeaderItem_js__ = __webpack_require__(121);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2093b50_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarHeaderItem_vue__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarHeaderItem_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2093b50_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarHeaderItem_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b2093b50_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarHeaderItem_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/sidebar/UPBSidebarHeaderItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2093b50", Component.options)
  } else {
    hotAPI.reload("data-v-b2093b50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "router-link",
    { attrs: { to: _vm.url(), tag: "li", "active-class": "active" } },
    [
      _c("a", { attrs: { title: _vm.model.title } }, [
        _c("i", { class: _vm.model.icon })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b2093b50", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "upb-sidebar-header" } }, [
    _c("ul", [
      _c("li", { staticClass: "btn-close" }, [
        _c("a", { attrs: { href: _vm.l10n.closeUrl, title: _vm.l10n.close } }, [
          _c("i", { staticClass: "mdi mdi-window-close" })
        ])
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "tab-wrapper" },
        _vm._l(_vm.model, function(item, index) {
          return _c("upb-sidebar-header-item", {
            key: index,
            tag: "component",
            attrs: { model: item }
          })
        })
      ),
      _vm._v(" "),
      _c("li", { class: [{ active: _vm.isDirty() }, "btn-save"] }, [
        _c(
          "a",
          {
            attrs: { href: "#", title: _vm.l10n.save },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.save()
              }
            }
          },
          [_c("i", { staticClass: "mdi mdi-content-save-all" })]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-26265325", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarContent_js__ = __webpack_require__(122);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_437dc611_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarContent_vue__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(310)
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarContent_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_437dc611_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarContent_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_437dc611_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarContent_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/sidebar/UPBSidebarContent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-437dc611", Component.options)
  } else {
    hotAPI.reload("data-v-437dc611", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 310 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "upb-sidebar-contents" } },
    [_c("router-view", { attrs: { model: _vm.item } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-437dc611", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarFooter_js__ = __webpack_require__(123);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04f3ef33_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarFooter_vue__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(313)
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarFooter_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04f3ef33_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarFooter_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04f3ef33_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarFooter_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/sidebar/UPBSidebarFooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04f3ef33", Component.options)
  } else {
    hotAPI.reload("data-v-04f3ef33", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 313 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "upb-sidebar-footer" } }, [
    _c(
      "a",
      {
        class: [{ current: _vm.sidebarExpand }, "btn-collapse"],
        attrs: { title: _vm.l10n.collapse, href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.collapseSidebar()
          }
        }
      },
      [_c("i", { staticClass: "mdi mdi-arrow-left-drop-circle-outline" })]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        class: [{ current: !_vm.sidebarExpand }, "btn-expand"],
        attrs: { title: _vm.l10n.expand, href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.expandSidebar()
          }
        }
      },
      [_c("i", { staticClass: "mdi mdi-arrow-right-drop-circle" })]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "previews" },
      _vm._l(_vm.devices, function(device) {
        return _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.deviceAvailable(device.id),
                expression: "deviceAvailable(device.id)"
              }
            ],
            key: device.id,
            class: { active: _vm.currentDevice(device.id) },
            attrs: { title: device.title, href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.toggleResponsivePreview(device.id)
              }
            }
          },
          [_c("i", { class: device.icon })]
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04f3ef33", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarSubPanel_js__ = __webpack_require__(124);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75727f0c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarSubPanel_vue__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(316)
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSidebarSubPanel_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75727f0c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarSubPanel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75727f0c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSidebarSubPanel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/sub-panels/UPBSidebarSubPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75727f0c", Component.options)
  } else {
    hotAPI.reload("data-v-75727f0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 316 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSubPanelSections_js__ = __webpack_require__(125);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_232d70b6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSubPanelSections_vue__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBSubPanelSections_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_232d70b6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSubPanelSections_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_232d70b6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBSubPanelSections_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/sub-panels/UPBSubPanelSections.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232d70b6", Component.options)
  } else {
    hotAPI.reload("data-v-232d70b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "sidebar-sub-panel-sections" } }, [
    _c("div", { staticClass: "sub-panel-sections-header" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.searchQuery,
            expression: "searchQuery"
          }
        ],
        attrs: { placeholder: _vm.l10n.searchSavedSection, type: "search" },
        domProps: { value: _vm.searchQuery },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.searchQuery = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              _vm.toggleTextArea()
            }
          }
        },
        [_c("i", { staticClass: "mdi mdi-clipboard-text" })]
      )
    ]),
    _vm._v(" "),
    _vm.showTextarea
      ? _c("div", { staticClass: "sub-panel-sections-load" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.textareaContents,
                expression: "textareaContents"
              }
            ],
            attrs: { placeholder: _vm.l10n.pasteJSON },
            domProps: { value: _vm.textareaContents },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.textareaContents = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("button", {
            domProps: { textContent: _vm._s(_vm.l10n.add) },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.saveSection()
              }
            }
          })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "sub-panel-sections-list" }, [
      _c(
        "ul",
        _vm._l(_vm.contents, function(content, index) {
          return _c("li", { key: index }, [
            _c("div", { staticClass: "sub-panel-section-tools" }, [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.addSection(index)
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-plus" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.copySection(index)
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-clipboard-outline" })]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.deleteSection(index)
                    }
                  }
                },
                [_c("i", { staticClass: "mdi mdi-close" })]
              )
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "sub-panel-section-title",
              domProps: { textContent: _vm._s(content.attributes.title) }
            })
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-232d70b6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.subPanelClass, attrs: { id: "sidebar-sub-panel" } },
    [
      _vm.panel
        ? _c(_vm.subPanelComponent, {
            tag: "component",
            attrs: { model: _vm.model }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75727f0c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "upb-sidebar" } },
    [
      _c(
        "div",
        { attrs: { id: "sidebar-main-panel" } },
        [
          _c("div", { attrs: { id: "progress-bar" } }),
          _vm._v(" "),
          _c("upb-sidebar-header", {
            tag: "component",
            attrs: { model: _vm.store.tabs }
          }),
          _vm._v(" "),
          _c("upb-sidebar-content", {
            tag: "component",
            attrs: { model: _vm.store.tabs }
          }),
          _vm._v(" "),
          _c("upb-sidebar-footer", {
            tag: "component",
            attrs: { model: _vm.store.tabs }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("upb-sidebar-sub-panel", {
        tag: "component",
        attrs: { model: _vm.store.tabs, panel: _vm.store.subpanel }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45126e6e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBPreview_js__ = __webpack_require__(126);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_109730da_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBPreview_vue__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBPreview_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_109730da_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBPreview_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_109730da_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBPreview_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/UPBPreview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-109730da", Component.options)
  } else {
    hotAPI.reload("data-v-109730da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprintf_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        index: {
            type: Number
        },
        model: {
            type: Object
        },
        parent: {
            type: Object
        }
    },

    data: function data() {
        return {
            l10n: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].l10n,
            xhrContents: '',
            generatedAjaxAttributes: {},
            debounceWaitTime: 300
        };
    },
    created: function created() {
        var _this2 = this;

        this.$watch('xhrContents', function () {
            var _this = this;

            _.delay(function () {
                _this.setPreviewData();
                _this.inlineScriptInit(true);
            }, 100);
        });

        this.$watch('model.contents', function (contents) {

            this.setPreviewData();
            this.addKeyIndex(this.model._upb_options._keyIndex);

            if (_.isArray(contents)) {
                //this.setPreviewData();
                this.getAjaxContentsDebounce();
                this.attributeWatch();
            }
        }, { deep: this.model._upb_options.preview.shortcode }); // Content Have Shortcode Also

        this.$watch('model.attributes', function (newVal, oldVal) {
            //this.addClass();
            this.setPreviewData();
            this.attributeWatch();
            this.getAjaxContentsDebounce();
        }, { deep: true });

        this.$nextTick(function () {
            this.addKeyIndex(this.model._upb_options._keyIndex);
        });

        if (this.getGeneratedAttributes()) {
            this.getGeneratedAttributes().map(function (attribute_id) {
                var action = _this2.getGeneratedAttributesAction(attribute_id);
                _this2.setGeneratedAttributes(attribute_id, '');
                _this2.$watch('model.attributes.' + attribute_id, function (attribute_value, old_value) {

                    // On immediate load we should not use _.debounce
                    // old_value===undefined means its immediate :)
                    if (old_value) {
                        this.getGeneratedAttributeContents(action, attribute_id, { attribute_id: '' + attribute_id, attribute_value: '' + attribute_value });
                    } else {
                        this.getAttributeContentsAjax(action, attribute_id, { attribute_id: '' + attribute_id, attribute_value: '' + attribute_value });
                    }
                }, { deep: true, immediate: true });
            });
        }

        this.setPreviewData();

        this.getAjaxContents();
    },
    beforeDestroy: function beforeDestroy() {
        this.deletePreviewData();
        this.removeInlineScript();
    },
    mounted: function mounted() {
        this.loadScripts();
    },
    updated: function updated() {
        this.loadScripts();
    },


    computed: {
        ajaxContents: function ajaxContents() {
            return this.xhrContents;
        },
        hasContents: function hasContents() {
            return _.isArray(this.model['contents']) ? this.model.contents.length > 0 : true;
        },
        unique_id: function unique_id() {
            return 'upb-' + this._uid;
        },
        uniqueId: function uniqueId() {
            return 'upb-' + this._uid;
        },
        generatedAttributes: function generatedAttributes() {
            return this.generatedAjaxAttributes;
        },
        attributes: function attributes() {
            return this.model.attributes;
        },
        contents: function contents() {
            return this.model.contents;
        },
        tag: function tag() {
            return this.model.tag;
        },
        enabled: function enabled() {
            return !_.isUndefined(this.model.attributes['enable']) ? this.model.attributes.enable : true;
        },
        active: function active() {
            return this.model.attributes.active;
        },
        title: function title() {
            return this.model.attributes.title;
        },
        deviceHiddenClasses: function deviceHiddenClasses() {
            return !_.isUndefined(this.model.attributes['device-hidden']) ? this.model.attributes['device-hidden'].join(' ') : null;
        },
        backgroundVariables: function backgroundVariables() {

            var background = {};
            if (!_.isUndefined(this.model.attributes['background-type'])) {

                if (['both', 'color'].includes(this.model.attributes['background-type'])) {
                    background['--background-color'] = this.model.attributes['background-color'];
                }

                if (['both', 'image'].includes(this.model.attributes['background-type'])) {
                    if (this.model.attributes['background-image']) {
                        background['--background-image'] = 'url(' + this.model.attributes['background-image'] + ')';

                        if (!_.isUndefined(this.model.attributes['background-position'])) {
                            background['--background-position'] = this.model.attributes['background-position'];
                        }

                        if (!_.isUndefined(this.model.attributes['background-repeat'])) {
                            background['--background-repeat'] = this.model.attributes['background-repeat'];
                        }

                        if (!_.isUndefined(this.model.attributes['background-attachment'])) {
                            background['--background-attachment'] = this.model.attributes['background-attachment'];
                        }

                        if (!_.isUndefined(this.model.attributes['background-origin'])) {
                            background['--background-origin'] = this.model.attributes['background-origin'];
                        }

                        if (!_.isUndefined(this.model.attributes['background-size'])) {
                            background['--background-size'] = this.model.attributes['background-size'];
                        }
                    }
                }

                if (['gradient'].includes(this.model.attributes['background-type'])) {
                    background['--gradient-position'] = this.model.attributes['gradient-position'];

                    background['--gradient-start-color'] = this.model.attributes['gradient-start-color'];
                    background['--gradient-start-location'] = this.model.attributes['gradient-start-location'] + '%';

                    if (!_.isUndefined(this.model.attributes['gradient-color-stop-1']) && !_.isUndefined(this.model.attributes['gradient-color-stop-1-location'])) {
                        background['--gradient-color-stop-1'] = this.model.attributes['gradient-color-stop-1'];
                        background['--gradient-color-stop-1-location'] = this.model.attributes['gradient-color-stop-1-location'] + '%';
                    }

                    background['--gradient-end-color'] = this.model.attributes['gradient-end-color'];
                    background['--gradient-end-location'] = this.model.attributes['gradient-end-location'] + '%';
                }
            }
            return background;
        },
        elementID: function elementID() {
            return !_.isUndefined(this.model.attributes['element_id']) ? this.model.attributes.element_id : null;
        },
        elementClass: function elementClass() {
            return !_.isUndefined(this.model.attributes['element_class']) ? this.model.attributes.element_class : null;
        },
        sidebarExpanded: function sidebarExpanded() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].sidebarExpanded;
        },
        keyIndex: function keyIndex() {
            return this.model._upb_options._keyIndex;
        },
        messages: function messages() {
            return this.model._upb_options.meta.messages;
        },
        $router: function $router() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].panel._router;
        },
        $route: function $route() {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].panel._route;
        },
        gradientBackgroundClass: function gradientBackgroundClass() {

            var classes = [];

            if (this.hasGradientBackground()) {
                classes.push('has-gradient');
            }

            if (this.hasGradientBackgroundWithOutColorStop()) {
                classes.push('without-color-stop');
            }

            if (this.hasGradientBackgroundWithColorStop()) {
                classes.push('with-color-stop');
            }

            return classes.join(' ');
        }
    },

    methods: {
        getMediaImageSrc: function getMediaImageSrc(string) {
            var _string$split = string.split('|'),
                _string$split2 = _slicedToArray(_string$split, 3),
                id = _string$split2[0],
                size = _string$split2[1],
                src = _string$split2[2];

            return src ? src : id;
        },
        getMediaImage: function getMediaImage(string) {
            var _string$split3 = string.split('|'),
                _string$split4 = _slicedToArray(_string$split3, 3),
                id = _string$split4[0],
                size = _string$split4[1],
                src = _string$split4[2];

            return { id: id, size: size, src: src };
        },
        getSpacingInputValue: function getSpacingInputValue(id) {
            var settings = this.model._upb_settings.filter(function (value) {
                return value.id == id;
            })[0];
            var attributeValues = this.attributes[id] ? this.attributes[id] : settings.default;
            return attributeValues.join(' ');
        },
        hasGradientBackground: function hasGradientBackground() {
            return ['gradient'].includes(this.model.attributes['background-type']);
        },
        hasGradientBackgroundWithColorStop: function hasGradientBackgroundWithColorStop() {
            return ['gradient'].includes(this.model.attributes['background-type']) && (!_.isUndefined(this.model.attributes['gradient-color-stop-1']) || !_.isUndefined(this.model.attributes['gradient-color-stop-1-location']));
        },
        hasGradientBackgroundWithOutColorStop: function hasGradientBackgroundWithOutColorStop() {
            return ['gradient'].includes(this.model.attributes['background-type']) && (_.isUndefined(this.model.attributes['gradient-color-stop-1']) || _.isUndefined(this.model.attributes['gradient-color-stop-1-location']));
        },
        getAttribute: function getAttribute(attribute) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            return this.attributes[attribute] ? this.attributes[attribute] : defaultValue;
        },
        getGeneratedAttributes: function getGeneratedAttributes() {
            return this.model._upb_options.element.generatedAttributes ? this.model._upb_options.element.generatedAttributes : [];
        },
        getGeneratedAttributesAction: function getGeneratedAttributesAction(attribute_id) {
            return this.model._upb_options.element.generatedAttributesAction ? '_upb_generate_attribute_' + this.model._upb_options.element.generatedAttributesAction : '_upb_generate_attribute_' + this.tag + '_' + attribute_id;
        },
        setGeneratedAttributes: function setGeneratedAttributes(id, value) {
            Vue.set(this.generatedAjaxAttributes, id, value);
        },
        addKeyIndex: function addKeyIndex(keyindex) {
            var _this3 = this;

            if (_.isArray(this.contents)) {
                this.contents.map(function (m, i) {
                    if (_this3.isElementRegistered(m.tag)) {
                        m._upb_options['_keyIndex'] = keyindex + '/' + i;
                    } else {
                        console.info('%c Element "' + m.tag + '" is used but not registered. It\'s going to remove...', 'color:red; font-size:18px');
                        _this3.model.contents.splice(i, 1);
                        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].stateChanged();
                        _this3.$toast.warning(Object(__WEBPACK_IMPORTED_MODULE_2_sprintf_js__["sprintf"])(_this3.l10n.elementNotRegistered, m.tag));
                    }
                });
            }
        },
        getAjaxContents: function getAjaxContents() {
            var _this4 = this;

            if (this.model._upb_options.preview.ajax) {
                if (this.model._upb_options.preview.shortcode) {

                    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].wpAjax(this.model._upb_options.preview['ajax-hook'], {
                        attributes: this.attributes,
                        shortcode: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].generateShortcode(this.tag, this.attributes, this.contents)
                    }, function (contents) {
                        //this.$nextTick(function () {
                        if (_.isEmpty(contents)) {
                            console.info('%c Empty content returns. Is your "' + _this4.tag + '" shortcode template available on: "shortcodes/' + _this4.tag + '.php" path?', 'color:red; font-size:18px');
                        }

                        _this4.$set(_this4, 'xhrContents', contents);
                        //});
                    }, function (error) {

                        if (error == 0) {
                            console.info('%c You should add "' + _this4.model._upb_options.preview['ajax-hook'] + '" wp ajax hook. like: "wp_ajax_' + _this4.model._upb_options.preview['ajax-hook'] + '".', 'color:red; font-size:18px');
                        } else {
                            console.info(error);
                        }
                    }, {
                        cache: true
                    });
                } else {
                    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].wpAjax(this.model._upb_options.preview['ajax-hook'], this.attributes, function (contents) {
                        //this.$nextTick(function () {
                        _this4.$set(_this4, 'xhrContents', contents);
                        //});
                    }, function (error) {

                        if (error == 0) {
                            console.info('%c You need to implement "' + _this4.model._upb_options.preview['ajax-hook'] + '" with wp ajax: "wp_ajax_' + _this4.model._upb_options.preview['ajax-hook'] + '".', 'color:red; font-size:18px');
                        } else {
                            console.info(error);
                        }
                    }, {
                        cache: true
                    });
                }
            }
        },


        getAjaxContentsDebounce: _.debounce(function () {
            this.getAjaxContents();
        }, this.debounceWaitTime),

        getAttributeContentsAjax: function getAttributeContentsAjax(action, id, data) {
            var _this5 = this;

            __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].wpAjax(action, data, function (contents) {
                return _this5.setGeneratedAttributes(id, contents);
            }, function (error) {
                if (error == 0) {
                    console.info('%c You are using "generatedAttributes" on "' + _this5.tag + '" element. So you should add "' + action + '" wp ajax hook. like: "wp_ajax_' + action + '" to get generated attribute contents.', 'color:red; font-size:18px');
                } else {
                    console.info(error);
                }
            }, {
                cache: true,
                type: 'GET'
            });
        },


        getGeneratedAttributeContents: _.debounce(function (action, id, data) {
            this.getAttributeContentsAjax(action, id, data);
        }, this.debounceWaitTime),

        inlineStyle: function inlineStyle() {
            var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return __WEBPACK_IMPORTED_MODULE_1_extend___default()(false, {}, this.backgroundVariables, style);
        },
        addID: function addID() {
            return !_.isUndefined(this.attributes['element_id']) ? this.attributes.element_id : null;
        },
        isElementRegistered: function isElementRegistered(tag) {
            return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].isElementRegistered(tag);
        },


        attributeWatch: _.debounce(function () {
            this.inlineScriptInit(true);
        }, this.debounceWaitTime),

        setPreviewData: function setPreviewData() {
            if (this.model._upb_options.assets.preview.inline_js) {

                if (!__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewWindow()._UPB_PREVIEW_DATA[this.unique_id]) {
                    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewWindow()._UPB_PREVIEW_DATA[this.unique_id] = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {}, {
                        id: this.unique_id,
                        element: this.$el,
                        wrapper_class: 'element-id-' + this.unique_id,
                        attributes: this.attributes,
                        contents: this.contents
                    });
                } else {
                    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewWindow()._UPB_PREVIEW_DATA[this.unique_id] = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewWindow()._UPB_PREVIEW_DATA[this.unique_id], {
                        id: this.unique_id,
                        element: this.$el,
                        wrapper_class: 'element-id-' + this.unique_id,
                        attributes: this.attributes,
                        contents: this.contents
                    });
                }

                return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewWindow()._UPB_PREVIEW_DATA[this.unique_id];
            }

            return null;
        },
        deletePreviewData: function deletePreviewData() {
            return delete __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewWindow()._UPB_PREVIEW_DATA[this.unique_id];
        },
        removeInlineScript: function removeInlineScript() {
            if (this.model._upb_options.assets.preview.inline_js) {

                var prefixInlineJS = 'upb_preview_assets_' + this.model.tag + '-inline-js';

                var previewDocument = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewDocument();

                if (previewDocument.querySelectorAll('#' + prefixInlineJS).length > 0) {
                    previewDocument.getElementsByTagName('body')[0].removeChild(previewDocument.getElementById(prefixInlineJS));
                }
            }
        },
        inlineScriptInit: function inlineScriptInit() {
            var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            // NOTE: If inline_js wrapped with <script> tag. then appendChild cannot execute script
            // So don't add <script> tag with inline_js

            if (remove) {
                this.removeInlineScript();
            }

            if (this.model._upb_options.assets.preview.inline_js) {

                var previewDocument = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewDocument();
                var script = document.createElement('script');

                var prefixInlineJS = 'upb_preview_assets_' + this.model.tag + '-inline-js';

                // ;(function ($, upb) { $(".upb-accordion-item").upbAccordion()  }(jQuery, _UPB_PREVIEW_DATA[upbComponentId]));
                script.id = prefixInlineJS;
                script.type = 'text/javascript';
                script.innerHTML = ';(function(upbComponentId){\n                    try{\n                        ' + this.model._upb_options.assets.preview.inline_js + '\n                    }catch(e){\n                        console.info(e.message, upbComponentId)\n                    }\n                    }(\'' + this.unique_id + '\'));';

                previewDocument.getElementsByTagName('body')[0].appendChild(script);
            }
        },
        loadScripts: function loadScripts() {
            var _this6 = this;

            var previewDocument = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].previewDocument();

            //let prefixInlineJS = `upb_preview_assets_${this.unique_id}-inline-js`;
            var prefixInlineJS = 'upb_preview_assets_' + this.model.tag + '-inline-js';
            var prefixJS = 'upb_preview_assets_' + this.model.tag + '-js';
            var prefixCSS = 'upb_preview_assets_' + this.model.tag + '-css';

            // JS Already Loaded Re-Init InlineJS
            if (this.model._upb_options.assets.preview.js && previewDocument.querySelectorAll('#' + prefixJS).length > 0 && this.model._upb_options.assets.preview.inline_js) {
                _.delay(function () {
                    _this6.inlineScriptInit(true);
                }, this.debounceWaitTime);
            }

            // Load CSS
            if (this.model._upb_options.assets.preview.css && previewDocument.querySelectorAll('#' + prefixCSS).length < 1) {

                var style = document.createElement('link');
                style.rel = 'stylesheet';
                style.id = prefixCSS;
                style.type = 'text/css';
                style.href = this.model._upb_options.assets.preview.css;

                previewDocument.getElementsByTagName('head')[0].appendChild(style);
            }

            // Load JS
            if (this.model._upb_options.assets.preview.js && previewDocument.querySelectorAll('#' + prefixJS).length < 1) {

                var script = document.createElement('script');
                script.id = prefixJS;
                script.type = 'text/javascript';
                script.src = this.model._upb_options.assets.preview.js;
                script.async = true;

                // Load InlineJS
                if (this.model._upb_options.assets.preview.inline_js) {
                    script.onload = function () {
                        _this6.inlineScriptInit(true);
                    };
                }
                previewDocument.getElementsByTagName('body')[0].appendChild(script);
            }

            // NOTE: If inline_js wrapped with <script> tag. then appendChild cannot execute script
            // No JS but have InlineJS
            if (!this.model._upb_options.assets.preview.js && this.model._upb_options.assets.preview.inline_js) {
                this.inlineScriptInit(true);
            }
        },
        addPreviewClass: function addPreviewClass() {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            var cssClasses = [];

            cssClasses.push('upb-preview-element');

            cssClasses.push(this.tag + '-preview');

            if (extra && _.isString(extra)) {
                cssClasses.push(extra);
            }

            if (extra && Array.isArray(extra)) {
                cssClasses.push.apply(cssClasses, _toConsumableArray(extra));
            }

            if (extra && _.isObject(extra) && !Array.isArray(extra)) {
                cssClasses.push.apply(cssClasses, _toConsumableArray(Object.keys(extra).map(function (classes) {
                    return extra[classes];
                })));
            }

            if (this.model._upb_options.hasMiniToolbar) {
                cssClasses.push('upb-has-mini-toolbar');
            }

            if (this.sidebarExpanded) {
                cssClasses.push('upb-sidebar-expanded');
            } else {
                cssClasses.push('upb-sidebar-collapsed');
            }

            if (this.enabled) {
                cssClasses.push('upb-preview-element-enabled');
            } else {
                cssClasses.push('upb-preview-element-disabled');
            }

            if (!this.hasContents) {
                cssClasses.push('upb-preview-element-no-contents');
            }

            if (!this.model._upb_options.core) {
                cssClasses.push('upb-preview-element-non-core');
            }

            if (_.isArray(this.model.contents)) {
                cssClasses.push('upb-preview-element-type-container');
            }

            cssClasses.push('element-id-' + this.unique_id);

            return cssClasses.join(' ');
        },
        addClass: function addClass() {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var combinePreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


            var cssClasses = [];

            cssClasses.push(this.tag);

            if (extra && _.isString(extra)) {
                cssClasses.push(extra);
            }

            if (extra && Array.isArray(extra)) {
                cssClasses.push.apply(cssClasses, _toConsumableArray(extra));
            }

            if (extra && _.isObject(extra) && !Array.isArray(extra)) {
                cssClasses.push.apply(cssClasses, _toConsumableArray(Object.keys(extra).map(function (classes) {
                    return extra[classes];
                })));
            }

            if (combinePreview) {
                cssClasses.push(this.addPreviewClass());
            }

            if (this.elementClass) {
                cssClasses.push(this.elementClass);
            }

            if (this.deviceHiddenClasses) {
                cssClasses.push(this.deviceHiddenClasses);
            }

            return cssClasses.join(' ');
        },
        openElementsPanel: function openElementsPanel() {
            this.$router.replace('/elements');
        },
        openSettingsPanel: function openSettingsPanel() {
            this.$router.replace('/settings');
        },
        openLayoutsPanel: function openLayoutsPanel() {
            this.$router.replace('/layouts');
        },


        // Alias of openElementItemsPanel
        openElementsItemPanel: function openElementsItemPanel(path) {
            this.openElementItemsPanel(path);
        },
        openElementItemsPanel: function openElementItemsPanel(path) {
            var _this7 = this;

            if (path.split('/').length > 1) {
                var previousPath = path.split('/').slice(0, -1).join('/');
                this.$router.replace('/sections/' + previousPath + '/contents');
            }

            this.$nextTick(function () {
                _this7.$router.replace('/sections/' + path + '/contents');
            });
        },
        openElementSettingsPanel: function openElementSettingsPanel(path) {
            var _this8 = this;

            if (path.split('/').length > 1) {
                var previousPath = path.split('/').slice(0, -1).join('/');
                this.$router.replace('/sections/' + previousPath + '/contents');
            }

            this.$nextTick(function () {
                _this8.$router.replace('/sections/' + path + '/settings');
            });
        },


        // Color Functions
        // toRGB('ffffff'),
        // toRGB('#ffffff'),
        // toRGB('#ffffff', 0.3)
        toRGB: function toRGB(hexColor, opacity) {

            // If It's RGB Color
            if (hexColor.toLowerCase().substring(0, 3) == 'rgb') {
                return hexColor;
            }

            var hex = hexColor.replace('#', '');
            var h = hex.match(new RegExp('(.{' + hex.length / 3 + '})', 'g'));

            for (var i = 0; i < h.length; i++) {
                h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
            }if (typeof opacity != 'undefined') {
                h.push(opacity);
                return 'rgba(' + h.join(',') + ')';
            }

            return 'rgb(' + h.join(',') + ')';
        },


        // toHEX('rgb(255,255,255)'),
        // toHEX('rgba(255,255,255, 0.2)'
        toHEX: function toHEX(rgbColor) {

            // If It's Hex Color
            if (rgbColor.toLowerCase().substring(0, 1) == '#') {
                return rgbColor;
            }

            var rgb = rgbColor.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
            return rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



/* harmony default export */ __webpack_exports__["a"] = ({

    'upb-row': {
        computed: {
            rowGroupClass: function rowGroupClass() {
                return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].grid.groupClass;
            },
            containerClass: function containerClass() {
                var cssClasses = [];

                cssClasses.push(this.model.attributes.container);

                if (this.elementClass) {
                    cssClasses.push(this.elementClass);
                }

                if (this.deviceHiddenClasses) {
                    cssClasses.push(this.deviceHiddenClasses);
                }

                return cssClasses;
            }
        }
    },

    'upb-column': {
        computed: {
            generatedColumnClass: function generatedColumnClass() {
                var _this = this;

                var grid = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].grid.devices.map(function (device) {
                    var gridValue = _this.model.attributes[device.id].trim();

                    if (gridValue) {
                        var _gridValue$split = gridValue.split(':'),
                            _gridValue$split2 = _slicedToArray(_gridValue$split, 2),
                            col = _gridValue$split2[0],
                            t = _gridValue$split2[1];

                        var g = Math.round(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].grid.totalGrid / parseInt(t) * parseInt(col));

                        if (_.isUndefined(device.class)) {
                            return '' + __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].grid.prefixClass + __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].grid.separator + device.id + __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].grid.separator + g;
                        } else {
                            return '' + device.class + g;
                        }
                    } else {
                        return '';
                    }
                });
                // added extra grid class to control gutter
                grid.unshift(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].grid.allGridClass);
                return _.compact(grid);
            }
        },

        methods: {
            dropAccept: function dropAccept(content) {
                return true;
            },
            afterDrop: function afterDrop(content) {
                var accepted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (accepted) {

                    this.model.contents.push(content);

                    __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].stateChanged();

                    this.$nextTick(function () {

                        if (_.isArray(content.contents)) {
                            this.$router.replace('/sections/' + content._upb_options._keyIndex + '/contents');
                        } else if (_.isObject(content.attributes)) {
                            this.$router.replace('/sections/' + content._upb_options._keyIndex + '/settings');
                        }
                    });
                }
            }
        }
    }
});

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

// import store from '../store';

var Directive = {
    bind: function bind(el, binding, vnode) {},
    update: function update(newValue, oldValue, vnode) {},
    unbind: function unbind(el) {},
    componentUpdated: function componentUpdated() {},
    inserted: function inserted(el, binding, vnode) {

        el.addEventListener('dragover', function (event) {
            event.preventDefault();
        });

        el.addEventListener('drop', function (event) {

            if (!vnode.context.dropAccept) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement the `dropAccept` method', vnode.context);
            }

            if (!vnode.context.afterDrop) {
                __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('You need to implement the `onDrop` method', vnode.context);
            }

            try {

                var content = JSON.parse(event.dataTransfer.getData("text"));

                // Drop Accept should return true or false
                if (vnode.context.dropAccept(content)) {
                    vnode.context.afterDrop(content, true);
                } else {
                    vnode.context.afterDrop(content, false);
                }
            } catch (e) {
                console.info('Some thing was wrong on drop', e);
            }
        });
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('droppable', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var Directive = {
    bind: function bind(el, binding, vnode) {},
    update: function update(newValue, oldValue, vnode) {},
    unbind: function unbind(el) {},
    componentUpdated: function componentUpdated() {},
    inserted: function inserted(el, binding, vnode) {

        // jQuery(el).addClass(`upb-preview-element`).addClass(`${vnode.context.model.tag}-preview`);

        // No Contents Class
        if (!_.isUndefined(vnode.context.model['contents']) && _.isEmpty(vnode.context.model.contents) && (_.isString(vnode.context.model.contents) || _.isArray(vnode.context.model.contents))) {
            //    $(el).addClass(`upb-preview-element-no-contents`)
        }

        jQuery(el).find('>.upb-preview-mini-toolbar').on('mouseenter', function (event) {
            event.stopPropagation();
            vnode.context.model._upb_options.focus = true;
        });

        jQuery(el).find('>.upb-preview-mini-toolbar').on('mouseleave', function (event) {
            event.stopPropagation();
            vnode.context.model._upb_options.focus = false;
        });
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('preview-element', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_extend__);
var _this = this;




var Directive = {
    bind: function bind(el, binding, vnode) {},
    update: function update(el, binding, vnode) {},
    unbind: function unbind(el) {
        jQuery('.upb-add-element-message-regular', el).droppable("destroy");
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {},
    inserted: function inserted(el, binding, vnode) {

        jQuery('.upb-add-element-message-regular', el).droppable({
            hoverClass: "ui-droppable-hover",
            activeClass: "ui-droppable-active",
            tolerance: "pointer",
            addClasses: false,
            disabled: false,

            drop: function drop(event, ui) {

                var draggable = ui.draggable.context.__vue__;
                var droppable = vnode.context;

                //console.log(draggable);

                // console.log('from ', draggable.$parent.model._upb_options._keyIndex, 'to ', droppable.model._upb_options._keyIndex)

                if (!draggable || draggable.$parent.model._upb_options._keyIndex == droppable.model._upb_options._keyIndex) {
                    //console.log(`You cannot do this :)`);
                } else {
                    var getIndex = draggable.model._upb_options._keyIndex.split('/').pop();
                    var contents = __WEBPACK_IMPORTED_MODULE_1_extend___default()(true, {}, draggable.$parent.model.contents.splice(getIndex, 1).pop());

                    //delete contents._upb_options._keyIndex;
                    contents._upb_options.focus = false;

                    vnode.context.afterDrop(contents, true);
                }
            }
        });
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (!jQuery().droppable) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('jQueryUI Droppable not installed or found globally to use `vue-ui-droppable` directive..', _this);
    }

    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('ui-droppable', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _this = this;



var Directive = {
    bind: function bind(el, binding, vnode) {},
    update: function update(el, binding, vnode) {},
    unbind: function unbind(el) {
        jQuery(el).draggable("destroy");
    },
    componentUpdated: function componentUpdated(el, binding, vnode) {},
    inserted: function inserted(el, binding, vnode) {

        jQuery(el).draggable({
            //iframeFix  : true,
            //helper     : 'clone',
            opacity: 0.35,
            revert: "invalid",
            handle: ".upb-preview-mini-toolbar li.upb-move-element",
            addClasses: false,
            stop: function stop(event, ui) {
                ui.helper.attr('style', '');
            }
        });
    }
};

var Plugin = function Plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (!jQuery().draggable) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["util"].warn('jQueryUI Draggable not installed or found globally to use `vue-ui-draggable` directive..', _this);
    }

    // Install once example:
    // If you plugin need to load only once :)
    if (Plugin.installed) {
        return;
    }

    // Install Multi example:
    // If you plugin need to load multiple time :)
    /*if (Plugin.installed) {
     Plugin.installed = false;
     }*/

    Vue.directive('ui-draggable', Directive);
};

if (typeof window !== 'undefined' && __webpack_provided_window_dot_Vue) {
    __webpack_provided_window_dot_Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (Plugin);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBPreviewMiniToolbar_js__ = __webpack_require__(127);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8cbd1f8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBPreviewMiniToolbar_vue__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(1);
var disposed = false
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_dynamic_import_node_transform_object_rest_spread_UPBPreviewMiniToolbar_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8cbd1f8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBPreviewMiniToolbar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8cbd1f8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UPBPreviewMiniToolbar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/extra/UPBPreviewMiniToolbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8cbd1f8", Component.options)
  } else {
    hotAPI.reload("data-v-e8cbd1f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.is_sidebar_expanded
    ? _c("div", { class: _vm.className() }, [
        !_vm.onlyBorder
          ? _c("ul", [
              _vm.is_movable
                ? _c(
                    "li",
                    { staticClass: "upb-move-element upb-element-tool-icon" },
                    [_c("i", { staticClass: "mdi mdi-cursor-move" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("li", {
                staticClass: "upb-element-name",
                domProps: {
                  textContent: _vm._s(_vm.model._upb_options.element.name)
                }
              }),
              _vm._v(" "),
              _vm.has_contents && _vm.contents
                ? _c(
                    "li",
                    {
                      staticClass: "upb-element-tool-icon",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.openContentsPanel()
                        }
                      }
                    },
                    [_c("i", { staticClass: "mdi mdi-table-edit" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.has_settings && _vm.settings
                ? _c(
                    "li",
                    {
                      staticClass: "upb-element-tool-icon",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.openSettingsPanel()
                        }
                      }
                    },
                    [_c("i", { staticClass: "mdi mdi-settings" })]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.showDelete
                ? _c(
                    "li",
                    {
                      staticClass: "upb-element-tool-icon",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.removeElement()
                        }
                      }
                    },
                    [_c("i", { staticClass: "mdi mdi-delete-forever" })]
                  )
                : _vm._e()
            ])
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e8cbd1f8", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "upb-wrapper", attrs: { id: "upb-preview" } },
    _vm._l(_vm.model.contents, function(content, index) {
      return _c(content._upb_options.preview.component, {
        key: index,
        tag: "component",
        attrs: { index: index, parent: _vm.model, model: content }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-109730da", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 331 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 332 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 333 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 334 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 335 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 336 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[128]);