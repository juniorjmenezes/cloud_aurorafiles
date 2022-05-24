(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "/mP0":
/*!***************************************************!*\
  !*** ./modules/RocketChatWebclient/js/manager.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

module.exports = function (oAppData) {
	var
		ko = __webpack_require__(/*! knockout */ "0h2I"),

		App = __webpack_require__(/*! modules/CoreWebclient/js/App.js */ "IAk5"),

		TextUtils = __webpack_require__(/*! modules/CoreWebclient/js/utils/Text.js */ "RN+F"),

		Settings = __webpack_require__(/*! modules/RocketChatWebclient/js/Settings.js */ "aWeh"),
		
		WindowOpener = __webpack_require__(/*! modules/CoreWebclient/js/WindowOpener.js */ "ZCBP"),
		
		oOpenedWindows = [],
		
		HeaderItemView = null
	;
	
	Settings.init(oAppData);
	
	var sAppHash = Settings.AppName ? TextUtils.getUrlFriendlyName(Settings.AppName) : Settings.HashModuleName; 
	
	if (App.isUserNormalOrTenant())
	{
		var result = {
			/**
			 * Returns list of functions that are return module screens.
			 * 
			 * @returns {Object}
			 */
			getScreens: function ()
			{
				var oScreens = {};

				oScreens[Settings.HashModuleName] = function () {
					return __webpack_require__(/*! modules/RocketChatWebclient/js/views/MainView.js */ "Ik4g");
				};
				
				return oScreens;
			}
		};
		if (!App.isNewTab())
		{
			result.start = function (ModulesManager) {
				// init screen so the module could interact with chat in iframe
				var Screens = __webpack_require__(/*! modules/CoreWebclient/js/Screens.js */ "SQrT");
				Screens.initHiddenView(Settings.HashModuleName);

				if (Settings.ChatUrl !== '') {
					ModulesManager.run('SettingsWebclient', 'registerSettingsTab', [function () { return __webpack_require__(/*! modules/RocketChatWebclient/js/views/RocketChatSettingsPaneView.js */ "5K20"); }, Settings.HashModuleName, TextUtils.i18n('ROCKETCHATWEBCLIENT/LABEL_SETTINGS_TAB')]);
				}
				
				App.subscribeEvent('Logout', function () {
					$.removeCookie('RocketChatAuthToken');
					$.removeCookie('RocketChatUserId');
					if ($('#rocketchat_iframe')) {
						$('#rocketchat_iframe').hide();
						$('#rocketchat_iframe').get(0).contentWindow.postMessage({
							externalCommand: 'logout'
						}, '*');
					}
				});

				if (Settings.ChatUrl !== '') {
					App.subscribeEvent('ContactsWebclient::AddCustomCommand', function (oParams) {
						oParams.Callback({
							'Text': TextUtils.i18n('ROCKETCHATWEBCLIENT/ACTION_CHAT_WITH_CONTACT'),
							'CssClass': 'chat',
							'Handler': function () {
								var oWin = oOpenedWindows[this.uuid()];
								if (oWin && !oWin.closed)
								{
									oWin.focus();
								}
								else
								{
									var
										iScreenWidth = window.screen.width,
										iWidth = 360,
										iLeft = Math.ceil((iScreenWidth - iWidth) / 2),

										iScreenHeight = window.screen.height,
										iHeight = 600,
										iTop = Math.ceil((iScreenHeight - iHeight) / 2),

										sUrl = '?chat-direct=' + this.uuid() + '&' + new Date().getTime(),
										sName = 'Chat',
										sSize = ',width=' + iWidth + ',height=' + iHeight + ',top=' + iTop + ',left=' + iLeft
									;
									oWin = WindowOpener.open(sUrl, sName, false, sSize);
									if (oWin)
									{
										oOpenedWindows[this.uuid()] = oWin;
									}
								}
							},
							'Visible': ko.computed(function () { 
								return oParams.Contact.team() && !oParams.Contact.itsMe();
							})
						});
					});
				}
			};
			/**
			 * Returns object of header item view of the module.
			 * 
			 * @returns {Object}
			 */
			result.getHeaderItem = function () {
				if (HeaderItemView === null)
				{
					HeaderItemView = __webpack_require__(/*! modules/RocketChatWebclient/js/views/HeaderItemView.js */ "Eh7V");
				}
				if (Settings.ChatUrl !== '') {
					return {
						item: HeaderItemView,
						name: sAppHash
					};
				}
			};
		}

		return result;
	}
	
	return null;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "EVdn")))

