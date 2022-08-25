const selectWrapper = document.querySelectorAll('.select-wrapper')

selectWrapper.forEach((select) => {
  select.addEventListener('click', function () {
    this.querySelector('.select').classList.toggle('open');
  })
})

const options = document.querySelectorAll(".custom-option");

for (const option of options) {
  option.addEventListener('click', function () {
    
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
      
      const total = this.closest('.customselect').previousSibling.previousSibling;
      total.value = this.textContent;
    }
  })
}

window.addEventListener('click', function (e) {
  const selectAll = document.querySelectorAll('.select')

  for(const select of selectAll) {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  }
});