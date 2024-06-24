window.addEventListener('load', function() {
var myChart = echarts.init(document.getElementById('chart_dyx'));
//地理经纬度信息
var geoCoordMap={'Andorra': [1.601554, 42.546245], 'United Arab Emirates': [53.847818, 23.424076], 'Afghanistan': [67.709953, 33.93911], 'Antigua and Barbuda': [-61.796428, 17.060816], 'Anguilla': [-63.068615, 18.220554], 'Albania': [20.168331, 41.153332], 'Armenia': [45.038189, 40.069099], 'Netherlands Antilles': [-69.060087, 12.226079], 'Angola': [17.873887, -11.202692], 'Antarctica': [-0.071389, -75.250973], 'Argentina': [-63.616672, -38.416097], 'American Samoa': [-170.132217, -14.270972], 'Austria': [14.550072, 47.516231], 'Australia': [133.775136, -25.274398], 'Aruba': [-69.968338, 12.52111], 'Azerbaijan': [47.576927, 40.143105], 'Bosnia and Herzegovina': [17.679076, 43.915886], 'Barbados': [-59.543198, 13.193887], 'Bangladesh': [90.356331, 23.684994], 'Belgium': [4.469936, 50.503887], 'Burkina Faso': [-1.561593, 12.238333], 'Bulgaria': [25.48583, 42.733883], 'Bahrain': [50.637772, 25.930414], 'Burundi': [29.918886, -3.373056], 'Benin': [2.315834, 9.30769], 'Bermuda': [-64.75737, 32.321384], 'Brunei': [114.727669, 4.535277], 'Bolivia': [-63.588653, -16.290154], 'Brazil': [-51.92528, -14.235004], 'Bahamas': [-77.39628, 25.03428], 'Bhutan': [90.433601, 27.514162], 'Bouvet Island': [3.413194, -54.423199], 'Botswana': [24.684866, -22.328474], 'Belarus': [27.953389, 53.709807], 'Belize': [-88.49765, 17.189877], 'Canada': [-106.346771, 56.130366], 'Cocos [Keeling] Islands': [96.870956, -12.164165], 'Congo [DRC]': [21.758664, -4.038333], 'Central African Republic': [20.939444, 6.611111], 'Congo [Republic]': [15.827659, -0.228021], 'Switzerland': [8.227512, 46.818188], "Côte d'Ivoire": [-5.54708, 7.539989], 'Cook Islands': [-159.777671, -21.236736], 'Chile': [-71.542969, -35.675147], 'Cameroon': [12.354722, 7.369722], 'China': [104.195397, 35.86166], 'Colombia': [-74.297333, 4.570868], 'Costa Rica': [-83.753428, 9.748917], 'Cuba': [-77.781167, 21.521757], 'Cape Verde': [-24.013197, 16.002082], 'Christmas Island': [105.690449, -10.447525], 'Cyprus': [33.429859, 35.126413], 'Czech Republic': [15.472962, 49.817492], 'Germany': [10.451526, 51.165691], 'Djibouti': [42.590275, 11.825138], 'Denmark': [9.501785, 56.26392], 'Dominica': [-61.370976, 15.414999], 'Dominican Republic': [-70.162651, 18.735693], 'Algeria': [1.659626, 28.033886], 'Ecuador': [-78.183406, -1.831239], 'Estonia': [25.013607, 58.595272], 'Egypt': [30.802498, 26.820553], 'Western Sahara': [-12.885834, 24.215527], 'Eritrea': [39.782334, 15.179384], 'Spain': [-3.74922, 40.463667], 'Ethiopia': [40.489673, 9.145], 'Finland': [25.748151, 61.92411], 'Fiji': [179.414413, -16.578193], 'Falkland Islands [Islas Malvinas]': [-59.523613, -51.796253], 'Micronesia': [150.550812, 7.425554], 'Faroe Islands': [-6.911806, 61.892635], 'France': [2.213749, 46.227638], 'Gabon': [11.609444, -0.803689], 'United Kingdom of Great Britain and Northern Ireland': [-3.435973, 55.378051], 'Grenada': [-61.604171, 12.262776], 'Georgia': [43.356892, 42.315407], 'French Guiana': [-53.125782, 3.933889], 'Guernsey': [-2.585278, 49.465691], 'Ghana': [-1.023194, 7.946527], 'Gibraltar': [-5.345374, 36.137741], 'Greenland': [-42.604303, 71.706936], 'Gambia': [-15.310139, 13.443182], 'Guinea': [-9.696645, 9.945587], 'Guadeloupe': [-62.067641, 16.995971], 'Equatorial Guinea': [10.267895, 1.650801], 'Greece': [21.824312, 39.074208], 'South Georgia and the South Sandwich Islands': [-36.587909, -54.429579], 'Guatemala': [-90.230759, 15.783471], 'Guam': [144.793731, 13.444304], 'Guinea-Bissau': [-15.180413, 11.803749], 'Guyana': [-58.93018, 4.860416], 'Gaza Strip': [34.308825, 31.354676], 'Hong Kong': [114.109497, 22.396428], 'Heard Island and McDonald Islands': [73.504158, -53.08181], 'Honduras': [-86.241905, 15.199999], 'Croatia': [15.2, 45.1], 'Haiti': [-72.285215, 18.971187], 'Hungary': [19.503304, 47.162494], 'Indonesia': [113.921327, -0.789275], 'Ireland': [-8.24389, 53.41291], 'Israel': [34.851612, 31.046051], 'Isle of Man': [-4.548056, 54.236107], 'India': [78.96288, 20.593684], 'British Indian Ocean Territory': [71.876519, -6.343194], 'Iraq': [43.679291, 33.223191], 'Iran': [53.688046, 32.427908], 'Iceland': [-19.020835, 64.963051], 'Italy': [12.56738, 41.87194], 'Jersey': [-2.13125, 49.214439], 'Jamaica': [-77.297508, 18.109581], 'Jordan': [36.238414, 30.585164], 'Japan': [138.252924, 36.204824], 'Kenya': [37.906193, -0.023559], 'Kyrgyzstan': [74.766098, 41.20438], 'Cambodia': [104.990963, 12.565679], 'Kiribati': [-168.734039, -3.370417], 'Comoros': [43.872219, -11.875001], 'Saint Kitts and Nevis': [-62.782998, 17.357822], 'North Korea': [127.510093, 40.339852], 'Rep. of Korea': [127.766922, 35.907757], 'Kuwait': [47.481766, 29.31166], 'Cayman Islands': [-80.566956, 19.513469], 'Kazakhstan': [66.923684, 48.019573], 'Laos': [102.495496, 19.85627], 'Lebanon': [35.862285, 33.854721], 'Saint Lucia': [-60.978893, 13.909444], 'Liechtenstein': [9.555373, 47.166], 'Sri Lanka': [80.771797, 7.873054], 'Liberia': [-9.429499, 6.428055], 'Lesotho': [28.233608, -29.609988], 'Lithuania': [23.881275, 55.169438], 'Luxembourg': [6.129583, 49.815273], 'Latvia': [24.603189, 56.879635], 'Libya': [17.228331, 26.3351], 'Morocco': [-7.09262, 31.791702], 'Monaco': [7.412841, 43.750298], 'Moldova': [28.369885, 47.411631], 'Montenegro': [19.37439, 42.708678], 'Madagascar': [46.869107, -18.766947], 'Marshall Islands': [171.184478, 7.131474], 'Macedonia [FYROM]': [21.745275, 41.608635], 'Mali': [-3.996166, 17.570692], 'Myanmar [Burma]': [95.956223, 21.913965], 'Mongolia': [103.846656, 46.862496], 'Macau': [113.543873, 22.198745], 'Northern Mariana Islands': [145.38469, 17.33083], 'Martinique': [-61.024174, 14.641528], 'Mauritania': [-10.940835, 21.00789], 'Montserrat': [-62.187366, 16.742498], 'Malta': [14.375416, 35.937496], 'Mauritius': [57.552152, -20.348404], 'Maldives': [73.22068, 3.202778], 'Malawi': [34.301525, -13.254308], 'Mexico': [-102.552784, 23.634501], 'Malaysia': [101.975766, 4.210484], 'Mozambique': [35.529562, -18.665695], 'Namibia': [18.49041, -22.95764], 'New Caledonia': [165.618042, -20.904305], 'Niger': [8.081666, 17.607789], 'Norfolk Island': [167.954712, -29.040835], 'Nigeria': [8.675277, 9.081999], 'Nicaragua': [-85.207229, 12.865416], 'Netherlands': [5.291266, 52.132633], 'Norway': [8.468946, 60.472024], 'Nepal': [84.124008, 28.394857], 'Nauru': [166.931503, -0.522778], 'Niue': [-169.867233, -19.054445], 'New Zealand': [174.885971, -40.900557], 'Oman': [55.923255, 21.512583], 'Panama': [-80.782127, 8.537981], 'Peru': [-75.015152, -9.189967], 'French Polynesia': [-149.406843, -17.679742], 'Papua New Guinea': [143.95555, -6.314993], 'Philippines': [121.774017, 12.879721], 'Pakistan': [69.345116, 30.375321], 'Poland': [19.145136, 51.919438], 'Saint Pierre and Miquelon': [-56.27111, 46.941936], 'Pitcairn Islands': [-127.439308, -24.703615], 'Puerto Rico': [-66.590149, 18.220833], 'Palestinian Territories': [35.233154, 31.952162], 'Portugal': [-8.224454, 39.399872], 'Palau': [134.58252, 7.51498], 'Paraguay': [-58.443832, -23.442503], 'Qatar': [51.183884, 25.354826], 'Réunion': [55.536384, -21.115141], 'Romania': [24.96676, 45.943161], 'Serbia': [21.005859, 44.016521], 'Russia': [105.318756, 61.52401], 'Rwanda': [29.873888, -1.940278], 'Saudi Arabia': [45.079162, 23.885942], 'Solomon Islands': [160.156194, -9.64571], 'Seychelles': [55.491977, -4.679574], 'Sudan': [30.217636, 12.862807], 'Sweden': [18.643501, 60.128161], 'Singapore': [103.819836, 1.352083], 'Saint Helena': [-10.030696, -24.143474], 'Slovenia': [14.995463, 46.151241], 'Svalbard and Jan Mayen': [23.670272, 77.553604], 'Slovakia': [19.699024, 48.669026], 'Sierra Leone': [-11.779889, 8.460555], 'San Marino': [12.457777, 43.94236], 'Senegal': [-14.452362, 14.497401], 'Somalia': [46.199616, 5.152149], 'Suriname': [-56.027783, 3.919305], 'São Tomé and Príncipe': [6.613081, 0.18636], 'El Salvador': [-88.89653, 13.794185], 'Syrian Arab Rep.': [38.996815, 34.802075], 'Swaziland': [31.465866, -26.522503], 'Turks and Caicos Islands': [-71.797928, 21.694025], 'Chad': [18.732207, 15.454166], 'French Southern Territories': [69.348557, -49.280366], 'Togo': [0.824782, 8.619543], 'Thailand': [100.992541, 15.870032], 'Tajikistan': [71.276093, 38.861034], 'Tokelau': [-171.855881, -8.967363], 'Timor-Leste': [125.727539, -8.874217], 'Turkmenistan': [59.556278, 38.969719], 'Tunisia': [9.537499, 33.886917], 'Tonga': [-175.198242, -21.178986], 'Turkey': [35.243322, 38.963745], 'Trinidad and Tobago': [-61.222503, 10.691803], 'Tuvalu': [177.64933, -7.109535], 'Taiwan': [120.960515, 23.69781], 'Tanzania': [34.888822, -6.369028], 'Ukraine': [31.16558, 48.379433], 'Uganda': [32.290275, 1.373333], 'U.S. Minor Outlying Islands': [0.0, 0.0], 'United States of America': [-95.712891, 37.09024], 'Uruguay': [-55.765835, -32.522779], 'Uzbekistan': [64.585262, 41.377491], 'Vatican City': [12.453389, 41.902916], 'Saint Vincent and the Grenadines': [-61.287228, 12.984305], 'Venezuela': [-66.58973, 6.42375], 'British Virgin Islands': [-64.639968, 18.420695], 'U.S. Virgin Islands': [-64.896335, 18.335765], 'Vietnam': [108.277199, 14.058324], 'Vanuatu': [166.959158, -15.376706], 'Wallis and Futuna': [-177.156097, -13.768752], 'Samoa': [-172.104629, -13.759029], 'Kosovo': [20.902977, 42.602636], 'Yemen': [48.516388, 15.552727], 'Mayotte': [45.166244, -12.8275], 'South Africa': [22.937506, -30.559482], 'Zambia': [27.849332, -13.133897], 'Zimbabwe': [29.154857, -19.015438]}
// var planePath = 'path://M789.1 258.7C666 293.7 643.6 393 652 456c-88.2-103.5-84-221.1-84-391.8C286.7 170.6 352.5 475.6 344.1 568c-70-57.4-84-195.9-84-195.9C186 409.9 148.2 513.4 148.2 596c0 201.5 162.3 363.8 363.8 363.8S875.8 797.5 875.8 596c0-119-88.1-175-86.7-337.3z';
// var planePath = 'path://M64 947.2s0-128 102.4-160 224-57.6 256-102.4c0 0-108.8 12.8-147.2-25.6-38.4-38.4-25.6-70.4-19.2-96 0 0-25.6-6.4-25.6-25.6 0-19.2 57.6-96 64-140.8 12.8-51.2 38.4-204.8 96-268.8C454.4 57.6 512 64 537.6 64c25.6 0 140.8 6.4 179.2 83.2 57.6 102.4 76.8 275.2 108.8 313.6 32 38.4 57.6 96 12.8 96 0 0 38.4 96-32 121.6-51.2 19.2-121.6 6.4-121.6 6.4s-6.4 38.4 204.8 89.6c76.8 19.2 140.8 76.8 140.8 172.8';
var planePath = 'path://M352.256 240.64c55.296 0 99.328-45.056 99.328-99.328 0-55.296-45.056-99.328-99.328-99.328-55.296 0-99.328 45.056-99.328 99.328S296.96 240.64 352.256 240.64zM771.072 640c44.032 0 79.872-35.84 79.872-79.872s-35.84-79.872-79.872-79.872-79.872 35.84-79.872 79.872S727.04 640 771.072 640zM846.848 738.304l24.576-22.528 99.328-133.12-24.576-22.528-99.328 111.616L696.32 671.744 636.928 604.16c8.192-4.096 14.336-10.24 14.336-11.264L430.08 280.576 273.408 280.576 53.248 592.896c0 1.024 20.48 25.6 43.008 6.144 49.152-40.96 153.6-123.904 152.576-123.904l24.576 0-122.88 234.496 122.88 0 49.152 288.768 58.368 0L430.08 710.656l122.88 0L430.08 476.16l24.576 0c0 0 71.68 57.344 124.928 99.328l-7.168 6.144 99.328 133.12L696.32 737.28l0 44.032-50.176 66.56 50.176 44.032 50.176 105.472 50.176 0 50.176-105.472 50.176-44.032-50.176-66.56C846.848 781.312 846.848 738.304 846.848 738.304z'
// var planePath ='cM1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

// 获取地图中起点和终点的坐标，以数组形式保存下来
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
		var num_dyx = dataItem[1].value;
		if (fromCoord && toCoord) {
            res.push({
                coords: [fromCoord, toCoord], // 起点坐标和终点坐标
				namecoutry:[dataItem[0].name,dataItem[1].name],
                value: num_dyx  // 存入 num_dyx 值 (假设你要在自定义样式中用到)
            });
        }
    }
    return res;
}
var color = ['#696969',  '#DCDCDC']; // 自定义图中要用到的颜色

