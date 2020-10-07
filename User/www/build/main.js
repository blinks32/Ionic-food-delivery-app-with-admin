webpackJsonp([21],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the DirectorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DirectorProvider = (function () {
    function DirectorProvider() {
        this.check = 0;
        this.total = 0;
    }
    return DirectorProvider;
}());
DirectorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DirectorProvider);

//# sourceMappingURL=director.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accountkit/accountkit.module": [
		452,
		20
	],
	"../pages/all-restaurants/all-restaurants.module": [
		453,
		19
	],
	"../pages/auth/auth.module": [
		454,
		18
	],
	"../pages/autocomplete/autocomplete.module": [
		455,
		17
	],
	"../pages/basket/basket.module": [
		456,
		16
	],
	"../pages/card/card.module": [
		457,
		15
	],
	"../pages/currentfood-details/currentfood-details.module": [
		458,
		14
	],
	"../pages/favorites/favorites.module": [
		459,
		13
	],
	"../pages/food-details/food-details.module": [
		460,
		12
	],
	"../pages/forgot-password/forgot-password.module": [
		461,
		11
	],
	"../pages/history/history.module": [
		462,
		10
	],
	"../pages/login/login.module": [
		463,
		1
	],
	"../pages/payment/payment.module": [
		464,
		9
	],
	"../pages/phone/phone.module": [
		465,
		8
	],
	"../pages/profile/profile.module": [
		466,
		7
	],
	"../pages/ratings/ratings.module": [
		467,
		6
	],
	"../pages/register/register.module": [
		468,
		5
	],
	"../pages/restaurant-details/restaurant-details.module": [
		469,
		4
	],
	"../pages/signup/signup.module": [
		470,
		0
	],
	"../pages/tabs/tabs.module": [
		471,
		3
	],
	"../pages/tracker/tracker.module": [
		472,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Storage } from '@ionic/storage';

