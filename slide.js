  let TodasImgs =  new carrossel ({
    container: '.content .slides',
    itens: '.slide',
    prev: '.navegation .prev',
    next: '.navegation .next',
})


function carrossel(config){
    this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    // se nosso container for uma string pegamos seu document, se não pegamos o próprio objeto;
    console.log(this.container)

    this.itens = (typeof config.itens === 'string') ? document.querySelectorAll(config.itens) : config.itens;
    // Pegamos tdas figures
    console.log(this.itens)

    this.prev = (typeof config.prev === 'string') ? document.querySelectorAll(config.prev) : config.prev;
    console.log(this.prev)

    this.next = (typeof config.next === 'string') ? document.querySelectorAll(config.next) : config.next;
    console.log(this.next)


    // Pegando o objeto carrossel
    const _this = this;
    let _slideAtual = 0;

    //função para remover uma classe quando iniciar o carrossel
    iniciar();

    function iniciar(){
      let _show = _this.container.querySelectorAll('.show');

      _show.forEach(function(elShow){
        console.log('estou em', elShow)
        elShow.classList.remove('show');
        console.log( 'sem show' , elShow)
      })

      _this.itens[0].classList.add('show')
      
      adicionarListener()

    }

    function adicionarListener(){
        _this.next.addEventListener('click', showNextSlide)
        _this.prev.addEventListener('click', showPrevSlide)
    }

    function showNextSlide(){
        //Atualiza o slide atual
        _slideAtual++;
        showSlide()
    }

    function showPrevSlide(){
        //Atualiza o slide atual
        _slideAtual--;
        showSlide()
    }

    function showSlide(){
        let numeroSLides = _this.itens.length;
        let slidex = _slideAtual % numeroSLides;
        console.log(slidex)
    }
}



