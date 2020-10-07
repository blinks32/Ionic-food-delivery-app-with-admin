//
// Copyright (c) 2016 Arttitude360. All rights reserved.
//

/**
 * This class exposes the Paystack Android SDK functionality to javascript.
 *
 * @constructor
 */
function PaystackPlugin() {}

/**
 *
 * @param [Function} successCallback - callback to be invoked on successfully acquiring a token.
 * A single object argument will be passed which has a single key: "token" is a string containing the returned token.
 * @param {Function} errorCallback - callback to be invoked on failure to acquire a valid token.
 * A single object argument will be passed which has a single key: "error" is a string containing a description of the error.
 * @param {Array} The card details in the order - cardNumber, expiryMonth, expiryYear, cvc.
 */
PaystackPlugin.prototype.chargeCardWithAccessCode = function(successCallback, errorCallback, chargeParams) {
	return cordova.exec(
		successCallback,
		errorCallback,
		'PaystackPlugin',
		'chargeCardWithAccessCode',
		[chargeParams]
	);
};

PaystackPlugin.prototype.chargeCard = function(successCallback, errorCallback, chargeParams) {
	return cordova.exec(
		successCallback,
		errorCallback,
		'PaystackPlugin',
		'chargeCard',
		[chargeParams]
	);
};

module.exports = new PaystackPlugin();
