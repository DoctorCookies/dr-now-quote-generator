var nav = new Vue({
  el: 'nav',
  data: {
    title: 'Dr. Now Quotes',
  }
})

var main = new Vue ({
  el: '#app',
  data: {
    title: 'Dr. Now Quotes',
    introduction: 'Click the button below to generate a Dr. Now quote!',
    introductionStyle: {
      fontSize: '0.8em'
    },
    images: [
      './img/img-1.jpg',
      './img/img-2.jpg',
      './img/img-3.jpg',
      './img/img-4.jpg',
      './img/img-5.jpg',
      './img/img-6.png',
      './img/img-7.jpeg',
      './img/img-8.jpg',
      './img/img-9.jpg',
      './img/img-10.jpg'
    ],
    quotes: [
      ['How y\'all doing today?','Classic Dr. Now'],
      ['This is not fashion show','Pauline\'s Story - S03E07'],
      ['There is no protein in mashed potato','Pauline\'s Story - S03E07'],
      ['<Patient>\'s surgery went very well',''],
      ['We need to address dis dysfunctional family dynamic goin\' on here',''],
      ['This behavior is unacceptable',''],
      ['Super!','Dr. Now, the Legend'],
      ['I not be da one to sign your death certificate!',''],
      ['Why you calling ambulance and abusing system!?','The infamous Assanti episode'],
      ['You are not 700 pounds of water.','Schenee\'s Story - S06E13'],
      ['I am going to admit you to da hospital',''],
      ['If you can lose 50 pound in one munt, I will approve you for weight loss surgery.',''],
      ['Stop doing weird things','The infamous Assanti episode'],
      ['I\’m proud of you',''],
      ['You could have easily lost thirty pounds dis munt',''],
      ['Do you look malnourished?',''],
      ['Pizza is not part of your diet when you are 700 pounds','https://www.youtube.com/watch?v=h8KmAPkWgTg'],
      ['Let\’s call the News! I\’ll call them right now.','The infamous Assanti episode'],
      ['Dead and immobile people aren\’t late to work',''],
      ['Who is bringing you the food?',''],
      ['Dis is unacceptable',''],
      ['Tell me about your eating habit',''],
      ['The scale doesn\’t lie, people lie.',''],
      ['You are bringing in the food, you are helping them to kill him. Why you doing dat? ',''],
      ['How the hell is he going to raise hell in the bed?','James K\'s Story - S05E11'],
      ['How y\'all doing? Survivin\'huh?',''],
      ['Why did you miss your last appointment?',''],
      ['You had a gastric bypass to lose weight[...] You\'re choosing to overeat, and you tink dat\'s okay?!?','Rena & Lee\'s Story - S06E01'],
      ['<Patient> has come a very long way',''],
      ['This is not a good situation',''],
      ['You weigh over 500 pounds, you are not going to starve to death!',''],
      ['You don\'t need something to eat, you have 800 pounds food in you',''],
      ['It does not matter what you say. The scale tell me all I need to know.',''],
      ['You don\'t look human anymore',''],
      ['Stop making excuses','']
      ],
    stop: false,
    styleQuote: {
      height: '',
      backgroundColor: '',
    }
  },
  methods: {
    shuffle: function() {
      this.quotes = _.shuffle(this.quotes),
      this.images = _.shuffle(this.images)
    }
  }
}) // END VUE