/*
  Generated class for the LanguageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LanguageProvider = (function () {
    function LanguageProvider(http, set, Alert) {
        this.http = http;
        this.set = set;
        this.Alert = Alert;
        this.targetLanguageCode = 'en';
        this.targetLanguageCode = set.language;
    }
    LanguageProvider.prototype.translate = function () {
        //   this.targetLanguageCode = this.set.language
        //  console.log(this.targetLanguageCode, this.set.language)
        if (this.set.language == 'en') {
            return [
                {
                    whereTo: 'Where To ?',
                    set: 'Set Pin On Location',
                    dest: 'Your Destination',
                    done: 'Done',
                    economy: 'STANDARD',
                    pool: 'POOL',
                    cash: 'Cash',
                    wrongdest: 'Wrong Destination',
                    arrival: 'Driver Arrives In ',
                    grut: 'Network Error. Check your internet connection',
                    card: 'Card',
                    addcard: 'Add A Card',
                    request: 'RIDE NOW',
                    later: 'RIDE LATER',
                    someone: 'Ride With Someone',
                    getcharged: 'Get Charged :',
                    join: 'JOIN POOL',
                    start: 'START POOL',
                    proccessingcharge: 'Processing Charge..',
                    picknote: 'New Passenger To Pickup. You Have Less Than 60 Seconds To accept the Job.',
                    unfortunate: 'Unfortunately,',
                    notavailable: 'is not available in your area.',
                    just: 'Just A Second',
                    fbacc: 'Your Facebook Account Has No Email.',
                    retry: 'Failed Internet. Retry',
                    home: 'Please Add Home And Work in Settings',
                    notrate: 'Not Rated',
                    nodriver: 'No Drivers Found',
                    whycancel: 'Why Do You Want To Cancel',
                    chose: 'Please Choose An Option',
                    longpick: 'Long Pickup ?',
                    incorrect: 'Incorrect Request ?',
                    reject: 'Reject',
                    accept: 'Accept',
                    cantexit: 'Sorry Cant Exit At this Time',
                    lost: 'Connection lost, trying to connect to the internet. Retrying..',
                    recover: 'Please wait while we recover lost information',
                    driverarive: 'Driver Arrives In ',
                    drive: 'Driving To Your Destination',
                    drivercancel: 'Driver Cancelled',
                    end: 'Your Journey Has Ended',
                    startride: 'Your Journey Has Started',
                    paidcash: 'Confirm You Have Paid Cash',
                    poolcancel: 'Pool Cancelled. No Other Rider',
                    waiting: 'Please Wait...',
                    driverfound: 'Driver Found',
                    check: 'Checkout',
                    website: 'Website',
                    career: 'Careers',
                    faq: 'FAQ',
                    address: 'Enter Search',
                    add: 'Add',
                    homesearch: 'Home',
                    worksearch: 'Work',
                    rideSch: 'Schedule A Ride',
                    rideSchu: 'You Scheduled A Ride',
                    from: 'FROM',
                    to: 'TO',
                    date: 'Choose A Date',
                    clear: 'Cancel',
                    addDest: 'Please Add Your Destination and Location',
                    addTime: 'Wrong Time',
                    sucsch: 'Succefully Scheduled A Ride',
                    sucschw: 'Succefully Cancelled Ride',
                    error: 'Are You Sure ?',
                    report: 'Your complain has been submitted, we will get back to you. In a few minutes.',
                    support: 'Support',
                    complaint: 'Write A Complaint',
                    submit: 'SUBMIT',
                    customercare: 'CustomerCare',
                    email: 'Email',
                    password: 'Password',
                    newacc: 'Create A New Account',
                    login: 'LOGIN',
                    validemail: 'Enter A Valid Email',
                    resetpasss: 'Reset Password',
                    emailsent: 'Your Email Has Been Sent. To Recover your Password',
                    review: 'Write A Review',
                    rate: 'Rate',
                    rateexp: 'Rate Your Experience',
                    alertcar: 'Select at least one star',
                    promo: 'Promo',
                    enteruid: 'Enter Sharing UID',
                    uid: 'sharing UID',
                    cardf: 'Please Add A Card',
                    shareid: 'This is a Sharing UID',
                    shareid2: 'This is not a Sharing UID',
                    shareid3: 'There is no Sharing UID',
                    name: 'Name',
                    phone: 'Phone',
                    profile: 'Profile',
                    choosefrom: 'Choose From',
                    camera: 'Camera',
                    file: 'File',
                    cancel: 'Cancel',
                    pictureset: 'Profile Picture Set Successfully',
                    failed: 'Failed. Please Try Again',
                    resend: 'RESEND',
                    details: 'Add Missing Details',
                    countrycode: 'Country Code',
                    payment: 'Reciept',
                    pay: 'PAY',
                    safety: 'Please make sure you are at your requested destination before checking out. To avoid fraud',
                    regards: 'Thank you for using',
                    payment2: 'Payment',
                    entercode: 'Enter A Promo Code',
                    retryi: 'Retry In',
                    secs: 'Seconds',
                    fastandconv: 'Fast and Convenient',
                    signup: 'REGISTER',
                    facebook: 'FACEBOOK',
                    price: 'PRICE',
                    location: 'LOCATION',
                    destination: 'DESTINATION',
                    detailsp: 'Details',
                    triphistory: 'Trip History',
                    freeride: 'Free Rides',
                    facebookl: 'Facebook',
                    whatsapp: 'Whatsapp',
                    instagram: 'Instagram',
                    half1: 'Share your promo code with friends. Once they have tried',
                    half2: 'you will also get a free ride.',
                    adapt: 'This is my share ID for ',
                    calc: 'Trip Calculator',
                    pvc: 'Prices may vary due to unforseen circumstances. Such as weather changes etc',
                    priceappear: 'Price Will Appear Here',
                    scan: 'Scan Card',
                    message: 'Message',
                    cvc: 'Cvc',
                    year: 'Year',
                    month: 'Month',
                    confirm: 'We will make a payment to confirm card.',
                    cardsuc: 'Card Successfully Activated',
                    cardunc: 'Card Activation Failed',
                    drop: 'You Have Been Dropped. Please Checkout.',
                    retrynew: 'Retry',
                    about: 'About',
                    lang: 'Language'
                },
            ];
        }
        if (this.set.language == 'ar') {
            return [
                {
                    whereTo: 'ألى أين ؟',
                    set: 'تعيين الدبوس على الموقع',
                    dest: 'مكان وصولك',
                    done: 'تم',
                    economy: 'اقتصادي',
                    pool: 'المركبة متاحة',
                    cash: 'نقدي',
                    wrongdest: 'توحه خاطيء',
                    arrival: 'يصل السائق في ',
                    grut: 'خطأ في الشبكة. تحقق من اتصال الإنترنت الخاص بك',
                    card: 'بطاقة',
                    addcard: 'اضافة بطاقة',
                    request: 'طلب ركوب',
                    someone: 'ركوب مع شخص ما',
                    getcharged: 'دفع  الاجرة فقط',
                    join: 'الدخول الى سيارات المتاحة',
                    start: 'ابدء بـ السيارات متاحة',
                    proccessingcharge: 'رسوم المعالجة',
                    picknote: 'ركاب جديد لركوب. لديك أقل من 60 ثانية لقبول الوظيفة',
                    unfortunate: 'للأسف,',
                    notavailable: 'للأسف',
                    just: 'لحظة',
                    fbacc: 'حساب الفيسبوك الخاص بك ليس لديه بريد إلكتروني',
                    retry: 'فشل في شبكة الإنترنت. إعادة المحاولة',
                    home: 'يرجى إضافة المنزل والعمل في إعدادات',
                    notrate: 'غير مصنف',
                    nodriver: 'لم يتم العثور على سائق',
                    whycancel: 'لماذا تريد إلغاء',
                    chose: 'الرجاء اختيار خيار',
                    longpick: 'ركوب طويل المدى',
                    incorrect: 'طلب غير صحيح؟',
                    reject: 'رفض',
                    accept: 'قبول',
                    cantexit: 'عذرا لا يمكن الخروج في هذا الوقت',
                    lost: 'فقدت اتصال، في محاولة للاتصال بالإنترنت. إعادة المحاولة',
                    recover: 'يرجى الانتظار في حين استعادة المعلومات المفقودة',
                    driverarive: 'يصل السائق في ',
                    drive: 'القيادة الى مكان و صولك',
                    drivercancel: 'الغيت السائق',
                    end: 'انتهت رحلتك',
                    startride: 'بدأت رحلتك',
                    paidcash: 'التأكد  بأنك قد دفعت النقدية',
                    poolcancel: 'تم الغاء المركبات متاحة، لا لركاب اخر',
                    waiting: 'يرجى الانتظار',
                    driverfound: 'العثور على سائق',
                    check: 'الدفع',
                    website: 'الموقع الاكتروني',
                    career: 'وظائف',
                    faq: 'التعليمات',
                    address: 'ادخل الى البحث',
                    add: 'اضافة',
                    homesearch: 'البيت',
                    worksearch: 'العمل',
                    rideSch: 'جدول الركوب',
                    rideSchu: 'تم جدول ركوبك',
                    from: 'من',
                    to: 'الى',
                    date: 'اختر تاريخ',
                    clear: 'الغاء',
                    addDest: 'الرجاء اضافة موقع و مكان وصولك',
                    addTime: 'وقت خاطئ',
                    sucsch: 'جدولة الركوب تمت بنجاح',
                    sucschw: 'تم الغاء جدولة الركوب بنجاح',
                    error: 'هل انت متأكد؟',
                    report: 'تم إرسال شكوى، سوف نعود اليك في بعض دقائق',
                    support: 'دعم',
                    complaint: 'كتابة شكوى',
                    submit: 'تقديم',
                    customercare: 'خدمة العملاء',
                    email: 'البريد الاكتروني',
                    password: 'كلمة السر',
                    newacc: 'انشاء حساب جديد',
                    login: 'دخول',
                    validemail: 'أدخل بريد إلكتروني متاح',
                    resetpasss: 'اعادة تعيين كلمة السر',
                    emailsent: 'تم إرسال البريد الإلكتروني الخاص بك. لاستعادة كلمة المرور الخاصة بك',
                    review: 'اكتب مراجعة',
                    rate: 'تقييم',
                    rateexp: 'تقييم تجربتك',
                    alertcar: 'حدد نجمة واحدة على الأقل',
                    promo: 'الترويجي',
                    enteruid: 'ادخال مشاركة رقم التعريف الشخصي',
                    uid: 'مشاركة رقم التعريف الشخصي',
                    cardf: 'الرجاء إضافة بطاقة',
                    shareid: 'هذا رقم التعريف الشخصي المشاركة',
                    shareid2: 'هذة ليست رقم التعريف الشخصي المشاركة',
                    shareid3: 'ليس هناك رقم التعريف الشخصي مشاركة',
                    name: 'الاسم',
                    phone: 'الهاتف',
                    profile: 'الملف الشخصي',
                    choosefrom: 'اختر من',
                    camera: 'كاميرا',
                    file: 'ملف',
                    cancel: 'الغاء',
                    pictureset: 'اضافة الصورة الشخصية تمت بنجاح',
                    failed: 'حاول مرة اخرى',
                    resend: 'إعادة إرسال',
                    details: 'إضافة تفاصيل مفقودة',
                    countrycode: 'رمز البلد',
                    payment: 'الدفع',
                    pay: 'دفع الاجور',
                    safety: 'يرجى التأكد من أنك في مكان المطلوبة قبل الخروج. لتجنب الغش',
                    regards: 'شكرا لك على استخدام',
                    payment2: 'الدفع',
                    entercode: 'ادخل رمز ترويجي',
                    retryi: 'عادة المحاولة في',
                    secs: 'ثواني',
                    fastandconv: 'سريعة و مريحة',
                    signup: 'التسجيل',
                    facebook: 'فيسبوك',
                    price: 'السعر',
                    location: 'الموقع',
                    destination: 'مكان الوصول',
                    detailsp: 'تفاصيل',
                    triphistory: 'تاريخ الرحلة',
                    freeride: 'ركوب مجاني',
                    facebookl: 'فيسيوك',
                    whatsapp: 'واتس اب',
                    instagram: 'انستاغرام',
                    half1: 'مشاركة الرمز الترويجي الخاص بك مع الأصدقاء. اذا حاولوا مرة واحدة',
                    half2: 'سوف تحصل أيضا على ركوب مجانية',
                    adapt: 'هذا هو هويتي المشاركة ل ',
                    calc: 'حاسبة الرحلة',
                    pvc: 'قد تختلف الأسعار بسبب الظروف غير المتوقعة. مثل تغيرات الطقس الخc',
                    priceappear: 'سوف تظهر السعر هنا',
                    scan: 'بحث عن البطاقة',
                    message: 'رسالة',
                    cvc: 'رمز التحقق من البطاقة',
                    year: 'السنة',
                    month: 'الشهر',
                    confirm: 'سوف نقوم بدفع للتأكد من البطاقة',
                    cardsuc: 'تم تنشيط البطاقة بنجاح',
                    cardunc: 'فشل في تنشيط البطاقة',
                    drop: 'تم اسقاطك. الرجاء دفع الحساب',
                    retrynew: 'اعدة المحاولة',
                    about: 'حول',
                    lang: 'لغة'
                },
            ];
        }
        if (this.set.language == 'fr') {
            return [
                {
                    whereTo: 'Où aller?',
                    set: 'Définir l`emplacement de la broche',
                    dest: 'Votre destination',
                    done: 'fait',
                    economy: 'ÉCONOMIE',
                    pool: 'PISCINE',
                    cash: '<<Argent>>',
                    wrongdest: 'Mauvaise destination',
                    arrival: 'Driver arrive ',
                    grut: 'Erreur réseau. Vérifiez votre connection internet',
                    card: 'Carte',
                    addcard: 'Ajouter une carte',
                    request: 'DEMANDE DE RIDE',
                    someone: 'Roulez avec quelqu`un',
                    getcharged: 'Soyez facturé seulement',
                    join: 'JOIN PISCINE',
                    start: 'START POOL',
                    proccessingcharge: '«Frais de traitement ..»',
                    picknote: 'Nouveau passager à ramasser. Vous avez moins de 60 secondes pour accepter le travail. ',
                    unfortunate: 'Malheureusement,',
                    notavailable: 'n`est pas disponible dans votre région.',
                    just: '«Juste une seconde»',
                    fbacc: 'Votre compte Facebook n`a pas d`email.',
                    retry: 'Échec d`Internet. Recommencez',
                    home: 'S`il vous plaît ajouter Home And Work dans les paramètres',
                    notrate: 'Non classé',
                    nodriver: 'Aucun pilote trouvé',
                    whycancel: ' «Pourquoi voulez-vous annuler?',
                    chose: 'S`il vous plaît choisir une option',
                    longpick: 'Long Pickup ?',
                    incorrect: 'Demande incorrecte?',
                    reject: 'Rejeter',
                    accept: 'Accepter',
                    cantexit: 'Désolé, je ne peux pas quitter pour le moment',
                    lost: 'Connexion perdue, essayant de se connecter à Internet. Réessayer .. ',
                    recover: 'Veuillez patienter pendant que nous récupérons les informations perdues',
                    driverarive: 'Driver Arrives In ',
                    drive: '«Conduire à votre destination»',
                    drivercancel: 'Pilote annulé',
                    end: 'Votre voyage s`est terminé',
                    startride: 'Votre voyage a commencé',
                    paidcash: 'Confirmez que vous avez payé de l`argent',
                    poolcancel: 'Pool annulé. No Other Rider',
                    waiting: 'S`il vous plaît attendre ...',
                    driverfound: 'Pilote trouvé',
                    check: 'Commander',
                    website: 'Site Web',
                    career: ' «Carrières»',
                    faq: 'FAQ',
                    address: '',
                    add: 'Ajouter',
                    homesearch: 'Accueil',
                    worksearch: 'Travail',
                    rideSch: 'Programme Un tour',
                    rideSchu: '«Vous avez prévu un tour»',
                    from: 'DE',
                    to: 'À',
                    date: 'Choisissez une date',
                    clear: 'Annuler',
                    addDest: 'Veuillez ajouter votre destination et votre emplacement',
                    addTime: 'Mauvais moment',
                    sucsch: 'a programmé avec succès un tour',
                    sucschw: '«Succès annulé avec succès»',
                    error: 'Êtes-vous sûr?',
                    report: 'Votre plainte a été soumise, nous vous répondrons. Dans quelques minutes.',
                    support: 'Soutien',
                    complaint: 'Écrivez une plainte',
                    submit: 'SOUMETTRE',
                    customercare: 'CustomerCare',
                    email: 'Email',
                    password: 'Mot de passe',
                    newacc: 'Créer un nouveau compte',
                    login: 'Connexion',
                    validemail: 'Entrez un email valide',
                    resetpasss: 'Réinitialiser le mot de passe',
                    emailsent: 'Votre email a été envoyé. Pour récupérer votre mot de passe ',
                    review: 'Ecrire un commentaire',
                    rate: 'Taux',
                    rateexp: 'Évaluer votre expérience',
                    alertcar: 'Sélectionnez au moins une étoile',
                    promo: 'Promo',
                    enteruid: 'Entrer l`UID de partage',
                    uid: 'partage UID',
                    cardf: 'S`il vous plaît Ajouter une carte',
                    shareid: 'Ceci est un partage UID',
                    shareid2: 'Ceci n`est pas un UID de partage',
                    shareid3: 'Il n`y a pas d`UID de partage',
                    name: 'nom',
                    phone: 'Téléphone',
                    profile: 'Profil',
                    choosefrom: 'Choisir De',
                    camera: 'Caméra',
                    file: 'Fichier',
                    cancel: 'Annuler',
                    pictureset: 'L`image du profil s`est bien passée',
                    failed: 'Échec. Veuillez réessayer',
                    resend: 'RENVOYER',
                    details: 'Ajouter des détails manquants',
                    countrycode: 'Code du pays',
                    payment: 'Reciept',
                    pay: 'PAYER',
                    safety: 'S`il vous plaît assurez-vous que vous êtes à votre destination demandée avant de partir. Pour éviter la fraude',
                    regards: 'Merci d`avoir utilisé',
                    payment2: 'Paiement',
                    entercode: 'Entrez un code promo',
                    retryi: 'Réessayer dans',
                    secs: 'Secondes',
                    fastandconv: 'Rapide et pratique',
                    signup: 'S`INSCRIRE',
                    facebook: 'FACEBOOK',
                    price: 'PRIX',
                    location: 'EMPLACEMENT',
                    destination: 'DESTINATION',
                    detailsp: 'Détails',
                    triphistory: 'histoire de voyage',
                    freeride: 'des tours gratuits',
                    facebookl: 'Facebook',
                    whatsapp: 'Whatsapp',
                    instagram: 'Instagram',
                    half1: 'Partagez votre code promo avec vos amis. Une fois qu`ils ont essayé ',
                    half2: 'vous aurez aussi un tour gratuit.',
                    adapt: 'Ceci est mon identifiant de partage pour ',
                    calc: 'calculateur de voyage',
                    pvc: 'Les prix peuvent varier en raison de circonstances imprévues. Tels que les changements de temps etc',
                    priceappear: 'Le prix apparaîtra ici',
                    scan: 'Carte d`analyse',
                    message: 'Message',
                    cvc: 'Cvc',
                    year: 'Année',
                    month: 'Mois',
                    confirm: 'Nous effectuerons un paiement pour confirmer la carte.',
                    cardsuc: 'Carte activée avec succès',
                    cardunc: 'L`activation de la carte a échoué',
                    drop: 'Vous avez été droppé. Veuillez vérifier s`il vous plait.',
                    retrynew: 'Réessayer',
                    about: 'à propos',
                    lang: 'Langue'
                }
            ];
        }
        if (this.set.language == 'kr') {
            return [
                {
                    whereTo: 'بۆ كوێ ؟',
                    set: 'پینه‌كه‌ بخه‌ سه‌ر شوێن',
                    dest: 'شوێنی مه‌به‌ست',
                    done: 'ئه‌نجامدرا',
                    economy: 'ئابووری',
                    pool: 'ئۆتۆمۆبێلی به‌رده‌ست',
                    cash: 'كاش/نه‌ختینه‌',
                    wrongdest: 'راسته‌ی هه‌ڵه‌',
                    arrival: 'شۆفێر ده‌گاته‌ له‌ ',
                    grut: 'هه‌ڵه‌ی تۆر.هێلی ئنته‌رنێتت بپشكنه‌',
                    card: 'كارت',
                    addcard: ' كارتێك زیاد بكه‌',
                    request: 'داواكاری گه‌یاندن',
                    someone: 'سه‌ركه‌وتن له‌گه‌ڵ كه‌سێك',
                    getcharged: 'ته‌نها بۆ پاره‌دان',
                    join: 'چوونه‌ ناو ئۆتۆمۆبێلی به‌رده‌ست',
                    start: 'ده‌ستكردن به‌ ئۆتۆمۆبێلی به‌رده‌ست',
                    proccessingcharge: 'چاره‌سه‌ركردنی كرێی سه‌روبه‌ركردن',
                    picknote: ' سه‌رنشینێكی تر بۆ گواستنه‌وه‌. كه‌متر له‌ 60 چركه‌ت هه‌یه‌ بۆ ئه‌وه‌ی كاره‌كه‌ قبوڵ بكه‌یت',
                    unfortunate: '،به‌داخه‌وه‌',
                    notavailable: 'له‌ ناوچه‌ی تۆ به‌رده‌ست نییه‌',
                    just: 'چركه‌یه‌ك بووه‌سته‌',
                    fbacc: 'هه‌ژماری فه‌یسبوكه‌كه‌ت ئمه‌یلی نییه‌',
                    retry: 'ئینته‌رنێت سه‌ركه‌وتوو نه‌بوو. دووباره‌ هه‌وڵ بده‌وه‌',
                    home: ' تكایه‌ ماڵ و كار له‌ سێتێنگ زیاد بكه‌',
                    notrate: 'هه‌ڵسه‌نگاندنی بۆ نه‌كراوه‌',
                    nodriver: 'شۆفێر نه‌دۆزرایه‌وه‌',
                    whycancel: 'بۆ ده‌ته‌وێت هه‌ڵیبووه‌شێنێته‌وه‌',
                    chose: 'تكایه‌ هه‌ڵبژارده‌یه‌ك هه‌ڵبژێره‌',
                    longpick: 'گواستنه‌وه‌ی درێژخایه‌ن',
                    incorrect: 'داواكارییه‌كی نادروست',
                    reject: 'ڕه‌تكردنه‌وه‌',
                    accept: 'قبووڵكردن',
                    cantexit: 'ببووره‌، ناتوانی له‌و كاته‌دا ده‌ربچیت',
                    lost: 'په‌یوه‌ندی پجڕ',
                    recover: 'تكایه جاوه‌روان به‌‌ تاكو زانیارییه‌ له‌ناوچووه‌كانت ده‌گه‌ڕێنینه‌وه‌',
                    driverarive: 'شۆفێر ده‌گاته‌ له‌ ',
                    drive: 'به‌ره‌و شوێنی مه‌به‌ستت لێده‌خورین',
                    drivercancel: 'شۆفێر ڕه‌تكرایه‌وه‌',
                    end: 'گه‌شته‌كه‌ت ته‌واو بوو',
                    startride: 'گه‌شته‌كه‌ت ده‌ستی پێ كرد',
                    paidcash: 'دووپاتی بكه‌وه‌ كه‌ پاره‌ت به‌شێوه‌ی كاش داوه‌',
                    poolcancel: 'ئۆتۆمۆبێلی هه‌ڵوه‌شێندرایه‌وه‌. هیچ سه‌رنشینێكی تر',
                    waiting: 'تكایه‌ چاوه‌ڕێ بكه‌',
                    driverfound: 'شۆفێر دۆزرایه‌وه',
                    check: 'حیسابكردن',
                    website: 'ماڵپه‌ڕ',
                    career: 'پیشه‌كان',
                    faq: 'ڕێنمایی',
                    address: 'بڕۆ شوێنی گه‌ڕان',
                    add: 'زیاد بكه‌',
                    homesearch: 'هۆم',
                    worksearch: 'كار',
                    rideSch: 'كاتی گرتنی تاكسییه‌ك ڕێكبخه',
                    rideSchu: 'كاتی گرتنی تاكسییه‌كت ڕێكخست',
                    from: 'له‌',
                    to: 'بۆ',
                    date: 'به‌روارێك هه‌ڵبژێره‌',
                    clear: 'هه‌ڵوه‌شاندنه‌وه‌',
                    addDest: 'تكایه‌ شوێن و شوێنی مه‌به‌ستت زیاد بكه‌',
                    addTime: 'كاتێكی هه‌ڵه‌',
                    sucsch: 'ڕێكخستنی كاتی گرتنی تاكسییه‌ك سه‌ركه‌وتوو بوو',
                    sucschw: 'هه‌ڵوه‌شاندنه‌وه‌ی كاتی گرتنی تاكسییه‌ك سه‌ركه‌وتوو بوو',
                    error: 'ئایا دڵنیایت؟',
                    report: 'سكاڵاكه‌ت به‌رزكرایه‌وه‌، له‌ ماوه‌ی چه‌ند خوله‌كێكدا پێوه‌ندیت پێوه‌ ده‌كه‌ینه‌وه‌',
                    support: 'پاڵپشتی',
                    complaint: 'سكاڵایه‌ك بنووسه‌',
                    submit: 'پێشكه‌شكردن',
                    customercare: 'چاودێریكردنی كڕیار',
                    email: 'ئیمه‌یل',
                    password: 'وشه‌ی نهێنی',
                    newacc: 'هه‌ژمارێكی نوێ دروست بكه‌',
                    login: 'چوونه‌ ژووره‌وه‌',
                    validemail: 'ئیمه‌یلێكی دروست داخل بكه‌',
                    resetpasss: 'وشه‌ی تێپه‌ڕ دووباره‌ دابنێیه‌وه',
                    emailsent: 'ئیمه‌یله‌كه‌ت نێردرا. بۆ دووباره‌ گه‌ڕاندنه‌وه‌ی وشه‌ی تێپه‌ڕت',
                    review: 'پێداچوونه‌وه‌یه‌ك بنووسه‌',
                    rate: 'هه‌ڵسه‌نگاندن',
                    rateexp: 'شاره‌زاییت هه‌ڵسه‌نگێنه‌',
                    alertcar: 'به‌لایه‌نی كه‌م ئه‌ستێره‌یه‌ك هه‌ڵبژێره‌',
                    promo: 'كورته‌ ڕێكلام',
                    enteruid: 'ژماره‌ی ناسنامه‌ی كه‌سی داخل بكه‌',
                    uid: 'ژماره‌ی ناسنامه‌ی كه‌سی بڵاوبكه‌ره‌وه‌',
                    cardf: 'كارتێك زیاد بكه‌',
                    shareid: 'ئه‌مه‌ ژماره‌ی ناسنامه‌ی بڵاوكراوه‌یه‌',
                    shareid2: 'ئه‌مه‌ ژماره‌ی ناسنامه‌ی بڵاوكراوه‌ نییه‌',
                    shareid3: 'ژماره‌ی ناسنامه‌ی بڵاوكراوه‌ نییه‌',
                    name: 'ناو',
                    phone: 'ته‌له‌فۆن',
                    profile: 'پڕۆفایل',
                    choosefrom: 'هه‌ڵبژێره‌ له‌',
                    camera: 'كامێرا',
                    file: 'فایل',
                    cancel: 'هه‌ڵوه‌شێنه‌وه‌',
                    pictureset: 'دانانی وێنه‌ی پڕۆفایلت سه‌ركه‌وتوو بوو',
                    failed: 'سه‌ركه‌توو نه‌بوو. تكایه‌ دووباره‌ هه‌وڵ بكه‌وه‌',
                    resend: 'دووباره‌ بنێره‌',
                    details: 'ورده‌كاری نه‌بوو زیاد بكه',
                    countrycode: 'كۆدی وڵات',
                    payment: 'فاتووره‌',
                    pay: 'پاره‌ بده‌',
                    safety: 'تكایه‌ پێش پاره‌دان دڵنیا به‌ كه‌ له‌ شوێنی داواكراوی. بۆ ئه‌وه‌ی له‌ گزی به‌دوور بی.',
                    regards: 'سوپاس بۆ به‌كارهێنان',
                    payment2: 'پاره‌دان',
                    entercode: 'كۆدی كورته‌ ڕێكلام داخل بكه‌',
                    retryi: 'هه‌وڵبده‌ له‌',
                    secs: 'چه‌ند چركه‌یه‌ك',
                    fastandconv: 'خێرا و له‌بار و گونجاوه‌',
                    signup: 'خۆ تۆماركردن',
                    facebook: 'فه‌یسبووك',
                    price: 'نرخ',
                    location: 'شوێن',
                    destination: 'شوێنی مه‌به‌ست',
                    detailsp: 'ورده‌كاری',
                    triphistory: 'ڕێكه‌وتی گه‌شت',
                    freeride: 'گواستنه‌وه‌ی به‌خۆڕایی',
                    facebookl: 'فه‌یسبووك',
                    whatsapp: 'وه‌تس ئاپ',
                    instagram: 'ئینستاگرام',
                    half1: 'با هاوڕێكانت كۆدی كورته‌ ڕێكڵامه‌كه‌ت ببینین. كاتێك هه‌وڵیان دا',
                    half2: 'هه‌وروه‌ها گواستنه‌وه‌یه‌كی به‌خۆڕایی به‌ده‌ست ده‌هێنیت',
                    adapt: 'ئه‌مه‌ ژماره‌ی ناسنامه‌ی بڵاوكراوه‌ی من بۆ ',
                    calc: 'ژمێره‌ری گه‌شت',
                    pvc: 'نرخه‌كان جیاواز ده‌بن به‌هۆی دۆخی پێشبینینه‌كراو. وه‌كو گۆڕانی كه‌ش و هه‌وا، هتد',
                    priceappear: 'نرخه‌كه‌ لێره‌ به‌ده‌ر ده‌كه‌وێت',
                    scan: 'سكانكردنی كارت',
                    message: 'نامه‌',
                    cvc: 'دووپاتكردنه‌وه‌ی كۆدی كارت',
                    year: 'ساڵ',
                    month: 'مانگ',
                    confirm: 'پاره‌دانێك ئه‌نجامده‌ده‌ین بۆ ئه‌وه‌ی كارته‌كه‌ دووپات بكه‌ینه‌وه',
                    cardsuc: 'چاڵاككردنی كارته‌كه‌ سه‌ركه‌وتوو بوو',
                    cardunc: 'چاڵاككردنی كارته‌كه‌ سه‌ركه‌وتوو نه‌بوو',
                    drop: 'تۆ ده‌ركرایت. تكایه‌ حیسابه‌كه‌ بده‌',
                    retrynew: 'دووباره‌ هه‌وڵبده‌',
                    about: 'له‌باره‌ی',
                    lang: 'زمان'
                }
            ];
        }
        if (this.set.language == 'pr') {
            return [
                {
                    whereTo: 'Para onde',
                    set: 'Coloque o Pin no Local',
                    dest: 'Seu Destino',
                    done: 'Feito',
                    economy: 'Econômico',
                    pool: 'GRUPO',
                    cash: 'Dinheiro',
                    wrongdest: 'Destino Errado',
                    arrival: 'O Condutor chegará em ',
                    grut: 'Erro de Rede. Verifique a sua ligação à internet',
                    card: 'Cartão',
                    addcard: 'Adicione um Cartão',
                    request: 'RESERVE UMA CORRIDA',
                    someone: 'Viage em grupo',
                    getcharged: 'Seja debitado',
                    join: 'Junte-se ao grupo',
                    start: 'Começe o grupo',
                    proccessingcharge: 'Procesando o pagamento',
                    picknote: 'Novo Passageiro a recuperar. Você tem menos de 60 Segundos para aceitar este trabalho.',
                    unfortunate: 'Infelismente,',
                    notavailable: 'Não está disponível na sua área.',
                    just: 'Um momento',
                    fbacc: 'A sua conta de Facebook não possui email.',
                    retry: 'Falha de Internet. Retroceder',
                    home: 'Por favor Adicione o endereço da Casa e Trabalho em Propriedades',
                    notrate: 'Não Avaliado',
                    nodriver: 'Nenhum Condutor Encontrado',
                    whycancel: 'Porquê quer Cancelar ?',
                    chose: 'Por Favor Escolha Uma Opção',
                    longpick: 'Demora na Recolha ?',
                    incorrect: 'Endereço Incoreto ?',
                    reject: 'Rejeitar',
                    accept: 'Aceitar',
                    cantexit: 'Desculpe não pode Sair Agora',
                    lost: 'Conexão perdida, tentativa de conexão à internet. Reconectando..',
                    recover: 'Por favor aguarde enquanto recuperamos a informação perdida',
                    driverarive: 'O condutor chegará em',
                    drive: 'A Conduzir para o seu Destino',
                    drivercancel: 'Cancelado pelo Condutor',
                    end: 'O seu percurso chegou ao fim',
                    startride: 'Começo do seu percurso',
                    paidcash: 'Confirme o Pagamento em dinheiro',
                    poolcancel: 'Viagem em grupo Cancelado. Nenhum outro passageiro',
                    waiting: 'Por favor aguarde…',
                    driverfound: 'Condutor Encontrado',
                    check: 'Pagamento',
                    website: 'Website',
                    career: 'Careira',
                    faq: 'FAQ',
                    address: 'Inserir endereço',
                    add: 'Adicionar',
                    homesearch: 'Casa',
                    worksearch: 'Trabalho',
                    rideSch: 'Reserve uma corrida',
                    rideSchu: 'Voce Reservou uma Corrida',
                    from: 'DE',
                    to: 'PARA',
                    date: 'Escolha uma Data',
                    clear: 'Cancelar',
                    addDest: 'Por favor Adicione o seu Destino e Localidade',
                    addTime: 'Hora errada',
                    sucsch: 'Corrida agendada com Sucesso',
                    sucschw: 'Corrida Cancelada com Sucesso',
                    error: 'Tem certeza ?',
                    report: 'A sua reclamação foi submetida, iremos-lhe contactar. em alguns minutos.',
                    support: 'Atendimento',
                    complaint: 'Escreva Uma Reclamação',
                    submit: 'CONFIRMAR',
                    customercare: 'Serviço de apoio ao cliente',
                    email: 'Email',
                    password: 'Palavra-passe',
                    newacc: 'Criar Uma  Nova Conta',
                    login: 'ENTRAR',
                    validemail: 'Insira um  email válido',
                    resetpasss: 'Redefinir a palavra-passe',
                    emailsent: 'O seu email foi enviado. Para redefinir a sua palavra-passe',
                    review: 'Dê um testemunho',
                    rate: 'Avaliar',
                    rateexp: 'Avalie a sua experiência',
                    alertcar: 'Selecione pelo menos uma estrela',
                    promo: 'Promoção',
                    enteruid: 'Insira a sua UID de partilha',
                    uid: 'UID de Partilha',
                    cardf: 'Por favor adicione um cartão de pagamento',
                    shareid: 'Isso é uma UID de Partilha',
                    shareid2: 'Isso não é uma UID de Partilha',
                    shareid3: 'Não possui UID de Partilha',
                    name: 'Nome',
                    phone: 'Phone',
                    profile: 'Perfil',
                    choosefrom: 'Escolha De',
                    camera: 'Camera',
                    file: 'Ficheiro',
                    cancel: 'Cancelar',
                    pictureset: 'Foto de perfil definido com Sucesso',
                    failed: 'Insucesso. Por favor tente outra vez',
                    resend: 'REENVIAR',
                    details: 'Adicione os detalhes em falta',
                    countrycode: 'Indicativo do país',
                    payment: 'Recibo',
                    pay: 'PAGAR',
                    safety: 'Por favor certifique-se que se encontra no seu local de destino antes de pagar. Para evitar fraudes',
                    regards: 'Muito Obrigado por usar',
                    payment2: 'Pagamento',
                    entercode: 'Insira o código promocional',
                    retryi: 'Voltar Em',
                    secs: 'Segundos',
                    fastandconv: 'Rápido e conveniente',
                    signup: 'CRIAR CONTA',
                    facebook: 'FACEBOOK',
                    price: 'PREÇO',
                    location: 'LUGAR',
                    destination: 'DESTINO',
                    detailsp: 'Detalhes',
                    triphistory: 'Minhas viagens',
                    freeride: 'Viagens grátis',
                    facebookl: 'Facebook',
                    whatsapp: 'Whatsapp',
                    instagram: 'Instagram',
                    half1: 'Partilhe o seu código promocional com os seus amigos. Basta eles usarem',
                    half2: 'voce ganhará também viagens gratuitas.',
                    adapt: 'Esse  é o meu ID de partilha para',
                    calc: 'Cálculo da corrida',
                    pvc: 'Os preços podem variar segundo diversos factores e circunstâncias. Tais como o estado do tempo etc',
                    priceappear: 'O preço aparecerá aqui',
                    scan: 'Escaneie o cartão de pagamento',
                    message: 'Mensagem',
                    cvc: 'Cvc',
                    year: 'Ano',
                    month: 'Mês',
                    confirm: 'Faremos um débito para confirmar o cartão.',
                    cardsuc: 'Cartão Ativado com Sucesso',
                    cardunc: 'Erro ao Ativar o Cartão',
                    drop: 'Chegou ao Seu Destino. Por favor realize o pagamento.',
                    retrynew: 'Voltar',
                    about: 'Acerca de',
                    lang: 'Língua'
                }
            ];
        }
        if (this.set.language == 'rs') {
            return [
                {
                    whereTo: 'куда?',
                    set: 'набор PIN-кода на локации',
                    dest: 'пункт назначения',
                    done: 'Готово',
                    economy: 'эконом',
                    pool: 'POOL',
                    cash: 'наличными',
                    wrongdest: 'неправильная направления',
                    arrival: 'водитель прибывает ',
                    grut: 'сетевая ошибка. Проверьте подключение к интернету',
                    card: 'карта',
                    addcard: 'Добавить карту',
                    request: 'запросит поездок',
                    someone: 'ездить с кем-то',
                    getcharged: 'платить :',
                    join: 'присоединяйтесь',
                    start: 'пуск',
                    proccessingcharge: 'обработка..',
                    picknote: 'Новый пассажир Пикап. У вас меньше 60 секунд, чтобы принять задание.',
                    unfortunate: 'к сожалению,',
                    notavailable: 'недоступна в вашем регионе.',
                    just: 'одну секунду',
                    fbacc: 'в Вашем аккаунте Facebook нет электронной почты.',
                    retry: 'ошибка сети. Повторить',
                    home: 'пожалуйста, добавьте дом и работу в настройках',
                    notrate: 'не оценили',
                    nodriver: 'драйверы не найден',
                    whycancel: 'почему Вы хотите отменить',
                    chose: 'Пожалуйста, выберите вариант',
                    longpick: 'длинный Пикап ?',
                    incorrect: 'неправильный запрос  ?',
                    reject: 'отклонить',
                    accept: 'принять',
                    cantexit: 'извините, не могу выйти в это время',
                    lost: 'соединение потеряно, попытка подключения к интернету. Повторение..',
                    recover: 'пожалуйста, подождите, пока мы восстановить потерянную информацию',
                    driverarive: 'водитель прибывает ',
                    drive: 'вождение к месту назначения',
                    drivercancel: 'водитель отменен',
                    end: 'Ваше путешествие закончилось',
                    startride: 'Ваше путешествие началось',
                    paidcash: 'подтвердите, что Вы заплатили наличными',
                    poolcancel: 'отменен',
                    waiting: 'пожалуйста, подождите...',
                    driverfound: 'водитель найден',
                    check: 'оформить',
                    website: 'Website',
                    career: 'Careers',
                    faq: 'FAQ',
                    address: 'вопросы',
                    add: 'введите',
                    homesearch: 'дом',
                    worksearch: 'работа',
                    rideSch: 'Планоровать езду',
                    rideSchu: 'Вы запланировали поездку',
                    from: 'от',
                    to: 'К',
                    date: 'выберите дату',
                    clear: 'Отмена',
                    addDest: 'пожалуйста, добавьте Пункт назначения',
                    addTime: 'Wrong Time',
                    sucsch: 'удачно спланированная поездка',
                    sucschw: 'успешно отменен езда',
                    error: 'Вы уверены ?',
                    report: 'ваша жалоба была подана, мы свяжемся с вами. Через несколько минут.',
                    support: 'Поддержка',
                    complaint: 'написать жалобу',
                    submit: 'отправить',
                    customercare: 'CustomerCare',
                    email: 'Электронная почта',
                    password: 'пароль',
                    newacc: 'создать новую учетную запись',
                    login: 'логин',
                    validemail: 'введите допустимый адрес электронной почты',
                    resetpasss: 'сброс пароля',
                    emailsent: 'ваше письмо Отправлено. Для восстановления пароля',
                    review: 'написать отзыв',
                    rate: 'ставка',
                    rateexp: 'оцените свой опыт',
                    alertcar: 'выберите хотя бы одну звезду',
                    promo: 'промо',
                    enteruid: 'введите Общий UID',
                    uid: 'sharing UID',
                    cardf: 'пожалуйста, добавьте карту',
                    shareid: 'это общий UID',
                    shareid2: 'это не Общий UID',
                    shareid3: 'нет общего UID',
                    name: 'имя',
                    phone: 'Телефон',
                    profile: 'профиль',
                    choosefrom: 'выбор',
                    camera: 'камера',
                    file: 'файл',
                    cancel: 'Отмена',
                    pictureset: 'успешно',
                    failed: 'не удалось. Пожалуйста, Попробуйте Еще Раз',
                    resend: 'повторить',
                    details: 'Добавить недостающие детали',
                    countrycode: 'код страны',
                    payment: 'чек',
                    pay: 'оплатить',
                    safety: 'пожалуйста, убедитесь, что вы находитесь в нужном месте перед отъездом. Чтобы избежать мошенничества',
                    regards: 'спасибо за использование',
                    payment2: 'платеж',
                    entercode: 'введите промо-код',
                    retryi: 'повтор',
                    secs: 'секунд',
                    fastandconv: 'быстро и удобно',
                    signup: 'Регистрация',
                    facebook: 'FACEBOOK',
                    price: 'цена',
                    location: 'место',
                    destination: 'пункт назначения',
                    detailsp: 'детали',
                    triphistory: 'История путешествия',
                    freeride: 'бесплатные поездки',
                    facebookl: 'Facebook',
                    whatsapp: 'Whatsapp',
                    instagram: 'Instagram',
                    half1: 'поделитесь своим промо-кодом с друзьями. Как только они попробовали',
                    half2: 'Вы также получите бесплатную поездку.',
                    adapt: 'это мой ID акцию ',
                    calc: 'калькулятор поездки',
                    pvc: 'цены могут меняться в зависимости от непредвиденных обстоятельств. Такие как изменения погоды и т. д.',
                    priceappear: 'появится',
                    scan: 'карта сканирования',
                    message: 'сообщение',
                    cvc: 'Cvc',
                    year: 'год"',
                    month: 'месяц',
                    confirm: 'мы сделаем оплату для того чтобы подтвердить карточку..',
                    cardsuc: 'карта успешно активирована',
                    cardunc: 'карта неуспешно активирована',
                    drop: 'Вы доехали.',
                    retrynew: 'повторить',
                    about: 'Инфо'
                }
            ];
        }
        if (this.set.language == 'az') {
            return [
                {
                    whereTo: 'Haraya?',
                    set: 'Xəritədə nöqtəni qeyd edin',
                    dest: 'Gedəcəyiniz yer',
                    done: 'Tamam',
                    economy: 'Ekonom',
                    pool: 'Ümumi',
                    cash: 'Nağd',
                    wrongdest: 'Yalnış təyinat nöqtəsi',
                    arrival: 'Sürücünün gəlmə vaxtı ',
                    grut: 'Şəbəkə xətası.İnternet bağlantınızı yoxlayın',
                    card: 'Kart',
                    addcard: 'Kart əlavə edin',
                    request: 'Səyahət sorğula',
                    someone: 'Başqa birisi ilə get',
                    getcharged: 'Çıxıldı :',
                    join: 'Ümumi gedişə qoşul',
                    start: 'Ümumi gedişi başla',
                    proccessingcharge: 'Balansdan çıxılma..',
                    picknote: 'Yeni sifariş var. Sifarişi qəbul etməyiniz üçün 60 saniyəniz var.',
                    unfortunate: 'Təəssüf,',
                    notavailable: 'sizin ərazidə mövcud deyil.',
                    just: 'Gözləyin',
                    fbacc: 'Sizin facebook hesabınızda email tapilmadı.',
                    retry: 'İnternet kəsildi, yenidən cəhd edin',
                    home: 'Ev və iş ünvanınızı ayarlarda əlavə edin',
                    notrate: 'Not Rated',
                    nodriver: 'Sürücülər tapılmadı',
                    whycancel: 'İmtinanın səbəbi nədir',
                    chose: 'Seçin',
                    longpick: 'Uzun müddət gözləmə?',
                    incorrect: 'Yalnış sorğu?',
                    reject: 'İmtina',
                    accept: 'Qəbul et',
                    cantexit: 'Bağışlayın, hal hazıda çıxmaq mümkün deyil',
                    lost: 'Əlaqə kəsildi, yeni əlaqəyə cəhd olunur..',
                    recover: 'Zəhmət olmasa informasiyanın bərpasını gözləyin',
                    driverarive: 'Sürücünun gəlmə vaxtı',
                    drive: 'Sizin təyinat nöqtənizə gəlinir',
                    drivercancel: 'Sürücü imtina etdi',
                    end: 'Səyahət başa çatdı',
                    startride: 'Səyahətini başladı',
                    paidcash: 'Nəğd ödədiyinizi təsdiqləyin',
                    poolcancel: 'Pool Cancelled. No Other Rider',
                    waiting: 'Gözləyin...',
                    driverfound: 'Sürücü tapıldı',
                    check: 'Ödəmə',
                    website: 'Veb sayt',
                    career: 'Daşınmalar',
                    faq: 'FAQ',
                    address: 'Axtarış',
                    add: 'Əlavə et',
                    homesearch: 'Ana səhifə',
                    worksearch: 'İş',
                    rideSch: 'Səyahət planlaşdır',
                    rideSchu: 'Siz səyahət planlaşdırdınız',
                    from: 'Dan',
                    to: 'Dək',
                    date: 'Tarixi seçin',
                    clear: 'İmtina et',
                    addDest: 'Zəhmət olmasa təyinat və çıxış məntəqənizi əlavə edin',
                    addTime: 'Yalnış vaxt',
                    sucsch: 'Succefully Scheduled A Ride',
                    sucschw: 'Succefully Cancelled Ride',
                    error: 'Əminsiniz?',
                    report: 'Sizin şikayətiniz göndərildi. Tezliklə sizə cavab veriləcək',
                    support: 'Dəstək',
                    complaint: 'Şikayət et',
                    submit: 'QƏBUL',
                    customercare: 'CustomerCare',
                    email: 'EMail',
                    password: 'Şifrə',
                    newacc: 'Yeni hesab yarat',
                    login: 'DAXİL OL',
                    validemail: 'Düzgün email daxil edin',
                    resetpasss: 'Şifrəni yenilə',
                    emailsent: 'Şifrəni yeniləmək üçün emailinizə qaydalar göndərildi',
                    review: 'Şərh yaz',
                    rate: 'Qiymətləndir',
                    rateexp: 'Təcrübəni qiymətləndir',
                    alertcar: 'Ən azı bir ulduz seçin',
                    promo: 'Promo',
                    enteruid: 'Sharing UID daxil edin',
                    uid: 'sharing UID',
                    cardf: 'Kart əlavə edin',
                    shareid: 'Bu Sharing UID',
                    shareid2: 'Bu  Sharing UID deyil',
                    shareid3: 'Sharing UID yoxdur',
                    name: 'Ad',
                    phone: 'Telefon',
                    profile: 'Profil',
                    choosefrom: 'Başlanğıcı seçin',
                    camera: 'Kamera',
                    file: 'Fayl',
                    cancel: 'İmtina',
                    pictureset: 'Profil şəkli uğurla yüklənildi',
                    failed: 'Uğursuz. Yenidən cəhd edin',
                    resend: 'YENİDƏN GÖNDƏR',
                    details: 'Qalan məlumatları əlavə edin',
                    countrycode: 'Ölkə kodu',
                    payment: 'Qəbz',
                    pay: 'Ödə',
                    safety: 'Əmin olun ki, lazım olan ünvandasınız',
                    regards: 'İstifadə etdiyiniz üçün təşəkkür edirik',
                    payment2: 'Ödəmə',
                    entercode: 'Promo kodu əlavə edin',
                    retryi: 'Cəhd edin',
                    secs: 'Saniyə',
                    fastandconv: 'Tez və rahat',
                    signup: 'BİZƏ QOŞUL',
                    facebook: 'FACEBOOK',
                    price: 'QİYMƏT',
                    location: 'ÜNVAN',
                    destination: 'TƏYİNAT',
                    detailsp: 'Detallar',
                    triphistory: 'Səhayət tarixi',
                    freeride: 'Pulsuz gedişlər',
                    facebookl: 'Facebook',
                    whatsapp: 'Whatsapp',
                    instagram: 'Instagram',
                    half1: 'Promo kodunuzu dostlarla bölüş',
                    half2: 'siz eyni zamanda pulsuz gedişlər əldə edəcəksiniz.',
                    adapt: 'Bu mənim share id mdir ',
                    calc: 'Səyahət hesablaylcısı',
                    pvc: 'Qiymət müxtəlif səbəblərə görə dəyişə bilər',
                    priceappear: 'Qiymət',
                    scan: 'Karti skan edin',
                    message: 'Mesaj',
                    cvc: 'Cvc',
                    year: 'İl',
                    month: 'Ay',
                    confirm: 'Kartin təsdiqi üçün ödəniş olunacaq.',
                    cardsuc: 'Kart aktivləşdirildi',
                    cardunc: 'Kartın aktivləşdirilməsi uğursuz başa çatdı',
                    drop: 'Səyahətiniz başa çatdı. Zəhmət olmasa ödəniş edin',
                    retrynew: 'Yenidən cəhd',
                    about: 'Haqqında'
                }
            ];
        }
    };
    return LanguageProvider;
}());
LanguageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
], LanguageProvider);

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_native_map_container_native_map_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import firebase from 'firebase/app';

/*
  Generated class for the DirectionserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DirectionserviceProvider = (function () {
    function DirectionserviceProvider(eProvider, lp, modalCtrl, platform, cMap, gCode, popOp) {
        this.eProvider = eProvider;
        this.lp = lp;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.cMap = cMap;
        this.gCode = gCode;
        this.popOp = popOp;
        this.canDismiss = false;
        this.hasGottenTripDist = false;
        this.calculateBtn = false;
        this.rate = 2;
        this.extra = 50;
        this.fix = 65;
        this.above = 110;
        this.next = 55;
        this.min = 3;
        this.cons = 4;
        this.canUpdateDestination = false;
        this.isDriver = false;
        this.service = new google.maps.DistanceMatrixService();
        console.log(this.fare);
    }
    DirectionserviceProvider.prototype.calcRoute = function (stop, destinationName) {
        var _this = this;
        var start = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
        this.service.getDistanceMatrix({
            origins: [start, this.gCode.locationName],
            destinations: [destinationName, stop],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, function (response, status) {
            _this.callback(response, status);
        });
    };
    DirectionserviceProvider.prototype.callback = function (response, status) {
        // See Parsing the Results for
        // the basics of a callback function.
        console.log(response, status);
        if (status === 'OK') {
            // loading.present();
            if (response.rows[0].elements[1].status == 'ZERO_RESULTS' || response.rows[0].elements[1].status == 'NOT_FOUND') {
                this.popOp.showPimp('No directions by Driving Found For That Route. Distance May be too far.');
                this.popOp.hideLoader();
                this.cMap.canShowchoiceTab = false;
                // this.cMap.norideavailable = true
            }
            else {
                var duration = Math.round(response.rows[0].elements[1].duration.value / 60);
                var distance = Math.round(response.rows[0].elements[1].distance.value / 1000);
                this.duration = response.rows[0].elements[1].duration.text;
                this.price = (this.fare + distance + duration) * this.pricePerKm;
                console.log('This is the duration' + duration);
                console.log('This is the distance' + distance);
                console.log(response.rows[0].elements[1].distance.value / 1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text);
            }
        }
    };
    DirectionserviceProvider.prototype.mcalcRoute = function (stop, destinationName) {
        var _this = this;
        var start = new google.maps.LatLng(this.cMap.lat, this.cMap.lng);
        this.service.getDistanceMatrix({
            origins: [start, this.gCode.locationName],
            destinations: [destinationName, stop],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        }, function (response, status) {
            _this.mcallback(response, status);
        });
    };
    DirectionserviceProvider.prototype.mcallback = function (response, status) {
        // See Parsing the Results for
        // the basics of a callback function.
        console.log(response, status);
        if (status === 'OK') {
            // loading.present();
            var duration = Math.round(response.rows[0].elements[1].duration.value / 60);
            this.distance = Math.round(response.rows[0].elements[1].distance.value / 1000);
            this.duration = response.rows[0].elements[1].duration.text;
            this.price = (this.fare + this.distance + duration) * this.pricePerKm;
            console.log('This is the duration' + duration);
            console.log('This is the distance' + this.distance);
            console.log(response.rows[0].elements[1].distance.value / 1000, response.rows[0].elements[1].duration.value, response.rows[0].elements[1].duration.text);
        }
    };
    return DirectionserviceProvider;
}());
DirectionserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_pop_up_pop_up__["a" /* PopUpProvider */]])
], DirectionserviceProvider);

