export const listMixin = {
  data () {
    return {
      page: 1,
      total: 0,
      pageSize: this.CONSTS.PAGESIZE,
      query: {
        size: this.CONSTS.PAGESIZE,
        page: 1
      },
      list: [],
      time: [],
      code: null
    }
  },
  created () {
    this.search()
  },
  methods: {
    daterange (val) {
      this.query.startTime = val[0]
      this.query.endTime = val[1]
    },
    search () {
      this.page = 1
      this.query.page = 1
      this.getList()
    },
    changepage (data) {
      this.page = data
      this.query.page = data
      this.query.start = parseInt(data - 1) * parseInt(this.query.size)
      this.getList()
    },
    handlePageSize (count) {
      this.query.size = count
      this.pageSize = count
      this.getList()
    },
    reloadList () {
      this.query = {
        size: this.CONSTS.PAGESIZE,
        page: 1
      }
      this.getList()
    },
    /**
     * 导出xls
     */
    download (data, filename) {
      console.log(data)
      var blob = new Blob([data]) // 创建一个blob对象
      var a = document.createElement('a') // 创建一个<a></a>标签
      a.href = URL.createObjectURL(blob) // response is a blob
      a.download = filename // 文件名称
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      a.remove()
    }
  }
}

export const formMixin = {
  methods: {
    resetForm (name) {
      this.$refs[name].fields.forEach(e => {
        e.resetField()
      })
    }
  }
}
