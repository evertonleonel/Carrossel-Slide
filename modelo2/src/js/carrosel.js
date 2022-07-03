function carossel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container

    this.itens = (typeof config.itens === 'string')? this.container.querySelectorAll(this.itens) : config.itens

    this.prev = (typeof config.prev === 'string')? this.container.querySelectorAll(this.prev) : config.prev

    this.next = (typeof config.next === 'string')? this.container.querySelectorAll(this.next) : config.next

    let _this = this;
    let _currentSlide = 0

    init()

    function init(){
        var _show = _this.container.querySelectorAll('.show')

        //Evita usar o forEach padrão que não pega no Internet Explorer
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })

        _this.itens[0].classList.add('show')
        _this.prev.removeAttribute('style')
        _this.next.removeAttribute('style')

        addListeners()
        
    }
    function addListeners(){
        _this.next.addEventListener('click', showNextSlide)
        _this.prev.addEventListener('click', showPrevSlide)
    }

    function showNextSlide(){
        _currentSlide++;
        showSLide()
    }
}