//# sourceMappingURL=directionservice.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = (function () {
    //public provider = new firebase.auth.FacebookAuthProvider();
    function AuthProvider(platform, lp, injector, pop) {
        var _this = this;
        this.platform = platform;
        this.lp = lp;
        this.injector = injector;
        this.pop = pop;
        this.userProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref('/userProfile');
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) { return _this.currentUser = user; });
    }
    Object.defineProperty(AuthProvider.prototype, "navCtrl", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]);
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().createUserWithEmailAndPassword(email, password).then(function (newUser) {
            _this.userProfileRef.child(newUser.uid).set({
                email: email
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        this.userProfileRef.child(__WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid).off();
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        get: function () {
            return this.currentUser !== null;
        },
        enumerable: true,
        configurable: true
    });
    // signInWithFacebook(): firebase.Promise<any> {
    //   if (this.platform.is('cordova')) {
    //     return this.facebook.login(['email'])
    //     .then( response => {
    //       const facebookCredential = firebase.auth.FacebookAuthProvider
    //         .credential(response.authResponse.accessToken);
    //       firebase.auth().signInWithCredential(facebookCredential)
    //         .then( success => { 
    //           console.log("Firebase success: " + JSON.stringify(success));
    //         }).catch((error) => {
    //           console.log("Firebase failure: " + JSON.stringify(error));
    //           //alert('Something Went Wrong, Check Your Connection And Try Again')
    //           this.pop.showPimp(this.lp.translate()[0].grut)
    //           this.navCtrl.setRoot('LoginEntrancePage');
    //       });
    //     }).catch((error) => { console.log(error) });
    //   } else {
    //     return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((success) => {
    //       console.log("Firebase success: " + JSON.stringify(success));
    //     })
    //     .catch((error) => {
    //       console.log("Firebase failure: " + JSON.stringify(error));
    //      // alert('Something Went Wrong, Check Your Connection And Try Again')
    //      this.pop.showPimp(this.lp.translate()[0].grut)
    //      this.navCtrl.setRoot('LoginEntrancePage');
    //   });
    //   }
    //}
    AuthProvider.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    AuthProvider.prototype.displayName = function () {
        if (this.currentUser !== null) {
            return this.currentUser.displayName;
        }
        else {
            return '';
        }
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "Restaurants near you",
                description: "Get all Nixer Restaurants near you",
                image: "./assets/bgauth2.png",
                color: "#ffffff"
            },
            {
                title: "Favourite Food",
                description: "You can order for your favourite dishes at near restaurants",
                image: "./assets/001-hamburger.png",
                color: "#ffffff"
            },
            {
                title: "Delivery Service",
                description: "Your order is pick up by delivery driver near you",
                image: "./assets/005-food-truck.png",
                color: "#ffffff"
            },
            {
                title: "Track Order",
                description: "You can track you order from restaurant to your door step",
                image: "./assets/002-delivery.png",
                color: "#ffffff"
            }
        ];
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.goAuth = function () {
        this.navCtrl.setRoot('RegisterPage');
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/intro/intro.html"*/'<ion-content fullscreen class="tutorial-page">\n    <ion-slides pager="true">\n  \n        <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background-color\': slide.color} "> \n              <ion-toolbar transparent>\n                    <ion-buttons end>\n                        <button ion-button menuToggle clear color="secondary" (click)="goAuth()">Skip</button>                                \n                    </ion-buttons>\n              </ion-toolbar>\n  \n              <div class="intro-box">\n                  <img [src]="slide.image" class="pop-in slide-image"/>\n                  <h3 class="slide-title" [innerHTML]="slide.title"></h3>\n                  <p [innerHTML]="slide.description" style="color: black"></p>\n              </div>\n        </ion-slide>\n  \n        <ion-slide class="authBg">\n              <ion-toolbar transparent>\n                    <ion-buttons end>\n                        <button ion-button menuToggle clear color="light"></button>                                \n                    </ion-buttons>\n              </ion-toolbar>\n              <div class="introBox" margin-top>\n                  <img src="./assets/slide5.png" class="slide-image"/>\n                  <!--<h2 class="slide-title">Let\'s get started</h2>-->\n                  <button ion-button large outline round icon-right color="secondary" menuToggle margin-top (click)="goAuth()">\n                    Let\'s get started\n                    <ion-icon name="arrow-forward"></ion-icon>\n                  </button>\n              </div>\n        </ion-slide>\n    </ion-slides>\n  \n  </ion-content>         '/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_stripe__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Injectable } from '@angular/core';






/*
  Generated class for the StripeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var StripeProvider = (function () {
    function StripeProvider(prof, pop, act, lp, stripe, settings, http, eProvider) {
        this.prof = prof;
        this.pop = pop;
        this.act = act;
        this.lp = lp;
        this.stripe = stripe;
        this.settings = settings;
        this.http = http;
        this.eProvider = eProvider;
        console.log('Hello StripeProvider Provider');
    }
    StripeProvider.prototype.ChargeCard = function (amt, id) {
        var _this = this;
        var data = 'stripetoken=' + this.prof.card + '&amount=' + amt;
        var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
        headers.append('Conent-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe(function (res) {
            if (res.json().success)
                _this.pop.hideLoader();
            _this.act.getActivityProfile(id).update({
                Client_hasPaid: true,
            });
        });
    };
    return StripeProvider;
}());
StripeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
], StripeProvider);

//# sourceMappingURL=stripe.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaystackProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_event_event__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_language__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ProfileProvider } from '../../providers/profile/profile';


/*
  Generated class for the PaystackProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PaystackProvider = (function () {
    function PaystackProvider(act, lp, eProvider, platform, pop) {
        this.act = act;
        this.lp = lp;
        this.eProvider = eProvider;
        this.platform = platform;
        this.pop = pop;
        this.isDone = false;
        this.cardCharge = false;
    }
    PaystackProvider.prototype.UpdateCard = function (card, month, year, cvc, amount, email, driverPay) {
        this.eProvider.UpdateCard(card, month, year, cvc, amount, email, driverPay).then(function (success) {
        }).catch(function (error) { });
    };
    PaystackProvider.prototype.ChargeCard = function (card, month, cvc, year, amount, email, id) {
        var _this = this;
        this.pop.presentLoader(this.lp.translate()[0].proccessingcharge);
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                window.window.PaystackPlugin.chargeCard(function (resp) {
                    _this.pop.hideLoader();
                    _this.act.getActivityProfile(id).update({
                        Client_hasPaid: true,
                    });
                }, function (resp) {
                    _this.pop.hideLoader();
                    _this.act.getActivityProfile(id).update({
                        Client_paidCash: true,
                    });
                }, {
                    cardNumber: card,
                    expiryMonth: month,
                    expiryYear: year,
                    cvc: cvc,
                    email: email,
                    amountInKobo: amount,
                });
            }
            else {
            }
        });
    };
    return PaystackProvider;
}());
PaystackProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_event_event__["a" /* EventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_pop_up_pop_up__["a" /* PopUpProvider */]])
], PaystackProvider);

