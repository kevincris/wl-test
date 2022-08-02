(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf"],{

/***/ "K4CH":
/*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v0.7.28
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.8.1',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 255;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i in arr) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /\bqbcore\/([\w\.]+)/i                                              // WeChat Desktop for Windows Built-in Browser
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i                                                      // LieBao Browser
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.]+) .*mobile\/\w+ (safari)/i                        // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w\.]+) .*(mobile ?safari|safari)/i                     // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i              // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86)/i                              // Android-x86
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__(/*! !webpack amd options */ "PDX0")) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ "L8Wr":
/*!*********************************************************!*\
  !*** ./src/app/common/activities/activity.component.ts ***!
  \*********************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_activity_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./activity.component.html */ "t62z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let ActivityComponent = class ActivityComponent {
    constructor(translate) {
        this.translate = translate;
        this.displayName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].displayName;
    }
    ngOnInit() {
        this.actor = this.activity.actor;
        this.baseUser = this.activity.baseUser;
        this.counterUser = this.activity.counterUser;
        this.ipAddress = this.activity.ipAddress;
        this.data = this.activity.data;
        this.location = this.activity.location ? this.activity.location : null;
        if (this.data) {
            this.alert = this.data.alert;
            this.card = this.data.card;
            this.cardOrder = this.data.cardOrder;
            this.conversion = this.data.conversion;
            this.currency = this.data.currency;
            this.fee = this.data.fee;
            this.file = this.data.file;
            this.note = this.data.note;
            this.transaction = this.data.transaction;
            this.redemption = this.data.redemption;
            this.relatedUser = this.data.user;
        }
    }
    join(strings) {
        return strings.join(' ,');
    }
};
ActivityComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
ActivityComponent.propDecorators = {
    activity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
ActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'activity',
        template: _raw_loader_activity_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ActivityComponent);



/***/ }),

