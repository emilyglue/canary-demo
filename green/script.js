$('.active').on('click',function() {
  console.log("hello world i am active")
  $(this).removeClass('active').addClass('disabled')
  $(this).prop('disabled', true)
})