//# sourceMappingURL=paystack.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_director_director__ = __webpack_require__(155);
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
 * Generated class for the RatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RatePage = (function () {
    function RatePage(navCtrl, director, lp, viewCtrl, storage, pop, navParams, prof) {
        this.navCtrl = navCtrl;
        this.director = director;
        this.lp = lp;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.pop = pop;
        this.navParams = navParams;
        this.prof = prof;
        this.todo = {
            description: ' '
        };
    }
    RatePage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    RatePage.prototype.onModelChange = function ($event) {
        var _this = this;
        this.rateNumber = $event;
        this.pop.presentLoader('');
        setTimeout(function () {
            _this.pop.hideLoader();
        }, 1000);
    };
    RatePage.prototype.logForm = function () {
        var _this = this;
        console.log(this.todo);
        if (this.rateNumber != null) {
            var value = this.navParams.get('eventId');
            console.log(this.prof.name);
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            // this.todo.description = 'No description'
            this.prof.getRatingProfile().child(this.director.restuarant_Detail.key).child(this.prof.name[0]).update({
                name: this.prof.name,
                review: this.todo.description,
                rateNum: this.rateNumber,
                date: date
            }).then(function () {
                _this.prof.getResturantProfile().child(_this.director.restuarant_Detail.key).update({
                    rate: _this.rateNumber
                });
                _this.navCtrl.pop();
            });
        }
        else {
            this.pop.showPimp(this.lp.translate()[0].alertcar);
        }
    };
    return RatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], RatePage.prototype, "myInput", void 0);
RatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rate',template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/rate/rate.html"*/'<!--\n  Generated template for the RatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="nav-color">\n    <ion-title>{{lp.translate()[0].rate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content text-center padding>\n    <ion-title>{{lp.translate()[0].rateexp}}</ion-title>\n    <!-- <ion-item-divider></ion-item-divider> -->\n  <rating [(ngModel)]="rate" \n  readOnly="false"\n  max="5" \n  emptyStarIconName="star-outline" \n  halfStarIconName="star-half" \n  starIconName="star" \n  nullable="false" \n  (ngModelChange)="onModelChange($event)"></rating>\n\n<div class=\'reviewspace\'>\n  <ion-title>{{lp.translate()[0].review}}</ion-title>\n  <form (ngSubmit)="logForm()">\n        <ion-textarea  #myInput id="myInput" rows="1" maxLength="1000"  [(ngModel)]="todo.description" name="description"></ion-textarea>\n\n      <button class=\'button\' padding ion-button type="submit" block>{{lp.translate()[0].submit}}</button>\n    </form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/pages/rate/rate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_director_director__["a" /* DirectorProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
], RatePage);

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(322);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_mode__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_vibration__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_browser_tab__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic2_rating__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_auth__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_event_event__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_rate_rate__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_directionservice_directionservice__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_pop_up_pop_up__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_onesignal_onesignal__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_native_map_container_native_map_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_settings_settings__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_activity_activity__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_paypal_paypal__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_paystack_paystack__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_stripe_stripe__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_intro_intro__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_page_transitions__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_director_director__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//native modules






















