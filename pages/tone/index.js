// pages/tone/index.js
const myaudio = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toneList: [
      {
        title: '单韵母声调 Single Vowel Tone',
        desc: '单韵母共6个,单韵母：a o e i u ü',
        tones: [{
            tone: [{
              py: 'ā',
              tone: 1,
              original: 'a'
            }, {
              py: 'á',
              tone: 2,
              original: 'a'
            }, {
              py: 'ǎ',
              tone: 3,
              original: 'a'
            }, {
              py: 'à',
              tone: 4,
              original: 'a'
            }]
          }, {
            tone: [{
              py: 'ō',
              tone: 1,
              original: 'o'
            }, {
              py: 'ó',
              tone: 2,
              original: 'o'
            }, {
              py: 'ǒ',
              tone: 3,
              original: 'o'
            }, {
              py: 'ò',
              tone: 4,
              original: 'o'
            }]
          }, {
            tone: [{
              py: 'ē',
              tone: 1,
              original: 'e'
            }, {
              py: 'é',
              tone: 2,
              original: 'e'
            }, {
              py: 'ě',
              tone: 3,
              original: 'e'
            }, {
              py: 'è',
              tone: 4,
              original: 'e'
            }]
          },
          {
            tone: [{
              py: 'ī',
              tone: 1,
              original: 'i'
            }, {
              py: 'í',
              tone: 2,
              original: 'i'
            }, {
              py: 'ǐ',
              tone: 3,
              original: 'i'
            }, {
              py: 'ì',
              tone: 4,
              original: 'i'
            }]
          }, {
            tone: [{
              py: 'ū',
              tone: 1,
              original: 'u'
            }, {
              py: 'ú',
              tone: 2,
              original: 'u'
            }, {
              py: 'ǔ',
              tone: 3,
              original: 'u'
            }, {
              py: 'ù',
              tone: 4,
              original: 'u'
            }]
          },
          {
            tone: [{
              py: 'ǖ',
              tone: 1,
              original: 'v'
            }, {
              py: "ǘ",
              tone: 2,
              original: 'v'
            }, {
              py: 'ǚ',
              tone: 3,
              original: 'v'
            }, {
              py: 'ǜ',
              tone: 4,
              original: 'v'
            }]
          }
        ]
      },
      {
        title: '复韵母声调 Complex Vowel Tone',
        desc: '复韵母：ai ei ui ao ou iu ie üe, 特殊韵母：er',
        tones: [{
          tone: [{
            py: 'āi',
            tone: 1,
            original: 'ai'
          }, {
            py: 'ái',
            tone: 2,
            original: 'ai'
          }, {
            py: 'ǎi',
            tone: 3,
            original: 'ai'
          }, {
            py: 'ài',
            tone: 4,
            original: 'ai'
          }]
        }, {
          tone: [{
            py: 'ēi',
            tone: 1,
            original: 'ei'
          }, {
            py: 'éi',
            tone: 2,
            original: 'ei'
          }, {
            py: 'ěi',
            tone: 3,
            original: 'ei'
          }, {
            py: 'èi',
            tone: 4,
            original: 'ei'
          }]
        }, {
          tone: [{
            py: 'uī',
            tone: 1,
            original: 'ui'
          }, {
            py: 'uí',
            tone: 2,
            original: 'ui'
          }, {
            py: 'uǐ',
            tone: 3,
            original: 'ui'
          }, {
            py: 'uì',
            tone: 4,
            original: 'ui'
          }]
        }, {
          tone: [{
            py: 'āo',
            tone: 1,
            original: 'ao'
          }, {
            py: 'áo',
            tone: 2,
            original: 'ao'
          }, {
            py: 'ǎo',
            tone: 3,
            original: 'ao'
          }, {
            py: 'ào',
            tone: 4,
            original: 'ao'
          }]
        }, {
          tone: [{
            py: 'ōu',
            tone: 1,
            original: 'ou'
          }, {
            py: 'óu',
            tone: 2,
            original: 'ou'
          }, {
            py: 'ǒu',
            tone: 3,
            original: 'ou'
          }, {
            py: 'òu',
            tone: 4,
            original: 'ou'
          }]
        }, {
          tone: [{
            py: 'iū',
            tone: 1,
            original: 'iu'
          }, {
            py: 'iú',
            tone: 2,
            original: 'iu'
          }, {
            py: 'iǔ',
            tone: 3,
            original: 'iu'
          }, {
            py: 'iù',
            tone: 4,
            original: 'iu'
          }]
        }, {
          tone: [{
            py: 'iē',
            tone: 1,
            original: 'ie'
          }, {
            py: 'ié',
            tone: 2,
            original: 'ie'
          }, {
            py: 'iě',
            tone: 3,
            original: 'ie'
          }, {
            py: 'iè',
            tone: 4,
            original: 'ie'
          }]
        }, {
          tone: [{
            py: 'üē',
            tone: 1,
            original: 've'
          }, {
            py: 'üé',
            tone: 2,
            original: 've'
          }, {
            py: 'üě',
            tone: 3,
            original: 've'
          }, {
            py: 'üè',
            tone: 4,
            original: 've'
          }]
        }, {
          tone: [{
            py: 'ēr',
            tone: 1,
            original: 'er'
          }, {
            py: 'ér',
            tone: 2,
            original: 'er'
          }, {
            py: 'ěr',
            tone: 3,
            original: 'er'
          }, {
            py: 'èr',
            tone: 4,
            original: 'er'
          }]
        }, ]
      },
      {
        title: '鼻韵母声调 Nasal Vowel Tone',
        desc: '鼻韵母共9个鼻韵母：an en in un ün ang eng ing ong',
        tones: [{
            tone: [{
              py: 'ān',
              tone: 1,
              original: 'an'
            }, {
              py: 'án',
              tone: 2,
              original: 'an'
            }, {
              py: 'ǎn',
              tone: 3,
              original: 'an'
            }, {
              py: 'àn',
              tone: 4,
              original: 'an'
            }]
          }, {
            tone: [{
              py: 'ēn',
              tone: 1,
              original: 'en'
            }, {
              py: 'én',
              tone: 2,
              original: 'en'
            }, {
              py: 'ěn',
              tone: 3,
              original: 'en'
            }, {
              py: 'èn',
              tone: 4,
              original: 'en'
            }]
          }, {
            tone: [{
              py: 'īn',
              tone: 1,
              original: 'in'
            }, {
              py: 'ín',
              tone: 2,
              original: 'in'
            }, {
              py: 'nǐ',
              tone: 3,
              original: 'in'
            }, {
              py: 'nì',
              tone: 4,
              original: 'in'
            }]
          },
          {
            tone: [{
              py: 'ūn',
              tone: 1,
              original: 'un'
            }, {
              py: 'ún',
              tone: 2,
              original: 'un'
            }, {
              py: 'ǔn',
              tone: 3,
              original: 'un'
            }, {
              py: 'nù',
              tone: 4,
              original: 'un'
            }]
          }, {
            tone: [{
              py: 'ǖn',
              tone: 1,
              original: 'vn'
            }, {
              py: 'ǘn',
              tone: 2,
              original: 'vn'
            }, {
              py: 'ǚn',
              tone: 3,
              original: 'vn'
            }, {
              py: 'nǜ',
              tone: 4,
              original: 'vn'
            }]
          },
          {
            tone: [{
              py: 'āng',
              tone: 1,
              original: 'ang'
            }, {
              py: "áng",
              tone: 2,
              original: 'ang'
            }, {
              py: 'ǎng',
              tone: 3,
              original: 'ang'
            }, {
              py: 'àng',
              tone: 4,
              original: 'ang'
            }]
          },
          {
            tone: [{
              py: 'ēng',
              tone: 1,
              original: 'eng'
            }, {
              py: "éng",
              tone: 2,
              original: 'eng'
            }, {
              py: 'ěng',
              tone: 3,
              original: 'eng'
            }, {
              py: 'èng',
              tone: 4,
              original: 'eng'
            }]
          },
          {
            tone: [{
              py: 'īng',
              tone: 1,
              original: 'ing'
            }, {
              py: "íng",
              tone: 2,
              original: 'ing'
            }, {
              py: 'ǐng',
              tone: 3,
              original: 'ing'
            }, {
              py: 'ìng',
              tone: 4,
              original: 'ing'
            }]
          },
          {
            tone: [{
              py: 'ōng',
              tone: 1,
              original: 'ong'
            }, {
              py: "óng",
              tone: 2,
              original: 'ong'
            }, {
              py: 'ǒng',
              tone: 3,
              original: 'ong'
            }, {
              py: 'òng',
              tone: 4,
              original: 'ong'
            }]
          }
        ]
      },
      {
        title: '整体认读音节 Whole Syllable',
        desc: '整体认读音节共16个::zhi chi shi ri zi ci si yi wu yu ye yue yuan yin yun ying',
        tones: [{
            tone: [{
              py: 'zhī',
              tone: 1,
              original: 'zhi'
            }, {
              py: 'zhí',
              tone: 2,
              original: 'zhi'
            }, {
              py: 'zhǐ',
              tone: 3,
              original: 'zhi'
            }, {
              py: 'zhì',
              tone: 4,
              original: 'zhi'
            }]
          }, {
            tone: [{
              py: 'chī',
              tone: 1,
              original: 'chi'
            }, {
              py: 'chí',
              tone: 2,
              original: 'chi'
            }, {
              py: 'chǐ',
              tone: 3,
              original: 'chi'
            }, {
              py: 'chì',
              tone: 4,
              original: 'chi'
            }]
          }, {
            tone: [{
              py: 'shī',
              tone: 1,
              original: 'shi'
            }, {
              py: 'shí',
              tone: 2,
              original: 'shi'
            }, {
              py: 'shǐ',
              tone: 3,
              original: 'shi'
            }, {
              py: 'shì',
              tone: 4,
              original: 'shi'
            }]
          },
          {
            tone: [{
              py: 'rī',
              tone: 1,
              original: 'ri'
            }, {
              py: 'rí',
              tone: 2,
              original: 'ri'
            }, {
              py: 'rǐ',
              tone: 3,
              original: 'ri'
            }, {
              py: 'rì',
              tone: 4,
              original: 'ri'
            }]
          },
          {
            tone: [{
              py: 'zī',
              tone: 1,
              original: 'zi'
            }, {
              py: 'zí',
              tone: 2,
              original: 'zi'
            }, {
              py: 'zǐ',
              tone: 3,
              original: 'zi'
            }, {
              py: 'zì',
              tone: 4,
              original: 'zi'
            }]
          },
          {
            tone: [{
              py: 'cī',
              tone: 1,
              original: 'ci'
            }, {
              py: 'cí',
              tone: 2,
              original: 'ci'
            }, {
              py: 'cǐ',
              tone: 3,
              original: 'ci'
            }, {
              py: 'cì',
              tone: 4,
              original: 'ci'
            }]
          },
          {
            tone: [{
              py: 'sī',
              tone: 1,
              original: 'si'
            }, {
              py: 'sí',
              tone: 2,
              original: 'si'
            }, {
              py: 'sǐ',
              tone: 3,
              original: 'si'
            }, {
              py: 'sì',
              tone: 4,
              original: 'si'
            }]
          },
          {
            tone: [{
              py: 'yī',
              tone: 1,
              original: 'yi'
            }, {
              py: 'yí',
              tone: 2,
              original: 'yi'
            }, {
              py: 'yǐ',
              tone: 3,
              original: 'yi'
            }, {
              py: 'yì',
              tone: 4,
              original: 'yi'
            }]
          }, {
            tone: [{
              py: 'wū',
              tone: 1,
              original: 'wu'
            }, {
              py: 'wú',
              tone: 2,
              original: 'wu'
            }, {
              py: 'wǔ',
              tone: 3,
              original: 'wu'
            }, {
              py: 'wù',
              tone: 4,
              original: 'wu'
            }]
          },{
            tone: [{
              py: 'yū',
              tone: 1,
              original: 'yu'
            }, {
              py: 'yú',
              tone: 2,
              original: 'yu'
            }, {
              py: 'yǔ',
              tone: 3,
              original: 'yu'
            }, {
              py: 'yù',
              tone: 4,
              original: 'yu'
            }]
          }, {
            tone: [{
              py: 'yē',
              tone: 1,
              original: 'ye'
            }, {
              py: 'yé',
              tone: 2,
              original: 'ye'
            }, {
              py: 'yě',
              tone: 3,
              original: 'ye'
            }, {
              py: 'yè',
              tone: 4,
              original: 'ye'
            }]
          }, {
            tone: [{
              py: 'yuē',
              tone: 1,
              original: 'yue'
            }, {
              py: 'yué',
              tone: 2,
              original: 'yue'
            }, {
              py: 'yuě',
              tone: 3,
              original: 'yue'
            }, {
              py: 'yuè',
              tone: 4,
              original: 'yue'
            }]
          },
          {
            tone: [{
              py: 'yuān',
              tone: 1,
              original: 'yuan'
            }, {
              py: "yuán",
              tone: 2,
              original: 'yuan'
            }, {
              py: 'yuǎn',
              tone: 3,
              original: 'yuan'
            }, {
              py: 'yuàn',
              tone: 4,
              original: 'yuan'
            }]
          },
          {
            tone: [{
              py: 'yīn',
              tone: 1,
              original: 'yin'
            }, {
              py: "yín",
              tone: 2,
              original: 'yin'
            }, {
              py: 'yǐn',
              tone: 3,
              original: 'yin'
            }, {
              py: 'yìn',
              tone: 4,
              original: 'yin'
            }]
          },{
            tone: [{
              py: 'yūn',
              tone: 1,
              original: 'yun'
            }, {
              py: 'yún',
              tone: 2,
              original: 'yun'
            }, {
              py: 'yǔn',
              tone: 3,
              original: 'yun'
            }, {
              py: 'yùn',
              tone: 4,
              original: 'yun'
            }]
          },
          {
            tone: [{
              py: 'yīng',
              tone: 1,
              original: 'ying'
            }, {
              py: "yíng",
              tone: 2,
              original: 'ying'
            }, {
              py: 'yǐng',
              tone: 3,
              original: 'ying'
            }, {
              py: 'yìng',
              tone: 4,
              original: 'ying'
            }]
          }
        ]
      },
    ]
  },
  play: function (e, a) {
    let str = e.currentTarget.dataset.original + e.currentTarget.dataset.tone
    // let strWholeSyllableImg = e.currentTarget.dataset.item
    // if (e.currentTarget.dataset.item.indexOf('ü') !== -1) {
    //   str = e.currentTarget.dataset.item.replace('ü', 'v')
    //   strWholeSyllableImg = str
    // }
    // if (e.currentTarget.dataset.type == 'wholeSyllable') {
    //   str = e.currentTarget.dataset.item + 1
    // }
    myaudio.src = `http://du.hanyupinyin.cn/du/pinyin/${str}.mp3`
    myaudio.play();
    // console.log(myaudio.duration);
    // this.setData({
    //   isplay: true,
    //   imgUrl: `http://www.hanyupinyin.cn/img/xf/${strWholeSyllableImg}.jpg`
    // });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})