/***/ }),

/***/ "5K20":
/*!****************************************************************************!*\
  !*** ./modules/RocketChatWebclient/js/views/RocketChatSettingsPaneView.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var
	_ = __webpack_require__(/*! underscore */ "F/us"),
	$ = __webpack_require__(/*! jquery */ "EVdn"),
	ko = __webpack_require__(/*! knockout */ "0h2I"),
	App = __webpack_require__(/*! modules/CoreWebclient/js/App.js */ "IAk5"),
	Ajax = __webpack_require__(/*! modules/RocketChatWebclient/js/Ajax.js */ "JNg6"),
	
	TextUtils = __webpack_require__(/*! modules/CoreWebclient/js/utils/Text.js */ "RN+F"),
	
	Settings = __webpack_require__(/*! modules/RocketChatWebclient/js/Settings.js */ "aWeh"),
	UserSettings = __webpack_require__(/*! modules/CoreWebclient/js/Settings.js */ "hPb3")	
;

/**
 * @constructor
 */
function CRocketChatSettingsPaneView()
{
	this.sAppName = Settings.AppName || TextUtils.i18n('ROCKETCHATWEBCLIENT/LABEL_SETTINGS_TAB');

	this.server = Settings.ChatUrl;
	
	this.bDemo = UserSettings.IsDemo;

	this.sDownloadLink = 'https://rocket.chat/install/#Apps';

	// this.sLogin = ko.observable('');
	// this.getLoginForCurrentUser();
	// this.credentialsHintText = ko.computed(function () {
	// 	return TextUtils.i18n('ROCKETCHATWEBCLIENT/INFO_CREDENTIALS', {'LOGIN': this.sLogin()});
	// }, this);

	this.credentialsHintText = App.mobileCredentialsHintText;
}

CRocketChatSettingsPaneView.prototype.getLoginForCurrentUser = function () {
	Ajax.send('GetLoginForCurrentUser', {}, function(oResponse) {
		this.sLogin(oResponse.Result);
	}, this);
}

/**
 * Name of template that will be bound to this JS-object.
 */
CRocketChatSettingsPaneView.prototype.ViewTemplate = 'RocketChatWebclient_RocketChatSettingsPaneView';

module.exports = new CRocketChatSettingsPaneView();


/***/ }),

/***/ "Eh7V":
/*!****************************************************************!*\
  !*** ./modules/RocketChatWebclient/js/views/HeaderItemView.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var
	_ = __webpack_require__(/*! underscore */ "F/us"),
	ko = __webpack_require__(/*! knockout */ "0h2I"),

	TextUtils = __webpack_require__(/*! modules/CoreWebclient/js/utils/Text.js */ "RN+F"),
	Types = __webpack_require__(/*! modules/CoreWebclient/js/utils/Types.js */ "AFLV"),

	Ajax = __webpack_require__(/*! modules/RocketChatWebclient/js/Ajax.js */ "JNg6"),
	CAbstractHeaderItemView = __webpack_require__(/*! modules/CoreWebclient/js/views/CHeaderItemView.js */ "Ig+v"),
	WindowOpener = __webpack_require__(/*! modules/CoreWebclient/js/WindowOpener.js */ "ZCBP")
;

function CHeaderItemView()
{
	CAbstractHeaderItemView.call(this, TextUtils.i18n('ROCKETCHATWEBCLIENT/ACTION_SHOW_CHAT'));

	this.iAutoCheckMailTimer = -1;
	this.unseenCount = ko.observable(0);

	this.mainHref = ko.computed(function () {
		return this.hash();
	}, this);

	this.getUnreadCounter();
}