//other

//providers















//export for firebase config added here to avoid initialization errors



var firebaseConfig = {
    apiKey: "AIzaSyBR_wZIv_5O0D6cAAJYJurq9_l4JSHVQHQ",
    authDomain: "restuarant-d952c.firebaseapp.com",
    databaseURL: "https://restuarant-d952c.firebaseio.com",
    projectId: "restuarant-d952c",
    storageBucket: "restuarant-d952c.appspot.com",
    messagingSenderId: "62509962767"
};
__WEBPACK_IMPORTED_MODULE_16_firebase_app__["initializeApp"](firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_38__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_rate_rate__["a" /* RatePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true,
                scrollAssist: false,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/accountkit/accountkit.module#AccountkitPageModule', name: 'AccountkitPage', segment: 'accountkit', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/all-restaurants/all-restaurants.module#AllRestaurantsPageModule', name: 'AllRestaurantsPage', segment: 'all-restaurants', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/basket/basket.module#BasketPageModule', name: 'BasketPage', segment: 'basket', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/currentfood-details/currentfood-details.module#CurrentfoodDetailsPageModule', name: 'CurrentfoodDetailsPage', segment: 'currentfood-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/food-details/food-details.module#FoodDetailsPageModule', name: 'FoodDetailsPage', segment: 'food-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/phone/phone.module#PhonePageModule', name: 'PhonePage', segment: 'phone', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ratings/ratings.module#RatingsPageModule', name: 'RatingsPage', segment: 'ratings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/restaurant-details/restaurant-details.module#RestaurantDetailsPageModule', name: 'RestaurantDetailsPage', segment: 'restaurant-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tracker/tracker.module#TrackerPageModule', name: 'TrackerPage', segment: 'tracker', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_20_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_38__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_rate_rate__["a" /* RatePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_23__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_event_event__["a" /* EventProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_browser_tab__["a" /* BrowserTab */],
            __WEBPACK_IMPORTED_MODULE_32__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_26__pages_rate_rate__["a" /* RatePage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_27__providers_geocoder_geocoder__["a" /* GeocoderProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_directionservice_directionservice__["a" /* DirectionserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_pop_up_pop_up__["a" /* PopUpProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_onesignal_onesignal__["a" /* OnesignalProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_31__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_33__providers_activity_activity__["a" /* ActivityProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_paypal_paypal__["a" /* PaypalProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_paystack_paystack__["a" /* PaystackProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_language_language__["a" /* LanguageProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_stripe_stripe__["a" /* StripeProvider */],
            __WEBPACK_IMPORTED_MODULE_40__providers_director_director__["a" /* DirectorProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_language_language__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { RatePage } from '../../pages/rate/rate';

/*
  Generated class for the PopUpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PopUpProvider = (function () {
    function PopUpProvider(act, platform, lp, toastCtrl, cMap, alert, ph, load) {
        this.act = act;
        this.platform = platform;
        this.lp = lp;
        this.toastCtrl = toastCtrl;
        this.cMap = cMap;
        this.alert = alert;
        this.ph = ph;
        this.load = load;
        this.onRequest = false;
        this.canDismiss = false;
        this.calculateBtn = false;
        this.allowed = true;
        this.hasCleared = false;
    }
    // get navCtrl(): NavController {
    //   return this.injector.get(NavController);
    // }
    PopUpProvider.prototype.showAlertNormal = function (title, subtitle, network) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: this.lp.translate()[0].retrynew,
                    role: 'cancel',
                    handler: function () {
                        if (network) {
                            _this.clearAll(_this.uid, true);
                        }
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.showAlert = function (title, subtitle) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: subtitle,
            buttons: [{
                    text: this.lp.translate()[0].accept,
                    role: 'cancel',
                    handler: function () {
                        _this.cMap.map.setClickable(true);
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.presentSimpleLoader = function (message) {
        var loading = this.load.create({
            content: message
        });
        loading.present();
        console.log('FDFFFDFDF');
        var myInterval = setTimeout(function () {
            loading.dismiss();
            clearTimeout(myInterval);
        }, 500);
    };
    PopUpProvider.prototype.SmartLoader = function (message) {
        var loading = this.load.create({
            content: message
        });
        loading.present();
        console.log('dfffdfddggd');
        var myInterval = setInterval(function () {
            loading.dismiss();
            clearInterval(myInterval);
        }, 500);
    };
    PopUpProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PopUpProvider.prototype.showToast = function (message) {
        this.toast = this.toastCtrl.create({
            message: message,
            position: 'bottom',
            duration: 2000
        });
        this.toast.present();
    };
    PopUpProvider.prototype.hideToast = function () {
        this.toast.dismiss();
    };
    PopUpProvider.prototype.showPomp = function (title, message) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: this.lp.translate()[0].accept,
                    role: 'cancel',
                    handler: function () {
                        _this.clearAll(_this.uid, true);
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.showPimp = function (title) {
        var alert = this.alert.create({
            title: title,
            buttons: [{
                    text: this.lp.translate()[0].accept,
                    role: 'cancel',
                    handler: function () {
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    PopUpProvider.prototype.refactor = function () {
        this.cMap.onDestinatiobarHide = false;
        this.calculateBtn = false;
        document.getElementById("destination").innerHTML = "Set Destination";
    };
    PopUpProvider.prototype.alertClosure = function (message) {
        var _this = this;
        var alert = this.alert.create({
            title: message,
            buttons: [{
                    text: 'Exit',
                    role: 'cancel',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                },
            ],
            enableBackdropDismiss: true
        });
        alert.present();
    };
    // GotoPage(){
    //   this.navCtrl.push(RatePage);
    // }
    PopUpProvider.prototype.clearAll = function (uid, can) {
        console.log(uid);
        var customer = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("Customer/" + uid);
        customer.remove().then(function (success) {
        }).catch(function (error) {
            // this.showAlertNormal("Network Error", "please make sure you have a strong network and try Again", false)
        });
    };
    PopUpProvider.prototype.locatePosition = function (lat, lng) {
        // this.cMap.map.setCenter(lat, lng);
    };
    PopUpProvider.prototype.presentRouteLoader = function (message) {
        var _this = this;
        var loading = this.load.create({
            content: message
        });
        loading.present();
        console.log('sdfggfsfsfsfs');
        var myInterval = setInterval(function () {
            if (_this.canDismiss) {
                loading.dismiss();
                clearInterval(myInterval);
            }
        }, 1000);
    };
    PopUpProvider.prototype.presentLoader = function (message) {
        this.dismissLoader = this.load.create({
            content: message
        });
        this.dismissLoader.present();
        console.log('sdffsfsfsfs');
    };
    PopUpProvider.prototype.hideLoader = function () {
        this.dismissLoader.dismiss();
        this.dismissLoader = null;
        //this.presentLoader = false;
        console.log('sdffsfsfsfs');
    };
    PopUpProvider.prototype.showAlertComplex = function (title, message, accept, reject, iscancel) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            message: message,
            inputs: [
                {
                    name: 'long',
                    label: this.lp.translate()[0].longpick,
                    type: "checkbox",
                    value: "true",
                    checked: false
                },
                {
                    name: 'incorrect',
                    label: this.lp.translate()[0].incorrect,
                    type: "checkbox",
                    value: "false",
                    checked: false
                }
            ],
            buttons: [
                {
                    text: this.lp.translate()[0].reject,
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: this.lp.translate()[0].accept,
                    handler: function () {
                        if (iscancel) {
                            _this.clearAll(_this.uid, true);
                        }
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    return PopUpProvider;
}());
PopUpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_activity_activity__["a" /* ActivityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_language_language__["a" /* LanguageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_native_map_container_native_map_container__["a" /* NativeMapContainerProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], PopUpProvider);

//# sourceMappingURL=pop-up.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "AuthPage";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chineduetoh/Desktop/VSCODE PROJECTS/Restuarant/User/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_language__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OnesignalProvider = (function () {
    function OnesignalProvider(One, pop, lp) {
        this.One = One;
        this.pop = pop;
        this.lp = lp;
    }
    OnesignalProvider.prototype.sendPush = function (id) {
        // console.log('This is the push id', [id])
        var notificationObj = {
            include_player_ids: [id],
            contents: { en: this.lp.translate()[0].picknote },
        };
        this.One.postNotification(notificationObj).then(function (good) {
            console.log(good);
            //alert("Notification Post Success:\n" + id);
        }, function (error) {
            console.log(error);
            //this.pop.showPimp(error)
            // alert("Notification Post Failed:\n" + JSON.stringify(error));
            // alert("Notification Post Failed:\n" + id);
        });
    };
    return OnesignalProvider;
}());
OnesignalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_3__providers_pop_up_pop_up__["a" /* PopUpProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_language_language__["a" /* LanguageProvider */]])
], OnesignalProvider);

//# sourceMappingURL=onesignal.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaypalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PaypalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PaypalProvider = (function () {
    function PaypalProvider(http) {
        this.http = http;
        console.log('Hello PaypalProvider Provider');
    }
    return PaypalProvider;
}());
PaypalProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PaypalProvider);

