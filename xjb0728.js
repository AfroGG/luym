// ##是否自动提现，默认false不自动提现,true开启
// export ksjsbjbdh="false"
// ##是否提现前自动兑换金币，默认false不兑换,true开启
// export kstoken="xxxxxxxxxxxxxxxxxx"
// ##/填写token，必填,就是发你的所谓卡密
// export kstx="true"
// CK变量：ksurl   需要一个登录salt和xxxx.api_st(就是以前的cookie，但是不要前面的参数名，只要值)，ios和安卓都可以抓到，自己搜索salt。
// salt可能在请求的url里面，或者返回体里面（ios应该就是返回体里面）6.4后需要一个did的值
// 格式 三个值用 & 拼接 例：salt&cookie&did 如 38dsdsdsdasdasd&c778sdsssfsafasf5454sdfasd7asd5asd5as4d54asd4as5&ANDROID_xxxxxxx
//
// 新增变量 机器码,填入配置文件
// export postUrl=""
//在https://apijs.ksapisrv.com/rest/nebula/system/stat  抓类似的链接
// export postUrl="mod=xx%28LIO-ANxx00%29&appver=10.1.30.2877&isp=CTCC&ks_ipv6_wlan=xxx:xxx:827:xxx:5f9:9464:c8da:98aa,xx:8a55:827:bb30:5524:a4e2:8563:797&language=zh-cn&ud=xxx&did_tag=7&egid=xxx&thermal=10000&net=WIFI&kcv=1474&app=0&kpf=ANDROID_PHONE&bottom_navigation=true&ver=10.1&oDid=TEST_ANDROID_xxxx&android_os=1&boardPlatform=kirin990&kpn=NEBULA&androidApiLevel=29&newOc=HUAWEI&slh=0&country_code=cn&nbh=122&hotfix_ver=&did_gt=xx&apiInvokeTiming=COLD_START&keyconfig_state=2&sys=ANDROID_10&max_memory=384&cold_launch_time_ms=1657185651664&oc=HUAWEI&sh=2400&app_status=3&ddpi=480&deviceBit=0&browseType=3&power_mode=0&ks_ipv6_cellular=240e:57c:898:f5ca:16ff:7431:9c40:5df8,2409:8155:898:7135:547:ceb3:2346:47d6&socName=HiSilicon%20Kirin%20990&is_background=0&c=HUAWEI&sw=1176&ftt=&apptype=22&is_app_prelaunch=0&abi=arm64&userRecoBit=0&device_abi=arm64&totalMemory=7428&grant_browse_type=AUTHORIZED&is_app_prelaunching=1&iuid=&rdid=ANDROID_xxx&sbh=72&darkMode=false&did=ANDROID_xxxx"
/*
cron "30 2,4,6,8,10,12,14,16,18,20 * * *" xjb0728.js, tag:xjb0728
*/
const $ = new Env('xjb0728');