CHeaderItemView.prototype.getUnreadCounter = function () {
	Ajax.send('GetUnreadCounter', {}, function (oResponse) {
		this.unseenCount(Types.pInt(oResponse.Result));
	}, this);
};

CHeaderItemView.prototype.onChatClick = function (data, event)
{
	WindowOpener.open('?chat', 'Chat');
};

_.extendOwn(CHeaderItemView.prototype, CAbstractHeaderItemView.prototype);

CHeaderItemView.prototype.ViewTemplate = 'RocketChatWebclient_HeaderItemView';

var HeaderItemView = new CHeaderItemView();

HeaderItemView.allowChangeTitle(true);

module.exports = HeaderItemView;


/***/ }),

/***/ "Ig+v":
/*!***********************************************************!*\
  !*** ./modules/CoreWebclient/js/views/CHeaderItemView.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var
	ko = __webpack_require__(/*! knockout */ "0h2I"),
	
	Routing = __webpack_require__(/*! modules/CoreWebclient/js/Routing.js */ "QaF5")
;

function CHeaderItemView(sLinkText)
{
	this.sName = '';
	
	this.visible = ko.observable(true);
	this.baseHash = ko.observable('');
	this.hash = ko.observable('');
	this.linkText = ko.observable(sLinkText);
	this.isCurrent = ko.observable(false);
	
	this.recivedAnim = ko.observable(false).extend({'autoResetToFalse': 500});
	this.unseenCount = ko.observable(0);
	
	this.allowChangeTitle = ko.observable(false); // allows to change favicon and browser title when browser is inactive
	this.inactiveTitle = ko.observable('');
	
	this.excludedHashes = ko.observableArray([]);
}

CHeaderItemView.prototype.ViewTemplate = 'CoreWebclient_HeaderItemView';

CHeaderItemView.prototype.setName = function (sName)
{
	this.sName = sName.toLowerCase();
	if (this.baseHash() === '')
	{
		this.hash(Routing.buildHashFromArray([sName.toLowerCase()]));
		this.baseHash(this.hash());
	}
	else
	{
		this.hash(this.baseHash());
	}
};

module.exports = CHeaderItemView;


/***/ }),

/***/ "Ik4g":
/*!**********************************************************!*\
  !*** ./modules/RocketChatWebclient/js/views/MainView.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var
	_ = __webpack_require__(/*! underscore */ "F/us"),
	ko = __webpack_require__(/*! knockout */ "0h2I"),

	Types = __webpack_require__(/*! modules/CoreWebclient/js/utils/Types.js */ "AFLV"),
	Utils = __webpack_require__(/*! modules/CoreWebclient/js/utils/Common.js */ "Yjhd"),

	CAbstractScreenView = __webpack_require__(/*! modules/CoreWebclient/js/views/CAbstractScreenView.js */ "xcwT"),
	Routing = __webpack_require__(/*! modules/CoreWebclient/js/Routing.js */ "QaF5"),
	UserSettings = __webpack_require__(/*! modules/CoreWebclient/js/Settings.js */ "hPb3"),

	Settings = __webpack_require__(/*! modules/RocketChatWebclient/js/Settings.js */ "aWeh")
;

/**
 * View that is used as screen of the module. Inherits from CAbstractScreenView that has showing and hiding methods.
 * 
 * @constructor
 */
function CMainView()
{
	CAbstractScreenView.call(this, 'RocketChatWebclient');
	
	this.sChatUrl = Settings.ChatUrl;

	this.iframeDom = ko.observable(null);
	this.avaDom = ko.observable(null);
}

_.extendOwn(CMainView.prototype, CAbstractScreenView.prototype);

CMainView.prototype.ViewTemplate = 'RocketChatWebclient_MainView';
CMainView.prototype.ViewConstructorName = 'CMainView';

CMainView.prototype.setAuroraThemeToRocketChat = function (oIframe) {
	function _setTheme() {
		oIframe.contentWindow.postMessage({
			externalCommand: 'set-aurora-theme',
			theme: UserSettings.Theme
		}, '*');
	};
	setTimeout(_setTheme, 500); // to apply the theme more immediate if possible
	setTimeout(_setTheme, 1000); // this will most likely work first
	setTimeout(_setTheme, 2000); // to be sure the theme will be applied
};

