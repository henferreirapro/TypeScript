import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log("Função testada")
    }
});
$('body').novaFuncao();