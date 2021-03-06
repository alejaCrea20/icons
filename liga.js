/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'accesorios-tv': '&#xe900;',
            'accesorios': '&#xe901;',
            'asistente-voz': '&#xe902;',
            'aspiradora': '&#xe903;',
            'audifonos': '&#xe904;',
            'audio-portable': '&#xe905;',
            'audio-hogar': '&#xe906;',
            'icon-audio': '&#xe907;',
            'mouse': '&#xe908;',
            'usb-cable': '&#xe909;',
            'armario': '&#xe90a;',
            'bancos-plataformas': '&#xe90b;',
            'banera': '&#xe90c;',
            'bascula': '&#xe90d;',
            'bebe': '&#xe90e;',
            'bicicleta-estatica': '&#xe90f;',
            'bicicleta': '&#xe910;',
            'bombillo-inteligente': '&#xe911;',
            'bose': '&#xe912;',
            'cable': '&#xe913;',
            'calendario': '&#xe914;',
            'calentador': '&#xe915;',
            'camara-seguridad': '&#xe916;',
            'camara': '&#xe917;',
            'casa-inteligente': '&#xe918;',
            'casco': '&#xe919;',
            'cerraduras': '&#xe91a;',
            'check': '&#xe91b;',
            'climatizacin': '&#xe91c;',
            'cocina': '&#xe91d;',
            'codigos-digitales': '&#xe91e;',
            'colchon': '&#xe91f;',
            'compras-online': '&#xe920;',
            'computador': '&#xe921;',
            'computadores-escritorio': '&#xe922;',
            'conoce-mas': '&#xe923;',
            'control-remoto': '&#xe924;',
            'control-videojuegos': '&#xe925;',
            'cubiertoss': '&#xe926;',
            'portatiles': '&#xe927;',
            'consola-videojuego': '&#xe928;',
            'coleccionables': '&#xe929;',
            'decoracion': '&#xe92a;',
            'deportes': '&#xe92b;',
            'disco-externo': '&#xe92c;',
            'drones': '&#xe92d;',
            'eliminar': '&#xe92e;',
            'eliptica': '&#xe92f;',
            'email': '&#xe930;',
            'sendEmail': '&#xe931;',
            'login-email': '&#xe932;',
            'en-transito': '&#xe933;',
            'estrella': '&#xe934;',
            'decoracion-exterior': '&#xe935;',
            'garantia-extendida': '&#xe936;',
            'impresora': '&#xe937;',
            'habitacion': '&#xe938;',
            'oso-peluche': '&#xe939;',
            'lavadora': '&#xe93a;',
            'licuadora': '&#xe93b;',
            'lantas': '&#xe93c;',
            'maleta': '&#xe93d;',
            'mas': '&#xe93e;',
            'mascota': '&#xe93f;',
            'mercado': '&#xe940;',
            'mesa': '&#xe941;',
            'micro-sd': '&#xe942;',
            'microfono': '&#xe943;',
            'monitores': '&#xe944;',
            'moto': '&#xe945;',
            'camion': '&#xe946;',
            'carro': '&#xe947;',
            'mueble': '&#xe948;',
            'multigimnasio': '&#xe949;',
            'netflix': '&#xe94a;',
            'nintendo': '&#xe94b;',
            'novedad-envio': '&#xe94c;',
            'nutricin-deportiva': '&#xe94d;',
            'nuestras-tiendas': '&#xe94e;',
            'pago-exitoso': '&#xe94f;',
            'paales-adulto': '&#xe950;',
            'patineta': '&#xe951;',
            'pedido-entregado': '&#xe952;',
            'pendiente-pago': '&#xe953;',
            'placha': '&#xe954;',
            'playstation': '&#xe955;',
            'porcentaje': '&#xe956;',
            'precio': '&#xe957;',
            'proyectores': '&#xe958;',
            'pedido-cancelado': '&#xe959;',
            'pedido-realizado': '&#xe95a;',
            'pedido-tramitado': '&#xe95b;',
            'pilates': '&#xe95c;',
            'quitar-filtros': '&#xe95d;',
            'realiza-pago': '&#xe95e;',
            'refigeracion': '&#xe95f;',
            'reviews': '&#xe960;',
            'ropa': '&#xe961;',
            'smartwatch': '&#xe962;',
            'reproductor-video': '&#xe963;',
            'routers': '&#xe964;',
            'runflat': '&#xe965;',
            'secador-cabello': '&#xe966;',
            'seguridad': '&#xe967;',
            'seguro-celulares': '&#xe968;',
            'seguro-vida': '&#xe969;',
            'seguros': '&#xe96a;',
            'sensores': '&#xe96b;',
            'silla': '&#xe96c;',
            'sillon': '&#xe96d;',
            'soat': '&#xe96e;',
            'sofa': '&#xe96f;',
            'software': '&#xe970;',
            'sonos': '&#xe971;',
            'spotify': '&#xe972;',
            'soporte-tv': '&#xe973;',
            'tablet': '&#xe974;',
            'tabletas-digitalizadoras': '&#xe975;',
            'teatro-en-casa': '&#xe976;',
            'telefono-fijo': '&#xe977;',
            'televisores': '&#xe978;',
            'timon-gamer': '&#xe979;',
            'tintas': '&#xe97a;',
            'tripode': '&#xe97b;',
            'trotadora': '&#xe97c;',
            'viajes': '&#xe97d;',
            'videocamaras': '&#xe97e;',
            'videojuegos': '&#xe97f;',
            'web': '&#xe980;',
            'juegos-de-video': '&#xe981;',
            'xbox': '&#xe982;',
            'youtube': '&#xe983;',
            'facebook': '&#xe984;',
            'twitter': '&#xe985;',
            'instagram': '&#xe986;',
            'whatsapp': '&#xe987;',
            'google': '&#xe988;',
            'zona-gamer': '&#xe989;',
            'comedor-mascotas': '&#xe98a;',
            'phones': '&#xe98b;',
            'notebooks': '&#xe98c;',
            'tv': '&#xe98d;',
            'appliances': '&#xe98e;',
            'audio': '&#xe98f;',
            'games': '&#xe990;',
            'furniture': '&#xe991;',
            'schedule': '&#xe992;',
            'toys': '&#xe993;',
            'auto': '&#xe994;',
            'training': '&#xe995;',
            'hardware': '&#xe996;',
            'basket': '&#xe997;',
            'plane': '&#xe998;',
            'discount': '&#xe999;',
            'footer-email': '&#xe99a;',
            'follow': '&#xe99b;',
            'follow-order': '&#xe99c;',
            'payment-in-store': '&#xe99d;',
            'stores': '&#xe99e;',
            'same-day': '&#xe99f;',
            'changes': '&#xe9a0;',
            'delivery-address': '&#xe9a1;',
            'my-orders': '&#xe9a2;',
            'credit-card': '&#xe9a3;',
            'cart': '&#xe9a4;',
            'phone-contact': '&#xe9a5;',
            'customer-contact': '&#xe9a6;',
            'user': '&#xe9a7;',
            'help': '&#xe9a8;',
            'warning': '&#xe9a9;',
            'close': '&#xe9aa;',
            'help2': '&#xe9ab;',
            'lock': '&#xe9ac;',
            'login-code': '&#xe9ad;',
            'offers': '&#xe9ae;',
            'celular': '&#xe9af;',
            'clear': '&#xe9b0;',
            'arrow-up': '&#xe9b1;',
            'arrow-down': '&#xe9b2;',
            'arrow-left-square': '&#xe9b3;',
            'arrow-right-square': '&#xe9b4;',
            'inicio-sesion': '&#xe9b5;',
            'cerrar-sesion': '&#xe9b6;',
            'grid': '&#xe9b7;',
            'filter': '&#xe9b8;',
            'settings': '&#xe9b9;',
            'menu': '&#xe9ba;',
            'topic': '&#xe9bb;',
            'categories': '&#xe9bc;',
            'flecha-A-Z': '&#xe9bd;',
            'flecha-Z-A': '&#xe9be;',
            'flecha-mas-lejos': '&#xe9bf;',
            'flecha-mas-cerca': '&#xe9c0;',
            'edit': '&#xe9c1;',
            'exportar': '&#xe9c2;',
            'searchMobile': '&#xe9c3;',
            'mapa': '&#xe9c4;',
            'catalog': '&#xe9c5;',
            'truck-empty': '&#xe9c6;',
            'truck': '&#xe9c7;',
            'car-audio': '&#xe9c8;',
            'rounded-chat': '&#xe9c9;',
            'rounded-info': '&#xe9ca;',
            'rounded-back': '&#xe9cb;',
            'rounded-arrow-up': '&#xe9cc;',
            'rounded-list': '&#xe9cd;',
            'rounded-position': '&#xe9ce;',
            'rounded-truck': '&#xe9cf;',
            'box': '&#xe9d0;',
            'pin': '&#xe9d1;',
            'calendar': '&#xe9d2;',
            'heart': '&#xe9d3;',
            'heart-without-fill': '&#xe9d4;',
            'star': '&#xe9d5;',
            'search-scrolled': '&#xe9d6;',
            'i-warning': '&#xe9d7;',
            'question': '&#xe9d8;',
            'reload': '&#xe9d9;',
            'back_alt': '&#xe9da;',
            'check_4': '&#xe9db;',
            'boxcheck': '&#xe9dc;',
            'user-nav': '&#xe9dd;',
            'download': '&#xe9de;',
            'pin-rotate': '&#xe9df;',
            'printer': '&#xe9e0;',
            'pencil': '&#xe9e1;',
            'pencil2': '&#xe9e2;',
            'order': '&#xe9e3;',
            'plus': '&#xe9e4;',
            'close-alt': '&#xe9e5;',
            'home': '&#xe9e6;',
            'star-alt': '&#xe9e7;',
            'search': '&#xe9e8;',
            'note': '&#xe9e9;',
            'arrow-both': '&#xe9ea;',
            'share': '&#xe9eb;',
            'invoiceNumber': '&#xe9ec;',
            'pdf': '&#xe9ed;',
            'num': '&#xe9ee;',
            'login-option-sms': '&#xe9ef;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/alk-icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
