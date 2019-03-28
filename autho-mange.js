/*
 * clientName: All clients
 * Pass all corporate email addresses
 */
function (user,context,callback) {
    // This is the last rule check if clientName is not on the "special rules" list
    // If clientName is on the list skip default domain check, because this app has custom rule check
    var allowedClientName = [
      'TMS',
      'TMS Staging',
      'ExitPolls App',
      'ExitPolls App Stage'
     ];
    /*for (var j = 0, len = allowedClientName.length; j < len; j++) {
      if(allowedClientName[i].test(context.clientName)) {
        // Override domain checking, it has already been checked
        return callback(null, user, context);
      }
    }*/
    if(allowedClientName.indexOf(context.clientName) !== -1) {
      // Override domain checking, it has already been checked
      return callback(null, user, context);
    }
    var allowed_domains = [
      'deliveryhero.com',
      'deliveryhero.fi',
      'lieferheld.de',
      'foodora.com',
      'foodora.ca',
      'foodora.de',
      'foodora.at',
      'foodora.no',
      'foodpanda.in',
      'foodpanda.bg',
      'foodpanda.pk',
      'foodpanda.ro',
      'foodpanda.hk',
      'foodpanda.sg',
      'foodpanda.tw',
      'foodpanda.co.th',
      'pizza.de',
      'clickdelivery.com',
      'clickdelivery.gr',
      'e-food.com',
      'e-food.gr',
      'pizzaportal.pl',
      'talabat.com',
      'volo.de',
      'pedidosya.com',
      'rgpkorea.co.kr',
      '9cookies.com',
      'damejidlo.cz',
      'deliveryhero.at',
      'ch.foodarena.net',
      'deliveryhero.com.au',
      'onlinepizza.se',
      'yemeksepeti.com',
      'foodpanda.com',
      'otlob.com',
      'pauza.hr',
      'netpincer.com',
      'donesi.com',
      'pizza.hu',
      'hipmenu.ro',
      'hungerstation.com',
      'appetito24.com',
      'trycarriage.com'
    ],
    userHasAccess=false;
  
    // Is email in allowed domains list?
    for (var i = 0, len = allowed_domains.length; i < len; i++) {
      if(RegExp("^[^@\\s]+@"+allowed_domains[i]+"$","i").test(user.email)) {
        userHasAccess=true;
        break;
      }
    }
  
    if(userHasAccess===true) {
      return callback(null, user, context);
    }
    else {
      return callback(new UnauthorizedError('General rule. Access denied'));
    }
  }