//# sourceMappingURL=paypal.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileProvider = (function () {
    function ProfileProvider() {
        var _this = this;
        this.isHome = true;
        this.login = false;
        this.kit = false;
        this.ratingText = '';
        this.ratingValue = 0;
        this.loadingState = false;
        this.hasLoaded = false;
        this.referal = 'rty';
        this.refEarning = 0;
        this.hasCalled = true;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                // console.log(user)
                _this.user = user;
                //console.log(this.user)
                _this.id = _this.user.uid;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/" + user.uid);
                _this.IDProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/");
                _this.WebAdminProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings");
                _this.Restaurants = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Resturants");
                _this.Ratings = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Ratings");
                _this.DriverProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("driverProfile/" + user.uid);
                _this.ScheduledProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("ScheduledRides");
                _this.uidProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("SharingID/");
                _this.Foods = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Foods");
                _this.Category = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Category");
                _this.Cart = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/" + user.uid + "/Cart");
                _this.promoProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("SharingIDPromo/");
                _this.referalProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/");
                _this.referalProfile2 = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("driverProfile/");
                _this.companyNews = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("News/User");
                _this.getDriverProfile().on('value', function (userProfileSnapshot) {
                    _this.driver = userProfileSnapshot.val();
                });
                _this.users = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile");
                _this.drivers = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Drivers");
                _this.pools = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("PoolRides");
                _this.CustomerOwnPropertyRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + user.uid + "/client");
                _this.getUserProfile().on('value', function (userProfileSnapshot) {
                    _this.userID = userProfileSnapshot.val();
                    _this.phone = userProfileSnapshot.val().phoneNumber;
                    _this.pic = userProfileSnapshot.val().picture;
                    _this.verificationID = userProfileSnapshot.val().random;
                    _this.name = userProfileSnapshot.val().name;
                    _this.paymentType = userProfileSnapshot.val().payWith;
                    _this.card = userProfileSnapshot.val().Card_Number;
                    _this.email = userProfileSnapshot.val().Card_email;
                    _this.cvc = userProfileSnapshot.val().Card_Cvc;
                    _this.year = userProfileSnapshot.val().Card_Year;
                    _this.month = userProfileSnapshot.val().Card_month;
                    _this.ratingText = userProfileSnapshot.val().ratingtext;
                    _this.ratingValue = userProfileSnapshot.val().rating;
                    _this.earnings = userProfileSnapshot.val().earnings;
                    if (userProfileSnapshot.val().referal) {
                        _this.referal = userProfileSnapshot.val().referal;
                        var ref = void 0;
                        if (userProfileSnapshot.val().referalID) {
                            ref = userProfileSnapshot.val().referalID;
                        }
                        else {
                            ref = 'etter';
                        }
                        console.log(ref);
                        _this.convrefEarning = userProfileSnapshot.val().refEarning;
                        if (ref.replace(/[^A-Z,0-9]/gi, "").length == 4) {
                            _this.getReferalProfile().on('value', function (userProfileSnapshot) {
                                if (userProfileSnapshot.val().refEarning)
                                    _this.refEarning = userProfileSnapshot.val().refEarning;
                            });
                        }
                        else {
                            _this.getReferalProfile2().on('value', function (userProfileSnapshot) {
                                if (userProfileSnapshot.val().refEarning)
                                    _this.refEarning = userProfileSnapshot.val().refEarning;
                            });
                        }
                    }
                    console.log(_this.referal);
                });
            }
        });
    }
    ProfileProvider.prototype.getRatingProfile = function () {
        return this.Ratings;
    };
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.getResturantProfile = function () {
        return this.Restaurants;
    };
    ProfileProvider.prototype.getCartProfile = function () {
        return this.Cart;
    };
    ProfileProvider.prototype.getResturantFoodProfile = function () {
        return this.Foods;
    };
    ProfileProvider.prototype.getResturantCategoryProfile = function () {
        return this.Category;
    };
    ProfileProvider.prototype.getyProfile = function () {
        return this.IDProfile;
    };
    ProfileProvider.prototype.getUserIDProfile = function (r) {
        return this.IDProfile.child(r);
    };
    ProfileProvider.prototype.getReferalProfile = function () {
        return this.referalProfile.child(this.referal);
    };
    ProfileProvider.prototype.getReferalProfile2 = function () {
        return this.referalProfile2.child(this.referal);
    };
    ProfileProvider.prototype.getDriverProfile = function () {
        return this.DriverProfile;
    };
    ProfileProvider.prototype.getNewsProfile = function () {
        return this.companyNews;
    };
    ProfileProvider.prototype.getWebAdminProfile = function () {
        return this.WebAdminProfile;
    };
    ProfileProvider.prototype.getScheduledProfile = function (id) {
        return this.ScheduledProfile.child(id);
    };
    ProfileProvider.prototype.getUserAsClientInfo = function () {
        return this.customer;
    };
    ProfileProvider.prototype.getAllDrivers = function () {
        return this.drivers;
    };
    ProfileProvider.prototype.getAllUser = function () {
        return this.users;
    };
    ProfileProvider.prototype.getAllPool = function () {
        return this.pools;
    };
    ProfileProvider.prototype.getAllSharingID = function (code) {
        return this.uidProfile.child(code);
    };
    ProfileProvider.prototype.getAllSharingPromoID = function (code) {
        return this.promoProfile.child(code);
    };
    ProfileProvider.prototype.getSharingID = function () {
        return this.uidProfile;
    };
    ProfileProvider.prototype.updateName = function (username) {
        return this.userProfile.update({
            name: username,
        });
    };
    ///Forr Refer for ride
    ProfileProvider.prototype.updatePromoID = function (id) {
        return this.promoProfile.child(id).update({
            id: [this.id],
        });
    };
    ProfileProvider.prototype.updateRideID = function (id) {
        var _this = this;
        return this.userProfile.update({
            idForRide: id,
        }).then(function () {
            _this.updatePromoID(id);
        });
    };
    ///Forr Refer for cash
    ProfileProvider.prototype.updateID = function (username) {
        return this.userProfile.update({
            id: username,
        });
    };
    ProfileProvider.prototype.updateGUID = function (username) {
        var _this = this;
        return this.uidProfile.child(username).update({
            id: [this.id],
        }).then(function () {
            _this.updateID(username);
        });
    };
    ProfileProvider.prototype.updateEmail = function (username) {
        return this.userProfile.update({
            email: username,
        });
    };
    ProfileProvider.prototype.UpdateNumber = function (number, username) {
        return this.userProfile.update({
            phoneNumber: number,
            name: username,
            rating: 0,
            ratingtext: 'Not Yet Rated'
        });
    };
    ProfileProvider.prototype.UpdateNumbers = function (number) {
        return this.userProfile.update({
            phoneNumber: number,
            earnings: 0
        });
    };
    ProfileProvider.prototype.UpdateUserLocation = function (lat, lng, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_location: [lat, lng],
        });
    };
    ProfileProvider.prototype.UpdateEarnings = function (sum) {
        return this.userProfile.update({
            earnings: this.earnings + sum,
        });
    };
    ProfileProvider.prototype.UpdateRefEarnings = function (sum) {
        console.log(this.refEarning);
        return this.referalProfile.child(this.referal).update({
            refEarning: this.refEarning + sum,
        });
    };
    ProfileProvider.prototype.UpdateRefEarnings2 = function (sum) {
        return this.referalProfile2.child(this.referal[0]).update({
            refEarning: this.refEarning + sum,
        });
    };
    ProfileProvider.prototype.UpdateHome = function (number) {
        return this.userProfile.update({
            Home: number,
        });
    };
    ProfileProvider.prototype.UpdateBank = function (bank, account) {
        return this.userProfile.update({
            bank: bank,
            accountNumber: account
        });
    };
    ProfileProvider.prototype.UpdateWork = function (number) {
        return this.userProfile.update({
            Work: number,
        });
    };
    ProfileProvider.prototype.UpdateReferal = function (number, id) {
        return this.userProfile.set({
            referal: number,
            referalID: id
        });
    };
    ProfileProvider.prototype.updateDestination = function (number) {
        return this.userProfile.update({
            Work: number,
        });
    };
    ProfileProvider.prototype.createHistory = function (name, price, date, location, destination) {
        return this.userProfile.child('/eventList').push({
            name: name,
            price: price,
            date: date,
            location: location,
            destination: destination
        });
    };
    ProfileProvider.prototype.UpdatePhoto = function (pic) {
        return this.userProfile.update({
            picture: pic,
        });
    };
    ProfileProvider.prototype.UpdateGuid = function (pic) {
        return this.userProfile.update({
            GUID: [pic, this.id],
        });
    };
    ProfileProvider.prototype.UpdateEarning = function (price) {
        return this.userProfile.update({
            earnings: price,
        });
    };
    ProfileProvider.prototype.UpdateUserRating = function (rate, text) {
        return this.userProfile.update({
            rating: rate,
            ratingtext: text
        });
    };
    ProfileProvider.prototype.PushRandomNumber = function (number) {
        return this.userProfile.update({
            random: number,
        });
    };
    ProfileProvider.prototype.Complain = function (value) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings/user/complains").push({
            complain: value,
            email: this.user.email
        });
    };
    ProfileProvider.prototype.RateDriver = function (id, rScore, text, value) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("driverProfile/" + id).update({
            rating: rScore,
            review: text
        });
    };
    ProfileProvider.prototype.ApprovePickup = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_PickedUp: value,
        });
    };
    ProfileProvider.prototype.ApproveDrop = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_Dropped: value,
        });
    };
    ProfileProvider.prototype.SendMessage = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client/Chat").push({
            Client_Message: value,
        });
    };
    ProfileProvider.prototype.CanCharge = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_CanChargeCard: value,
        });
    };
    ProfileProvider.prototype.UpdatePaymentType = function (number) {
        return this.userProfile.update({
            payWith: number,
        });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SettingsProvider = (function () {
    function SettingsProvider() {
        var _this = this;
        this.appName = 'TaxiApp';
        this.car1 = 'Standard';
        this.car2 = 'Taxi';
        this.car3 = 'Executive';
        this.language = 'en';
        this.appLink = 'http://commuter.com';
        this.appCareer = 'http://commuter.com';
        this.appFaq = 'http://commuter.com';
        this.appinsta = 'http://commuter.com';
        this.appFB = 'http://commuter.com';
        this.appTerms = 'http://commuter.com';
        this.apart = 1000; //500 metres apart from driver
        this.appCountryCode = 'NG';
        this.appStripeKey = 'sk_live_Emol5oC7Z42JqsYTzC05y85e';
        this.isStripe = false;
        this.appcurrency = '$';
        this.appDashboard = 'https://ajetaxi.firebaseapp.com//';
        this.appPhone = '+2340300303233';
        this.companyMail = 'ricomedia22@gmail.com';
        this.current_ID = false;
        this.mailGUrl = "sandbox28ca01fb2b374bb1b8aceb9d0a86895a.mailgun.org";
        this.mailGKey = window.btoa("api:key-60b9b5a8e7097e2fdcada552e4820db4");
        this.refer = false;
        this.wallet = false;
        this.company = false;
        this.pool = false;
        this.schedule = false;
        this.OnesignalAppID = 'f6345b2b-3777-4631-8415-a3a178826e8d';
        this.CloudID = '1003487763108';
        this.support_email = 'chndth@gmail.com';
        this.WebAdminProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings");
        this.getWebAdminProfile().on('value', function (sShot) {
            if (sShot.val().name)
                _this.appName = sShot.val().name;
            if (sShot.val().website)
                _this.appLink = sShot.val().website;
            if (sShot.val().faq)
                _this.appFaq = sShot.val().faq;
            if (sShot.val().instagram)
                _this.appinsta = sShot.val().instagram;
            if (sShot.val().careers)
                _this.appCareer = sShot.val().careers;
            if (sShot.val().facebook)
                _this.appFB = sShot.val().facebook;
            if (sShot.val().apart)
                _this.apart = sShot.val().apart;
            if (sShot.val().countrycode)
                _this.appCountryCode = sShot.val().countrycode;
            if (sShot.val().currency)
                _this.appcurrency = sShot.val().currency;
            if (sShot.val().phone)
                _this.appPhone = sShot.val().phone;
            if (sShot.val().car_0)
                _this.car1 = sShot.val().car_0;
            if (sShot.val().car_1)
                _this.car2 = sShot.val().car_1;
            if (sShot.val().car_2)
                _this.car3 = sShot.val().car_2;
            if (sShot.val().stripe)
                _this.isStripe = true;
            if (sShot.val().apart)
                _this.apart = sShot.val().apart;
            if (sShot.val().langauge) {
                // this.lang.targetLanguageCode = sShot.val().langauge                                                                                                          
                _this.language = sShot.val().langauge;
            }
            if (sShot.val().company)
                _this.company = sShot.val().company;
            if (sShot.val().refer)
                _this.refer = sShot.val().refer;
            if (sShot.val().wallet)
                _this.wallet = sShot.val().wallet;
            if (sShot.val().pool)
                _this.pool = sShot.val().pool;
            if (sShot.val().schedule)
                _this.schedule = sShot.val().schedule;
            if (sShot.val().appID)
                _this.OnesignalAppID = sShot.val().appID;
            if (sShot.val().CloudID)
                _this.CloudID = sShot.val().CloudID;
            if (sShot.val().email)
                _this.companyMail = sShot.val().email;
            if (sShot.val().mailgunUrl)
                _this.mailGUrl = sShot.val().mailgunUrl;
            if (sShot.val().mailgunKey)
                _this.mailGKey = sShot.val().mailgunKey;
            if (sShot.val().support_email)
                _this.support_email = sShot.val().support_email;
        });
    }
    SettingsProvider.prototype.getWebAdminProfile = function () {
        return this.WebAdminProfile;
    };
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityProvider = (function () {
    function ActivityProvider() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                _this.user = user;
                _this.currentDriverRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Drivers");
                _this.CustomerOwnPropertyRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer");
                _this.PoolRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Pools/" + user.uid);
                //this.connectedRef = firebase.database().ref(".info/connected");
            }
        });
    }
    ActivityProvider.prototype.getCurrentDriver = function (id) {
        return this.currentDriverRef.child(id);
    };
    ActivityProvider.prototype.getPoolActivityProfile = function (id) {
        return this.CustomerOwnPropertyRef.child(id + "/client");
    };
    ActivityProvider.prototype.getActivityProfile = function (id) {
        return this.CustomerOwnPropertyRef.child(id + "/client");
    };
    ActivityProvider.prototype.getActiveProfile = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id);
    };
    ActivityProvider.prototype.getPoolProfile = function () {
        return this.PoolRef;
    };
    ActivityProvider.prototype.getConnectionState = function () {
        return this.connectedRef;
    };
    ActivityProvider.prototype.RequestPool = function (lat, lng, driverid) {
        return this.PoolRef.set({
            pool_details: [lat, lng, driverid]
        });
    };
    return ActivityProvider;
}());
ActivityProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ActivityProvider);

