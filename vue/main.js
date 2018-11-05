function initial(){

	new Vue({
		el: '#component01',
		data:{
			text: 'TextForTest_testtesttest'
		}
	});

	new Vue({
	  el: '#component02',
	  data: {
	    text: ''
	  }
	});

	new Vue({
	  el: '#component03',
	  data: {
	    input: '',
	    text: ''
	  },
	  methods: {
	    output: function () {
	      this.text = this.input;
	    }
	  }
	});

	new Vue({
	  el: '#component04',
	  data: {
	    input: '',
	    html: ''
	  },
	  methods: {
	    output: function () {
	      this.html = '<span style="color: #fc0;">' + this.input + '</span>';
	    }
	  }
	});

	new Vue({
	  el: '#component05',
	  data: {
	    number: ''
	  }
	});

	new Vue({
		el: '#component06',
		data: {
			text: ''
		},
		filters: {
			toUpperCase: function (value) {
				if (!value) return ''
				value = value.toString()
				return value.toUpperCase()
			},
			toLowerCase: function (value) {
				if (!value) return ''
				value = value.toString()
				return value.toLowerCase()
			}
		}
	});

	new Vue({
		el: '#component07',
		data: {
			number: '0'
		},
		computed: {
			calc3Times: function () {
				return this.number * 3;
			}
		}
	});

	new Vue({
		el: '#component08',
		data: {
			origin: '1000'
		},
		computed: {
			withTax: {
				get: function () {
					return parseInt(this.origin * 1.08)
				},
				set: function (value) {
					this.origin = Math.ceil(value / 1.08);
				}
			}
		}
	});

	new Vue({
		el: '#component09',
		data: {
			isShow: true,
			isHide: false
		},
		methods: {
			toggleClass: function () {
				this.isShow = !this.isShow;
				this.isHide = !this.isHide;
			}
		}
	});

	new Vue({
		el: '#component10',
		data: {
			isChecked: true
		},
		created: function () {
			this.flag = true;
		}
	});

	new Vue({
		el: '#component11',
		data: {
			data: [
				'hoge',
				'huga',
				'piyo',
				'punyo'
			]
		},
		created: function () {
			this.flag = true;
		}
	});

	Vue.component ('component12', {
		props: ['data'],
		template: '#js-template-component12'
	});
	
	new Vue({
		el: '#component12',
		data: {
			data: []
		}
	});

	new Vue({
		el: '#component13',
		data: {
			data: []
		}
	});

}
