const myaudio = wx.createInnerAudioContext();

Page({



  data: {

    isplay: false, //是否播放
    imgUrl:'../../icons/xuexi.png',
    dataList:[
      {
        title:'声母 Initials',
        description:"声母：23个,分别是：b p m f d t n l g k h j q x zh ch sh r z c s y w 。",
        pys:[{
          id: 1,
          py: 'b'
        },
        {
          id: 2,
          py: 'p'
        },
        {
          id: 3,
          py: 'm'
        },
        {
          id: 4,
          py: 'f'
        },
        {
          id: 5,
          py: 'd'
        },
        {
          id: 6,
          py: 't'
        },
        {
          id: 7,
          py: 'n'
        },
        {
          id: 8,
          py: 'l'
        },
        {
          id: 9,
          py: 'g'
        },
        {
          id: 10,
          py: 'k'
        },
        {
          id: 11,
          py: 'h'
        },
        {
          id: 12,
          py: 'j'
        },
        {
          id: 13,
          py: 'q'
        },
        {
          id: 14,
          py: 'x'
        },
        {
          id: 15,
          py: 'zh'
        },
        {
          id: 16,
          py: 'ch'
        },
        {
          id: 17,
          py: 'sh'
        },
        {
          id: 18,
          py: 'r'
        },
        {
          id: 19,
          py: 'z'
        },
        {
          id: 20,
          py: 'c'
        },
        {
          id: 21,
          py: 's'
        },
        {
          id: 22,
          py: 'y'
        },
        {
          id: 23,
          py: 'w'
        }
       
      ]
      },
     {
        title:'韵母 Compound Vowel',
        description:'声母共有24个,分别a o e i u v ai ei ui ao ou iu ie ve er an en in un vn ang eng ing ong.韵母共有：24个。 单韵母：a o e i u ü, 复韵母：ai ei ui ao ou iu ie üe, 特殊韵母：er, 鼻韵母：an en in un ün ang eng ing ong, 单韵母6个，复韵母8个，鼻韵母9个，特殊韵母1个。',
        pys:[
          {
            id:1,
            py:'a'
          },
          {
            id:2,
            py:'o'
          },
          {
            id:3,
            py:'e'
          },
          {
            id:4,
            py:'i'
          },
          {
            id:5,
            py:'u'
          },
          {
            id:6,
            py:'ü'
          },
          {
            id:7,
            py:'ai'
          },
          {
            id:8,
            py:'ei'
          },
          {
            id:9,
            py:'ui'
          },
          {
            id:10,
            py:'ao'
          },
          {
            id:11,
            py:'ou'
          },
          {
            id:12,
            py:'iu'
          },
          {
            id:13,
            py:'ie'
          },
          {
            id:14,
            py:'üe'
          },
          {
            id:15,
            py:'er'
          },
          {
            id:16,
            py:'an'
          },
          {
            id:17,
            py:'en'
          },
          {
            id:18,
            py:'in'
          },
          {
            id:19,
            py:'un'
          },
          {
            id:20,
            py:'ün'
          },
          {
            id:21,
            py:'ang'
          },
          {
            id:22,
            py:'eng'
          },
          {
            id:23,
            py:'ing'
          },
          {
            id:24,
            py:'ong'
          },
        ]
      },
      {
        title:'整体认读音节 Whole Syllable',
        description:'整体认读章节共16个:zhi chi shi ri zi ci si yi wu yu ye yue yuan yin yun ying',
        pys:[
          {
            id:1,
            py:'zhi',
            type:'wholeSyllable'
          },
          {
            id:2,
            py:'chi',
            type:'wholeSyllable'
          },
          {
            id:3,
            py:'shi',
            type:'wholeSyllable'
          },
          {
            id:4,
            py:'ri',
            type:'wholeSyllable'
          },
          {
            id:5,
            py:'zi',
            type:'wholeSyllable'
          },
          {
            id:6,
            py:'ci',
            type:'wholeSyllable'
          },
          {
            id:7,
            py:'ai',
            type:'wholeSyllable'
          },
          {
            id:8,
            py:'si',
            type:'wholeSyllable'
          },
          {
            id:9,
            py:'yi',
            type:'wholeSyllable'
          },
          {
            id:10,
            py:'wu',
            type:'wholeSyllable'
          },
          {
            id:11,
            py:'yu',
            type:'wholeSyllable'
          },
          {
            id:12,
            py:'ye',
            type:'wholeSyllable'
          },
          {
            id:13,
            py:'yue',
            type:'wholeSyllable'
          },
          {
            id:14,
            py:'yuan',
            type:'wholeSyllable'
          },
          {
            id:15,
            py:'yin',
            type:'wholeSyllable'
          },
          {
            id:16,
            py:'yun',
            type:'wholeSyllable'
          },
          {
            id:17,
            py:'ying',
            type:'wholeSyllable'
          }
        ]
      }
    ],
  },

  // onShow: function () {
  //   myaudio.src = "http://du.hanyupinyin.cn/du/pinyin/m.mp3"
  // },

  //播放

  play: function (e,a) {
    let str = e.currentTarget.dataset.item
    let strWholeSyllableImg = e.currentTarget.dataset.item
    if(e.currentTarget.dataset.item.indexOf('ü')!==-1){
      str = e.currentTarget.dataset.item.replace('ü','v')
      strWholeSyllableImg = str
    }
    if(e.currentTarget.dataset.type == 'wholeSyllable'){
      str = e.currentTarget.dataset.item + 1
    }
    myaudio.src = `http://du.hanyupinyin.cn/du/pinyin/${str}.mp3`
    myaudio.play();
    console.log(myaudio.duration);
    this.setData({
      isplay: true,
      imgUrl:`http://www.hanyupinyin.cn/img/xf/${strWholeSyllableImg}.jpg`
    });
  },

  // 停止
  stop: function () {
    myaudio.pause();
    this.setData({
      isplay: false
    });

  }
})