/***/ "PDX0":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "t62z":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/activities/activity.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"activity.type\">\n    <!-- Alert -->\n    <ng-container *ngSwitchCase=\"'alert-created'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: alert?.user }\"></ng-container> triggered an alert of type\n        <span class=\"text-uppercase text-green\">{{ alert?.trigger?.type || 'custom' }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'alert-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: alert?.user }\"></ng-container>'s alert\n        <ng-container *ngIf=\"alert?.status; else alertAssignees\"\n            >status has been set to <span class=\"text-uppercase text-green\">{{ alert?.status }}</span></ng-container\n        ><ng-template #alertAssignees> assignees have been updated</ng-template>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'alert-cdd-updated'\">\n        CDD Flag for <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: alert?.user }\"></ng-container>'s alert has been\n        <span class=\"text-uppercase text-green\">{{ alert?.cdd ? 'Enabled' : 'Disabled' }}</span>\n    </ng-container>\n\n    <!-- API Call -->\n    <ng-container *ngSwitchCase=\"'api-call'\">\n        Third-party request to <span class=\"text-green\">{{ data?.name }}</span> calling action <span class=\"text-info\">{{ data?.action }}</span>\n    </ng-container>\n\n    <!-- Authentication -->\n    <ng-container *ngSwitchCase=\"'authentication-succeeded'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> has successfully logged in\n        {{ data?.twoFactor ? 'using 2FA' : '' }} from {{ location ? location.city : '' }}<span *ngIf=\"location?.city\">, </span>\n        {{ location ? location.country + ' ' : '' }} <span class=\"text-info\">({{ ipAddress }})</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'authentication-failed'\">\n        <span class=\"text-info\">{{ ipAddress }}</span> has failed to log in using <span class=\"text-info\">{{ data?.email }}</span>\n        <span *ngIf=\"location?.city\"> from</span> {{ location ? location.city : '' }}<span *ngIf=\"location?.city\">, </span>\n        {{ location ? location.country + ' ' : '' }}\n    </ng-container>\n\n    <!-- Card -->\n    <ng-container *ngSwitchCase=\"'card-created'\">\n        Card <span class=\"text-info\">{{ card?.maskedPan }}</span> of\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> has been created\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'card-updated'\">\n        Card <span class=\"text-info\">{{ card?.maskedPan }}</span> of\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> has been updated\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'card-deleted'\">\n        Card <span class=\"text-info\">{{ card?.maskedPan }}</span> of\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> has been deleted\n    </ng-container>\n\n    <!-- Card Order -->\n    <ng-container *ngSwitchCase=\"'card-order-cancelled'\">\n        Card order\n        <a [routerLink]=\"['/admin/cards/orders']\" [queryParams]=\"{ search: cardOrder?.id }\" (click)=\"$event.stopPropagation()\" class=\"text-info\">{{\n            cardOrder?.id | truncate: false:7:''\n        }}</a>\n        has been cancelled\n    </ng-container>\n\n    <!-- Note -->\n    <ng-container *ngSwitchCase=\"'note-created'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container> wrote a note on\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container> profile\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'note-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container> updated a note on\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container> profile\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'note-deleted'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container> deleted a note on\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container> profile\n    </ng-container>\n\n    <!-- File -->\n    <ng-container *ngSwitchCase=\"'file-created'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container> uploaded a file\n        <ng-container *ngIf=\"note && note.user\">\n            to note for\n            <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: note.user }\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"note && note.alert\">\n            to alert\n            <a\n                class=\"text-green text-uppercase\"\n                [routerLink]=\"['/admin/alerts', '']\"\n                (click)=\"$event.stopPropagation()\"\n                [ngbTooltip]=\"note.alert?.id | truncate: false:7:''\"\n            >\n                {{ note.alert?.trigger?.type }}\n            </a>\n            of\n            <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: note.alert?.user }\"></ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'file-deleted'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container> deleted a file\n        <ng-container *ngIf=\"note\">for a note</ng-container>\n    </ng-container>\n\n    <!-- Conversions -->\n    <ng-container *ngSwitchCase=\"'conversion-created'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> requested a conversion of\n        {{ conversion?.baseTransaction?.amount | amount: conversion?.baseTransaction?.currency?.decimalPlaces }}\n        {{ conversion?.baseTransaction?.currency?.code }} to {{ conversion?.currency?.code }}\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'conversion-updated'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container>'s conversion was updated. Status:\n        {{ conversion?.status?.toUpperCase() }}, converting\n        {{ conversion?.baseTransaction?.amount | amount: conversion?.baseTransaction?.currency?.decimalPlaces }}\n        {{ conversion?.baseTransaction?.currency?.code }} to\n        {{ conversion?.counterTransaction?.amount | amount: conversion?.counterTransaction?.currency?.decimalPlaces }}\n        {{ conversion?.counterTransaction?.currency?.code || conversion?.currency?.code }}\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'conversion-accepted'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> accepted offered conversion\n        {{ conversion?.baseTransaction?.amount | amount: conversion?.baseTransaction?.currency?.decimalPlaces }}\n        {{ conversion?.baseTransaction?.currency?.code }} to\n        {{ conversion?.counterTransaction?.amount | amount: conversion?.counterTransaction?.currency?.decimalPlaces }}\n        {{ conversion?.counterTransaction?.currency?.code }}\n    </ng-container>\n\n    <!-- Currency -->\n    <ng-container *ngSwitchCase=\"'currency-created'\">\n        Currency <span class=\"text-info\">{{ currency?.code }}</span> was created by\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'currency-updated'\">\n        Currency <span class=\"text-info\">{{ currency?.code }}</span>\n        {{\n            data?.patch\n                ? 'has been made ' + ($any(data?.patch).value ? '' : 'non-') + $any(data?.patch).path.substr(1, $any(data?.patch).path.length)\n                : 'was updated'\n        }}\n        by <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'currency-deleted'\">\n        Currency <span class=\"text-info\">{{ currency?.code }}</span> was deleted by\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container>\n    </ng-container>\n\n    <!-- Document -->\n    <ng-container *ngSwitchCase=\"'document-created'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container> uploaded a new\n        <a [routerLink]=\"['/admin/accounts/users', relatedUser?.id]\" (click)=\"$event.stopPropagation()\" [ngbTooltip]=\"file?.id | truncate: false:7:''\"\n            >document</a\n        >\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'document-updated'\">\n        A\n        <a [routerLink]=\"['/admin/accounts/users', relatedUser?.id]\" (click)=\"$event.stopPropagation()\" [ngbTooltip]=\"file?.id | truncate: false:7:''\"\n            >document</a\n        >\n        of <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container> has been\n        <span class=\"text-green\">UPDATED</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'document-deleted'\">\n        A\n        <a [routerLink]=\"['/admin/accounts/users', relatedUser?.id]\" (click)=\"$event.stopPropagation()\" [ngbTooltip]=\"file?.id | truncate: false:7:''\"\n            >document</a\n        >\n        of <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container> has been\n        <span class=\"text-danger\">DELETED</span>\n    </ng-container>\n\n    <!-- Fee -->\n    <ng-container *ngSwitchCase=\"'fee-created'\">\n        Fee <span class=\"text-info text-uppercase\">{{ fee?.method === 'internal' ? '' : fee?.method }} {{ fee?.type }}</span> of\n        <span class=\"text-green\">{{ fee?.currency?.code }}</span> has been set to\n        <span class=\"text-green\"\n            >{{ fee?.relative | percent: '1.2' }} {{ fee?.relative && fee?.fixed ? '+' : '' }}\n            <ng-container *ngIf=\"fee?.fixed\">{{ fee?.fixed | amount }} {{ fee?.currency?.code }}</ng-container></span\n        >\n        <ng-container *ngIf=\"fee?.user\">\n            for <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: fee?.user }\"></ng-container\n        ></ng-container>\n        <ng-container *ngIf=\"fee?.max && fee?.min\">\n            (min <span class=\"text-green\">{{ fee?.min | amount }} {{ fee?.currency?.code }}</span> ; max\n            <span class=\"text-green\">{{ fee?.max | amount }} {{ fee?.currency?.code }}</span\n            >)\n        </ng-container>\n        <ng-container *ngIf=\"!fee?.max && fee?.min\">\n            (min <span class=\"text-green\">{{ fee?.min | amount }} {{ fee?.currency?.code }}</span\n            >)\n        </ng-container>\n        <ng-container *ngIf=\"fee?.max && !fee?.min\">\n            (max <span class=\"text-green\">{{ fee?.max | amount }} {{ fee?.currency?.code }}</span\n            >)\n        </ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'fee-updated'\">\n        Fee <span class=\"text-info text-uppercase\">{{ fee?.method === 'internal' ? '' : fee?.method }} {{ fee?.type }}</span> of\n        <span class=\"text-green\">{{ fee?.currency?.code }}</span> has been updated to\n        <span class=\"text-green\">\n            {{ fee?.relative | percent: '1.2' }} {{ fee?.relative && fee?.fixed ? '+' : '' }}\n            <ng-container *ngIf=\"fee?.fixed\">{{ fee?.fixed | amount }} {{ fee?.currency?.code }}</ng-container>\n        </span>\n        <ng-container *ngIf=\"fee?.user\">\n            for <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: fee?.user }\"> </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"fee?.max && fee?.min\">\n            (min <span class=\"text-green\">{{ fee?.min | amount }} {{ fee?.currency?.code }}</span> ; max\n            <span class=\"text-green\">{{ fee?.max | amount }} {{ fee?.currency?.code }}</span\n            >)\n        </ng-container>\n        <ng-container *ngIf=\"!fee?.max && fee?.min\">\n            (min <span class=\"text-green\">{{ fee?.min | amount }} {{ fee?.currency?.code }}</span\n            >)\n        </ng-container>\n        <ng-container *ngIf=\"fee?.max && !fee?.min\">\n            (max <span class=\"text-green\">{{ fee?.max | amount }} {{ fee?.currency?.code }}</span\n            >)\n        </ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'fee-deleted'\">\n        Fee <span class=\"text-info text-uppercase\">{{ fee?.method === 'internal' ? '' : fee?.method }} {{ fee?.type }}</span> of\n        <span class=\"text-green\">{{ fee?.currency?.code }}</span> has been deleted\n    </ng-container>\n\n    <!-- File -->\n    <ng-container *ngSwitchCase=\"'poi-document-expiry'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container>'s passport\n        <span class=\"text-info\">{{ data?.fileId | truncate: false:7:'' }}</span> is about to expire in\n        <span class=\"text-warning\">{{ data?.reminderType }}</span>\n    </ng-container>\n\n    <!-- Messages -->\n    <ng-container *ngSwitchCase=\"'message-sent'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> has received a\n        <span [innerHTML]=\"data?.confidential ? '<span class=\\'text-green\\'>CONFIDENTIAL</span> ' : ''\"></span> message\n        <span class=\"text-primary\">{{ data?.subject }}</span>\n    </ng-container>\n\n    <!-- Settings -->\n    <ng-container *ngSwitchCase=\"'login-unblocked'\">\n        <span class=\"text-info\">{{ data?.ipAddress }}</span> has been unblocked for login\n    </ng-container>\n\n    <!-- Transactions -->\n    <ng-container *ngSwitchCase=\"'transaction-created'\">\n        <ng-container [ngSwitch]=\"transaction?.type\">\n            <ng-container *ngSwitchCase=\"'deposit'\">\n                <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: counterUser }\"></ng-container> created\n                <a\n                    class=\"text-green text-uppercase\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.method }} deposit</a\n                >\n                of\n                <a\n                    class=\"text-green\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</a\n                >\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'transfer'\">\n                <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> requested to sent\n                <a\n                    class=\"text-green\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</a\n                >\n                to <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: counterUser }\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'withdrawal'\">\n                <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> created\n                <a\n                    class=\"text-green text-uppercase\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.method }} withdrawal</a\n                >\n                of\n                <a\n                    class=\"text-green\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</a\n                >\n            </ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'transaction-processed'\">\n        <ng-container [ngSwitch]=\"transaction?.type\">\n            <ng-container *ngSwitchCase=\"'deposit'\">\n                <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: counterUser }\"></ng-container> completed\n                <a\n                    class=\"text-green text-uppercase\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.method }} deposit</a\n                >\n                of\n                <a\n                    class=\"text-green\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</a\n                >\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'transfer'\">\n                <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> sent\n                <a\n                    class=\"text-green\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</a\n                >\n                to <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: counterUser }\"></ng-container>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'withdrawal'\">\n                <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> completed\n                <a\n                    class=\"text-green text-uppercase\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.method }} withdrawal</a\n                >\n                of\n                <a\n                    class=\"text-green\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</a\n                >\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'mint'\">\n                <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container>\n                {{ activity.severity === 'success' ? 'generated' : 'destroyed' }}\n                <a\n                    class=\"text-green\"\n                    [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n                    (click)=\"$event.stopPropagation()\"\n                    [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n                    >{{ transaction?.amount | amount: transaction?.currency?.decimalPlaces }} {{ transaction?.currency?.code }}</a\n                >\n            </ng-container>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'transaction-updated'\">\n        <ng-container\n            *ngTemplateOutlet=\"userOrAppTemplate; context: transaction?.type === 'deposit' ? { user: counterUser } : { user: baseUser }\"\n        ></ng-container\n        >'s\n        <a\n            class=\"text-green text-uppercase\"\n            [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n            >{{ transaction?.method }} {{ transaction?.type }}</a\n        >\n        has been set to\n        <a\n            class=\"text-uppercase\"\n            [ngClass]=\"transaction?.status === 'cancelled' ? 'text-danger' : 'text-green'\"\n            [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n            >{{ transaction?.status }}</a\n        >\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'transaction-reverted'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: data?.owner\"></ng-container>'s\n        <a\n            class=\"text-green text-uppercase\"\n            [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n            >{{ transaction?.method }} {{ transaction?.type }}</a\n        >\n        has been\n        <a\n            class=\"text-uppercase text-info\"\n            [routerLink]=\"['/admin/banking/transactions', data?.revertedTransaction?.id]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"data?.revertedTransaction?.id | truncate: false:7:''\"\n            >reverted</a\n        >\n    </ng-container>\n\n    <!-- User -->\n    <ng-container *ngSwitchCase=\"'user-created'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> registered successfully\n        <ng-container *ngIf=\"data?.email\"\n            >using <span class=\"text-primary\">{{ data?.email }}</span></ng-container\n        >\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'user-approved'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container>\n        <span\n            [innerHTML]=\"\n                data?.approved\n                    ? ' has been <span class=\\'text-green\\'>APPROVED</span>'\n                    : '\\'s approval has been <span class=\\'text-danger\\'>REVERTED</span>'\n            \"\n        ></span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'user-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container>'s information have been updated\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'status-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container>'s account status changed from\n        <span class=\"text-danger text-uppercase\">{{ data?.oldValue }}</span> to <span class=\"text-primary text-uppercase\">{{ data?.newValue }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'email-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container>'s email changed from\n        <span class=\"text-danger\">{{ data?.oldValue }}</span> to <span class=\"text-primary\">{{ data?.newValue }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'password-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container>'s password has been\n        <span class=\"text-primary\">CHANGED</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'password-restored'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container>'s password has been\n        <span class=\"text-primary\">RESTORED</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'two-factor-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> has\n        <span [ngClass]=\"data?.twoFactor ? 'text-green' : 'text-danger'\">{{ data?.twoFactor ? 'ENABLED' : 'DISABLED' }}</span> two factor\n        authentication\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'permission-updated'\">\n        <ng-container *ngIf=\"relatedUser; else defaultPermissions\">\n            Permissions of <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container></ng-container\n        ><ng-template #defaultPermissions>Default permissions</ng-template> have been <span class=\"text-primary\">UPDATED.</span>\n        <ng-container *ngIf=\"data?.enabled.length > 0\">\n            Enabled <span class=\"text-uppercase\">{{ join(data?.enabled) }}</span\n            >.</ng-container\n        >\n        <ng-container *ngIf=\"data?.disabled.length > 0\">\n            Disabled <span class=\"text-uppercase\">{{ join(data?.disabled) }}</span></ng-container\n        >\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'risk-rating-updated'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: relatedUser }\"></ng-container>'s risk rating has been updated from\n        <span class=\"text-primary text-uppercase\">{{ data?.oldValue }}</span> to <span class=\"text-primary text-uppercase\">{{ data?.newValue }}</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'role-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: relatedUser }\"></ng-container>'s role has been changed to\n        <span class=\"text-primary text-uppercase\">{{ relatedUser?.role || 'None' }}</span>\n    </ng-container>\n\n    <!-- UserChangeRequest -->\n    <ng-container *ngSwitchCase=\"'user-change-request-updated'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> submitted new profile information\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'user-change-request-submitted'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> marked profile as\n        <span class=\"text-green\">READY FOR REVIEW</span>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'user-change-request-processed'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: relatedUser }\"></ng-container>'s change request has been reviewed\n    </ng-container>\n\n    <!-- Wallet Addresses -->\n    <ng-container *ngSwitchCase=\"'wallet-address-generated'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> generated a new wallet address for\n        <span class=\"text-green text-uppercase\">{{ data?.coin }}</span>\n    </ng-container>\n\n    <!-- Referrer Created -->\n    <ng-container *ngSwitchCase=\"'referrer-created'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> has been listed as referrer\n    </ng-container>\n\n    <!-- Referrer Updated -->\n    <ng-container *ngSwitchCase=\"'referrer-updated'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container>'s referrer has been set to\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: counterUser }\"></ng-container>\n    </ng-container>\n\n    <!-- Referrer Deleted -->\n    <ng-container *ngSwitchCase=\"'referrer-deleted'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> has been removed from referrer list\n    </ng-container>\n\n    <!-- Redemption Created -->\n    <ng-container *ngSwitchCase=\"'redemption-created'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: actor }\"></ng-container> has requested a redemption of\n        {{ (redemption?.type === 'silver' ? transaction?.amount : redemption?.totalGrams) | amount: 7 }}\n        {{ (redemption?.type === 'silver' ? 'ounce' : 'gram') | pluralize: redemption?.totalGrams }} {{ redemption?.type | uppercase }} (<a\n            class=\"text-green\"\n            [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n            >{{ transaction?.amount | amount: 7 }} {{ transaction?.currency?.code }}</a\n        >) with {{ redemption?.method }} method.\n    </ng-container>\n\n    <!-- Redemption Updated -->\n    <ng-container *ngSwitchCase=\"'redemption-updated'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: actor }\"></ng-container>'s redemption has been updated to\n        <a\n            class=\"text-uppercase\"\n            [ngClass]=\"redemption?.status === 'processing' ? 'text-primary' : 'text-green'\"\n            [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n            >{{ redemption?.status }}</a\n        >\n        with quantity of {{ (redemption?.type === 'silver' ? transaction?.amount : redemption?.totalGrams) | amount: 7 }}\n        {{ (redemption?.type === 'silver' ? 'ounce' : 'gram') | pluralize: redemption?.totalGrams }} {{ redemption?.type | uppercase }} (<a\n            class=\"text-green\"\n            [routerLink]=\"['/admin/banking/transactions', transaction?.id]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"transaction?.id | truncate: false:7:''\"\n            >{{ transaction?.amount | amount: 7 }} {{ transaction?.currency?.code }}</a\n        >) and {{ redemption?.method }} method.\n    </ng-container>\n\n    <!-- Association Updated -->\n    <ng-container *ngSwitchCase=\"'association-updated'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container>'s association has been set to\n        <span *ngIf=\"!counterUser\">NONE</span>\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: counterUser }\"></ng-container>\n    </ng-container>\n\n    <!-- External ID Updated -->\n    <ng-container *ngSwitchCase=\"'external-id-updated'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container>'s External ID has been set to\n        <span class=\"text-green text-uppercase\">{{ data?.externalId }}</span>\n    </ng-container>\n\n    <!-- Api token -->\n    <ng-container *ngSwitchCase=\"'api-token-created'\">\n        API token <span class=\"text-info\">{{ data?.publicKey }}</span> has been created for\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: data!.user }\"></ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'api-token-revoked'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: data!.user }\"></ng-container>'s API token\n        <span class=\"text-info\">{{ data?.publicKey }}</span> has been revoked\n    </ng-container>\n\n    <!-- Account Bill Charged -->\n    <ng-container *ngSwitchCase=\"'account-bill-charged'\">\n        <ng-container *ngIf=\"data?.amountBilled; else newAccountBill\">\n            <div *ngIf=\"data?.amountBilled > 0; else exempted\">\n                <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> has been charged\n                <span class=\"text-info\">{{ data?.amountBilled | amount }} {{ data?.currencyCode }} </span>\n                for the monthly account fee of {{ data?.invoiceDate | date: 'MMMM YYYY' }}\n            </div>\n        </ng-container>\n        <ng-template #newAccountBill>\n            <div *ngIf=\"data?.billAmount > 0; else exempted\">\n                <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> has been charged\n                <span class=\"text-info\">{{ data?.settledAmount | amount }} {{ data?.settledCurrencyCode }} </span>\n                <span *ngIf=\"data?.settledCurrencyCode !== 'USD'\" class=\"text-gray font-sm\"\n                    >({{ data?.billAmount | amount }} {{ data?.billCurrencyCode }})</span\n                >\n                for the monthly account fee of\n                {{ data?.invoiceDate | date: 'MMMM YYYY' }}\n            </div>\n        </ng-template>\n        <ng-template #exempted>\n            <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> has been exempted for the monthly account fee\n            of {{ data?.invoiceDate | date: 'MMMM YYYY' }}\n        </ng-template>\n    </ng-container>\n\n    <!-- Allocation Created -->\n    <ng-container *ngSwitchCase=\"'allocation-created'\">\n        <ng-container *ngTemplateOutlet=\"userOrAppTemplate; context: { user: baseUser }\"></ng-container> created an allocation of\n        {{ data?.allocation?.baseTransaction?.amount | amount }} {{ data?.allocation?.baseTransaction?.currency?.code }}\n    </ng-container>\n\n    <!-- Card Top Up -->\n    <ng-container *ngSwitchCase=\"'card-topup'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: data?.card?.cardholder }\"></ng-container> has topped up\n        <span class=\"text-success\">{{ data?.amount | amount }} {{ data?.currencyCode }}</span> to\n        <span class=\"text-uppercase text-info\">{{ data?.card?.type }}</span> card {{ data?.card?.maskedPan }} by\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: actor }\"></ng-container>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'card-topup-failed'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: data?.card?.cardholder }\"></ng-container> top up for\n        <span class=\"text-uppercase text-primary\">{{ data?.card?.type }}</span> card <span>{{ data?.card?.maskedPan }}</span> failed due to\n        <span class=\"text-uppercase text-danger\">{{ data?.reason }}</span>\n    </ng-container>\n\n    <!-- Card Unload -->\n    <ng-container *ngSwitchCase=\"'card-unload'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: data?.card?.cardholder }\"></ng-container> has unloaded\n        <span class=\"text-success\">{{ data?.amount | amount }} {{ data?.currencyCode }}</span> from\n        <span class=\"text-uppercase text-info\">{{ data?.card?.type }}</span> card {{ data?.card?.maskedPan }}\n    </ng-container>\n\n    <!-- Trade -->\n    <ng-container *ngSwitchCase=\"'trade-created'\">\n        <ng-container *ngTemplateOutlet=\"userTemplate; context: { user: baseUser }\"></ng-container> executed a\n        <span [ngClass]=\"{ 'text-success': data?.side === 'BUY', 'text-danger': data?.side === 'SELL' }\">{{ data?.side }}</span> order of\n        <span *ngIf=\"data?.side === 'SELL'\">{{ data?.baseTransaction.amount | amount: 7 }} {{ data?.baseTransaction.currencyCode }}</span>\n        <span *ngIf=\"data?.side === 'BUY'\">{{ data?.counterTransaction.amount | amount: 7 }} {{ data?.counterTransaction.currencyCode }}</span>\n        for\n        <span *ngIf=\"data?.side === 'SELL'\">{{ data?.counterTransaction.amount | amount }} {{ data?.counterTransaction.currencyCode }}</span>\n        <span *ngIf=\"data?.side === 'BUY'\">{{ data?.baseTransaction.amount | amount }} {{ data?.baseTransaction.currencyCode }}</span>\n    </ng-container>\n</ng-container>\n\n<!-- Helper -->\n<ng-template let-user=\"user\" #userTemplate>\n    <a\n        [routerLink]=\"['/admin/accounts/users', user?.id || undefined]\"\n        (click)=\"$event.stopPropagation()\"\n        [ngbTooltip]=\"user?.accountNumber | accountNumber\"\n        >{{ user?.name }}</a\n    >\n</ng-template>\n<ng-template let-user=\"user\" #userOrAppTemplate>\n    <ng-container *ngIf=\"user; else app\">\n        <a\n            [routerLink]=\"['/admin/accounts/users', user?.id || undefined]\"\n            (click)=\"$event.stopPropagation()\"\n            [ngbTooltip]=\"user?.accountNumber | accountNumber\"\n            >{{ user?.name }}</a\n        >\n    </ng-container>\n    <ng-template #app>\n        {{ displayName }}\n    </ng-template>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=default~admin-admin-module~dashboard-dashboard-module~user-activities-user-activities-module~user-re~c1f796cf.js.map