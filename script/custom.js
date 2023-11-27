        var qntd = 1;
       
        function process(n){
            let display = document.getElementById('display')
             qntd = qntd + n;
             max = 10;
             if(qntd > 1 && qntd < max+1){display.innerText = qntd} else if(qntd == 10 ){
                display.innerText = 10;
             } else {
                display.innerText = 1
                qntd = 1
             }
             return attSubTotal(qntd)
         }

         function attSubTotal(n){
            var subtotal = document.getElementById('value-calculado');
            var subDisplay= document.getElementById('subtotal')
            var  frete = document.getElementById('frete');
            var total = document.getElementById('total')

            let valorproduto = 60;
            let subtotalprodutos = valorproduto * n;
            let fretevalue = 30;
            let valortotal = subtotalprodutos + fretevalue
            subtotal.innerText = 'R$:'+subtotalprodutos;
            subDisplay.innerText = 'SUBTOTAL - R$:'+subtotalprodutos;
            total.innerText = 'TOTAL - R$:'+valortotal
         }

         