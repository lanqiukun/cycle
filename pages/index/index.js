
const app = getApp()

Page({
  data: {
    list_data: [
      {content: 0,  style: '0'}, 
      {content: 1,  style: '1'}, 
      {content: 2,  style: '2'}, 
      {content: 3,  style: '3'}, 
      {content: 4,  style: '4'}, 
      {content: 5,  style: '5'}, 
      {content: 6,  style: '6'}, 
      {content: 7,  style: '7'}, 
      {content: 8,  style: '8'}, 
      {content: 9,  style: '9'}, 
      {content: 10, style: '10'}, 
      {content: 11, style: '11'}, 
      {content: 12, style: '12'}, 
      {content: 13, style: '13'}, 
      {content: 14, style: '14'}, 
      {content: 15, style: '15'}, 
    ],
  },

  handle_scroll(event) {
    let scroll_top = event.detail.scrollTop
    
    let target_index = parseInt(scroll_top / 70)


    let list_data = this.data.list_data

    list_data[target_index + 0].style = 'shift80'
    list_data[target_index + 1].style = 'shift60'
    list_data[target_index + 2].style = 'shift40'
    list_data[target_index + 3].style = 'shift20'
    list_data[target_index + 4].style = 'shift00'
    list_data[target_index + 5].style = 'shift20'
    list_data[target_index + 6].style = 'shift40'
    list_data[target_index + 7].style = 'shift60'
    
    this.setData({
      list_data
    })

  },

  onLoad() {
    let list_data = this.data.list_data
    let target_index = 0
    list_data[target_index + 0].style = 'shift80'
    list_data[target_index + 1].style = 'shift60'
    list_data[target_index + 2].style = 'shift40'
    list_data[target_index + 3].style = 'shift20'
    list_data[target_index + 4].style = 'shift00'
    list_data[target_index + 5].style = 'shift20'
    list_data[target_index + 6].style = 'shift40'
    list_data[target_index + 7].style = 'shift60'
    list_data[target_index + 8].style = 'shift80'

    this.setData({list_data})
  }

  
})