//# sourceMappingURL=activity.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_language_language__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventProvider = (function () {
    function EventProvider(ph, lp) {
        var _this = this;
        this.ph = ph;
        this.lp = lp;
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.id = user.uid;
                _this.user = user;
                _this.userProfileRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("userProfile/" + user.uid);
                _this.scheduleRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("ScheduledRides");
                _this.londonRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("LondonRides");
                _this.CustomerOwnPropertyRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + user.uid + "/client");
                _this.ratingText = _this.lp.translate()[0].notrate;
                _this.ratingValue = 0;
            }
        });
    }
    EventProvider.prototype.getUserProfile = function () {
        return this.userProfileRef;
    };
    EventProvider.prototype.getEventList = function () {
        return this.userProfileRef.child('/eventList');
    };
    EventProvider.prototype.getScheduledList = function () {
        return this.userProfileRef.child('/scheduled');
    };
    EventProvider.prototype.getDetailOfInfo = function () {
        return this.appPrice;
    };
    EventProvider.prototype.getEventDetail = function (eventId) {
        return this.userProfileRef.child('/eventList').child(eventId);
    };
    EventProvider.prototype.getChatList = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client/Chat");
    };
    EventProvider.prototype.getSupportChatList = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings/user/complains/" + id);
    };
    EventProvider.prototype.Complain = function (value, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("DashboardSettings/user/complains/" + id).push({
            Client_Message: value,
            email: this.user.email,
            chat_key: this.id
        });
    };
    EventProvider.prototype.PushUserDetails = function (name, picture, lat, lng, locationName, payWith) {
        return this.scheduleRef.child("/client").update({
            Client_username: name,
            Client_location: [lat, lng],
            Client_locationName: locationName,
            Client_paymentForm: payWith,
            Client_picture: picture,
            Client_ID: this.id,
            Client_PickedUp: false,
            Client_Dropped: false,
            Client_HasRated: false,
        });
    };
    EventProvider.prototype.CreateSchedule = function (price, name, picture, lat, lng, locationName, payWith, destination, phone, date, id, ratetext, ratevalue, time) {
        return this.scheduleRef.child(id).update({
            Client_username: name,
            Client_Deleted: false,
            Client_location: [lat, lng],
            Client_locationName: locationName,
            Client_paymentForm: payWith,
            Client_picture: picture,
            Client_phoneNumber: phone,
            Client_destinationName: destination,
            Client_CanChargeCard: false,
            Client_PickedUp: false,
            Client_Dropped: false,
            Client_HasRated: false,
            Client_ended: false,
            Client_price: price,
            Client_Date: date,
            Client_Time: time,
            Client_ID: id,
            Client_hasPaid: false,
            Client_paidCash: false,
            Client_Rating: ratevalue,
            Client_RatingText: ratetext
        });
    };
    EventProvider.prototype.CreateLondonBook = function (name, picture, lat, lng, locationName, payWith, destination, phone, date, id, ratetext, ratevalue, time) {
        return this.londonRef.child(id).update({
            Client_username: name,
            Client_Deleted: false,
            Client_locationName: locationName,
            Client_paymentForm: payWith,
            Client_picture: picture,
            Client_phoneNumber: phone,
            Client_destinationName: destination,
            Client_ended: false,
            Client_Date: date,
            Client_Time: time,
            Client_ID: id,
            Client_hasPaid: false,
            Client_paidCash: false,
            Client_Rating: ratevalue,
            Client_RatingText: ratetext
        });
    };
    EventProvider.prototype.UpdateDestination = function (destinationName, price, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Client_destinationName: destinationName,
            Client_price: price,
        });
    };
    EventProvider.prototype.UpdateNetworkSate = function (state, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Network_state: state,
        });
    };
    EventProvider.prototype.CreateNewSchedule = function (date) {
        return this.userProfileRef.child('/scheduled').push({
            TimeandDate: date,
        });
    };
    EventProvider.prototype.UpdateSate = function (state, id) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref("Customer/" + id + "/client").update({
            Left_and_Returned: state,
        });
    };
    EventProvider.prototype.UpdateCard = function (card, month, year, cvc, amount, email, driverPay) {
        return this.userProfileRef.update({
            Card_Number: card,
            Card_month: month,
            Card_Year: year,
            Card_Cvc: cvc,
            Card_Amount: amount,
            Card_email: email,
            Card_driverPay: driverPay
        });
    };
    return EventProvider;
}());
EventProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_language_language__["a" /* LanguageProvider */]])
], EventProvider);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeocoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GeocoderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GeocoderProvider = (function () {
    function GeocoderProvider(platform, load) {
        this.platform = platform;
        this.load = load;
        this.locationChange = true;
        this.geocoder = new google.maps.Geocoder;
    }
    GeocoderProvider.prototype.Geocode = function (address) {
        var _this = this;
        this.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                var position = results[0].geometry.location;
                _this.lat = position.lat();
                _this.lng = position.lng();
                //this.pop.locatePosition(this.lat, this.lng)
                console.log(_this.lat);
            }
            else {
                // alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };
    GeocoderProvider.prototype.Reverse_Geocode = function (lat, lng) {
        var _this = this;
        this.presentLoader('');
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    if (_this.dismissLoader)
                        _this.hideLoader();
                    console.log(results[0].address_components[0].short_name);
                    //document.getElementById("location").innerText = results[0].formatted_address;
                    _this.locationName = results[0].formatted_address;
                    _this.shortName = results[0].address_components[0].short_name;
                }
            }
        });
    };
    GeocoderProvider.prototype.presentLoader = function (message) {
        this.dismissLoader = this.load.create({
            content: message
        });
        this.dismissLoader.present();
        console.log('sdffsfsfsfs');
    };
    GeocoderProvider.prototype.hideLoader = function () {
        this.dismissLoader.dismiss();
        this.dismissLoader = null;
        //this.presentLoader = false;
        console.log('sdffsfsfsfs');
    };
    GeocoderProvider.prototype.Simple_Geocode = function (lat, lng) {
        var _this = this;
        var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
        var result;
        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    result = results[0].formatted_address;
                    console.log(result);
                    _this.place = result;
                }
            }
        });
        return result;
    };
    return GeocoderProvider;
}());
GeocoderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], GeocoderProvider);

//# sourceMappingURL=geocoder.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeMapContainerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_geocoder_geocoder__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Http } from '@angular/http';




/*
  Generated class for the NativeMapContainerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NativeMapContainerProvider = (function () {
    function NativeMapContainerProvider(googleMaps, toastCtrl, alert, settings, zone, myProf, gcode, platform) {
        this.googleMaps = googleMaps;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.settings = settings;
        this.zone = zone;
        this.myProf = myProf;
        this.gcode = gcode;
        this.platform = platform;
        this.onLocationbarHide = true;
        this.onDestinatiobarHide = true;
        this.CARS = [];
        this.pause = true;
        this.shove = true;
        this.speed = 50; // km/h
        this.canMess = true;
        this.cars = [];
        this.car_location = [];
        this.delay = 100;
        this.hasRequested = false;
        this.isCarAvailable = false;
        this.norideavailable = false;
        this.canShowchoiceTab = false;
        this.noGps = false;
        this.isLocationChange = false;
        this.onGpsEnabled = false;
        this.isNavigate = false;
        this.executiveStance = 'none';
        this.tricycleStance = 'none';
        this.standardStance = 'none';
        this.closeDrivers = [];
        this.mapLoadComplete = false;
        this.driverCarType = 0;
        this.choseCar = false;
        this.toggleNav = true;
        this.isClear = false;
        this.onbar = false;
        this.classic = false;
        this.smallcar = false;
        this.pool = false;
        this.onbar1 = false;
        this.onbar2 = false;
        this.onbar3 = false;
        this.canShow = true;
        this.toggleBtn = false;
        this.onPointerHide = false;
        this.stopMovingUserDestination = false;
        this.stopMovingUsertoDriver = false;
        this.selected_destination_bar = false;
        this.pan = 0;
        this.NotifyTimes = -1;
        this.canCheck = true;
        this.isDriverAvailable = false;
        this.does = true;
        this.carMarker = [];
        this.ClearDetection = false;
        this.hasDone = false;
        this.hasStart = false;
        this.hasShown = true;
        this.hasShow = true;
        this.started = false;
        this.showDone = false;
        this.hasbooked = false;
        this.locationChange = true;
        this.hasAdded = false;
        this.hasCompleted = true;
        this.isDestination = false;
        this.CloseCars = [];
        this.hidelocator = true;
        this.ready = false;
        if (!this.platform.is('cordova')) {
            this.lat = 5.4966964;
            this.lng = 7.5297323;
        }
    }
    ///Start the cordova map
    NativeMapContainerProvider.prototype.loadMap = function () {
        //console.log('map called')
        var _this = this;
        var lat;
        var lng;
        var zoom;
        lat = 5.4982219;
        lng = 7.5019607;
        zoom = 6;
        var mapOptions = {
            camera: {
                target: {
                    lat: lat,
                    lng: lng
                },
                zoom: zoom,
                tilt: 0
            }
        };
        if (!this.platform.is('cordova')) {
            this.lat = 5.4966964;
            this.lng = 7.5297323;
            this.gcode.Reverse_Geocode(this.lat, this.lng);
            console.log('move ended 2');
        }
        if (this.platform.is('cordova')) {
            this.map = this.googleMaps.create(document.getElementById("map"), mapOptions);
        }
        else {
        }
        //   if (!this.platform.is('browser')){
        //   plugin.google.maps.environment.setEnv({
        //     'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyC-bynE-7w6u9N7yC1Y1S-e1CXQvsiO2cA',
        //     'API_KEY_FOR_BROWSER_DEBUG': ''
        //   });
        // }
        // Wait the MAP_READY before using any methods.
        if (this.platform.is('cordova')) {
            this.map.one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
                .then(function () {
                //console.log('Map is ready!');
                _this.hasStart = true;
                _this.map.setTrafficEnabled(false);
                _this.map.setIndoorEnabled(false);
                _this.map.setClickable(false);
                _this.map.setCompassEnabled(false);
                _this.map.getMyLocation().then(function (location) {
                    console.log(location.latLng);
                    //alert(location.latLng.lat)
                    _this.location = location;
                    _this.lat = location.latLng.lat;
                    _this.lng = location.latLng.lng;
                    _this.gcode.Reverse_Geocode(location.latLng.lat, location.latLng.lng);
                    _this.userPos = new google.maps.LatLng(location.latLng.lat, location.latLng.lng);
                }).catch(function (er) {
                    _this.showError('No GPS signal. Enter address or enable location services.');
                });
            });
        }
    };
    //check if gps is available by trying to getlocation info which automatically handles everything
    NativeMapContainerProvider.prototype.checkGps = function () {
        var _this = this;
        var kush = setInterval(function () {
            // this.map = this.googleMaps.create(document.getElementById("op"), mapOptions);
            _this.map.getMyLocation().then(function (location) {
                //console.log('location now on')
                _this.loadMap();
                clearInterval(kush);
            });
        }, 2000);
    };
    NativeMapContainerProvider.prototype.showError = function (title) {
        var _this = this;
        var alert = this.alert.create({
            title: title,
            buttons: [{
                    text: 'Okay',
                    role: 'cancel',
                    handler: function () {
                        _this.checkGps();
                    }
                },],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    //Start the map touch detection
    NativeMapContainerProvider.prototype.PumpControls = function () {
        var _this = this;
        this.map.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_START).subscribe(function (start) {
            _this.hidelocator = false;
            _this.pause = false;
            if (!_this.hasRequested) {
                // this.map.refreshLayout();
                // let centerBar = document.getElementById("onbar").style.display = 'none'
                // let location = document.getElementById("location").style.marginTop = '-140px'
                //this.onDestinatiobarHide = false
                clearTimeout(_this.timer1);
                // let bottomBar1 = document.getElementById("bar2").style.display = 'none'
            }
        });
        this.map.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].CAMERA_MOVE_END).subscribe(function (start) {
            _this.pause = true;
            //Check if the user has already booked a ride
            if (!_this.hasRequested) {
                if (_this.canCheck && _this.ready) {
                    _this.canCheck = false;
                    //console.log('move ended')
                }
                //   this.checkForDriversAroundUser()
                if (!_this.platform.is('cordova')) {
                    _this.lat = 5.4334;
                    _this.lng = 7.4922;
                    _this.gcode.Reverse_Geocode(_this.lat, _this.lng);
                    console.log('move ended 2');
                }
                else {
                    if (_this.isLocationChange) {
                        var center = _this.map.getCameraPosition();
                        _this.lat = center.target.lat;
                        _this.lng = center.target.lng;
                        _this.gcode.Reverse_Geocode(_this.lat, _this.lng);
                    }
                    else {
                        var center = _this.map.getCameraPosition();
                        var lat = center.target.lat;
                        var lng = center.target.lng;
                        _this.gcode.Reverse_Geocode(lat, lng);
                    }
                }
            }
        });
    };
    return NativeMapContainerProvider;
}());
NativeMapContainerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_geocoder_geocoder__["a" /* GeocoderProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
], NativeMapContainerProvider);

//# sourceMappingURL=native-map-container.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map