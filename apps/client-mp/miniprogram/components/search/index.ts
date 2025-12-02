Component({
  properties: {
    placeholder: {
      type: String,
      value: '搜索商品'
    }
  },
  methods: {
    onChange(e: any) {
      this.triggerEvent('change', e.detail);
    },
    onSubmit() {
      // 统一业务逻辑：比如记录搜索历史
      console.log('用户搜索了，记录日志...');
      this.triggerEvent('submit');
    }
  }
});