(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"86ed":function(e,t,i){"use strict";var s=i("970b"),n=i.n(s),r=i("5bc3"),a=i.n(r),c=i("b2f5"),o=i.n(c),u=i("6bfe"),g=function(){function e(t){n()(this,e);var i=u["a"].pObject(t.S3Filestorage);o.a.isEmpty(i)||(this.accessKey=u["a"].pString(i.AccessKey),this.secretKey=u["a"].pString(i.SecretKey),this.region=u["a"].pString(i.Region),this.host=u["a"].pString(i.Host),this.bucketPrefix=u["a"].pString(i.BucketPrefix))}return a()(e,[{key:"saveS3FilestorageSettings",value:function(e){var t=e.accessKey,i=e.secretKey,s=e.region,n=e.host,r=e.bucketPrefix;this.accessKey=t,this.secretKey=i,this.region=s,this.host=n,this.bucketPrefix=r}}]),e}(),f=null;t["a"]={init:function(e){f=new g(e)},saveS3FilestorageSettings:function(e){f.saveS3FilestorageSettings(e)},getS3FilestorageSettings:function(){return{accessKey:f.accessKey,secretKey:f.secretKey,region:f.region,host:f.host,bucketPrefix:f.bucketPrefix}}}},"99f8":function(e,t,i){"use strict";i.r(t);i("c7fe"),i("3119"),i("8da0"),i("b5bb"),i("a2b7");var s=i("86ed");t["default"]={moduleName:"S3Filestorage",requiredModules:[],init:function(e){s["a"].init(e)},getAdminSystemTabs:function(){return[{tabName:"s3-filestorage",title:"S3FILESTORAGE.LABEL_SETTINGS_TAB",component:function(){return Promise.all([i.e(0),i.e(36)]).then(i.bind(null,"b1a5"))}}]},getAdminTenantTabs:function(){return[{tabName:"s3-filestorage",paths:["id/:id/s3-filestorage","search/:search/id/:id/s3-filestorage","page/:page/id/:id/s3-filestorage","search/:search/page/:page/id/:id/s3-filestorage"],title:"S3FILESTORAGE.LABEL_SETTINGS_TAB",component:function(){return Promise.all([i.e(0),i.e(37)]).then(i.bind(null,"13a4"))}}]}}}}]);