var data1 = [[{'name': 'Somalia'}, {'name': 'Finland', 'value': 12}], [{'name': 'Iraq'}, {'name': 'Monaco', 'value': 20}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 36}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 2426}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 1234}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 1065}], [{'name': 'Afghanistan'}, {'name': 'France', 'value': 2}], [{'name': 'Iraq'}, {'name': 'Ireland', 'value': 2}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Slovenia', 'value': 53}], [{'name': 'Iraq'}, {'name': 'Norway', 'value': 5}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 1019}], [{'name': 'Iraq'}, {'name': 'Iceland', 'value': 28}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 291}], [{'name': 'Iraq'}, {'name': 'Switzerland', 'value': 1}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 580}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Iceland', 'value': 16}], [{'name': 'Somalia'}, {'name': 'Norway', 'value': 8}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 629}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 286}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 235}], [{'name': 'Afghanistan'}, {'name': 'Netherlands', 'value': 1}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 2129}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 234}], [{'name': 'Somalia'}, {'name': 'Netherlands', 'value': 7}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 19}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 3}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 61}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 132}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Argentina', 'value': 72}], [{'name': 'Afghanistan'}, {'name': 'Sweden', 'value': 283}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 45}], [{'name': 'Somalia'}, {'name': 'Portugal', 'value': 1}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 552}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Latvia', 'value': 51}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 946}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Cyprus', 'value': 4}], [{'name': 'Iraq'}, {'name': 'Italy', 'value': 1}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 2792}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 5343}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Italy', 'value': 819}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Austria', 'value': 194}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Estonia', 'value': 108}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Portugal', 'value': 177}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Lithuania', 'value': 146}], [{'name': 'Iraq'}, {'name': 'Finland', 'value': 4}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 1050}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 3227}], [{'name': 'Somalia'}, {'name': 'France', 'value': 112}], [{'name': 'Iraq'}, {'name': 'Sweden', 'value': 41}], [{'name': 'Iraq'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 530}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Luxembourg', 'value': 158}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 504}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Chile', 'value': 71}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 81}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 3046}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Sweden', 'value': 2251}], [{'name': 'Iraq'}, {'name': 'Germany', 'value': 8}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 16}], [{'name': 'Iraq'}, {'name': 'Netherlands', 'value': 3}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Malta', 'value': 10}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 4}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Belgium', 'value': 1041}], [{'name': 'Iraq'}, {'name': 'France', 'value': 16}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Romania', 'value': 34}], [{'name': 'Afghanistan'}, {'name': 'Finland', 'value': 7}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Croatia', 'value': 120}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 286}], [{'name': 'Iraq'}, {'name': 'New Zealand', 'value': 28}], [{'name': 'Iraq'}, {'name': 'Luxembourg', 'value': 0}]];
//2018
var data2 = [[{'name': 'Iraq'}, {'name': 'Norway', 'value': 9}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 833}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 729}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 53}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Iceland', 'value': 49}], [{'name': 'Somalia'}, {'name': 'Norway', 'value': 5}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 2061}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 139}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 245}], [{'name': 'Afghanistan'}, {'name': 'Netherlands', 'value': 1}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 1779}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 296}], [{'name': 'Somalia'}, {'name': 'Netherlands', 'value': 21}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 169}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 1}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 47}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 10}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Argentina', 'value': 8}], [{'name': 'Afghanistan'}, {'name': 'Sweden', 'value': 392}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 223}], [{'name': 'Iraq'}, {'name': 'Belgium', 'value': 1}], [{'name': 'Somalia'}, {'name': 'Portugal', 'value': 5}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 188}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Latvia', 'value': 3}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 205}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 3065}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 3128}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Italy', 'value': 375}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Estonia', 'value': 70}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Portugal', 'value': 199}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Lithuania', 'value': 11}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 4401}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 2287}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Bulgaria', 'value': 55}], [{'name': 'Somalia'}, {'name': 'France', 'value': 36}], [{'name': 'Iraq'}, {'name': 'Sweden', 'value': 59}], [{'name': 'Iraq'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 436}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 473}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 146}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 72}], [{'name': 'Somalia'}, {'name': 'Switzerland', 'value': 7}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Sweden', 'value': 1671}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 14}], [{'name': 'Iraq'}, {'name': 'Netherlands', 'value': 9}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 31}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Belgium', 'value': 803}], [{'name': 'Iraq'}, {'name': 'France', 'value': 11}], [{'name': 'Afghanistan'}, {'name': 'Finland', 'value': 7}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Croatia', 'value': 246}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 1701}], [{'name': 'Iraq'}, {'name': 'New Zealand', 'value': 5}], [{'name': 'Somalia'}, {'name': 'Finland', 'value': 2}], [{'name': 'Somalia'}, {'name': 'Belgium', 'value': 8}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 12}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 974}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 659}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 875}], [{'name': 'Afghanistan'}, {'name': 'France', 'value': 6}], [{'name': 'Iraq'}, {'name': 'Ireland', 'value': 3}], [{'name': 'Iraq'}, {'name': 'Portugal', 'value': 79}]];
//2019
var data3 = [[{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 5062}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 1256}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Bulgaria', 'value': 129}], [{'name': 'Somalia'}, {'name': 'France', 'value': 66}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 0}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 240}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 16}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Argentina', 'value': 5}], [{'name': 'Afghanistan'}, {'name': 'Sweden', 'value': 96}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 157}], [{'name': 'Somalia'}, {'name': 'Portugal', 'value': 2}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 17}], [{'name': 'Afghanistan'}, {'name': 'Rep. of Korea', 'value': 0}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 142}], [{'name': 'Somalia'}, {'name': 'Malta', 'value': 1}], [{'name': 'Somalia'}, {'name': 'Denmark', 'value': 8}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 6253}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 1652}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Italy', 'value': 320}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Estonia', 'value': 3}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Portugal', 'value': 395}], [{'name': 'Iraq'}, {'name': 'New Zealand', 'value': 3}], [{'name': 'Iraq'}, {'name': 'Sweden', 'value': 10}], [{'name': 'Iraq'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 161}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 422}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 134}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 220}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Sweden', 'value': 1897}], [{'name': 'Iraq'}, {'name': 'Denmark', 'value': 0}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 39}], [{'name': 'Iraq'}, {'name': 'Netherlands', 'value': 2}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 551}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Belgium', 'value': 566}], [{'name': 'Iraq'}, {'name': 'France', 'value': 0}], [{'name': 'Iraq'}, {'name': 'Finland', 'value': 0}], [{'name': 'Afghanistan'}, {'name': 'Finland', 'value': 4}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Croatia', 'value': 34}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 1825}], [{'name': 'Somalia'}, {'name': 'Luxembourg', 'value': 9}], [{'name': 'Iraq'}, {'name': 'Spain', 'value': 1}], [{'name': 'Somalia'}, {'name': 'Finland', 'value': 31}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 917}], [{'name': 'Iraq'}, {'name': 'Germany', 'value': 60}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Malta', 'value': 14}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 1282}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 66}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 815}], [{'name': 'Afghanistan'}, {'name': 'France', 'value': 3}], [{'name': 'Iraq'}, {'name': 'Ireland', 'value': 12}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Romania', 'value': 157}], [{'name': 'Iraq'}, {'name': 'Portugal', 'value': 199}], [{'name': 'Iraq'}, {'name': 'Norway', 'value': 0}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 840}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 391}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 239}], [{'name': 'Somalia'}, {'name': 'Norway', 'value': 18}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 3843}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 552}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 251}], [{'name': 'Afghanistan'}, {'name': 'Netherlands', 'value': 0}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 718}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 656}], [{'name': 'Somalia'}, {'name': 'Netherlands', 'value': 36}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 112}]];
//2020
var data4 = [[{'name': 'Iraq'}, {'name': 'Finland', 'value': 0}], [{'name': 'Afghanistan'}, {'name': 'Finland', 'value': 10}], [{'name': 'Afghanistan'}, {'name': 'Iceland', 'value': 21}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 823}], [{'name': 'Iraq'}, {'name': 'New Zealand', 'value': 18}], [{'name': 'Iraq'}, {'name': 'Sweden', 'value': 1}], [{'name': 'Somalia'}, {'name': 'Iceland', 'value': 8}], [{'name': 'Iraq'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 20}], [{'name': 'Iraq'}, {'name': 'Switzerland', 'value': 34}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 470}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 81}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 26}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Sweden', 'value': 1440}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 156}], [{'name': 'Iraq'}, {'name': 'Netherlands', 'value': 1}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 56}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Belgium', 'value': 359}], [{'name': 'Somalia'}, {'name': 'Luxembourg', 'value': 1}], [{'name': 'Somalia'}, {'name': 'Netherlands', 'value': 63}], [{'name': 'Somalia'}, {'name': 'Finland', 'value': 31}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 347}], [{'name': 'Somalia'}, {'name': 'Switzerland', 'value': 3}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 1346}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 55}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 23}], [{'name': 'Afghanistan'}, {'name': 'France', 'value': 10}], [{'name': 'Afghanistan'}, {'name': 'Switzerland', 'value': 35}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Romania', 'value': 37}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 132}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 488}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 322}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 286}], [{'name': 'Somalia'}, {'name': 'Norway', 'value': 77}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 77}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 57}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 174}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 472}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 374}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 3180}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 2252}], [{'name': 'Somalia'}, {'name': 'France', 'value': 45}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 10}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 597}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 49}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Argentina', 'value': 1}], [{'name': 'Afghanistan'}, {'name': 'Sweden', 'value': 26}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 216}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 4}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 94}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Iceland', 'value': 35}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Denmark', 'value': 30}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 1566}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 927}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Italy', 'value': 413}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Portugal', 'value': 2}], [{'name': 'Iraq'}, {'name': 'Japan', 'value': 1}]];
//2021
var data5 = [[{'name': 'Iraq'}, {'name': 'Belgium', 'value': 0}], [{'name': 'Somalia'}, {'name': 'Finland', 'value': 6}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 274}], [{'name': 'Somalia'}, {'name': 'Switzerland', 'value': 10}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 1145}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 268}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 683}], [{'name': 'Iraq'}, {'name': 'France', 'value': 0}], [{'name': 'Afghanistan'}, {'name': 'Switzerland', 'value': 216}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Romania', 'value': 186}], [{'name': 'Iraq'}, {'name': 'Portugal', 'value': 2}], [{'name': 'Afghanistan'}, {'name': 'Spain', 'value': 6}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 238}], [{'name': 'Iraq'}, {'name': 'Spain', 'value': 4}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 109}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 404}], [{'name': 'Iraq'}, {'name': 'Germany', 'value': 25}], [{'name': 'Somalia'}, {'name': 'Norway', 'value': 5}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 674}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 22}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 11}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 246}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 124}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 3588}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 358}], [{'name': 'Somalia'}, {'name': 'France', 'value': 59}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 12}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 47}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 69}], [{'name': 'Afghanistan'}, {'name': 'Sweden', 'value': 34}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 274}], [{'name': 'Somalia'}, {'name': 'Belgium', 'value': 4}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 3}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 972}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Iceland', 'value': 2}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 1621}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 37}], [{'name': 'Afghanistan'}, {'name': 'Netherlands', 'value': 0}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Italy', 'value': 3}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Portugal', 'value': 4}], [{'name': 'Afghanistan'}, {'name': 'Finland', 'value': 11}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 707}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 12}], [{'name': 'Iraq'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 2}], [{'name': 'Somalia'}, {'name': 'Portugal', 'value': 3}], [{'name': 'Iraq'}, {'name': 'Switzerland', 'value': 15}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 500}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 1}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 9615}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Sweden', 'value': 1294}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 6}], [{'name': 'Iraq'}, {'name': 'Netherlands', 'value': 2}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 67}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Belgium', 'value': 243}], [{'name': 'Afghanistan'}, {'name': 'France', 'value': 3}]];
//2022
var data6 = [[{'name': 'Iraq'}, {'name': 'Portugal', 'value': 30}], [{'name': 'Afghanistan'}, {'name': 'Italy', 'value': 30}], [{'name': 'Somalia'}, {'name': 'Netherlands', 'value': 7}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 547}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 38}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 2048}], [{'name': 'Iraq'}, {'name': 'Germany', 'value': 95}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Rep. of Korea', 'value': 5}], [{'name': 'Somalia'}, {'name': 'Norway', 'value': 0}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 3044}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 18}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 994}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 11}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 1292}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Portugal', 'value': 84}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 315}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 1371}], [{'name': 'Somalia'}, {'name': 'France', 'value': 81}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 11}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 577}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 12}], [{'name': 'Afghanistan'}, {'name': 'Sweden', 'value': 209}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 1437}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 272}], [{'name': 'Somalia'}, {'name': 'Italy', 'value': 1}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 2319}], [{'name': 'Afghanistan'}, {'name': 'Portugal', 'value': 0}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 3167}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 28}], [{'name': 'Afghanistan'}, {'name': 'Netherlands', 'value': 20}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Italy', 'value': 5}], [{'name': 'Afghanistan'}, {'name': 'Finland', 'value': 629}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 254}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 466}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Argentina', 'value': 1}], [{'name': 'Iraq'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 2}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 483}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 1333}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 17234}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Sweden', 'value': 1021}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 70}], [{'name': 'Iraq'}, {'name': 'Netherlands', 'value': 0}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 190}], [{'name': 'Afghanistan'}, {'name': 'Switzerland', 'value': 236}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Romania', 'value': 1}], [{'name': 'Iraq'}, {'name': 'New Zealand', 'value': 3}], [{'name': 'Iraq'}, {'name': 'Sweden', 'value': 4}], [{'name': 'Afghanistan'}, {'name': 'Malta', 'value': 0}], [{'name': 'Afghanistan'}, {'name': 'Rep. of Korea', 'value': 2}], [{'name': 'Somalia'}, {'name': 'Finland', 'value': 10}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 30}], [{'name': 'Somalia'}, {'name': 'Switzerland', 'value': 23}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 915}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 286}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 439}], [{'name': 'Afghanistan'}, {'name': 'Germany', 'value': 104}]];
//2023
var data7 = [[{'name': 'Syrian Arab Rep.'}, {'name': 'Portugal', 'value': 118}], [{'name': 'Iraq'}, {'name': 'New Zealand', 'value': 4}], [{'name': 'Iraq'}, {'name': 'Netherlands', 'value': 2}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 1449}], [{'name': 'Somalia'}, {'name': 'France', 'value': 9}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 31}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 62}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 3764}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 363}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 835}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 1844}], [{'name': 'Iraq'}, {'name': 'Japan', 'value': 1}], [{'name': 'Afghanistan'}, {'name': 'Portugal', 'value': 35}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 3730}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 28}], [{'name': 'Afghanistan'}, {'name': 'Netherlands', 'value': 25}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Italy', 'value': 19}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Rep. of Korea', 'value': 5}], [{'name': 'Afghanistan'}, {'name': 'Finland', 'value': 206}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 254}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 188}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 556}], [{'name': 'Somalia'}, {'name': 'Netherlands', 'value': 8}], [{'name': 'Iraq'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 4}], [{'name': 'Somalia'}, {'name': 'Portugal', 'value': 2}], [{'name': 'Afghanistan'}, {'name': 'Japan', 'value': 0}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 431}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 11385}], [{'name': 'Iraq'}, {'name': 'Spain', 'value': 1}], [{'name': 'Somalia'}, {'name': 'Japan', 'value': 3}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Sweden', 'value': 618}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 17}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 5}], [{'name': 'Afghanistan'}, {'name': 'Slovenia', 'value': 31}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 305}], [{'name': 'Afghanistan'}, {'name': 'Switzerland', 'value': 2}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Romania', 'value': 198}], [{'name': 'Iraq'}, {'name': 'Norway', 'value': 16}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 7}], [{'name': 'Somalia'}, {'name': 'Finland', 'value': 6}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 78}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 1042}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 174}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 672}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Belgium', 'value': 130}], [{'name': 'Afghanistan'}, {'name': 'France', 'value': 84}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 449}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Slovenia', 'value': 68}], [{'name': 'Iraq'}, {'name': 'Finland', 'value': 2}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Bulgaria', 'value': 10}], [{'name': 'Iraq'}, {'name': 'Portugal', 'value': 7}], [{'name': 'Afghanistan'}, {'name': 'Italy', 'value': 467}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 347}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 71}], [{'name': 'Afghanistan'}, {'name': 'Germany', 'value': 615}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 4520}], [{'name': 'Iraq'}, {'name': 'Germany', 'value': 17}], [{'name': 'Somalia'}, {'name': 'Norway', 'value': 7}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 1117}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 3912}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 193}]];
//2024
var data8 = [[{'name': 'Syrian Arab Rep.'}, {'name': 'Germany', 'value': 1431}], [{'name': 'Syrian Arab Rep.'}, {'name': 'New Zealand', 'value': 13}], [{'name': 'Somalia'}, {'name': 'Netherlands', 'value': 15}], [{'name': 'Afghanistan'}, {'name': 'Italy', 'value': 1}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 6}], [{'name': 'Afghanistan'}, {'name': 'France', 'value': 189}], [{'name': 'Somalia'}, {'name': 'United States of America', 'value': 267}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Bulgaria', 'value': 22}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Spain', 'value': 54}], [{'name': 'Somalia'}, {'name': 'Japan', 'value': 0}], [{'name': 'Somalia'}, {'name': 'Germany', 'value': 65}], [{'name': 'Iraq'}, {'name': 'Canada', 'value': 6}], [{'name': 'Somalia'}, {'name': 'Sweden', 'value': 3}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Norway', 'value': 222}], [{'name': 'Afghanistan'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 3}], [{'name': 'Somalia'}, {'name': 'Australia', 'value': 8}], [{'name': 'Afghanistan'}, {'name': 'United States of America', 'value': 427}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Ireland', 'value': 7}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Finland', 'value': 92}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Belgium', 'value': 32}], [{'name': 'Syrian Arab Rep.'}, {'name': 'United States of America', 'value': 2325}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Switzerland', 'value': 4}], [{'name': 'Somalia'}, {'name': 'New Zealand', 'value': 15}], [{'name': 'Iraq'}, {'name': 'United States of America', 'value': 18}], [{'name': 'Afghanistan'}, {'name': 'Norway', 'value': 119}], [{'name': 'Iraq'}, {'name': 'Germany', 'value': 12}], [{'name': 'Somalia'}, {'name': 'Canada', 'value': 59}], [{'name': 'Afghanistan'}, {'name': 'Australia', 'value': 970}], [{'name': 'Afghanistan'}, {'name': 'New Zealand', 'value': 80}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Canada', 'value': 727}], [{'name': 'Iraq'}, {'name': 'Australia', 'value': 4}], [{'name': 'Afghanistan'}, {'name': 'Ireland', 'value': 67}], [{'name': 'Somalia'}, {'name': 'United Kingdom of Great Britain and Northern Ireland', 'value': 2}], [{'name': 'Somalia'}, {'name': 'Finland', 'value': 0}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Australia', 'value': 540}], [{'name': 'Somalia'}, {'name': 'Belgium', 'value': 10}], [{'name': 'Syrian Arab Rep.'}, {'name': 'Netherlands', 'value': 492}], [{'name': 'Somalia'}, {'name': 'France', 'value': 3}], [{'name': 'Afghanistan'}, {'name': 'Canada', 'value': 254}], [{'name': 'Syrian Arab Rep.'}, {'name': 'France', 'value': 487}]];

 // 声明 option 对象
 var theme=['2017','2018','2019','2020','2021','2022','2023','2024']
 // var theme2=['一般物理学', '凝聚态物理学：电子结构、电学、磁学和光学性质']
 var option = {
     //timeline基本配置都写在baseoption 中
     baseOption: {
         timeline: {
             // loop: false,        
             axisType: 'category',
             show: true,
             autoPlay: true,
             playInterval: 2000,
             data: theme,

         },
         xAxis: [{
         type: 'category',
         name: '',
         axisLine: {
             lineStyle: {
                 color: 'black' // 设置 x 轴的颜色为红色
             }
         },
         visible: false
     }],
         yAxis: { type: 'value', name: '' },
         title: {
             text: '不同主题高被引论文美国合作国家情况',
             // text: '中国国际贸易促进委员会',
             // subtext: '国别资讯',
             textStyle: {
                 color: '#fff',
                 fontSize: 20,
             },
             // left:center,
             top: '10px',
             left: '10px'
         },
         geo: {
             map: 'world', // 与引用进来的地图js名字一致
             roam: false, // 禁止缩放平移
             itemStyle: { // 每个区域的样式
                 normal: {
                     areaColor: '#696969'
                 },
                 emphasis: {
                     areaColor: '#DCDCDC'
                 }
             },
             regions: [{ 
                 label: { // 高亮的时候不显示标签
                     emphasis: {
                         show: false
                     }
                 }
             }]
         },
         textStyle: {
                 fontSize: 12
             },
     },
     //变量则写在options中
    options:[
        //第一张子图
        {
            title: {
                text: '中东地区妇女儿童难民流动情况',
                subtext: '2017年',
                left: 'center', // 标题水平居中
                top: '20px' // 标题距离顶部20像素
            },
			tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (params.seriesType === 'effectScatter') {
				var dataColor = params.color;
				var dataName = params.name;
				var datasize_dyx = Math.round(params.data.symbolSize * 100);
				return '<div>' +
					'<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
					'<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
				'</div>';
            };
			if(params.seriesType === 'lines'){
				// console.log(params)
				var dataColor = params.color;
				var dataName = params.data.namecoutry;
				var datasize_dyx = Math.round(params.data.value);
				return '<div>' +
					'<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
					'<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
				'</div>';
			}
        }
    },
            series: [
                //第一个，记录白色航线的特效图
                {
				// 白色航线特效图
				type: 'lines',
				zlevel: 1, // 用于分层，z-index的效果
				effect: {
					show: true, // 动效是否显示
					period: 6, // 特效动画时间
					trailLength: 0.7, // 特效尾迹的长度
					color: '#fff', // 特效颜色
					symbolSize: 7 // 特效大小
				},
				lineStyle: {
					normal: { // 正常情况下的线条样式
						color: color[0],
						width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
						curveness: -0.2 // 线条曲度
					}
				},
                data: convertData(data1)
			},
            { // 小飞机航线效果
				type: 'lines',
				zlevel: 2,
				symbol: ['none', 'arrow'],   // 用于设置箭头
				symbolSize: 10,
				effect: {
					show: true,
					period: 6,
					trailLength: 0,
					symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
					symbolSize: 15
				},
				lineStyle: {
					normal: {
						// color: color[0],
						width: 1,
						opacity: 0.6,
						curveness: -0.2,
						color: function(params) {
                        // 根据value值设置不同的颜色
                        var value = params.data.value;
                        if (value < 100) {
                            return "#787464"; 
                        } else if (value < 200) {
                            return "#8E9986"; 
                        } else if (value < 300) {
                            return "#DDDB9F"; 
						}else if (value < 400) {
                            return "#d7ab82"; // 绿色
                        }else if (value < 500) {
                            return "#E2825D"; // 绿色
                        }else if (value < 1000) {
                            return "#DB7D72"; // 绿色
                        }else if (value < 2000) {
                            return "#C14950"; // 绿色
                        }
						else {
                            return '#893448'; // 蓝色
                        }
                        }
					}
				},
                data: convertData(data1)
			},
            {
                type: 'effectScatter',
				coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
				zlevel: 3,
				rippleEffect: {
					brushType: 'stroke' // 波纹绘制效果
				},
                itemStyle: {
                normal: {
                    color: function(params) {
                        // 根据value值设置不同的颜色
                        var value = params.data.symbolSize;
                        if (value < 5) {
                            return "#787464"; // 红色
                        } else if (value < 10*2) {
                            return "#8E9986"; // 绿色
                        } else if (value < 15*2) {
                            return "#DDDB9F"; // 绿色
                        }else if (value < 20*2) {
                            return "#E3AB86"; // 绿色
                        }else if (value < 25*2) {
                            return "#d7ab82"; // 绿色
                        }else if (value < 30*2) {
                            return "#E2825D"; // 绿色
                        }else if (value < 35*2) {
                            return "#DB7D72"; // 绿色
                        }else if (value < 40*2) {
                            return "#C14950"; // 绿色
                        }
						else {
                            return '#893448'; // 蓝色
                        }
                        }
                }
                },
                data: data1.map(function(dataItem) {
					return {
						name: dataItem[1].name,
						value: geoCoordMap[dataItem[1].name], // 起点的位置
						symbolSize: dataItem[1].value*0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
					};
				})
            },
            {
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 3,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'left',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[1]
				}
			}
		}
            
            ]
        },
        //第二张子图
        {
            title: {
                text: '中东地区妇女儿童难民流动情况',
                subtext: '2018年',
                left: 'center', // 标题水平居中
                top: '20px' // 标题距离顶部20像素
            },
			tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (params.seriesType === 'effectScatter') {
				var dataColor = params.color;
				var dataName = params.name;
				var datasize_dyx = Math.round(params.data.symbolSize * 100);
				return '<div>' +
					'<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
					'<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
				'</div>';
            };
			if(params.seriesType === 'lines'){
				console.log(params)
				var dataColor = params.color;
				var dataName = params.data.namecoutry;
				var datasize_dyx = Math.round(params.data.value);
				return '<div>' +
					'<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
					'<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
				'</div>';
			}
        }
    },
    series: [
                
        {//第一个，记录白色航线的特效图
            // 白色航线特效图
            type: 'lines',
            zlevel: 1, // 用于分层，z-index的效果
            effect: {
                show: true, // 动效是否显示
                period: 6, // 特效动画时间
                trailLength: 0.7, // 特效尾迹的长度
                color: '#fff', // 特效颜色
                symbolSize: 3 // 特效大小
            },
            lineStyle: {
                normal: { // 正常情况下的线条样式
                    color: color[0],
                    width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                    curveness: -0.2 // 线条曲度
                }
            },
            data: convertData(data2)
            // data:[],
            // data: convertData(OMData) // 特效的起始、终点位置series[0].data
        },
        { // 小飞机航线效果
            type: 'lines',
            zlevel: 2,
            //symbol: ['none', 'arrow'],   // 用于设置箭头
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    // color: color[0],
                    width: 1,
                    opacity: 0.6,
                    curveness: -0.2,
                    color: function(params) {
                    // 根据value值设置不同的颜色
                    var value = params.data.value;
                    if (value < 100) {
                        return "#787464"; 
                    } else if (value < 200) {
                        return "#8E9986"; 
                    } else if (value < 300) {
                        return "#DDDB9F"; 
                    }else if (value < 400) {
                        return "#d7ab82"; // 绿色
                    }else if (value < 500) {
                        return "#E2825D"; // 绿色
                    }else if (value < 1000) {
                        return "#DB7D72"; // 绿色
                    }else if (value < 2000) {
                        return "#C14950"; // 绿色
                    }
                    else {
                        return '#893448'; // 蓝色
                    }
                    }
                }
            },
            data: convertData(data2)},
            {//终点的效果
                type: 'effectScatter',
				coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
				zlevel: 3,
				rippleEffect: {
					brushType: 'stroke' // 波纹绘制效果
				},
				label: {
					normal: { // 默认的文本标签显示样式
						show: false
					}
				},
                itemStyle: {
                normal: {
                    color: function(params) {
                        // 根据value值设置不同的颜色
                        var value = params.data.symbolSize;
                        if (value < 5*2) {
                            return "#787464"; // 红色
                        } else if (value < 10*2) {
                            return "#8E9986"; // 绿色
                        } else if (value < 15*2) {
                            return "#DDDB9F"; // 绿色
                        }else if (value < 20*2) {
                            return "#E3AB86"; // 绿色
                        }else if (value < 25*2) {
                            return "#d7ab82"; // 绿色
                        }else if (value < 30*2) {
                            return "#E2825D"; // 绿色
                        }else if (value < 35*2) {
                            return "#DB7D72"; // 绿色
                        }else if (value < 40*2) {
                            return "#C14950"; // 绿色
                        }
						else {
                            return '#893448'; // 蓝色
                        }
                        }
                }
                },
                data: data2.map(function(dataItem) {
					return {
						name: dataItem[1].name,
						value: geoCoordMap[dataItem[1].name], // 起点的位置
						symbolSize: dataItem[1].value*0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
					};
				})
            },
        ]
    },
    //第三张子图
    {
        title: {
            text: '中东地区妇女儿童难民流动情况',
            subtext: '2019年',
            left: 'center', // 标题水平居中
            top: '20px' // 标题距离顶部20像素
        },
        tooltip: {
    trigger: 'item',
    formatter: function(params) {
        if (params.seriesType === 'effectScatter') {
            var dataColor = params.color;
            var dataName = params.name;
            var datasize_dyx = Math.round(params.data.symbolSize * 100);
            return '<div>' +
                '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
                '<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
            '</div>';
        };
        if(params.seriesType === 'lines'){
            console.log(params)
            var dataColor = params.color;
            var dataName = params.data.namecoutry;
            var datasize_dyx = Math.round(params.data.value);
            return '<div>' +
                '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
                '<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
            '</div>';
        }
    }
},series: [
                
    {//第一个，记录白色航线的特效图
        // 白色航线特效图
        type: 'lines',
        zlevel: 1, // 用于分层，z-index的效果
        effect: {
            show: true, // 动效是否显示
            period: 6, // 特效动画时间
            trailLength: 0.7, // 特效尾迹的长度
            color: '#fff', // 特效颜色
            symbolSize: 3 // 特效大小
        },
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: color[0],
                width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2 // 线条曲度
            }
        },
        data: convertData(data3)
        // data:[],
        // data: convertData(OMData) // 特效的起始、终点位置series[0].data
    },
    { // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                // color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2,
                color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.value;
                if (value < 100) {
                    return "#787464"; 
                } else if (value < 200) {
                    return "#8E9986"; 
                } else if (value < 300) {
                    return "#DDDB9F"; 
                }else if (value < 400) {
                    return "#d7ab82"; // 绿色
                }else if (value < 500) {
                    return "#E2825D"; // 绿色
                }else if (value < 1000) {
                    return "#DB7D72"; // 绿色
                }else if (value < 2000) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
            }
        },
        data: convertData(data3)
        // data:[],
        // data: convertData(OMData), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])  series[1].data
    },
    {//终点的效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke' // 波纹绘制效果
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: false
            }
        },
        itemStyle: {
        normal: {
            color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.symbolSize;
                if (value < 5*2) {
                    return "#787464"; // 红色
                } else if (value < 10*2) {
                    return "#8E9986"; // 绿色
                } else if (value < 15*2) {
                    return "#DDDB9F"; // 绿色
                }else if (value < 20*2) {
                    return "#E3AB86"; // 绿色
                }else if (value < 25*2) {
                    return "#d7ab82"; // 绿色
                }else if (value < 30*2) {
                    return "#E2825D"; // 绿色
                }else if (value < 35*2) {
                    return "#DB7D72"; // 绿色
                }else if (value < 40*2) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
        }
        },
        data: data3.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name], // 起点的位置
                symbolSize: dataItem[1].value*0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    },
    
    ]
},
//第四张子图
{
    title: {
        text: '中东地区妇女儿童难民流动情况',
        subtext: '2020年',
        left: 'center', // 标题水平居中
        top: '20px' // 标题距离顶部20像素
    },
    tooltip: {
trigger: 'item',
formatter: function(params) {
    if (params.seriesType === 'effectScatter') {
        var dataColor = params.color;
        var dataName = params.name;
        var datasize_dyx = Math.round(params.data.symbolSize * 100);
        return '<div>' +
            '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
            '<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
        '</div>';
    };
    if(params.seriesType === 'lines'){
        console.log(params)
        var dataColor = params.color;
        var dataName = params.data.namecoutry;
        var datasize_dyx = Math.round(params.data.value);
        return '<div>' +
            '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
            '<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
        '</div>';
    }
}
},series: [
                
    {//第一个，记录白色航线的特效图
        // 白色航线特效图
        type: 'lines',
        zlevel: 1, // 用于分层，z-index的效果
        effect: {
            show: true, // 动效是否显示
            period: 6, // 特效动画时间
            trailLength: 0.7, // 特效尾迹的长度
            color: '#fff', // 特效颜色
            symbolSize: 3 // 特效大小
        },
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: color[0],
                width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2 // 线条曲度
            }
        },
        data: convertData(data4)
    },
    { // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                // color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2,
                color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.value;
                if (value < 100) {
                    return "#787464"; 
                } else if (value < 200) {
                    return "#8E9986"; 
                } else if (value < 300) {
                    return "#DDDB9F"; 
                }else if (value < 400) {
                    return "#d7ab82"; // 绿色
                }else if (value < 500) {
                    return "#E2825D"; // 绿色
                }else if (value < 1000) {
                    return "#DB7D72"; // 绿色
                }else if (value < 2000) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
            }
        },
        data: convertData(data4)
        // data:[],
        // data: convertData(OMData), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])  series[1].data
    },
    {//终点的效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke' // 波纹绘制效果
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: false,
            }
        },
        itemStyle: {
        normal: {
            color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.symbolSize;
                if (value < 5*2) {
                    return "#787464"; // 红色
                } else if (value < 10*2) {
                    return "#8E9986"; // 绿色
                } else if (value < 15*2) {
                    return "#DDDB9F"; // 绿色
                }else if (value < 20*2) {
                    return "#E3AB86"; // 绿色
                }else if (value < 25*2) {
                    return "#d7ab82"; // 绿色
                }else if (value < 30*2) {
                    return "#E2825D"; // 绿色
                }else if (value < 35*2) {
                    return "#DB7D72"; // 绿色
                }else if (value < 40*2) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
        }
        },
        data: data4.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name], // 起点的位置
                symbolSize: dataItem[1].value *0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    },
    

    
    ]
},
//第五张子图
{
    title: {
        text: '中东地区妇女儿童难民流动情况',
        subtext: '2021年',
        left: 'center', // 标题水平居中
        top: '20px' // 标题距离顶部20像素
    },
    tooltip: {
trigger: 'item',
formatter: function(params) {
    if (params.seriesType === 'effectScatter') {
        var dataColor = params.color;
        var dataName = params.name;
        var datasize_dyx = Math.round(params.data.symbolSize * 100);
        return '<div>' +
            '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
            '<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
        '</div>';
    };
    if(params.seriesType === 'lines'){
        console.log(params)
        var dataColor = params.color;
        var dataName = params.data.namecoutry;
        var datasize_dyx = Math.round(params.data.value);
        return '<div>' +
            '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
            '<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
        '</div>';
    }
}
},
series: [
                
    {//第一个，记录白色航线的特效图
        // 白色航线特效图
        type: 'lines',
        zlevel: 1, // 用于分层，z-index的效果
        effect: {
            show: true, // 动效是否显示
            period: 6, // 特效动画时间
            trailLength: 0.7, // 特效尾迹的长度
            color: '#fff', // 特效颜色
            symbolSize: 3 // 特效大小
        },
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: color[0],
                width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2 // 线条曲度
            }
        },
        data: convertData(data5)
    },
    { // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                // color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2,
                color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.value;
                if (value < 100) {
                    return "#787464"; 
                } else if (value < 200) {
                    return "#8E9986"; 
                } else if (value < 300) {
                    return "#DDDB9F"; 
                }else if (value < 400) {
                    return "#d7ab82"; // 绿色
                }else if (value < 500) {
                    return "#E2825D"; // 绿色
                }else if (value < 1000) {
                    return "#DB7D72"; // 绿色
                }else if (value < 2000) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
            }
        },
        data: convertData(data5)
        // data:[],
        // data: convertData(OMData), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])  series[1].data
    },{//终点的效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke' // 波纹绘制效果
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: false,
            }
        },
        itemStyle: {
        normal: {
            color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.symbolSize;
                if (value < 5*2) {
                    return "#787464"; // 红色
                } else if (value < 10*2) {
                    return "#8E9986"; // 绿色
                } else if (value < 15*2) {
                    return "#DDDB9F"; // 绿色
                }else if (value < 20*2) {
                    return "#E3AB86"; // 绿色
                }else if (value < 25*2) {
                    return "#d7ab82"; // 绿色
                }else if (value < 30*2) {
                    return "#E2825D"; // 绿色
                }else if (value < 35*2) {
                    return "#DB7D72"; // 绿色
                }else if (value < 40*2) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
        }
        },
        data: data5.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name], // 起点的位置
                symbolSize: dataItem[1].value *0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    },
    
    
    ]
},
//第六张子图
{
    title: {
        text: '中东地区妇女儿童难民流动情况',
        subtext: '2022年',
        left: 'center', // 标题水平居中
        top: '20px' // 标题距离顶部20像素
    },
    tooltip: {
trigger: 'item',
formatter: function(params) {
    if (params.seriesType === 'effectScatter') {
        var dataColor = params.color;
        var dataName = params.name;
        var datasize_dyx = Math.round(params.data.symbolSize * 100);
        return '<div>' +
            '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
            '<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
        '</div>';
    };
    if(params.seriesType === 'lines'){
        console.log(params)
        var dataColor = params.color;
        var dataName = params.data.namecoutry;
        var datasize_dyx = Math.round(params.data.value);
        return '<div>' +
            '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
            '<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
        '</div>';
    }
}
}, series: [
                
    {//第一个，记录白色航线的特效图
        // 白色航线特效图
        type: 'lines',
        zlevel: 1, // 用于分层，z-index的效果
        effect: {
            show: true, // 动效是否显示
            period: 6, // 特效动画时间
            trailLength: 0.7, // 特效尾迹的长度
            color: '#fff', // 特效颜色
            symbolSize: 3 // 特效大小
        },
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: color[0],
                width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2 // 线条曲度
            }
        },
        data: convertData(data6)
    },{ // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                // color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2,
                color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.value;
                if (value < 100) {
                    return "#787464"; 
                } else if (value < 200) {
                    return "#8E9986"; 
                } else if (value < 300) {
                    return "#DDDB9F"; 
                }else if (value < 400) {
                    return "#d7ab82"; // 绿色
                }else if (value < 500) {
                    return "#E2825D"; // 绿色
                }else if (value < 1000) {
                    return "#DB7D72"; // 绿色
                }else if (value < 2000) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
            }
        },
        data: convertData(data6)
        // data:[],
        // data: convertData(OMData), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])  series[1].data
    },{//终点的效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke' // 波纹绘制效果
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: false,
            }
        },
        itemStyle: {
        normal: {
            color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.symbolSize;
                if (value < 5*2) {
                    return "#787464"; // 红色
                } else if (value < 10*2) {
                    return "#8E9986"; // 绿色
                } else if (value < 15*2) {
                    return "#DDDB9F"; // 绿色
                }else if (value < 20*2) {
                    return "#E3AB86"; // 绿色
                }else if (value < 25*2) {
                    return "#d7ab82"; // 绿色
                }else if (value < 30*2) {
                    return "#E2825D"; // 绿色
                }else if (value < 35*2) {
                    return "#DB7D72"; // 绿色
                }else if (value < 40*2) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
        }
        },
        data: data6.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name], // 起点的位置
                symbolSize: dataItem[1].value *0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    },
   
    ]
},//第七张子图
{
    title: {
        text: '中东地区妇女儿童难民流动情况',
        subtext: '2023年',
        left: 'center', // 标题水平居中
        top: '20px' // 标题距离顶部20像素
    },
        tooltip: {
    trigger: 'item',
    formatter: function(params) {
        if (params.seriesType === 'effectScatter') {
            var dataColor = params.color;
            var dataName = params.name;
            var datasize_dyx = Math.round(params.data.symbolSize * 100);
            return '<div>' +
                '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
                '<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
            '</div>';
        };
        if(params.seriesType === 'lines'){
            console.log(params)
            var dataColor = params.color;
            var dataName = params.data.namecoutry;
            var datasize_dyx = Math.round(params.data.value);
            return '<div>' +
                '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
                '<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
            '</div>';
        }
    }
}, series: [
                
    {//第一个，记录白色航线的特效图
        // 白色航线特效图
        type: 'lines',
        zlevel: 1, // 用于分层，z-index的效果
        effect: {
            show: true, // 动效是否显示
            period: 6, // 特效动画时间
            trailLength: 0.7, // 特效尾迹的长度
            color: '#fff', // 特效颜色
            symbolSize: 3 // 特效大小
        },
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: color[0],
                width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2 // 线条曲度
            }
        },
        data: convertData(data7)
    },
    { // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                // color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2,
                color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.value;
                if (value < 100) {
                    return "#787464"; 
                } else if (value < 200) {
                    return "#8E9986"; 
                } else if (value < 300) {
                    return "#DDDB9F"; 
                }else if (value < 400) {
                    return "#d7ab82"; // 绿色
                }else if (value < 500) {
                    return "#E2825D"; // 绿色
                }else if (value < 1000) {
                    return "#DB7D72"; // 绿色
                }else if (value < 2000) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
            }
        },
        data: convertData(data7)
        // data:[],
        // data: convertData(OMData), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])  series[1].data
    }, {//终点的效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke' // 波纹绘制效果
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: false,
            }
        },
        itemStyle: {
        normal: {
            color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.symbolSize;
                if (value < 5*2) {
                    return "#787464"; // 红色
                } else if (value < 10*2) {
                    return "#8E9986"; // 绿色
                } else if (value < 15*2) {
                    return "#DDDB9F"; // 绿色
                }else if (value < 20*2) {
                    return "#E3AB86"; // 绿色
                }else if (value < 25*2) {
                    return "#d7ab82"; // 绿色
                }else if (value < 30*2) {
                    return "#E2825D"; // 绿色
                }else if (value < 35*2) {
                    return "#DB7D72"; // 绿色
                }else if (value < 40*2) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
        }
        },
        data: data7.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name], // 起点的位置
                symbolSize: dataItem[1].value *0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    },
    
    
    ]
},//第八张子图
{
    title: {
        text: '中东地区妇女儿童难民流动情况',
        subtext: '2024年',
        left: 'center', // 标题水平居中
        top: '20px' // 标题距离顶部20像素
    },
        tooltip: {
    trigger: 'item',
    formatter: function(params) {
        if (params.seriesType === 'effectScatter') {
            var dataColor = params.color;
            var dataName = params.name;
            var datasize_dyx = Math.round(params.data.symbolSize * 100);
            return '<div>' +
                '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
                '<span>' + '        ' + dataName +  ':'+datasize_dyx +'</span>' +
            '</div>';
        };
        if(params.seriesType === 'lines'){
            console.log(params)
            var dataColor = params.color;
            var dataName = params.data.namecoutry;
            var datasize_dyx = Math.round(params.data.value);
            return '<div>' +
                '<div style="border-radius:2px;display:inline-block;width:10px;height:10px;background-color:' + dataColor + '   "></div>' +
                '<span>' + '        ' + dataName[0]+'——>'+ dataName[1] +  '<br>'+datasize_dyx +'</span>' +
            '</div>';
        }
    }
}, series: [
                
    {//第一个，记录白色航线的特效图
        // 白色航线特效图
        type: 'lines',
        zlevel: 1, // 用于分层，z-index的效果
        effect: {
            show: true, // 动效是否显示
            period: 6, // 特效动画时间
            trailLength: 0.7, // 特效尾迹的长度
            color: '#fff', // 特效颜色
            symbolSize: 3 // 特效大小
        },
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: color[0],
                width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2 // 线条曲度
            }
        },
        data: convertData(data8)
    },
    { // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath, // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                // color: color[0],
                width: 1,
                opacity: 0.6,
                curveness: -0.2,
                color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.value;
                if (value < 100) {
                    return "#787464"; 
                } else if (value < 200) {
                    return "#8E9986"; 
                } else if (value < 300) {
                    return "#DDDB9F"; 
                }else if (value < 400) {
                    return "#d7ab82"; // 绿色
                }else if (value < 500) {
                    return "#E2825D"; // 绿色
                }else if (value < 1000) {
                    return "#DB7D72"; // 绿色
                }else if (value < 2000) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
            }
        },
        data: convertData(data8)
        // data:[],
        // data: convertData(OMData), // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])  series[1].data
    },{//终点的效果
        type: 'effectScatter',
        coordinateSystem: 'geo', // 表示使用的坐标系为地理坐标系
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke' // 波纹绘制效果
        },
        label: {
            normal: { // 默认的文本标签显示样式
                show: false,
            }
        },
        itemStyle: {
        normal: {
            color: function(params) {
                // 根据value值设置不同的颜色
                var value = params.data.symbolSize;
                if (value < 5*2) {
                    return "#787464"; // 红色
                } else if (value < 10*2) {
                    return "#8E9986"; // 绿色
                } else if (value < 15*2) {
                    return "#DDDB9F"; // 绿色
                }else if (value < 20*2) {
                    return "#E3AB86"; // 绿色
                }else if (value < 25*2) {
                    return "#d7ab82"; // 绿色
                }else if (value < 30*2) {
                    return "#E2825D"; // 绿色
                }else if (value < 35*2) {
                    return "#DB7D72"; // 绿色
                }else if (value < 40*2) {
                    return "#C14950"; // 绿色
                }
                else {
                    return '#893448'; // 蓝色
                }
                }
        }
        },
        data: data8.map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name], // 起点的位置
                symbolSize: dataItem[1].value *0.01, // 散点的大小，通过之前设置的权重来计算，val的值来自data返回的value
            };
        })
    },
    
    
    ]
}
]

};
myChart.setOption(option);
});