CMainView.prototype.onLoad = function () {
	if (this.iframeDom() && this.iframeDom().length > 0) {
		this.iframeDom()[0].contentWindow.postMessage({
			externalCommand: 'login-with-token',
			token: Settings.ChatAuthToken
		}, '*');

		this.setAuroraThemeToRocketChat(this.iframeDom()[0]);

		window.addEventListener('message', function(oEvent) {
			if (oEvent && oEvent.data && oEvent.data.eventName === 'notification') {
				this.showNotification(oEvent.data.data.notification);
			}
			if (oEvent && oEvent.data && oEvent.data.eventName === 'unread-changed') {
				var HeaderItemView = __webpack_require__(/*! modules/RocketChatWebclient/js/views/HeaderItemView.js */ "Eh7V");
				HeaderItemView.unseenCount(Types.pInt(oEvent.data.data));
			}
		}.bind(this));
	}
};

CMainView.prototype.showNotification = function (oNotification) {
	var
		oParameters = {
			action: 'show',
			icon: this.sChatUrl + 'avatar/' + oNotification.payload.sender.username + '?size=50&format=png',
			title: oNotification.title,
			body: oNotification.text,
			callback: function () {
				window.focus();
				if (!this.shown()) {
					Routing.setHash([Settings.HashModuleName]);
				}
				var sPath = '';
				switch (oNotification.payload.type) {
					case 'c':
						sPath = '/channel/' + oNotification.payload.name;
						break;
					case 'd':
						sPath = '/direct/' + oNotification.payload.rid;
						break;
					case 'p':
						sPath = '/group/' + oNotification.payload.name;
						break;
				}
				if (sPath) {
					this.iframeDom()[0].contentWindow.postMessage({
						externalCommand: 'go',
						path: sPath
					}, '*');
				}
			}.bind(this)
		}
	;

	Utils.desktopNotify(oParameters);
};

module.exports = new CMainView();


/***/ }),

/***/ "JNg6":
/*!************************************************!*\
  !*** ./modules/RocketChatWebclient/js/Ajax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var
	Ajax = __webpack_require__(/*! modules/CoreWebclient/js/Ajax.js */ "o0Bx"),
	
	Settings = __webpack_require__(/*! modules/RocketChatWebclient/js/Settings.js */ "aWeh")
;

module.exports = {
	send: function (sMethod, oParameters, fResponseHandler, oContext, sServerModuleName) {
		Ajax.send(
			sServerModuleName ? sServerModuleName : Settings.ServerModuleName,
			sMethod,
			oParameters,
			fResponseHandler,
			oContext
		);
	}
};


/***/ }),

/***/ "aWeh":
/*!****************************************************!*\
  !*** ./modules/RocketChatWebclient/js/Settings.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var
	_ = __webpack_require__(/*! underscore */ "F/us"),
	
	Types = __webpack_require__(/*! modules/CoreWebclient/js/utils/Types.js */ "AFLV")
;

module.exports = {
	ServerModuleName: 'RocketChatWebclient',
	HashModuleName: 'chat',

	ChatUrl: '',
	ChatAuthToken: '',
	UnreadCounterIntervalInSeconds: 15,
	
	/**
	 * Initializes settings from AppData object sections.
	 * 
	 * @param {Object} oAppData Object contained modules settings.
	 */
	init: function (oAppData)
	{
		var oAppDataSection = oAppData['RocketChatWebclient'];
		
		if (!_.isEmpty(oAppDataSection))
		{
			this.ChatUrl = Types.pString(oAppDataSection.ChatUrl);
			this.ChatAuthToken = Types.pString(oAppDataSection.ChatAuthToken);
			this.UnreadCounterIntervalInSeconds = Types.pInt(oAppDataSection.UnreadCounterIntervalInSeconds, this.UnreadCounterIntervalInSeconds);
		}
	}
};


/***/ })

}]);