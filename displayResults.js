// Функція для відображення результатів
function displayResults() {
  // document.getElementById("header").style.display="block";
  let surveyContainer = document.getElementById("survey-container");
  let dost = proveResults(keys_dost_false, false);
  let res_dost_text = new String();
  if (dost >= 10) {
    document.getElementById("content").style.display = "none";
    res_dost_text = confirm(
      "Отримані результати слід вважати необ'єктивними, тому треба пройти тест знову. Чи бажаєте Ви це зробити?"
    );
    if (res_dost_text) {
      window.location.reload();
    } else {
      this.close();
    }
  } else if (dost <= 9 && dost >= 6) {
    res_dost_text =
      "ДОСТАТНЯ достовірність результатів обстеження. Окремі ознаки соціальної бажаності.";
  } else {
    res_dost_text = "ВИСОКА достовірність результатів обстеження.";
  }
  let pr_plus = proveResults(keys_pr_true, true);
  let pr_minus = proveResults(keys_pr_false, false);
  let pr = pr_plus + pr_minus;
  console.log(pr);
  let kp_plus = proveResults(keys_kp_true, true);
  let kp_minus = proveResults(keys_kp_false, false);
  let kp = kp_plus + kp_minus;
  console.log(kp);
  let mn_plus = proveResults(keys_mn_true, true);
  let mn_minus = proveResults(keys_mn_false, false);
  let mn = mn_plus + mn_minus;
  console.log(mn);
  //-----------Особистісно адаптаційний потенціал (ОАП)----------//
  let oap = pr + kp + mn;
  console.log(oap);
  let oap_sten = new Number();
  let res_oap = new Array();
  let res_oap_text = new String();
  if (oap >= 87) {
    oap_sten = 1;
  } else if (oap <= 86 && oap >= 75) {
    oap_sten = 2;
  } else if (oap <= 74 && oap >= 63) {
    oap_sten = 3;
  } else if (oap <= 62 && oap >= 51) {
    oap_sten = 4;
  } else if (oap <= 50 && oap >= 40) {
    oap_sten = 5;
  } else if (oap <= 39 && oap >= 31) {
    oap_sten = 6;
  } else if (oap <= 30 && oap >= 25) {
    oap_sten = 7;
  } else if (oap <= 24 && oap >= 21) {
    oap_sten = 8;
  } else if (oap <= 20 && oap >= 18) oap_sten = 9;
  else {
    oap_sten = 10;
  }
  if (oap_sten == 1 || oap_sten == 2) {
    res_oap = [4, "НЕДОСТАТНІЙ", "Не"];
  } else if (oap_sten == 3 || oap_sten == 4) {
    res_oap = [3, "ЗАДОВІЛЬНИЙ", "Мінімально"];
  } else if (oap_sten <= 7 && oap_sten >= 5) {
    res_oap = [2, "ДОСТАТНІЙ", "В основному"];
  } else {
    res_oap = [1, "ВИСОКИЙ", "Повністю"];
  }
  res_oap_text = `${res_oap[1]} рівень розвитку адаптаційних можливостей особистості. ${res_oap[2]} відповідає вимогам, що пред'являються до військовослужбовців в умовах бойової діяльності. ${res_oap[0]}-й рівень стійкості до бойового стресу.`;
  //----------------- Поведінкова регуляція (ПР) ------------------//
  let res_pr_text = new String();
  let pr_sten = new Number();
  if (pr >= 57) {
    pr_sten = 1;
  } else if (pr <= 56 && pr >= 46) {
    pr_sten = 2;
  } else if (pr <= 45 && pr >= 35) {
    pr_sten = 3;
  } else if (pr <= 34 && pr >= 27) {
    pr_sten = 4;
  } else if (pr <= 26 && pr >= 19) {
    pr_sten = 5;
  } else if (pr <= 18 && pr >= 13) {
    pr_sten = 6;
  } else if (pr <= 12 && pr >= 9) {
    pr_sten = 7;
  } else if (pr <= 8 && pr >= 6) {
    pr_sten = 8;
  } else if ((pr = 5)) {
    pr_sten = 9;
  } else {
    pr_sten = 10;
  }

  if (pr_sten >= 8) {
    res_pr_text =
      "ВИСОКИЙ рівень нервово-психічної стійкості і поведінкової регуляції. Високий рівень працездатності, у тому числі і в умовах вираженого стресу. Висока толерантність до несприятливих психічних і фізичних навантажень.";
  } else if (pr_sten == 7) {
    res_pr_text =
      "ДОСТАТНЬО ВИСОКИЙ рівень нервово-психічної стійкості і поведінкової регуляції. Достатньо високий рівень працездатності, у тому числі і в ускладнених умовах діяльності. Достатньо висока толерантність до психічних і фізичних навантажень. Достатньо висока стійкість до дії стрес-чинників.";
  } else if (pr_sten == 6) {
    res_pr_text =
      "ДОСТАТНІЙ рівень нервово-психічної стійкості і поведінкової регуляції. Достатній рівень працездатності, у тому числі і в ускладнених умовах діяльності. Достатня толерантність до психічних і фізичних навантажень. Достатня стійкість до дії стрес-чинників.";
  } else if (pr_sten == 5) {
    res_pr_text =
      "В ЦІЛОМУ ДОСТАТНІЙ рівень нервово-психічної стійкості і поведінкової регуляції. Стійкий рівень працездатності у звичних умовах життєдіяльності. При тривалій дії явних психічних навантажень можливо тимчасове погіршення якості діяльності.";
  } else if (pr_sten == 4) {
    res_pr_text =
      "ДЕЩО ПОНИЖЕНИЙ рівень нервово-психічної стійкості і поведінкової регуляції. Нестабільний рівень працездатності, що особливо проявляється в ускладнених умовах діяльності. Адаптація до нових і незвичайних умов життєдіяльності ускладнена і може супроводжуватися тимчасовим погіршенням функціонального стану організму.";
  } else if (pr_sten == 3) {
    res_pr_text =
      "ОКРЕМІ ознаки нервово-психічної нестійкості і порушення поведінкової регуляції. Недостатня толерантність до психічних і фізичних навантажень. Адаптація до нових умов життєдіяльності, як правило, ускладнена і може супроводжуватися тривалим погіршенням функціонального стану організму і професійної працездатності. При надзвичайно високих психічних навантаженнях можливий зрив професійної діяльності.";
  } else if (pr_sten == 2) {
    res_pr_text =
      "ВИРАЖЕНІ ознаки нервово-психічної нестійкості і порушення поведінкової регуляції. Низька толерантність до психічних і фізичних навантажень. Адаптація до нових умов життєдіяльності протікає хворобливо. Можливе тривале і виражене погіршення функціонального стану організму. Рівень професійної працездатності у даний період часу низький. При посиленні психічних навантажень достатньо вірогідний зрив професійної діяльності.";
  } else {
    res_pr_text =
      "Вкрай ВИСОКИЙ рівень нервово-психічної нестійкості. Ознаки граничних нервово-психічних розладів. Вкрай низька толерантність до психічних і фізичних навантажень. Адаптація до нових умов життєдіяльності протікає дуже хворобливо з тривалим і вираженим погіршенням функціонального стану організму. Працездатність у даний період часу різко знижена. Посилення психічних навантажень приводить до зриву професійної діяльності.";
  }

  //------------ Комунікативний потенціал (КП) --------------------//
  let res_kp_text = new String();
  let kp_sten = new Number();
  if (kp >= 23) {
    kp_sten = 1;
  } else if (kp <= 22 && kp >= 20) {
    kp_sten = 2;
  } else if (kp == 19 || kp == 18) {
    kp_sten = 3;
  } else if (kp <= 17 && kp >= 15) {
    kp_sten = 4;
  } else if (kp == 14 || kp == 13) {
    kp_sten = 5;
  } else if (kp == 12 || kp == 11) {
    kp_sten = 6;
  } else if (kp == 10 || kp == 9) {
    kp_sten = 7;
  } else if (kp == 8 || kp == 7) {
    kp_sten = 8;
  } else if (kp == 6) {
    kp_sten = 9;
  } else {
    kp_sten = 10;
  }
  if (kp_sten >= 8) {
    res_kp_text =
      "ВИСОКИЙ рівень комунікативних здібностей. Швидко адаптується у новому колективі. Легко встановлює контакти з оточуючими.У міжособистісному спілкуванні неконфліктний. Завжди адекватно оцінює свою роль і правильно будує міжперсональні взаємостосунки у колективі.";
  } else if (kp_sten == 7) {
    res_kp_text =
      "ДОСТАТЬО ВИСОКИЙ рівень комунікативних здібностей. Достатньо швидко адаптується у новому колективі. При встановленні міжособистісних контактів з оточуючими, як правило, не зазнає труднощів. У спілкуванні не конфліктний. У більшості випадків адекватно оцінює свою роль в колективі. На критику реагує адекватно. Достатня здатність до корекції поведінки.";
  } else if (kp_sten == 6) {
    res_kp_text =
      "ДОСТАТНІЙ рівень комунікативних здібностей. Достатньо швидко адаптується у новому колективі. При встановленні міжособистісних контактів з оточуючими, як правило, не зазнає труднощів. У спілкуванні не конфліктний. У більшості випадків адекватно оцінює свою роль в колективі. На критику реагує адекватно. Достатня здатність до корекції поведінки.";
  } else if (kp_sten == 5) {
    res_kp_text =
      "Рівень комунікативних здібностей СЕРЕДНІЙ. У цілому без особливих ускладнень адаптується до нового колективу. При встановленні міжособистісних контактів з оточуючими іноді може неправильно будувати стратегію своєї поведінки. Разом з тим, до критичних зауважень відноситься адекватно, здатний коригувати свою поведінку. У спілкуванні не конфліктний. Достатньо адекватно оцінює свою роль у колективі.";
  } else if (kp_sten == 4) {
    res_kp_text =
      "ЗАДОВІЛЬНИЙ рівень комунікативних здібностей. На початковому етапі адаптації до нового колективу можуть виникати ускладнення. Не завжди правильно будує міжперсональні взаємостосунки, зважаючи на деяку неадекватність самооцінки. На критичні зауваження на свою адресу в основному реагує адекватно, хоча і дещо хворобливо. В цілому здатний до корекції своєї поведінки.";
  } else if (kp_sten == 3) {
    res_kp_text =
      "ПОНИЖЕНИЙ рівень комунікативних здібностей. Наявність окремих ознак акцентуації характеру. На початковому етапі адаптації до нового колективу виникають значні ускладнення. Міжперсональні взаємостосунки (як по горизонталі, так і по вертикалі) часто будує неправильно. Хворобливо реагує на критику. Недостатньо розвинута здатність до корекції своєї поведінки.";
  } else if (kp_sten == 2) {
    res_kp_text =
      "Рівень комунікативних здібностей НИЗЬКИЙ. Наявність ознак акцентуації характеру. Початковий етап адаптації до нового колективу розтягнутий у часі і, як правило, протікає вельми хворобливо. Часто виникають ускладнення в побудові міжособистісних контактів з оточуючими, зважаючи на наявність неадекватної самооцінки. Схильність до підвищеної конфліктності. Хворобливо реагує на критику. Фіксований на образах, що заподіяні йому оточуючими. Недостатньо розвинута здатність до корекції поведінки.";
  } else {
    res_kp_text =
      "ВКРАЙ НИЗЬКИЙ рівень комунікативних здібностей. Наявність виражених ознак акцентуації характеру. Адаптація до нового колективу протікає тривало і украй хворобливо. Постійно випробовує утруднення в побудові міжособистісних контактів з оточуючими. Високий рівень конфліктності. Колективом, як правило, відкидаємо. Фіксований на образах, заподіяних оточуючими, унаслідок чого схилений до ірраціональних вчинків. Вкрай низька здатність до корекції поведінки.";
  }

  //------------ Моральна нормативність (МН) --------------------//
  let res_mn_text = new String();
  let mn_sten = new Number();
  if (mn >= 17) {
    mn_sten = 1;
  } else if (mn == 16) {
    mn_sten = 2;
  } else if (mn == 15 || mn == 14) {
    mn_sten = 3;
  } else if (mn == 13 || mn == 12) {
    mn_sten = 4;
  } else if (mn == 11 || mn == 10) {
    mn_sten = 5;
  } else if (mn == 9 || mn == 8) {
    mn_sten = 6;
  } else if (mn == 7) {
    mn_sten = 7;
  } else if (mn == 6 || mn == 5) {
    mn_sten = 8;
  } else if (mn == 4) {
    mn_sten = 9;
  } else {
    mn_sten = 10;
  }
  if (mn_sten >= 9) {
    res_mn_text =
      "ДУЖЕ ВИСОКИЙ рівень соціалізації. Суворо орієнтований на загальноприйняті і соціально схвалювані норми поведінки. Суворо дотримується корпоративних вимог. У повсякденній діяльності групові інтереси ставить вище особистісних. Виражені альтруїстські якості.";
  } else if (mn_sten == 8) {
    res_mn_text =
      "ВИСОКИЙ рівень соціалізації. Суворо орієнтований на загальноприйняті і соціально ухвалені норми поведінки. Схильний дотримуватися корпоративних вимог. У повсякденній діяльності групові інтереси ставить вище особистісних.";
  } else if (mn_sten == 7) {
    res_mn_text =
      "ДОСТАТНЬО ВИСОКИЙ рівень соціалізації. Орієнтований на дотримання загальноприйнятих і соціально ухвалених норм поведінки. Дотримується корпоративних вимог. У повсякденній життєдіяльності групові інтереси, як правило, переважають над особистісними інтересами.";
  } else if (mn_sten == 6) {
    res_mn_text =
      "ДОСТАТНІЙ рівень соціалізації. У цілому орієнтований на дотримання загальноприйнятих і соціально ухвалених норм поведінки. У цілому дотримується корпоративних вимог. В повсякденній життєдіяльності групові інтереси, як правило, переважають над особистісними інтересами.";
  } else if (mn_sten == 5) {
    res_mn_text =
      "В ЦІЛОМУ ДОСТАТНІЙ рівень соціалізації. Прагне дотримуватися загальноприйнятих і соціально ухвалених норм поведінки. У повсякденній життєдіяльності групові інтереси, як правило, переважають над особистісними інтересами.";
  } else if (mn_sten == 4) {
    res_mn_text =
      "ЗАДОВІЛЬНИЙ рівень соціалізації. Не завжди орієнтований на дотримання загальноприйнятих і соціально ухвалених норми поведінки. У повсякденній життєдіяльності особистісні інтереси, як правило, переважають над груповими.";
  } else if (mn_sten == 3) {
    res_mn_text =
      "НЕДОСТАТНІЙ рівень соціалізації. В цілому не прагне дотримуватися загальноприйнятих норм поведінки і соціально ухвалених вимог. В повсякденній життєдіяльності особистісні інтереси переважають над груповими.";
  } else if (mn_sten == 2) {
    res_mn_text =
      "НИЗЬКИЙ рівень соціалізації. Не прагне дотримуватися загальноприйнятих норм поведінки. В основному вважає за краще діяти згідно власних планів, не орієнтуючись на думку оточуючих. В повсякденній життєдіяльності переважають егоцентричні тенденції. Особистісні інтереси переважають над інтересами групи. Досягнення особистісних інтересів може здійснювати в обхід існуючих заборон і правил.";
  } else {
    res_mn_text =
      "ВКРАЙ НИЗЬКИЙ рівень соціалізації (значно відмінний від номінальних значень для даної вікової групи). Вважає за краще діяти згідно власних планів, не рахуючись з думкою оточуючих. Особистісні інтереси домінують над груповими. Для досягнення особистісних інтересів ігноруються загальноприйняті норми і правила поведінки.";
  }
  //------------- Військово-професійна спрямованість (ВПС) --------------//
  let vps_plus = proveResults(keys_vps_true, true);
  let vps_minus = proveResults(keys_vps_false, false);
  let vps = vps_plus + vps_minus;
  let res_vps_text = new String();
  let vps_sten = new Number();
  if (vps <= 25 && vps >= 18) {
    vps_sten = 1;
  } else if (vps == 16 || vps == 17) {
    vps_sten = 2;
  } else if (vps == 15 || vps == 14) {
    vps_sten = 3;
  } else if (vps <= 13 && vps >= 11) {
    vps_sten = 4;
  } else if (vps <= 10 && vps >= 8) {
    vps_sten = 5;
  } else if (vps <= 7 && vps >= 5) {
    vps_sten = 6;
  } else if (vps == 4) {
    vps_sten = 7;
  } else if (vps == 3 || vps == 2) {
    vps_sten = 8;
  } else if (vps == 1) {
    vps_sten = 9;
  } else {
    vps_sten = 10;
  }

  if (vps_sten <= 10 && vps_sten >= 8) {
    res_vps_text =
      "ВИСОКИЙ рівень військово-професійної спрямованості. Виражене бажання продовжувати професійну діяльність, у тому числі і в особливих умовах.";
  } else if (vps_sten == 7 || vps == 6) {
    res_vps_text =
      "ДОСТАТНІЙ рівень військово-професійної спрямованості. Стійка орієнтація на продовження професійної діяльності, у тому числі і в особливих умовах.";
  } else if (vps_sten == 5) {
    res_vps_text =
      "В ЦІЛОМУ ДОСТАТНІЙ рівень військово-професійної спрямованості. Орієнтований на продовження професійної діяльності, у тому числі і в особливих умовах.";
  } else if (vps_sten == 4) {
    res_vps_text =
      "НЕДЛСТАТНІЙ рівень військово-професійної спрямованості. Не повною мірою задоволений своєю військовою професійною діяльністю і службовим призначенням. Орієнтація на продовження професійної діяльності сумнівна.";
  } else {
    res_vps_text =
      "НИЗЬКИЙ рівень військово-професійної спрямованості. Не задоволений своєю військовою професійною діяльністю і службовим призначенням.";
  }
  //------------- Схильність до девіантних форм поведінки (ДАП) --------------//
  let dap_plus = proveResults(keys_dap_true, true);
  let dap_minus = proveResults(keys_dap_false, false);
  let dap = dap_plus + dap_minus;
  let res_dap_text = new String();
  let dap_sten = new Number();

  if (dap >= 25) {
    dap_sten = 1;
  } else if (dap <= 24 && dap >= 21) {
    dap_sten = 2;
  } else if (dap <= 20 && dap >= 18) {
    dap_sten = 3;
  } else if (dap <= 17 && dap >= 15) {
    dap_sten = 4;
  } else if (dap <= 14 && dap >= 12) {
    dap_sten = 5;
  } else if (dap == 11 || dap == 10) {
    dap_sten = 6;
  } else if (dap == 9 || dap == 8) {
    dap_sten = 7;
  } else if (dap == 7 || dap == 6) {
    dap_sten = 8;
  } else if (dap == 5 || dap == 4) {
    dap_sten = 9;
  } else {
    dap_sten = 10;
  }

  if (dap_sten <= 10 && dap_sten >= 6) {
    res_dap_text =
      "ВІДСУТНІСТЬ ознак девіантних (аддиктивної і делинквентної) форм поведінки. Відсутність ознак агресивної поведінки відносно оточуючих. Орієнтація на дотримання соціально ухвалених норм поведінки і раціональну побудову міжперсональних взаємостосунків з ровесниками і із старшими за віком.";
  } else if (dap_sten == 5) {
    res_dap_text =
      "В ЦІЛОМУ виражені ознаки девіантних (аддиктивної і делинквентної) форм поведінки ВІДСУТНІ. Відмічається наявність окремих ознак нераціональної побудови міжперсональних взаємостосунків з ровесниками і із старшими за віком. Іноді допускає порушення соціально ухвалених норм поведінки.";
  } else if (dap_sten == 4 || dap_sten == 3) {
    res_dap_text =
      "Наявність ДЕЯКИХ ознак девіантних (аддиктивної і делинквентної) форм поведінки. Наявність агресивних реакцій відносно оточуючих. Схильність до нераціональної побудови міжперсональних взаємостосунків з ровесниками і із старшими за віком. Схильний допускати порушення соціально ухвалених норм поведінки.";
  } else {
    res_dap_text =
      "Наявність ВИРАЗНИХ ознак девіантних (аддиктивної і делинквентної) форм поведінки. Наявність виражених агресивних реакцій відносно оточуючих. Як правило, міжперсональні взаємостосунки з ровесниками і із старшими за віком будує нераціонально. Не орієнтований на дотримання соціально ухвалених норм поведінки.";
  }
  // -----------------Cуїцидальний ризик (СР) -----------------------//
  let sr_plus = proveResults(keys_sr_true, true);
  let sr_minus = proveResults(keys_sr_false, false);
  let sr = sr_plus + sr_minus;
  let res_sr_text = new String();
  let sr_sten = new Number();
  if (sr >= 15) {
    sr_sten = 1;
  } else if (sr <= 14 && sr >= 10) {
    sr_sten = 2;
  } else if (sr <= 9 && sr >= 7) {
    sr_sten = 3;
  } else if (sr == 6 || sr == 5) {
    sr_sten = 4;
  } else if (sr == 4) {
    sr_sten = 5;
  } else if (sr == 3) {
    sr_sten = 6;
  } else if (sr == 2) {
    sr_sten = 7;
  } else if (sr == 1) {
    sr_sten = 8;
  } else {
    sr_sten = 9;
  }

  if (sr_sten <= 10 && sr_sten >= 6) {
    res_sr_text = "ВІДСУТНІСТЬ ознак суїцидального ризику.";
  } else if (sr_sten == 5) {
    res_sr_text =
      "В ЦІЛОМУ виразних ознак суїцидальної схильності НЕ ВИЯВЛЕНО. Наголошується наявність окремих ознак, що свідчать про певні труднощі в міжперсональних взаємостосунках з ровесниками і (або) із старшими по віку.";
  } else if (sr_sten == 4 || sr_sten == 3) {
    res_sr_text =
      "Відзначена наявність ОКРЕМИХ ознак суїцидальної схильності. За наявності затяжної військово-професійної адаптації або труднощів у міжперсональних взаємостосунках з ровесниками і із старшими за віком можуть виникнути думки суїцидальної спрямованості.";
  } else {
    res_sr_text =
      "Відзначена наявність ВИРАЗНИХ ознак суїцидальної схильності. За наявності затяжної військово-професійної адаптації або труднощів в міжперсональних взаємостосунках з ровесниками і із старшими по віку можуть виникнути думки про суїцидальний шантаж або закінчені суїцидальні дії.";
  }
  tableTest();
  surveyContainer.innerHTML = "<h2>Результати опитування:</h2>";
  surveyContainer.innerHTML += `<div class="text-res"><b>Достовірність</b><p>Кількість балів: ${dost}. ${res_dost_text}</p></div>`;
  surveyContainer.innerHTML += `<div class="text-res"><b>Особистісно адаптаційний потенціал (ОАП)</b><p>Кількість стенів: ${oap_sten} (${oap} балів). ${res_oap_text}</p></div>`;
  surveyContainer.innerHTML += `<div class="text-res"><b>Поведінкова регуляція (ПР)</b><p>Кількість стенів: ${pr_sten} (${pr} балів). ${res_pr_text}</p></div>`;
  surveyContainer.innerHTML += `<div class="text-res"><b>Комунікативний потенціал (КП)</b><p>Кількість стенів: ${kp_sten} (${kp} балів). ${res_kp_text}</p></div>`;
  surveyContainer.innerHTML += `<div class="text-res"><b>Моральна нормативність (МН)</b><p>Кількість стенів: ${mn_sten} (${mn} балів). ${res_mn_text}</p></div>`;
  surveyContainer.innerHTML += `<div class="text-res"><b>Військово-професійна спрямованість (ВПС)</b><p>Кількість стенів: ${vps_sten} (${vps} балів). ${res_vps_text}</p></div>`;
  surveyContainer.innerHTML += `<div class="text-res"><b>Схильність до девіантних форм поведінки (ДАП)</b><p>Кількість стенів: ${dap_sten} (${dap} балів). ${res_dap_text}</p></div>`;
  surveyContainer.innerHTML += `<div class="text-res"><b>Cуїцидальний ризик (СР)</b><p>Кількість стенів: ${sr_sten} (${sr} балів). ${res_sr_text}</p></div>`;
  let regex_ = /^([^.])+(?=[.,])/;
  //document.getElementsByTagName("h1").display = 'none';
  let insert_tab_dost_minus = document.getElementById("dost_minus");
  insert_tab_dost_minus.innerHTML = dost;
  let insert_tab_dost_sum = document.getElementById("dost_sum");
  insert_tab_dost_sum.innerHTML = dost;

  let dost_ = res_dost_text.match(regex_)[0];
  let short_text_dost = document.getElementById("dost_text");
  short_text_dost.innerHTML = dost_;

  let insert_tab_pr_plus = document.getElementById("pr_plus");
  insert_tab_pr_plus.innerHTML = pr_plus;
  let insert_tab_pr_minus = document.getElementById("pr_minus");
  insert_tab_pr_minus.innerHTML = pr_minus;

  let insert_tab_pr_sum = document.getElementById("pr_sum");
  insert_tab_pr_sum.innerHTML = pr;
  let insert_tab_pr_sten = document.getElementById("pr_sten");
  insert_tab_pr_sten.innerHTML = pr_sten;
  let insert_tab_pr_text = document.getElementById("pr_text");
  let pr_ = res_pr_text.match(regex_)[0];
  insert_tab_pr_text.innerHTML = pr_;

  let insert_tab_kp_plus = document.getElementById("kp_plus");
  insert_tab_kp_plus.innerHTML = kp_plus;
  let insert_tab_kp_minus = document.getElementById("kp_minus");
  insert_tab_kp_minus.innerHTML = kp_minus;

  let insert_tab_kp_sum = document.getElementById("kp_sum");
  insert_tab_kp_sum.innerHTML = kp;
  let insert_tab_kp_sten = document.getElementById("kp_sten");
  insert_tab_kp_sten.innerHTML = kp_sten;
  let insert_tab_kp_text = document.getElementById("kp_text");
  let kp_ = res_kp_text.match(regex_)[0];
  insert_tab_kp_text.innerHTML = kp_;

  let insert_tab_mn_plus = document.getElementById("mn_plus");
  insert_tab_mn_plus.innerHTML = mn_plus;
  let insert_tab_mn_minus = document.getElementById("mn_minus");
  insert_tab_mn_minus.innerHTML = mn_minus;

  let insert_tab_mn_sum = document.getElementById("mn_sum");
  insert_tab_mn_sum.innerHTML = mn;
  let insert_tab_mn_sten = document.getElementById("mn_sten");
  insert_tab_mn_sten.innerHTML = mn_sten;
  let insert_tab_mn_text = document.getElementById("mn_text");
  let mn_ = res_mn_text.match(regex_)[0];
  insert_tab_mn_text.innerHTML = mn_;

  let insert_tab_oap_sum = document.getElementById("oap_sum");
  insert_tab_oap_sum.innerHTML = oap;
  let insert_tab_oap_sten = document.getElementById("oap_sten");
  insert_tab_oap_sten.innerHTML = oap_sten;
  let insert_tab_oap_text = document.getElementById("oap_text");
  let oap_ = res_oap_text.match(regex_)[0];
  insert_tab_oap_text.innerHTML = oap_;

  let insert_tab_vps_plus = document.getElementById("vps_plus");
  insert_tab_vps_plus.innerHTML = vps_plus;
  let insert_tab_vps_minus = document.getElementById("vps_minus");
  insert_tab_vps_minus.innerHTML = vps_minus;

  let insert_tab_vps_sum = document.getElementById("vps_sum");
  insert_tab_vps_sum.innerHTML = vps;
  let insert_tab_vps_sten = document.getElementById("vps_sten");
  insert_tab_vps_sten.innerHTML = vps_sten;
  let insert_tab_vps_text = document.getElementById("vps_text");
  let vps_ = res_vps_text.match(regex_)[0];
  insert_tab_vps_text.innerHTML = vps_;

  let insert_tab_dap_plus = document.getElementById("dap_plus");
  insert_tab_dap_plus.innerHTML = dap_plus;
  let insert_tab_dap_minus = document.getElementById("dap_minus");
  insert_tab_dap_minus.innerHTML = dap_minus;

  let insert_tab_dap_sum = document.getElementById("dap_sum");
  insert_tab_dap_sum.innerHTML = dap;
  let insert_tab_dap_sten = document.getElementById("dap_sten");
  insert_tab_dap_sten.innerHTML = dap_sten;
  let insert_tab_dap_text = document.getElementById("dap_text");
  let dap_ = res_dap_text.match(regex_)[0];
  insert_tab_dap_text.innerHTML = dap_;

  let insert_tab_sr_plus = document.getElementById("sr_plus");
  insert_tab_sr_plus.innerHTML = sr_plus;
  let insert_tab_sr_minus = document.getElementById("sr_minus");
  insert_tab_sr_minus.innerHTML = sr_minus;

  let insert_tab_sr_sum = document.getElementById("sr_sum");
  insert_tab_sr_sum.innerHTML = sr;
  let insert_tab_sr_sten = document.getElementById("sr_sten");
  insert_tab_sr_sten.innerHTML = sr_sten;
  let insert_tab_sr_text = document.getElementById("sr_text");
  let sr_ = res_sr_text.match(regex_)[0];
  insert_tab_sr_text.innerHTML = sr_;
}
