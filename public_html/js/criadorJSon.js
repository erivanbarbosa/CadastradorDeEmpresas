/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        function criar_json(form)
        {
            var json={
                "nome":form.empresa.value,
                "cnpj":form.cnpj.value,
                "cidade":form.cidade.value,
                "estado":form.estado.value,
                "data de criacao":form.criacao.value,
                "endereco":form.endereco.value

            };
            var html=JSON.stringify(json, null, 4);
            alert(html);
            return false;
    }


