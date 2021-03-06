(function() {
    'use strict';

    angular
        .module('yapp.allowances')
        .controller('Allowances', Allowances)

    Allowances.$inject = ["$scope"];
    function Allowances($scope)
    {
        console.log('Allowances');
		$scope.mesadas = [
        { 
            id: 1, 
            beneficiarioDaMesada : 
            {  
                id: 1,
                nome: 'joão',
                telemovel: '918292839',
                morada: 'Rua Dr. alberto',
                nomeUtilizador: 'joao.14',
                email: 'joao@gmail.com',
                dataNascimento: '',
                dispositivoPrincipal: 
                {
                    id: 1,
                    numeroTelefone: '918292839',
                    autorizadoAProcessarPagamentos: true
                },
                autorizadoAFazerPedidosAContactos: true,
            }, 
            periodicidade : 'Mensal', 
            activa: true, 
            montante: 20, 
            movimentosdaMesada: 
            { 
                id: 1, 
                montante: 20, 
                balanco: 200, 
                data: '2014-12-12', 
                descricao: '', 
                tipoMovimento: 1, 
                estado: 'concluido', 
                nconta: 
                { 
                    id: 1 
                }
            } 
        },
        { 
            id: 2, 
            beneficiarioDaMesada : 
            {  
                id: 2,
                nome: 'joana',
                telemovel: '918292839',
                morada: 'Rua Dr. alberto',
                nomeUtilizador: 'joana.15',
                email: 'joana@gmail.com',
                dataNascimento: '',
                dispositivoPrincipal: 
                {
                    id: 1,
                    numeroTelefone: '918292840',
                    autorizadoAProcessarPagamentos: true
                },
                autorizadoAFazerPedidosAContactos: true,
            }, 
            periodicidade : 'Semanal', 
            activa: true, 
            montante: 5, 
            movimentosdaMesada: 
            { 
                id: 1, 
                montante: 10, 
                balanco: 100, 
                data: '2014-12-12', 
                descricao: '', 
                tipoMovimento: 1, 
                estado: 'concluido', 
                nconta: 
                { 
                    id: 1 
                }
            } 
        },
      ];      
    }

})();