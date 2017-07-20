/**
 * Created by GreedyJay on 2017/4/10.
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

    function cmbAddOption(cmb, str,obj)
    //传参数时可以传入code，作为option的value值
    {
        var option = document.createElement("OPTION");
        cmb.options.add(option);
        option.innerHTML = str;
        /*option.value = code;*/
        option.obj = obj;
    }

    //二级赋值
    function changeArea()
    {
        cmbProvince.options.length = 0;
        cmbProvince.onchange = null;
        if(area.selectedIndex == -1)return;
        var item=area.options[area.selectedIndex].obj;
        for(var i=0;i<item.Allcity.length;i++)
        {
            cmbAddOption(cmbProvince,item.Allcity[i].name,item.Allcity);
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
        for(var i=0; i<item[cmbProvince.selectedIndex].cityList.length; i++)
        {
            cmbAddOption(cmbCity, item[cmbProvince.selectedIndex].cityList[i].name, item[cmbProvince.selectedIndex].cityList[i]);
        }
        cmbSelect(cmbCity, defaultCity);
        changeCity();
        cmbCity.onchange = changeCity;
    }

    //最后四级赋值
    function changeCity()
    {
        cmbArea.options.length = 0;
        if(cmbCity.selectedIndex == -1)return;
        var item = cmbCity.options[cmbCity.selectedIndex].obj;
        for(var i=0; i<item.areaList.length; i++)
        {
            cmbAddOption(cmbArea, item.areaList[i], null);
        }
        cmbSelect(cmbArea, defaultArea);
    }

    //一级赋值
    for(var i=0; i<provinceList.length; i++)
    {
        //alert(provinceList[i].Allcity[0].name);
        //var mess=provinceList[i].Allcity.join('--');
        //alert(mess);
        //在这儿需要传入第一级联动的code值provinceList[i].code
        cmbAddOption(area, provinceList[i]._area, provinceList[i]);
    }
    cmbSelect(area, defaultarea1);
    changeArea();
    area.onchange = changeArea;
}
var provinceList = [
    {_area:"华东地区",Allcity:[

            {name:'山东', cityList:[
                {name:'济南市', areaList:['市辖区','历下区','市中区','槐荫区','天桥区','历城区','长清区','平阴县','济阳县','商河县','章丘市']},
                {name:'青岛市', areaList:['市辖区','市南区','市北区','四方区','黄岛区','崂山区','李沧区','城阳区','胶州市','即墨市','平度市','胶南市','莱西市']},
                {name:'淄博市', areaList:['市辖区','淄川区','张店区','博山区','临淄区','周村区','桓台县','高青县','沂源县']},
                {name:'枣庄市', areaList:['市辖区','市中区','薛城区','峄城区','台儿庄区','山亭区','滕州市']},
                {name:'东营市', areaList:['市辖区','东营区','河口区','垦利县','利津县','广饶县']},
                {name:'烟台市', areaList:['市辖区','芝罘区','福山区','牟平区','莱山区','长岛县','龙口市','莱阳市','莱州市','蓬莱市','招远市','栖霞市','海阳市']},
                {name:'潍坊市', areaList:['市辖区','潍城区','寒亭区','坊子区','奎文区','临朐县','昌乐县','青州市','诸城市','寿光市','安丘市','高密市','昌邑市']},
                {name:'济宁市', areaList:['市辖区','市中区','任城区','微山县','鱼台县','金乡县','嘉祥县','汶上县','泗水县','梁山县','曲阜市','兖州市','邹城市']},
                {name:'泰安市', areaList:['市辖区','泰山区','岱岳区','宁阳县','东平县','新泰市','肥城市']},
                {name:'威海市', areaList:['市辖区','环翠区','文登市','荣成市','乳山市']},
                {name:'日照市', areaList:['市辖区','东港区','岚山区','五莲县','莒　县']},
                {name:'莱芜市', areaList:['市辖区','莱城区','钢城区']},
                {name:'临沂市', areaList:['市辖区','兰山区','罗庄区','河东区','沂南县','郯城县','沂水县','苍山县','费　县','平邑县','莒南县','蒙阴县','临沭县']},
                {name:'德州市', areaList:['市辖区','德城区','陵　县','宁津县','庆云县','临邑县','齐河县','平原县','夏津县','武城县','乐陵市','禹城市']},
                {name:'聊城市', areaList:['市辖区','东昌府区','阳谷县','莘　县','茌平县','东阿县','冠　县','高唐县','临清市']},
                {name:'滨州市', areaList:['市辖区','滨城区','惠民县','阳信县','无棣县','沾化县','博兴县','邹平县']},
                {name:'荷泽市', areaList:['市辖区','牡丹区','曹　县','单　县','成武县','巨野县','郓城县','鄄城县','定陶县','东明县']}
            ]},

            {name:'江苏', cityList:[
                {name:'南京市', areaList:['市辖区','玄武区','白下区','秦淮区','建邺区','鼓楼区','下关区','浦口区','栖霞区','雨花台区','江宁区','六合区','溧水县','高淳县']},
                {name:'无锡市', areaList:['市辖区','崇安区','南长区','北塘区','锡山区','惠山区','滨湖区','江阴市','宜兴市']},
                {name:'徐州市', areaList:['市辖区','鼓楼区','云龙区','九里区','贾汪区','泉山区','丰　县','沛　县','铜山县','睢宁县','新沂市','邳州市']},
                {name:'常州市', areaList:['市辖区','天宁区','钟楼区','戚墅堰区','新北区','武进区','溧阳市','金坛市']},
                {name:'苏州市', areaList:['市辖区','沧浪区','平江区','金阊区','虎丘区','吴中区','相城区','常熟市','张家港市','昆山市','吴江市','太仓市']},
                {name:'南通市', areaList:['市辖区','崇川区','港闸区','海安县','如东县','启东市','如皋市','通州市','海门市']},
                {name:'连云港市', areaList:['市辖区','连云区','新浦区','海州区','赣榆县','东海县','灌云县','灌南县']},
                {name:'淮安市', areaList:['市辖区','清河区','楚州区','淮阴区','清浦区','涟水县','洪泽县','盱眙县','金湖县']},
                {name:'盐城市', areaList:['市辖区','亭湖区','盐都区','响水县','滨海县','阜宁县','射阳县','建湖县','东台市','大丰市']},
                {name:'扬州市', areaList:['市辖区','广陵区','邗江区','郊　区','宝应县','仪征市','高邮市','江都市']},
                {name:'镇江市', areaList:['市辖区','京口区','润州区','丹徒区','丹阳市','扬中市','句容市']},
                {name:'泰州市', areaList:['市辖区','海陵区','高港区','兴化市','靖江市','泰兴市','姜堰市']},
                {name:'宿迁市', areaList:['市辖区','宿城区','宿豫区','沭阳县','泗阳县','泗洪县']}
            ]}
        ]
    },
    {_area:"东北地区",Allcity:[

            {name:'辽宁', cityList:[
                {name:'沈阳市', areaList:['市辖区','和平区','沈河区','大东区','皇姑区','铁西区','苏家屯区','东陵区','新城子区','于洪区','辽中县','康平县','法库县','新民市']},
                {name:'大连市', areaList:['市辖区','中山区','西岗区','沙河口区','甘井子区','旅顺口区','金州区','长海县','瓦房店市','普兰店市','庄河市']},
                {name:'鞍山市', areaList:['市辖区','铁东区','铁西区','立山区','千山区','台安县','岫岩满族自治县','海城市']},
                {name:'抚顺市', areaList:['市辖区','新抚区','东洲区','望花区','顺城区','抚顺县','新宾满族自治县','清原满族自治县']},
                {name:'本溪市', areaList:['市辖区','平山区','溪湖区','明山区','南芬区','本溪满族自治县','桓仁满族自治县']},
                {name:'丹东市', areaList:['市辖区','元宝区','振兴区','振安区','宽甸满族自治县','东港市','凤城市']},
                {name:'锦州市', areaList:['市辖区','古塔区','凌河区','太和区','黑山县','义　县','凌海市','北宁市']},
                {name:'营口市', areaList:['市辖区','站前区','西市区','鲅鱼圈区','老边区','盖州市','大石桥市']},
                {name:'阜新市', areaList:['市辖区','海州区','新邱区','太平区','清河门区','细河区','阜新蒙古族自治县','彰武县']},
                {name:'辽阳市', areaList:['市辖区','白塔区','文圣区','宏伟区','弓长岭区','太子河区','辽阳县','灯塔市']},
                {name:'盘锦市', areaList:['市辖区','双台子区','兴隆台区','大洼县','盘山县']},
                {name:'铁岭市', areaList:['市辖区','银州区','清河区','铁岭县','西丰县','昌图县','调兵山市','开原市']},
                {name:'朝阳市', areaList:['市辖区','双塔区','龙城区','朝阳县','建平县','喀喇沁左翼蒙古族自治县','北票市','凌源市']},
                {name:'葫芦岛市', areaList:['市辖区','连山区','龙港区','南票区','绥中县','建昌县','兴城市']}
                ]
            },
            {name:'吉林', cityList:[
                {name:'长春市', areaList:['市辖区','南关区','宽城区','朝阳区','二道区','绿园区','双阳区','农安县','九台市','榆树市','德惠市']},
                {name:'吉林市', areaList:['市辖区','昌邑区','龙潭区','船营区','丰满区','永吉县','蛟河市','桦甸市','舒兰市','磐石市']},
                {name:'四平市', areaList:['市辖区','铁西区','铁东区','梨树县','伊通满族自治县','公主岭市','双辽市']},
                {name:'辽源市', areaList:['市辖区','龙山区','西安区','东丰县','东辽县']},
                {name:'通化市', areaList:['市辖区','东昌区','二道江区','通化县','辉南县','柳河县','梅河口市','集安市']},
                {name:'白山市', areaList:['市辖区','八道江区','抚松县','靖宇县','长白朝鲜族自治县','江源县','临江市']},
                {name:'松原市', areaList:['市辖区','宁江区','前郭尔罗斯蒙古族自治县','长岭县','乾安县','扶余县']},
                {name:'白城市', areaList:['市辖区','洮北区','镇赉县','通榆县','洮南市','大安市']},
                {name:'延边朝鲜族自治州', areaList:['延吉市','图们市','敦化市','珲春市','龙井市','和龙市','汪清县','安图县']}
                ]
            }
        ]
    }
];

