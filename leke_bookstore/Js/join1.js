/**
 * Created by GreedyJay on 2017/4/21.
 */
var addressInit = function(_carea,_cmbProvince, _cmbCity, _cmbArea,defaultarea1, defaultProvince, defaultCity, defaultArea)
{
    var area=document.getElementById(_carea);
    var cmbProvince = document.getElementById(_cmbProvince);
    var cmbCity = document.getElementById(_cmbCity);
    var cmbArea = document.getElementById(_cmbArea);
    function cmbSelect(cmb, str)
    {
        for(var i=0; i<cmb.options.length; i++)
        {
            if(cmb.options[i].value == str)
            {
                cmb.selectedIndex = i;
                return;
            }
        }
    }
    function cmbAddOption(cmb, str,str1,obj)
    //传参数时可以传入code，作为option的value值
    {
        var option = document.createElement("OPTION");
        cmb.options.add(option);
        option.innerHTML = str;
        option.value = str1;
        option.obj = obj;
    }

    
    //二级赋值
    function changeArea()
    {
        cmbProvince.options.length = 0;
        cmbProvince.onchange = null;
        if(area.selectedIndex == -1)return;
        var item=area.options[area.selectedIndex].obj;
        for(var i=0;i<item.categoryList.length;i++)
        {
            cmbAddOption(cmbProvince,item.categoryList[i].categoryDisplay,item.categoryList[i].categoryId,item.categoryList[i]);

        }
        cmbSelect(cmbProvince,defaultProvince);
        changeProvince();
        cmbProvince.onchange=changeProvince;
    }
    
    //三级赋值
    function changeProvince()
    {
        cmbCity.options.length = 0;
        cmbCity.onchange = null;
        if(cmbProvince.selectedIndex == -1) return;

        var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
        for(var i=0; i<item.categoryList.length; i++)
        {
            cmbAddOption(cmbCity, item.categoryList[i].categoryDisplay,item.categoryList[i].categoryId ,item.categoryList[i]);
        }
        cmbSelect(cmbCity, defaultCity);
        changeCity();
        cmbCity.onchange = changeCity;
    }
    //最后赋值
    function ahs() {
        var i=0;
    }
    function changeCity()
    {
        cmbArea.options.length = 0;
        if(cmbCity.selectedIndex == -1)return;
        var item = cmbCity.options[cmbCity.selectedIndex].obj;
        for(var i=0; i<item.categoryList.length; i++)
        {
            cmbAddOption(cmbArea, item.categoryList[i].categoryDisplay, item.categoryList[i].categoryId,null);
        }
        cmbSelect(cmbArea, defaultArea);
    }
    //一级赋值
    for(var i=0; i<Data.length; i++)
    {
        //alert(provinceList[i].Allcity[0].name);
        //var mess=provinceList[i].Allcity.join('--');
        //alert(mess);
        //在这儿需要传入第一级联动的code值provinceList[i].code
        cmbAddOption(area, Data[i].categoryDisplay, Data[i].categoryId,Data[i]);
    }
    cmbSelect(area, defaultarea1);
    changeArea();
    area.onchange = changeArea;
};
var Data=[
    {
        "categoryLevel": 1,
        "categoryName": "教材",
        "categoryParent": 0,
        "categoryId": 10000,
        "categoryList": [
            {
                "categoryLevel": 2,
                "categoryName": "教材小学一年级",
                "categoryParent": 10000,
                "categoryId": 10100,
                "categoryList": [
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10100,
                        "categoryId": 10101,
                        "categoryName": "教材小学一年级语文",
                        "categoryDisplay": "语文",
                        "categoryList": [
                            {
                                "categoryLevel": 4,
                                "categoryParent": 10101,
                                "categoryId": 10111,
                                "categoryName": "教材小学一年级语文人教版",
                                "categoryDisplay": "人教版",
                            },
                            {
                                "categoryLevel": 4,
                                "categoryParent": 10101,
                                "categoryId": 10112,
                                "categoryName": "教材小学一年级语文苏版",
                                "categoryDisplay": "苏教版",
                            }
                        ]
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10100,
                        "categoryId": 10102,
                        "categoryName": "教材小学一年级数学",
                        "categoryDisplay": "数学",
                        "categoryList":[
                            {
                                "categoryLevel": 4,
                                "categoryParent": 10102,
                                "categoryId": 10112,
                                "categoryName": "教材小学一年级数学人教版",
                                "categoryDisplay": "人教版",
                            },
                            {
                                "categoryLevel": 4,
                                "categoryParent": 10101,
                                "categoryId": 10122,
                                "categoryName": "教材小学一年级数学苏版",
                                "categoryDisplay": "苏教版",
                            },
                            {
                                "categoryLevel": 4,
                                "categoryParent": 10101,
                                "categoryId": 10132,
                                "categoryName": "教材小学一年级数学同济版",
                                "categoryDisplay": "同济版",
                            }
                        ]
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10100,
                        "categoryId": 10113,
                        "categoryName": "教材小学一年级音乐",
                        "categoryDisplay": "音乐"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10100,
                        "categoryId": 10114,
                        "categoryName": "教材小学一年级体育",
                        "categoryDisplay": "体育"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10100,
                        "categoryId": 10116,
                        "categoryName": "教材小学一年级美术",
                        "categoryDisplay": "美术"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10100,
                        "categoryId": 10109,
                        "categoryName": "教材小学一年级品德与生活",
                        "categoryDisplay": "品德与生活"
                    }
                ],
                "categoryDisplay": "小学一年级"
            },
            {
                "categoryLevel": 2,
                "categoryName": "教材小学二年级",
                "categoryParent": 10000,
                "categoryId": 10200,
                "categoryList": [
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10200,
                        "categoryId": 10201,
                        "categoryName": "教材小学二年级语文",
                        "categoryDisplay": "语文",

                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10200,
                        "categoryId": 10202,
                        "categoryName": "教材小学二年级数学",
                        "categoryDisplay": "数学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10200,
                        "categoryId": 10213,
                        "categoryName": "教材小学二年级音乐",
                        "categoryDisplay": "音乐"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10200,
                        "categoryId": 10214,
                        "categoryName": "教材小学二年级体育",
                        "categoryDisplay": "体育"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10200,
                        "categoryId": 10216,
                        "categoryName": "教材小学二年级美术",
                        "categoryDisplay": "美术"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10200,
                        "categoryId": 10209,
                        "categoryName": "教材小学二年级品德与生活",
                        "categoryDisplay": "品德与生活"
                    }
                ],
                "categoryDisplay": "小学二年级"
            },
            {
                "categoryLevel": 2,
                "categoryName": "教材小学三年级",
                "categoryParent": 10000,
                "categoryId": 10300,
                "categoryList": [
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10301,
                        "categoryName": "教材小学三年级语文",
                        "categoryDisplay": "语文"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10302,
                        "categoryName": "教材小学三年级数学",
                        "categoryDisplay": "数学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10303,
                        "categoryName": "教材小学三年级外语",
                        "categoryDisplay": "外语"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10313,
                        "categoryName": "教材小学三年级音乐",
                        "categoryDisplay": "音乐"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10314,
                        "categoryName": "教材小学三年级体育",
                        "categoryDisplay": "体育"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10316,
                        "categoryName": "教材小学三年级美术",
                        "categoryDisplay": "美术"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10310,
                        "categoryName": "教材小学三年级品德与社会",
                        "categoryDisplay": "品德与社会"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10317,
                        "categoryName": "教材小学三年级科学",
                        "categoryDisplay": "科学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10320,
                        "categoryName": "教材小学三年级综合实践活动",
                        "categoryDisplay": "综合实践活动"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10300,
                        "categoryId": 10318,
                        "categoryName": "教材小学三年级信息技术",
                        "categoryDisplay": "信息技术"
                    }
                ],
                "categoryDisplay": "小学三年级"
            },
            {
                "categoryLevel": 2,
                "categoryName": "教材小学四年级",
                "categoryParent": 10000,
                "categoryId": 10400,
                "categoryList": [
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10401,
                        "categoryName": "教材小学四年级语文",
                        "categoryDisplay": "语文"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10402,
                        "categoryName": "教材小学四年级数学",
                        "categoryDisplay": "数学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10403,
                        "categoryName": "教材小学四年级外语",
                        "categoryDisplay": "外语"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10413,
                        "categoryName": "教材小学四年级音乐",
                        "categoryDisplay": "音乐"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10414,
                        "categoryName": "教材小学四年级体育",
                        "categoryDisplay": "体育"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10416,
                        "categoryName": "教材小学四年级美术",
                        "categoryDisplay": "美术"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10410,
                        "categoryName": "教材小学四年级品德与社会",
                        "categoryDisplay": "品德与社会"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10417,
                        "categoryName": "教材小学四年级科学",
                        "categoryDisplay": "科学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10420,
                        "categoryName": "教材小学四年级综合实践活动",
                        "categoryDisplay": "综合实践活动"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10400,
                        "categoryId": 10418,
                        "categoryName": "教材小学四年级信息技术",
                        "categoryDisplay": "信息技术"
                    }
                ],
                "categoryDisplay": "小学四年级"
            },
            {
                "categoryLevel": 2,
                "categoryName": "教材小学五年级",
                "categoryParent": 10000,
                "categoryId": 10500,
                "categoryList": [
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10501,
                        "categoryName": "教材小学五年级语文",
                        "categoryDisplay": "语文"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10502,
                        "categoryName": "教材小学五年级数学",
                        "categoryDisplay": "数学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10503,
                        "categoryName": "教材小学五年级外语",
                        "categoryDisplay": "外语"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10513,
                        "categoryName": "教材小学五年级音乐",
                        "categoryDisplay": "音乐"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10514,
                        "categoryName": "教材小学五年级体育",
                        "categoryDisplay": "体育"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10516,
                        "categoryName": "教材小学五年级美术",
                        "categoryDisplay": "美术"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10510,
                        "categoryName": "教材小学五年级品德与社会",
                        "categoryDisplay": "品德与社会"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10517,
                        "categoryName": "教材小学五年级科学",
                        "categoryDisplay": "科学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10520,
                        "categoryName": "教材小学五年级综合实践活动",
                        "categoryDisplay": "综合实践活动"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10500,
                        "categoryId": 10518,
                        "categoryName": "教材小学五年级信息技术",
                        "categoryDisplay": "信息技术"
                    }
                ],
                "categoryDisplay": "小学五年级"
            },
            {
                "categoryLevel": 2,
                "categoryName": "教材小学六年级",
                "categoryParent": 10000,
                "categoryId": 10600,
                "categoryList": [
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10601,
                        "categoryName": "教材小学六年级语文",
                        "categoryDisplay": "语文"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10602,
                        "categoryName": "教材小学六年级数学",
                        "categoryDisplay": "数学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10603,
                        "categoryName": "教材小学六年级外语",
                        "categoryDisplay": "外语"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10613,
                        "categoryName": "教材小学六年级音乐",
                        "categoryDisplay": "音乐"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10614,
                        "categoryName": "教材小学六年级体育",
                        "categoryDisplay": "体育"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10616,
                        "categoryName": "教材小学六年级美术",
                        "categoryDisplay": "美术"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10610,
                        "categoryName": "教材小学六年级品德与社会",
                        "categoryDisplay": "品德与社会"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10617,
                        "categoryName": "教材小学六年级科学",
                        "categoryDisplay": "科学"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10620,
                        "categoryName": "教材小学六年级综合实践活动",
                        "categoryDisplay": "综合实践活动"
                    },
                    {
                        "categoryLevel": 3,
                        "categoryParent": 10600,
                        "categoryId": 10618,
                        "categoryName": "教材小学六年级信息技术",
                        "categoryDisplay": "信息技术"
                    }
                ],
                "categoryDisplay": "小学六年级"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 10000,
                "categoryId": 10700,
                "categoryName": "教材初一",
                "categoryDisplay": "初一"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 10000,
                "categoryId": 10800,
                "categoryName": "教材初二",
                "categoryDisplay": "初二"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 10000,
                "categoryId": 10900,
                "categoryName": "教材初三",
                "categoryDisplay": "初三"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 10000,
                "categoryId": 11000,
                "categoryName": "教材高一",
                "categoryDisplay": "高一"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 10000,
                "categoryId": 11100,
                "categoryName": "教材高二",
                "categoryDisplay": "高二"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 10000,
                "categoryId": 11200,
                "categoryName": "教材高三",
                "categoryDisplay": "高三"
            }
        ],
        "categoryDisplay": "教材"
    },
    {
        "categoryLevel": 1,
        "categoryName": "教辅",
        "categoryParent": 0,
        "categoryId": 20000,
        "categoryList": [
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20100,
                "categoryName": "教辅小学一年级",
                "categoryDisplay": "小学一年级"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20200,
                "categoryName": "教辅小学二年级",
                "categoryDisplay": "小学二年级"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20300,
                "categoryName": "教辅小学三年级",
                "categoryDisplay": "小学三年级"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20400,
                "categoryName": "教辅小学四年级",
                "categoryDisplay": "小学四年级"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20500,
                "categoryName": "教辅小学五年级",
                "categoryDisplay": "小学五年级"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20600,
                "categoryName": "教辅小学六年级",
                "categoryDisplay": "小学六年级"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20700,
                "categoryName": "教辅初一",
                "categoryDisplay": "初一"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20800,
                "categoryName": "教辅初二",
                "categoryDisplay": "初二"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 20900,
                "categoryName": "教辅初三",
                "categoryDisplay": "初三"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 21000,
                "categoryName": "教辅高一",
                "categoryDisplay": "高一"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 21100,
                "categoryName": "教辅高二",
                "categoryDisplay": "高二"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 21200,
                "categoryName": "教辅高三",
                "categoryDisplay": "高三"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 25100,
                "categoryName": "教辅小学通用",
                "categoryDisplay": "小学通用"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 25200,
                "categoryName": "教辅初中通用",
                "categoryDisplay": "初中通用"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 20000,
                "categoryId": 25300,
                "categoryName": "教辅高中通用",
                "categoryDisplay": "高中通用"
            }
        ],
        "categoryDisplay": "教辅"
    },
    {
        "categoryLevel": 1,
        "categoryName": "课外",
        "categoryParent": 0,
        "categoryId": 30000,
        "categoryList": [
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30100,
                "categoryName": "课外小说类",
                "categoryDisplay": "小说类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30200,
                "categoryName": "课外文学类",
                "categoryDisplay": "文学类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30300,
                "categoryName": "课外青春文学类",
                "categoryDisplay": "青春文学类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30400,
                "categoryName": "课外传记类",
                "categoryDisplay": "传记类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30500,
                "categoryName": "课外音乐类",
                "categoryDisplay": "音乐类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30600,
                "categoryName": "课外绘画类",
                "categoryDisplay": "绘画类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30700,
                "categoryName": "课外书法类",
                "categoryDisplay": "书法类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30800,
                "categoryName": "课外艺术类",
                "categoryDisplay": "艺术类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 30900,
                "categoryName": "课外励志与成功类",
                "categoryDisplay": "励志与成功类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31000,
                "categoryName": "课外经济类",
                "categoryDisplay": "经济类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31100,
                "categoryName": "课外动漫类",
                "categoryDisplay": "动漫类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31200,
                "categoryName": "课外历史类",
                "categoryDisplay": "历史类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31300,
                "categoryName": "课外心理学类",
                "categoryDisplay": "心理学类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31400,
                "categoryName": "课外政治/军事类",
                "categoryDisplay": "政治/军事类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31500,
                "categoryName": "课外国学/古籍类",
                "categoryDisplay": "国学/古籍类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31600,
                "categoryName": "课外哲学/宗教类",
                "categoryDisplay": "哲学/宗教类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31700,
                "categoryName": "课外科普类",
                "categoryDisplay": "科普类"
            },
            {
                "categoryLevel": 2,
                "categoryParent": 30000,
                "categoryId": 31800,
                "categoryName": "课外体育/运动类",
                "categoryDisplay": "体育/运动类"
            }
        ],
        "categoryDisplay": "课外"
    }
]