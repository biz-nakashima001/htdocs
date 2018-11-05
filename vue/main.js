function initial(){
	new Vue({
		el: '#component01',
		data:{
			text: 'テスト用入力値'
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
			}
		}
	});

}
