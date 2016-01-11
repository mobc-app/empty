var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(){}return a.doLog=function(){for(var b=[],c=0;c<arguments.length;c++)b[c-0]=arguments[c];a.verbose||console.log(b)},a.prototype.load=function(b){var c=null;if(b){try{c=localStorage.getItem(b)}catch(d){c="",a.doLog("lS::load::error")}try{c=JSON.parse(c)}catch(d){a.doLog("lS::load::parse error")}}return a.doLog("lS::load",b,"=",c),c},a.prototype.save=function(b,c){b&&(angular.isObject(c)&&(c=JSON.stringify(c)),localStorage.setItem(b,c),a.doLog("lS::save:saved",b,"=",c))},a.prototype.del=function(b){b&&(localStorage.removeItem(b),a.doLog("lS::del:removed",b))},a.prototype.clearAll=function(){localStorage.clear(),a.doLog("lS::del:clear all")},a.verbose=!0,a.$inject=[],a}();b.ApiLocalstorage=c,a.registerService("serviceApiLocalstorage",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(){}return a.$inject=[],a}();b.AppInit=c,a.registerService("serviceAppInit",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function b(b,c){var d=this;this.$rootScope=b,this.$window=c,this.hasInit=!1,this.isCordova=!1,this.isLogin=!1,this.accountType=0,this.currLang="de",this.defLang="de",this.app=a.datas.app,this.menus=a.datas.menus,this.languages=a.datas.languages,this.homePage=this.app.global.pages.menu?this.app.global.pages.menu+"."+this.app.global.pages.home:this.app.global.pages.home,this.startPage=this.app.global.pages.menu?this.app.global.pages.menu+"."+this.app.global.pages.start:this.app.global.pages.start,this.medias={sm:"(max-width:767px)","sm-portrait":"(max-width:767px) and (orientation: portrait)","sm-landscape":"(max-width:767px) and (orientation: landscape)",md:"(min-width:768px) and (max-width:1280px)","md-portrait":"(min-width:768px) and (max-width:1280px) and (orientation: portrait)","md-landscape":"(min-width:768px) and (max-width:1280px) and (orientation: landscape)",lg:"(min-width:1281px)","lg-portrait":"(min-width:1281px) and (orientation: portrait)","lg-landscape":"(min-width:1281px) and (orientation: landscape)"},this.mediaCache={},this.isCordova=!(!c.cordova&&!c.PhoneGap&&!c.phonegap),this.app.global.pages.start&&"modal"===this.app.global.views[this.app.global.pages.start].type&&(this.startPage=this.app.global.pages.start),b.$on("$rootScope.resize",function(){d.reCalcCache()})}return b.prototype.getResStr=function(a,b,c){var d=c?"":b;if(this.languages[a]){var e=this.languages[a][this.currLang];e||this.currLang===this.defLang||(e=this.languages[a][this.defLang]),e&&e[b]&&(d=e[b])}return d},b.prototype.getAppResStr=function(a,b){return this.getResStr("app-global",a,b)},b.prototype.setBadge=function(a,b){var c=this,d=this.menus;Object.getOwnPropertyNames(d).forEach(function(d){c.menus[d].items.list.forEach(function(c){c.name===a&&c.hasBadge&&(c.countBadge=b)})})},b.prototype.reCalcCache=function(){for(var a in this.mediaCache)this.mediaCache[a]=window.matchMedia(a).matches},b.prototype.getFullHeight=function(){return this.$window.innerHeight},b.prototype.getFullWidth=function(){return this.$window.innerWidth},b.prototype.isMedia=function(a){var b=this;if(!a)return!0;var c=!1,d="",e=a.split("+").length-1;return a.replace(" ","").split("+").forEach(function(a,c){d+=b.medias[a]?b.medias[a]:a,d+=c!==e?" , ":""}),c=this.mediaCache[d]?this.mediaCache[d]:this.mediaCache[d]=this.$window.matchMedia(d).matches},b.$inject=["$rootScope","$window"],b}();b.Data=c,a.registerService("serviceData",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a){this.backdrop=a}return a.prototype.show=function(){this.backdrop.retain(),a.counter++},a.prototype.hide=function(){a.counter&&(this.backdrop.release(),a.counter--)},a.prototype.hideAll=function(){for(var b=a.counter,c=0;b>c;c++)this.hide()},a.prototype.getCount=function(){return a.counter},a.counter=0,a.$inject=["$ionicBackdrop"],a}();b.IonicBackdrop=c,a.registerService("serviceIonicBackdrop",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a){this.history=a}return a.prototype.viewHistory=function(){return this.history.viewHistory()},a.prototype.currentView=function(){return this.history.currentView()},a.prototype.currentHistoryId=function(){return this.history.currentHistoryId()},a.prototype.setCurrentTitle=function(a){return this.history.currentTitle(a)},a.prototype.getCurrentTitle=function(){return this.history.currentTitle()},a.prototype.backView=function(){return this.history.backView()},a.prototype.backTitle=function(){return this.history.backTitle()},a.prototype.forwardView=function(){return this.history.forwardView()},a.prototype.currentStateName=function(){return this.history.currentStateName()},a.prototype.goBack=function(){this.history.goBack()},a.prototype.clearHistory=function(){this.history.clearHistory()},a.prototype.clearCache=function(){this.history.clearCache()},a.prototype.setOptionAnimate=function(a){this.history.nextViewOptions({disableAnimate:a})},a.prototype.setOptionBack=function(a){this.history.nextViewOptions({disableBack:a})},a.prototype.setOptionRoot=function(a){this.history.nextViewOptions({historyRoot:a})},a.$inject=["$ionicHistory"],a}();b.IonicHistory=c,a.registerService("serviceIonicHistory",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a){this.loading=a}return a.prototype.show=function(b){this.loading.hide(),a.isVisible=!0,this.loading.show({template:b,noBackdrop:!1,delay:0})},a.prototype.hide=function(){this.loading.hide()},a.isVisible=!1,a.$inject=["$ionicLoading"],a}();b.IonicLoading=c,a.registerService("serviceIonicLoading",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a){this.modal=a}return a.prototype.create=function(b,c){var d=this;return a.handle[b]?void this.show(b):void this.modal.fromTemplateUrl(b+".html",{scope:c&&c.scope,animation:c&&c.animation||"slide-in-up",focusFirstInput:c&&"undefined"!=typeof c.focusFirstInput?c.focusFirstInput:!1,backdropClickToClose:c&&"undefined"!=typeof c.backdropClickToClose?c.backdropClickToClose:!0,hardwareBackButtonClose:c&&"undefined"!=typeof c.hardwareBackButtonClose?c.hardwareBackButtonClose:!0}).then(function(c){~b.indexOf("_modal")||(a.handle.push(b),a.handle[b]=c,d.show(b))})},a.prototype.show=function(b){a.handle[b]&&a.handle[b].show()},a.prototype.isShown=function(b){var c=!1;return a.handle[b]&&(c=a.handle[b].isShown()),c},a.prototype.hide=function(b){a.handle[b]&&a.handle[b].hide()},a.prototype.destroy=function(b){a.handle[b]&&(a.handle[b].hide(),a.handle[b].remove(),a.handle[b]=null,delete a.handle[b],a.handle.splice(a.handle.indexOf(b),1))},a.handle=[],a.$inject=["$ionicModal"],a}();b.IonicModal=c,a.registerService("serviceIonicModal",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a){this.navbar=a}return a.prototype.align=function(a,b){b?this.navbar.$getByHandle(b).align(a):this.navbar.align(a)},a.prototype.setBackButton=function(a,b){b?this.navbar.$getByHandle(b).showBackButton(a):this.navbar.showBackButton(a)},a.prototype.getBackButtonShow=function(a){return a?this.navbar.$getByHandle(a).showBackButton():this.navbar.showBackButton()},a.prototype.showBackButton=function(a){a?this.navbar.$getByHandle(a).showBackButton(!0):this.navbar.showBackButton(!0)},a.prototype.hideBackButton=function(a){a?this.navbar.$getByHandle(a).showBackButton(!1):this.navbar.showBackButton(!1)},a.prototype.setBar=function(a,b){b?this.navbar.$getByHandle(b).showBar(!1):this.navbar.showBar(!1)},a.prototype.getBarShow=function(a){return a?this.navbar.$getByHandle(a).showBar():this.navbar.showBar()},a.prototype.showBar=function(a){a?this.navbar.$getByHandle(a).showBar(!0):this.navbar.showBar(!0)},a.prototype.hideBar=function(a){a?this.navbar.$getByHandle(a).showBar(!1):this.navbar.showBar(!1)},a.prototype.setTitle=function(a,b){b?this.navbar.$getByHandle(b).title(a):this.navbar.title(a)},a.$inject=["$ionicNavBarDelegate"],a}();b.IonicNavBar=c,a.registerService("serviceIonicNavBar",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a){this.popover=a}return a.prototype.create=function(b,c){a.handle[b]&&this.destroy(b),this.popover.fromTemplateUrl(b+".html",{scope:c&&c.scope,focusFirstInput:c&&"undefined"!=typeof c.focusFirstInput?c.focusFirstInput:!1,backdropClickToClose:c&&"undefined"!=typeof c.backdropClickToClose?c.backdropClickToClose:!0,hardwareBackButtonClose:c&&"undefined"!=typeof c.hardwareBackButtonClose?c.hardwareBackButtonClose:!0}).then(function(c){a.handle.push(b),a.handle[b]=c})},a.prototype.show=function(b,c){angular.element(c.srcElement);a.handle[b]&&a.handle[b].show(c)},a.prototype.isShown=function(b){var c=!1;return a.handle[b]&&(c=a.handle[b].isShown()),c},a.prototype.hide=function(b){a.handle[b]&&a.handle[b].hide()},a.prototype.destroy=function(b){a.handle[b]&&(a.handle[b].hide(),a.handle[b].remove(),delete a.handle[b],a.handle.splice(a.handle.indexOf(b),1))},a.handle=[],a.$inject=["$ionicPopover"],a}();b.IonicPopover=c,a.registerService("serviceIonicPopover",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a,b){this.$rootScope=a,this.popup=b}return a.prototype.confirmNoYes=function(a,b){this.popup.confirm({title:"Bitte Bestätigen",template:a,cancelText:"Nein",okText:"Ja",okType:"button-energized"}).then(function(a){b&&b(a)})},a.prototype.info=function(a,b){this.popup.alert({title:"Information",subTitle:"",template:a,okType:"button-energized"}).then(function(a){b&&b(a)})},a.prototype.alert=function(a,b){this.popup.alert({title:"Fehler",subTitle:"",template:a,okType:"button-energized"}).then(function(a){b&&b(a)})},a.prototype.prompt=function(a,b,c){var d=this.$rootScope.$new(!0);d.data={},d.data.response=b,this.popup.prompt({title:a,scope:d,buttons:[{text:"Abbruch"},{text:"OK",type:"button-energized",onTap:function(){return d.data.response}}]}).then(function(a){c(a)})},a.$inject=["$rootScope","$ionicPopup"],a}();b.IonicPopup=c,a.registerService("serviceIonicPopup",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a,b){this.scroll=a,this.$timeout=b}return a.prototype.resize=function(a){var b=this;a?this.$timeout(function(){b.scroll.$getByHandle(a).resize()},250,!0):this.$timeout(function(){b.scroll.resize()},250,!0)},a.prototype.scrollTop=function(a,b){b?this.scroll.$getByHandle(b).scrollTop(a):this.scroll.scrollTop(a)},a.prototype.scrollBottom=function(a,b){b?this.scroll.$getByHandle(b).scrollBottom(a):this.scroll.scrollBottom(a)},a.prototype.scrollTo=function(a,b,c,d){d?this.scroll.$getByHandle(d).scrollTo(a,b,c):this.scroll.scrollTo(a,b,c)},a.prototype.scrollBy=function(a,b,c,d){d?this.scroll.$getByHandle(d).scrollBy(a,b,c):this.scroll.scrollBy(a,b,c)},a.prototype.zoomTo=function(a,b,c,d,e){e?this.scroll.$getByHandle(e).zoomTo(a,d,b,c):this.scroll.zoomTo(a,d,b,c)},a.prototype.zoomBy=function(a,b,c,d,e){e?this.scroll.$getByHandle(e).zoomBy(a,d,b,c):this.scroll.zoomBy(a,d,b,c)},a.prototype.getScrollPosition=function(a){return a?this.scroll.$getByHandle(a).getScrollPosition():this.scroll.getScrollPosition()},a.prototype.anchorScroll=function(a,b){b?this.scroll.$getByHandle(b).anchorScroll(a):this.scroll.anchorScroll(a)},a.prototype.getScrollView=function(a){return a?this.scroll.$getByHandle(a).getScrollView():this.scroll.getScrollView()},a.$inject=["$ionicScrollDelegate","$timeout"],a}();b.IonicScroll=c,a.registerService("serviceIonicScroll",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a,b){var c=this;this.$rootScope=a,this.sideMenu=b,this.asideMin="1024px",this.aside=!1,this.setAsideMin(1024),a.$on("$ionicExposeAside",function(a,b){c.aside=b})}return a.prototype.setAsideMin=function(a){this.asideMin=a.toString()+"px",ionic.trigger("resize",{target:window})},a.prototype.toggleLeft=function(a){this.aside||(a?this.sideMenu.$getByHandle(a).toggleLeft():this.sideMenu.toggleLeft())},a.prototype.toggleRight=function(a){this.aside||(a?this.sideMenu.$getByHandle(a).toggleRight():this.sideMenu.toggleRight())},a.prototype.openLeft=function(a){this.aside||(a?this.sideMenu.$getByHandle(a).toggleLeft(!0):this.sideMenu.toggleLeft(!0))},a.prototype.openRight=function(a){this.aside||(a?this.sideMenu.$getByHandle(a).toggleRight(!0):this.sideMenu.toggleRight(!0))},a.prototype.closeLeft=function(a){this.aside||(a?this.sideMenu.$getByHandle(a).toggleLeft(!1):this.sideMenu.toggleLeft(!1))},a.prototype.closeRight=function(a){this.aside||(a?this.sideMenu.$getByHandle(a).toggleRight(!1):this.sideMenu.toggleRight(!1))},a.prototype.isOpen=function(a){return a?this.sideMenu.$getByHandle(a).isOpenLeft()||this.sideMenu.$getByHandle(a).isOpenRight()||this.aside:this.sideMenu.isOpenLeft()||this.sideMenu.isOpenRight()||this.aside},a.prototype.isOpenLeft=function(a){return a?this.sideMenu.$getByHandle(a).isOpenLeft()||this.aside:this.sideMenu.isOpenLeft()||this.aside},a.prototype.isOpenRight=function(a){return a?this.sideMenu.$getByHandle(a).isOpenRight()||this.aside:this.sideMenu.isOpenRight()||this.aside},a.prototype.getOpenRatio=function(a){return a?this.sideMenu.$getByHandle(a).getOpenRatio():this.sideMenu.getOpenRatio()},a.prototype.getCanDragContent=function(a){return a?this.sideMenu.$getByHandle(a).canDragContent():this.sideMenu.canDragContent()},a.prototype.setCanDragContent=function(a,b){b?this.sideMenu.$getByHandle(b).canDragContent(a):this.sideMenu.canDragContent(a)},a.$inject=["$rootScope","$ionicSideMenuDelegate"],a}();b.IonicSideMenu=c,a.registerService("serviceIonicSideMenu",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a,b){this.slideBox=a,this.$timeout=b}return a.prototype.update=function(a){var b=this;a?this.$timeout(function(){b.slideBox.$getByHandle(a).update()},1050,!0):this.$timeout(function(){b.slideBox.update()},1050,!0)},a.prototype.slide=function(a,b,c){c?this.slideBox.$getByHandle(c).slide(a,b):this.slideBox.slide(a,b)},a.prototype.getEnableSlide=function(a){return a?this.slideBox.$getByHandle(a).enableSlide():this.slideBox.enableSlide()},a.prototype.setEnableSlide=function(a,b){b?this.slideBox.$getByHandle(b).enableSlide(a):this.slideBox.enableSlide(a)},a.prototype.previous=function(a){a?this.slideBox.$getByHandle(a).previous():this.slideBox.previous()},a.prototype.next=function(a){a?this.slideBox.$getByHandle(a).next():this.slideBox.next()},a.prototype.stop=function(a){a?this.slideBox.$getByHandle(a).stop():this.slideBox.stop()},a.prototype.start=function(a){a?this.slideBox.$getByHandle(a).start():this.slideBox.start()},a.prototype.currentIndex=function(a){return a?this.slideBox.$getByHandle(a).currentIndex():this.slideBox.currentIndex()},a.prototype.slidesCount=function(a){return a?this.slideBox.$getByHandle(a).slidesCount():this.slideBox.slidesCount()},a.$inject=["$ionicSlideBoxDelegate","$timeout"],a}();b.IonicSlideBox=c,a.registerService("serviceIonicSlideBox",c)}(b=a.service||(a.service={}))}(app||(app={}));var app;!function(a){var b;!function(b){"use strict";var c=function(){function a(a,b,c,d,e,f,g,h,i,j){this.history=a,this.loading=b,this.navBar=c,this.popup=d,this.modal=e,this.popover=f,this.scroll=g,this.sideMenu=h,this.slideBox=i,this.backdrop=j}return a.$inject=["serviceIonicHistory","serviceIonicLoading","serviceIonicNavBar","serviceIonicPopup","serviceIonicModal","serviceIonicPopover","serviceIonicScroll","serviceIonicSideMenu","serviceIonicSlideBox","serviceIonicBackdrop"],a}();b.IonicWrapper=c,a.registerService("serviceIonicWrapper",c)}(b=a.service||(a.service={}))}(app||(app={}));