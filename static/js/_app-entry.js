'use strict';
import Promise from 'bluebird';
Promise.config({
	warnings: {
		wForgottenReturn: false
	}
});
if (!window.Promise) { window.Promise = Promise; }
import $ from 'jquery';
import _ from 'underscore';
import "core-js";
import "regenerator-runtime/runtime";

$('body').ready(function () {
	var oAvailableModules = {};
	if (window.aAvailableModules) {

		if (window.aAvailableModules.indexOf('ActivityHistory') >= 0) {
			oAvailableModules['ActivityHistory'] = import(/* webpackChunkName: "ActivityHistory" */ 'modules/ActivityHistory/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('AdminPanelWebclient') >= 0) {
			oAvailableModules['AdminPanelWebclient'] = import(/* webpackChunkName: "AdminPanelWebclient" */ 'modules/AdminPanelWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('BrandingWebclient') >= 0) {
			oAvailableModules['BrandingWebclient'] = import(/* webpackChunkName: "BrandingWebclient" */ 'modules/BrandingWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('ContactsWebclient') >= 0) {
			oAvailableModules['ContactsWebclient'] = import(/* webpackChunkName: "ContactsWebclient" */ 'modules/ContactsWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('CoreParanoidEncryptionWebclientPlugin') >= 0) {
			oAvailableModules['CoreParanoidEncryptionWebclientPlugin'] = import(/* webpackChunkName: "CoreParanoidEncryptionWebclientPlugin" */ 'modules/CoreParanoidEncryptionWebclientPlugin/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('Dropbox') >= 0) {
			oAvailableModules['Dropbox'] = import(/* webpackChunkName: "Dropbox" */ 'modules/Dropbox/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('Facebook') >= 0) {
			oAvailableModules['Facebook'] = import(/* webpackChunkName: "Facebook" */ 'modules/Facebook/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('FileViewerWebclientPlugin') >= 0) {
			oAvailableModules['FileViewerWebclientPlugin'] = import(/* webpackChunkName: "FileViewerWebclientPlugin" */ 'modules/FileViewerWebclientPlugin/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('FilesCutCopyPasteWebclientPlugin') >= 0) {
			oAvailableModules['FilesCutCopyPasteWebclientPlugin'] = import(/* webpackChunkName: "FilesCutCopyPasteWebclientPlugin" */ 'modules/FilesCutCopyPasteWebclientPlugin/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('FilesTableviewWebclientPlugin') >= 0) {
			oAvailableModules['FilesTableviewWebclientPlugin'] = import(/* webpackChunkName: "FilesTableviewWebclientPlugin" */ 'modules/FilesTableviewWebclientPlugin/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('FilesWebclient') >= 0) {
			oAvailableModules['FilesWebclient'] = import(/* webpackChunkName: "FilesWebclient" */ 'modules/FilesWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('Google') >= 0) {
			oAvailableModules['Google'] = import(/* webpackChunkName: "Google" */ 'modules/Google/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('InvitationLinkWebclient') >= 0) {
			oAvailableModules['InvitationLinkWebclient'] = import(/* webpackChunkName: "InvitationLinkWebclient" */ 'modules/InvitationLinkWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('Ios') >= 0) {
			oAvailableModules['Ios'] = import(/* webpackChunkName: "Ios" */ 'modules/Ios/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('LogsViewerWebclient') >= 0) {
			oAvailableModules['LogsViewerWebclient'] = import(/* webpackChunkName: "LogsViewerWebclient" */ 'modules/LogsViewerWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('MobileAppsWebclient') >= 0) {
			oAvailableModules['MobileAppsWebclient'] = import(/* webpackChunkName: "MobileAppsWebclient" */ 'modules/MobileAppsWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('MobileSyncWebclient') >= 0) {
			oAvailableModules['MobileSyncWebclient'] = import(/* webpackChunkName: "MobileSyncWebclient" */ 'modules/MobileSyncWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('OAuthIntegratorWebclient') >= 0) {
			oAvailableModules['OAuthIntegratorWebclient'] = import(/* webpackChunkName: "OAuthIntegratorWebclient" */ 'modules/OAuthIntegratorWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('OfficeDocumentEditor') >= 0) {
			oAvailableModules['OfficeDocumentEditor'] = import(/* webpackChunkName: "OfficeDocumentEditor" */ 'modules/OfficeDocumentEditor/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('OfficeDocumentViewer') >= 0) {
			oAvailableModules['OfficeDocumentViewer'] = import(/* webpackChunkName: "OfficeDocumentViewer" */ 'modules/OfficeDocumentViewer/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('OpenPgpFilesWebclient') >= 0) {
			oAvailableModules['OpenPgpFilesWebclient'] = import(/* webpackChunkName: "OpenPgpFilesWebclient" */ 'modules/OpenPgpFilesWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('OpenPgpWebclient') >= 0) {
			oAvailableModules['OpenPgpWebclient'] = import(/* webpackChunkName: "OpenPgpWebclient" */ 'modules/OpenPgpWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('RecaptchaWebclientPlugin') >= 0) {
			oAvailableModules['RecaptchaWebclientPlugin'] = import(/* webpackChunkName: "RecaptchaWebclientPlugin" */ 'modules/RecaptchaWebclientPlugin/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('RocketChatWebclient') >= 0) {
			oAvailableModules['RocketChatWebclient'] = import(/* webpackChunkName: "RocketChatWebclient" */ 'modules/RocketChatWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('S3Filestorage') >= 0) {
			oAvailableModules['S3Filestorage'] = import(/* webpackChunkName: "S3Filestorage" */ 'modules/S3Filestorage/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('SettingsWebclient') >= 0) {
			oAvailableModules['SettingsWebclient'] = import(/* webpackChunkName: "SettingsWebclient" */ 'modules/SettingsWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('SharedFiles') >= 0) {
			oAvailableModules['SharedFiles'] = import(/* webpackChunkName: "SharedFiles" */ 'modules/SharedFiles/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('StandardAuthWebclient') >= 0) {
			oAvailableModules['StandardAuthWebclient'] = import(/* webpackChunkName: "StandardAuthWebclient" */ 'modules/StandardAuthWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('StandardLoginFormWebclient') >= 0) {
			oAvailableModules['StandardLoginFormWebclient'] = import(/* webpackChunkName: "StandardLoginFormWebclient" */ 'modules/StandardLoginFormWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('StandardRegisterFormWebclient') >= 0) {
			oAvailableModules['StandardRegisterFormWebclient'] = import(/* webpackChunkName: "StandardRegisterFormWebclient" */ 'modules/StandardRegisterFormWebclient/js/manager.js').then(function (module) { return module.default});
		}

		if (window.aAvailableModules.indexOf('TwoFactorAuth') >= 0) {
			oAvailableModules['TwoFactorAuth'] = import(/* webpackChunkName: "TwoFactorAuth" */ 'modules/TwoFactorAuth/js/manager.js').then(function (module) { return module.default});
		}
	}
	Promise.all(_.values(oAvailableModules)).then(function(aModules){
		var
			ModulesManager = require('modules/CoreWebclient/js/ModulesManager.js'),
			App = require('modules/CoreWebclient/js/App.js'),
			bSwitchingToMobile = App.checkMobile()
		;
		if (!bSwitchingToMobile) {
			if (window.isPublic) {
				App.setPublic();
			}
			if (window.isNewTab) {
				App.setNewTab();
			}
			ModulesManager.init(_.object(_.keys(oAvailableModules), aModules));
			App.init();
		}
	}).catch(function (oError) { console.error('An error occurred while loading the component:'); console.error(oError); });
});

